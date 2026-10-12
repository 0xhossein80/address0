import { Pager } from './Pager';

interface FooterProps {
  slug: string;
  brand: string;
}

const EMAIL = 'address0.team@proton.me';
const EMAIL_HREF = `mailto:${EMAIL}?subject=Plan%20my%20sales%20page`;

/** Slim studio funnel shown at the bottom of every landing page, so search
 *  traffic landing on any business page can still become a customer. */
function StudioStrip() {
  return (
    <div className="wrap">
      <a className="studio-strip" href="/#contact">
        <span className="studio-strip__mark" aria-hidden="true">0</span>
        <span className="studio-strip__text">
          <strong>Like this page? We’ll plan one that sells for you.</strong>
          <em>Address(0) · sales planners, not just developers — get yours</em>
        </span>
        <span className="studio-strip__arrow" aria-hidden="true">→</span>
      </a>
    </div>
  );
}

/** One footer per template — every slug gets its own arrangement.
 *  All of them keep the index link; the floating prev/next pair rides
 *  above the page. */
export function Footer({ slug, brand }: FooterProps) {
  const pager = <Pager variant="fab" slug={slug} />;

  if (slug === 'index') {
    return (
      <footer className="footer footer--index" data-footer="index">
        <div className="wrap">

          <div className="footer__grid">
            <div className="footer__block">
              <p className="footer__brand">{brand}</p>
              <p className="footer__note">
                Sales planners, not just developers — four working showcase demos,
                sixteen sub-pages, real forms and SEO furniture.
              </p>
            </div>
            <nav className="footer__block footer__block--links" aria-label="Explore">
              <p className="footer__col-title">Explore</p>
              <a href="#work">Showcase demos</a>
              <a href="#studio">Why sales-first</a>
              <a href="#process">Process</a>
              <a href="#team">Team</a>
              <a href="#faq">FAQ</a>
            </nav>
            <nav className="footer__block footer__block--links" aria-label="Showcase demos">
              <p className="footer__col-title">Showcase demos</p>
              <a href="/p/saffron">Saffron &amp; Stone · restaurant</a>
              <a href="/p/wanderly">Wanderly · travel</a>
              <a href="/p/lumen">Lumen · photography</a>
              <a href="/p/atelier">Atelier Noir · fashion</a>
            </nav>
            <div className="footer__block footer__block--links">
              <p className="footer__col-title">Contact</p>
              <a className="footer__email" href={EMAIL_HREF}>{EMAIL}</a>
              <p className="footer__note">Prefer browsing? Every page above is the proposal.</p>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© 2026 {brand} · sales planners, not just developers</span>
            <span>Planned to sell · Built to close</span>
          </div>
        </div>
        {pager}
      </footer>
    );
  }

  if (slug === '404') {
    return (
      <footer className="footer footer--404" data-footer="404">
        <div className="wrap footer__row">
          <p className="footer__note">
            Lost pages happen. The collection is still four landings deep.
          </p>
          <nav className="footer__inline" aria-label="Footer">
            <a href="/">Portfolio index</a>
            <a href="/#contact">Get a page like this</a>
          </nav>
        </div>
        <StudioStrip />
        {pager}
      </footer>
    );
  }

  if (slug === 'saffron') {
    return (
      <footer className="footer footer--saffron" data-footer="saffron">
        <div className="wrap footer__center">
          <p className="footer__mega-sm">{brand}</p>
          <nav className="footer__inline footer__inline--big" aria-label="Footer">
            <a href="/p/saffron#menu">Menu</a>
            <a href="/p/saffron/private-dining">Private dining</a>
            <a href="/p/saffron/menu-archive">Past menus</a>
            <a href="/p/saffron#enquire">Reserve</a>
          </nav>
          <p className="footer__service">
            Dinner Tuesday to Saturday · lunch Friday · 46 covers, one fire
          </p>
          <p className="footer__addr">7 Sluice Lane, harbour side</p>
        </div>
        <div className="wrap footer__bar footer__bar--center">
          <nav className="footer__inline" aria-label="Footer">
            <a href="/">Index</a>
          </nav>
        </div>
        <StudioStrip />
        {pager}
      </footer>
    );
  }

  if (slug === 'wanderly') {
    return (
      <footer className="footer footer--wanderly" data-footer="wanderly">
        <div className="wrap">
          <div className="footer__ticket">
            <div className="footer__ticket-main">
              <p className="footer__brand">{brand}</p>
              <p className="footer__note">
                Trips planned by people who have taken them. Packing lists, insurance and
                budgets come with every plan.
              </p>
              <nav className="footer__inline" aria-label="Footer">
                <a href="/p/wanderly/packing-list">Packing list</a>
                <a href="/p/wanderly/insurance-guide">Insurance</a>
                <a href="/p/wanderly/budget-ledger">Budgets</a>
              </nav>
            </div>
            <div className="footer__ticket-stub">
              <a href="/">Index</a>
            </div>
          </div>
          <div className="footer__bar">
            <span>Plan light · travel heavy</span>
            <span>Boards anywhere, plans everywhere</span>
          </div>
        </div>
        <StudioStrip />
        {pager}
      </footer>
    );
  }

  if (slug === 'lumen') {
    return (
      <footer className="footer footer--lumen" data-footer="lumen">
        <div className="wrap footer__row">
          <p className="footer__brand">{brand}</p>
          <nav className="footer__inline" aria-label="Footer">
            <a href="/p/lumen/process">Process</a>
            <a href="/p/lumen/session-types">Sessions</a>
            <a href="/p/lumen/retouching">Retouching</a>
            <a href="/p/lumen#enquire">Book</a>
          </nav>
          <p className="footer__credit">Shot on medium format · printed in-house</p>
        </div>
        <div className="wrap footer__bar footer__bar--center">
          <nav className="footer__inline" aria-label="Footer">
            <a href="/">Portfolio index</a>
          </nav>
        </div>
        <StudioStrip />
        {pager}
      </footer>
    );
  }

  // atelier (default branch)
  return (
    <footer className="footer footer--atelier" data-footer="atelier">
      <div className="wrap">
        <p className="footer__mega">{brand}</p>
        <div className="footer__cols">
          <div className="footer__col">
            <h3>The house</h3>
            <p className="footer__note">
              Measure, baste, finish — three appointments minimum, patterns kept forever.
            </p>
          </div>
          <div className="footer__col">
            <h3>Guides</h3>
            <a href="/p/atelier/sizing">Sizing</a>
            <a href="/p/atelier/fabrics">Fabrics</a>
            <a href="/p/atelier/care-guide">Care guide</a>
          </div>
          <div className="footer__col">
            <h3>Visits</h3>
            <a href="/p/atelier/appointments">Fittings</a>
            <a href="/p/atelier#enquire">Join the list</a>
            <a href="/">Index</a>
          </div>
        </div>
        <div className="footer__bar">
          <span>Kept in paper patterns, forever</span>
        </div>
      </div>
      <StudioStrip />
      {pager}
    </footer>
  );
}
