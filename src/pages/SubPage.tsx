import { Page } from '../components/Page';
import { SubBlocks } from '../components/SubBlocks';
import { bySlug, pathOf } from '../data/categories';
import { get, pathOf as subPathOf, subsFor } from '../data/subpages';
import NotFound from './NotFound';

interface SubPageProps {
  parent: string;
  sub: string;
}

/** A page at `/p/{parent}/{sub}` — breadcrumb hero, one of four layout
 *  variants, a closing CTA and sibling links. */
export default function SubPage({ parent, sub }: SubPageProps) {
  const page = get(parent, sub);
  const category = bySlug(parent);
  if (!page || !category) return <NotFound />;

  const brand = category.name;
  const parentPath = pathOf(category);
  const siblings = subsFor(parent)
    .filter((s) => s.slug !== sub)
    .map((s) => [subPathOf(s), s.heading] as [string, string]);

  const navItems: [string, string][] = [
    [`Back to ${brand}`, parentPath],
    ['On this page', '#sections'],
    ['FAQ', `${parentPath}#faq`],
    ['Enquire', `${parentPath}#enquire`],
  ];

  return (
    <Page
      slug={parent}
      brand={brand}
      title={page.title}
      description={page.description}
      seoPath={subPathOf(page)}
      navItems={navItems}
    >
      <main className={`page-sub sub--${page.variant}`}>
        <section className="wrap sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Ten Landings</a>
            <span aria-hidden="true">/</span>
            <a href={parentPath}>{brand}</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{page.heading}</span>
          </nav>
          <p className="sub-hero__kicker">{page.kicker}</p>
          <h1 className="sub-hero__title">{page.heading}</h1>
          <p className="sub-hero__lede">{page.lede}</p>
          <div className="hero__actions">
            <a className="btn btn--accent" href={`${parentPath}#enquire`}>
              {page.ctaTitle}
            </a>
            <a className="btn btn--ghost" href={parentPath}>
              Back to {brand}
            </a>
          </div>
          {page.stats.length > 0 ? (
            <dl className="sub-stats">
              {page.stats.map(([value, label]) => (
                <div key={label} className="sub-stats__item">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </section>

        {page.variant === 'guide' ? (
          <section className="wrap sub-body sub-body--guide" id="sections">
            <aside className="sub-toc">
              <p className="sub-toc__title">On this page</p>
              <ol className="sub-toc__list">
                {page.sections.map((section, i) => (
                  <li key={section.title}>
                    <a href={`#s${i + 1}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
              <a className="sub-toc__back" href={parentPath}>
                &#8592; {brand}
              </a>
            </aside>
            <div className="sub-main">
              {page.sections.map((section, i) => (
                <article key={section.title} className="sub-sec" id={`s${i + 1}`}>
                  <span className="sub-sec__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="sub-sec__text">
                    <h2>{section.title}</h2>
                    <SubBlocks blocks={section.blocks} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : page.variant === 'log' ? (
          <section className="wrap sub-body sub-body--log" id="sections">
            <div className="ledger">
              {page.sections.map((section, i) => (
                <article key={section.title} className="ledger__row" id={`s${i + 1}`}>
                  <header className="ledger__rail">
                    <span className="ledger__num" aria-hidden="true">
                      &#167;{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="ledger__title">{section.title}</span>
                  </header>
                  <div className="ledger__body">
                    <SubBlocks blocks={section.blocks} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : page.variant === 'story' ? (
          <section className="wrap sub-body sub-body--story" id="sections">
            {page.sections.map((section, i) => (
              <article key={section.title} className="story-sec" id={`s${i + 1}`}>
                <p className="story-sec__kicker" aria-hidden="true">
                  &#167; {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="story-sec__title">{section.title}</h2>
                <div className="story-sec__prose">
                  <SubBlocks blocks={section.blocks} />
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="wrap sub-body sub-body--cards" id="sections">
            <div className="sub-grid">
              {page.sections.map((section, i) => (
                <article key={section.title} className="sub-card" id={`s${i + 1}`}>
                  <span className="sub-card__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="sub-card__title">{section.title}</h2>
                  <SubBlocks blocks={section.blocks} />
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="wrap sub-cta">
          <div className="sub-cta__inner">
            <div>
              <h2 className="section-title">{page.ctaTitle}</h2>
              <p className="section-note">{page.ctaBody}</p>
            </div>
            <div className="sub-cta__actions">
              <a className="btn btn--accent" href={`${parentPath}#enquire`}>
                Start the enquiry
              </a>
              <a className="btn btn--ghost" href={`${parentPath}#faq`}>
                Read the FAQ
              </a>
            </div>
          </div>
        </section>

        {siblings.length > 0 ? (
          <section className="wrap more-pages">
            <div className="section-head">
              <h2 className="section-title">More from {brand}</h2>
            </div>
            <div className="more-pages__grid">
              {siblings.map(([path, name]) => (
                <a key={path} className="more-pages__link" href={path}>
                  <span className="more-pages__name">{name}</span>
                  <span aria-hidden="true">&#8594;</span>
                </a>
              ))}
              <a className="more-pages__link" href={parentPath}>
                <span className="more-pages__name">All of {brand}</span>
                <span aria-hidden="true">&#8594;</span>
              </a>
            </div>
          </section>
        ) : null}
      </main>
    </Page>
  );
}
