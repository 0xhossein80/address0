import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Page } from '../components/Page';
import { Faq } from '../components/Faq';
import { CATEGORIES, pathOf } from '../data/categories';
import { contentForSlug } from '../data/content';

const NAV_ITEMS: [string, string][] = [
  ['Work', '#work'],
  ['Why us', '#studio'],
  ['Process', '#process'],
  ['Team', '#team'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
];

const EMAIL = 'address0.team@proton.me';

/* ------------------------------------------------------------------ icons */

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const ITarget = () => (
  <Icon><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></Icon>
);
const IFunnel = () => (
  <Icon><path d="M4 5h16l-6.2 7.2v5.3L10.2 20v-7.8L4 5Z" /><path d="M7.5 5 4 5" /></Icon>
);
const IBolt = () => (
  <Icon><path d="M13 3 5.5 13.5H11L10 21l7.5-10.5H12L13 3Z" /></Icon>
);
const IChart = () => (
  <Icon><path d="M4 4v15.5h16" /><path d="M8.5 15.5v-4M12.5 15.5V8M16.5 15.5v-6.5" /></Icon>
);
const IMap = () => (
  <Icon><path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" /><path d="M9 4v14M15 6v14" /></Icon>
);
const IPen = () => (
  <Icon><path d="M4 20l1-4.5L16.5 4a2.1 2.1 0 0 1 3 3L8 18.5 4 20Z" /><path d="M14.5 6l3 3" /></Icon>
);
const IRocket = () => (
  <Icon><path d="M12 3c3.5 1.5 6 4.5 6.5 9l2.5 2.5-3.5.5c-1 2-2.5 3.5-4 4.5l-1.5-3c-1 .2-2 .2-3 0l-1.5 3c-1-1-2.5-2.5-3.5-4.5L.5 14.5 3 12c4.5-.5 7.5-3 9-9Z" /><circle cx="14.5" cy="9.5" r="1.6" /></Icon>
);
const ICheck = () => (
  <Icon><path d="M4.5 12.5 10 18 19.5 6.5" /></Icon>
);
const IArrow = () => (
  <Icon><path d="M4 12h15M13.5 6 19.5 12 13.5 18" /></Icon>
);
const IMail = () => (
  <Icon><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" /><path d="m4.5 7.5 7.5 6 7.5-6" /></Icon>
);
const IShield = () => (
  <Icon><path d="M12 3.5 5 6v6c0 4.5 3 7.5 7 8.5 4-1 7-4 7-8.5V6l-7-2.5Z" /><path d="m9 12 2.2 2.2L15.5 10" /></Icon>
);
const ISearch = () => (
  <Icon><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></Icon>
);
const IClock = () => (
  <Icon><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></Icon>
);

/* ---------------------------------------------------------- sales angles */

const SALES_ANGLE: Record<string, { icon: () => JSX.Element; angle: string; proof: string }> = {
  saffron: {
    icon: IClock,
    angle: 'Reservation-first: sittings, menu and allergens answered before the call.',
    proof: 'Sittings · party size · dietary notes',
  },
  wanderly: {
    icon: IMap,
    angle: 'Itinerary-in-48h funnel: trip, window and party captured up front.',
    proof: 'Trip · window · travellers',
  },
  lumen: {
    icon: IBolt,
    angle: 'Quote-in-a-day flow: package, shoot type and date held for 48 hours.',
    proof: 'Package · shoot type · date hold',
  },
  atelier: {
    icon: IShield,
    angle: 'Size-confidence flow: measurements, fabrics and care that cut returns.',
    proof: 'Sizing · fabrics · care guide',
  },
};

const CARD_ICON: Record<string, () => JSX.Element> = {
  saffron: IClock,
  wanderly: IMap,
  lumen: IBolt,
  atelier: IShield,
};

/* ------------------------------------------------------------------ team */

const TEAM = [
  {
    initials: '0xH',
    name: '0xHossein',
    role: 'Sales-Focused Engineer',
    focus: 'Strategy + Code',
    bio: 'Turns customer pain into systems that sell. Owns the path from first click to ticket receipt — positioning, forms, validation, and the performance budget that keeps it fast.',
    tags: ['Sales strategy', 'Architecture', 'Performance'],
  },
  {
    initials: '0xM',
    name: '0xMansour',
    role: 'Conversion Designer',
    focus: 'UX + CRO',
    bio: 'Designs the decision, not just the screen. Headlines, hierarchy and flows that guide attention toward one action — because beautiful means nothing if it doesn’t convert.',
    tags: ['CRO', 'Psychology', 'Design systems'],
  },
  {
    initials: '0xI',
    name: '0xIlya',
    role: 'Growth Engineer',
    focus: 'Data + Automation',
    bio: 'Builds the engine behind the pitch: capture, qualification and follow-up that scale. Tracking, automation and APIs that turn enquiries into pipeline.',
    tags: ['Lead capture', 'Automation', 'Analytics'],
  },
];

/* --------------------------------------------------------------- helpers */

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.az-reveal'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) {
      setVal(to);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1100;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * to));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const TEMPLATE_INDEX_1 = `
  <p class="modal__kicker">Address(0) · how we work</p>
  <h2>Strategy-first, not design-first</h2>
  <p>We bridge the gap between traffic and revenue. Before we touch pixels, we map your offer to your customer's decision path.</p>
  <ul>
    <li>Positioning & messaging that speaks directly to your ideal customer</li>
    <li>Conversion architecture built around your specific sales goals</li>
    <li>Frictionless user flows designed to guide action at every step</li>
    <li>Performance-optimized builds that don't sacrifice speed for conversion</li>
    <li>Real SEO furniture: canonicals, structured data, sitemap, sub-pages</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#work">Browse the showcase</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

/* ------------------------------------------------------------------ page */

export default function Index() {
  const content = contentForSlug('index');
  useReveal();
  if (!content) return null;

  return (
    <Page
      slug="index"
      brand="Address(0)"
      title={content.title}
      description={content.description}
      seoPath="/"
      navItems={NAV_ITEMS}
    >
      <main className="page-index">
        {/* ================= HERO ================= */}
        <section className="wrap az-hero">
          <div className="az-hero__bg" aria-hidden="true">
            <span className="az-blob az-blob--a" />
            <span className="az-blob az-blob--b" />
            <span className="az-grid" />
          </div>

          <div className="az-hero__copy">
            <p className="az-kicker az-anim" style={{ '--d': '0ms' } as CSSProperties}>
              <span className="az-pulse" aria-hidden="true" />
              Not just developers · We’re sales planners
            </p>
            <h1 className="az-title">
              <span className="az-anim" style={{ '--d': '80ms' } as CSSProperties}>Pages that pitch.</span>
              <span className="az-anim az-title__grad" style={{ '--d': '180ms' } as CSSProperties}>
                Built to close.
              </span>
            </h1>
            <p className="az-lede az-anim" style={{ '--d': '280ms' } as CSSProperties}>
              We map your offer to your buyer’s decision — then design the shortest
              path from first click to booked, quoted or bought. Each build below
              is a working showcase demo for a fictional business: real forms,
              real sub-pages, real SEO. No mockups, no screenshots.
            </p>
            <div className="az-cta az-anim" style={{ '--d': '380ms' } as CSSProperties}>
              <a className="btn btn--accent az-btn--glow" href="#work">
                Browse the showcase <span aria-hidden="true"><IArrow /></span>
              </a>
              <a className="btn btn--ghost" href={`mailto:${EMAIL}`}>
                <span aria-hidden="true"><IMail /></span> {EMAIL}
              </a>
              <button type="button" className="btn btn--ghost az-btn--quiet" data-modal-open="tpl-index-1">
                How we think
              </button>
            </div>
            <dl className="az-stats az-anim" style={{ '--d': '480ms' } as CSSProperties}>
              <div>
                <dt>Showcase demos</dt>
                <dd><CountUp to={4} /></dd>
              </div>
              <div>
                <dt>Crawlable sub-pages</dt>
                <dd><CountUp to={16} /></dd>
              </div>
              <div>
                <dt>Mockups</dt>
                <dd>0</dd>
              </div>
            </dl>
          </div>

          <div className="az-hero__visual az-anim" style={{ '--d': '300ms' } as CSSProperties} aria-hidden="true">
            <div className="az-mock">
              <div className="az-mock__bar">
                <span className="az-dot" /><span className="az-dot" /><span className="az-dot" />
                <span className="az-url">your-offer.com — built to convert</span>
                <span className="az-live"><span className="az-pulse az-pulse--sm" /> live</span>
              </div>
              <div className="az-mock__body">
                <div className="az-mock__nav"><span /><span /><span /></div>
                <div className="az-mock__h1"><span /><span className="short" /></div>
                <div className="az-mock__row">
                  <span className="az-mock__cta" />
                  <span className="az-mock__ghost" />
                </div>
                <div className="az-mock__cards"><span /><span /><span /></div>
              </div>
              <div className="az-float az-float--1">
                <span className="az-float__icon"><ICheck /></span>
                <span><strong>Enquiry received</strong><em>Ticket TL-0007 · confirmed</em></span>
              </div>
              <div className="az-float az-float--2">
                <span className="az-float__icon"><ISearch /></span>
                <span><strong>SEO furniture</strong><em>Canonical · JSON-LD · sitemap ✓</em></span>
              </div>
              <div className="az-float az-float--3">
                <span className="az-float__icon"><IChart /></span>
                <span><strong>Path: click → action</strong><em>CTA · form · receipt</em></span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TICKER ================= */}
        <div className="az-ticker" aria-hidden="true">
          <div className="az-ticker__track">
            {Array.from({ length: 2 }).map((_, k) => (
              <div className="az-ticker__run" key={k}>
                {['Positioning before pixels', 'Offer mapping', 'Friction removal', 'Objection handling', 'Real forms + receipts', 'Crawlable sub-pages', 'Structured data', 'Speed budgets'].map((t) => (
                  <span key={t} className="az-ticker__item"><span className="az-ticker__sep">✦</span>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ================= WORK ================= */}
        <section className="wrap az-section" id="work">
          <div className="az-head az-reveal">
            <p className="az-eyebrow">01 — Showcase</p>
            <h2 className="az-h2">Four demos.<br />Four sales flows.</h2>
            <p className="az-sub">
              Each card is a fully working demo page for a fictional business — open one
              and walk the funnel. Forms validate, tickets land, sub-pages crawl.
            </p>
          </div>
          <div className="az-cards">
            {CATEGORIES.map((card, i) => {
              const meta = SALES_ANGLE[card.slug];
              const Glyph = CARD_ICON[card.slug] ?? ITarget;
              return (
                <a
                  key={card.slug}
                  className="az-card az-reveal"
                  style={{ '--d': `${i * 90}ms`, '--card-accent': card.accent, '--card-ink': card.onAccent } as CSSProperties}
                  href={pathOf(card)}
                  data-slug={card.slug}
                >
                  <span className="az-card__top">
                    <span className="az-card__icon"><Glyph /></span>
                    <span className="az-card__label">{card.label}</span>
                  </span>
                  <h3 className="az-card__name">{card.name}</h3>
                  <p className="az-card__tag">{card.tagline}</p>
                  {meta ? <p className="az-card__angle">{meta.angle}</p> : null}
                  {meta ? <p className="az-card__proof">{meta.proof}</p> : null}
                  <span className="az-card__cta">
                    Open the funnel <span aria-hidden="true"><IArrow /></span>
                  </span>
                  <span className="az-card__sheen" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </section>

        {/* ================= WHY ================= */}
        <section className="wrap az-section" id="studio">
          <div className="az-head az-reveal">
            <p className="az-eyebrow">02 — Why sales-first wins</p>
            <h2 className="az-h2">Pretty doesn’t sell.<br />Planned does.</h2>
            <p className="az-sub">Three disciplines on every page — miss one and the funnel leaks.</p>
          </div>
          <div className="az-why">
            <article className="az-why__item az-reveal" style={{ '--d': '0ms' } as CSSProperties}>
              <span className="az-why__icon"><ITarget /></span>
              <p className="az-why__num">01</p>
              <h3>Positioning before pixels</h3>
              <p>We sharpen the offer, the buyer and the one action that matters. Every headline, section and CTA earns its place on the path to that action.</p>
              <ul><li>Offer + buyer clarity</li><li>One action per page</li><li>Message-market fit</li></ul>
            </article>
            <article className="az-why__item az-reveal" style={{ '--d': '100ms' } as CSSProperties}>
              <span className="az-why__icon"><IFunnel /></span>
              <p className="az-why__num">02</p>
              <h3>Funnels, not brochures</h3>
              <p>Attention → trust → action. Objections answered where doubt appears, proof placed where it converts, forms that ask only what the sale needs.</p>
              <ul><li>Objection handling</li><li>Proof at doubt points</li><li>Minimal-field forms</li></ul>
            </article>
            <article className="az-why__item az-reveal" style={{ '--d': '200ms' } as CSSProperties}>
              <span className="az-why__icon"><IBolt /></span>
              <p className="az-why__num">03</p>
              <h3>Engineering that holds</h3>
              <p>Fast static builds, validating forms with ticket receipts, canonicals, structured data and crawlable sub-pages. The machinery never leaks the sale.</p>
              <ul><li>Real validation + receipts</li><li>SEO furniture included</li><li>Speed on budget</li></ul>
            </article>
          </div>

          <div className="az-compare az-reveal">
            <div className="az-compare__col az-compare__col--no">
              <h3><span aria-hidden="true">✕</span> A pretty page</h3>
              <ul><li>Headline about the company</li><li>Gallery with no next step</li><li>Contact form with 9 fields</li><li>SEO “later, maybe”</li></ul>
            </div>
            <div className="az-compare__vs" aria-hidden="true">vs</div>
            <div className="az-compare__col az-compare__col--yes">
              <h3><span aria-hidden="true">✓</span> A sales page by Address(0)</h3>
              <ul><li>Headline about the buyer’s outcome</li><li>Proof placed at doubt points</li><li>Form that asks only what closes</li><li>Canonicals, JSON-LD + sub-pages day one</li></ul>
            </div>
          </div>
        </section>

        {/* ================= OUTCOMES ================= */}
        <section className="wrap az-section" id="outcomes">
          <div className="az-head az-reveal">
            <p className="az-eyebrow">03 — What changes</p>
            <h2 className="az-h2">Built for the metric<br />that matters.</h2>
          </div>
          <div className="az-outcomes">
            <article className="az-reveal" style={{ '--d': '0ms' } as CSSProperties}>
              <span className="az-outcomes__icon"><IChart /></span>
              <h3>More enquiries per visit</h3>
              <p>One action, zero dead ends. Strategic CTAs and short forms turn browsers into ticketed enquiries you can follow up.</p>
            </article>
            <article className="az-reveal" style={{ '--d': '100ms' } as CSSProperties}>
              <span className="az-outcomes__icon"><IFunnel /></span>
              <h3>Less wasted ad spend</h3>
              <p>Cold traffic lands on a page that answers, proves and asks — so the same budget brings back more qualified conversations.</p>
            </article>
            <article className="az-reveal" style={{ '--d': '200ms' } as CSSProperties}>
              <span className="az-outcomes__icon"><IShield /></span>
              <h3>Fewer tyre-kickers</h3>
              <p>Positioning filters for fit. Pricing cues, scope honesty and pre-qualifying questions mean the inbox fills with buyers, not browsers.</p>
            </article>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="wrap az-section" id="process">
          <div className="az-head az-reveal">
            <p className="az-eyebrow">04 — How we work</p>
            <h2 className="az-h2">From first call<br />to closing page.</h2>
            <p className="az-sub">A straight line. No theatre, no 40-slide decks.</p>
          </div>
          <ol className="az-steps">
            {[
              { icon: ISearch, t: 'Sales discovery', d: 'Offer, buyer, action. We find the sentence that makes someone buy — everything hangs off it.' },
              { icon: IMap, t: 'Conversion map', d: 'The click-to-action path on one page: sections, objections, proof and the single ask.' },
              { icon: IPen, t: 'Copy + design', d: 'Words that pitch, visuals that guide. Built in your voice, skinned for your industry.' },
              { icon: IRocket, t: 'Launch + iterate', d: 'Fast, SEO-ready, measurable. Forms receipted, pages crawlable, ready to test and sharpen.' },
            ].map((s, i) => (
              <li key={s.t} className="az-step az-reveal" style={{ '--d': `${i * 100}ms` } as CSSProperties}>
                <span className="az-step__icon"><s.icon /></span>
                <span className="az-step__num">0{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ================= TEAM ================= */}
        <section className="wrap az-section" id="team">
          <div className="az-head az-reveal">
            <p className="az-eyebrow">05 — The planners</p>
            <h2 className="az-h2">Three minds.<br />One pipeline.</h2>
            <p className="az-sub">Address(0) · 2026 — design, interface and engine, one sprint.</p>
          </div>
          <div className="az-team">
            {TEAM.map((m, i) => (
              <article key={m.name} className="az-member az-reveal" style={{ '--d': `${i * 100}ms` } as CSSProperties}>
                <span className="az-member__avatar" aria-hidden="true">{m.initials}</span>
                <h3>{m.name}</h3>
                <p className="az-member__role">{m.role} <em>· {m.focus}</em></p>
                <p className="az-member__bio">{m.bio}</p>
                <ul>{m.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <Faq slug="index" />

        {/* ================= CONTACT ================= */}
        <section className="wrap az-section" id="contact">
          <div className="az-cta-panel az-reveal">
            <div className="az-cta-panel__glow" aria-hidden="true" />
            <p className="az-eyebrow az-eyebrow--light">06 — Start selling</p>
            <h2>Tell us what you sell.<br />We’ll plan how it closes.</h2>
            <p>Industry, offer, and the action you want — booking, quote or checkout. We reply with a conversion map, not a mood board.</p>
            <div className="az-cta-panel__row">
              <a className="btn btn--accent az-btn--glow" href={`mailto:${EMAIL}?subject=Plan%20my%20sales%20page`}>
                <span aria-hidden="true"><IMail /></span> {EMAIL}
              </a>
              <a className="btn btn--on-dark" href="#work">Revisit the showcase</a>
            </div>
            <p className="az-cta-panel__fine">Prefer browsing? Every page above is the proposal — open one and try to convert.</p>
          </div>
        </section>
      </main>

      <template id="tpl-index-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_INDEX_1 }} />

      <dialog
        className="lp-modal"
        id="popup-index"
        data-popup
        data-popup-key="lp-popup-index"
        data-popup-delay="5000"
        aria-labelledby="popup-index-title"
      >
        <div className="lp-modal__bar">
          <span className="lp-modal__brand">Address(0) · quick note</span>
          <form method="dialog">
            <button className="lp-modal__close" type="submit" value="close" aria-label="Dismiss">
              &#10005;
            </button>
          </form>
        </div>
        <div className="lp-modal__body">
          <p className="modal__kicker">Address(0) · behind the curtain</p>
          <h2 id="popup-index-title">Everything here actually runs</h2>
          <p>
            These are not screenshots. Every button, form, dialog and sub page on this site is
            wired to something real — try one before you close this box.
          </p>
          <ul>
            <li>Each landing has four sub pages you can crawl like a visitor would</li>
            <li>The forms validate for real, with honeypots and ticket receipts</li>
            <li>Modals, popups and toasts are keyboard-accessible — Escape closes them</li>
          </ul>
          <div className="modal__actions">
            <a className="btn btn--accent" href="/p/saffron">
              Start with the restaurant
            </a>
            <button type="button" className="btn btn--ghost" data-modal-close>
              Maybe later
            </button>
          </div>
        </div>
      </dialog>
    </Page>
  );
}
