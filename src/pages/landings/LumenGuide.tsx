import { useEffect, useRef, useState } from 'react';
import type { EnquiryResult } from '../../lib/enquiry';
import { asset } from '../../lib/asset';

declare global {
  interface Window {
    tenEnquiry?: { submit: (data: Record<string, string>) => Promise<EnquiryResult> };
    tenToast?: (message: string) => void;
  }
}

const SHOOT_OPTIONS = ['People', 'Product', 'Interiors', 'Editorial', 'Not sure yet'];

const SHEET: { title: string; items: string[] }[] = [
  {
    title: 'Before the day',
    items: [
      'Send a rough brief — dates, what the images are for, any references. A same-day reply with two or three dates and one fixed price.',
      'A 30% deposit takes the date off the board. Refundable up to 48 hours before the shoot; balance on the day.',
      'We work Tuesday to Saturday, 09:00 to 18:00. Mondays we edit.',
    ],
  },
  {
    title: 'What to bring',
    items: [
      'People: two looks if you like. There is a mirror, a steamer and a private corner to change in.',
      'Product: clean samples, colour references or physical chips, and packaging if it ships with the shot.',
      'Interiors: clear the surfaces you care about, or leave them as they live — both are valid.',
      'Props and wardrobe samples on the table by the window; we keep that table clear for you.',
    ],
  },
  {
    title: 'Shoot day',
    items: [
      'Come ten minutes early. The light is set once and held for the whole session.',
      'Tethered capture puts every frame on the house monitor — or your laptop — the moment it lands.',
      'Rush delivery by the next morning costs $120 when a deadline will not move.',
    ],
  },
  {
    title: 'After the shutter',
    items: [
      'Preview gallery within 48 hours.',
      'Retouched selects within five working days.',
      'Unlimited usage on delivered frames — web, print, paid social, packaging.',
    ],
  },
];

export function LumenGuide() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [shooting, setShooting] = useState('');
  const [phase, setPhase] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [ticket, setTicket] = useState('');
  const successRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (phase === 'sent') successRef.current?.focus();
  }, [phase]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const trimmed = email.trim();
    if (!trimmed) {
      setFieldError('Enter your email so we can send the sheet.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 120) {
      setFieldError('Use a full email address, like you@example.com.');
      return;
    }

    setFieldError('');
    setError('');
    setPhase('sending');

    try {
      const result = await window.tenEnquiry?.submit({
        page: 'lumen-guide',
        form: 'guide',
        email: trimmed,
        name: name.trim(),
        shooting,
      });

      if (!result) {
        setError('Unable to send right now. Try again in a moment.');
        setPhase('idle');
        return;
      }
      if (result.ok) {
        setTicket(result.ticket ?? '');
        setPhase('sent');
      } else {
        setError(result.message || 'Unable to send right now. Try again in a moment.');
        setPhase('idle');
      }
    } catch {
      setError('Unable to send right now. Try again in a moment.');
      setPhase('idle');
    }
  }

  return (
    <section className="wrap lp-block" id="guide" aria-labelledby="lu-guide-title">
      <div className="lu-guide">
        <div className="lu-guide__media" aria-hidden="true">
          <img
            src={asset("/assets/img/lumen/studio-light.jpg")}
            alt=""
            width={1600}
            height={1200}
            loading="eager"
            decoding="async"
          />
          <span className="lu-guide__media-cap">Contact sheet · prep day</span>
        </div>

        <div className="lu-guide__body">
          {phase === 'sent' ? (
            <div className="lu-guide__done" ref={successRef} tabIndex={-1}>
              <p className="lu-guide__kicker">
                Sheet ready{ticket ? ` · ${ticket}` : ''}
              </p>
              <h2 className="section-title" id="lu-guide-title">
                Shot prep sheet
              </h2>
              <p className="lu-guide__lede">
                The same list we send every client before a shoot. Keep it, print it, or send it to
                whoever is packing the samples.
              </p>
              <div className="lu-sheet">
                {SHEET.map((block) => (
                  <section key={block.title} className="lu-sheet__block">
                    <h3 className="lu-sheet__h">{block.title}</h3>
                    <ul className="lu-sheet__list">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
              <div className="lu-guide__after">
                <a className="btn btn--accent" href="#enquire">
                  Book a shoot
                </a>
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => {
                    setPhase('idle');
                    setEmail('');
                    setName('');
                    setShooting('');
                  }}
                >
                  Send to another address
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="lu-guide__kicker">Free · one page</p>
              <h2 className="section-title" id="lu-guide-title">
                Walk in with a shot list
              </h2>
              <p className="lu-guide__lede">
                Most shoots go sideways on the prep, not the shutter. Get the one-page sheet we send
                every client — what to bring, how to ready products, and exactly when frames land
                after the day.
              </p>

              <form
                className="lu-guide__form"
                action="/api/enquiry"
                method="post"
                data-enquiry
                noValidate
                onSubmit={onSubmit}
              >
                <input type="hidden" name="page" value="lumen-guide" />
                <input type="hidden" name="form" value="guide" />
                <p className="lp-form__hp">
                  <label htmlFor="lumen-guide-hp">Leave this field empty</label>
                  <input
                    id="lumen-guide-hp"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </p>

                <div className="field">
                  <label className="field__label" htmlFor="lumen-guide-email">
                    Email <span className="field__req" aria-hidden="true">*</span>
                  </label>
                  <input
                    className="field__input"
                    id="lumen-guide-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={120}
                    placeholder="you@example.com"
                    value={email}
                    aria-invalid={fieldError ? true : undefined}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (fieldError) setFieldError('');
                    }}
                  />
                  {fieldError ? <p className="lu-guide__err">{fieldError}</p> : null}
                </div>

                <div className="field">
                  <label className="field__label" htmlFor="lumen-guide-name">
                    Name <span className="lu-guide__opt">optional</span>
                  </label>
                  <input
                    className="field__input"
                    id="lumen-guide-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={80}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="field field--wide">
                  <label className="field__label" htmlFor="lumen-guide-shooting">
                    What are you shooting?
                  </label>
                  <select
                    className="field__input"
                    id="lumen-guide-shooting"
                    name="shooting"
                    value={shooting}
                    onChange={(e) => setShooting(e.target.value)}
                  >
                    <option value="">Optional</option>
                    {SHOOT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="lu-guide__actions">
                  <button
                    type="submit"
                    className="lu-book__btn lu-book__btn--primary"
                    disabled={phase === 'sending'}
                  >
                    {phase === 'sending' ? 'Sending…' : 'Send me the sheet'}
                  </button>
                  <p className="lu-guide__note" role="status" aria-live="polite">
                    {error
                      ? error
                      : 'One email with the sheet. Unsubscribe in one click.'}
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
