import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { EnquiryForm } from '../../components/EnquiryForm';
import { lumen } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'lumen';
const BRAND = 'Lumen Studio';

const TEMPLATE_1 = `
  <p class="modal__kicker">Lumen Studio · booking</p>
  <h2>How to hold a date</h2>
  <p>A shoot starts with a rough note, not a contract. Tell us roughly when and what, and you get two or three dates, one fixed price and a straight answer on availability the same working day.</p>
  <ul>
    <li>Weekdays, 09:00 to 18:00, with Saturday mornings held for portrait and headshot series</li>
    <li>Two weeks' notice is comfortable; if the date is tighter, ask anyway — gaps get filled from the waiting list</li>
    <li>A 25% deposit takes the date off the calendar, balance due on the shoot day</li>
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

export default function Lumen() {
  const content = contentForSlug(SLUG);
  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/lumen"
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-lumen">
        <section className="wrap lp-hero lu-hero">
          <div className="lu-hero__col">
            <h1 className="lu-hero__title">
              Light,
              <br />
              arranged.
            </h1>
            <p className="lu-hero__lede">
              People and products, photographed in north-facing daylight with a lot of patience and
              very little fuss.
            </p>
            <div className="lu-hero__rule" aria-hidden="true" />
            <div className="hero__actions">
              <a className="btn btn--accent" href="#enquire">
                Book a shoot
              </a>
              <a className="btn btn--ghost" href="#work">
                See the work
              </a>
              <button type="button" className="btn btn--ghost" data-modal-open="tpl-lumen-1">
                Booking the studio
              </button>
            </div>
          </div>
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
            </div>
          </div>
        </section>

        <section className="wrap lu-section" id="work">
          <div className="section-head">
            <h2 className="section-title">Selected frames</h2>
            <p className="section-note">A rotating wall from the last two seasons.</p>
          </div>
          <div className="lu-wall">
            {lumen.shots.map((shot, i) => {
              const frame = String(i + 1).padStart(2, '0');
              return (
                <figure key={shot.title} className={`lu-shot lu-shot--${i % 3}`}>
                  <button
                    className="lu-shot__frame"
                    type="button"
                    data-lightbox
                    aria-label={`View frame ${frame}A — ${shot.title}`}
                    data-lightbox-title={shot.title}
                    data-lightbox-tag={shot.kind}
                    data-lightbox-text={shot.note}
                  >
                    <span className="lu-shot__num" aria-hidden="true">
                      {frame}
                    </span>
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
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-lumen-2">
              Directing, not posing
            </button>
          </div>
        </section>

        <section className="lu-band" id="packages">
          <div className="wrap lu-section">
            <div className="section-head section-head--light">
              <h2 className="section-title">Packages</h2>
              <p className="section-note">Half-day rates available on request.</p>
            </div>
            <div className="lu-plans">
              {lumen.plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`lu-plan${plan.featured ? ' lu-plan--featured' : ''}`}
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

        <section className="wrap lu-section" id="studio">
          <div className="lu-about">
            <div>
              <h2 className="section-title">The studio</h2>
              <p className="section-note">
                Five-metre windows, a paper roll that never ends, and a dog that occasionally walks
                through frame. Bring your product, your team or yourself — we will find the light.
              </p>
            </div>
            <div className="lu-stats">
              {lumen.stats.map((stat) => (
                <div key={stat.label} className="lu-stat">
                  <span className="lu-stat__value">{stat.value}</span>
                  <span className="lu-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mini-actions">
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
                    Dim interior
                  </p>
                  <p className="lu-readout__tip" data-out="tip">
                    Open the aperture a stop or push ISO to 1600 before you slow down.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />

        <EnquiryForm slug={SLUG} />
      </main>

      <template id="tpl-lumen-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-lumen-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-lumen-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />
    </Page>
  );
}
