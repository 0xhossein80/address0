import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { EnquiryForm } from '../../components/EnquiryForm';
import { roastery } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'roastery';
const BRAND = 'Ember & Oak';

const TEMPLATE_1 = `
  <p class="modal__kicker">Ember &amp; Oak · first bag</p>
  <h2>Three roasts, three kinds of drinker</h2>
  <p>The names do not tell you much, so here is the short version: one of these is a milk coffee, one wants a filter, and one is the house compromise. Start with the one that matches how you actually drink it, not the one with the prettiest bag.</p>
  <ul>
    <li>Milk first? Take Harbour Blend — it stays chocolatey under a flat white instead of disappearing into it</li>
    <li>Black or filter? Night Porter is the fruit-forward one, and the one the tasting table argues about most</li>
    <li>Slow Sunday is the forgiving bag: still good on the third morning of the same lazy pour</li>
    <li>Buy two different origins and drink them side by side on the same morning — the fastest way to find out what you actually like</li>
    <li>All three sit between light and medium: no char, no sour. Coming off supermarket dark roast? Start with Harbour</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Get a recommendation</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <p class="modal__kicker">Ember &amp; Oak · tasting</p>
  <h2>How to taste what you are drinking</h2>
  <p>You do not need a score sheet or a mouthful of spittoons. Four minutes and two cups on the same table will tell you more about a coffee than a paragraph of tasting notes ever will.</p>
  <ul>
    <li>Brew both cups the same way, same water, same grind — change only the coffee in the filter</li>
    <li>Smell the dry grounds first; most of what people call flavour arrives before the water does</li>
    <li>First sip hot, second as it cools: washed coffees get brighter and naturals get sweeter as they drop</li>
    <li>Write one word per cup — the words on the bag are suggestions, not a test you can fail</li>
    <li>Keep a plain cracker or a slice of bread between cups; coffee lingers on your tongue longer than you think</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#roasts">Shop this week's roasts</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <p class="modal__kicker">Ember &amp; Oak · gifting</p>
  <h2>Coffee for someone else</h2>
  <p>Birthdays, thank-yous, the colleague who owns a grinder but never buys beans. A bag travels better than most presents, and you do not have to guess their shirt size to send one.</p>
  <ul>
    <li>Add a note in the form and we handwrite it on the packing card — no invoice ever goes inside the box</li>
    <li>Gift subscriptions run one, three or six months and stop on their own; nobody is charged after the last bag</li>
    <li>Prices stay off the parcel, so a $19 bag does not arrive announcing itself</li>
    <li>Choose the Thursday it starts and the first bag leaves with that week's roast, not whenever the order cleared</li>
    <li>Stuck? Tell us roughly what they drink — dark, fruity, milky — and we will name two bags for the budget</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Send a gift bag</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

export default function Roastery() {
  const content = contentForSlug(SLUG);
  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/roastery"
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-roastery">
        <section className="wrap lp-hero ro-hero">
          <div className="ro-hero__copy">
            <p className="ro-hero__badge">Roasted Thursdays · shipped Fridays</p>
            <h1 className="ro-hero__title">
              Small batches,
              <br />
              big mornings.
            </h1>
            <p className="ro-hero__lede">
              We buy one lot at a time, roast it on a 12kg drum and write the date on the bag
              ourselves. Coffee that tastes like someone was paying attention.
            </p>
            <div className="hero__actions">
              <a className="btn btn--accent" href="#roasts">
                Shop the roasts
              </a>
              <a className="btn btn--ghost" href="#subscribe">
                Subscription
              </a>
              <button type="button" className="btn btn--quiet" data-modal-open="tpl-roastery-1">
                Choosing your first bag
              </button>
            </div>
          </div>
          <div className="ro-hero__docket">
            <div className="ro-docket">
              <div className="ro-docket__head">
                <p className="ro-docket__title">Batch docket</p>
                <p className="ro-docket__ref">No. EO-042</p>
              </div>
              <dl className="ro-docket__rows">
                <div className="ro-docket__row">
                  <dt>Origin</dt>
                  <dd>Huila, Colombia</dd>
                </div>
                <div className="ro-docket__row">
                  <dt>Altitude</dt>
                  <dd>1,750 m.a.s.l.</dd>
                </div>
                <div className="ro-docket__row">
                  <dt>Process</dt>
                  <dd>Washed</dd>
                </div>
                <div className="ro-docket__row">
                  <dt>Roast date</dt>
                  <dd>Thursday · 12 kg drum</dd>
                </div>
                <div className="ro-docket__row">
                  <dt>Roast level</dt>
                  <dd>Light to medium</dd>
                </div>
                <div className="ro-docket__row">
                  <dt>Dispatch</dt>
                  <dd>Friday morning</dd>
                </div>
              </dl>
              <p className="ro-docket__foot">
                Every bag is stamped with its roast date before it leaves the bench.
              </p>
            </div>
            <p className="ro-stamp">
              <span className="ro-stamp__line">Batch 042</span>
              <span className="ro-stamp__line">Roasted &middot; Thu</span>
            </p>
          </div>
        </section>

        <section className="wrap ro-strip" aria-label="Highlights">
          <div className="stat">
            <span className="stat__value">Thu</span>
            <span className="stat__label">Roast day, every week</span>
          </div>
          <div className="stat">
            <span className="stat__value">12kg</span>
            <span className="stat__label">Drum, batch size</span>
          </div>
          <div className="stat">
            <span className="stat__value">48h</span>
            <span className="stat__label">Bean to doorstep</span>
          </div>
        </section>

        <section className="wrap ro-section" id="roasts">
          <div className="section-head">
            <h2 className="section-title">This week's roasts</h2>
            <p className="section-note">Three lots, all roasted in the last seven days.</p>
          </div>
          <div className="ro-grid">
            {roastery.roasts.map((roast) => (
              <article key={roast.name} className="ro-card">
                <p className="ro-card__origin">{roast.origin}</p>
                <h3 className="ro-card__name">{roast.name}</h3>
                <p className="ro-card__notes">{roast.notes}</p>
                <p className="ro-card__price">
                  {roast.price} <span>/ 250g</span>
                </p>
              </article>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-roastery-2">
              Taste it like we do
            </button>
          </div>
        </section>

        <div className="ro-band">
          <section className="wrap ro-section" id="subscribe">
            <div className="section-head section-head--light">
              <h2 className="section-title">Never run out</h2>
              <p className="section-note">
                Pause, skip or swap from the email we send before each dispatch.
              </p>
            </div>
            <div className="ro-plans">
              {roastery.plans.map((plan) => (
                <article key={plan.name} className={`plan${plan.featured ? ' plan--featured' : ''}`}>
                  <p className="plan__name">{plan.name}</p>
                  <p className="plan__price">{plan.price}</p>
                  <p className="plan__detail">{plan.detail}</p>
                  {plan.featured ? <p className="plan__tag">Most subscribed</p> : null}
                  <a
                    className="plan__cta"
                    href="#enquire"
                    data-prefill={`plan=${plan.name} — ${plan.price}`}
                  >
                    Choose {plan.name}
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="wrap ro-section" id="brew">
          <div className="section-head">
            <h2 className="section-title">Brew it properly</h2>
            <p className="section-note">The recipe we use on the cupping table.</p>
          </div>
          <ol className="ro-steps">
            <li>
              <strong>18g</strong> coffee, ground medium-fine.
            </li>
            <li>
              <strong>280g</strong> water at 94°C, straight off the boil.
            </li>
            <li>
              <strong>Bloom</strong> 45 seconds, then pour in two circles.
            </li>
            <li>
              <strong>2:45</strong> total. Drink it black first time.
            </li>
          </ol>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-roastery-3">
              Sending coffee as a gift
            </button>
          </div>
        </section>

        <section
          className="wrap sig sig--roastery"
          id="dialler"
          data-sig="roastery"
          aria-label="Brew recipe calculator"
        >
          <div className="rb-dial">
            <div className="rb-dial__head">
              <h2 className="sig__title">Your recipe, to the gram</h2>
              <p className="rb-dial__lede">
                Pick how you brew and how many cups. The numbers move as you do — the same
                maths we run on the cupping table every Friday.
              </p>
            </div>
            <fieldset className="rb-dial__methods">
              <legend className="rb-dial__legend">Method</legend>
              <label className="rb-chip">
                <input type="radio" name="rb-method" value="v60" defaultChecked /> <span>V60</span>
              </label>
              <label className="rb-chip">
                <input type="radio" name="rb-method" value="espresso" /> <span>Espresso</span>
              </label>
              <label className="rb-chip">
                <input type="radio" name="rb-method" value="aero" /> <span>AeroPress</span>
              </label>
              <label className="rb-chip">
                <input type="radio" name="rb-method" value="plunger" /> <span>Plunger</span>
              </label>
            </fieldset>
            <div className="rb-dial__cups">
              <label htmlFor="rb-cups">
                Cups{' '}
                <output htmlFor="rb-cups" data-out="cups">
                  2
                </output>
              </label>
              <input type="range" id="rb-cups" name="rb-cups" min={1} max={6} step={1} defaultValue={2} />
            </div>
            <div className="rb-dial__readout" aria-live="polite">
              <p className="rb-shot">
                <span className="rb-shot__value" data-out="dose">
                  30g
                </span>
                <span className="rb-shot__label">coffee</span>
              </p>
              <p className="rb-shot">
                <span className="rb-shot__value" data-out="water">
                  500g
                </span>
                <span className="rb-shot__label">water</span>
              </p>
              <p className="rb-shot">
                <span className="rb-shot__value" data-out="ratio">
                  1:16
                </span>
                <span className="rb-shot__label">ratio</span>
              </p>
              <p className="rb-shot">
                <span className="rb-shot__value" data-out="time">
                  2:45
                </span>
                <span className="rb-shot__label">total time</span>
              </p>
            </div>
            <div className="rb-dial__foot">
              <p className="rb-dial__grind" data-out="grind">
                Grind: medium-fine, like table salt.
              </p>
              <p className="rb-dial__note" data-out="note">
                Water straight off the boil, bloom 45 seconds.
              </p>
              <a className="rb-dial__link" href="/p/roastery/brew-guides">
                Every method in the brew guides &#8594;
              </a>
            </div>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />
        <EnquiryForm slug={SLUG} />
      </main>

      <template id="tpl-roastery-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-roastery-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-roastery-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />
    </Page>
  );
}
