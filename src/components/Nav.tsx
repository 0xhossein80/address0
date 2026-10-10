
interface NavProps {
  slug: string;
  brand: string;
  items: [string, string][];
}

const NAV_MARK = ['atelier'];

const NAV_SUB: Record<string, string> = {
  lumen: 'Studio, by appointment',
};

const NAV_TAG: Record<string, string> = {
  wanderly: 'Visas · insurance · routes',
  saffron: 'Hearth-led · 46 covers',
  atelier: 'Fittings by appointment',
};

/** One header per template: arrangement, mark, sub-line and tag are
 *  slug-specific. Two shapes exist — reversed (links first, saffron)
 *  and default (brand left). */
export function Nav({ slug, brand, items }: NavProps) {
  const links = items.map(([label, href]) => (
    <a key={`${label}-${href}`} className="nav__link" href={href}>
      {label}
    </a>
  ));

  const mark = NAV_MARK.includes(slug);
  const sub = NAV_SUB[slug];
  const tag = NAV_TAG[slug];

  return (
    <header className={`nav nav--${slug}`} data-nav={slug}>
      <div className="wrap nav__inner">
        {slug === 'saffron' ? (
          <>
            <nav className="nav__links" aria-label="Page sections">
              {links}
            </nav>
            <a className="nav__brand" href="/">
              {brand}
            </a>
            {tag ? <span className="nav__tag">{tag}</span> : null}
          </>
        ) : (
          <>
            <a className="nav__brand" href="/">
              {mark ? <span className="nav__mark" aria-hidden="true" /> : null}
              {brand}
              {sub ? <span className="nav__sub">{sub}</span> : null}
            </a>
            <nav className="nav__links" aria-label="Page sections">
              {links}
            </nav>
            {tag ? <span className="nav__tag">{tag}</span> : null}
          </>
        )}
      </div>
    </header>
  );
}
