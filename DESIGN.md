---
name: Ten Landings
description: Ten bespoke landing worlds and one studio shell — Lebino Studio's portfolio of ten working business pages, each a committed design world over shared machinery.
colors:
  paper: "#fbfaf8"
  ink: "#17171a"
  muted-ink: "#6b6b74"
  surface: "#ffffff"
  hairline: "rgba(23, 23, 26, 0.12)"
  accent: "#17171a"
  accent-ink: "#ffffff"
  signal-lime: "#c6f24e"
  wipe-deep: "#2e2e37"
  roastery-bg: "#f8f2e9"
  roastery-ink: "#2a1a10"
  roastery-accent: "#b4551f"
  forge-bg: "#0e100c"
  forge-ink: "#eef3e4"
  forge-accent: "#c6f24e"
  haven-bg: "#f6f4ed"
  haven-ink: "#1c2b23"
  haven-accent: "#1f5c46"
  brightside-bg: "#f2fbfb"
  brightside-ink: "#10353a"
  brightside-accent: "#0e8f96"
  brightside-accent-deep: "#0b4b50"
  verity-bg: "#f7f5f0"
  verity-ink: "#131a2b"
  verity-accent: "#c9a227"
  saffron-bg: "#fbf3ea"
  saffron-ink: "#2b1410"
  saffron-accent: "#d1462b"
  wanderly-bg: "#f3f8ff"
  wanderly-ink: "#0e2246"
  wanderly-accent: "#1667d8"
  loop-bg: "#f7f5ff"
  loop-ink: "#17141f"
  loop-accent: "#6d4df6"
  lumen-bg: "#fafafa"
  lumen-ink: "#111113"
  lumen-muted: "#77777d"
  atelier-bg: "#faf6f5"
  atelier-ink: "#1c1416"
  atelier-accent: "#d8a7b0"
  atelier-muted: "#7a6a6e"
  notfound-bg: "#101014"
  notfound-ink: "#f2f1ee"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 8vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.45rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.24rem"
    fontWeight: 820
    letterSpacing: "-0.025em"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontSize: "0.78rem"
    fontWeight: 760
    letterSpacing: "0.1em"
  kicker:
    fontSize: "0.72rem"
    fontWeight: 750
    letterSpacing: "0.18em"
  caption:
    fontSize: "0.7rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  fine:
    fontSize: "0.6rem"
    fontWeight: 600
    letterSpacing: "0.16em"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.9em"
rounded:
  none: "0px"
  hair: "2px"
  tick: "3px"
  docket: "4px"
  small: "5px"
  card: "6px"
  slab: "8px"
  swatch: "10px"
  status: "14px"
  faq: "16px"
  panel: "18px"
  sheet: "22px"
  pill: "999px"
spacing:
  gutter: "1.25rem"
  grid: "1.2rem"
  card: "1.5rem"
  block: "clamp(3rem, 7vw, 5rem)"
components:
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "per-world"
    padding: "0.8rem 1.35rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "per-world"
    padding: "0.8rem 1.35rem"
  pager:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "per-world"
    padding: "small pair (0.4rem 0.7rem, floating FAB)"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "per-world"
    padding: "0.8rem 0.95rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "per-world"
    padding: "1.5rem 1.55rem"
  faq-item:
    backgroundColor: "{colors.surface}"
    rounded: "per-world"
    padding: "0 1.35rem"
  toast:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent-ink}"
    rounded: "per-world"
    padding: "0.8rem 1.05rem"
  modal:
    backgroundColor: "{colors.surface}"
    rounded: "per-world"
    padding: "1.5rem 1.6rem 1.8rem"
---

# Design System: Ten Landings

## Overview

**Creative North Star: "The Type Foundry Doors"**

Behind one studio door, ten rooms — and each room is built for the business that lives in it. The binding craft is no longer a shared skin; it is that every room is a committed world with its own material, geometry, and physics, while the machinery underneath (routing, forms, dialogs, the circle wipe) keeps working untouched.

