/// A business category with its own landing page, palette and demo content.
export interface Category {
  slug: string;
  /** Business name used as the brand on the landing page. */
  name: string;
  /** Industry label shown on the portfolio card. */
  label: string;
  tagline: string;
  /** Accent colour used by the portfolio card. */
  accent: string;
  /** Text colour that reads well on top of `accent`. */
  onAccent: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'saffron',
    name: 'Saffron & Stone',
    label: 'Restaurant',
    tagline: 'A seasonal table in the old quarter.',
    accent: '#e8632e',
    onAccent: '#fff6f0',
  },
  {
    slug: 'wanderly',
    name: 'Wanderly Travel Co.',
    label: 'Travel Agency',
    tagline: 'Trips you will talk about for years.',
    accent: '#1667d8',
    onAccent: '#eef5ff',
  },
  {
    slug: 'lumen',
    name: 'Lumen Studio',
    label: 'Photography',
    tagline: 'Light, arranged for people and products.',
    accent: '#e4e4e7',
    onAccent: '#111113',
  },
  {
    slug: 'atelier',
    name: 'Atelier Noir',
    label: 'Fashion Boutique',
    tagline: 'A ten-piece capsule, made to outlast trends.',
    accent: '#d8a7b0',
    onAccent: '#241417',
  },
];

export function bySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function pathOf(category: Category): string {
  return `/p/${category.slug}`;
}

/** Previous landing in tour order (wraps). Unknown slugs (index, 404)
 *  count as before the first, so prev is the last landing. */
export function prevOf(slug: string): Category {
  const i = CATEGORIES.findIndex((c) => c.slug === slug);
  if (i === -1) return CATEGORIES[CATEGORIES.length - 1];
  return CATEGORIES[(i - 1 + CATEGORIES.length) % CATEGORIES.length];
}

/** Next landing in tour order (wraps). Unknown slugs (index, 404)
 *  count as before the first, so next is the first landing. */
export function nextOf(slug: string): Category {
  const i = CATEGORIES.findIndex((c) => c.slug === slug);
  if (i === -1) return CATEGORIES[0];
  return CATEGORIES[(i + 1) % CATEGORIES.length];
}
