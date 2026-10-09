import { useEffect } from 'react';
import { siteBase, jsonLdAt, themeColor } from '../data/seo';

interface SeoProps {
  /** Body marker + CSS page key: `index`, `404`, or a landing/sub slug. */
  slug: string;
  title: string;
  description: string;
  /** Public path for canonical/OG/JSON-LD: `/`, `/p/{slug}`, `/p/{slug}/{sub}`. */
  seoPath: string;
}

function setMeta(name: string, content: string): void {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function setProperty(property: string, content: string): void {
  const meta = document.createElement('meta');
  meta.setAttribute('property', property);
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
}

function setNameMeta(name: string, content: string): void {
  const meta = document.createElement('meta');
  meta.setAttribute('name', name);
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
}

/** Keeps the document head truthful for the current route — title, meta,
 *  canonical, Open Graph, JSON-LD and the per-page stylesheet. */
export function Seo({ slug, title, description, seoPath }: SeoProps) {
  useEffect(() => {
    const noindex = slug === '404';

    document.title = title;
    setMeta('description', description);
    setMeta(
      'robots',
      noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1',
    );

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (noindex) {
      canonical?.remove();
    } else {
      let link = canonical;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `${siteBase()}${seoPath}`);
    }

    document.head
      .querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="theme-color"]')
      .forEach((node) => node.remove());

    if (!noindex) {
      setProperty('og:type', 'website');
      setProperty('og:site_name', 'Ten Landings');
      setProperty('og:locale', 'en_US');
      setProperty('og:title', title);
      setProperty('og:description', description);
      setProperty('og:url', `${siteBase()}${seoPath}`);
      setNameMeta('twitter:card', 'summary');
      setNameMeta('twitter:title', title);
      setNameMeta('twitter:description', description);
      setNameMeta('theme-color', themeColor(slug));
    }

    const jsonLd = jsonLdAt(seoPath, title, description);
    document.head
      .querySelectorAll('script[type="application/ld+json"]')
      .forEach((node) => node.remove());
    if (jsonLd) {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = jsonLd;
      document.head.appendChild(script);
    }

    document.body.setAttribute('data-slug', slug);

    const href = `/assets/css/pages/${slug}.css`;
    let pageCss = document.head.querySelector<HTMLLinkElement>('link[data-page-css]');
    if (!pageCss) {
      pageCss = document.createElement('link');
      pageCss.setAttribute('rel', 'stylesheet');
      pageCss.setAttribute('data-page-css', '');
      document.head.appendChild(pageCss);
    }
    if (pageCss.getAttribute('href') !== href) {
      pageCss.setAttribute('href', href);
    }
  }, [slug, title, description, seoPath]);

  return null;
}
