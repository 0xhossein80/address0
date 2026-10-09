import type { SubHead } from "./types";

/** Card headlines for every sub page, split from the full records so
 *  landing pages can render `<Subs>` without shipping all section text. */
export const HEADS: Record<string, SubHead[]> = {
  roastery: [
    { slug: "roast-log", kicker: "Ember & Oak · archive", heading: "The roast log", description: "The running log of every roast we have shipped: origin, process, cupping score, roast date and what it tastes like in the cup." },
    { slug: "brew-guides", kicker: "Ember & Oak · guides", heading: "Brew guides", description: "Ratio, grind, temperature and timing for espresso, V60, AeroPress, plunger and moka, written for our roasts and yours." },
    { slug: "subscriptions", kicker: "Ember & Oak · subscriptions", heading: "How subscriptions run", description: "Plans, billing dates, skips and gift subscriptions for Ember & Oak coffee: what arrives each month, when the card is charged and how to change plan." },
    { slug: "wholesale", kicker: "Ember & Oak · wholesale", heading: "Wholesale accounts", description: "Weekly wholesale delivery, barista training and dial-in visits for cafés, offices and restaurants buying Ember & Oak by the kilo." },
  ],
  forge: [
    { slug: "programming", kicker: "Ironclad Strength · programming", heading: "The programme", description: "The method behind the Ironclad Strength board: two main lifts, one accessory slot, and the exact rules that decide when the weight goes up." },
    { slug: "recovery", kicker: "Ironclad Strength · recovery", heading: "The recovery room", description: "Sleep, soreness and deload weeks: how Ironclad Strength decides when to push, when to back off, and when to book a return-to-lift session." },
    { slug: "timetable", kicker: "Ironclad Strength · timetable", heading: "The class timetable", description: "Coached class times, coach rota, booking windows and class caps for every day at Ironclad Strength, plus the quietest hours on the open floor." },
    { slug: "membership", kicker: "Ironclad Strength · membership", heading: "Membership, priced", description: "Both Ironclad Strength plans priced in full: what the $49 open floor and $95 coached memberships include, how freezes and cancellations work, and the paid extras." },
  ],
  haven: [
    { slug: "buying-guide", kicker: "Haven & Vale · buying guide", heading: "The buying guide", description: "A stage-by-stage guide to buying with Haven and Vale: budgets, viewings, surveys, offers and the six to eight weeks between an accepted offer and exchange." },
    { slug: "neighbourhoods", kicker: "Haven & Vale · neighbourhoods", heading: "Where we sell", description: "Old Dock, Warehouse District, North Point and Ashgrove compared on price per square foot, typical buyers, commute times and what is being built nearby." },
    { slug: "sold-archive", kicker: "Haven & Vale · sold archive", heading: "The sold archive", description: "Every Haven & Vale sale from the last twelve months: area, property type, asking price, the agreed price and the days it took to accept an offer." },
    { slug: "selling-with-haven", kicker: "Haven & Vale · selling", heading: "Selling, stage by stage", description: "What the flat 1.2% fee covers, how the forty-minute valuation works, what launch week looks like and how the ninety-day tie-in ends if it is not working." },
  ],
  brightside: [
    { slug: "aftercare", kicker: "Brightside Dental · aftercare", heading: "After your visit", description: "What is normal in the first 48 hours after a filling, crown, extraction or whitening, what to avoid, and the signs that mean you should call us." },
    { slug: "kids-visits", kicker: "Brightside Dental · children", heading: "Kids' visits", description: "When to bring a child in, what happens at each check-up from the first tooth onwards, and how we help nervous children settle without any struggle." },
    { slug: "treatment-menu", kicker: "Brightside Dental · treatments", heading: "The treatment menu", description: "Every Brightside Dental treatment with its appointment length and published fee, from a $95 check-up to $2,900 aligners, plus what each visit includes." },
    { slug: "emergency", kicker: "Brightside Dental · emergencies", heading: "Dental emergencies", description: "What counts as urgent at Brightside Dental, what to do in the first hour at home, how the held-back same-day slots work and when swelling means hospital first." },
  ],
  verity: [
    { slug: "fees-explained", kicker: "Verity & Hale · fees", heading: "Fees, explained", description: "Fixed fees, capped phases and hourly rates: how Verity and Hale scopes a matter, what each fee includes, and what the first invoice will show you." },
    { slug: "glossary", kicker: "Verity & Hale · glossary", heading: "The glossary", description: "Twelve terms you will meet in a letter, a claim or a contract, from letter before action to restrictive covenant, each defined in one plain sentence." },
    { slug: "conveyancing-timeline", kicker: "Verity & Hale · conveyancing", heading: "The conveyancing timeline", description: "The residential conveyancing timetable stage by stage: instruction, searches, survey, enquiries, exchange and completion, with the duration each one takes." },
    { slug: "client-stories", kicker: "Verity & Hale · client stories", heading: "Client stories", description: "A shareholder row, an employment exit, a boundary dispute and a purchase that nearly collapsed: what happened, what it cost and what the client would do again." },
  ],
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
  loop: [
    { slug: "metrics-playbook", kicker: "Loopmetric · playbooks", heading: "The metrics playbook", description: "Definitions, targets and chart templates for activation, retention and revenue, written so your team can rebuild each metric in Loopmetric this afternoon." },
    { slug: "integrations", kicker: "Loopmetric · integrations", heading: "Connect your stack", description: "JavaScript, iOS, Android and server SDKs, Segment and RudderStack mirrors, and Snowflake or BigQuery sync: what each connection does and how long it takes." },
    { slug: "retention-benchmarks", kicker: "Loopmetric · benchmarks", heading: "Retention benchmarks", description: "Median day 1, day 7 and day 30 retention for six product segments, with the sample behind each figure and the three ways teams misread the columns." },
    { slug: "rollout", kicker: "Loopmetric · rollout", heading: "A rollout, week by week", description: "How one fourteen-person product team went from a first event to alerts on the numbers that matter: week one instrument, week two agree, week three trust." },
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
