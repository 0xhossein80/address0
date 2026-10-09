import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { EnquiryForm } from '../../components/EnquiryForm';
import { haven } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'haven';
const BRAND = 'Haven & Vale';

/* Survey plates: frontage elevations drawn as line geometry, one per instruction. */
const LINE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'square' as const,
} as const;

const GLASS = {
  fill: 'currentColor',
  fillOpacity: 0.14,
  stroke: 'currentColor',
  strokeWidth: 1.25,
} as const;

function Elevation({ variant }: { variant: number }) {
  return (
    <svg className="ha-listing__elev" viewBox="0 0 160 86" aria-hidden="true">
      {variant === 0 && (
        <>
          <rect {...LINE} x="54" y="26" width="52" height="58" />
          <line {...LINE} x1="48" y1="26" x2="112" y2="26" />
          <line {...LINE} x1="54" y1="52" x2="106" y2="52" />
          <rect {...LINE} x="94" y="12" width="10" height="14" />
          <rect {...GLASS} x="62" y="32" width="14" height="14" />
          <rect {...GLASS} x="84" y="32" width="14" height="14" />
          <rect {...GLASS} x="62" y="56" width="14" height="12" />
          <rect {...GLASS} x="84" y="56" width="14" height="12" />
          <rect {...LINE} x="74" y="70" width="12" height="14" />
        </>
      )}
      {variant === 1 && (
        <>
          <rect {...LINE} x="38" y="38" width="84" height="46" />
          <line {...LINE} x1="34" y1="38" x2="126" y2="38" />
          <rect {...LINE} x="68" y="24" width="24" height="14" />
          <rect {...GLASS} x="70" y="26" width="20" height="10" />
          <rect {...GLASS} x="50" y="48" width="14" height="26" />
          <rect {...GLASS} x="73" y="48" width="14" height="26" />
          <rect {...GLASS} x="96" y="48" width="14" height="26" />
          <rect {...LINE} x="112" y="66" width="8" height="18" />
        </>
      )}
      {variant === 2 && (
        <>
          <rect {...LINE} x="48" y="46" width="64" height="38" />
          <polyline {...LINE} points="42,46 80,20 118,46" />
          <rect {...GLASS} x="74" y="32" width="12" height="10" />
          <rect {...GLASS} x="56" y="54" width="14" height="14" />
          <rect {...GLASS} x="90" y="54" width="14" height="14" />
          <rect {...LINE} x="74" y="68" width="12" height="16" />
        </>
      )}
      {variant === 3 && (
        <>
          <rect {...LINE} x="44" y="50" width="72" height="34" />
          <polyline {...LINE} points="38,50 80,34 122,50" />
          <rect {...LINE} x="64" y="62" width="32" height="22" />
          <line {...LINE} x1="69" y1="62" x2="69" y2="84" />
          <line {...LINE} x1="91" y1="62" x2="91" y2="84" />
          <rect {...LINE} x="74" y="68" width="12" height="16" />
          <rect {...GLASS} x="50" y="58" width="10" height="14" />
          <rect {...GLASS} x="100" y="58" width="10" height="14" />
        </>
      )}
    </svg>
  );
}

