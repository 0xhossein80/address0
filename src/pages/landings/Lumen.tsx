import { useState } from 'react';
import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { LumenBooking } from './LumenBooking';
import { LumenGuide } from './LumenGuide';
import { lumen } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { useReveal } from '../../lib/reveal';
import { LANDING_NAV } from './meta';

const SLUG = 'lumen';
const BRAND = 'Lumen Studio';
const OG_IMAGE = '/assets/img/lumen/harbour-portrait.jpg';

const TEMPLATE_1 = `
  <p class="modal__kicker">Lumen Studio · booking</p>
  <h2>How to hold a date</h2>
  <p>A shoot starts with a rough note, not a contract. Tell us roughly when and what, and you get two or three dates, one fixed price and a straight answer on availability the same working day.</p>
  <ul>
    <li>Tuesday to Saturday, 09:00 to 18:00, with Saturday mornings held for portrait and headshot series</li>
    <li>Two weeks' notice is comfortable; if the date is tighter, ask anyway — gaps get filled from the waiting list</li>
    <li>A 30% deposit takes the date off the board, refundable up to 48 hours before the shoot; balance due on the day</li>
    <li>Invoices go to your business, PO numbers accepted, bank transfer available if finance prefers it</li>
    <li>Two days held across the same fortnight are billed with a half-day on the second — worth knowing for campaign work</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Book a shoot</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <p class="modal__kicker">Lumen Studio · people</p>
  <h2>Nobody here expects you to pose</h2>
  <p>Most people in front of our camera have never been in front of one. The hour is paced so the first ten minutes are conversation, and the real frames start the moment you stop thinking about the lens.</p>
  <ul>
    <li>We begin with movement rather than a frozen smile: walk, adjust a sleeve, look away, then look back</li>
    <li>Fifteen minutes in, most people have forgotten the camera — that is usually when the keeper happens</li>
    <li>Bring two looks if you like; there is a mirror, a steamer and a private corner to change in</li>
    <li>The light is set once and kept for the whole session, so a team set reads as one wall, not fourteen offices</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Book an hour</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <p class="modal__kicker">Lumen Studio · the room</p>
  <h2>Before the first frame</h2>
  <p>What happens the moment you arrive, where you put the car, and what the room will do with your morning. This is the page of notes first-time clients usually ask for by email before booking.</p>
  <ul>
    <li>Come ten minutes early — street parking frees up after 09:00 and the kettle needs that long anyway</li>
    <li>North glass means no direct sun: even light from opening to close, no hotspots on gloss, no squinting portraits</li>
    <li>A changing corner with a full-length mirror and a steamer, plus a table kept clear for props and samples</li>
    <li>Tethered capture on the house monitor or your own laptop — each frame appears the moment it is taken</li>
    <li>Seamless paper in white, grey and black, and the resident dog can be sent to the office for the hour</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Check a date</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const HERO_FACTS = [
  'Previews in 48h',
  'Selects in 5 days',
  'Unlimited usage',
  'From $340',
];

const HOLD_TERMS: { term: string; detail: string }[] = [
  { term: 'Deposit', detail: '30% — refundable to 48h' },
  { term: 'Answer', detail: 'Same working day' },
  { term: 'Hours', detail: 'Tue–Sat · 09:00–18:00' },
  { term: 'Previews', detail: '48 hours' },
  { term: 'Selects', detail: 'Five working days' },
  { term: 'Usage', detail: 'Unlimited on delivered frames' },
];

const STEPS = [
  {
    n: '01',
    title: 'Send the brief',
    copy: 'A rough date and a rough subject is enough. You get two or three dates, one fixed price, and an answer the same working day.',
  },
  {
    n: '02',
    title: 'Hold the date',
    copy: 'A 30% deposit takes the day off the board, refundable up to 48 hours before. The balance is due on the shoot day.',
  },
  {
    n: '03',
    title: 'Shoot day',
    copy: 'Come ten minutes early. The light is set once, tethering puts every frame on your screen as it lands, and there is a private corner to change in.',
  },
  {
    n: '04',
    title: 'Delivery',
    copy: 'Preview gallery within 48 hours, retouched selects within five working days. Rush delivery by the next morning when a deadline will not move.',
  },
];

/* Filter tabs for the contact sheet, plus the first-visit notes behind
   modal tpl-lumen-3. */
const KINDS = ['All', 'People', 'Product', 'Interiors', 'Editorial'] as const;

const VISIT_NOTES: { title: string; text: string }[] = [
  {
    title: 'Ten minutes early',
    text: 'Street parking frees up after 09:00, and the kettle needs that long anyway.',
  },
  {
    title: 'North glass, no squinting',
    text: 'No direct sun: even light from opening to close, no hotspots on gloss.',
  },
  {
    title: 'Changing corner',
    text: 'Full-length mirror, a steamer, and a table kept clear for props and samples.',
  },
  {
    title: 'Tethered capture',
    text: 'Every frame appears on the house monitor — or your own laptop — the moment it lands.',
  },
  {
    title: 'Paper, grey to black',
    text: 'Seamless in white, grey and black. The resident dog can be sent to the office for the hour.',
  },
];

export default function Lumen() {
  const content = contentForSlug(SLUG);
  const [kind, setKind] = useState<(typeof KINDS)[number]>('All');
  useReveal();
  if (!content) return null;

  const visibleShots = lumen.shots
    .map((shot, i) => ({ shot, i }))
    .filter(({ shot }) => kind === 'All' || shot.kind === kind);

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/lumen"
      image={OG_IMAGE}
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-lumen">
        <section className="wrap lp-hero lu-hero">
          <div className="lu-hero__col">
            <p className="lu-kicker">Nº 09 — north-facing daylight · Tue–Sat</p>
            <h1 className="lu-hero__title">
              Light,
              <br />
              arranged.
            </h1>
            <p className="lu-hero__lede">
              Portraits, products and interiors for brands, teams and editors — shot in five-metre
              north-facing daylight, with a lot of patience and very little fuss.
            </p>
            <ul className="lu-hero__facts">
              {HERO_FACTS.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <div className="lu-hero__rule" aria-hidden="true" />
            <div className="hero__actions">
              <a className="btn btn--accent" href="#enquire">
                Book a shoot
              </a>
              <a className="btn btn--ghost" href="#guide">
                Get the prep sheet
              </a>
              <a className="lu-hero__link" href="#work">
                See the work <span aria-hidden="true">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="lu-hero__meter">
            <div className="lu-ev" aria-hidden="true">
              <p className="lu-ev__cap">EV</p>
              <div className="lu-ev__rail">
                <span className="lu-ev__t lu-ev__t--major">
                  <span className="lu-ev__val">+2</span>
                </span>
                <span className="lu-ev__t" />
                <span className="lu-ev__t lu-ev__t--major">
                  <span className="lu-ev__val">+1</span>
                </span>
                <span className="lu-ev__t" />
                <span className="lu-ev__t lu-ev__t--major lu-ev__t--zero">
                  <span className="lu-ev__val">0</span>
                </span>
                <span className="lu-ev__t" />
                <span className="lu-ev__t lu-ev__t--major">
                  <span className="lu-ev__val">&#8722;1</span>
                </span>
                <span className="lu-ev__t" />
                <span className="lu-ev__t lu-ev__t--major">
                  <span className="lu-ev__val">&#8722;2</span>
                </span>
                <span className="lu-ev__needle" />
              </div>
            </div>
            <p className="lu-ev__note">
              North glass, no direct sun — even light from the first frame to the last.
            </p>
          </div>
        </section>

        <div className="lu-strip" aria-hidden="true">
          <div className="lu-strip__track">
            {[0, 1].map((run) => (
              <div className="lu-strip__run" key={run}>
                {lumen.shots.map((shot, i) => (
                  <span key={shot.title} className="lu-strip__item">
                    <span className="lu-strip__frame">
                      Frame {String(i + 1).padStart(2, '0')}A
                    </span>
                    {shot.kind}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="wrap lu-section" id="work">
          <div className="section-head">
            <p className="lu-eyebrow">Contact sheet — six frames</p>
            <h2 className="section-title">Portrait, product &amp; interior photography</h2>
            <p className="section-note">
              Two seasons of work — people, product, interiors and editorial, all shot in this
              room.
            </p>
          </div>
          <div className="lu-contact rv">
            <div className="lu-contact__head">
              <p className="lu-contact__cap">Sheet Nº 09 · daylight only</p>
              <div className="lu-contact__filters" role="group" aria-label="Filter frames by kind">
                {KINDS.map((name) => (
                  <button
                    key={name}
                    type="button"
                    className={`lu-contact__filter${kind === name ? ' is-on' : ''}`}
                    aria-pressed={kind === name}
                    onClick={() => setKind(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
            <div className="lu-wall">
              {visibleShots.map(({ shot, i }) => {
                const frame = String(i + 1).padStart(2, '0');
                return (
                  <figure key={shot.title} className={`lu-shot lu-shot--${i}`}>
                    <button
                      className="lu-shot__frame"
                      type="button"
                      data-lightbox
                      aria-label={`View frame ${frame}A — ${shot.title}`}
                      data-lightbox-title={shot.title}
                      data-lightbox-tag={shot.kind}
                      data-lightbox-text={shot.note}
                      {...(shot.image ? { 'data-lightbox-image': shot.image } : {})}
                    >
                      {shot.image ? (
                        <img
                          className="lu-shot__img"
                          src={shot.image}
                          alt=""
                          width={1400}
                          height={1050}
                          loading="eager"
                          decoding="async"
                        />
                      ) : null}
                      <span className="lu-shot__hint">View</span>
                      <span className="lu-shot__rebate" aria-hidden="true">
                        <span className="lu-shot__id">Frame {frame}A</span>
                        <span className="lu-shot__edge">Medium format</span>
                      </span>
                    </button>
                    <figcaption>
                      <span className="lu-shot__title">{shot.title}</span>
                      <span className="lu-shot__kind">{shot.kind}</span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            <p className="lu-contact__foot" aria-live="polite">
              Showing {visibleShots.length} of {lumen.shots.length} frames — select a frame to
              enlarge
            </p>
          </div>
        </section>

        <section className="wrap lu-section" id="sessions">
          <div className="section-head">
            <p className="lu-eyebrow">Booking index — four jobs</p>
            <h2 className="section-title">What you can book</h2>
            <p className="section-note">
              One room, four kinds of job — pick the closest and the brief sets the rest.
            </p>
          </div>
          <p className="lu-index__head" aria-hidden="true">
            <span>Nº</span>
            <span>Session</span>
            <span>Frames</span>
            <span>Book</span>
          </p>
          <div className="lu-sessions">
            {lumen.sessions.map((session, i) => (
              <a
                key={session.kind}
                className="lu-session rv"
                style={{ transitionDelay: `${i * 90}ms` }}
                href="#enquire"
                data-prefill={session.prefill}
              >
                <span className="lu-session__n" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="lu-session__id">
                  <span className="lu-session__kind">{session.kind}</span>
                  <span className="lu-session__frames">{session.frames}</span>
                </span>
                <span className="lu-session__copy">{session.copy}</span>
                <span className="lu-session__cta">
                  {session.cta} <span aria-hidden="true">&#8594;</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="lu-band" id="packages">
          <div className="wrap lu-section">
            <div className="section-head section-head--light">
              <p className="lu-eyebrow lu-eyebrow--light">Rate card — three ways in</p>
              <h2 className="section-title">Packages from $340</h2>
              <p className="section-note">Half-day rates available on request.</p>
            </div>
            <div className="lu-plans">
              {lumen.plans.map((plan, i) => (
                <article
                  key={plan.name}
                  className={`lu-plan rv${plan.featured ? ' lu-plan--featured' : ''}`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <p className="lu-plan__name">{plan.name}</p>
                  <p className="lu-plan__price">{plan.price}</p>
                  <p className="lu-plan__detail">{plan.detail}</p>
                  <a
                    className="lu-plan__cta"
                    href="#enquire"
                    data-prefill={`package=${plan.name} — ${plan.price}`}
                  >
                    Book this package <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap lu-section lu-hold" id="hold" aria-labelledby="lu-hold-title">
          <div className="lu-hold__main rv">
            <p className="lu-hold__kicker">Booking</p>
            <h2 className="lu-hold__title" id="lu-hold-title">
              You are booking
              <br />
              the light.
            </h2>
            <p className="lu-hold__lede">
              North glass from nine to six. One room, held still, so a team set reads as one wall —
              not fourteen offices. The package is almost secondary.
            </p>
            <p className="lu-hold__body">
              Tell us roughly when and what. You get two or three dates, one fixed price, and an
              answer the same working day. A 30% deposit puts your name on the board; refundable up
              to 48 hours before the shutter.
            </p>
            <div className="lu-hold__actions">
              <a className="btn btn--accent" href="#enquire">
                Request a date
              </a>
              <a className="lu-hold__link" href="#packages">
                Back to packages
              </a>
              <a className="lu-hold__link" href="#guide">
                Prep sheet first
              </a>
            </div>
          </div>

          <aside className="lu-hold__stub rv" style={{ transitionDelay: '140ms' }} aria-label="Booking terms">
            <p className="lu-hold__stub-cap">Day sheet · terms</p>
            <dl className="lu-hold__terms">
              {HOLD_TERMS.map((row) => (
                <div key={row.term} className="lu-hold__row">
                  <dt className="lu-hold__term">{row.term}</dt>
                  <dd className="lu-hold__detail">{row.detail}</dd>
                </div>
              ))}
            </dl>
            <p className="lu-hold__stub-foot">Lumen · north-facing · by appointment</p>
          </aside>
        </section>

        <section className="wrap lu-section" id="process">
          <div className="section-head">
            <p className="lu-eyebrow">Film leader — four frames</p>
            <h2 className="section-title">How a shoot runs</h2>
            <p className="section-note">
              From first note to final files — most jobs finish inside a week.
            </p>
          </div>
          <div className="lu-leader" aria-hidden="true" />
          <ol className="lu-steps">
            {STEPS.map((step, i) => (
              <li
                key={step.n}
                className="lu-step rv"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="lu-step__n">F.{step.n}</span>
                <h3 className="lu-step__t">{step.title}</h3>
                <p className="lu-step__c">{step.copy}</p>
              </li>
            ))}
          </ol>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-lumen-1">
              How to hold a date
            </button>
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-lumen-2">
              Directing, not posing
            </button>
          </div>
        </section>

        <section className="wrap lu-section" id="studio">
          <div className="lu-about">
            <div>
              <p className="lu-eyebrow">The room — exposure notes</p>
              <h2 className="section-title">The studio</h2>
              <p className="section-note">
                Five-metre windows, a paper roll that never ends, and a dog that occasionally walks
                through frame. Bring your product, your team or yourself — we will find the light.
              </p>
            </div>
            <dl className="lu-stats">
              {lumen.stats.map((stat) => (
                <div key={stat.label} className="lu-stat">
                  <dt className="lu-stat__label">{stat.label}</dt>
                  <dd className="lu-stat__value">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="wrap lu-section" id="visit" aria-label="Before the first frame">
          <div className="section-head">
            <p className="lu-eyebrow">First visit — five notes</p>
            <h2 className="section-title">Before the first frame</h2>
            <p className="section-note">
              What happens the moment you arrive — the notes first-time clients usually ask for by
              email.
            </p>
          </div>
          <ol className="lu-visit">
            {VISIT_NOTES.map((note, i) => (
              <li key={note.title} className="lu-visit__row rv" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="lu-visit__n" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="lu-visit__body">
                  <h3 className="lu-visit__title">{note.title}</h3>
                  <p className="lu-visit__text">{note.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mini-actions">
            <a className="btn btn--accent" href="#enquire">
              Check a date
            </a>
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-lumen-3">
              Inside the studio
            </button>
          </div>
        </section>

        <section
          className="wrap sig sig--lumen"
          id="exposure"
          data-sig="lumen"
          aria-label="Exposure calculator"
        >
          <div className="lu-exposure">
            <div className="lu-exposure__head">
              <p className="sig__eyebrow">Set the shot</p>
              <h2 className="sig__title">Read the light before you take it</h2>
              <p className="lu-exposure__lede">
                Three dials off the top plate, one number in the window. Slide them the way you
                would in the room and the viewfinder tells you what the light is actually asking
                for.
              </p>
            </div>
            <div className="lu-exposure__body">
              <div className="lu-plate">
                <div className="lu-scale">
                  <label className="lu-scale__label" htmlFor="lu-aperture">
                    Aperture{' '}
                    <output className="lu-scale__value" htmlFor="lu-aperture" data-out="v-aperture">
                      f/4
                    </output>
                  </label>
                  <input
                    className="lu-scale__range"
                    type="range"
                    id="lu-aperture"
                    name="lu-aperture"
                    min={0}
                    max={7}
                    step={1}
                    defaultValue={3}
                  />
                  <div className="lu-scale__ticks" aria-hidden="true">
                    <span>1.4</span>
                    <span>2</span>
                    <span>2.8</span>
                    <span>4</span>
                    <span>5.6</span>
                    <span>8</span>
                    <span>11</span>
                    <span>16</span>
                  </div>
                </div>
                <div className="lu-scale">
                  <label className="lu-scale__label" htmlFor="lu-shutter">
                    Shutter{' '}
                    <output className="lu-scale__value" htmlFor="lu-shutter" data-out="v-shutter">
                      1/125
                    </output>
                  </label>
                  <input
                    className="lu-scale__range"
                    type="range"
                    id="lu-shutter"
                    name="lu-shutter"
                    min={0}
                    max={8}
                    step={1}
                    defaultValue={4}
                  />
                  <div className="lu-scale__ticks" aria-hidden="true">
                    <span>1/2000</span>
                    <span>1/1000</span>
                    <span>1/500</span>
                    <span>1/250</span>
                    <span>1/125</span>
                    <span>1/60</span>
                    <span>1/30</span>
                    <span>1/8</span>
                    <span>1/2</span>
                  </div>
                </div>
                <div className="lu-scale">
                  <label className="lu-scale__label" htmlFor="lu-iso">
                    ISO{' '}
                    <output className="lu-scale__value" htmlFor="lu-iso" data-out="v-iso">
                      400
                    </output>
                  </label>
                  <input
                    className="lu-scale__range"
                    type="range"
                    id="lu-iso"
                    name="lu-iso"
                    min={0}
                    max={6}
                    step={1}
                    defaultValue={2}
                  />
                  <div className="lu-scale__ticks" aria-hidden="true">
                    <span>100</span>
                    <span>200</span>
                    <span>400</span>
                    <span>800</span>
                    <span>1600</span>
                    <span>3200</span>
                    <span>6400</span>
                  </div>
                </div>
              </div>
              <div className="lu-readout" aria-live="polite">
                <p className="lu-readout__settings">
                  <span data-out="settings">f/4 · 1/125 · ISO 400</span>
                </p>
                <p className="lu-readout__ev">
                  <span data-out="ev">EV 9</span>
                </p>
                <div className="lu-readout__frame">
                  <p className="lu-readout__scene" data-out="scene">
                    Bright room, open shade
                  </p>
                  <p className="lu-readout__tip" data-out="tip">
                    This is portrait weather — f/4, ISO 100, watch the window light.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />

        <LumenGuide />

        <LumenBooking />
      </main>

      <template id="tpl-lumen-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-lumen-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-lumen-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />
    </Page>
  );
}
