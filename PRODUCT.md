# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective clients: businesses that need a landing page, arriving to judge whether this team can actually deliver one. Their job on the site is to see real proof and decide to send an enquiry.

## Product Purpose

Ten Landings is Lebino Studio's portfolio site: a working collection of ten complete landing pages for ten business categories (coffee roastery, gym, real estate, dental, law, restaurant, travel, SaaS, photography, fashion) plus a portfolio index that jumps between them. Success is a prospective client landing on a real, functioning page and sending an enquiry — the index states it directly: "Tell me the industry and I will send back a landing page, not a mood board."

## Positioning

The claim is the studio's capability: "we can ship a landing page like this for you." It is proven, not asserted — all ten pages are live, crawlable, individually designed implementations with real forms, sub pages, structured data and navigation, not screenshots or a theme store. A neighboring studio cannot truthfully copy the claim without building the same artifact.

## Operating Context

- Static site, no server: Vite builds to `dist/` and any static host serves it; navigation is client-side.
- Visitors move between the index and ten landing routes, with a circle-wipe transition on the previous/next buttons as the signature way to compare designs.
- Contact happens through the enquiry form on every page and the email address on the index.
- Search traffic lands on individual landing or sub pages, so canonical URLs, JSON-LD, sitemap and robots ship as part of the product.

## Capabilities and Constraints

- Routes: `/` index, `/p/{slug}` for the ten landings, `/p/{slug}/{sub}` for 40 sub pages, plus 404. Prev/next walk the ten landings in collection order and wrap.
- Shared shell: nav, footer, FAQ, enquiry form and SEO head are components every page uses; each landing swaps its own hero, palette and sections.
- Forms validate in the browser against the spec that rendered them, with a honeypot for bots; modals, popups and toasts are keyboard-accessible.
- Each landing ships as its own lazy chunk; the Million compiler hoists components into fast DOM blocks at build time.
- TypeScript across the build (`npm run typecheck`, `npm run build`).
- Open decisions, deliberately undecided: real contact email (currently the placeholder `hello@example.com`), production origin (`VITE_SITE_URL` unset), and whether/how the demo business content is labelled as fictional.

## Brand Commitments

- "Ten Landings" is the collection's name; "Lebino Studio" is the studio brand (index team section: "Lebino Studio · 2026 · 07 / 10").
- Team of three, named on the index: Hossein Mobarakian (full-stack engineer), Mansour Mobarakian (product designer), Ilya Rashno (backend engineer).
- Binding constraint, confirmed by the user: the ten-page collection and the circle-wipe transition are the site's identity — future work must never remove them. (2026-10: the random control was replaced by previous/next buttons at the user's request; the wipe itself stays.)
- Contact email is a placeholder and is not yet a binding brand asset.

## Evidence on Hand

- The site itself: ten distinct, working landing pages, 40 crawlable sub pages, live forms, dialogs and transitions (source in `src/`, widgets in `public/assets/`).
- Technical proof in code: canonical URLs, JSON-LD structured data, sitemap, robots, per-page titles and descriptions (`src/data/seo.ts`, `src/data/content.ts`).
- Team bios referencing real work on Flyksoft and Lebino (`src/pages/Index.tsx`).
- Absent, and future work must not fabricate: client testimonials, case studies, press, real client names, studio service pricing, a deployed production URL, and a real contact address. All business content inside the ten pages (menus, listings, prices, stats) is fictional demo material.

## Product Principles

- Prove, don't claim: a capability exists on this site only when a working page demonstrates it.
- The collection and the circle wipe are the identity; protect them over any surrounding redesign.
- Real furniture ships with the design: structured data, canonical URLs, validating forms and crawl depth are part of the product, not afterthoughts.
- The enquiry is the success event; every surface should make contacting the studio honest and easy.
- State absences instead of inventing proof — no fabricated testimonials, clients, numbers or claims.
