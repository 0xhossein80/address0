import { Pager } from './Pager';

interface FooterProps {
  slug: string;
  brand: string;
}

/** One footer per template — every slug gets its own arrangement.
 *  All of them keep the index link and the sitemap; the floating
 *  prev/next pair rides above the page. */
export function Footer({ slug, brand }: FooterProps) {
  const pager = <Pager variant="fab" slug={slug} />;

  if (slug === 'index') {
    return (
      <footer className="footer footer--index" data-footer="index">
        <div className="wrap footer__inner">
          <div className="footer__block">
            <p className="footer__brand">{brand}</p>
            <p className="footer__note">
              One of ten landing pages in this collection — each one its own React page,
              palette and layout.
            </p>
          </div>
          <div className="footer__block footer__block--links">
            <a href="/">Portfolio index</a>
            <a href="/sitemap.xml" data-no-transition>
              Sitemap
            </a>
            <p className="footer__note">Vite · Million · React</p>
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
            Lost pages happen. The collection is still ten landings deep.
          </p>
          <nav className="footer__inline" aria-label="Footer">
            <a href="/">Portfolio index</a>
            <a href="/sitemap.xml" data-no-transition>
              Sitemap
            </a>
          </nav>
        </div>
        {pager}
      </footer>
    );
  }

  if (slug === 'roastery') {
    return (
      <footer className="footer footer--roastery" data-footer="roastery">
        <div className="wrap">
          <p className="footer__mega">
            {brand}
            <span className="footer__dot" aria-hidden="true" />
          </p>
          <div className="footer__cols">
            <div className="footer__col">
              <h3>The roastery</h3>
              <p className="footer__note">
                Small batches off the 12kg drum, roasted Thursdays and shipped the same
                afternoon.
              </p>
            </div>
            <div className="footer__col">
              <h3>Keep reading</h3>
              <a href="/p/roastery/roast-log">The roast log</a>
              <a href="/p/roastery/brew-guides">Brew guides</a>
              <a href="/p/roastery/subscriptions">Subscriptions</a>
              <a href="/p/roastery/wholesale">Wholesale</a>
            </div>
            <div className="footer__col">
              <h3>Next batch</h3>
              <p className="footer__note">
                Subscribers pick before the public,48 hours ahead of the shop.
              </p>
              <a className="footer__cta" href="/p/roastery#enquire">
                Join a plan &#8594;
              </a>
            </div>
          </div>
          <div className="footer__bar">
            <span>Roasted Thursdays · shipped Fridays</span>
            <nav className="footer__inline" aria-label="Footer">
              <a href="/">Index</a>
              <a href="/sitemap.xml" data-no-transition>
                Sitemap
              </a>
            </nav>
          </div>
        </div>
        {pager}
      </footer>
    );
  }

  if (slug === 'forge') {
    return (
      <footer className="footer footer--forge" data-footer="forge">
        <div className="wrap">
          <div className="footer__top">
            <p className="footer__brandline">{brand}</p>
            <p className="footer__hours">Doors 05:00 — 23:00 · seven days</p>
          </div>
          <nav className="footer__tiles" aria-label="Footer">
            <a className="footer__tile" href="/p/forge#enquire">
              Free week
            </a>
            <a className="footer__tile" href="/p/forge/timetable">
              Timetable
            </a>
            <a className="footer__tile" href="/p/forge/programming">
              Programming
            </a>
            <a className="footer__tile" href="/">
              Index
            </a>
          </nav>
          <div className="footer__bar">
            <span>No shortcuts, no sign-up fee</span>
            <nav className="footer__inline" aria-label="Footer">
              <a href="/sitemap.xml" data-no-transition>
                Sitemap
              </a>
            </nav>
          </div>
        </div>
        {pager}
      </footer>
    );
  }

  if (slug === 'haven') {
    return (
      <footer className="footer footer--haven" data-footer="haven">
        <div className="wrap footer__split">
          <div className="footer__contact">
            <p className="footer__brand">{brand}</p>
            <dl className="footer__dl">
              <div>
                <dt>Office</dt>
                <dd>12 Vale Street, Northgate</dd>
              </div>
              <div>
                <dt>Telephone</dt>
                <dd>01632 960 118</dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>Mon–Sat, 09:00–18:00</dd>
              </div>
            </dl>
          </div>
          <div className="footer__col">
            <h3>Guides</h3>
            <a href="/p/haven/buying-guide">Buying guide</a>
            <a href="/p/haven/neighbourhoods">Neighbourhoods</a>
            <a href="/p/haven/selling-with-haven">Selling with us</a>
            <a href="/p/haven/sold-archive">Sold archive</a>
          </div>
          <div className="footer__col">
            <h3>Elsewhere</h3>
            <a href="/">Portfolio index</a>
            <a href="/sitemap.xml" data-no-transition>
              Sitemap
            </a>
          </div>
        </div>
        <div className="wrap footer__bar">
          <span>Registered sales &amp; lettings agent</span>
          <span>Valuations, no obligation</span>
        </div>
        {pager}
      </footer>
    );
  }

  if (slug === 'brightside') {
    return (
      <footer className="footer footer--brightside" data-footer="brightside">
        <div className="wrap">
          <div className="footer__card">
            <div className="footer__block">
              <p className="footer__brand">{brand}</p>
              <p className="footer__note">
                Family dentistry on Vale Road. Emergencies: call before 10:00 and we will
                find you a slot the same day.
              </p>
            </div>
            <div className="footer__col">
              <h3>After your visit</h3>
              <a href="/p/brightside/aftercare">Aftercare</a>
              <a href="/p/brightside/emergency">Urgent help</a>
              <a href="/p/brightside/treatment-menu">Treatment prices</a>
            </div>
            <div className="footer__col">
              <h3>Practice</h3>
              <a href="/">Portfolio index</a>
              <a href="/sitemap.xml" data-no-transition>
                Sitemap
              </a>
            </div>
          </div>
          <div className="footer__bar">
            <span>Check-ups from £48 · plans from £14 a month</span>
            <span>Children under 6 free with a parent</span>
          </div>
        </div>
        {pager}
      </footer>
    );
  }

  if (slug === 'verity') {
    return (
      <footer className="footer footer--verity" data-footer="verity">
        <div className="wrap footer__cols3">
          <div className="footer__col">
            <p className="footer__brand">{brand}</p>
            <p className="footer__note">
              Residential property work, quoted up front. Every figure on this site is what
              we actually charge.
            </p>
          </div>
          <div className="footer__col">
            <h3>Guides</h3>
            <a href="/p/verity/fees-explained">Fees explained</a>
            <a href="/p/verity/conveyancing-timeline">The timeline</a>
            <a href="/p/verity/glossary">Glossary</a>
            <a href="/p/verity/client-stories">Client stories</a>
          </div>
          <div className="footer__col">
            <h3>Office</h3>
            <p className="footer__note">
              18 Chancery Row · consultations Mon–Thu, 09:00–17:30
            </p>
            <a className="footer__cta" href="/p/verity#enquire">
              Book a consultation &#8594;
            </a>
          </div>
        </div>
        <div className="wrap footer__bar">
          <span>Regulated conveyancing · © 2026</span>
          <nav className="footer__inline" aria-label="Footer">
            <a href="/">Index</a>
            <a href="/sitemap.xml" data-no-transition>
              Sitemap
            </a>
          </nav>
        </div>
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
            <a href="/sitemap.xml" data-no-transition>
              Sitemap
            </a>
          </nav>
        </div>
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
              <a href="/sitemap.xml" data-no-transition>
                Sitemap
              </a>
            </div>
          </div>
          <div className="footer__bar">
            <span>Plan light · travel heavy</span>
            <span>Boards anywhere, plans everywhere</span>
          </div>
        </div>
        {pager}
      </footer>
    );
  }

  if (slug === 'loop') {
    return (
      <footer className="footer footer--loop" data-footer="loop">
        <div className="wrap">
          <p className="footer__status">
            <span className="footer__dot" aria-hidden="true" /> All systems normal · v1.4
          </p>
          <div className="footer__grid4">
            <div className="footer__col">
              <h3>Product</h3>
              <a href="/p/loop#features">Features</a>
              <a href="/p/loop#pricing">Pricing</a>
              <a href="/p/loop#enquire">Start free</a>
            </div>
            <div className="footer__col">
              <h3>Playbook</h3>
              <a href="/p/loop/metrics-playbook">Metrics</a>
              <a href="/p/loop/retention-benchmarks">Benchmarks</a>
              <a href="/p/loop/rollout">Rollout</a>
            </div>
            <div className="footer__col">
              <h3>Build</h3>
              <a href="/p/loop/integrations">Integrations</a>
              <a href="/p/loop#faq">FAQ</a>
            </div>
            <div className="footer__col">
              <h3>Elsewhere</h3>
              <a href="/">Index</a>
              <a href="/sitemap.xml" data-no-transition>
                Sitemap
              </a>
            </div>
          </div>
          <div className="footer__bar">
            <span>Loop Analytics · GDPR-ready · EU hosting</span>
            <span>© 2026</span>
          </div>
        </div>
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
            <a href="/sitemap.xml" data-no-transition>
              Sitemap
            </a>
          </nav>
        </div>
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
          <nav className="footer__inline" aria-label="Footer">
            <a href="/sitemap.xml" data-no-transition>
              Sitemap
            </a>
          </nav>
        </div>
      </div>
      {pager}
    </footer>
  );
}
