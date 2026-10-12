import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { SaffronBooking } from './SaffronBooking';
import { saffron } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';

const SLUG = 'saffron';
const BRAND = 'Saffron & Stone';

const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function stamp(date: Date): string {
  return `${DOW[date.getDay()]} ${date.getDate()} ${MON[date.getMonth()]}`;
}

/* ------------------------------------------------------------------ marks */

function BowlMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M3.8 11.2h16.4c-.5 4.7-3.9 7.6-8.2 7.6s-7.7-2.9-8.2-7.6Z"
        fill="currentColor"
      />
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

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="10.5" cy="10.5" r="6.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m15.4 15.4 4.3 4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M4.5 7.5h15M4.5 12h15M4.5 16.5h15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="m6.5 6.5 11 11m0-11-11 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d={dir === 'left' ? 'M14.5 6.5 9 12l5.5 5.5' : 'M9.5 6.5 15 12l-5.5 5.5'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------- art */

const FLOATERS: Record<string, JSX.Element> = {
  chilli: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M20 12c2 6 6 8 10 8 12 0 22 12 22 24 0 4-6 8-14 8-14 0-24-12-24-24 0-8 2-13 6-16Z"
        fill="#d63b22"
      />
      <path
        d="M22 44c6 6 16 6 22 0"
        fill="none"
        stroke="#a82612"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path d="M20 12c-4-2-8-2-10 2 4 2 8 2 10-2Z" fill="#3f7d32" />
      <path d="M20 12c0-5 2-8 6-9" fill="none" stroke="#3f7d32" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M32 56C16 48 8 34 12 18c14-2 30 6 36 22 2 8-4 14-16 16Z"
        fill="#4c8f38"
      />
      <path d="M32 56C28 40 22 26 14 18" fill="none" stroke="#2f6424" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 44c4-8 10-14 16-18M24 36c2-6 6-12 10-16" fill="none" stroke="#2f6424" strokeWidth="1.8" opacity="0.6" />
    </svg>
  ),
  tomato: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="36" r="20" fill="#d63b22" />
      <path d="M24 24c4-6 12-6 16 0" fill="none" stroke="#f2836a" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path
        d="M32 16c-4-4-10-5-14-2 2 4 8 6 14 4Zm0 0c4-4 10-5 14-2-2 4-8 6-14 4Z"
        fill="#3f7d32"
      />
      <path d="M32 12v6" stroke="#2f6424" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  lemon: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="#f2c230" />
      <circle cx="32" cy="32" r="17" fill="#ffe084" />
      <path
        d="M32 15v34M15 32h34M20 20l24 24M44 20 20 44"
        stroke="#f2c230"
        strokeWidth="2.2"
      />
      <circle cx="32" cy="32" r="4" fill="#f2c230" />
    </svg>
  ),
  onion: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="21" fill="#b04a6a" />
      <circle cx="32" cy="32" r="15" fill="none" stroke="#e8a0b4" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="9.5" fill="none" stroke="#e8a0b4" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="4" fill="#e8a0b4" />
    </svg>
  ),
  saffron: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 44c6-14 10-24 14-34" fill="none" stroke="#e2451b" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M28 46c4-14 8-24 12-32" fill="none" stroke="#ef5a22" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M38 46c2-12 6-22 10-28" fill="none" stroke="#e2451b" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  ),
};

const FLOATER_LAYOUT: { kind: keyof typeof FLOATERS; style: React.CSSProperties }[] = [
  { kind: 'tomato', style: { top: '6%', left: '2%', width: 'clamp(38px, 4.6vw, 58px)' } },
  { kind: 'leaf', style: { top: '-2%', right: '20%', width: 'clamp(40px, 5vw, 64px)' } },
  { kind: 'onion', style: { top: '14%', right: '-1%', width: 'clamp(36px, 4.4vw, 56px)' } },
  { kind: 'chilli', style: { bottom: '10%', left: '-2%', width: 'clamp(44px, 5.4vw, 70px)' } },
  { kind: 'lemon', style: { bottom: '2%', right: '10%', width: 'clamp(38px, 4.8vw, 60px)' } },
  { kind: 'saffron', style: { top: '44%', left: '-6%', width: 'clamp(34px, 4vw, 50px)' } },
];

