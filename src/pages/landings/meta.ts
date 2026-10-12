/** Brand names and header nav items per landing, shared by the landing
 *  pages themselves and the sub pages one level below them. */

export const BRANDS: Record<string, string> = {
  saffron: 'Saffron & Stone',
  wanderly: 'Wanderly Travel Co.',
  lumen: 'Lumen Studio',
  atelier: 'Atelier Noir',
};

export const LANDING_NAV: Record<string, [string, string][]> = {
  saffron: [
    ['Why Saffron?', '#why'],
    ['Menu', '#menu'],
    ['Location', '#location'],
    ['FAQ', '#faq'],
    ['Reserve', '#enquire'],
  ],
  wanderly: [
    ['Trips', '#trips'],
    ['How it works', '#how'],
    ['FAQ', '#faq'],
    ['Plan a trip', '#enquire'],
  ],
  lumen: [
    ['Work', '#work'],
    ['Sessions', '#sessions'],
    ['Packages', '#packages'],
    ['Hold', '#hold'],
    ['FAQ', '#faq'],
    ['Book', '#enquire'],
  ],
  atelier: [
    ['Shop', '#capsule'],
    ['Collections', '#collections'],
    ['Offers', '#offers'],
    ['Size', '#fit'],
  ],
};
