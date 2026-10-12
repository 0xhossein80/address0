// million-ignore — cart-driven text swaps crash Million's Text optimizer
import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Page } from '../../components/Page';
import { Faq } from '../../components/Faq';
import { Subs } from '../../components/Subs';
import { atelier, type AtelierCat, type Product } from '../../data/landings';
import { contentForSlug } from '../../data/content';
import { LANDING_NAV } from './meta';
import { AtelierCart } from './AtelierCart';
import * as cart from '../../lib/cart';

const SLUG = 'atelier';
const BRAND = 'Atelier Noir';
const OG_IMAGE = '/assets/img/atelier/field-coat.jpg';

type CatFilter = 'All' | AtelierCat;
const CATS: CatFilter[] = ['All', 'Women', 'Men', 'Home Goods', 'Seasonal'];

const TEMPLATE_1 = `
  <h2>How the bag works</h2>
  <p>The rail is cut in short runs, so the piece you are looking at may be one of few. Adding it to the bag holds it while you measure yourself properly — no card is touched until the piece is packed.</p>
  <ul>
    <li>Press Add and the piece lands in the bag; the bag keeps count at the top of the page</li>
    <li>Nothing is charged at any point before packing — checkout only asks for an email</li>
    <li>Made-to-order sizes are flagged before you pay, when a roll of cloth is still left to cut them from</li>
    <li>Orders over $120 ship free; everything else travels for a $12 flat parcel rate</li>
    <li>Payment runs on card or Apple Pay, captured when the piece is packed, not before</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#capsule">Shop the rail</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_2 = `
  <h2>Where the parcel goes</h2>
  <p>Orders leave the workshop twice a week in paper and board, never plastic. This is the whole journey from your confirmation to your door, including the two parts that catch first-time buyers out.</p>
  <ul>
    <li>In-stock pieces are packed and posted within two working days of the order</li>
    <li>Delivery inside the country takes three to four working days, and orders over $120 ship free</li>
    <li>Parcels travel in recycled board with paper tape — no plastic and no gift box you would only bin</li>
    <li>International orders show duties at checkout, so nothing is collected from you at the door</li>
    <li>Add the occasion to the order note if it is a gift; we reply before we pack, not after it ships</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#bag" data-at-bag>Open the bag</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_3 = `
  <h2>Our cloth, our ticket</h2>
  <p>Deadstock cloth is bought once, in the length a rail needs, at the price the mill asked that week. The compare-at price on every card is the mill ticket — the rail price is what is left once the lot is cut.</p>
  <ul>
    <li>Tickets are set the week the cloth is bought and stay put for the life of the rail</li>
    <li>Small runs mean small prices: no middlemen, no seasonal markdown theatre</li>
    <li>Two years of repairs are already inside the price — buttons, seams and elbows, nothing invoiced</li>
    <li>Pieces that do not sell through retire with the rail instead of being cut cheaper to clear</li>
    <li>Nothing is priced upward for scarcity either: a piece that returns costs what it cost the first time</li>
  </ul>
  <div class="modal__actions">
    <a class="btn btn--accent" href="#capsule">Shop the rail</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const TEMPLATE_4 = `
  <h2>Find a store</h2>
  <p>Three places to touch the wool before you buy. Pick a shop — the map follows. The workshop holds the full rail, the other two carry the season.</p>
  <div class="kn-stores">
    <input class="kn-store-radio" type="radio" name="kn-store" id="ks-1" checked />
    <input class="kn-store-radio" type="radio" name="kn-store" id="ks-2" />
    <input class="kn-store-radio" type="radio" name="kn-store" id="ks-3" />
    <div class="kn-map">
      <iframe class="kn-map-frame" data-frame="ks-1" title="Map — The Workshop, Shoreditch, London" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.0995%2C51.5135%2C-0.0595%2C51.5375&amp;layer=mapnik&amp;marker=51.5255%2C-0.0795"></iframe>
      <iframe class="kn-map-frame" data-frame="ks-2" title="Map — The Mill Shop, Greenwich, London" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.0200%2C51.4652%2C0.0200%2C51.4892&amp;layer=mapnik&amp;marker=51.4772%2C0.0000"></iframe>
      <iframe class="kn-map-frame" data-frame="ks-3" title="Map — Winter Market Stall, Covent Garden, London" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1425%2C51.4998%2C-0.1025%2C51.5238&amp;layer=mapnik&amp;marker=51.5118%2C-0.1225"></iframe>
    </div>
    <ul class="kn-store-list">
      <li>
        <label class="kn-store-card" data-card="ks-1" for="ks-1">
          <span class="kn-store-card__num">1</span>
          <span class="kn-store-card__main">
            <span class="kn-store-card__name">The Workshop</span>
            <span class="kn-store-card__area">Shoreditch, London · Tue–Sat, 11:00–18:00</span>
            <span class="kn-store-card__note">The full rail, the fitting room and the repairs counter.</span>
            <a class="kn-store-card__link" href="/p/atelier/appointments">Book a fitting <span aria-hidden="true">→</span></a>
          </span>
        </label>
      </li>
      <li>
        <label class="kn-store-card" data-card="ks-2" for="ks-2">
          <span class="kn-store-card__num">2</span>
          <span class="kn-store-card__main">
            <span class="kn-store-card__name">The Mill Shop</span>
            <span class="kn-store-card__area">Greenwich, London · Sat, 10:00–16:00</span>
            <span class="kn-store-card__note">Mill ends, bundles and the Fireside Set to take home.</span>
            <a class="kn-store-card__link" href="#capsule">Shop the rail <span aria-hidden="true">→</span></a>
          </span>
        </label>
      </li>
      <li>
        <label class="kn-store-card" data-card="ks-3" for="ks-3">
          <span class="kn-store-card__num">3</span>
          <span class="kn-store-card__main">
            <span class="kn-store-card__name">Winter Market Stall</span>
            <span class="kn-store-card__area">Covent Garden, London · December weekends</span>
            <span class="kn-store-card__note">Socks, gift wrap and a steamer for your old coat.</span>
            <a class="kn-store-card__link" href="#offers">See the offer <span aria-hidden="true">→</span></a>
          </span>
        </label>
      </li>
    </ul>
  </div>
  <div class="modal__actions">
    <a class="btn btn--accent" href="/p/atelier/appointments">Book a fitting</a>
    <button type="button" class="btn btn--ghost" data-modal-close>Close</button>
  </div>
`;

