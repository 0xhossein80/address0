// million-ignore — cart-driven text swaps crash Million's Text optimizer
import { useEffect, useSyncExternalStore, type CSSProperties } from 'react';
import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { atelier } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';
import { AtelierCart } from './AtelierCart';
import * as cart from '../../lib/cart';

const SLUG = 'atelier';
const BRAND = 'Atelier Noir';
const OG_IMAGE = '/assets/img/atelier/field-coat.jpg';

const TEMPLATE_1 = `
  <p class="modal__kicker">Atelier Noir · reservations</p>
  <h2>Reserve now, decide later</h2>
  <p>A capsule is cut in short runs, so the piece you are looking at may be one of forty. Reserving holds it while you go and measure yourself properly — no card is touched at the moment you press the button.</p>
  <ul>
    <li>Press Reserve and the piece is held for 48 hours; the confirmation email follows, still nothing charged</li>
    <li>Holds lapse quietly at the deadline and the piece returns to the floor — nothing sits backordered in your name</li>
    <li>Made-to-order sizes are flagged at checkout before you pay, when a roll of cloth is still left to cut them from</li>
    <li>A hold can be moved to another piece in the same capsule — reply to the email and we shift it</li>
    <li>Payment runs on card or Apple Pay, captured when the piece is packed, not when you reserve it</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Reserve a piece</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <p class="modal__kicker">Atelier Noir · delivery</p>
  <h2>Where the parcel goes</h2>
  <p>Orders leave the workshop twice a week in paper and board, never plastic. This is the whole journey from your confirmation to your door, including the two parts that catch first-time buyers out.</p>
  <ul>
    <li>In-stock pieces are packed and posted within two working days of the order</li>
    <li>Delivery inside the country takes three to four working days, and orders over $120 ship free</li>
    <li>Parcels travel in recycled board with paper tape — no plastic and no gift box you would only bin</li>
    <li>International orders show duties at checkout, so nothing is collected from you at the door</li>
    <li>Add the occasion to the order note if it is a gift; we reply before we pack, not after it ships</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Ask about delivery</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <p class="modal__kicker">Atelier Noir · pricing</p>
  <h2>Why you will never see a sale</h2>
  <p>Deadstock cloth is bought once, in the length a capsule needs, at the price the mill asked that week. The ticket follows the cloth — which is why a piece costs the same in December as it did in April.</p>
  <ul>
    <li>Tickets are set the week the cloth is bought and stay put for the life of the capsule</li>
    <li>No seasonal markdowns, no discount codes, no sale you have to wait for</li>
    <li>Two years of repairs are already inside the price — buttons, seams and elbows, nothing invoiced</li>
    <li>Pieces that do not sell through retire with the capsule instead of being cut cheaper to clear</li>
    <li>Nothing is priced upward for scarcity either: a piece that returns costs what it cost the first time</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Join the list</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

export default function Atelier() {
  const content = contentForSlug(SLUG);
  const lines = useSyncExternalStore(cart.subscribe, cart.getLines, cart.getLines);
  const bagCount = lines.reduce((n, l) => n + l.qty, 0);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const link = target?.closest<HTMLElement>('a[data-at-bag], button[data-at-bag]');
      if (!link) return;
      e.preventDefault();
      e.stopPropagation();
      // AtelierCart listens for this; hash also opens via #bag
      window.dispatchEvent(new CustomEvent('atelier:open-bag'));
      if (window.location.hash !== '#bag') {
        history.replaceState(null, '', '#bag');
      }
    }
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/atelier"
      image={OG_IMAGE}
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-atelier">
        <section className="wrap lp-hero at-hero">
          <h1 className="at-hero__title">
            Ten pieces.
            <br />
            Twice a year.
            <br />
            <em>No waste.</em>
          </h1>
          <div className="at-hero__rule" aria-hidden="true" />
          <div className="at-dim">
            <span className="at-dim__ann at-dim__ann--l">Deadstock cotton</span>
            <span className="at-dim__ann at-dim__ann--c">Capsule 07 · out now</span>
            <span className="at-dim__ann at-dim__ann--r">Traceable wool</span>
            <span className="at-dim__line" aria-hidden="true">
              <span className="at-dim__tick at-dim__tick--l" />
              <span className="at-dim__tick at-dim__tick--c" />
              <span className="at-dim__tick at-dim__tick--r" />
            </span>
          </div>
          <p className="at-hero__lede">
            Cut from deadstock cotton and traceable wool in a workshop we can name on the label.
            Ten pieces a capsule. Twice a year. When one sells out, it is gone until next season.
          </p>
          <div className="hero__actions">
            <a className="btn btn--accent" href="#capsule">
              Shop Capsule 07
            </a>
            <a className="btn btn--ghost" href="#bag" data-at-bag>
              Open bag{bagCount > 0 ? ` (${bagCount})` : ''}
            </a>
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-atelier-1">
              How reservations work
            </button>
          </div>
        </section>

        <section className="wrap at-section" id="capsule">
          <div className="section-head">
            <h2 className="section-title">Capsule 07 — in stock</h2>
            <p className="section-note">
              Six of the ten pieces on the rail today. Add to bag — nothing is charged until it
              ships. Orders over $120 ship free.
            </p>
          </div>
          <div className="at-products">
            {atelier.products.map((product, i) => {
              const id = product.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
              const qty = cart.qtyOf(id);
              return (
                <article
                  key={product.name}
                  className={`at-product${qty > 0 ? ' at-product--inbag' : ''}`}
                  style={{ '--swatch': product.swatch } as CSSProperties}
                >
                  <div className="at-product__meta">
                    <span className="at-product__piece">
                      Piece {String(i + 1).padStart(2, '0')} / 10
                    </span>
                  </div>
                  <div
                    className="at-product__visual"
                    style={{ '--swatch': product.swatch } as CSSProperties}
                    aria-hidden="true"
                  >
                    <span className="at-product__tag">{product.kind}</span>
                  </div>
                  <div className="at-product__row">
                    <h3 className="at-product__name">{product.name}</h3>
                    <span className="at-product__price">{product.price}</span>
                  </div>
                  <button
                    type="button"
                    className="at-product__cta"
                    onClick={() => cart.add(product)}
                    aria-label={
                      qty > 0
                        ? `Add another ${product.name} to bag (${qty} in bag)`
                        : `Add ${product.name} to bag`
                    }
                  >
                    {/* stable span — only className/text change, never remount */}
                    <span className={qty > 0 ? 'at-product__cta-done' : 'at-product__cta-add'}>
                      {qty > 0 ? `In bag · ${qty} — add more` : 'Add to bag'}
                    </span>
                    <span aria-hidden="true">+</span>
                  </button>
                </article>
              );
            })}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-atelier-2">
              Shipping and delivery
            </button>
            <button type="button" className="btn btn--ghost" data-at-bag>
              Open bag{bagCount > 0 ? ` (${bagCount})` : ''}
            </button>
          </div>
        </section>

        <section className="at-band" id="lookbook">
          <div className="wrap at-section">
            <div className="at-look">
              <button
                className="at-look__frame"
                type="button"
                data-lightbox
                data-lightbox-title="Look 03"
                data-lightbox-tag="Capsule 07"
                data-lightbox-text="The field coat over the rollneck, shot against unfinished plaster in the workshop."
              >
                <span>LOOK 03</span>
              </button>
              <button
                className="at-look__frame at-look__frame--alt"
                type="button"
                data-lightbox
                data-lightbox-title="Look 07"
                data-lightbox-tag="Capsule 07"
                data-lightbox-text="Poplin shirt with the pleated trouser, worn loose — nothing pressed, nothing styled twice."
              >
                <span>LOOK 07</span>
              </button>
              <div className="at-look__copy">
                <h2 className="section-title">Winter lookbook</h2>
                <p className="section-note">
                  Shot in the workshop against unfinished plaster. Styled with the pieces as they
                  actually fall — nothing pressed twice, nothing borrowed from a rail.
                </p>
                <details className="at-look__more">
                  <summary className="btn btn--ghost btn--on-dark">View all looks</summary>
                  <ul className="at-look__list">
                    <li>
                      <strong>Look 01</strong> — Poplin shirt under the wool overshirt, sleeves
                      rolled twice.
                    </li>
                    <li>
                      <strong>Look 04</strong> — Merino rollneck with the pleated trouser and the
                      tote.
                    </li>
                    <li>
                      <strong>Look 07</strong> — Shirt and trouser alone: the whole capsule in two
                      pieces.
                    </li>
                    <li>
                      <strong>Look 10</strong> — Field coat belted over everything, collar up, one
                      cold morning.
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap at-section at-cloth" id="cloth" aria-labelledby="at-cloth-title">
          <div className="at-cloth__media">
            <img
              src="/assets/img/atelier/wool-cloth.jpg"
              alt=""
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
            />
            <span className="at-cloth__cap">Wool · Portugal · Capsule 07</span>
          </div>
          <div className="at-cloth__copy">
            <p className="at-cloth__kicker">The cloth</p>
            <h2 className="at-cloth__title" id="at-cloth-title">
              No sale.
              <br />
              <em>Ever.</em>
            </h2>
            <p className="at-cloth__lede">
              Deadstock cloth is bought once — the length a capsule needs, at the price the mill
              asked that week. The ticket follows the cloth.
            </p>
            <p className="at-cloth__body">
              A Field Coat costs the same in December as it did in April. Two years of repairs sit
              inside every price. Pieces that do not sell through retire with the capsule instead
              of being cut cheaper to clear. Nothing is marked up for scarcity either.
            </p>
            <div className="at-cloth__actions">
              <button type="button" className="btn btn--ghost" data-modal-open="tpl-atelier-3">
                Why nothing goes on sale
              </button>
              <a className="at-cloth__link" href="#capsule">
                Shop the capsule <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="wrap at-section" id="story">
          <div className="at-stats">
            {atelier.stats.map((stat) => (
              <div key={stat.label} className="at-stat">
                <span className="at-stat__value">{stat.value}</span>
                <span className="at-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="at-cta">
            <div>
              <h2 className="section-title">
                {bagCount > 0
                  ? `${bagCount} piece${bagCount === 1 ? '' : 's'} in the bag`
                  : 'Ready when you are'}
              </h2>
              <p className="section-note">
                {bagCount > 0
                  ? 'Review the bag, add a delivery note, and we pack within two working days. Payment runs when the piece is packed.'
                  : 'Add Capsule 07 pieces to the bag. Free shipping over $120, two years of repairs, 30-day returns. Nothing is charged until it ships.'}
              </p>
            </div>
            <a className="btn btn--accent" href="#bag" data-at-bag>
              {bagCount > 0 ? `Review bag · ${cart.money(cart.subtotal())}` : 'Open bag'}
            </a>
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-atelier-3">
              Why nothing goes on sale
            </button>
          </div>
        </section>

        <section
          className="wrap sig sig--atelier"
          id="fit"
          data-sig="atelier"
          aria-label="Size finder"
        >
          <div className="at-card">
            <div className="at-card__head">
              <p className="sig__eyebrow">Find your cut</p>
              <h2 className="sig__title">Your size, off the tape</h2>
              <p className="at-card__lede">
                Height, how you like a piece to sit, and the cloth. The card works it out the way
                the workroom does — off the body, never off the hanger.
              </p>
            </div>
            <div className="at-card__grid">
              <div className="at-controls">
                <div className="at-height">
                  <label className="at-height__label" htmlFor="at-height">
                    Height{' '}
                    <output className="at-height__value" htmlFor="at-height" data-out="height">
                      170cm
                    </output>
                  </label>
                  <input
                    className="at-height__range"
                    type="range"
                    id="at-height"
                    name="at-height"
                    min={150}
                    max={195}
                    step={1}
                    defaultValue={170}
                  />
                  <div className="at-height__ends" aria-hidden="true">
                    <span>150cm</span>
                    <span>195cm</span>
                  </div>
                </div>
                <fieldset className="at-fitset">
                  <legend className="at-fitset__legend">Fit</legend>
                  <label className="at-chip">
                    <input type="radio" name="at-fit" value="cropped" /> <span>Cropped</span>
                  </label>
                  <label className="at-chip">
                    <input type="radio" name="at-fit" value="slim" /> <span>Slim</span>
                  </label>
                  <label className="at-chip">
                    <input type="radio" name="at-fit" value="regular" defaultChecked />{' '}
                    <span>Regular</span>
                  </label>
                  <label className="at-chip">
                    <input type="radio" name="at-fit" value="relaxed" /> <span>Relaxed</span>
                  </label>
                </fieldset>
                <div className="at-cloth">
                  <p className="at-cloth__label" id="at-cloth-label">
                    Cloth
                  </p>
                  <div className="at-cloth__row" role="group" aria-labelledby="at-cloth-label">
                    <button
                      type="button"
                      className="at-swatch is-on"
                      data-act="swatch"
                      data-tone="#1c1416"
                      aria-pressed="true"
                    >
                      <span
                        className="at-swatch__chip"
                        style={{ background: '#1c1416' }}
                        aria-hidden="true"
                      />
                      Ink
                    </button>
                    <button
                      type="button"
                      className="at-swatch"
                      data-act="swatch"
                      data-tone="#e8e2d9"
                      aria-pressed="false"
                    >
                      <span
                        className="at-swatch__chip"
                        style={{ background: '#e8e2d9' }}
                        aria-hidden="true"
                      />
                      Bone
                    </button>
                    <button
                      type="button"
                      className="at-swatch"
                      data-act="swatch"
                      data-tone="#47503f"
                      aria-pressed="false"
                    >
                      <span
                        className="at-swatch__chip"
                        style={{ background: '#47503f' }}
                        aria-hidden="true"
                      />
                      Moss
                    </button>
                    <button
                      type="button"
                      className="at-swatch"
                      data-act="swatch"
                      data-tone="#5a1f2b"
                      aria-pressed="false"
                    >
                      <span
                        className="at-swatch__chip"
                        style={{ background: '#5a1f2b' }}
                        aria-hidden="true"
                      />
                      Wine
                    </button>
                  </div>
                </div>
              </div>
              <div className="at-result" aria-live="polite">
                <div className="at-result__stage">
                  <div className="at-garment" aria-hidden="true" />
                </div>
                <div className="at-specs">
                  <p className="at-spec">
                    <span className="at-spec__key">Size</span>
                    <span className="at-spec__val" data-out="size">
                      M
                    </span>
                  </p>
                  <p className="at-spec">
                    <span className="at-spec__key">Length</span>
                    <span className="at-spec__val" data-out="length">
                      72cm
                    </span>
                  </p>
                  <p className="at-spec">
                    <span className="at-spec__key">Sleeve</span>
                    <span className="at-spec__val" data-out="sleeve">
                      64cm
                    </span>
                  </p>
                </div>
                <p className="at-note" data-out="fit-note">
                  Straight from the shoulder, nothing pinned.
                </p>
              </div>
            </div>
            <div className="at-card__cta">
              <a className="btn btn--accent" href="#enquire">
                Book a fitting
              </a>
              <a className="at-card__guide" href="/p/atelier/sizing">
                The sizing guide <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />

        <AtelierCart />
      </main>

      <template id="tpl-atelier-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-atelier-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-atelier-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />

      <dialog
        className="lp-modal"
        id="popup-atelier"
        data-popup
        data-popup-key="lp-popup-atelier"
        data-popup-delay="6500"
        aria-labelledby="popup-atelier-title"
      >
        <div className="lp-modal__bar">
          <span className="lp-modal__brand">Atelier Noir · capsule 08</span>
          <form method="dialog">
            <button className="lp-modal__close" type="submit" value="close" aria-label="Dismiss">
              ✕
            </button>
          </form>
        </div>
        <div className="lp-modal__body">
          <p className="modal__kicker">Atelier Noir · the waitlist</p>
          <h2 id="popup-atelier-title">Capsule 08 closes to the floor on Friday</h2>
          <p>
            The wool pieces from this capsule are cut in one run and the run is nearly spoken for.
            Waitlist names go first when the final sizes land on the rail.
          </p>
          <ul>
            <li>Waitlist gets 24 hours of private access before the floor opens</li>
            <li>No deposit, no minimum — you are asked, not charged</li>
            <li>Repairs and alterations are included either way</li>
          </ul>
          <div className="modal__actions">
            <a className="btn btn--accent" href="#enquire">
              Join the waitlist
            </a>
            <button type="button" className="btn btn--ghost" data-modal-close>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </Page>
  );
}
