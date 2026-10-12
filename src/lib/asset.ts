/** Site-relative public asset path, prefixed with the deploy base
 *  (`/address0/` on GitHub Pages, `/` locally). Data files keep plain
 *  `/assets/...` paths; call this at the usage site (`src={asset(...)}`). */
export function asset(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}
