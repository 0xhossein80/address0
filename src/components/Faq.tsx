import { contentForSlug } from '../data/content';

export function Faq({ slug }: { slug: string }) {
  const content = contentForSlug(slug);
  if (!content || content.faqs.length === 0) return null;

  return (
    <section className="wrap lp-block" id="faq">
      <div className="section-head">
        <h2 className="section-title">{content.faqTitle}</h2>
        <p className="section-note">{content.faqNote}</p>
      </div>
      <div className="faq">
        {content.faqs.map((item) => (
          <details key={item.q} className="faq__item">
            <summary className="faq__q">{item.q}</summary>
            <p className="faq__a">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
