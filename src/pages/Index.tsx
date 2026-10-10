import type { CSSProperties } from 'react';
import { Page } from '../components/Page';
import { Faq } from '../components/Faq';
import { CATEGORIES, pathOf } from '../data/categories';
import { contentForSlug } from '../data/content';

const NAV_ITEMS: [string, string][] = [
  ['Work', '#work'],
  ['Studio', '#studio'],
  ['Team', '#team'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
];

const TEAM = [
  {
    name: 'Hossein Mobarakian',
    role: 'Full-stack Engineer · Node · React · Rust',
    bio: 'Owns end-to-end delivery — from React frontends to Node services to performance-critical Rust modules. Led the backend architecture of both Flyksoft and Lebino, and makes the call on where Rust pays for itself.',
    tags: ['System architecture', 'API design', 'Performance', 'Async workers'],
  },
  {
    name: 'Mansour Mobarakian',
    role: 'Product Designer · React Frontend',
    bio: "The bridge between product vision and shipped interface. Designs the flows, then writes the React that ships them — in the same sprint. Built Flyksoft's scheduling UI and Lebino's offline-aware POS flow.",
    tags: ['Design systems', 'Figma', 'React', 'Accessibility'],
  },
  {
    name: 'Ilya Rashno',
    role: 'Backend Engineer · Node.js · APIs & Data',
    bio: 'Builds the backend that keeps products reliable at scale — API design, data modeling, auth, background workers, and the offline-first sync engine that powers Lebino. Treats APIs as products: versioned, documented, observable.',
    tags: ['API design', 'Sync engines', 'Auth & security', 'Background jobs'],
  },
];

const TEMPLATE_INDEX_1 = `
  <p class="modal__kicker">Four Landings · the mechanics</p>
  <h2>How this page works</h2>
  <p>One React app, one shared layout, four voices. The portfolio index is itself a landing page so the parts you are buying are the parts you are looking at.</p>
  <ul>
    <li>Four pages share a nav, footer, FAQ, enquiry form and SEO head — each swaps its own hero, palette and sections</li>
    <li>Every page ships canonical URLs, structured data and a real sitemap, not a plugin afterthought</li>
    <li>Sub pages sit one level under each landing so the crawl depth is intentional</li>
    <li>Forms validate in the browser against the spec that rendered them, with a honeypot that bots always find first</li>
    <li>Curtain page transitions, dialogs and toasts all happen without a full page reload</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#work">See all four</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

export default function Index() {
  const content = contentForSlug('index');
  if (!content) return null;

  return (
    <Page
      slug="index"
      brand="Four Landings"
      title={content.title}
      description={content.description}
      seoPath="/"
      navItems={NAV_ITEMS}
    >
      <main className="page-index">
        <section className="wrap hero">
          <p className="hero__kicker">Portfolio · 4 business categories · 4 templates</p>
          <h1 className="hero__title">
            Four landing pages.
            <br />
            <em>One next button.</em>
          </h1>
          <p className="hero__lede">
            Every card below is a complete landing page for a different kind of business —
            its own React page, palette, type stack and sections. Step through them: a
            circle wipes on this page and lifts on the next.
          </p>
          <div className="hero__actions">
            <a className="btn btn--accent" href="/p/saffron">
              Start the tour <span aria-hidden="true">&#8594;</span>
            </a>
            <a className="btn btn--ghost" href="#work">
              See all four
            </a>
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-index-1">
              How this works
            </button>
          </div>
          <p className="hero__hint">
            No two layouts are shared.{' '}
            <a href="/p/saffron">Start with the restaurant &#8594;</a>
          </p>
        </section>

        <section className="wrap work" id="work">
          <div className="section-head">
            <h2 className="section-title">The collection</h2>
            <p className="section-note">Four industries, four visual identities.</p>
          </div>
          <div className="grid">
            {CATEGORIES.map((card) => (
              <a
                key={card.slug}
                className="card"
                href={pathOf(card)}
                data-slug={card.slug}
                style={
                  {
                    '--card-accent': card.accent,
                    '--card-ink': card.onAccent,
                  } as CSSProperties
                }
              >
                <span className="card__label">{card.label}</span>
                <h3 className="card__name">{card.name}</h3>
                <p className="card__tagline">{card.tagline}</p>
                <span className="card__cta">
                  Open landing <span aria-hidden="true">&#8594;</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="wrap studio" id="studio">
          <div className="section-head">
            <h2 className="section-title">How it is built</h2>
            <p className="section-note">Client-routed, statically typed, compiled ahead of time.</p>
          </div>
          <div className="studio__cols">
            <article className="step">
              <span className="step__num">01</span>
              <h3>One app, four voices</h3>
              <p>
                Each landing is its own React component, hoisted into Million blocks at build
                time so updates stay close to plain JavaScript. Shared head, nav, footer and
                call-to-action are components used by all four.
              </p>
            </article>
            <article className="step">
              <span className="step__num">02</span>
              <h3>One route, one page</h3>
              <p>
                The router maps <code>/p/{'{slug}'}</code> to a page component. Four routes, four
                schemas, four distinct designs — all checked by TypeScript before anything
                ships.
              </p>
            </article>
            <article className="step">
              <span className="step__num">03</span>
              <h3>The circle wipe</h3>
              <p>
                The next button grows one circle over the page from your click, swaps the
                route behind it, then fades into the new page. One wipe, no reload — it plays
                exactly once.
              </p>
            </article>
          </div>
        </section>

        <section className="wrap team" id="team">
          <div className="section-head">
            <div>
              <p className="team__kicker">Lebino Studio · 2026 · 04 / 04</p>
              <h2 className="section-title">The team</h2>
            </div>
            <p className="section-note">
              Three people, one sprint: the design, the interface and the engine behind it.
            </p>
          </div>
          <div className="team__grid">
            {TEAM.map((member, i) => (
              <article key={member.name} className="member">
                <span className="member__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="member__name">{member.name}</h3>
                <p className="member__role">{member.role}</p>
                <p className="member__bio">{member.bio}</p>
                <ul className="member__tags">
                  {member.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <Faq slug="index" />

        <section className="wrap contact" id="contact">
          <div className="contact__inner">
            <div>
              <h2 className="section-title">Want one for your business?</h2>
              <p className="section-note">
                Tell me the industry and I will send back a landing page, not a mood board.
              </p>
            </div>
            <a className="btn btn--accent" href="mailto:hello@example.com">
              hello@example.com
            </a>
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
          <span className="lp-modal__brand">Four Landings · quick note</span>
          <form method="dialog">
            <button className="lp-modal__close" type="submit" value="close" aria-label="Dismiss">
              &#10005;
            </button>
          </form>
        </div>
        <div className="lp-modal__body">
          <p className="modal__kicker">Four Landings · behind the curtain</p>
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