const TEMPLATE_1 = `
  <p class="modal__kicker">Haven &amp; Vale · the filter</p>
  <h2>Why these four, not forty</h2>
  <p>Any agency can take every instruction it is offered. We take the houses we can defend in a viewing, which means a walk-through before any sign goes up — and, once in a while, a straight no.</p>
  <ul>
    <li>Every instruction starts with a walk-through; if we would hesitate at the front door, we say so before you sign anything</li>
    <li>Unfinished, unloved or quietly falling apart? We walk away — photographs would not save the listing and neither would we</li>
    <li>Character over square footage is the filter: honest light, real bones and a floorplan with a point of view</li>
    <li>We cap how many homes we carry at once, so yours gets an agent who answers rather than a shared inbox</li>
    <li>If a house needs six months of work before it photographs well, we tell you that first and take it on after</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Book a walk-through</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <p class="modal__kicker">Haven &amp; Vale · the cards</p>
  <h2>Reading a listing before you view</h2>
  <p>Four cards, four sets of numbers. This is how we write them, what the figures leave out, and the two questions worth asking before anyone gets in the car.</p>
  <ul>
    <li>Size is measured wall to wall — ask for the floor plan first, because the same footage can be two deep rooms or five light ones</li>
    <li>Walk it twice: once at the pace of moving in, once opening every cupboard. The second walk catches what the photos skip</li>
    <li>Kind matters as much as beds: a warehouse conversion and a townhouse at one price run very different bills and upkeep</li>
    <li>We share the seller's timing only with their permission — ask, and we will tell you plainly what we can</li>
    <li>Service charges, lease length and parking rights hide in the small print; ask and we will spell all three out the same day</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#listings">See the four open</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <p class="modal__kicker">Haven &amp; Vale · off-market</p>
  <h2>Homes that never reach the portals</h2>
  <p>Some sellers want a sign, a shoot and a busy Saturday. Others want three qualified people through the door and no announcement at all. We run both kinds, quietly.</p>
  <ul>
    <li>A pocket list of buyers registers their budget and their streets; matches hear first, often before photography even starts</li>
    <li>Discreet instructions get proper photography, real visits and hard negotiation — only the advertising changes</li>
    <li>Relocations, probate sales and landlords who value their privacy use it most: moves that are better handled than advertised</li>
    <li>Nothing is shared beyond the shortlist: no mailing list, no teaser drop through the neighbours' doors</li>
    <li>If you are selling quietly, we will say honestly whether a pocket sale or a full launch gets you the better number</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Ask about the pocket list</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

export default function Haven() {
  const content = contentForSlug(SLUG);
  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/haven"
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-haven">
        <section className="wrap lp-hero ha-hero">
          <div className="ha-hero__frame ha-frame">
            <h1 className="ha-hero__title">
              Homes with
              <br />
              a point of view.
            </h1>
            <p className="ha-hero__lede">
              We only take on houses we would live in ourselves: lofts, townhouses, coastal builds
              and the odd architectural surprise.
            </p>
            <div className="hero__actions">
              <a className="btn btn--accent" href="#listings">
                View listings
              </a>
              <a className="btn btn--ghost" href="#enquire">
                Book a valuation
              </a>
            </div>
          </div>
          <div className="ha-hero__particulars ha-frame">
            <h2 className="ha-part__head">Particulars · the practice</h2>
            <dl className="ha-part__list">
              <div className="ha-part__row">
                <dt>Established</dt>
                <dd>2009</dd>
              </div>
              <div className="ha-part__row">
                <dt>Material</dt>
                <dd>Brick, glass, larch</dd>
              </div>
              <div className="ha-part__row">
                <dt>Detail</dt>
                <dd>Original floorboards</dd>
              </div>
              <div className="ha-part__row">
                <dt>Office</dt>
                <dd>14 Quay Street</dd>
              </div>
            </dl>
            <p className="ha-part__foot">Carried instructions, not listings taken.</p>
          </div>
        </section>

        <section className="wrap ha-section" id="listings">
          <div className="section-head">
            <h2 className="section-title">Currently showing</h2>
            <p className="section-note">Four homes open this weekend.</p>
          </div>
          <div className="ha-listings">
            {haven.listings.map((listing, i) => (
              <article key={listing.address} className="ha-listing">
                <div className="ha-listing__plate ha-frame">
                  <Elevation variant={i} />
                  <span className="ha-listing__dim" aria-hidden="true" />
                </div>
                <div className="ha-listing__caption">
                  <div className="ha-listing__head">
                    <span className="ha-listing__plate-no">
                      Plate {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="ha-listing__kind">{listing.kind}</span>
                  </div>
                  <h3 className="ha-listing__address">{listing.address}</h3>
                  <p className="ha-listing__meta">
                    <span className="ha-listing__area">{listing.area}</span>
                    <span className="ha-listing__price">{listing.price}</span>
                  </p>
                  <ul className="ha-listing__facts">
                    <li>
                      <strong>{listing.beds}</strong> bed
                    </li>
                    <li>
                      <strong>{listing.baths}</strong> bath
                    </li>
                    <li>
                      <strong>{listing.size}</strong>
                    </li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-haven-2">
              How to read a listing
            </button>
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-haven-1">
              How we pick what to list
            </button>
          </div>
        </section>

        <section className="ha-band" id="results">
          <div className="wrap ha-section">
            <div className="section-head section-head--light">
              <h2 className="section-title">What the numbers say</h2>
              <p className="section-note">Last twelve months, all suburbs.</p>
            </div>
            <div className="ha-stats">
              {haven.stats.map((stat) => (
                <div key={stat.label} className="ha-stat">
                  <span className="ha-stat__value">{stat.value}</span>
                  <span className="ha-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="wrap sig sig--haven"
          id="payment"
          data-sig="haven"
          aria-label="Monthly payment estimator"
        >
          <div className="ha-sheet">
            <div className="ha-sheet__head">
              <p className="sig__eyebrow">Particulars · affordability</p>
              <h2 className="sig__title">What would it cost monthly?</h2>
              <p className="ha-sheet__lede">
                Set the price, the deposit and the term. The repayments rewrite themselves — the
                same arithmetic a broker runs before an agreement in principle.
              </p>
            </div>
            <div className="ha-sheet__block">
              <span className="ha-sheet__cell">Haven &amp; Vale</span>
              <span className="ha-sheet__cell">Monthly payment</span>
              <span className="ha-sheet__cell ha-sheet__cell--mark">Indicative only</span>
            </div>
            <div className="ha-sheet__form">
              <p className="ha-field">
                <label className="ha-field__label" htmlFor="ha-price">
                  Asking price (£)
                </label>
                <input
                  className="ha-field__input"
                  type="number"
                  id="ha-price"
                  name="ha-price"
                  min={100000}
                  max={2000000}
                  step={5000}
                  defaultValue={450000}
                  inputMode="numeric"
                />
              </p>
              <p className="ha-field">
                <label className="ha-field__label" htmlFor="ha-deposit">
                  Deposit{' '}
                  <output className="ha-field__out" htmlFor="ha-deposit" data-out="dep-pct">
                    15%
                  </output>
                </label>
                <input
                  className="ha-field__range"
                  type="range"
                  id="ha-deposit"
                  name="ha-deposit"
                  min={1}
                  max={50}
                  step={1}
                  defaultValue={15}
                />
              </p>
              <p className="ha-field">
                <label className="ha-field__label" htmlFor="ha-term">
                  Term
                </label>
                <select className="ha-field__input" id="ha-term" name="ha-term" defaultValue="25">
                  <option value="10">10 years</option>
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                  <option value="25">25 years</option>
                  <option value="30">30 years</option>
                </select>
              </p>
              <p className="ha-field">
                <label className="ha-field__label" htmlFor="ha-rate">
                  Interest rate{' '}
                  <output className="ha-field__out" htmlFor="ha-rate" data-out="rate-pct">
                    4.6%
                  </output>
                </label>
                <input
                  className="ha-field__range"
                  type="range"
                  id="ha-rate"
                  name="ha-rate"
                  min={3}
                  max={8}
                  step={0.1}
                  defaultValue={4.6}
                />
              </p>
              <div className="ha-quick" role="group" aria-label="Quick deposits">
                <span className="ha-quick__hint">Deposit presets</span>
                <button type="button" className="ha-quick__btn" data-act="dep" data-dep="10">
                  10%
                </button>
                <button type="button" className="ha-quick__btn" data-act="dep" data-dep="20">
                  20%
                </button>
                <button type="button" className="ha-quick__btn" data-act="dep" data-dep="30">
                  30%
                </button>
              </div>
            </div>
            <div className="ha-sheet__ledger" aria-live="polite">
              <div className="ha-row ha-row--lead">
                <span className="ha-row__label">Estimated monthly payment</span>
                <span className="ha-row__value" data-out="monthly">
                  £2,148
                </span>
              </div>
              <div className="ha-row">
                <span className="ha-row__label">Deposit needed</span>
                <span className="ha-row__value" data-out="deposit-amount">
                  £67,500
                </span>
              </div>
              <div className="ha-row">
                <span className="ha-row__label">Total interest over the term</span>
                <span className="ha-row__value" data-out="interest">
                  £261,848
                </span>
              </div>
              <div className="ha-row">
                <span className="ha-row__label">Loan to value</span>
                <span className="ha-row__value" data-out="ltv">
                  85%
                </span>
              </div>
            </div>
            <div className="ha-sheet__foot">
              <p className="ha-sheet__note">
                Indicative only — not a mortgage offer, agreement in principle or financial advice.
              </p>
              <a className="btn btn--accent" href="#enquire">
                Talk through the numbers
              </a>
            </div>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />

        <div className="wrap">
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-haven-3">
              The off-market list
            </button>
          </div>
        </div>

        <EnquiryForm slug={SLUG} />
      </main>

      <template id="tpl-haven-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-haven-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-haven-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />
    </Page>
  );
}
