import { useMemo, useState } from 'react';
import type { EnquiryResult } from '../../lib/enquiry';

declare global {
  interface Window {
    tenEnquiry?: { submit: (data: Record<string, string>) => Promise<EnquiryResult> };
    tenToast?: (message: string) => void;
  }
}

/* ------------------------------------------------------------------- data */

interface Table {
  id: number;
  seats: number;
  taken: boolean;
}

interface Floor {
  id: string;
  label: string;
  tables: Table[];
}

const FLOORS: Floor[] = [
  {
    id: 'hearth',
    label: 'Hearth room',
    tables: [
      { id: 1, seats: 2, taken: false },
      { id: 2, seats: 2, taken: false },
      { id: 3, seats: 4, taken: false },
      { id: 4, seats: 4, taken: true },
      { id: 5, seats: 2, taken: false },
      { id: 6, seats: 6, taken: false },
      { id: 7, seats: 4, taken: true },
      { id: 8, seats: 2, taken: false },
    ],
  },
  {
    id: 'bar',
    label: 'Bar',
    tables: [
      { id: 9, seats: 2, taken: false },
      { id: 10, seats: 2, taken: true },
      { id: 11, seats: 2, taken: false },
      { id: 12, seats: 4, taken: false },
    ],
  },
  {
    id: 'mezzanine',
    label: 'Mezzanine',
    tables: [
      { id: 13, seats: 2, taken: false },
      { id: 14, seats: 4, taken: false },
      { id: 15, seats: 4, taken: true },
      { id: 16, seats: 6, taken: false },
    ],
  },
  {
    id: 'terrace',
    label: 'Terrace',
    tables: [
      { id: 17, seats: 2, taken: false },
      { id: 18, seats: 2, taken: false },
      { id: 19, seats: 4, taken: true },
      { id: 20, seats: 2, taken: false },
      { id: 21, seats: 4, taken: false },
    ],
  },
];

const SITTINGS = [
  '18:00 — first seating',
  '20:30 — second seating',
  '22:00 — late plates',
  'Sunday lunch, 12:00–15:00',
  'No preference',
];

const HOLD_PER_GUEST = 20;

/* ---------------------------------------------------------------- helpers */

