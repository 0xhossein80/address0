---
version: 1
slug: "src-pages-landings"
primary_target: "src/pages/landings"
related_targets: []
---

# Direction contract — Ten Landings: one unique design per business page

## Master constraints (apply to all ten)

- Palette + display font per page are PINNED (user decision); everything else — shape language, layout rhythm, nav, buttons, cards, FAQ, form, wander CTA, footer styling, hover physics, motifs — is redesigned per page and must differ across all ten pages.
- Preserve: product truth and demo content (no new claims), circle wipe (`--wipe-a/--wipe-b`), forms + booking behavior, modals, lightbox, signature widgets (markup/JS untouched), a11y, reduced-motion, sub pages (they inherit the parent page CSS).
- All edits live in `public/assets/css/pages/{slug}.css`, scoped for shell classes with `body[data-slug="{slug}"]`. Landing TSX may be adjusted for composition. Never edit `app.css` or anything in `src/components/`.
- Code-first: no raster images, no webfonts, no CDN. Richness comes from type, CSS geometry, and authored SVG (geometry only).
- Craft floor rules hold: contrast ≥4.5:1, one elevation system, no decorative kickers above headings (content-bearing data labels are fine), no section numbers unless the sequence carries information, themed browser surfaces (selection, caret, focus, placeholder, scrollbar) per page, one authored motion moment per page with distinct hover physics.
- JS hooks that must keep their classes/attrs: `form[data-enquiry]`, `[data-form-status]`, `.field__input`, `[data-bk-*]`, `.bk-opt__label`, `.bk-step__label`, `#enquire`, `[data-sig]`, `dialog[data-popup]`, `[data-modal-body]`, `#lp-modal`, `.lightbox__*`, state classes `is-sent/is-on/is-empty/is-in/is-ok/is-error/is-covering/is-fading`.

---

## 1. roastery — Ember & Oak (coffee) · pinned: paper #f8f2e9, ink-brown #2a1a10, burnt orange #b4551f, Georgia

**THESIS:** The roastery as a working batch-record office, not a cozy-café mood board. The page reads like Ember & Oak's own roast records. It refuses the warm-cream + soft-serif "artisan coffee" wash the category defaults to.
**OWN-WORLD:** Roast docket: ruled record rows, dotted leaders, stamped batch marks, corner-clipped panels. Buttons squared (4px) with a letterpress inset edge; cards are dockets with a clipped corner and ruled data lines; zero pills on this page. Georgia carries record headings.
**STORY:** The visitor reads origin/altitude/roast facts as measured records and concludes: these people measure everything; the subscription is trustworthy.
**FIRST VIEWPORT:** Two-column hero: brand + lede left; right, a ruled "BATCH DOCKET" panel of label… value rows (origin, altitude, process, roast date) with dotted leaders; actions are squared docket buttons under the left column; a stamped batch mark rotates once on load.
**FORM:** Enquiry becomes an intake docket — underline fields in a ruled frame, labels as ledger captions; FAQ becomes numbered record entries with dotted leaders; wander CTA is a stamped dispatch ticket.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 2. forge — Ironclad Strength (gym) · pinned: void #0e100c, bone #eef3e4, lime #c6f24e, Arial Black

**THESIS:** The gym as a powerlifting meet office — the page is a scoresheet you could hand a lifter. It refuses skulls, neon aggression, and before/after bodies.
**OWN-WORLD:** Meet scoresheet: 0px radius everywhere, 2–3px solid rules, collapsed-grid cells sharing borders, tabular attempt numbers, stencil-scale caps. Buttons are hard squares that snap (0.08s, no lift); cards are table cells with giant set/rep numerals.
**STORY:** A local sees the schedule and price set like event results within seconds and trusts this is real coaching, not a franchise.
**FIRST VIEWPORT:** Full-bleed scoreboard hero: massive Arial Black headline, a bordered results strip beneath (members / classes this week / open floor hours) as three bordered cells, CTA pair as lime square + bone outline square.
**FORM:** Enquiry is an attempts sheet — thick-bordered fields in a collapsed grid; FAQ is a "house rules" sheet of numbered rows; wander CTA is a lime slab reading NEXT SESSION.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 3. haven — Haven & Vale (real estate) · pinned: plaster #f6f4ed, forest #1f5c46, Times New Roman

