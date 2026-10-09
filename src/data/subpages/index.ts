import type { SubPage } from './types';
import { PAGES as roastery } from './roastery';
import { PAGES as forge } from './forge';
import { PAGES as haven } from './haven';
import { PAGES as brightside } from './brightside';
import { PAGES as verity } from './verity';
import { PAGES as saffron } from './saffron';
import { PAGES as wanderly } from './wanderly';
import { PAGES as loop } from './loop';
import { PAGES as lumen } from './lumen';
import { PAGES as atelier } from './atelier';

export type { Block, SubHead, SubSection, SubPage } from './types';

const GROUPS: SubPage[][] = [
  roastery,
  forge,
  haven,
  brightside,
  verity,
  saffron,
  wanderly,
  loop,
  lumen,
  atelier,
];

/** Every sub page, in declaration order. */
export function all(): SubPage[] {
  return GROUPS.flat();
}

/** Path of a sub page: `/p/{parent}/{slug}`. */
export function pathOf(page: SubPage): string {
  return `/p/${page.parent}/${page.slug}`;
}

/** The sub pages belonging to one landing, in declaration order. */
export function subsFor(parent: string): SubPage[] {
  return all().filter((p) => p.parent === parent);
}

/** Look one sub page up by parent and segment. */
export function get(parent: string, sub: string): SubPage | undefined {
  return all().find((p) => p.parent === parent && p.slug === sub);
}
