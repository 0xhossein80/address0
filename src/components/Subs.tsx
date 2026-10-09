import { headsFor } from '../data/subpages/heads';

export function Subs({ slug }: { slug: string }) {
  const pages = headsFor(slug);
  if (pages.length === 0) return null;

  return (
    <section className="wrap more-pages" aria-label="More pages">
      <div className="section-head">
        <h2 className="section-title">Keep reading</h2>
        <p className="section-note">
          {pages.length} deeper pages behind this one — archives, guides and the fine print.
        </p>
      </div>
      <div className="more-pages__grid">
        {pages.map((page) => (
          <a key={page.slug} className="more-pages__card" href={`/p/${slug}/${page.slug}`}>
            <span className="more-pages__kicker">{page.kicker}</span>
            <span className="more-pages__name">{page.heading}</span>
            <span className="more-pages__note">{page.description}</span>
            <span className="more-pages__cta">
              Open page <span aria-hidden="true">&#8594;</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