/** Circular photo thumb for the golden band cards. */
function CardThumb({ art }: { art: string }) {
  return (
    <span className="sa-card__art">
      <img
        src={`/assets/img/saffron/card-${art}.jpg`}
        alt=""
        width={700}
        height={700}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

/* ------------------------------------------------------------------ page */

export default function Saffron() {
  const content = contentForSlug(SLUG);
  const menuRef = useRef<HTMLDialogElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('All');
  const today = useMemo(() => stamp(new Date()), []);

  const tabs = useMemo(
    () => ['All', ...saffron.menu.map((g) => g.title), 'By the glass'],
    [],
  );

  const sections = useMemo(() => {
    const fromMenu = saffron.menu.map((group) => ({
      title: group.title,
      items: group.dishes.map((d) => ({
        name: d.name,
        detail: d.detail,
        price: d.price,
        mark: d.mark ?? '',
      })),
    }));
    const bar = {
      title: 'By the glass',
      items: saffron.cellar.pours.map((p) => ({
        name: p.name,
        detail: p.detail,
        price: p.price,
        mark: '',
      })),
    };
    return [...fromMenu, bar];
  }, []);

  const visibleSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sections
      .filter((section) => tab === 'All' || section.title === tab)
      .map((section) => ({
        ...section,
        items: q
          ? section.items.filter(
              (item) =>
                item.name.toLowerCase().includes(q) || item.detail.toLowerCase().includes(q),
            )
          : section.items,
      }))
      .filter((section) => section.items.length > 0);
  }, [sections, query, tab]);

  const openMenu = useCallback((group?: string, focusSearch?: boolean) => {
    setTab(group && group.length > 0 ? group : 'All');
    const dlg = menuRef.current;
    if (!dlg) return;
    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');
    document.documentElement.style.overflow = 'hidden';
    if (focusSearch) {
      requestAnimationFrame(() => searchRef.current?.focus());
    }
  }, []);

  const closeMenu = useCallback(() => {
    const dlg = menuRef.current;
    if (!dlg) return;
    if (typeof dlg.close === 'function' && dlg.open) dlg.close();
    else dlg.removeAttribute('open');
    document.documentElement.style.overflow = '';
  }, []);

  // Nav icons (search + hamburger) live in the shared header; they ask this
  // page to open the popup. On sub pages there is no listener, so they fall
  // back to being plain links into the menu band.
  useEffect(() => {
    const onClick = (event: Event) => {
      const target = event.target instanceof Element ? event.target : null;
      const trigger = target?.closest<HTMLElement>('[data-menu-open]');
      if (!trigger) return;
      event.preventDefault();
      const group = trigger.getAttribute('data-menu-group') || undefined;
      const focusSearch = trigger.getAttribute('data-menu-open') === 'search';
      if (focusSearch) setQuery('');
      openMenu(group, focusSearch);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [openMenu]);

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(300, el.clientWidth * 0.85), behavior: 'smooth' });
  };

  if (!content) return null;

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/saffron"
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-saffron">
        {/* ---------------------------------------------------- hero */}
        <section className="sa-hero" id="top" aria-label="Tonight's signature dish">
          <div className="wrap sa-hero__grid">
            <div className="sa-hero__copy">
              <p className="sa-hero__pre">{saffron.hero.pre}</p>
              <h1 className="sa-hero__title">{saffron.hero.title}</h1>
              <p className="sa-hero__lede">{saffron.hero.lede}</p>
              <div className="sa-hero__buy">
                <button
                  type="button"
                  className="btn btn--accent sa-hero__cta"
                  onClick={() => openMenu('From the fire')}
                >
                  {saffron.hero.cta}
                </button>
                <span className="sa-hero__price">{saffron.hero.price}</span>
              </div>
            </div>

            <div className="sa-hero__art" aria-hidden="false">
              <span className="sa-ring sa-ring--one" aria-hidden="true" />
              <span className="sa-ring sa-ring--two" aria-hidden="true" />
              <span className="sa-ring sa-ring--three" aria-hidden="true" />
              <div className="sa-plate">
                <img
                  className="sa-plate__img"
                  src="/assets/img/saffron/hero-biryani.jpg"
                  alt="A plate of saffron biryani with lamb, herbs and burnt onion"
                  width={1400}
                  height={1400}
                  loading="eager"
                  decoding="async"
                />
              </div>
              {FLOATER_LAYOUT.map(({ kind, style }) => (
                <span key={kind} className={`sa-float sa-float--${kind}`} style={style} aria-hidden="true">
                  {FLOATERS[kind]}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------- golden band */}
        <section className="sa-bandwrap" id="menu" aria-label="Menu categories">
          <div className="wrap">
            <div className="sa-band">
              <button
                type="button"
                className="sa-band__arrow"
                aria-label="Previous categories"
                onClick={() => nudge(-1)}
              >
                <ChevronIcon dir="left" />
              </button>
              <div className="sa-band__track" ref={trackRef}>
                {saffron.band.map((card) => (
                  <button
                    key={card.name}
                    type="button"
                    className="sa-card"
                    onClick={() => openMenu(card.group)}
                  >
                    <CardThumb art={card.art} />
                    <span className="sa-card__name">{card.name}</span>
                    <span className="sa-card__from">{card.from}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="sa-band__arrow"
                aria-label="More categories"
                onClick={() => nudge(1)}
              >
                <ChevronIcon dir="right" />
              </button>
            </div>
            <div className="sa-band__foot">
              <p>
                The whole board lives in the menu — twelve plates, four courses and the
                by-the-glass list.
              </p>
              <button type="button" className="sa-band__open" onClick={() => openMenu()}>
                Open full menu
              </button>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- why */}
        <section className="sa-section" id="why">
          <div className="wrap">
            <div className="section-head">
              <p className="sa-eyebrow">01 — why saffron</p>
              <h2 className="section-title">Why people come back</h2>
              <p className="section-note">One fire, one board, one room by the harbour.</p>
            </div>
            <div className="sa-why">
              {saffron.why.map((card) => (
                <article key={card.n} className="sa-why__card">
                  <span className="sa-why__n">{card.n}</span>
                  <h3 className="sa-why__title">{card.title}</h3>
                  <p className="sa-why__text">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ location */}
        <section className="sa-section" id="location">
          <div className="wrap">
            <div className="section-head">
              <p className="sa-eyebrow">02 — location</p>
              <h2 className="section-title">Find the ochre lamp</h2>
              <p className="section-note">
                Harbour side, down the cobbles. Walk-ins take the bar.
              </p>
            </div>
            <div className="sa-loc">
              <div className="sa-loc__info">
                <p className="sa-loc__address">{saffron.location.address}</p>
                <p className="sa-loc__note">{saffron.location.note}</p>
                <ul className="sa-loc__hours">
                  {saffron.location.hours.map(([label, value]) => (
                    <li key={label} className="sa-loc__row">
                      <span className="sa-loc__label">{label}</span>
                      <span className="sa-loc__dots" aria-hidden="true" />
                      <span className="sa-loc__value">{value}</span>
                    </li>
                  ))}
                </ul>
                <div className="hero__actions sa-loc__acts">
                  <a className="btn btn--accent" href="#enquire">
                    Reserve a table
                  </a>
                  <button type="button" className="btn btn--ghost" onClick={() => openMenu()}>
                    Peek at the menu
                  </button>
                </div>
              </div>
              <div className="sa-loc__map">
                <iframe
                  className="sa-loc__frame"
                  title="Map of the harbour quarter around Saffron & Stone"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=5.3165%2C60.3928%2C5.3365%2C60.4018&layer=mapnik&marker=60.3973%2C5.3265"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="sa-loc__caption">
                  Harbour quarter — the ochre lamp is the third door past the chandlery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />
        <SaffronBooking />

        {/* ------------------------------------------------ menu popup */}
        <dialog
          className="sa-pop"
          ref={menuRef}
          aria-labelledby="sa-pop-title"
          onClose={() => {
            document.documentElement.style.overflow = '';
          }}
          onCancel={() => {
            document.documentElement.style.overflow = '';
          }}
        >
          <div className="sa-pop__shell">
            <header className="sa-pop__head">
              <div className="sa-pop__brand">
                <BowlMark className="sa-pop__mark" />
                <div>
                  <p className="sa-pop__eyebrow">
                    {BRAND} · online menu · written {today}
                  </p>
                  <h2 className="sa-pop__title" id="sa-pop-title">
                    Tonight&rsquo;s board
                  </h2>
                </div>
              </div>
              <button
                type="button"
                className="sa-pop__close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </header>

            <div className="sa-pop__tools">
              <label className="sa-pop__search">
                <SearchIcon />
                <span className="sa-pop__search-label">Search the menu</span>
                <input
                  ref={searchRef}
                  type="search"
                  placeholder="Lamb, sourdough, wine…"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  autoComplete="off"
                />
              </label>
              <div className="sa-pop__tabs" role="tablist" aria-label="Menu courses">
                {tabs.map((name) => (
                  <button
                    key={name}
                    type="button"
                    role="tab"
                    aria-selected={tab === name}
                    className={`sa-pop__tab${tab === name ? ' is-on' : ''}`}
                    onClick={() => setTab(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            <div className="sa-pop__body" aria-live="polite">
              {visibleSections.length === 0 ? (
                <p className="sa-pop__empty">
                  Nothing on the board matches &ldquo;{query.trim()}&rdquo; — try lamb, bread
                  or a glass of something.
                </p>
              ) : (
                visibleSections.map((section) => (
                  <section key={section.title} className="sa-pop__group">
                    <h3 className="sa-pop__group-title">{section.title}</h3>
                    <ul className="sa-pop__list">
                      {section.items.map((item) => (
                        <li key={item.name} className="sa-dish">
                          <div className="sa-dish__row">
                            <span className="sa-dish__name">{item.name}</span>
                            {item.mark ? <span className="sa-dish__mark">{item.mark}</span> : null}
                            <span className="sa-dish__dots" aria-hidden="true" />
                            <span className="sa-dish__price">{item.price}</span>
                          </div>
                          <p className="sa-dish__detail">{item.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))
              )}
            </div>

            <footer className="sa-pop__foot">
              <p className="sa-pop__foot-note">
                Tue–Sun · two sittings · no service charge, ever
              </p>
              <a
                className="btn btn--accent"
                href="#enquire"
                onClick={() => {
                  closeMenu();
                }}
              >
                Reserve a table
              </a>
            </footer>
          </div>
        </dialog>
      </main>
    </Page>
  );
}
