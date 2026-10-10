import { useEffect, useMemo, useRef, useState } from 'react';
import type { EnquiryResult } from '../../lib/enquiry';

declare global {
  interface Window {
    tenEnquiry?: { submit: (data: Record<string, string>) => Promise<EnquiryResult> };
    tenToast?: (message: string) => void;
  }
}

/* -------------------------------------------------------------- booking data */

interface Slot {
  value: string;
  label: string;
  note: string;
}

interface Pkg {
  value: string;
  label: string;
  price: string;
  deposit: string;
  meta: string[];
}

const PACKAGES: Pkg[] = [
  {
    value: 'Portrait Hour — $340',
    label: 'Portrait Hour',
    price: '$340',
    deposit: '$102',
    meta: ['60 minutes', 'One look', '12 retouched frames'],
  },
  {
    value: 'Product Day — $1,150',
    label: 'Product Day',
    price: '$1,150',
    deposit: '$345',
    meta: ['Full day, 09:00–18:00', '40 retouched frames', 'Styling included'],
  },
  {
    value: 'Editorial — POA',
    label: 'Editorial',
    price: 'POA',
    deposit: 'Quoted',
    meta: ['Half day and up', 'Styling on request', 'Campaign and magazine'],
  },
];

const SHOOTS = ['People', 'Product', 'Interiors', 'Editorial'];

const PORTRAIT_SLOTS: Slot[] = [
  { value: '09:00', label: '09:00', note: 'earliest start' },
  { value: '11:00', label: '11:00', note: '' },
  { value: '14:00', label: '14:00', note: '' },
  { value: '16:00', label: '16:00', note: 'last start' },
];

const PRODUCT_SLOTS: Slot[] = [
  { value: '09:00 — full day', label: 'Full day', note: '09:00 to 18:00' },
];

const EDITORIAL_SLOTS: Slot[] = [
  { value: '09:00 — half day, morning', label: 'Morning', note: '09:00 to 13:00' },
  { value: '14:00 — half day, afternoon', label: 'Afternoon', note: '14:00 to 18:00' },
  { value: '09:00 — full day', label: 'Full day', note: '09:00 to 18:00' },
];

function slotsFor(pkgValue: string | null): Slot[] {
  if (!pkgValue) return [];
  if (pkgValue.startsWith('Product Day')) return PRODUCT_SLOTS;
  if (pkgValue.startsWith('Editorial')) return EDITORIAL_SLOTS;
  return PORTRAIT_SLOTS;
}

function pkgOf(value: string | null): Pkg | null {
  return PACKAGES.find((p) => p.value === value) ?? null;
}

/* ------------------------------------------------------------------ calendar */