Shared machinery stays quiet: Warm Paper under Ink Black, one system sans body stack, hairline structure, the 1120px container, and exactly one theatrical moment — the 480ms circle wipe that carries the visitor from one world to the next. Each business page re-skins every shared surface — nav, buttons, cards, FAQ, form, footer, modal, lightbox, toasts, booking panel, sub pages — inside its own page stylesheet, scoped under `body[data-slug="…"]`. Identity lives in geometry and motion as much as in color: dockets with dotted leaders, a gym scoreboard with zero radius and snap hovers, travel postcards with punched notches, a monochrome contact sheet that inverts.

Lebino Studio's own surfaces (index, 404) stay ink-on-paper, keep the pill vocabulary, and spend Signal Lime only where the studio speaks.

**Key Characteristics:**
- Ten page worlds + one studio shell; each world owns palette, display face, radii, hover physics, and component skins
- One active page stylesheet per route, loaded by swapping a single `<link data-page-css>`; sub pages inherit their parent world
- Shell-class overrides are scoped `body[data-slug="…"]`; shared component markup and JS hooks never change
- System font stacks only; the per-world display face is the personality knob
- One theatrical moment: the circle wipe; each world gets one authored motion moment of its own

## Colors

The palette is role-based per world: each page re-inks `--bg`, `--fg`, `--muted`, `--surface`, `--line`, `--accent`, `--accent-ink`, `--font-display`, `--wipe-a`, `--wipe-b` in its own `:root`, byte-frozen. Contrast comes from ink on paper and hairlines; accents carry graphics and large type, never body text below 4.5:1.

### The studio shell
- **Warm Paper** (index `--bg`): uncoated-stock off-white; **Ink Black** (`--fg`/`--accent`): the studio's monochrome voice.
- **Signal Lime** (`#c6f24e`): the studio's single spark — index wipe, 404 accent, forge's accent. Full strength or not at all.

### The ten worlds

| World | Page | `--bg` | `--fg` | `--accent` | Display face | Signature material |
|---|---|---|---|---|---|---|
| `roastery` | Ember & Oak — coffee | `#f8f2e9` | `#2a1a10` | `#b4551f` | Georgia | Batch dockets, dotted leaders, rotated stamps |
| `forge` | Ironclad Strength — gym | `#0e100c` | `#eef3e4` | `#c6f24e` | Arial Black | Scoresheet, 0px radius, snap hovers |
| `haven` | Haven & Vale — real estate | `#f6f4ed` | `#1c2b23` | `#1f5c46` | Times New Roman | Hairline frames, corner ticks, outline-fill hover |
| `brightside` | Brightside Dental | `#f2fbfb` | `#10353a` | `#0e8f96` | Trebuchet MS | Porcelain 10px soft, sweep-up fill |
| `verity` | Verity & Hale LLP — law | `#f7f5f0` | `#131a2b` | `#c9a227` | Palatino Linotype | Gold hairline double rules, flat fill hover |
| `saffron` | Saffron & Stone — restaurant | `#fbf3ea` | `#2b1410` | `#d1462b` | Hoefler Text | Menu rows, leader dots, ink-rect invert |
| `wanderly` | Wanderly Travel Co. | `#f3f8ff` | `#0e2246` | `#1667d8` | Verdana | Route dossier: dashes, stamps, notched ticket stubs |
| `loop` | Loopmetric — SaaS | `#f7f5ff` | `#17141f` | `#6d4df6` | Segoe UI | Calibration sheet: graph paper, tick rulers, arrow buttons |
| `lumen` | Lumen Studio — photography | `#fafafa` | `#111113` | `#111113` | Helvetica Neue | Contact sheet: monochrome, film rebate, invert physics |
| `atelier` | Atelier Noir — fashion | `#faf6f5` | `#1c1416` | `#d8a7b0` | Didot / Bodoni MT | Spec sheet: dimension callouts, text/outline buttons |