**THESIS:** The agency as a period-property surveyor — the page is a conservation report on homes with character. It refuses navy-gold luxury, listing grids, and dream-home couples.
**OWN-WORLD:** Survey report: hairline rectangular frames with corner tick marks, plate numbers, serif small caps, hanging annotations, plan-sheet ruled fields. Buttons are thin outlined rectangles that fill forest-green on hover; cards are survey plates (image-less framed plates with caption blocks).
**STORY:** A design-literate buyer reads the homes as documented, cared-for properties and trusts the agency's taste and locality.
**FIRST VIEWPORT:** Report-cover hero: serif headline left with a hairline frame + corner ticks, right a "PARTICULARS" annotation block (established / material / detail rows in small caps); actions as outlined rectangles below.
**FORM:** Enquiry as a survey instruction form — ruled underline fields inside a plan frame; FAQ as hanging annotations under hairline rules; wander CTA continues the survey as a framed plate link.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 4. brightside — Brightside Dental · pinned: mist #f2fbfb, teal #0e8f96, Trebuchet MS

**THESIS:** The clinic as a porcelain material studio — the page is a ceramic sample study, calm and exact. It refuses blue gradients, tooth icons, and stock smiling families.
**OWN-WORLD:** Porcelain sample card: soft 10px radii, glaze swatch dots, generous whitespace, understated teal. Buttons are soft rectangles whose fill sweeps upward on hover (no lift); cards are sample cards with a three-dot glaze strip; focus glows softly instead of snapping.
**STORY:** An anxious patient feels calm competence, sees the booking path in seconds, and reads cosmetic work as craft.
**FIRST VIEWPORT:** Split hero: calm headline + lede on mist; right, a porcelain "SAMPLE CARD" of three glaze swatch tiles (enamel, glaze, translucent) with finish captions; CTA is a sweeping-fill teal button.
**FORM:** Enquiry is a gentle booking card — rounded 10px fields with soft focus glow; FAQ is a quiet disclosure with rotating plus-circle; wander CTA is a calm framed invitation.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 5. verity — Verity & Hale LLP (law) · pinned: bone #f7f5f0, ink-navy #131a2b, gold #c9a227, Palatino

**THESIS:** The firm as a closing-binder office — the page is a deal tombstone and term sheet. It refuses columns of partner names, gavels, and burgundy-navy pomp.
**OWN-WORLD:** Closing book: engraved caps with wide tracking, gold hairline double rules, 0px corners, matter-file numbers, ruled ledger tables. Buttons are gold hairline outlines that fill gold with ink text; cards are engraved plates with a gold top rule; hover is a flat fill, never a lift.
**STORY:** General counsel sees judgment and reachability: matters stated like a term sheet, contact always in the masthead.
**FIRST VIEWPORT:** Engraved masthead hero: centered Palatino small-caps headline over a gold double rule, a ledger strip of matter statistics (value / jurisdictions / years) as ruled columns beneath, outline-gold CTA pair.
**FORM:** Enquiry is a term sheet — fields as ruled table rows with caps labels; FAQ as numbered clauses with § marks; wander CTA is a gold-ruled NEXT FILE link.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 6. saffron — Saffron & Stone (restaurant) · pinned: cream #fbf3ea, ember red #d1462b, Hoefler Text

**THESIS:** The restaurant as an evening menu read by candlelight — the page IS the menu, staged in acts. It refuses kraft paper, chalkboards, and smokehouse clichés.
**OWN-WORLD:** Evening menu ledger: leader-dot rows, italic dish lines with right-aligned prices, sharp ink rectangles (0px) for actions plus underlined text links, full-bleed hearth band, course rules. No card grids for content — menu rows only. Existing marquee carries the hearth statement.
**STORY:** A diner feels the heat and seasonality, reads tonight's menu, and books — the menu is the proof.
**FIRST VIEWPORT:** Menu-first hero: centered restaurant name in large Hoefler over a rule, one italic seasonal line, today's service rows (kitchen hours / fire lit / last booking) as leader-dot lines, ink CTA + underlined reserve link.
**FORM:** Enquiry is a reservation ledger — underline fields with baseline rules; FAQ reads as menu annotations (italic, leader rules); wander CTA is an ink-stamped NEXT SERVICE block.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 7. wanderly — Wanderly Travel Co. · pinned: sky paper #f3f8ff, route blue #1667d8, Verdana

