import type { CSSProperties } from 'react';
import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { EnquiryForm } from '../../components/EnquiryForm';
import { atelier } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'atelier';
const BRAND = 'Atelier Noir';

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
  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/atelier"
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
            When a piece sells out, it is gone until next season.
          </p>
          <div className="hero__actions">
            <a className="btn btn--accent" href="#capsule">
              Shop the capsule
            </a>
            <a className="btn btn--ghost" href="#story">
              Our story
            </a>
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-atelier-1">
              How reservations work
            </button>
          </div>
        </section>

        <section className="wrap at-section" id="capsule">
          <div className="section-head">
            <h2 className="section-title">The capsule</h2>
            <p className="section-note">Six of the ten, in stock today.</p>
          </div>
          <div className="at-products">
            {atelier.products.map((product, i) => (
              <article
                key={product.name}
                className="at-product"
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
                <a
                  className="at-product__cta"
                  href="#enquire"
                  data-prefill={`piece=${product.name}`}
                >
                  Reserve <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-atelier-2">
              Shipping and delivery
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
                <h2 className="section-title">Lookbook — winter</h2>
                <p className="section-note">
                  Shot in the workshop against unfinished plaster. Styled with the pieces as they
                  actually fall.
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
              <h2 className="section-title">Two emails a year</h2>
              <p className="section-note">
                We write when a capsule drops, not every Thursday. Unsubscribe in one click.
              </p>
            </div>
            <a className="btn btn--accent" href="#enquire">
              Join the list
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

        <EnquiryForm slug={SLUG} />
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