function pad(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function prettyDate(iso: string): string {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function money(n: number): string {
  return `$${n.toFixed(2)}`;
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/* ----------------------------------------------------------------- pieces */

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M19 12H5m0 0 6-6m-6 6 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="m6 12.5 4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** One table on the floor plan: seat ticks above and below a numbered top. */
function TableButton({
  table,
  selected,
  onSelect,
}: {
  table: Table;
  selected: boolean;
  onSelect: () => void;
}) {
  const topSeats = Math.ceil(table.seats / 2);
  const bottomSeats = Math.floor(table.seats / 2);
  const seats = (n: number, key: string) =>
    Array.from({ length: n }, (_, i) => (
      <span key={`${key}-${i}`} className="sa-tbl__seat" aria-hidden="true" />
    ));

  return (
    <button
      type="button"
      className={`sa-tbl${selected ? ' is-on' : ''}${table.taken ? ' is-taken' : ''}`}
      aria-pressed={selected}
      aria-disabled={table.taken || undefined}
      aria-label={
        table.taken
          ? `Table ${table.id}, ${table.seats} seats, taken`
          : `Table ${table.id}, ${table.seats} seats`
      }
      onClick={() => {
        if (!table.taken) onSelect();
      }}
    >
      <span className="sa-tbl__seats sa-tbl__seats--top">{seats(topSeats, 't')}</span>
      <span className="sa-tbl__body">
        {table.id}
        {selected ? (
          <span className="sa-tbl__check" aria-hidden="true">
            <CheckIcon />
          </span>
        ) : null}
      </span>
      <span className="sa-tbl__seats sa-tbl__seats--bottom">{seats(bottomSeats, 'b')}</span>
    </button>
  );
}

/* ---------------------------------------------------------------- wizard */

export function SaffronBooking() {
  const [step, setStep] = useState(1);
  const [phase, setPhase] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [floorId, setFloorId] = useState(FLOORS[0].id);
  const [tableId, setTableId] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [sitting, setSitting] = useState('');
  const [party, setParty] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [ticket, setTicket] = useState('');

  const floor = FLOORS.find((f) => f.id === floorId) ?? FLOORS[0];
  const table = useMemo(
    () => floor.tables.find((t) => t.id === tableId) ?? null,
    [floor, tableId],
  );

  const partyOptions = useMemo(() => {
    const cap = Math.min(8, table?.seats ?? 8);
    return Array.from({ length: cap }, (_, i) => String(i + 1));
  }, [table]);

  const subtotal = (Number(party) || 0) * HOLD_PER_GUEST;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  function pickFloor(id: string) {
    setFloorId(id);
    setTableId(null);
  }

  function goDetails() {
    if (!table) {
      setFormError('Pick a table first.');
      return;
    }
    setFormError('');
    setStep(2);
  }

  function goSummary(event?: React.FormEvent) {
    event?.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = 'We need a name for the table.';
    if (!email.trim() || !looksLikeEmail(email.trim())) next.email = 'A valid email, so we can confirm.';
    if (!phone.trim()) next.phone = 'A number in case the fire runs late.';
    if (!date) next.date = 'Pick a date.';
    if (!sitting) next.sitting = 'Pick a sitting.';
    if (!party) next.party = 'How many of you?';
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setFormError('Please check the highlighted fields.');
      return;
    }
    setFormError('');
    setStep(3);
  }

  async function payAndReserve() {
    setFormError('');
    setPhase('sending');
    try {
      const api = window.tenEnquiry;
      if (!api) throw new Error('enquiry api missing');
      const result = await api.submit({
        page: 'saffron',
        form: 'reservation',
        website: '',
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        date,
        seating: sitting,
        party,
        notes: notes.trim(),
        table: table ? `Table ${table.id}` : '',
        floor: floor.label,
      });
      if (result.ok) {
        setTicket(result.ticket ?? '');
        setPhase('sent');
        if (typeof window.tenToast === 'function') {
          window.tenToast(result.message || 'Table held.');
        }
      } else {
        const map: Record<string, string> = {};
        (result.errors ?? []).forEach((issue) => {
          map[issue.field.toLowerCase()] = issue.message;
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
    setPhase('idle');
    setFloorId(FLOORS[0].id);
    setTableId(null);
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setSitting('');
    setParty('');
    setNotes('');
    setErrors({});
    setFormError('');
    setTicket('');
  }

  /* -------------------------------------------------------------- summary */

  const summaryRows: [string, string][] = [
    ['Name', name || '—'],
    ['Phone number', phone || '—'],
    ['Email', email || '—'],
    ['Date', prettyDate(date)],
    ['Sitting', sitting || '—'],
    ['Guests', party || '—'],
    ['Table', table ? `Table ${table.id} · ${floor.label}` : '—'],
  ];

  const railVisible = phase !== 'sent' && step < 3;

  /* --------------------------------------------------------------- render */

  const title = phase === 'sent' ? 'Table held' : step === 1 ? 'Select table' : step === 2 ? 'Your details' : 'Order summary';

  return (
    <section className="wrap lp-block" id="enquire">
      <div className="section-head">
        <h2 className="section-title">Hold a table</h2>
        <p className="section-note">
          Pick the table, leave the details, pay the hold — it comes off the bill.
        </p>
      </div>

      <div className="sa-book">
        <div className="sa-book__card">
          <div className="sa-book__top">
            <button
              type="button"
              className="sa-book__back"
              aria-label={step === 1 ? 'Back (first step)' : 'Go back a step'}
              disabled={step === 1 || phase === 'sending'}
              onClick={() => setStep((s) => Math.max(1, s - 1))}
            >
              <BackIcon />
            </button>
            <div
              className="sa-book__prog"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={3}
              aria-valuenow={step}
              aria-label={`Step ${step} of 3`}
            >
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`sa-book__prog-seg${n <= step ? ' is-on' : ''}`}
                  tabIndex={n < step && phase !== 'sent' ? 0 : -1}
                  aria-label={`Step ${n}`}
                  disabled={n >= step || phase === 'sent'}
                  onClick={() => n < step && setStep(n)}
                />
              ))}
            </div>
          </div>

          <div className={`sa-book__panes${railVisible ? ' has-rail' : ''}`}>
            <div className="sa-book__main">
              {phase === 'sent' ? (
                <div className="sa-book__done">
                  <span className="sa-book__done-mark" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <p className="sa-book__done-ticket">{ticket || 'Held'}</p>
                  <p className="sa-book__done-line">
                    {table ? `Table ${table.id} · ${floor.label}` : ''} · {prettyDate(date)} ·{' '}
                    {sitting.split(' — ')[0]} · {party} {Number(party) === 1 ? 'guest' : 'guests'}
                  </p>
                  <p className="sa-book__done-note">
                    A hold of {money(total)} is on its way to your card — it comes straight off the
                    bill. We email the confirmation within the hour during opening times.
                  </p>
                  <button type="button" className="btn btn--accent sa-book__cta" onClick={reset}>
                    Book another table
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="sa-book__title">{title}</h3>

              {step === 1 ? (
                <>
                  <div className="sa-book__floors" role="tablist" aria-label="Floors">
                    {FLOORS.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        role="tab"
                        aria-selected={f.id === floorId}
                        className={`sa-book__floor${f.id === floorId ? ' is-on' : ''}`}
                        onClick={() => pickFloor(f.id)}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                  <div className="sa-book__map">
                    {floor.tables.map((t) => (
                      <TableButton
                        key={t.id}
                        table={t}
                        selected={t.id === tableId}
                        onSelect={() => {
                          setTableId(t.id);
                          setFormError('');
                          if (Number(party) > t.seats) setParty('');
                        }}
                      />
                    ))}
                  </div>
                  <p className="sa-book__hint">
                    {table
                      ? `Table ${table.id} in the ${floor.label.toLowerCase()} — ${table.seats} seats.`
                      : 'Greyed tables are taken tonight.'}
                  </p>
                  <button
                    type="button"
                    className="btn btn--accent sa-book__cta"
                    onClick={goDetails}
                  >
                    Reserve a table
                  </button>
                </>
              ) : null}

              {step === 2 ? (
                <form className="sa-book__fields" onSubmit={goSummary} noValidate>
                  <div className="sa-book__field">
                    <label className="sa-book__label" htmlFor="sa-bk-name">
                      Full name
                    </label>
                    <input
                      id="sa-bk-name"
                      className="sa-book__input"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      autoComplete="name"
                      aria-invalid={errors.name ? true : undefined}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name ? <p className="sa-book__err">{errors.name}</p> : null}
                  </div>

                  <div className="sa-book__field">
                    <label className="sa-book__label" htmlFor="sa-bk-phone">
                      Phone number
                    </label>
                    <input
                      id="sa-bk-phone"
                      className="sa-book__input"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      autoComplete="tel"
                      aria-invalid={errors.phone ? true : undefined}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone ? <p className="sa-book__err">{errors.phone}</p> : null}
                  </div>

                  <div className="sa-book__field">
                    <label className="sa-book__label" htmlFor="sa-bk-email">
                      Email
                    </label>
                    <input
                      id="sa-bk-email"
                      className="sa-book__input"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      autoComplete="email"
                      aria-invalid={errors.email ? true : undefined}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email ? <p className="sa-book__err">{errors.email}</p> : null}
                  </div>

                  <div className="sa-book__field">
                    <label className="sa-book__label" htmlFor="sa-bk-party">
                      Number of person
                    </label>
                    <select
                      id="sa-bk-party"
                      className="sa-book__input sa-book__input--select"
                      value={party}
                      aria-invalid={errors.party ? true : undefined}
                      onChange={(e) => setParty(e.target.value)}
                    >
                      <option value="">How many person will attend</option>
                      {partyOptions.map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                    {errors.party ? <p className="sa-book__err">{errors.party}</p> : null}
                  </div>

                  <div className="sa-book__row">
                    <div className="sa-book__field">
                      <label className="sa-book__label" htmlFor="sa-bk-date">
                        Date to come
                      </label>
                      <input
                        id="sa-bk-date"
                        className="sa-book__input"
                        type="date"
                        min={todayIso()}
                        placeholder="Select date"
                        value={date}
                        aria-invalid={errors.date ? true : undefined}
                        onChange={(e) => setDate(e.target.value)}
                      />
                      {errors.date ? <p className="sa-book__err">{errors.date}</p> : null}
                    </div>
                    <div className="sa-book__field">
                      <label className="sa-book__label" htmlFor="sa-bk-sitting">
                        Time to come
                      </label>
                      <select
                        id="sa-bk-sitting"
                        className="sa-book__input sa-book__input--select"
                        value={sitting}
                        aria-invalid={errors.sitting ? true : undefined}
                        onChange={(e) => setSitting(e.target.value)}
                      >
                        <option value="">Select time</option>
                        {SITTINGS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.sitting ? <p className="sa-book__err">{errors.sitting}</p> : null}
                    </div>
                  </div>

                  <div className="sa-book__field sa-book__field--wide">
                    <label className="sa-book__label" htmlFor="sa-bk-notes">
                      Notes
                    </label>
                    <textarea
                      id="sa-bk-notes"
                      className="sa-book__input sa-book__input--area"
                      placeholder="e.g. Please provide 2 baby chairs…"
                      rows={4}
                      maxLength={800}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  {formError ? (
                    <p className="sa-book__err sa-book__err--form" role="alert">
                      {formError}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="btn btn--accent sa-book__cta"
                    disabled={phase === 'sending'}
                  >
                    Continue
                  </button>
                </form>
              ) : null}

              {step === 3 ? (
                <>
                  <dl className="sa-book__summary">
                    {summaryRows.map(([label, value]) => (
                      <div key={label} className="sa-book__srow">
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <dl className="sa-book__totals">
                    <div className="sa-book__srow">
                      <dt>Subtotal</dt>
                      <dd>{money(subtotal)}</dd>
                    </div>
                    <div className="sa-book__srow">
                      <dt>Tax</dt>
                      <dd>{money(tax)}</dd>
                    </div>
                    <div className="sa-book__srow sa-book__srow--grand">
                      <dt>Grand total</dt>
                      <dd>{money(total)}</dd>
                    </div>
                  </dl>
                  {formError ? (
                    <p className="sa-book__err sa-book__err--form" role="alert">
                      {formError}
                    </p>
                  ) : null}
                  <button
                    type="button"
                    className="btn btn--accent sa-book__cta"
                    onClick={payAndReserve}
                    disabled={phase === 'sending'}
                  >
                    {phase === 'sending' ? 'Reserving…' : 'Pay and Reserve'}
                  </button>
                </>
              ) : null}
              </>
            )}
            </div>

            {railVisible ? (
              <aside className="sa-book__rail" aria-label="Your hold so far">
                <p className="sa-book__rail-kicker">Your hold</p>
                <dl className="sa-book__rail-list">
                  <div className="sa-book__srow">
                    <dt>Table</dt>
                    <dd>{table ? `#${table.id}` : '—'}</dd>
                  </div>
                  <div className="sa-book__srow">
                    <dt>Room</dt>
                    <dd>{table ? floor.label : '—'}</dd>
                  </div>
                  <div className="sa-book__srow">
                    <dt>Guests</dt>
                    <dd>{party || '—'}</dd>
                  </div>
                  <div className="sa-book__srow">
                    <dt>Date</dt>
                    <dd>{date ? prettyDate(date).replace(/ \d{4}$/, '') : '—'}</dd>
                  </div>
                  <div className="sa-book__srow">
                    <dt>Sitting</dt>
                    <dd>{sitting ? sitting.split(' — ')[0] : '—'}</dd>
                  </div>
                </dl>
                <p className="sa-book__rail-total">
                  <span>Hold</span>
                  <strong>{party ? money(total) : '—'}</strong>
                </p>
                <p className="sa-book__rail-note">Comes off the bill.</p>
              </aside>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