**THESIS:** The operator as an expedition outfitter — the page is a route dossier from a field notebook. It refuses drone heroes, wanderlust scripts, and backpacker stock.
**OWN-WORLD:** Route dossier: long-dash borders, rotated stamp badges, ticket-stub buttons with punched notches (radial-gradient edge cutouts), coordinate captions, elevation-profile divider rules. Cards are postcards in dashed frames with corner stamps; hover shifts them along the route (translate + rotate), never a plain lift.
**STORY:** A vacationer sees max-12 group size, named leaders, and day-by-day route entries and trusts the operator's safety and care.
**FIRST VIEWPORT:** Dossier hero: chunky Verdana headline left, right a "ROUTE STAMP" badge block (trip code / group size / difficulty) tilted -3°, dashed route line running under the headline into the CTA pair (ticket-stub primary + dashed outline secondary).
**FORM:** Enquiry is a travel docket — dashed-ruled sections with coordinate captions; FAQ is day-numbered itinerary rows; wander CTA is a stamped NEXT DESTINATION ticket.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 8. loop — Loopmetric (SaaS) · pinned: lavender paper #f7f5ff, violet #6d4df6, Segoe UI

**THESIS:** The product as a calibration instrument — the page is a measurement report the buyer can read like an instrument panel. It refuses gradient meshes, bento grids, and floating tilted dashboards.
**OWN-WORLD:** Calibration sheet: a fine graph-paper ground (justified: this world IS a measuring sheet), tick-ruler rules above panels, tabular-nums readings, 6px-radius readout cards. Buttons are 6px violet with a trailing arrow that slides right on hover; cards carry a tick ruler on their top edge; numbers align like instrument readouts.
**STORY:** A PM grasps the product's "aha" from a plotted readout above the fold and trusts the claims because they read as measurements.
**FIRST VIEWPORT:** Instrument hero: headline + lede left; right, a bordered readout panel showing the existing chart with a tick ruler header and three tabular readings; violet arrow-button + ghost secondary beneath the lede.
**FORM:** Enquiry is a data request — grouped underline fields with unit captions; FAQ collapses as readouts with sliding carets; wander CTA is a calibrated NEXT READOUT strip.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 9. lumen — Lumen Studio (photography) · pinned: gallery white #fafafa, carbon #111113, Helvetica Neue

**THESIS:** The studio as a contact-sheet darkroom — the page is a contact sheet with light-meter readings. It refuses dark masonry grids, script wordmarks, and golden-hour clichés.
**OWN-WORLD:** Contact sheet + light meter: pure monochrome, black rebate strips carrying tiny frame numbers and notch marks (geometry), EV scale strips, 0px corners, hairline frames. Buttons are flat carbon rectangles that invert on hover (white fill, carbon text, hairline edge); gallery frames get film-rebate edges with frame identifiers.
**STORY:** A producer judges the light quality from framed work and exposure facts, then books the space.
**FIRST VIEWPORT:** Darkroom hero: oversized Helvetica headline set flush left, a vertical EV-scale strip beside it, actions as inverting carbon rectangles; the existing work grid is rehung as a contact sheet with rebate edges and frame numbers.
**FORM:** Enquiry is a booking slip — hairline underline fields with frame-style captions; FAQ as frame-index rows (numbered left, question right on a hairline); wander CTA is a solid carbon NEXT FRAME bar.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 10. atelier — Atelier Noir (fashion) · pinned: blush paper #faf6f5, rose #d8a7b0, Didot

**THESIS:** The capsule as a tailor's spec sheet — the page is pattern-piece documentation with lookbook poise. It refuses beige sameness, sale urgency, and anonymous flat lays.
**OWN-WORLD:** Tailor's spec sheet: dimension-line callouts with tick ends, hairline frames, centered Didot wordmark spacing, piece counts (PIECE 03 / 10 as content), fabric-swatch squares. Buttons are text-only with a ruled underline plus thin outline rectangles — no solid fills anywhere on this page; cards are spec plates with dimension callouts along one edge.
**STORY:** A shopper reads each piece as documented and considered — count, fabric, fit — and believes fewer pieces can work harder.
**FIRST VIEWPORT:** Spec-sheet hero: centered Didot headline with wide spacing over a hairline rule, a dimension callout line (─┼─) running the width beneath it with fabric annotations at its ticks, text-link + outline actions.
**FORM:** Enquiry is a fitting request — underline fields in a centered hairline card; FAQ as piece notes (Didot italic, right-aligned measurement values); wander CTA is an underlined NEXT COLLECTION link.
**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
