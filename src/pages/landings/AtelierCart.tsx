// million-ignore — bag drawer list updates crash Million's Text optimizer
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import * as cart from '../../lib/cart';
import type { EnquiryResult } from '../../lib/enquiry';

declare global {
  interface Window {
    tenEnquiry?: { submit: (data: Record<string, string>) => Promise<EnquiryResult> };
  }
}

function useCart() {
  return useSyncExternalStore(cart.subscribe, cart.getLines, cart.getLines);
}

/** Floating bag control + drawer with line items and checkout. */
export function AtelierCart() {
  const lines = useCart();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [phase, setPhase] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [ticket, setTicket] = useState('');
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  const count = cart.count();
  const sub = cart.subtotal();
  const ship = cart.shipping();
  const sum = cart.total();

  useEffect(() => {
    if (!open) return;
    wasOpen.current = true;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open && wasOpen.current) {
      wasOpen.current = false;
      document.querySelector<HTMLElement>('#capsule')?.focus?.();
    }
  }, [open]);

  // deep link #bag or page-level open event
  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onHash = () => {
      if (window.location.hash === '#bag') setOpen(true);
    };
    if (window.location.hash === '#bag') setOpen(true);
    window.addEventListener('atelier:open-bag', onOpen);
    window.addEventListener('hashchange', onHash);
    return () => {
      window.removeEventListener('atelier:open-bag', onOpen);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  function openBag(e?: React.MouseEvent) {
    e?.preventDefault();
    setOpen(true);
    if (window.location.hash !== '#bag') {
      history.replaceState(null, '', '#bag');
    }
  }

  function closeBag() {
    setOpen(false);
    if (window.location.hash === '#bag') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  async function onCheckout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    if (cart.count() === 0) {
      setFieldError('Your bag is empty — add a piece from the Winter Rail first.');
      return;
    }
    const trimmed = email.trim();
    if (!trimmed) {
      setFieldError('Enter your email so we can confirm the order.');
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
        page: 'atelier-order',
        form: 'order',
        email: trimmed,
        name: name.trim(),
        notes: notes.trim(),
        items: cart.summaryText(),
      });

      if (!result) {
        setError('Unable to place the order right now. Try again in a moment.');
        setPhase('idle');
        return;
      }
      if (result.ok) {
        setTicket(result.ticket ?? '');
        setPhase('sent');
        cart.clear();
      } else {
        setError(result.message || 'Unable to place the order right now.');
        setPhase('idle');
      }
    } catch {
      setError('Unable to place the order right now. Try again in a moment.');
      setPhase('idle');
    }
  }

  return (
    <>
      <button
        type="button"
        className="at-bag-icon"
        onClick={openBag}
        aria-haspopup="dialog"
        aria-controls="at-bag"
        aria-expanded={open}
        aria-label={`Open bag, ${count} ${count === 1 ? 'item' : 'items'}`}
      >
        <svg
          className="at-bag-icon__svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span
          className={`at-bag-icon__badge${count === 0 ? ' at-bag-icon__badge--empty' : ''}`}
          aria-hidden="true"
        >
          {count}
        </span>
      </button>

      {open ? (
        <div className="at-bag-root" role="presentation">
          <button
            type="button"
            className="at-bag__scrim"
            aria-label="Close bag"
            onClick={closeBag}
          />
          <div
            className="at-bag"
            id="at-bag"
            role="dialog"
            aria-modal="true"
            aria-labelledby="at-bag-title"
            ref={panelRef}
          >
            <div className="at-bag__bar">
              <p className="at-bag__brand">Atelier Noir · bag</p>
              <button
                type="button"
                className="at-bag__close"
                onClick={closeBag}
                ref={closeRef}
                aria-label="Close bag"
              >
                ✕
              </button>
            </div>

            <div className="at-bag__body">
              {phase === 'sent' ? (
                <div className="at-bag__done" tabIndex={-1}>
                  <p className="at-bag__kicker">{ticket ? `Order ${ticket}` : 'Order placed'}</p>
                  <h2 className="at-bag__title" id="at-bag-title">
                    We have your bag.
                  </h2>
                  <p className="at-bag__lede">
                    A confirmation is on its way. In-stock pieces leave the workshop within two
                    working days — paper and board, no plastic. Payment is captured when the piece
                    is packed, not before.
                  </p>
                  <div className="at-bag__done-actions">
                    <a className="btn btn--accent" href="#capsule" onClick={closeBag}>
                      Back to the rail
                    </a>
                    <button type="button" className="btn btn--ghost" onClick={closeBag}>
                      Close
                    </button>
                  </div>
                </div>
              ) : lines.length === 0 ? (
                <div className="at-bag__empty">
                  <p className="at-bag__kicker">Bag · empty</p>
                  <h2 className="at-bag__title" id="at-bag-title">
                    Nothing on the rail yet.
                  </h2>
                  <p className="at-bag__lede">
                    The Winter Rail is eight woollens deep. Add what you want held — nothing is charged
                    until it ships.
                  </p>
                  <a className="btn btn--accent" href="#capsule" onClick={closeBag}>
                    Shop the rail
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="at-bag__title" id="at-bag-title">
                    Your bag
                  </h2>
                  <ul className="at-bag__lines">
                    {lines.map((line) => (
                      <li key={line.id} className="at-bag__line">
                        <div className="at-bag__line-main">
                          <span className="at-bag__line-name">{line.name}</span>
                          <span className="at-bag__line-kind">{line.kind}</span>
                        </div>
                        <div className="at-bag__line-side">
                          <span className="at-bag__line-price">
                            {cart.money(line.price * line.qty)}
                          </span>
                          <div className="at-bag__qty" role="group" aria-label={`Quantity for ${line.name}`}>
                            <button
                              type="button"
                              className="at-bag__qty-btn"
                              onClick={() => cart.setQty(line.id, line.qty - 1)}
                              aria-label={`Decrease ${line.name}`}
                            >
                              −
                            </button>
                            <span className="at-bag__qty-val" aria-live="polite">
                              {line.qty}
                            </span>
                            <button
                              type="button"
                              className="at-bag__qty-btn"
                              onClick={() => cart.setQty(line.id, line.qty + 1)}
                              aria-label={`Increase ${line.name}`}
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            className="at-bag__remove"
                            onClick={() => cart.remove(line.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <dl className="at-bag__totals">
                    <div>
                      <dt>Subtotal</dt>
                      <dd>{cart.money(sub)}</dd>
                    </div>
                    <div>
                      <dt>Shipping</dt>
                      <dd>{ship === 0 ? 'Free' : cart.money(ship)}</dd>
                    </div>
                    <div className="at-bag__totals-sum">
                      <dt>Total</dt>
                      <dd>{cart.money(sum)}</dd>
                    </div>
                  </dl>
                  {ship > 0 ? (
                    <p className="at-bag__ship-note">
                      Free domestic shipping over {cart.money(cart.FREE_SHIP_OVER)} — add{' '}
                      {cart.money(cart.FREE_SHIP_OVER - sub)} more.
                    </p>
                  ) : (
                    <p className="at-bag__ship-note">
                      Free shipping. Two years of repairs included either way.
                    </p>
                  )}

                  <form className="at-bag__checkout" onSubmit={onCheckout} noValidate>
                    <input type="hidden" name="page" value="atelier-order" />
                    <input type="hidden" name="form" value="order" />
                    <p className="lp-form__hp">
                      <label htmlFor="at-bag-hp">Leave this field empty</label>
                      <input
                        id="at-bag-hp"
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        defaultValue=""
                      />
                    </p>

                    <label className="field">
                      <span className="field__label">
                        Email <span className="field__req">*</span>
                      </span>
                      <input
                        className="field__input"
                        type="email"
                        name="email"
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
                    </label>

                    <label className="field">
                      <span className="field__label">Name on the parcel</span>
                      <input
                        className="field__input"
                        type="text"
                        name="name"
                        autoComplete="name"
                        maxLength={80}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>

                    <label className="field field--wide">
                      <span className="field__label">
                        Delivery notes <span className="at-bag__opt">optional</span>
                      </span>
                      <textarea
                        className="field__input"
                        name="notes"
                        rows={2}
                        maxLength={400}
                        placeholder="Occasion, gift note, safe place…"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </label>

                    <input type="hidden" name="items" value={cart.summaryText()} />
                    <input type="hidden" name="subtotal" value={cart.money(sub)} />
                    <input type="hidden" name="total" value={cart.money(sum)} />

                    {fieldError ? (
                      <p className="at-bag__err" role="alert">
                        {fieldError}
                      </p>
                    ) : null}
                    {error ? (
                      <p className="at-bag__err" role="alert">
                        {error}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      className="btn btn--accent at-bag__submit"
                      disabled={phase === 'sending'}
                    >
                      {phase === 'sending' ? 'Placing order…' : `Place order · ${cart.money(sum)}`}
                    </button>
                    <p className="at-bag__fine">
                      Nothing is charged until the piece is packed. 30-day returns, free inside
                      the country. Made-to-order sizes are final sale — we flag them first.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