`index` and `404` keep the studio shell (`#f4f2ec`/`#14141a` and `#101014`/`#f2f1ee`, lime spark). Content colors (product swatch hexes in data) are content, not system tokens.

### Named Rules
**The World-Scoped Rule.** A world restyles shared surfaces only through rules scoped `body[data-slug="…"]` in its own page stylesheet. The shared shell (`app.css`) and component JS never change to serve a world.
**The Wipe-Pair Rule.** Every world ships a `--wipe-a` / `--wipe-b` pair — dark pole and accent pole of the circle wipe. Frozen in `:root`, byte-identical to the original set.

## Typography

**Display Font:** per-world via `--font-display` — Georgia, Arial Black, Times New Roman, Trebuchet MS, Palatino Linotype, Hoefler Text, Verdana, Segoe UI, Helvetica Neue, Didot/Bodoni MT. All local/system families — no webfonts, no `@font-face`, no CDN.
**Body Font:** one system sans stack for every page; never overridden.
**Mono:** `ui-monospace` for genuine readings and units only (loop instruments, lumen metadata, wanderly coordinates).

**Character:** the body voice is neutral system sans so the collection reads as one publication; personality is the display face plus each world's label language — tracked caps, mono captions, mono callouts — set at the sizes this document's type ramp steps through (0.6 / 0.7 / 0.72 / 0.78 / 0.88 / 0.95 / 1.24rem and the shared clamps). Worlds may letter-space labels hard (0.14–0.34em) and set display tracking per face (Helvetica Neue allowed to −0.04em; Didot stays positive).

### Named Rules
**The Display-Swap Rule.** `--font-display` is the per-world personality knob; `--font-body` is never overridden. One body, many faces.

## Layout

Everything of consequence sits inside `.wrap`: `min(100% - 2.5rem, 1120px)`. Section rhythm `clamp(3rem, 7vw, 5rem)`; heroes `clamp(3rem, 7vw, 5.5rem)`. Grids are auto-fit, content-sized. Section heads are flex rows that wrap. Breakpoints `max-width`: 860, 760, 620, 480; reduced-motion collapses durations globally. Full-bleed is for world bands (forge's lime floor, lumen's carbon packages, saffron's ticker) and dividers only.

### Named Rules
**The 1120 Rule.** Content lives inside `min(100% - 2.5rem, 1120px)`; full-bleed is for bands and dividers.

## Elevation & Depth

The shell is flat-by-default: hairline borders, no resting shadows; deep soft shadows only on response. Worlds replace the physics wholesale where their material demands it: forge snaps (no lift, no shadow), atelier never lifts (underline and tone shifts only), lumen inverts (no shadow at all), wanderly shifts along a route (`translateX` + slight rotate), brightside and haven lift inside their own radius language. The fixed prev/next FAB pair keeps a resting shadow because it floats; every world re-skins it (wanderly's are notched ticket stubs, forge's are lime chips, lumen's are carbon frames).

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Depth appears only as response — in the physics the world has chosen.

## Shapes

No global radius scale is imposed on worlds. Each world owns its geometry: forge runs 0px everywhere; roastery dockets at 4px with clip-path corner cuts; brightside porcelain at 10px; loop readouts at 6px; wanderly stubs at 3–4px; lumen 0px; atelier 0–2px; verity hairline sheets. The studio shell (index/404) keeps the soft-rectangular 14–22px band and pill buttons. Borders are hairlines unless a world's material says otherwise (wanderly's 2px dashed routes, lumen's 2px hover frames, forge's 2–3px score rules).

### Named Rules
**The Owned-Geometry Rule.** Radius and border language belong to the world. Do not import another world's silhouette.

## Components

Shared markup and JS hooks (`form[data-enquiry]`, `data-bk-*`, `[data-sig]`, `dialog[data-popup]`, `.lightbox__*`, `template#tpl-{slug}-*`) are fixed; each world re-skins the surfaces in its page stylesheet.

### Buttons
Per-world anatomy and hover physics — ticket stubs with punched notches (wanderly), arrow-sliding 6px rects (loop), carbon inverts (lumen), ruled text links (atelier), ink-rect inverts (saffron), 0-radius snap fills (forge), sweep-up fills (brightside), outline-fill hovers (haven), gold flat fills (verity), squared letterpress (roastery). Focus-visible is themed per world; reduced-motion is respected.

### The Prev/Next Pair (signature control)
Still the site's identity: a small accent-styled previous/next pair as a **fixed floating FAB** (bottom-right), arrows ← → (no spin), activating the 480ms circle wipe (`--wipe-b` → `--wipe-a`, clip-path circle from the click point to 150vmax, then a 220ms reveal). One circle, one play. The pair walks the tour in CATEGORIES order and wraps; each world restyles the buttons themselves; the wipe mechanics never change. At ≤760px it collapses to icon-only chips. It is the only in-page pair control — nav, footers and page bodies carry single links, never a second pair. (2026-10: the nav pair and the wander CTA sections were removed at the user's request; only the floating pair remains.)

