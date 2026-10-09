import type { CSSProperties } from 'react';
import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { EnquiryForm } from '../../components/EnquiryForm';
import { loop } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'loop';
const BRAND = 'Loopmetric';

const TEMPLATE_1 = `
  <p class="modal__kicker">Loopmetric · the ask</p>
  <h2>Ask a question, get the SQL</h2>
  <p>The ask box is the front door, not a party trick. Every answer arrives as a chart you can edit, the cohort behind it, and the exact SQL that produced it — ready to copy whether you pay us or not.</p>
  <ul>
    <li>Type the question the way you would ask it in standup: why did signups drop on Tuesday?</li>
    <li>Back comes a chart, the cohort underneath it and the generated SQL — edit any of the three</li>
    <li>Rename an event later and every saved question re-runs against the new name instead of quietly breaking</li>
    <li>Pin the answer to a board, share it as a link, or drop the chart straight into the deck</li>
    <li>Saved questions run on a schedule too: the same SQL, posted to Slack every Monday at 09:00</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Start free</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <p class="modal__kicker">Loopmetric · alerts</p>
  <h2>Alerts that earn their inbox</h2>
  <p>Most alerting fires because a number wiggled. Loopmetric waits for a real departure from your own baseline and puts a money figure on the move before it puts the message in front of you.</p>
  <ul>
    <li>Every metric learns its own baseline first, weekday rhythm included, so a quiet Sunday never wakes anyone</li>
    <li>Ranked by revenue impact rather than event volume, and each alert states the dollar figure it thinks you just moved</li>
    <li>Four weeks of comparison sit behind every alert, so a blip and a break do not look alike</li>
    <li>Mute a metric, a segment or a whole release window — nothing is lost while it is muted</li>
    <li>Slack, email or webhook, with the chart and the SQL inside the message; readable without a login</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Turn alerts on</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <p class="modal__kicker">Loopmetric · billing</p>
  <h2>Seats, projects and the bill</h2>
  <p>The invoice follows your projects and your event volume, never your headcount. The analyst, the designer and the intern all get a login on day one, and the bill never notices they arrived.</p>
  <ul>
    <li>Unlimited viewers and editors on every plan, the free one included — nobody pays for looking</li>
    <li>Side Project holds one project; Team and Scale add as many as you are running, off the same snippet</li>
    <li>Upgrades prorate to the day and apply immediately, with the new event limit starting where you are</li>
    <li>Downgrades and cancellations happen in the billing page — no call, no retention offer, no exit survey</li>
    <li>Exports stay open for thirty days after you cancel, so you can leave with the charts you built</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Start free</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

export default function Loop() {
  const content = contentForSlug(SLUG);
  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/loop"
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-loop">
        <section className="wrap lp-hero lo-hero">
          <div className="lo-hero__copy">
            <p className="lo-hero__kicker">Product analytics · SOC 2 · EU hosting</p>
            <h1 className="lo-hero__title">
              Analytics that
              <br />
              <span>answer back.</span>
            </h1>
            <p className="lo-hero__lede">
              Loopmetric turns your product events into plain answers — what shipped, what stuck
              and what to build next — without a SQL dungeon.
            </p>
            <div className="hero__actions">
              <a className="btn btn--accent" href="#enquire">
                Start free
              </a>
              <a className="btn btn--ghost" href="#features">
                See features
              </a>
              <button type="button" className="btn btn--ghost" data-modal-open="tpl-loop-1">
                How asking works
              </button>
            </div>
            <p className="lo-hero__note">50k events free forever · no card</p>
          </div>
          <div className="lo-hero__panel" aria-hidden="true">
            <div className="lo-panel">
              <div className="lo-panel__bar">
                <span className="lo-panel__bar-label">Signups · last 7 days</span>
              </div>
              <div className="lo-panel__chart">
                <span style={{ '--h': '34%' } as CSSProperties} />
                <span style={{ '--h': '52%' } as CSSProperties} />
                <span style={{ '--h': '44%' } as CSSProperties} />
                <span style={{ '--h': '71%' } as CSSProperties} />
                <span style={{ '--h': '63%' } as CSSProperties} />
                <span style={{ '--h': '88%' } as CSSProperties} />
                <span style={{ '--h': '76%' } as CSSProperties} />
              </div>
              <div className="lo-panel__readings">
                <div className="lo-reading">
                  <span className="lo-reading__value">88%</span>
                  <span className="lo-reading__label">Peak</span>
                </div>
                <div className="lo-reading">
                  <span className="lo-reading__value">61%</span>
                  <span className="lo-reading__label">Mean</span>
                </div>
                <div className="lo-reading">
                  <span className="lo-reading__value">34%</span>
                  <span className="lo-reading__label">Low</span>
                </div>
              </div>
              <p className="lo-panel__caption">“Why did signups drop on Tuesday?”</p>
            </div>
          </div>
        </section>

        <section className="wrap lo-section" id="features">
          <div className="section-head">
            <h2 className="section-title">What it does</h2>
            <p className="section-note">Six things that save a product team a week each month.</p>
          </div>
          <div className="lo-features">
            {loop.features.map((feature) => (
              <article key={feature.title} className="lo-feature">
                <h3 className="lo-feature__title">{feature.title}</h3>
                <p className="lo-feature__body">{feature.body}</p>
              </article>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-loop-2">
              How alerts decide
            </button>
          </div>
        </section>

        <section className="wrap lo-section" id="pricing">
          <div className="section-head">
            <h2 className="section-title">Pricing</h2>
            <p className="section-note">Per project, per month. Events rollover for 30 days.</p>
          </div>
          <div className="lo-plans">
            {loop.plans.map((plan) => (
              <article
                key={plan.name}
                className={`lo-plan${plan.featured ? ' lo-plan--featured' : ''}`}
              >
                {plan.featured ? (
                  <p className="lo-plan__tag">Most teams pick this</p>
                ) : null}
                <p className="lo-plan__name">{plan.name}</p>
                <p className="lo-plan__price">{plan.price}</p>
                <p className="lo-plan__detail">{plan.detail}</p>
                <a
                  className="lo-plan__cta"
                  href="#enquire"
                  data-prefill={`plan=${plan.name} — ${plan.price}`}
                >
                  {plan.featured ? 'Start trial' : 'Choose plan'}
                </a>
              </article>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-loop-3">
              Seats and billing
            </button>
          </div>
        </section>

        <section className="lo-band" id="numbers">
          <div className="wrap lo-section">
            <div className="lo-stats">
              {loop.stats.map((stat) => (
                <div key={stat.label} className="lo-stat">
                  <span className="lo-stat__value">{stat.value}</span>
                  <span className="lo-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="lo-band__note">
              Trusted by teams shipping at Northwind, Palette, Copperline, Fieldnote and 2,100
              more.
            </p>
          </div>
        </section>

        <section
          className="wrap sig sig--loop"
          id="funnel"
          data-sig="loop"
          aria-label="Conversion funnel calculator"
        >
          <div className="lo-funnel">
            <div className="lo-funnel__head">
              <h2 className="sig__title">Three dials, one column of money</h2>
              <p className="lo-funnel__lede">
                Move a stage and the whole column recomputes — the same funnel your Monday board
                opens on, running on illustrative numbers instead of your event stream.
              </p>
            </div>
            <div className="lo-funnel__dials">
              <div className="lo-dial">
                <label className="lo-dial__label" htmlFor="lo-signup">
                  Signup{' '}
                  <output className="lo-dial__value" htmlFor="lo-signup" data-out="v-signup">
                    6%
                  </output>
                </label>
                <input
                  className="lo-dial__range"
                  type="range"
                  id="lo-signup"
                  name="lo-signup"
                  min={1}
                  max={20}
                  step={1}
                  defaultValue={6}
                />
                <div className="lo-dial__ends" aria-hidden="true">
                  <span>1%</span>
                  <span>20%</span>
                </div>
              </div>
              <div className="lo-dial">
                <label className="lo-dial__label" htmlFor="lo-activate">
                  Activation{' '}
                  <output className="lo-dial__value" htmlFor="lo-activate" data-out="v-activate">
                    45%
                  </output>
                </label>
                <input
                  className="lo-dial__range"
                  type="range"
                  id="lo-activate"
                  name="lo-activate"
                  min={10}
                  max={90}
                  step={1}
                  defaultValue={45}
                />
                <div className="lo-dial__ends" aria-hidden="true">
                  <span>10%</span>
                  <span>90%</span>
                </div>
              </div>
              <div className="lo-dial">
                <label className="lo-dial__label" htmlFor="lo-paid">
                  Paid{' '}
                  <output className="lo-dial__value" htmlFor="lo-paid" data-out="v-paid">
                    30%
                  </output>
                </label>
                <input
                  className="lo-dial__range"
                  type="range"
                  id="lo-paid"
                  name="lo-paid"
                  min={5}
                  max={60}
                  step={1}
                  defaultValue={30}
                />
                <div className="lo-dial__ends" aria-hidden="true">
                  <span>5%</span>
                  <span>60%</span>
                </div>
              </div>
            </div>
            <div className="lo-funnel__readout" aria-live="polite">
              <div className="lo-stage">
                <p className="lo-stage__row">
                  <span className="lo-stage__name">Visitors</span>
                  <span className="lo-stage__count" data-out="s1">
                    10,000
                  </span>
                </p>
                <span className="lo-stage__track">
                  <span className="lo-stage__bar" data-bar="1" style={{ width: '100%' }} />
                </span>
              </div>
              <div className="lo-stage">
                <p className="lo-stage__row">
                  <span className="lo-stage__name">Signed up</span>
                  <span className="lo-stage__count" data-out="s2">
                    600
                  </span>
                </p>
                <span className="lo-stage__track">
                  <span className="lo-stage__bar" data-bar="2" style={{ width: '6%' }} />
                </span>
              </div>
              <div className="lo-stage">
                <p className="lo-stage__row">
                  <span className="lo-stage__name">Activated</span>
                  <span className="lo-stage__count" data-out="s3">
                    270
                  </span>
                </p>
                <span className="lo-stage__track">
                  <span className="lo-stage__bar" data-bar="3" style={{ width: '2.7%' }} />
                </span>
              </div>
              <div className="lo-stage">
                <p className="lo-stage__row">
                  <span className="lo-stage__name">Paying</span>
                  <span className="lo-stage__count" data-out="s4">
                    81
                  </span>
                </p>
                <span className="lo-stage__track">
                  <span className="lo-stage__bar" data-bar="4" style={{ width: '0.81%' }} />
                </span>
              </div>
              <div className="lo-funnel__mrr">
                <span className="lo-funnel__mrr-label">MRR from these visitors</span>
                <span className="lo-funnel__mrr-value" data-out="mrr">
                  £1,944
                </span>
              </div>
            </div>
            <p className="lo-funnel__note">
              10,000 visitors, £24 plan — illustrative product numbers, not a promise.
            </p>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />
        <EnquiryForm slug={SLUG} />
      </main>

      <template id="tpl-loop-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-loop-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-loop-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />
    </Page>
  );
}