const HERO_SLIDES = [
  {
    img: '/assets/img/atelier/rail.jpg',
    pos: '50% 40%',
    alt: 'The winter rail: sweaters and knits hanging in a row',
    caption: 'The winter rail — eight woollens deep',
  },
  {
    img: '/assets/img/atelier/field-coat.jpg',
    pos: '50% 25%',
    alt: 'Camel wool coat worn on stone steps',
    caption: 'Heavy wool, cut to be worn for a decade',
  },
  {
    img: '/assets/img/atelier/wool-cloth.jpg',
    pos: '50% 50%',
    alt: 'Close weave of the mill-end wool cloth',
    caption: 'Mill ends, bought once, never re-ordered',
  },
];

const BUNDLE_NAMES = ['Heirloom Throw', 'Hearth Cushion Cover', 'Après Sock Trio'];

const BUNDLE: Product[] = BUNDLE_NAMES.map(
  (name) => atelier.products.find((p) => p.name === name)!,
);

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Drawn yarn-ball mark — the shop's one small motif, in a single stroke. */
function YarnMark() {
  return (
    <svg className="kn-yarn" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
      <circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4.9 9.6c4.4-1.9 9.9-1.9 14.2.3M4.6 13.4c4.6.6 9.6.3 13.9-1.7M5.4 16.8c4.2 1.4 9 1.5 13.2.1M8.6 6.1c3 3.9 3.9 9.6 2.7 14.2M13.9 5.7c2 4.3 2.1 9.7.4 14.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M18.6 17.2c2.6.8 4.4 2.9 4.9 5.6.2 1.2-.6 2.1-1.8 2.1h-2.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
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

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 21s-6.5-5.4-6.5-10.4A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.6C18.5 15.6 12 21 12 21Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 20.3 5.4 13.7a4.6 4.6 0 0 1 0-6.5 4.6 4.6 0 0 1 6.6 0 4.6 4.6 0 0 1 6.6 0 4.6 4.6 0 0 1 0 6.5Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TickIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="m5 12.5 4.5 4.5L19 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  const id = slugify(product.name);
  const qty = cart.qtyOf(id);
  return (
    <article className={`kn-card${qty > 0 ? ' kn-card--inbag' : ''}`}>
      <div className="kn-card__thumb" style={{ background: product.swatch }}>
        <img
          src={product.img}
          alt=""
          loading="lazy"
          decoding="async"
          style={{ objectPosition: product.pos, ...(product.tone ? { filter: product.tone } : {}) }}
        />
      </div>
      <p className="kn-card__kind">{product.kind}</p>
      <h3 className="kn-card__name">{product.name}</h3>
      <p className="kn-card__price">
        <span>{product.price}</span> <s>{product.compareAt}</s>
      </p>
      <p className="kn-card__tones" aria-label={`Colorways: ${product.tones.length}`}>
        {product.tones.map((tone) => (
          <span key={tone} style={{ background: tone }} aria-hidden="true" />
        ))}
      </p>
      <button
        type="button"
        className="kn-card__add"
        onClick={() => cart.add(product)}
        aria-label={
          qty > 0 ? `Add another ${product.name} to bag (${qty} in bag)` : `Add ${product.name} to bag`
        }
      >
        {qty > 0 ? `In bag · ${qty}` : 'Add to bag'}
      </button>
    </article>
  );
}

export default function Atelier() {
  const content = contentForSlug(SLUG);
  const lines = useSyncExternalStore(cart.subscribe, cart.getLines, cart.getLines);
  const bagCount = lines.reduce((n, l) => n + l.qty, 0);
  const [cat, setCat] = useState<CatFilter>('All');
  const [query, setQuery] = useState('');
  const [slide, setSlide] = useState(0);
  const [loved, setLoved] = useState<string[]>([]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const link = target?.closest<HTMLElement>('a[data-at-bag], button[data-at-bag]');
      if (!link) return;
      e.preventDefault();
      e.stopPropagation();
      // AtelierCart listens for this; hash also opens via #bag
      window.dispatchEvent(new CustomEvent('atelier:open-bag'));
      if (window.location.hash !== '#bag') {
        history.replaceState(null, '', '#bag');
      }
    }
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  const rail = useMemo(() => {
    const q = query.trim().toLowerCase();
    return atelier.products.filter(
      (p) =>
        (cat === 'All' || p.cat === cat) &&
        (q.length === 0 ||
          p.name.toLowerCase().includes(q) ||
          p.kind.toLowerCase().includes(q) ||
          p.blurb.toLowerCase().includes(q)),
    );
  }, [cat, query]);

  if (!content) return null;

  function shopCat(next: AtelierCat) {
    setCat(next);
    setQuery('');
    document.getElementById('capsule')?.scrollIntoView({ behavior: 'smooth' });
  }

  function toggleLoved(name: string) {
    setLoved((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));
  }

  const countFor = (c: AtelierCat) => atelier.products.filter((p) => p.cat === c).length;
  const active = HERO_SLIDES[slide];

  return (
    <Page
      slug={SLUG}
      brand={BRAND}
      title={content.title}
      description={content.description}
      seoPath="/p/atelier"
      image={OG_IMAGE}
      navItems={LANDING_NAV[SLUG]}
    >
      <main className="page-atelier">
        <div className="wrap kn-store">
          <div className="kn-store__top">
            <button
              type="button"
              className="kn-store__find"
              data-modal-open="tpl-atelier-store"
            >
              <PinIcon />
              Find a store
            </button>
            <div className="kn-store__tools">
              <label className="kn-search">
                <span className="kn-search__icon">
                  <SearchIcon />
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the rail"
                  aria-label="Search the rail"
                />
              </label>
              <button
                type="button"
                className="kn-store__bag"
                data-at-bag
                aria-label={`Open bag, ${bagCount} ${bagCount === 1 ? 'item' : 'items'}`}
              >
                Bag{bagCount > 0 ? ` · ${bagCount}` : ''}
              </button>
            </div>
          </div>
          <div className="kn-store__cats" role="group" aria-label="Filter the rail by collection">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                className={`kn-cat${cat === c ? ' kn-cat--on' : ''}`}
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <section className="wrap kn-hero">
          <div className="kn-hero__media">
            <div className="kn-hero__slides">
              {HERO_SLIDES.map((s, i) => (
                <img
                  key={s.img + i}
                  src={s.img}
                  alt={i === slide ? s.alt : ''}
                  aria-hidden={i === slide ? undefined : true}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`kn-hero__slide${i === slide ? ' kn-hero__slide--on' : ''}`}
                  style={{ objectPosition: s.pos }}
                />
              ))}
            </div>
            <button
              type="button"
              className="kn-hero__edge kn-hero__edge--prev"
              onClick={() => setSlide((slide + HERO_SLIDES.length - 1) % HERO_SLIDES.length)}
              aria-label="Previous hero image"
            >
              ‹
            </button>
            <button
              type="button"
              className="kn-hero__edge kn-hero__edge--next"
              onClick={() => setSlide((slide + 1) % HERO_SLIDES.length)}
              aria-label="Next hero image"
            >
              ›
            </button>
            <div className="kn-hero__card">
              <p className="kn-hero__lede">Made with Love, Wrapped in Warmth.</p>
              <a className="kn-hero__cta" href="#capsule">
                Explore Our Latest Winter Collection
                <span className="kn-hero__go" aria-hidden="true">
                  →
                </span>
              </a>
              <p className="kn-hero__cap">{active.caption}</p>
            </div>
            <div className="kn-hero__dots" role="group" aria-label="Choose hero image">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.caption}
                  type="button"
                  className={`kn-hero__dot${i === slide ? ' kn-hero__dot--on' : ''}`}
                  aria-label={`Show: ${s.caption}`}
                  aria-current={i === slide ? true : undefined}
                  onClick={() => setSlide(i)}
                />
              ))}
            </div>
          </div>

          <div className="kn-hero__side">
            <h1 className="kn-hero__title">
              From cozy <span className="kn-nowrap">sweaters <YarnMark /></span> to elegant{' '}
              <span className="kn-nowrap">shawls <YarnMark /></span> find your perfect{' '}
              <strong>Woollen Essentials.</strong>
            </h1>

            <div className="kn-railhead" id="capsule">
              <p className="kn-railhead__note">
                A few of our best sellers…{' '}
                <span aria-live="polite">
                  {rail.length} of {atelier.products.length} on the rail
                </span>
              </p>
              <div className="kn-railhead__row">
                <div className="kn-rail" role="list" aria-label="Best sellers">
                  {rail.length === 0 ? (
                    <div className="kn-rail__empty">
                      <p>Nothing on the rail matches “{query.trim()}”.</p>
                      <button
                        type="button"
                        className="btn btn--ghost"
                        onClick={() => {
                          setQuery('');
                          setCat('All');
                        }}
                      >
                        Clear search
                      </button>
                    </div>
                  ) : (
                    rail.map((product) => (
                      <div key={product.name} role="listitem" className="kn-rail__cell">
                        <ProductCard product={product} />
                      </div>
                    ))
                  )}
                </div>
                <a className="kn-round" href="#collections">
                  Shop Now
                </a>
              </div>
            </div>

            <ul className="kn-proof" aria-label="Why shop the rail">
              <li>
                <TickIcon /> Free shipping over $120
              </li>
              <li>
                <TickIcon /> 2-year repairs included
              </li>
              <li>
                <TickIcon /> 30-day returns
              </li>
            </ul>
          </div>
        </section>

        <section className="wrap kn-collections" id="collections" aria-labelledby="kn-collections-title">
          <div className="kn-collections__main">
            <h2 className="kn-collections__title" id="kn-collections-title">
              Explore Collections
            </h2>
            <div className="kn-collections__grid">
              <article className="kn-col">
                <span className="kn-col__img" style={{ background: '#8a6a45' }}>
                  <img
                    src="/assets/img/atelier/field-coat.jpg"
                    alt="Camel wool coat from the women's collection"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 20%' }}
                  />
                  <span className="kn-col__badge">New</span>
                  <button
                    type="button"
                    className={`kn-col__heart${loved.includes('women') ? ' kn-col__heart--on' : ''}`}
                    aria-pressed={loved.includes('women')}
                    aria-label="Save the women's collection to wishlist"
                    onClick={() => toggleLoved('women')}
                  >
                    <HeartIcon filled={loved.includes('women')} />
                  </button>
                </span>
                <span className="kn-col__body">
                  <span className="kn-col__name">Women — knits &amp; wraps</span>
                  <span className="kn-col__meta">{countFor('Women')} pieces on the rail</span>
                  <a className="kn-col__go" href="#capsule" onClick={(e) => { e.preventDefault(); shopCat('Women'); }}>
                    Shop women <span aria-hidden="true">→</span>
                  </a>
                </span>
              </article>
              <article className="kn-col">
                <span className="kn-col__img" style={{ background: '#b98d55' }}>
                  <img
                    src="/assets/img/atelier/wool-cloth.jpg"
                    alt="Woven wool cloth in camel, from the home collection"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 50%', filter: 'sepia(0.65) saturate(1.5) brightness(1.25)' }}
                  />
                  <button
                    type="button"
                    className={`kn-col__heart${loved.includes('home') ? ' kn-col__heart--on' : ''}`}
                    aria-pressed={loved.includes('home')}
                    aria-label="Save the home collection to wishlist"
                    onClick={() => toggleLoved('home')}
                  >
                    <HeartIcon filled={loved.includes('home')} />
                  </button>
                </span>
                <span className="kn-col__body">
                  <span className="kn-col__name">Home — throws &amp; cushions</span>
                  <span className="kn-col__meta">{countFor('Home Goods')} pieces on the rail</span>
                  <a
                    className="kn-col__go"
                    href="#capsule"
                    onClick={(e) => { e.preventDefault(); shopCat('Home Goods'); }}
                  >
                    Shop home <span aria-hidden="true">→</span>
                  </a>
                </span>
              </article>
            </div>
          </div>
          <aside className="kn-offers" id="offers" aria-labelledby="kn-offers-title">
            <h2 className="kn-offers__title" id="kn-offers-title">
              Special Offers
            </h2>
            <div className="kn-offers__stack" aria-hidden="true">
              {BUNDLE.map((p) => (
                <img
                  key={p.name}
                  src={p.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{
                    objectPosition: p.pos,
                    background: p.swatch,
                    ...(p.tone ? { filter: p.tone } : {}),
                  }}
                />
              ))}
            </div>
            <h3 className="kn-offers__name">The Fireside Set</h3>
            <p className="kn-offers__lines">Heirloom Throw · Hearth Cushion · Après Sock Trio</p>
            <p className="kn-offers__price">
              <span>$360</span> <s>$618</s>
            </p>
            <p className="kn-offers__copy">
              Mill ends, one run. The three warmest things on the rail, ticketed as one.
            </p>
            <button
              type="button"
              className="btn btn--accent kn-offers__add"
              onClick={() => {
                BUNDLE.forEach((p) => cart.add(p));
                window.dispatchEvent(new CustomEvent('atelier:open-bag'));
              }}
            >
              Add the set to bag
            </button>
            <button type="button" className="btn btn--ghost" data-modal-open="tpl-atelier-2">
              Shipping and delivery
            </button>
          </aside>
        </section>

        <section
          className="wrap sig sig--atelier kn-fit"
          id="fit"
          data-sig="atelier"
          aria-labelledby="kn-fit-title"
        >
          <div className="kn-fit__card">
            <h2 className="sig__title kn-fit__title" id="kn-fit-title">
              Your size, off the tape
            </h2>
            <p className="kn-fit__lede">
              Height, how you like a piece to sit, and the cloth. The card works it out the way
              the workroom does — off the body, never off the hanger.
            </p>
            <div className="kn-fit__grid">
              <div className="at-controls">
                <div className="at-height">
                  <label className="at-height__label" htmlFor="at-height">
                    Height{' '}
                    <output className="at-height__value" htmlFor="at-height" data-out="height">
                      170cm
                    </output>
                  </label>
                  <input
                    className="at-height__range"
                    type="range"
                    id="at-height"
                    name="at-height"
                    min={150}
                    max={195}
                    step={1}
                    defaultValue={170}
                  />
                  <div className="at-height__ends" aria-hidden="true">
                    <span>150cm</span>
                    <span>195cm</span>
                  </div>
                </div>
                <fieldset className="at-fitset">
                  <legend className="at-fitset__legend">Fit</legend>
                  <label className="at-chip">
                    <input type="radio" name="at-fit" value="cropped" /> <span>Cropped</span>
                  </label>
                  <label className="at-chip">
                    <input type="radio" name="at-fit" value="slim" /> <span>Slim</span>
                  </label>
                  <label className="at-chip">
                    <input type="radio" name="at-fit" value="regular" defaultChecked />{' '}
                    <span>Regular</span>
                  </label>
                  <label className="at-chip">
                    <input type="radio" name="at-fit" value="relaxed" /> <span>Relaxed</span>
                  </label>
                </fieldset>
                <div className="at-cloth">
                  <p className="at-cloth__label" id="at-cloth-label">
                    Cloth
                  </p>
                  <div className="at-cloth__row" role="group" aria-labelledby="at-cloth-label">
                    <button
                      type="button"
                      className="at-swatch is-on"
                      data-act="swatch"
                      data-tone="#1c1416"
                      aria-pressed="true"
                    >
                      <span
                        className="at-swatch__chip"
                        style={{ background: '#1c1416' }}
                        aria-hidden="true"
                      />
                      Ink
                    </button>
                    <button
                      type="button"
                      className="at-swatch"
                      data-act="swatch"
                      data-tone="#e8e2d9"
                      aria-pressed="false"
                    >
                      <span
                        className="at-swatch__chip"
                        style={{ background: '#e8e2d9' }}
                        aria-hidden="true"
                      />
                      Bone
                    </button>
                    <button
                      type="button"
                      className="at-swatch"
                      data-act="swatch"
                      data-tone="#47503f"
                      aria-pressed="false"
                    >
                      <span
                        className="at-swatch__chip"
                        style={{ background: '#47503f' }}
                        aria-hidden="true"
                      />
                      Moss
                    </button>
                    <button
                      type="button"
                      className="at-swatch"
                      data-act="swatch"
                      data-tone="#5a1f2b"
                      aria-pressed="false"
                    >
                      <span
                        className="at-swatch__chip"
                        style={{ background: '#5a1f2b' }}
                        aria-hidden="true"
                      />
                      Wine
                    </button>
                  </div>
                </div>
              </div>
              <div className="at-result" aria-live="polite">
                <div className="at-result__stage">
                  <div className="at-garment" aria-hidden="true" />
                </div>
                <div className="at-specs">
                  <p className="at-spec">
                    <span className="at-spec__key">Size</span>
                    <span className="at-spec__val" data-out="size">
                      M
                    </span>
                  </p>
                  <p className="at-spec">
                    <span className="at-spec__key">Length</span>
                    <span className="at-spec__val" data-out="length">
                      72cm
                    </span>
                  </p>
                  <p className="at-spec">
                    <span className="at-spec__key">Sleeve</span>
                    <span className="at-spec__val" data-out="sleeve">
                      64cm
                    </span>
                  </p>
                </div>
                <p className="at-note" data-out="fit-note">
                  Straight from the shoulder, nothing pinned.
                </p>
              </div>
            </div>
            <div className="kn-fit__cta">
              <a className="btn btn--accent" href="/p/atelier/appointments">
                Book a fitting
              </a>
              <a className="kn-fit__guide" href="/p/atelier/sizing">
                The sizing guide <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <Subs slug={SLUG} />
        <Faq slug={SLUG} />

        <AtelierCart />
      </main>

      <template id="tpl-atelier-1" dangerouslySetInnerHTML={{ __html: TEMPLATE_1 }} />
      <template id="tpl-atelier-2" dangerouslySetInnerHTML={{ __html: TEMPLATE_2 }} />
      <template id="tpl-atelier-3" dangerouslySetInnerHTML={{ __html: TEMPLATE_3 }} />
      <template id="tpl-atelier-store" dangerouslySetInnerHTML={{ __html: TEMPLATE_4 }} />

      <dialog
        className="lp-modal"
        id="popup-atelier"
        data-popup
        data-popup-key="lp-popup-atelier"
        data-popup-delay="6500"
        aria-labelledby="popup-atelier-title"
      >
        <div className="lp-modal__bar">
          <span className="lp-modal__brand">Atelier Noir · the rail</span>
          <form method="dialog">
            <button className="lp-modal__close" type="submit" value="close" aria-label="Dismiss">
              ✕
            </button>
          </form>
        </div>
        <div className="lp-modal__body">
          <h2 id="popup-atelier-title">The Fireside Set, ticketed as one</h2>
          <p>
            Throw, cushion and socks from the same mill ends — $360 on the rail against a $618
            mill ticket. When the lot is cut, the set retires with it.
          </p>
          <ul>
            <li>Three pieces, one parcel, free shipping either way</li>
            <li>No deposit, no minimum — the bag holds them while you decide</li>
            <li>Repairs and alterations are included either way</li>
          </ul>
          <div className="modal__actions">
            <a className="btn btn--accent" href="#offers">
              See the offer
            </a>
            <button type="button" className="btn btn--ghost" data-modal-close>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </Page>
  );
}
