import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { EnquiryForm } from '../../components/EnquiryForm';
import { brightside } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'brightside';
const BRAND = 'Brightside Dental';

const TEMPLATE_1 = `
  <h2>Chipped, swollen or suddenly hurting?</h2>
  <p>We keep slots back every weekday morning for teeth that cannot wait. Knowing what counts as an emergency — and what can be booked like everything else — saves you a day of guessing.</p>
  <ul>
    <li>Call before 11:00 and, if it is urgent, you are seen the same weekday; two morning slots are held back for exactly this</li>
    <li>Knocked a tooth out? Keep it in milk, do not scrub the root, and get here — the first hour decides whether it goes back in</li>
    <li>Swelling travelling toward your eye or your throat is hospital territory, not ours: go there first and tell us after</li>
    <li>A lost crown is not an emergency, but it is a same-week visit — we would rather re-cement it than meet the tooth underneath</li>
    <li>After 17:00 the desk message covers what to take and when to come in, so nobody lies awake deciding</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Tell us what happened</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <h2>Which of the three does the job?</h2>
  <p>Three of the four prices on this page solve different problems, and only one of them is about colour. Here is how we decide between them before anyone picks up a mirror.</p>
  <ul>
    <li>Whitening changes shade only: if the position and shape of your teeth are fine, trays at home are the whole answer</li>
    <li>Aligners move teeth — crowded or gapped smiles take months of trays changed at home, with us checking the progress</li>
    <li>A crown is for a tooth, not a smile: cracked, heavily filled or root-treated teeth get one when a filling would not hold</li>
    <li>Order matters: get the position right, then whiten — colour on crooked teeth still reads crooked</li>
    <li>Torn between two? Say so in the form and we will answer with two options and the one we would pick for our own family</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Ask which one fits</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <h2>Getting your insurer to pay</h2>
  <p>Dental cover is mostly a paperwork sport, and we play our side of it. Here is what lands in your inbox after treatment, and the two documents that stop anybody having to chase.</p>
  <ul>
    <li>Every invoice carries the itemised treatment codes insurers ask for, so nothing has to be re-keyed or clarified</li>
    <li>For larger treatment we write a pre-treatment estimate you can forward before you commit; most insurers reply inside a week</li>
    <li>You pay at the appointment and claim back with that day's paperwork — where a policy allows direct settlement, the desk sets it up at booking</li>
    <li>Check-ups, hygiene and children's visits are the codes most plans cover first; cosmetics usually are not, and we will say so before you book</li>
    <li>Changing insurer mid-treatment? Tell us and we re-sequence the plan so your cover still counts where it can</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Ask about cover</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

export default function Brightside() {
  const content = contentForSlug(SLUG);
  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/brightside"
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-brightside">
        <section className="wrap lp-hero br-hero">
          <div className="br-hero__copy">
            <h1 className="br-hero__title">Care that makes you smile before you sit down.</h1>
            <p className="br-hero__lede">
              Brightside is a calm practice with clear prices. You will always be told what a
              treatment costs before it starts, and what it can wait for.
            </p>
            <div className="hero__actions">
              <a className="btn btn--accent" href="#enquire">
                Book an appointment
              </a>
              <a className="btn btn--ghost" href="#services">
                See prices
              </a>
            </div>
            <p className="br-hero__note">
              New patients welcome
              <span className="br-hero__sep" aria-hidden="true" />
              most Saturdays open
              <span className="br-hero__sep" aria-hidden="true" />
              <button
                type="button"
                className="br-link"
                data-modal-open="tpl-brightside-1"
              >
                Same-day emergency slots
              </button>
            </p>
          </div>
          <figure className="br-hero__plate">
            <figcaption className="br-plate__head">
              <span className="br-plate__label">Sample card</span>
              <span className="br-glaze" aria-hidden="true" />
            </figcaption>
            <ul className="br-plate__list">
              <li className="br-swatch">
                <span className="br-swatch__tile br-swatch__tile--enamel" />
                <span className="br-swatch__name">enamel</span>
              </li>
              <li className="br-swatch">
                <span className="br-swatch__tile br-swatch__tile--glaze" />
                <span className="br-swatch__name">glaze</span>
              </li>
              <li className="br-swatch">
                <span className="br-swatch__tile br-swatch__tile--depth" />
                <span className="br-swatch__name">translucent</span>
              </li>
            </ul>
            <div className="br-plate__foot">Brightside Dental</div>
          </figure>
        </section>

        <section className="wrap br-section" id="services">
          <div className="section-head">
            <h2 className="section-title">Treatments & prices</h2>
            <p className="section-note">Published prices, because guessing is stressful.</p>
          </div>
          <div className="br-services">
            {brightside.services.map((service) => (
              <article key={service.name} className="br-service">
                <div className="br-service__head">
                  <h3 className="br-service__name">{service.name}</h3>
                  <span className="br-service__price">{service.price}</span>
                </div>
                <p className="br-service__detail">{service.detail}</p>
                <a
                  className="br-service__book"
                  href="#enquire"
                  data-prefill={`treatment=${service.name}`}
                >
                  Book this
                </a>
              </article>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-brightside-2">
              Whitening, aligners or a crown?
            </button>
          </div>
        </section>

        <section className="br-band" id="visit">
          <div className="wrap br-section">
            <div className="section-head section-head--light">
              <h2 className="section-title">Your first visit</h2>
              <p className="section-note">Thirty-five minutes, no lecture included.</p>
            </div>
            <ol className="br-steps">
              <li>
                <strong>Chat</strong> — what you want, what you are worried about.
              </li>
              <li>
                <strong>Look</strong> — full exam, X-rays only if you need them.
              </li>
              <li>
                <strong>Plan</strong> — a written plan with prices, take it home.
              </li>
            </ol>
            <div className="br-stats">
              {brightside.stats.map((stat) => (
                <div key={stat.label} className="br-stat">
                  <span className="br-stat__value">{stat.value}</span>
                  <span className="br-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="wrap sig sig--brightside"
          id="triage"
          data-sig="brightside"
          aria-label="Emergency triage checker"
        >
          <div className="bt-card">
            <div className="bt-card__head">
              <h2 className="sig__title">Do you need to be seen today?</h2>
              <p className="bt-card__lede">
                Three quick questions, answered the way the desk answers them when you ring. It
                tells you how soon to come in — never what is wrong.
              </p>
            </div>
            <div className="bt-card__form">
              <fieldset className="bt-issue">
                <legend className="bt-legend">What is going on?</legend>
                <label className="bt-choice">
                  <input type="radio" name="br-issue" value="knocked-out" />
                  <span>A tooth got knocked out</span>
                </label>
                <label className="bt-choice">
                  <input type="radio" name="br-issue" value="swelling" />
                  <span>There is swelling</span>
                </label>
                <label className="bt-choice">
                  <input type="radio" name="br-issue" value="toothache" defaultChecked />
                  <span>It is aching</span>
                </label>
                <label className="bt-choice">
                  <input type="radio" name="br-issue" value="chip" />
                  <span>Something chipped or broke</span>
                </label>
                <label className="bt-choice">
                  <input type="radio" name="br-issue" value="checkup" />
                  <span>Nothing — a routine check-up</span>
                </label>
              </fieldset>
              <p className="bt-scale">
                <label className="bt-scale__label" htmlFor="br-pain">
                  How much does it hurt? <output htmlFor="br-pain" data-out="pain">3</output> out of
                  10
                </label>
                <input
                  className="bt-scale__range"
                  type="range"
                  id="br-pain"
                  name="br-pain"
                  min="0"
                  max="10"
                  step="1"
                  defaultValue="3"
                />
                <output className="bt-scale__severity" htmlFor="br-pain" data-out="severity">
                  Noticeable
                </output>
              </p>
              <label className="bt-bleed">
                <input type="checkbox" name="br-bleed" />
                <span>It won't stop bleeding</span>
              </label>
              <div className="bt-actions">
                <button type="button" className="bt-reset" data-act="reset">
                  Start the questions again
                </button>
              </div>
            </div>
            <div className="bt-card__out" aria-live="polite">
              <div className="bt-verdict bt-verdict--soon" data-out="verdict">
                <h3>Book in the next couple of days.</h3>
                <p>
                  Book within 48 hours — we will get you out of pain first, then fix the cause.
                </p>
                <a className="btn btn--accent" href="#enquire">
                  Request an appointment
                </a>
              </div>
            </div>
            <p className="bt-call">
              If in doubt, call the surgery — <a href="tel:5550100">555 0100</a>, weekdays from
              08:00 and Saturday mornings.
            </p>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />

        <div className="wrap">
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-brightside-3">
              Insurance and claiming back
            </button>
          </div>
        </div>

        <EnquiryForm slug={SLUG} />
      </main>

      <template id="tpl-brightside-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-brightside-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-brightside-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />
    </Page>
  );
}
