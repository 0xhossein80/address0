import type { SubHead } from "./types";

/** Card headlines for every sub page, split from the full records so
 *  landing pages can render `<Subs>` without shipping all section text. */
export const HEADS: Record<string, SubHead[]> = {
  saffron: [
    { slug: "pantry", kicker: "Saffron · sourcing", heading: "The pantry", description: "The farms, millers, bakers and fermenters behind the Saffron menu, with what arrives each week and how it is handled." },
    { slug: "private-dining", kicker: "Saffron · the hearth room", heading: "Private dining", description: "The hearth room seats twelve with its own fire, menu and service. Minimum spend, sample menus and how far ahead to book." },
    { slug: "menu-archive", kicker: "Saffron & Stone · menu archive", heading: "The menu archive", description: "Four seasons of Saffron & Stone dishes with the garden, boat or bakery behind each one, kept so you can see what came back, what sold out and what never returned." },
    { slug: "allergens", kicker: "Saffron & Stone · allergens", heading: "Allergens, honestly", description: "The allergens Saffron & Stone cooks with, where each one sits around a single hearth, and exactly how to tell us before you book, sit down or order." },
  ],
  wanderly: [
    { slug: "packing-list", kicker: "Wanderly Travel Co. · packing", heading: "What to pack", description: "A seven-kilo carry-on baseline plus cold and hot add-ons, with weights, laundry plans and the four things travellers always wish they had packed." },
    { slug: "insurance-guide", kicker: "Wanderly Travel Co. · insurance", heading: "Insurance, explained", description: "Medical limits, repatriation, cancellation cover and activity fine print, checked line by line before you buy a policy for a Wanderly departure." },
    { slug: "itinerary-templates", kicker: "Wanderly Travel Co. · itineraries", heading: "How an itinerary is written", description: "Every route starts as a template we walked ourselves: day shape, transit buffers and free hours, then it is rewritten around your dates within 48 hours." },
    { slug: "budget-ledger", kicker: "Wanderly Travel Co. · budget", heading: "The daily ledger", description: "What travellers actually spend on the ground with us: lunch, entries, transport, dinner, laundry and tips, with daily and weekly totals for a full week." },
  ],
  lumen: [
    { slug: "process", kicker: "Lumen Studio · process", heading: "The process", description: "Brief, moodboard, shot list, shoot day and delivery: the five stages of a Lumen Studio shoot, with the turnaround times and costs attached to each." },
    { slug: "case-notes", kicker: "Lumen Studio · case notes", heading: "Case notes", description: "A sixty-piece product range, a north-facing interior set and a fourteen-person portrait series: the brief, the light and what the client did next." },
    { slug: "session-types", kicker: "Lumen Studio · sessions", heading: "Session types", description: "Portrait hour, editorial day, product range and interiors: what each Lumen Studio session runs to, what it hands over and the price it starts from." },
    { slug: "retouching", kicker: "Lumen Studio · retouching", heading: "How we retouch", description: "Dust, stray threads, colour and skin: the Lumen Studio retouching standard, the five stages every frame passes through, and the edits we refuse." },
  ],
  atelier: [
    { slug: "care-guide", kicker: "Atelier Noir · care", heading: "Care guide", description: "Wash temperatures, drying, storage and moth prevention for Atelier Noir pieces, so a capsule bought this year still looks right in its tenth year." },
    { slug: "sizing", kicker: "Atelier Noir · sizing", heading: "Sizing, measured", description: "How the relaxed unisex block fits, how to measure chest, length and sleeve at home, and where each of the five sizes sits on the tape." },
    { slug: "fabrics", kicker: "Atelier Noir · cloth", heading: "Cloth and seasons", description: "Where the capsule cloth comes from: cleared mill runs in Portugal, traceable wool from Biella, and what lands in spring and again in autumn." },
    { slug: "appointments", kicker: "Atelier Noir · appointments", heading: "The fittings", description: "The four appointments behind a piece cut for you: first measure, basted fitting, final fitting and alterations, with timings, prices and what to bring." },
  ],
};

/** Card headlines for one landing — what the "Keep reading" grid needs. */
export function headsFor(parent: string): SubHead[] {
  return HEADS[parent] ?? [];
}

/** Every (parent, slug) pair, from the light heads — sitemap-safe. */
export function allPaths(): [string, string][] {
  return Object.entries(HEADS).flatMap(([parent, heads]) =>
    heads.map((head) => [parent, head.slug] as [string, string]),
  );
}
