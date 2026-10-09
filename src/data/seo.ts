//! Search-engine furniture: canonical URLs, JSON-LD, sitemap and robots.

import { bySlug, CATEGORIES, pathOf } from './categories';
import { contentForSlug, type Faq } from './content';
import { allPaths } from './subpages/heads';

/** Base origin used for canonical URLs, Open Graph and the sitemap.
 *  Override with `VITE_SITE_URL` / `SITE_URL` (e.g. `https://example.com`). */
export function siteBase(): string {
  const meta = import.meta as ImportMeta & { env?: Record<string, string | undefined> };
  const g = globalThis as { process?: { env?: Record<string, string | undefined> } };
  const raw =
    meta.env?.VITE_SITE_URL ??
    (typeof g.process === 'object' ? g.process?.env?.SITE_URL : undefined) ??
    '';
  const trimmed = raw.trim().replace(/\/+$/, '');
  if (trimmed) return trimmed;
  const port =
    meta.env?.VITE_PORT ??
    (typeof g.process === 'object' ? g.process?.env?.PORT : undefined) ??
    '3000';
  return `http://localhost:${port}`;
}

/** Public path for a slug: `index` is `/`, landings are `/p/{slug}`. */
export function pathFor(slug: string): string {
  return slug === 'index' ? '/' : `/p/${slug}`;
}

export function canonicalFor(slug: string): string {
  return `${siteBase()}${pathFor(slug)}`;
}

/** Public path of a sub page: `/p/{parent}/{sub}`. */
export function pathForSub(parent: string, sub: string): string {
  return `/p/${parent}/${sub}`;
}

/** Accent colour used for `theme-color`, taken from the portfolio card palette. */
export function themeColor(slug: string): string {
  return bySlug(slug)?.accent ?? '#17171a';
}

interface JsonValue {
  [key: string]: unknown;
}

function mergeExtras(
  kind: string,
  id: string,
  name: string,
  description: string,
  url: string,
  extras: string,
): JsonValue {
  const entity: JsonValue = { '@type': kind, '@id': id, name, description, url };
  const trimmed = extras.trim();
  if (trimmed) {
    try {
      const map = JSON.parse(`{${trimmed}}`) as Record<string, unknown>;
      for (const [k, v] of Object.entries(map)) {
        if (!(k in entity)) entity[k] = v;
      }
    } catch {
      /* schema extras must be a JSON object body; ignore malformed input */
    }
  }
  return entity;
}

function breadcrumb(url: string, brand: string): JsonValue {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ten Landings', item: `${siteBase()}/` },
      { '@type': 'ListItem', position: 2, name: brand, item: url },
    ],
  };
}

function faqPage(url: string, faqs: Faq[]): JsonValue {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

interface SchemaInput {
  slug: string;
  title: string;
  description: string;
  brand: string;
  /** schema.org type for the business entity, e.g. `Restaurant`. */
  kind: string;
  /** Extra JSON object body merged into the entity (`"priceRange":"$$"`). */
  extras: string;
  faqs: Faq[];
}

function renderGraph(graph: JsonValue[]): string {
  const rendered = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  // Keep the payload inert inside <script>: escape angle brackets.
  return rendered.replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
}

/** The `@graph` script block for one landing page (or the index). */
export function jsonLd(input: SchemaInput): string {
  const base = siteBase();
  const isIndex = input.slug === 'index';
  const url = canonicalFor(input.slug);

  const graph: JsonValue[] = [
    {
      '@type': 'WebSite',
      '@id': `${base}/#website`,
      url: `${base}/`,
      name: 'Ten Landings',
      description: 'Ten hand-built landing pages for ten businesses, each with its own design.',
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: input.title,
      description: input.description,
      inLanguage: 'en',
      isPartOf: { '@id': `${base}/#website` },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      isAccessibleForFree: true,
    },
  ];

  if (!isIndex) graph.push(breadcrumb(url, input.brand));

  graph.push(
    mergeExtras(input.kind, `${url}#business`, input.brand, input.description, url, input.extras),
  );

  if (input.faqs.length > 0) graph.push(faqPage(url, input.faqs));

  return renderGraph(graph);
}

/** Structured data for a slug. Returns an empty string for pages that should
 *  not carry it (the 404). */
export function jsonLdFor(slug: string, title: string, description: string): string {
  const content = contentForSlug(slug);
  if (!content) return '';
  const brand = slug === 'index' ? 'Ten Landings' : (bySlug(slug)?.name ?? 'Ten Landings');
  return jsonLd({
    slug,
    title,
    description,
    brand,
    kind: content.schemaKind,
    extras: content.schemaExtras,
    faqs: content.faqs,
  });
}

/** Structured data for any path in the site: `/`, `/p/{slug}` or
 *  `/p/{slug}/{sub}`. Unknown paths (the 404) get nothing. */
export function jsonLdAt(path: string, title: string, description: string): string {
  if (path === '/') return jsonLdFor('index', title, description);
  if (!path.startsWith('/p/')) return '';
  const rest = path.slice(3);
  const parts = rest.split('/');
  const slug = parts[0];
  if (!slug) return '';
  if (parts.length === 1) return jsonLdFor(slug, title, description);
  const sub = parts[1];
  if (parts.length === 2 && sub) return jsonLdSub(slug, sub, title, description);
  return '';
}

/** Structured data for a sub page: WebPage + a three-level breadcrumb +
 *  the parent's business entity (no FAQPage — sub pages carry no FAQs). */
export function jsonLdSub(
  parent: string,
  sub: string,
  title: string,
  description: string,
): string {
  const content = contentForSlug(parent);
  const category = bySlug(parent);
  if (!content || !category) return '';
  const brand = category.name;
  const base = siteBase();
  const parentUrl = `${base}${pathFor(parent)}`;
  const url = `${base}${pathForSub(parent, sub)}`;

  const graph: JsonValue[] = [
    {
      '@type': 'WebSite',
      '@id': `${base}/#website`,
      url: `${base}/`,
      name: 'Ten Landings',
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: 'en',
      isPartOf: { '@id': `${base}/#website` },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      isAccessibleForFree: true,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ten Landings', item: `${base}/` },
        { '@type': 'ListItem', position: 2, name: brand, item: parentUrl },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ],
    },
    mergeExtras(
      content.schemaKind,
      `${parentUrl}#business`,
      brand,
      content.description,
      parentUrl,
      content.schemaExtras,
    ),
  ];

  return renderGraph(graph);
}

/** `/sitemap.xml` body covering the index, all ten landings and every sub page. */
export function sitemapXml(): string {
  const base = siteBase();
  let out =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  out += `  <url><loc>${base}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n`;
  for (const category of CATEGORIES) {
    out += `  <url><loc>${base}${pathOf(category)}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>\n`;
  }
  for (const [parent, sub] of allPaths()) {
    out += `  <url><loc>${base}/p/${parent}/${sub}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>\n`;
  }
  out += '</urlset>\n';
  return out;
}

/** `/robots.txt` body. */
export function robotsTxt(): string {
  return `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${siteBase()}/sitemap.xml\n`;
}
