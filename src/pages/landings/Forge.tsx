import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { EnquiryForm } from '../../components/EnquiryForm';
import { forge } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'forge';
const BRAND = 'Ironclad Strength';

const TEMPLATE_1 = `
  <p class="modal__kicker">Ironclad Strength · the rhythm</p>
  <h2>How a week on the floor works</h2>
  <p>Two shapes of day, one board on the wall. Coached days are booked, open days are yours from five in the morning until eleven at night.</p>
  <ul>
    <li>Monday, Wednesday, Friday — coached lifts: squat, press and pull, one hour, capped at eight lifters</li>
    <li>Tuesday and Thursday — open floor, coaches on shift but no session structure</li>
    <li>Saturday — the long session: conditioning finisher, then the kettlebell collection goes back on the rack</li>
    <li>Sunday — doors closed, mobility drills in the app if you want them</li>
    <li>First visit starts with a 20-minute movement screen, not a sales call</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Claim the free week</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <p class="modal__kicker">Ironclad Strength · the board</p>
  <h2>What "coached" actually means</h2>
  <p>Not a timer and a whistle. A coach writes the session, watches your working sets and changes the plan in front of you if the bar says so.</p>
  <ul>
    <li>Eight lifters maximum per coached hour — that is why the board has times on it</li>
    <li>Technique before load for your first two blocks; the strength comes after</li>
    <li>Your top sets get eyes on them, every session, no exceptions</li>
    <li>Miss a booked session? Message before noon and it moves to another slot that week</li>
    <li>Phone-on-the-rack video review on request — send it, get notes back same day</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#schedule">Pick a slot</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <p class="modal__kicker">Ironclad Strength · membership</p>
  <h2>What membership includes</h2>
  <p>One price, everything on it. The fine print is short enough to read standing up.</p>
  <ul>
    <li>Every coached session on the board — no tier above this one</li>
    <li>Open floor access 05:00–23:00 with your own fob, seven days</li>
    <li>Movement screen on joining, retest at the end of every block</li>
    <li>Your programme on paper at the rack and in the app</li>
    <li>Two guest passes a month — bring someone who says they will come</li>
    <li>Cancel any time, in one message, no exit interview</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire" data-prefill="plan=Free week — walk in">Start the free week</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

export default function Forge() {
  const content = contentForSlug(SLUG);
  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/forge"
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-forge">
        <section className="wrap lp-hero fo-hero">
          <h1 className="fo-hero__title">
            LIFT
            <br />
            HEAVY
            <br />
            <span>LEAVE BETTER</span>
          </h1>
          <dl className="fo-board">
            <div className="fo-board__cell">
              <dt className="fo-board__label">Members · month to month</dt>
              <dd className="fo-board__n">$49</dd>
            </div>
            <div className="fo-board__cell">
              <dt className="fo-board__label">Classes this week · on the board</dt>
              <dd className="fo-board__n">{forge.classes.length}</dd>
            </div>
            <div className="fo-board__cell">
              <dt className="fo-board__label">Open-floor hours a day · 05:00–23:00</dt>
              <dd className="fo-board__n">18</dd>
            </div>
          </dl>
          <p className="fo-hero__lede">
            Racks, platforms and coaches who actually watch your set. No queue for the squat rack,
            no contract, no shouting.
          </p>
          <div className="hero__actions">
            <a className="btn btn--accent" href="#membership">
              Start lifting
            </a>
            <a className="btn btn--ghost" href="#schedule">
              See the board
            </a>
          </div>
        </section>

        <section className="wrap fo-section" id="schedule">
          <div className="section-head">
            <h2 className="section-title">The board</h2>
            <p className="section-note">Coached sessions this week. Open floor runs all day.</p>
          </div>
          <table className="fo-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Session</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {forge.classes.map((slot) => (
                <tr key={`${slot.day}-${slot.name}`}>
                  <td data-label="Day">{slot.day}</td>
                  <td data-label="Session">{slot.name}</td>
                  <td data-label="Time">{slot.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-forge-1">
              How a week works
            </button>
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-forge-2">
              What "coached" actually means
            </button>
          </div>
        </section>

        <section className="fo-band">
          <div className="wrap fo-section" id="coaches">
            <div className="section-head section-head--light">
              <h2 className="section-title">Who is on the floor</h2>
              <p className="section-note">
                Three coaches, every coached hour, no rotating strangers.
              </p>
            </div>
            <div className="fo-coaches">
              {forge.coaches.map((coach) => (
                <article key={coach.name} className="fo-coach">
                  <span className="fo-coach__avatar" aria-hidden="true">
                    {coach.name.charAt(0)}
                  </span>
                  <h3 className="fo-coach__name">{coach.name}</h3>
                  <p className="fo-coach__focus">{coach.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap fo-section" id="membership">
          <div className="section-head">
            <h2 className="section-title">Membership</h2>
            <p className="section-note">
              Cancel any time. We would rather you come back later than stay unhappy.
            </p>
          </div>
          <div className="fo-plans">
            {forge.plans.map((plan) => (
              <article
                key={plan.name}
                className={`fo-plan${plan.featured ? ' fo-plan--featured' : ''}`}
              >
                <p className="fo-plan__name">{plan.name}</p>
                <p className="fo-plan__price">{plan.price}</p>
                <p className="fo-plan__detail">{plan.detail}</p>
                <a
                  className="fo-plan__cta"
                  href="#enquire"
                  data-prefill={`plan=${plan.name} — ${plan.price}`}
                >
                  {plan.featured ? 'Join now' : 'Choose'}
                </a>
              </article>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-forge-3">
              What membership includes
            </button>
          </div>
        </section>

        <section
          className="wrap sig sig--forge"
          id="plates"
          data-sig="forge"
          aria-label="Plate and one-rep-max calculator"
        >
          <div className="fo-rig">
            <div className="fo-rig__head">
              <h2 className="sig__title">Plate maths &amp; 1RM</h2>
              <p className="fo-rig__lede">
                Type the load on the bar and the reps you actually got. The bar counts as 20kg,
                the plates go on from there.
              </p>
            </div>
            <div className="fo-rig__controls">
              <p className="fo-ctl">
                <label className="fo-ctl__label" htmlFor="fo-weight">
                  Bar load (kg)
                </label>
                <input
                  className="fo-ctl__num"
                  type="number"
                  id="fo-weight"
                  name="fo-weight"
                  min={0}
                  max={400}
                  step={2.5}
                  defaultValue="100"
                  inputMode="decimal"
                />
              </p>
              <p className="fo-ctl">
                <label className="fo-ctl__label" htmlFor="fo-reps">
                  Reps{' '}
                  <output className="fo-ctl__out" htmlFor="fo-reps" data-out="reps">
                    5
                  </output>
                </label>
                <input
                  className="fo-ctl__range"
                  type="range"
                  id="fo-reps"
                  name="fo-reps"
                  min={1}
                  max={10}
                  step={1}
                  defaultValue={5}
                />
              </p>
              <div className="fo-quick" role="group" aria-label="Quick loads">
                <span className="fo-quick__hint">Quick loads</span>
                <button type="button" className="fo-quick__btn" data-act="load" data-kg="60">
                  60kg
                </button>
                <button type="button" className="fo-quick__btn" data-act="load" data-kg="100">
                  100kg
                </button>
                <button type="button" className="fo-quick__btn" data-act="load" data-kg="140">
                  140kg
                </button>
                <button type="button" className="fo-quick__btn" data-act="load" data-kg="180">
                  180kg
                </button>
              </div>
            </div>
            <div className="fo-rig__out" aria-live="polite">
              <p className="fo-fig">
                <span className="fo-fig__num" data-out="onerm">
                  117kg
                </span>
                <span className="fo-fig__label">One-rep max · Epley</span>
              </p>
              <div className="fo-load">
                <p className="fo-load__label">Clipped on, per side</p>
                <p className="fo-load__row" data-out="plates">
                  <span className="fo-plate">25</span> <span className="fo-plate">10</span>{' '}
                  <span className="fo-plate">5</span>{' '}
                  <span className="fo-load__each">each side</span>
                </p>
              </div>
              <p className="fo-note" data-out="note">
                Strength zone. Grind it, rack it, write it down.
              </p>
            </div>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />
        <EnquiryForm slug={SLUG} />
      </main>

      <template id="tpl-forge-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-forge-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-forge-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />
    </Page>
  );
}
