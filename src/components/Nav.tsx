
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
  atelier: 'Fittings by appointment',
};

/** Brand mark for the saffron header — a steaming bowl. */
function BowlMarkNav() {
  return (
    <svg className="nav__mark-bowl" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3.8 11.2h16.4c-.5 4.7-3.9 7.6-8.2 7.6s-7.7-2.9-8.2-7.6Z" fill="currentColor" />
      <path
        d="M8.4 8.3c.9-1 .9-2.1 0-3.2M12 8.3c.9-1 .9-2.1 0-3.2M15.6 8.3c.9-1 .9-2.1 0-3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Search + menu triggers. They ask the saffron landing to open the menu
 *  popup; elsewhere they fall back to the menu band anchor. */
function MenuTriggers() {
  return (
    <div className="nav__acts">
      <a
        className="nav__icon"
        href="/p/saffron#menu"
        data-menu-open="search"
        aria-label="Search the menu"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="10.5" cy="10.5" r="6.2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="m15.4 15.4 4.3 4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </a>
      <a
        className="nav__icon"
        href="/p/saffron#menu"
        data-menu-open="menu"
        aria-label="Open the menu"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M4.5 7.5h15M4.5 12h15M4.5 16.5h15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </a>
    </div>
  );
}

const EMAIL = 'address0.team@proton.me';
const EMAIL_HREF = `mailto:${EMAIL}?subject=Plan%20my%20sales%20page`;

/** The studio logo mark — a zero with a sales arrow. */
function LogoMark() {
  return (
    <span className="nav__logo" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5c-4.5 0-7.5 3.8-7.5 8.5s3 8.5 7.5 8.5c4.5 0 7.5-3.8 7.5-8.5S16.5 3.5 12 3.5Z" />
        <path d="M8.5 12h6M12.5 9.2 15.3 12l-2.8 2.8" />
      </svg>
    </span>
  );
}

/** One header per template: arrangement, mark, sub-line and tag are
 *  slug-specific. Saffron is brand-first with menu icons; the index gets
 *  the full lead-gen header; the rest put the brand left with a studio CTA
 *  so search traffic on any landing can still become a customer. */
export function Nav({ slug, brand, items }: NavProps) {
  const links = items.map(([label, href]) => (
    <a key={`${label}-${href}`} className="nav__link" href={href}>
      {label}
    </a>
  ));

  const mark = NAV_MARK.includes(slug);
  const sub = NAV_SUB[slug];
  const tag = NAV_TAG[slug];

  if (slug === 'index') {
    return (
      <header className="nav nav--index" data-nav="index">
        <div className="wrap nav__inner">
          <a className="nav__brand" href="/">
            
            {brand}
            <span className="nav__sub">sales planners</span>
          </a>
          <nav className="nav__links" aria-label="Page sections">
            {links}
          </nav>
          <a className="nav__cta" href={EMAIL_HREF}>
            Get my sales page
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h15M13.5 6 19.5 12 13.5 18" />
            </svg>
          </a>
        </div>
      </header>
    );
  }

  return (
    <header className={`nav nav--${slug}`} data-nav={slug}>
      <div className="wrap nav__inner">
        {slug === 'saffron' ? (
          <>
            <a className="nav__brand" href="/">
              <BowlMarkNav />
              {brand}
            </a>
            <nav className="nav__links" aria-label="Page sections">
              {links}
            </nav>
            <MenuTriggers />
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