interface DayCell {
  iso: string;
  dom: number;
  open: boolean;
  note: string;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function pad(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

function isoOf(y: number, m: number, d: number): string {
  return `${y}-${pad(m)}-${pad(d)}`;
}

function dayNumber(y: number, m: number, d: number): number {
  return Math.floor(Date.UTC(y, m - 1, d) / 86400000);
}

function strHash(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function todayIso(): string {
  const now = new Date();
  return isoOf(now.getFullYear(), now.getMonth() + 1, now.getDate());
}

function monthCells(y: number, m: number): (DayCell | null)[] {
  const today = todayIso();
  const firstDow = new Date(y, m - 1, 1).getDay(); // 0 Sun
  const lead = (firstDow + 6) % 7; // Monday-first
  const daysInMonth = new Date(y, m, 0).getDate();
  const cells: (DayCell | null)[] = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let dom = 1; dom <= daysInMonth; dom++) {
    const iso = isoOf(y, m, dom);
    const dow = new Date(y, m - 1, dom).getDay();
    const past = iso < today;
    const closed = dow < 2 || dow > 6; // studio runs Tuesday–Saturday
    const busy = !past && !closed && (dayNumber(y, m, dom) * 2654435761) % 13 < 3;
    const open = !past && !closed && !busy;
    let note = '';
    if (busy) note = 'full';
    else if (iso === today) note = 'tonight';
    else if (!past && !closed && (dayNumber(y, m, dom) - dayNumber(
      Number(today.slice(0, 4)),
      Number(today.slice(5, 7)),
      Number(today.slice(8, 10)),
    )) % 7 === 0) note = 'two left';
    cells.push({ iso, dom, open, note });
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function prettyDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function slotOpen(dateIso: string, index: number): boolean {
  return strHash(`${dateIso}#${index}`) % 4 !== 0;
}

function addDaysIso(iso: string, delta: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(y, m - 1, d + delta);
  return isoOf(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
}

/* ---------------------------------------------------------------- the wizard */

type Phase = 'idle' | 'sending' | 'sent';

const STEP_LABELS = ['Session', 'Date & time', 'Your details'];
const DOWS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

export function LumenBooking() {
  const now = new Date();
  const [step, setStep] = useState(1);
  const [pkgValue, setPkgValue] = useState<string | null>(null);
  const [shoot, setShoot] = useState<string | null>(null);
  const [month, setMonth] = useState(() => ({ y: now.getFullYear(), m: now.getMonth() + 1 }));
  const [date, setDate] = useState<string | null>(null);
  const [slotValue, setSlotValue] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [roving, setRoving] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [phase, setPhase] = useState<Phase>('idle');
  const [ticket, setTicket] = useState('');

  const formRef = useRef<HTMLFormElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastOpener = useRef<HTMLElement | null>(null);
  const mounted = useRef(false);

  const pkg = pkgOf(pkgValue);
  const slots = useMemo(() => slotsFor(pkgValue), [pkgValue]);
  const slot = slots.find((s) => s.value === slotValue) ?? null;
  const cells = useMemo(() => monthCells(month.y, month.m), [month]);

  const windowStart = now.getFullYear() * 12 + now.getMonth();
  const monthIndex = month.y * 12 + (month.m - 1);
  const canPrev = monthIndex > windowStart;
  const canNext = monthIndex < windowStart + 1;

  // keep roving tabindex on a focusable day
  useEffect(() => {
    if (date && cells.some((c) => c && c.iso === date && c.open)) {
      setRoving(date);
      return;
    }
    const first = cells.find((c) => c && c.open);
    setRoving(first ? first.iso : null);
  }, [cells, date]);

  // move focus to the panel when the step changes (not on first paint)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    panelRef.current?.focus();
  }, [step]);

  /* ---------------------------------------------------------- open / close */

  function openDialog() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    // an explanatory modal or the gallery lightbox may be open underneath
    const shared = document.getElementById('lp-modal');
    if (shared instanceof HTMLDialogElement && shared.open) shared.close();
    const closeBtn = document.querySelector<HTMLElement>(
      '.lightbox:not([hidden]) .lightbox__close'
    );
    closeBtn?.click();
    lastOpener.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    document.documentElement.style.overflow = 'hidden';
    panelRef.current?.focus();
  }

  function onDialogClose() {
    document.documentElement.style.overflow = '';
    const el = lastOpener.current;
    if (el && el.isConnected) el.focus({ preventScroll: true });
    lastOpener.current = null;
  }

  // every route into the booking — nav item, hero CTA, session row, package
  // card, modal link, lightbox CTA, footer deep link — opens the popup instead
  // of scrolling to a form that no longer exists
  useEffect(() => {
    const onClick = (event: Event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      const prefillEl = target.closest('[data-prefill]');
      const enquireLink = target.closest('a[href="#enquire"]');
      if (!prefillEl && !enquireLink) return;
      event.preventDefault();
      event.stopPropagation(); // suppress the shared toast and vanilla prefill
      if (prefillEl) {
        const spec = prefillEl.getAttribute('data-prefill') || '';
        let nextPkg: string | null = null;
        let nextShoot: string | null = null;
        let sawPkg = false;
        let sawShoot = false;
        spec.split(';').forEach((pair) => {
          const eq = pair.indexOf('=');
          if (eq < 1) return;
          const key = pair.slice(0, eq).trim();
          const value = pair.slice(eq + 1).trim();
          if (key === 'package' && PACKAGES.some((p) => p.value === value)) {
            nextPkg = value;
            sawPkg = true;
          }
          if (key === 'shoot' && SHOOTS.includes(value)) {
            nextShoot = value;
            sawShoot = true;
          }
        });
        if (sawPkg) {
          setPkgValue(nextPkg);
          setSlotValue(null); // the start-time set depends on the package
        }
        if (sawShoot) setShoot(nextShoot);
        if (sawPkg || sawShoot) {
          setErrors({});
          setFormError('');
          setStep(1);
        }
      }
      openDialog();
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // a deep link like /p/lumen#enquire (footer, shared URL) lands in the flow
  useEffect(() => {
    if (window.location.hash !== '#enquire') return undefined;
    const timer = window.setTimeout(() => openDialog(), 80);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const step1Ready = Boolean(pkgValue && shoot);
  const step2Ready = Boolean(date && slotValue);

  function pickPackage(value: string) {
    setPkgValue((cur) => (cur === value ? cur : value));
    setSlotValue(null); // the start-time set depends on the package
    setErrors({});
  }

  function shiftMonth(delta: number) {
    setMonth((cur) => {
      const total = cur.y * 12 + (cur.m - 1) + delta;
      return { y: Math.floor(total / 12), m: (total % 12) + 1 };
    });
  }

  function focusDay(iso: string) {
    const el = formRef.current?.querySelector<HTMLElement>(`[data-book-day][data-iso="${iso}"]`);
    if (el && !el.hasAttribute('disabled')) {
      setRoving(iso);
      el.focus();
    }
  }

  function onGridKey(event: React.KeyboardEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    const iso = target.getAttribute('data-iso');
    if (!iso || target.hasAttribute('disabled')) return;
    const [y, m, d] = iso.split('-').map(Number);
    const dow = (new Date(y, m - 1, d).getDay() + 6) % 7; // 0 = Monday
    let next: string;
    let delta = 0;
    switch (event.key) {
      case 'ArrowRight':
        next = addDaysIso(iso, 1);
        delta = 1;
        break;
      case 'ArrowLeft':
        next = addDaysIso(iso, -1);
        delta = -1;
        break;
      case 'ArrowDown':
        next = addDaysIso(iso, 7);
        delta = 7;
        break;
      case 'ArrowUp':
        next = addDaysIso(iso, -7);
        delta = -7;
        break;
      case 'Home':
        next = addDaysIso(iso, -dow);
        break;
      case 'End':
        next = addDaysIso(iso, 6 - dow);
        break;
      default:
        return;
    }
    event.preventDefault();
    // skip closed days in the direction of travel, bounded to two weeks
    for (let i = 0; i < 14; i++) {
      const el = formRef.current?.querySelector<HTMLElement>(`[data-book-day][data-iso="${next}"]`);
      if (el && !el.hasAttribute('disabled')) {
        focusDay(next);
        return;
      }
      if (delta === 0) return; // Home/End land on the bound, no skipping
      next = addDaysIso(next, delta);
    }
  }

  function validateClient(): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Required for the call sheet';
    if (!email.trim()) errs.email = 'We reply here — required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = 'Needs a valid email address';
    return errs;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation(); // the vanilla enquiry.js handler must not double-fire
    const errs = validateClient();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setFormError('Please check the highlighted fields.');
      const first = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }
    if (!pkg || !shoot || !date || !slot) {
      setFormError('Pick a package, a date and a start time first.');
      return;
    }
    setFormError('');
    setPhase('sending');
    try {
      const api = window.tenEnquiry;
      if (!api) throw new Error('enquiry api missing');
      const result = await api.submit({
        page: 'lumen',
        form: 'shoot',
        website: '',
        name: name.trim(),
        email: email.trim(),
        package: pkg.value,
        shoot,
        date,
        time: slot.value,
        notes: notes.trim(),
      });
      if (result.ok) {
        setTicket(result.ticket ?? '');
        setPhase('sent');
        const message = result.message || 'Date requested.';
        if (typeof window.tenToast === 'function') window.tenToast(message);
      } else {
        const map: Record<string, string> = {};
        (result.errors ?? []).forEach((issue) => {
          const key = issue.field === 'Email' ? 'email' : issue.field === 'Name' ? 'name' : issue.field.toLowerCase();
          map[key] = issue.message;
        });
        setErrors(map);
        setFormError(result.message || 'Something went wrong — please try again.');
        setPhase('idle');
      }
    } catch {
      setFormError('Something went wrong — please try again.');
      setPhase('idle');
    }
  }

  function reset() {
    setStep(1);
    setPkgValue(null);
    setShoot(null);
    setDate(null);
    setSlotValue(null);
    setName('');
    setEmail('');
    setNotes('');
    setErrors({});
    setFormError('');
    setPhase('idle');
    setTicket('');
    const cur = new Date();
    setMonth({ y: cur.getFullYear(), m: cur.getMonth() + 1 });
    panelRef.current?.focus();
  }

  /* ------------------------------------------------------------- call sheet */

  const sheetRows: [string, string, string?][] = [
    ['Session', pkg?.label ?? '—', pkg ? pkg.price : undefined],
    ['Type', shoot ?? '—'],
    ['Date', date ? prettyDate(date) : '—'],
    ['Start', slot ? slot.label : '—'],
    ['Duration', pkg ? pkg.meta[0] : '—'],
  ];
  const depositLine = pkg
    ? pkg.deposit === 'Quoted'
      ? 'Quoted with the estimate'
      : `${pkg.deposit} (30%)`
    : '—';

  /* ------------------------------------------------------------------ render */

  return (
    <>
      <section className="wrap lp-block" id="enquire">
        <div className="lu-invite">
          <div className="lu-invite__copy">
            <h2 className="section-title">Book a shoot</h2>
            <p className="lu-invite__lede">
              Give us the package and the date. We hold the slot for 48 hours while you confirm.
            </p>
          </div>
          <div className="lu-invite__act">
            <button
              type="button"
              className="lu-book__btn lu-book__btn--primary lu-book__btn--lg"
              aria-haspopup="dialog"
              onClick={openDialog}
            >
              Open the call sheet
            </button>
            <p className="lu-invite__note">
              Tuesday to Saturday, 09:00–18:00. Deposit refundable up to 48 hours before the
              shoot.
            </p>
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="lu-book-modal"
        aria-labelledby="lu-book-modal-title"
        onClose={onDialogClose}
      >
        <div className="lu-book__bar">
          <span className="lu-book__brand" id="lu-book-modal-title">
            Lumen Studio · Call sheet
          </span>
          {phase === 'sent' ? null : (
            <ol className="lu-book__steps" aria-label="Booking steps">
              {STEP_LABELS.map((label, i) => {
                const n = i + 1;
                const state = n === step ? 'current' : n < step ? 'done' : 'todo';
                return (
                  <li key={label}>
                    <button
                      type="button"
                      className="lu-book__step-btn"
                      data-state={state}
                      {...(state === 'current' ? { 'aria-current': 'step' as const } : {})}
                      disabled={state === 'todo' || phase === 'sending'}
                      onClick={() => state === 'done' && setStep(n)}
                    >
                      <span className="lu-book__step-n">{pad(n)}</span>
                      {label}
                    </button>
                  </li>
                );
              })}
            </ol>
          )}
          <form method="dialog" className="lu-book__close-wrap">
            <button className="lu-book__close" type="submit" value="close" aria-label="Close">
              &#10005;
            </button>
          </form>
        </div>

        <div className="lu-book-modal__scroll">
          <form
            ref={formRef}
            className="lu-book lu-book--modal"
            action="/api/enquiry"
            method="post"
            data-enquiry
            noValidate
            onSubmit={onSubmit}
          >
            <input type="hidden" name="page" value="lumen" />
            <input type="hidden" name="form" value="shoot" />
            <p className="lp-form__hp">
              <label htmlFor="lumen-hp">Leave this field empty</label>
              <input
                id="lumen-hp"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </p>
            <input type="hidden" name="package" value={pkgValue ?? ''} />
            <input type="hidden" name="shoot" value={shoot ?? ''} />
            <input type="hidden" name="date" value={date ?? ''} />
            <input type="hidden" name="time" value={slotValue ?? ''} />

            {phase === 'sent' ? (
              <div className="lu-book__done">
                <p className="lu-book__done-bar">Requested{ticket ? ` · ${ticket}` : ''}</p>
                <h3 className="lu-book__done-t" tabIndex={-1} ref={panelRef}>
                  Date requested
                </h3>
                <p className="lu-book__done-lede">
                  A confirmation and a short prep list follow — usually the same day.
                </p>
                <dl className="lu-book__rows lu-book__rows--done">
                  <div className="lu-book__row">
                    <dt>Session</dt>
                    <dd>{pkg?.label ?? '—'}</dd>
                  </div>
                  <div className="lu-book__row">
                    <dt>Type</dt>
                    <dd>{shoot ?? '—'}</dd>
                  </div>
                  <div className="lu-book__row">
                    <dt>Date</dt>
                    <dd>{date ? prettyDate(date) : '—'}</dd>
                  </div>
                  <div className="lu-book__row">
                    <dt>Start</dt>
                    <dd>{slot ? `${slot.label}${slot.note ? ` · ${slot.note}` : ''}` : '—'}</dd>
                  </div>
                  <div className="lu-book__row lu-book__row--deposit">
                    <dt>Deposit</dt>
                    <dd>{depositLine}</dd>
                  </div>
                </dl>
                <div className="lu-book__done-foot">
                  <button type="button" className="lu-book__btn lu-book__btn--ghost" onClick={reset}>
                    Book another date
                  </button>
                  <p className="lu-book__done-note">
                    The deposit is 30% and refundable up to 48 hours before the shoot.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="lu-book__body">
                  <div
                    className="lu-book__main"
                    key={step}
                    ref={panelRef}
                    tabIndex={-1}
                    aria-label={`Step ${step} of 3: ${STEP_LABELS[step - 1]}`}
                  >
                    <div className="lu-book__panel">
                      {step === 1 ? (
                        <>
                          <fieldset className="lu-book__group">
                            <legend className="lu-book__legend">Package</legend>
                            <div className="lu-book__cards" role="group">
                              {PACKAGES.map((p) => (
                                <button
                                  key={p.value}
                                  type="button"
                                  className="lu-book__card"
                                  aria-pressed={pkgValue === p.value}
                                  onClick={() => pickPackage(p.value)}
                                >
                                  <span className="lu-book__card-top">
                                    <span className="lu-book__card-name">{p.label}</span>
                                    <span className="lu-book__card-price">{p.price}</span>
                                  </span>
                                  <span className="lu-book__card-meta">
                                    {p.meta.map((line) => (
                                      <span key={line}>{line}</span>
                                    ))}
                                  </span>
                                  <span className="lu-book__card-dep">
                                    Deposit {p.deposit === 'Quoted' ? 'quoted' : `${p.deposit} · 30%`}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </fieldset>

                          <fieldset className="lu-book__group">
                            <legend className="lu-book__legend">Shoot type</legend>
                            <div className="lu-book__chips" role="group">
                              {SHOOTS.map((s) => (
                                <button
                                  key={s}
                                  type="button"
                                  className="lu-book__chip"
                                  aria-pressed={shoot === s}
                                  onClick={() => {
                                    setShoot(s);
                                    setErrors({});
                                  }}
                                >
                                  {s}
                                </button>
                              ))}
                            </div>
                          </fieldset>
                        </>
                      ) : null}

                      {step === 2 ? (
                        <>
                          <div className="lu-book__cal-head">
                            <h4 className="lu-book__cal-title" id="lu-book-month">
                              {MONTH_NAMES[month.m - 1]} {month.y}
                            </h4>
                            <div className="lu-book__cal-nav">
                              <button
                                type="button"
                                className="lu-book__nav"
                                aria-label="Previous month"
                                disabled={!canPrev || phase === 'sending'}
                                onClick={() => shiftMonth(-1)}
                              >
                                ←
                              </button>
                              <button
                                type="button"
                                className="lu-book__nav"
                                aria-label="Next month"
                                disabled={!canNext || phase === 'sending'}
                                onClick={() => shiftMonth(1)}
                              >
                                →
                              </button>
                            </div>
                          </div>
                          <div
                            className="lu-book__cal"
                            role="group"
                            aria-labelledby="lu-book-month"
                            onKeyDown={onGridKey}
                          >
                            <div className="lu-book__dows" aria-hidden="true">
                              {DOWS.map((d) => (
                                <span key={d}>{d}</span>
                              ))}
                            </div>
                            <div className="lu-book__grid">
                              {cells.map((cell, i) =>
                                cell ? (
                                  <button
                                    key={cell.iso}
                                    type="button"
                                    className="lu-book__day"
                                    data-book-day
                                    data-iso={cell.iso}
                                    tabIndex={roving === cell.iso ? 0 : -1}
                                    {...(cell.open
                                      ? { 'aria-pressed': date === cell.iso }
                                      : { disabled: true, 'aria-disabled': 'true' })}
                                    aria-label={prettyDate(cell.iso) + (cell.note ? `, ${cell.note}` : cell.open ? '' : ', unavailable')}
                                    onClick={() => {
                                      setDate(cell.iso);
                                      setSlotValue(null);
                                      setRoving(cell.iso);
                                      setErrors({});
                                    }}
                                  >
                                    <span className="lu-book__day-n">{cell.dom}</span>
                                    {cell.note ? (
                                      <span className="lu-book__day-note">{cell.note}</span>
                                    ) : null}
                                  </button>
                                ) : (
                                  <span key={`pad-${i}`} className="lu-book__day lu-book__day--pad" aria-hidden="true" />
                                ),
                              )}
                            </div>
                          </div>
                          <p className="lu-book__cal-note">
                            Tuesdays to Saturdays, 09:00 to 18:00. Mondays we edit — the board
                            starts again on Tuesday.
                          </p>

                          {date ? (
                            <fieldset className="lu-book__group lu-book__group--slots">
                              <legend className="lu-book__legend">
                                Start time — {prettyDate(date)}
                              </legend>
                              <div className="lu-book__chips" role="group">
                                {slots.map((s, i) => {
                                  const open = slotOpen(date, i);
                                  return (
                                    <button
                                      key={s.value}
                                      type="button"
                                      className="lu-book__chip lu-book__chip--slot"
                                      aria-pressed={slotValue === s.value}
                                      disabled={!open}
                                      onClick={() => {
                                        setSlotValue(s.value);
                                        setErrors({});
                                      }}
                                    >
                                      <span className="lu-book__chip-label">{s.label}</span>
                                      <span className="lu-book__chip-note">
                                        {open ? s.note || 'available' : 'taken'}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            </fieldset>
                          ) : (
                            <p className="lu-book__wait">Pick a day above and the start times appear here.</p>
                          )}
                        </>
                      ) : null}

                      {step === 3 ? (
                        <div className="lu-book__fields">
                          <div className="field">
                            <label className="field__label" htmlFor="lu-book-name">
                              Name <span className="field__req" aria-hidden="true">*</span>
                            </label>
                            <input
                              className="field__input"
                              id="lu-book-name"
                              name="name"
                              type="text"
                              autoComplete="name"
                              maxLength={80}
                              value={name}
                              aria-invalid={errors.name ? true : undefined}
                              onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) setErrors((cur) => ({ ...cur, name: '' }));
                              }}
                            />
                            {errors.name ? <p className="lu-book__err">{errors.name}</p> : null}
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="lu-book-email">
                              Email <span className="field__req" aria-hidden="true">*</span>
                            </label>
                            <input
                              className="field__input"
                              id="lu-book-email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              maxLength={120}
                              placeholder="you@example.com"
                              value={email}
                              aria-invalid={errors.email ? true : undefined}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors((cur) => ({ ...cur, email: '' }));
                              }}
                            />
                            {errors.email ? <p className="lu-book__err">{errors.email}</p> : null}
                          </div>
                          <div className="field field--wide">
                            <label className="field__label" htmlFor="lu-book-notes">
                              Brief
                            </label>
                            <textarea
                              className="field__input"
                              id="lu-book-notes"
                              name="notes"
                              maxLength={800}
                              placeholder="What you need the images for, deadlines, references…"
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <aside className="lu-book__rail" aria-label="Call sheet so far">
                    <p className="lu-book__sheet-k">
                      Call sheet <span aria-hidden="true">·</span> in progress
                    </p>
                    <dl className="lu-book__rows">
                      {sheetRows.map(([label, value, sub]) => (
                        <div key={label} className="lu-book__row">
                          <dt>{label}</dt>
                          <dd>
                            {value}
                            {sub ? <span className="lu-book__row-sub">{sub}</span> : null}
                          </dd>
                        </div>
                      ))}
                      <div className="lu-book__row lu-book__row--total">
                        <dt>Total</dt>
                        <dd>{pkg?.price ?? '—'}</dd>
                      </div>
                      <div className="lu-book__row lu-book__row--deposit">
                        <dt>Deposit</dt>
                        <dd>{depositLine}</dd>
                      </div>
                    </dl>
                    <p className="lu-book__sheet-note">
                      Deposit is refundable up to forty-eight hours before the shoot. Balance on
                      the day.
                    </p>
                  </aside>
                </div>

                <div className="lu-book__foot">
                  {step > 1 ? (
                    <button
                      type="button"
                      className="lu-book__btn lu-book__btn--ghost"
                      disabled={phase === 'sending'}
                      onClick={() => setStep(step - 1)}
                    >
                      Back
                    </button>
                  ) : null}

                  {step < 3 ? (
                    <button
                      type="button"
                      className="lu-book__btn lu-book__btn--primary"
                      disabled={(step === 1 ? !step1Ready : !step2Ready) || phase === 'sending'}
                      onClick={() => setStep(step + 1)}
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="lu-book__btn lu-book__btn--primary"
                      disabled={phase === 'sending'}
                    >
                      {phase === 'sending' ? 'Sending…' : 'Request this date'}
                    </button>
                  )}

                  <p className="lu-book__hint" role="status" aria-live="polite">
                    {formError
                      ? formError
                      : step === 1
                        ? step1Ready
                          ? ''
                          : 'Pick a package and a shoot type to continue.'
                        : step === 2
                          ? step2Ready
                            ? ''
                            : 'Pick a day and a start time to continue.'
                          : 'We hold the slot for 48 hours while you confirm.'}
                  </p>
                </div>
              </>
            )}
          </form>
        </div>
      </dialog>
    </>
  );
}