### Navigation
Sticky, world-styled: roastery's letterpress bar, forge's scoreboard header with cell dividers, haven's survey plate, verity's centered engraved two-tier, saffron's links-left/brand-right menu, wanderly's route bar, loop's instrument header with tick ruler, lumen's darkroom bar with frame counter, atelier's centered Didot wordmark. At ≤760px link lists collapse; the FAB takes over wayfinding.

### Cards, FAQ, forms, footer, modal, lightbox, toasts, booking, more-pages
Each world restyles all of them in its material — dockets, score plates, survey cards, swatch cards, tombstone plates, menu rows, postcards, readout panels, contact frames, spec plates. FAQ rows carry world sequence where it is meaningful (wanderly day chips, lumen frame numbers, verity square bullets, atelier measurement columns). Forms are world documents: dispatch slips, first-session claims, valuation calculators, booking slips, travel dockets, fitting requests. Sub pages inherit the parent world end-to-end.

### Named Rules
**The One Circle, One Play Rule.** The circle wipe is the page transition. Never add a second spectacle beside it.
**The Hooks-Fixed Rule.** Worlds re-skin; they never rename DOM hooks or edit shared JS.

## Do's and Don'ts

### Do:
- **Do** express a world through its page stylesheet scoped `body[data-slug="…"]`, keeping the `:root` token block byte-identical.
- **Do** re-skin every shared surface a page actually renders — nav, buttons, cards, FAQ, form, footer, more-pages, modal, lightbox, toasts, booking.
- **Do** keep content inside `min(100% - 2.5rem, 1120px)` and honor `prefers-reduced-motion`.
- **Do** theme browser surfaces per world: `::selection`, `focus-visible`, `::placeholder`, caret-color, scrollbar.
- **Do** keep one authored motion moment per world and make the rest utilitarian.
- **Do** give every literal in a world a home in this document's colors, type ramp, or radius scale — or record it as content.

### Don't:
- **Don't** edit `app.css`, `src/components/**`, or `public/assets/js/**` to serve a world.
- **Don't** let one world's motif leak into another unless its contract grants it (dotted leaders→roastery, leader dots→saffron, corner ticks→haven, gold double rules→verity, dashes/stamps/notches→wanderly, tick rulers/graph paper→loop, rebate strips/invert→lumen, dimension lines→atelier, ink-rect invert→saffron, sweep-up→brightside, snap/0-radius→forge).
- **Don't** add webfonts or a font CDN; the system runs on local/system families only.
- **Don't** add a second page-transition spectacle — one circle, one play.
- **Don't** use bounce or elastic easing; real objects decelerate smoothly.
- **Don't** drop body text contrast below 4.5:1 or use accents as small text on their own paper.
