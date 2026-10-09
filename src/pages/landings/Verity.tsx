import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { EnquiryForm } from '../../components/EnquiryForm';
import { verity } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'verity';
const BRAND = 'Verity & Hale';

const TEMPLATE_1 = `
  <p class="modal__kicker">Verity &amp; Hale · process</p>
  <h2>From first email to last letter</h2>
  <p>Not every firm shows you the machinery. This is the shape of a matter here: who does what, when you hear from us, and the two moments where nothing can move until you reply.</p>
  <ul>
    <li>Day one: your file is opened and a short call where we write down what winning looks like — in your words, not our labels</li>
    <li>You hear from the partner leading the matter on a fixed rhythm — a note after every call and every letter, even when it says only that nothing moved this week</li>
    <li>Two things wait on you: answering the other side, and approving a letter before it leaves the building</li>
    <li>Everything we send is written to be read once — advice, risk and next step in the first paragraph, not buried in paragraph four</li>
    <li>When the matter closes you get the whole file in one archive, plus a note of any date that still matters afterwards</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Start the conversation</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <p class="modal__kicker">Verity &amp; Hale · departments</p>
  <h2>Four departments that share a table</h2>
  <p>Most matters do not arrive labelled. A shareholder row becomes an employment problem, a dispute crosses into the company's books — here is how the four on this page actually divide the work.</p>
  <ul>
    <li>Commercial disputes sits in the middle: contracts, supply chains and joint ventures, usually starting with advice before anyone writes anything formal</li>
    <li>Shareholder work is the governance side — dilution, boardroom rows, and the paperwork that settles who owns what before anyone needs a lawyer</li>
    <li>Employment runs at both ends: hires, exits and investigations, from the meeting room where it starts to the letter where it arrives</li>
    <li>Private wealth is the long game — the structures that outlast the deal and the families who live with them afterwards</li>
    <li>Two departments on one matter is normal; you keep one lead partner either way and never brief the same story twice</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Talk to the right partner</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <p class="modal__kicker">Verity &amp; Hale · regulation</p>
  <h2>Who watches the watchers</h2>
  <p>Being a partner-led firm does not mean unaccountable. We are regulated on both sides of the Irish Sea, insured for the work we take on, and the complaints route is shorter than most people expect.</p>
  <ul>
    <li>In England we are regulated by the Solicitors Regulation Authority; in Ireland by the Legal Services Regulatory Authority — both sets of rules travel with the file</li>
    <li>Client money never sits in our own account: funds are held separately, audited yearly and never lent back to the practice</li>
    <li>Professional indemnity cover is sized to the work and runs with the matter; the policy is available to see on request</li>
    <li>If something goes wrong, tell the partner first — and if that fails, the Legal Ombudsman in England and the regulator's process in Ireland are both free to start</li>
    <li>Regulation is also why your business stays yours: confidentiality is not a courtesy here, it is a rule with a licence attached</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#enquire">Put a question to a partner</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

export default function Verity() {
  const content = contentForSlug(SLUG);
  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/verity"
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-verity">
        <section className="wrap lp-hero ve-hero">
          <p className="ve-hero__file">
            <span className="ve-hero__file-no">File No. 1187</span>
            <span className="ve-hero__file-rest">Verity &amp; Hale LLP · London &amp; Dublin</span>
          </p>
          <h1 className="ve-hero__title">Counsel for the consequential.</h1>
          <div className="ve-drule ve-hero__rule" aria-hidden="true" />
          <p className="ve-hero__lede">
            We advise founders, boards and families on the matters that decide what happens next.
            Small teams, senior attention, straight answers.
          </p>
          <dl className="ve-ledger">
            <div className="ve-ledger__col">
              <dt>Fee basis</dt>
              <dd>Fixed &amp; capped</dd>
            </div>
            <div className="ve-ledger__col">
              <dt>Jurisdictions</dt>
              <dd>England &amp; Wales · Ireland</dd>
            </div>
            <div className="ve-ledger__col">
              <dt>Partner tenure</dt>
              <dd>31 yrs</dd>
            </div>
          </dl>
          <div className="hero__actions">
            <a className="btn btn--accent" href="#enquire">
              Request a consultation
            </a>
            <a className="btn btn--ghost" href="#practice">
              Practice areas
            </a>
            <button type="button" className="ve-textlink" data-modal-open="tpl-verity-1">
              How a matter runs
            </button>
          </div>
        </section>

        <section className="wrap ve-section" id="practice">
          <div className="section-head">
            <h2 className="section-title">Practice areas</h2>
            <p className="section-note">Four departments, one standard of care.</p>
          </div>
          <div className="ve-areas">
            {verity.areas.map((area) => (
              <article key={area.name} className="ve-area">
                <h3 className="ve-area__name">{area.name}</h3>
                <p className="ve-area__detail">{area.detail}</p>
              </article>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-verity-2">
              Where the four departments overlap
            </button>
          </div>
        </section>

        <section className="ve-band" id="results">
          <div className="wrap ve-section">
            <div className="section-head section-head--light">
              <h2 className="section-title">On the record</h2>
              <p className="section-note">Outcomes we are allowed to publish.</p>
            </div>
            <div className="ve-stats">
              {verity.stats.map((stat) => (
                <div key={stat.value} className="ve-stat">
                  <span className="ve-stat__value">{stat.value}</span>
                  <span className="ve-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap ve-section" id="partners">
          <div className="section-head">
            <h2 className="section-title">Partners</h2>
            <p className="section-note">You work with the person you first speak to.</p>
          </div>
          <div className="ve-partners">
            {verity.partners.map((partner) => (
              <article key={partner.name} className="ve-partner">
                <span className="ve-partner__crest" aria-hidden="true">
                  VH
                </span>
                <div>
                  <h3 className="ve-partner__name">{partner.name}</h3>
                  <p className="ve-partner__role">{partner.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mini-actions">
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-verity-3">
              Regulated in two countries
            </button>
          </div>
        </section>

        <section
          className="wrap sig sig--verity"
          id="fees"
          data-sig="verity"
          aria-label="Fee estimator"
        >
          <div className="ve-fees">
            <header className="ve-fees__head">
              <p className="ve-fees__stamp">Estimate · no obligation</p>
              <h2 className="ve-fees__title">What will it cost?</h2>
              <p className="ve-fees__lede">
                Pick the matter and how much it involves. The band moves as you do — the same
                bands we quote from.
              </p>
            </header>
            <div className="ve-fees__controls">
              <p className="ve-fees__field">
                <label className="ve-fees__label" htmlFor="ve-matter">
                  Matter
                </label>
                <select className="ve-fees__select" id="ve-matter" name="ve-matter">
                  <option value="employment">Employment</option>
                  <option value="conveyancing">Conveyancing</option>
                  <option value="family">Family</option>
                  <option value="debt">Debt recovery</option>
                </select>
              </p>
              <fieldset className="ve-fees__complex">
                <legend className="ve-fees__legend">Complexity</legend>
                <div className="ve-fees__chips">
                  <label className="ve-fees__chip">
                    <input type="radio" name="ve-complex" value="straight" defaultChecked />
                    <span>Straightforward</span>
                  </label>
                  <label className="ve-fees__chip">
                    <input type="radio" name="ve-complex" value="involved" />
                    <span>Involved</span>
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="ve-fees__ledger" aria-live="polite">
              <div className="ve-fees__row">
                <span className="ve-fees__key">Matter</span>
                <span className="ve-fees__val" data-out="label">
                  Employment · straightforward
                </span>
              </div>
              <div className="ve-fees__row">
                <span className="ve-fees__key">Guideline fee</span>
                <span className="ve-fees__val ve-fees__val--fee" data-out="fee">
                  £350 – £700 + VAT
                </span>
              </div>
              <div className="ve-fees__row">
                <span className="ve-fees__key">Disbursements</span>
                <span className="ve-fees__val" data-out="disburse">
                  No third-party costs unless a claim is issued.
                </span>
              </div>
              <div className="ve-fees__row">
                <span className="ve-fees__key">What's included</span>
                <div className="ve-fees__val" data-out="included">
                  <ul>
                    <li>Fixed fee agreed in writing before any work starts</li>
                    <li>Contract and handbook reviewed in two working days</li>
                    <li>One round of amendments included</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ve-fees__foot">
              <p className="ve-fees__note">Guideline bands, not quotes. First 30 minutes are free.</p>
              <a className="ve-fees__cta" href="#enquire">
                Request a consultation
              </a>
            </div>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />
        <EnquiryForm slug={SLUG} />
      </main>

      <template id="tpl-verity-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-verity-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-verity-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />
    </Page>
  );
}
