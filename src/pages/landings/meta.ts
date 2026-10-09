/** Brand names and header nav items per landing, shared by the landing
 *  pages themselves and the sub pages one level below them. */

export const BRANDS: Record<string, string> = {
  roastery: 'Ember & Oak',
  forge: 'Ironclad Strength',
  haven: 'Haven & Vale',
  brightside: 'Brightside Dental',
  verity: 'Verity & Hale',
  saffron: 'Saffron & Stone',
  wanderly: 'Wanderly Travel Co.',
  loop: 'Loopmetric',
  lumen: 'Lumen Studio',
  atelier: 'Atelier Noir',
};

export const LANDING_NAV: Record<string, [string, string][]> = {
  roastery: [
    ['Roasts', '#roasts'],
    ['Subscribe', '#subscribe'],
    ['FAQ', '#faq'],
    ['Join', '#enquire'],
  ],
  forge: [
    ['Schedule', '#schedule'],
    ['Coaches', '#coaches'],
    ['FAQ', '#faq'],
    ['Free week', '#enquire'],
  ],
  haven: [
    ['Listings', '#listings'],
    ['Results', '#results'],
    ['FAQ', '#faq'],
    ['Valuation', '#enquire'],
  ],
  brightside: [
    ['Services', '#services'],
    ['First visit', '#visit'],
    ['FAQ', '#faq'],
    ['Book', '#enquire'],
  ],
  verity: [
    ['Practice', '#practice'],
    ['Results', '#results'],
    ['FAQ', '#faq'],
    ['Consultation', '#enquire'],
  ],
  saffron: [
    ['Menu', '#menu'],
    ['Hours', '#hours'],
    ['FAQ', '#faq'],
    ['Reserve', '#enquire'],
  ],
  wanderly: [
    ['Trips', '#trips'],
    ['How it works', '#how'],
    ['FAQ', '#faq'],
    ['Plan a trip', '#enquire'],
  ],
  loop: [
    ['Features', '#features'],
    ['Pricing', '#pricing'],
    ['FAQ', '#faq'],
    ['Start free', '#enquire'],
  ],
  lumen: [
    ['Work', '#work'],
    ['Packages', '#packages'],
    ['FAQ', '#faq'],
    ['Book', '#enquire'],
  ],
  atelier: [
    ['Capsule', '#capsule'],
    ['Lookbook', '#lookbook'],
    ['FAQ', '#faq'],
    ['Join the list', '#enquire'],
  ],
};
