import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { EnquiryForm } from '../../components/EnquiryForm';
import { wanderly } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'wanderly';
const BRAND = 'Wanderly Travel Co.';

const TEMPLATE_1 = `
  <h2>How a trip gets on the list</h2>
  <p>Nothing here was dreamed up in an office. Every route was walked, eaten and slept through by the person who now sells it to you, and it is rebuilt before it is ever offered twice.</p>
  <ul>
    <li>Routes are scouted in the season they run — Kyoto in maple week, the Faroes in the short summer window</li>
    <li>Stays are booked in person: we sleep in the room before you do, and the ones that failed the test are not on the map</li>
    <li>Guides are met over dinner first — the knife-makers in Sakai are people we know, not a line in a spreadsheet</li>
    <li>Timings are re-checked sixty days out: transfer hours, opening days, market days, whatever moved since the scout</li>
    <li>If a route stops working we pull it rather than quietly run the version that used to be good</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Plan a trip with us</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <h2>What a normal day looks like</h2>
  <p>The itinerary gives you the bones; this is the flesh. Times, walking and the hours that are genuinely yours — what to expect between the first coffee and the last transfer.</p>
  <ul>
    <li>Breakfast from 07:30, on the road by 09:00 on driving days, and the plan written up before you come down</li>
    <li>Mornings are the guided part — a walk, a market, a workshop, two to three hours — and afternoons are yours</li>
    <li>Six to eight kilometres on foot is a normal day; Atlas and trekking days run longer, and nobody is left behind</li>
    <li>One dinner a trip is booked as a single table, paid for by us; the other nights your leader hands you three addresses</li>
    <li>No optional excursions sold at the hotel desk, no upcharge activities waiting at the door</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Start planning</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <h2>Who is actually leading you</h2>
  <p>Not a flag and a timetable. Every departure runs with one Wanderly leader from the first airport coffee to the last transfer, backed by the people who live where you are going.</p>
  <ul>
    <li>Your leader travels the whole route with you — they walked it on the scouting trip too, so the detours are theirs</li>
    <li>Local specialists join for their own stretch only: the Atlas guide in Morocco, the boat out to Mykines</li>
    <li>A group chat opens thirty days before departure — flights people are booking, questions, one thread instead of email</li>
    <li>Leaders carry the backup plan: the earlier ferry, the covered market, the Monday when everything else is shut</li>
    <li>Message the office on a weekday and the planner who wrote your itinerary answers, not a queue</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Ask about a departure</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

export default function Wanderly() {
  const content = contentForSlug(SLUG);
  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/wanderly"
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-wanderly">
        <section className="wrap lp-hero wa-hero">
          <div className="wa-hero__copy">
            <h1 className="wa-hero__title">Trips you will talk about for years.</h1>
            <p className="wa-hero__lede">
              Planned by people who have actually stood in the square, eaten at the counter and got
              the forecast wrong. Twelve travellers maximum, ever.
            </p>
            <div className="wa-hero__route">
              <svg
                className="wa-hero__line"
                viewBox="0 0 480 20"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M8 13 H452"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="12 8"
                  strokeLinecap="round"
                />
                <path
                  d="M450 6 L470 13 L450 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8" cy="13" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="230" cy="13" r="3.5" fill="currentColor" />
              </svg>
              <p className="wa-hero__note">Small groups · private trips · no coaches</p>
            </div>
            <div className="hero__actions">
              <a className="btn btn--accent" href="#enquire">
                Plan a trip
              </a>
              <a className="btn btn--ghost" href="#trips">
                Browse departures
              </a>
              <button type="button" className="btn btn--ghost" data-modal-open="tpl-wanderly-1">
                How we scout trips
              </button>
            </div>
          </div>
          <div className="wa-hero__art">
            <div className="wa-stamp">
              <p className="wa-stamp__title">Route stamp</p>
              <dl className="wa-stamp__data">
                <div className="wa-stamp__row">
                  <dt>Trip code</dt>
                  <dd>WLY–JPN–09</dd>
                </div>
                <div className="wa-stamp__row">
                  <dt>Max group</dt>
                  <dd>12 travellers</dd>
                </div>
                <div className="wa-stamp__row">
                  <dt>Difficulty</dt>
                  <dd>6–8 km a day</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="wrap wa-section" id="trips">
          <div className="section-head">
            <h2 className="section-title">Leaving soon</h2>
            <p className="section-note">Four trips with space left this season.</p>
          </div>
          <div className="wa-trips">
            {wanderly.trips.map((trip) => (
              <article key={trip.name} className="wa-trip">
                <div className="wa-trip__top">
                  <span className="wa-trip__region">{trip.region}</span>
                  <span className="wa-trip__days">{trip.days}</span>
                </div>
                <h3 className="wa-trip__name">{trip.name}</h3>
                <p className="wa-trip__blurb">{trip.blurb}</p>
                <div className="wa-trip__foot">
                  <span className="wa-trip__price">{trip.price}</span>
                  <span className="wa-trip__hint">Space left this season</span>
                </div>
                <details className="wa-trip__more">
                  <summary className="wa-trip__link">
                    Details <span aria-hidden="true">↓</span>
                  </summary>
                  <ul className="wa-trip__route">
                    {trip.itinerary.map((stop) => (
                      <li key={stop}>{stop}</li>
                    ))}
                  </ul>
                  <a
                    className="wa-trip__cta"
                    href="#enquire"
                    data-prefill={`trip=${trip.name} — ${trip.region}`}
                  >
                    Ask about this trip <span aria-hidden="true">→</span>
                  </a>
                </details>
              </article>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-wanderly-2">
              A day on the ground
            </button>
          </div>
        </section>

        <section className="wa-band" id="how">
          <div className="wrap wa-section">
            <div className="section-head section-head--light">
              <h2 className="section-title">How it works</h2>
              <p className="section-note">Three steps and one long email back from us.</p>
            </div>
            <ol className="wa-steps">
              <li>
                <span>01</span>
                <strong>Tell us the itch</strong> — dates, budget, who is coming, what you hate.
              </li>
              <li>
                <span>02</span>
                <strong>Get a route</strong> — a real itinerary within 48 hours, revised until it
                fits.
              </li>
              <li>
                <span>03</span>
                <strong>Go</strong> — flights, stays and the awkward calls handled. You pack.
              </li>
            </ol>
            <div className="wa-stats">
              {wanderly.stats.map((stat) => (
                <div key={stat.label} className="wa-stat">
                  <span className="wa-stat__value">{stat.value}</span>
                  <span className="wa-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap wa-section" id="stories">
          <blockquote className="wa-quote">
            <p>
              “They moved our whole Morocco route by two days because of a sandstorm we had not
              heard of. That is the trip.”
            </p>
            <cite>— Nadia & Tom, Atlas & Sahara</cite>
          </blockquote>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-wanderly-3">
              Who runs your trip
            </button>
          </div>
        </section>

        <section
          className="wrap sig sig--wanderly"
          id="checklist"
          data-sig="wanderly"
          aria-label="Travel checklist"
        >
          <div className="wa-check">
            <header className="wa-check__head">
              <div className="wa-check__titles">
                <p className="wa-check__code">Pre-departure · card 09</p>
                <h2 className="wa-check__title">Before you leave</h2>
              </div>
              <p className="wa-check__stamp" aria-hidden="true">
                Cleared
              </p>
              <p className="wa-check__lede">
                Nine things that have spoiled a trip when forgotten. Tick what is done — the list
                stays ticked in this browser.
              </p>
            </header>
            <div className="wa-check__progress" aria-live="polite">
              <span className="wa-check__count" data-out="progress">
                0 of 9 ready
              </span>
              <span className="wa-check__track">
                <span className="wa-check__bar" data-out="bar" style={{ width: '0%' }} />
              </span>
              <button type="button" className="wa-check__reset" data-act="reset">
                Clear the list
              </button>
            </div>
            <p className="wa-check__next" data-out="next">
              Up next: Passport valid six months out
            </p>
            <div className="wa-check__groups">
              <fieldset className="wa-check__group">
                <legend className="wa-check__legend">Papers</legend>
                <label className="wa-check__item">
                  <input type="checkbox" name="wy-item" value="passport" />
                  <span className="wa-check__mark" aria-hidden="true" />
                  <span className="wa-check__text">Passport valid six months out</span>
                </label>
                <label className="wa-check__item">
                  <input type="checkbox" name="wy-item" value="insurance" />
                  <span className="wa-check__mark" aria-hidden="true" />
                  <span className="wa-check__text">Travel insurance saved offline</span>
                </label>
                <label className="wa-check__item">
                  <input type="checkbox" name="wy-item" value="copies" />
                  <span className="wa-check__mark" aria-hidden="true" />
                  <span className="wa-check__text">Document copies in the cloud</span>
                </label>
              </fieldset>
              <fieldset className="wa-check__group">
                <legend className="wa-check__legend">In the bag</legend>
                <label className="wa-check__item">
                  <input type="checkbox" name="wy-item" value="adapter" />
                  <span className="wa-check__mark" aria-hidden="true" />
                  <span className="wa-check__text">Plug adapter for the sockets there</span>
                </label>
                <label className="wa-check__item">
                  <input type="checkbox" name="wy-item" value="meds" />
                  <span className="wa-check__mark" aria-hidden="true" />
                  <span className="wa-check__text">Prescriptions and repeat scripts</span>
                </label>
                <label className="wa-check__item">
                  <input type="checkbox" name="wy-item" value="sun" />
                  <span className="wa-check__mark" aria-hidden="true" />
                  <span className="wa-check__text">Sun cream in the day bag</span>
                </label>
                <label className="wa-check__item">
                  <input type="checkbox" name="wy-item" value="daybag" />
                  <span className="wa-check__mark" aria-hidden="true" />
                  <span className="wa-check__text">Day bag packed and weighed</span>
                </label>
              </fieldset>
              <fieldset className="wa-check__group">
                <legend className="wa-check__legend">Before you leave</legend>
                <label className="wa-check__item">
                  <input type="checkbox" name="wy-item" value="card" />
                  <span className="wa-check__mark" aria-hidden="true" />
                  <span className="wa-check__text">Card provider told we are away</span>
                </label>
                <label className="wa-check__item">
                  <input type="checkbox" name="wy-item" value="keys" />
                  <span className="wa-check__mark" aria-hidden="true" />
                  <span className="wa-check__text">Keys and post sorted</span>
                </label>
              </fieldset>
            </div>
            <p className="wa-check__link">
              <a href="/p/wanderly/packing-list">The full packing list →</a>
            </p>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />

        <EnquiryForm slug={SLUG} />
      </main>

      <template id="tpl-wanderly-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-wanderly-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-wanderly-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />
    </Page>
  );
}
