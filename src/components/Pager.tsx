import { nextOf, pathOf, prevOf } from '../data/categories';

export type PagerVariant = 'nav' | 'fab' | 'big';

/** Small previous/next pair through the tour (CATEGORIES order, wraps).
 *  Reuses the `random` class so every world's styling carries over; the
 *  circle wipe in transition.js already binds to any internal a[href]. */
export function Pager({ variant, slug }: { variant: PagerVariant; slug: string }) {
  const prev = prevOf(slug);
  const next = nextOf(slug);
  return (
    <span className={`pager pager--${variant}`}>
      <a
        className={`random random--${variant} random--prev`}
        href={pathOf(prev)}
        aria-label={`Previous: ${prev.name}`}
      >
        <span className="random__icon" aria-hidden="true">
          &#8592;
        </span>
        <span className="random__label">Prev</span>
      </a>
      <a
        className={`random random--${variant} random--next`}
        href={pathOf(next)}
        aria-label={`Next: ${next.name}`}
      >
        <span className="random__icon" aria-hidden="true">
          &#8594;
        </span>
        <span className="random__label">Next</span>
      </a>
    </span>
  );
}
