
interface NavProps {
  slug: string;
  brand: string;
  items: [string, string][];
}

const NAV_MARK = ['roastery', 'brightside', 'atelier', 'loop'];

const NAV_SUB: Record<string, string> = {
  forge: 'Strength Society · est. 2011',
  haven: 'Sales · lettings · valuations',
  verity: 'Counsel, not paperwork',
  lumen: 'Studio, by appointment',
};

const NAV_TAG: Record<string, string> = {
  roastery: 'Roasted Thursdays',
  wanderly: 'Visas · insurance · routes',
  saffron: 'Hearth-led · 46 covers',
  atelier: 'Fittings by appointment',
};

/** One header per template: arrangement, mark, sub-line and tag are
 *  slug-specific. Three shapes exist — default (brand left), reversed
 *  (links first, saffron) and split (links around the brand, loop). */
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
        ) : slug === 'loop' ? (
          <>
            <nav className="nav__links nav__links--l" aria-label="Sections">
              {items.slice(0, 2).map(([label, href]) => (
                <a key={`${label}-${href}`} className="nav__link" href={href}>
                  {label}
                </a>
              ))}
            </nav>
            <a className="nav__brand" href="/">
              <span className="nav__mark" aria-hidden="true" />
              {brand}
            </a>
            <nav className="nav__links nav__links--r" aria-label="More sections">
              {items.slice(2).map(([label, href]) => (
                <a key={`${label}-${href}`} className="nav__link" href={href}>
                  {label}
                </a>
              ))}
            </nav>
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
