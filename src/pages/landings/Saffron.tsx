import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { EnquiryForm } from '../../components/EnquiryForm';
import { saffron } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'saffron';
const BRAND = 'Saffron & Stone';

const TEMPLATE_1 = `
  <h2>The shape of a night here</h2>
  <p>Two seatings, one fire that never stops, and a room built for lingering. This is the timeline from the first drink to the last plate — the only surprise should be the food.</p>
  <ul>
    <li>Arrive a little early: the bar does aperitifs while your table is finished, and the first drink of the night tastes better standing</li>
    <li>Plates come as the kitchen fires them — say if you would rather they land together or one at a time</li>
    <li>A table usually runs two hours from first plate to bill, longer if you let the fire hold you there</li>
    <li>Leave room: the last plates of the night change most people's mind about dessert, and it orders off the same menu</li>
    <li>Celebrating? Tell the desk — candles and a written card cost nothing, and we would rather know than guess</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Reserve a table</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <h2>Smoke, coal and why it tastes like that</h2>
  <p>Everything on the board passes the hearth in some way. This is what live fire actually does to a plate, and why the kitchen chases char without ever chasing ash.</p>
  <ul>
    <li>Two heat zones: coals raked to one side for slow work, a hard bed in the middle for anything that should blister inside a minute</li>
    <li>Smoke is measured like any other ingredient — fish sits at the fire's edge, vegetables where the smoke runs sweeter</li>
    <li>Nothing finishes under a lid: colour comes from contact with coal, which is why the char tastes of wood rather than gas</li>
    <li>Fat does the basting — rendering runs back over the plate instead of away into a tray, and most of the richness comes from there</li>
    <li>The bed is lit before service, raked down at close, and relit from the same ashes the following day</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Ask the kitchen</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <h2>Choosing wine without a quiz</h2>
  <p>No sommelier exam required: the list is short on dogma and long on tastes poured before you commit to a glass. Here is how to land on something you will actually finish.</p>
  <ul>
    <li>Tell us what you drank last night — a grape, a region, even just red and not too heavy — and the next pour lands closer than any list reading</li>
    <li>Half-and-half tables are normal: one bottle for the middle of the meal, a glass each for whoever changes their mind</li>
    <li>Fire loves grip: if you are between two, take the one with a little tannin and let the hearth do the arguing</li>
    <li>There is always something without alcohol on the pour — ask for the house ferment and you will not feel like the designated driver</li>
    <li>If a bottle is not right, say so after the first glass — we would rather pour you something else than watch you finish it politely</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Note it when you book</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

export default function Saffron() {
  const content = contentForSlug(SLUG);
  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/saffron"
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-saffron">
        <section className="wrap lp-hero sa-hero">
          <h1 className="sa-hero__title">Saffron &amp; Stone</h1>
          <p className="sa-hero__lede">
            Twelve dishes a night, written when the market opens. Everything is cooked over
            embers, including dessert, somehow.
          </p>
          <ul className="sa-service">
            <li className="sa-service__row">
              <span className="sa-service__label">Kitchen hours</span>
              <span className="sa-service__dots" aria-hidden="true" />
              <span className="sa-service__value">Tue–Sun, from 17:00</span>
            </li>
            <li className="sa-service__row">
              <span className="sa-service__label">Fire lit</span>
              <span className="sa-service__dots" aria-hidden="true" />
              <span className="sa-service__value">before service, daily</span>
            </li>
            <li className="sa-service__row">
              <span className="sa-service__label">Last booking</span>
              <span className="sa-service__dots" aria-hidden="true" />
              <span className="sa-service__value">20:15, second sitting</span>
            </li>
          </ul>
          <div className="hero__actions">
            <a className="btn btn--accent" href="#enquire">
              Reserve a table
            </a>
            <a className="btn btn--ghost" href="#menu">
              Tonight's menu
            </a>
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-saffron-1">
              How an evening runs
            </button>
          </div>
        </section>

        <div className="sa-marquee" aria-hidden="true">
          <div className="sa-marquee__track">
            <span>
              Market produce · Wood fire · Natural wine · No corkage on Tuesdays ·
            </span>
            <span>
              Market produce · Wood fire · Natural wine · No corkage on Tuesdays ·
            </span>
          </div>
        </div>

        <section className="wrap sa-section" id="menu">
          <div className="section-head">
            <h2 className="section-title">Tonight</h2>
            <p className="section-note">The menu changes daily. This is tonight's, warts and all.</p>
          </div>
          <div className="sa-menu">
            {saffron.menu.map((group) => (
              <div key={group.title} className="sa-menu__group">
                <h3 className="sa-menu__title">{group.title}</h3>
                <ul className="sa-menu__list">
                  {group.dishes.map((dish) => (
                    <li key={dish.name} className="sa-dish">
                      <div className="sa-dish__row">
                        <span className="sa-dish__name">{dish.name}</span>
                        <span className="sa-dish__dots" aria-hidden="true" />
                        <span className="sa-dish__price">{dish.price}</span>
                      </div>
                      <p className="sa-dish__detail">{dish.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-saffron-2">
              What the fire does
            </button>
          </div>
        </section>

        <section className="sa-band" id="hours">
          <div className="wrap sa-section">
            <div className="sa-stats">
              {saffron.stats.map((stat) => (
                <div key={stat.label} className="sa-stat">
                  <span className="sa-stat__value">{stat.value}</span>
                  <span className="sa-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="sa-band__note">
              Walk-ins welcome at the bar. Sunday lunch runs 12:00–15:00 without bookings.
            </p>
          </div>
        </section>

        <section
          className="wrap sig sig--saffron"
          id="table"
          data-sig="saffron"
          aria-label="Table availability picker"
        >
          <div className="sa-table">
            <header className="sa-table__head">
              <p className="sa-table__kicker">Table plan · written each morning</p>
              <h2 className="sa-table__title">Find your fire</h2>
              <p className="sa-table__lede">
                Choose a night and how many are coming. The cards show which sittings still have
                room — tap one and it lands in the reservation form.
              </p>
            </header>
            <div className="sa-table__controls">
              <fieldset className="sa-table__days">
                <legend className="sa-table__legend">Night</legend>
                <div className="sa-table__dayrow">
                  <label className="sa-day">
                    <input type="radio" name="sa-day" value="tue" /> <span>Tue</span>
                  </label>
                  <label className="sa-day">
                    <input type="radio" name="sa-day" value="wed" /> <span>Wed</span>
                  </label>
                  <label className="sa-day">
                    <input type="radio" name="sa-day" value="thu" defaultChecked /> <span>Thu</span>
                  </label>
                  <label className="sa-day">
                    <input type="radio" name="sa-day" value="fri" /> <span>Fri</span>
                  </label>
                  <label className="sa-day">
                    <input type="radio" name="sa-day" value="sat" /> <span>Sat</span>
                  </label>
                </div>
              </fieldset>
              <p className="sa-table__party">
                <label htmlFor="sa-party">
                  Party size <output htmlFor="sa-party" data-out="party">2</output>
                </label>
                <input
                  type="range"
                  id="sa-party"
                  name="sa-party"
                  min={1}
                  max={12}
                  step={1}
                  defaultValue={2}
                />
              </p>
            </div>
            <div className="sa-table__board" aria-live="polite">
              <div className="sa-table__slots" data-out="slots">
                <button
                  type="button"
                  className="sa-slot sa-slot--available"
                  data-act="slot"
                  data-slot="18:00"
                >
                  <span className="sa-slot__time">18:00</span>
                  <span className="sa-slot__state">available</span>
                </button>
                <button
                  type="button"
                  className="sa-slot sa-slot--waitlist"
                  data-act="slot"
                  data-slot="20:30"
                >
                  <span className="sa-slot__time">20:30</span>
                  <span className="sa-slot__state">waitlist</span>
                </button>
                <button
                  type="button"
                  className="sa-slot sa-slot--available"
                  data-act="slot"
                  data-slot="22:00"
                >
                  <span className="sa-slot__time">22:00</span>
                  <span className="sa-slot__state">available</span>
                </button>
              </div>
              <p className="sa-table__note" data-out="note">
                Thursday · 2 guests — 2 free, 1 waitlist, 0 full.
              </p>
              <p className="sa-table__chosen" data-out="chosen">
                No sitting picked yet.
              </p>
            </div>
            <div className="sa-table__foot">
              <p className="sa-table__hint">
                Walk-ins still welcome at the bar — six stools kept free every night.
              </p>
              <a className="sa-table__cta" href="#enquire">
                Reserve a table
              </a>
            </div>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />

        <div className="wrap">
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-saffron-3">
              Wine, minus the lecture
            </button>
          </div>
        </div>

        <EnquiryForm slug={SLUG} />
      </main>

      <template id="tpl-saffron-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-saffron-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-saffron-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />

      <dialog
        className="lp-modal"
        id="popup-saffron"
        data-popup
        data-popup-key="lp-popup-saffron"
        data-popup-delay="7000"
        aria-labelledby="popup-saffron-title"
      >
        <div className="lp-modal__bar">
          <span className="lp-modal__brand">Saffron & Stone · this week</span>
          <form method="dialog">
            <button className="lp-modal__close" type="submit" value="close" aria-label="Dismiss">
              ✕
            </button>
          </form>
        </div>
        <div className="lp-modal__body">
          <h2 id="popup-saffron-title">Two seats at the fire this week</h2>
          <p>
            The hearth room runs Thursday to Saturday and the late sitting on Thursday still has
            space for two. Same fire, quieter room, menu written on the day.
          </p>
          <ul>
            <li>Thursday, 20:30 sitting — two seats, five courses cooked to the hearth</li>
            <li>Friday and Saturday are waitlist only; midweek evenings move faster</li>
            <li>Tell us about allergies when you ask — the kitchen reads every note</li>
          </ul>
          <div className="modal__actions">
            <a className="btn btn--accent" href="#enquire">
              Ask about Thursday
            </a>
            <button type="button" className="btn btn--ghost" data-modal-close>
              Not tonight
            </button>
          </div>
        </div>
      </dialog>
    </Page>
  );
}
