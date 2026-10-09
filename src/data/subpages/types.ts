//! Sub pages: a second layer under each landing — archives, guides and
//! behind-the-scenes pages that give the collection real depth to crawl.
//! Every landing owns four sub pages in four layouts (`variant`):
//! `guide` (sticky TOC how-to), `log` (ledger/table archive), `story`
//! (editorial prose with pull quotes) and `cards` (grid of cards).

/** One renderable chunk of a sub page section. */
export type Block =
  /** A plain paragraph. */
  | { type: 'P'; text: string }
  /** A bulleted list. */
  | { type: 'List'; items: string[] }
  /** A numbered sequence (how-to steps). */
  | { type: 'Steps'; items: string[] }
  /** A data table: header row plus body rows (row length == head length). */
  | { type: 'Table'; head: string[]; rows: string[][] }
  /** A pull quote (hero treatment on `story` pages). */
  | { type: 'Quote'; text: string }
  /** A small aside / callout. */
  | { type: 'Note'; text: string };

/** One section of a sub page: a heading plus its blocks. */
export interface SubSection {
  title: string;
  blocks: Block[];
}

/** Just the card fields of a sub page — enough for "Keep reading" links
 *  without shipping the full section text. */
export interface SubHead {
  slug: string;
  kicker: string;
  heading: string;
  description: string;
}

/** A page at `/p/{parent}/{slug}`. */
export interface SubPage {
  parent: string;
  slug: string;
  /** Full `<title>` — unique across the whole site, brand first, ≤ 70 chars. */
  title: string;
  /** Meta description, 90–165 chars, no clickbait. */
  description: string;
  /** Small uppercase eyebrow above the H1. */
  kicker: string;
  /** The H1 itself. */
  heading: string;
  /** One or two sentences under the H1. */
  lede: string;
  /** Layout: `"guide" | "log" | "story" | "cards"`. */
  variant: 'guide' | 'log' | 'story' | 'cards';
  /** Hero stat strip: 2–4 `(value, label)` pairs. */
  stats: [string, string][];
  sections: SubSection[];
  /** Closing call-to-action block. */
  ctaTitle: string;
  ctaBody: string;
}
