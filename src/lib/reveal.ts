import { useEffect } from 'react';

/**
 * Scroll reveal for landing pages. Elements carrying `.rv` fade and rise
 * into view once; each page stylesheet owns the `.rv` / `.rv.is-in`
 * transition so worlds keep their own motion language.
 *
 * Only static content should use `.rv` — nodes added later (filtered
 * grids, dialog lists) never get observed, so they must stay visible
 * by default and animate with plain CSS if at all.
 */
export function useReveal(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rv:not(.is-in)'));
    if (els.length === 0) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
