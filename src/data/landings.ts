export interface Plan {
  name: string;
  price: string;
  detail: string;
  featured: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

// ---------------------------------------------------------------------------
// Restaurant
// ---------------------------------------------------------------------------

export interface Dish {
  name: string;
  detail: string;
  price: string;
  /** Small margin note beside the name — "House", "Cook's pick", "Day boat". */
  mark?: string;
}

export interface MenuGroup {
  title: string;
  dishes: Dish[];
}

/** One beat of the fire: numbered step in the process section. */
export interface FireStep {
  n: string;
  title: string;
  text: string;
}

/** One point on the evening's clock. */
export interface EveningBeat {
  time: string;
  title: string;
  text: string;
}

/** A pour on the cellar card. */
export interface Pour {
  name: string;
  detail: string;
  price: string;
}

/** One card in the golden category band under the hero. */
export interface BandCard {
  /** Two-line card label. */
  name: string;
  /** Which illustrated thumb the card wears. */
  art: 'biryani' | 'lamb' | 'fish' | 'garden' | 'bread' | 'cake';
  /** Menu group this card opens in the popup. */
  group: string;
  /** Price teaser shown under the name. */
  from: string;
}

/** One card in the Why Saffron row. */
export interface WhyCard {
  n: string;
  title: string;
  text: string;
}

export const saffron: {
  hero: { pre: string; title: string; lede: string; price: string; cta: string };
  band: BandCard[];
  why: WhyCard[];
  location: { address: string; note: string; hours: [string, string][] };
  menu: MenuGroup[];
  stats: Stat[];
  fire: { thesis: string; steps: FireStep[]; note: string };
  evening: EveningBeat[];
  cellar: { pours: Pour[]; note: string };
  facts: string[];
} = {
  hero: {
    pre: "Wood-fired",
    title: "Saffron Biryani",
    lede:
      "Twelve plates a night, written when the market opens. Everything meets the holm-oak fire — even dessert, somehow.",
    price: "$18.50",
    cta: "Order Food",
  },
  band: [
    { name: "Saffron Biryani", art: "biryani", group: "From the fire", from: "from $18" },
    { name: "Coal-roasted Lamb", art: "lamb", group: "From the fire", from: "from $34" },
    { name: "Market Fish", art: "fish", group: "From the fire", from: "from $29" },
    { name: "Garden Plates", art: "garden", group: "Garden", from: "from $14" },
    { name: "Charred Sourdough", art: "bread", group: "To start", from: "from $8" },
    { name: "Olive Oil Cake", art: "cake", group: "Sweet", from: "from $11" },
  ],
  why: [
    {
      n: "01",
      title: "One fire, no gas",
      text:
        "Holm oak from a copce forty minutes north, lit at 15:40 and raked down at close. There is no dial to turn — the plate moves instead.",
    },
    {
      n: "02",
      title: "Written daily",
      text:
        "Twelve dishes go on the board after the market opens, not before. What landed at six decides what the fire cooks at eight.",
    },
    {
      n: "03",
      title: "46 covers, no rush",
      text:
        "Two sittings a night — 18:00 and 20:30 — plus late plates at the bar. Six stools stay free for whoever walks in.",
    },
  ],
  location: {
    address: "7 Sluice Lane, harbour side",
    note:
      "Down the cobbles past the chandlery, under the ochre lamp. If the fire is lit, we are open.",
    hours: [
      ["Bar", "from 17:00, Tue–Sun"],
      ["First sitting", "18:00"],
      ["Second sitting", "20:30"],
      ["Late plates", "22:00, bar menu only"],
      ["Sunday lunch", "12:00–15:00, walk-in"],
    ],
  },
  menu: [
    {
      title: "To start",
      dishes: [
        { name: "Charred sourdough", detail: "Cultured butter, sea salt", price: "$8", mark: "House" },
        { name: "Raw kingfish", detail: "Green chilli, lime leaf, sesame", price: "$17" },
        { name: "Blistered shishitos", detail: "Almond cream, smoked paprika", price: "$12" },
      ],
    },
    {
      title: "From the fire",
      dishes: [
        { name: "Saffron biryani", detail: "Coal-roasted lamb shoulder, saffron rice, burnt onion", price: "$18.50", mark: "Signature" },
        { name: "Coal-roasted lamb", detail: "Fermented chilli, mint oil", price: "$34", mark: "Cook's pick" },
        { name: "Market fish", detail: "Brown butter, capers, dill", price: "$29", mark: "Day boat" },
        { name: "Wood-oven squash", detail: "Labneh, hazelnut, sage", price: "$23" },
      ],
    },
    {
      title: "Garden",
      dishes: [
        { name: "Tomatoes and curd", detail: "Sheep's yoghurt, last year's oil", price: "$16" },
        { name: "First broad beans", detail: "Charred whole, Zgharta butter", price: "$14" },
        { name: "Wild garlic bread", detail: "Curd, cut by hand at the copse edge", price: "$15", mark: "Three weeks only" },
      ],
    },
    {
      title: "Sweet",
      dishes: [
        { name: "Olive oil cake", detail: "Blood orange, crème fraîche", price: "$11" },
        { name: "Dark chocolate tart", detail: "Sea salt, olive oil", price: "$12" },
        { name: "Roast quince", detail: "Sheep's milk yoghurt, honey", price: "$12" },
      ],
    },
  ],
  stats: [
    { value: "Tue–Sun", label: "Bar from 17:00 · two sittings" },
    { value: "18", label: "Wines by the glass" },
    { value: "46", label: "Covers, one fire" },
  ],
  fire: {
    thesis:
      "There is no gas in this building and no dial to turn down. When the heat is wrong the plate moves — the fire takes no instructions.",
    steps: [
      {
        n: "01",
        title: "The wood",
        text:
          "One wood: holm oak, cut forty minutes north and delivered split every other week. No gas, no briquettes, no second fuel in the building.",
      },
      {
        n: "02",
        title: "The bed",
        text:
          "Lit at 15:40, an hour before the bar opens, and built deep — a fire that has to last until midnight is never lit twice.",
      },
      {
        n: "03",
        title: "The board",
        text:
          "Twelve dishes are written after the fire is lit, not before: the market decides what arrives, and the fire decides what it becomes.",
      },
      {
        n: "04",
        title: "The ashes",
        text:
          "Raked down at close and relit from the same ashes the next afternoon, so the first flame of every day is yesterday's.",
      },
    ],
    note:
      "A hearth is not an oven: heat arrives from the side and below, so every plate cooks on one face at a time and is turned by hand all night.",
  },
  evening: [
    { time: "17:00", title: "The bar opens", text: "An hour before the first sitting: stools, aperitifs, and the board being written behind the counter." },
    { time: "18:00", title: "First sitting", text: "First plates land within twenty minutes of sitting, once the fire is at cooking heat." },
    { time: "20:30", title: "Second sitting", text: "The room turns louder and darker — the fire has been burning five hours and does its best work now." },
    { time: "22:00", title: "Last plates", text: "Bar menu only, off the same hearth, and the last pour is poured as slowly as the first." },
  ],
  cellar: {
    pours: [
      { name: "Field blend, no sulphur", detail: "Carignan from the next valley, poured cold", price: "$10" },
      { name: "Skin-contact white", detail: "Four days on the skins — orange in colour only", price: "$12" },
      { name: "House ferment, no alcohol", detail: "Quince, black tea and whatever the week gave it", price: "$7" },
    ],
    note:
      "Eighteen wines by the glass, none of them made further than a hundred kilometres away, and a by-the-glass board rewritten the first Monday of every month.",
  },
  facts: [
    "Confirmed by email within the hour",
    "No card needed to hold a table",
    "Six bar stools kept for walk-ins",
    "No service charge, ever",
  ],
};

// ---------------------------------------------------------------------------
// Travel agency
// ---------------------------------------------------------------------------

export interface Trip {
  name: string;
  region: string;
  days: string;
  price: string;
  blurb: string;
  itinerary: string[];
}

export const wanderly: { trips: Trip[]; stats: Stat[] } = {
  trips: [
    {
      name: "Kyoto in Autumn",
      region: "Japan",
      days: "9 days",
      price: "from $4,200",
      blurb: "Temple mornings, knife-making afternoons, maple light.",
      itinerary: [
        "Days 1–3: Kyoto — temple mornings, kaiseki, Kamo river walks",
        "Days 4–5: Nara and a knife-making afternoon in Sakai",
        "Days 6–9: Kurama to Kibune, then Osaka and the coast",
      ],
    },
    {
      name: "Atlas & Sahara",
      region: "Morocco",
      days: "11 days",
      price: "from $3,150",
      blurb: "Medina walks, high passes, a night under desert stars.",
      itinerary: [
        "Days 1–3: Marrakech — souks, rooftops, a cookery morning",
        "Days 4–7: High Atlas villages and the Tizi n'Tichka pass",
        "Days 8–11: Erg Chigaga, dunes at dawn, back through Ouarzazate",
      ],
    },
    {
      name: "Faroe Weather",
      region: "Faroe Islands",
      days: "6 days",
      price: "from $2,780",
      blurb: "Sea cliffs, fishing villages and very changeable skies.",
      itinerary: [
        "Days 1–2: Tórshavn and the harbour, weather permitting",
        "Days 3–4: Vestmanna sea cliffs and Saksun on foot",
        "Days 5–6: Mykines puffin boat, flexible final day",
      ],
    },
    {
      name: "Patagonia South",
      region: "Chile",
      days: "12 days",
      price: "from $5,400",
      blurb: "Granite towers, guanaco plains, long blue evenings.",
      itinerary: [
        "Days 1–3: Puerto Natales, gear check and estancia lunch",
        "Days 4–8: Torres del Paine — W trek sections at your pace",
        "Days 9–12: Cerro Castillo and the Carretera Austral",
      ],
    },
  ],
  stats: [
    { value: "12", label: "Max group size" },
    { value: "100%", label: "Trips scouted in person" },
    { value: "48h", label: "Reply from a real planner" },
  ],
};

// ---------------------------------------------------------------------------
// Photography studio
// ---------------------------------------------------------------------------

export interface Shot {
  title: string;
  kind: string;
  note: string;
  /** Path under /public — the frame's photograph. */
  image?: string;
}

export interface Session {
  kind: string;
  frames: string;
  copy: string;
  cta: string;
  prefill: string;
}

export const lumen: { shots: Shot[]; sessions: Session[]; plans: Plan[]; stats: Stat[] } = {
  sessions: [
    {
      kind: "People",
      frames: "Frames 01A · 05A",
      copy:
        "Headshots, team series and portraits. The light is set once and held for the whole session, so a team set reads as one wall — and the keeper usually lands around the fifteenth minute, once the lens stops being interesting.",
      cta: "Portrait Hour · $340",
      prefill: "package=Portrait Hour — $340;shoot=People",
    },
    {
      kind: "Product",
      frames: "Frames 02A · 06A",
      copy:
        "Ranges, single pieces and e-commerce sets. North glass for even light, white card for fill, and every frame colour-checked against your samples before anything leaves the room.",
      cta: "Product Day · $1,150",
      prefill: "package=Product Day — $1,150;shoot=Product",
    },
    {
      kind: "Interiors",
      frames: "Frame 04A",
      copy:
        "Rooms, atriums and shopfronts, shot early before the space fills. Tilt-shift keeps the columns straight and the north glass keeps gloss free of hotspots.",
      cta: "Check a date",
      prefill: "shoot=Interiors",
    },
    {
      kind: "Editorial",
      frames: "Frame 03A",
      copy:
        "Magazine and campaign commissions. Simple styling is included; for larger jobs we book one of our usual three stylists at day rate, quoted before you confirm.",
      cta: "Editorial · POA",
      prefill: "package=Editorial — POA;shoot=Editorial",
    },
  ],
  shots: [
    {
      title: "Harbour Portrait",
      kind: "People",
      note: "Fifteen minutes before the ferry came in, one 85mm lens and no reflector.",
      image: "/assets/img/lumen/harbour-portrait.jpg",
    },
    {
      title: "Stoneware No. 4",
      kind: "Product",
      note: "Single north window, white card for fill, twelve plates shot in ninety minutes.",
      image: "/assets/img/lumen/stoneware.jpg",
    },
    {
      title: "Winter Kitchen",
      kind: "Editorial",
      note: "A magazine commission — cook, hands and steam, all natural light.",
      image: "/assets/img/lumen/winter-kitchen.jpg",
    },
    {
      title: "Atrium Chairs",
      kind: "Interiors",
      note: "Shot at 07:10 before the atrium filled, tilt-shift to keep the columns straight.",
      image: "/assets/img/lumen/atrium.jpg",
    },
    {
      title: "Two Sisters",
      kind: "People",
      note: "Studio against seamless paper, one bounce, forty frames and this one.",
      image: "/assets/img/lumen/two-sisters.jpg",
    },
    {
      title: "Ceramic Range",
      kind: "Product",
      note: "Nine pieces, one lighting setup, colour-checked against the glaze samples.",
      image: "/assets/img/lumen/ceramic-range.jpg",
    },
  ],
  plans: [
    {
      name: "Portrait Hour",
      price: "$340",
      detail: "60 min, 12 retouched frames",
      featured: false,
    },
    {
      name: "Product Day",
      price: "$1,150",
      detail: "Full day, 40 retouched frames",
      featured: true,
    },
    {
      name: "Editorial",
      price: "POA",
      detail: "Half day and up, styling on request",
      featured: false,
    },
  ],
  stats: [
    { value: "Daylight", label: "North-facing studio, 5m windows" },
    { value: "48h", label: "Preview gallery turnaround" },
    { value: "12 yrs", label: "Shooting for brands and people" },
  ],
};

// ---------------------------------------------------------------------------
// Knitwear store
// ---------------------------------------------------------------------------

export type AtelierCat = 'Women' | 'Men' | 'Home Goods' | 'Seasonal';

export interface Product {
  name: string;
  kind: string;
  price: string;
  /** Mill-ticket price the rail price is cut from. */
  compareAt: string;
  swatch: string;
  /** Colorway dots shown on the card. */
  tones: string[];
  /** Thumbnail photo; several cards share a photo with their own crop. */
  img: string;
  /** object-position for the card's crop of `img`. */
  pos: string;
  /** Optional CSS filter that turns one cloth photo into another colorway. */
  tone?: string;
  cat: AtelierCat;
  blurb: string;
}

export const atelier: { products: Product[]; stats: Stat[] } = {
  products: [
    {
      name: 'Highland Cable Sweater',
      kind: 'Women · knit',
      price: '$189',
      compareAt: '$329',
      swatch: '#a33b3b',
      tones: ['#a33b3b', '#2e2a26', '#c8a24a'],
      img: '/assets/img/atelier/rail.jpg',
      pos: '20% 50%',
      cat: 'Women',
      blurb: 'Chunky cable in lambswool, cut roomy enough for a shirt beneath.',
    },
    {
      name: 'Cloudspun Shawl',
      kind: 'Women · wrap',
      price: '$145',
      compareAt: '$260',
      swatch: '#6e1f2a',
      tones: ['#6e1f2a', '#47503f', '#2e2a26'],
      img: '/assets/img/atelier/wool-cloth.jpg',
      pos: '50% 50%',
      cat: 'Women',
      blurb: 'A metre and a half of brushed shawl that folds to nothing.',
    },
    {
      name: 'Felted Everyday Tote',
      kind: 'Women · carry',
      price: '$160',
      compareAt: '$280',
      swatch: '#8a6a45',
      tones: ['#8a6a45', '#2e2a26', '#e8e2d9'],
      img: '/assets/img/atelier/field-coat.jpg',
      pos: '50% 20%',
      cat: 'Women',
      blurb: 'Felted wool body with room for a shawl and a novel.',
    },
    {
      name: 'Nordic Beanie & Gloves',
      kind: 'Men · set',
      price: '$85',
      compareAt: '$140',
      swatch: '#47503f',
      tones: ['#47503f', '#2e2a26', '#7a3f3a'],
      img: '/assets/img/atelier/wool-cloth.jpg',
      pos: '50% 50%',
      tone: 'hue-rotate(72deg) saturate(0.85)',
      cat: 'Men',
      blurb: 'Moss-green set, double-cuffed. The gloves have never lost a pair.',
    },
    {
      name: 'Fisherman Rollneck',
      kind: 'Men · knit',
      price: '$175',
      compareAt: '$310',
      swatch: '#c8a24a',
      tones: ['#c8a24a', '#4a4038', '#2e2a26'],
      img: '/assets/img/atelier/rail.jpg',
      pos: '50% 50%',
      cat: 'Men',
      blurb: 'Mustard rollneck in a tight fisherman rib. Itchy in the best way.',
    },
    {
      name: 'Heirloom Throw',
      kind: 'Home · weave',
      price: '$220',
      compareAt: '$380',
      swatch: '#3a3733',
      tones: ['#3a3733', '#6e1f2a', '#e8e2d9'],
      img: '/assets/img/atelier/wool-cloth.jpg',
      pos: '50% 50%',
      tone: 'grayscale(0.92) brightness(0.72)',
      cat: 'Home Goods',
      blurb: 'Charcoal woven throw, fringed by hand, heavy enough to matter.',
    },
    {
      name: 'Après Sock Trio',
      kind: 'Seasonal · set',
      price: '$45',
      compareAt: '$78',
      swatch: '#2e2a26',
      tones: ['#2e2a26', '#6e1f2a', '#47503f'],
      img: '/assets/img/atelier/rail.jpg',
      pos: '82% 50%',
      cat: 'Seasonal',
      blurb: 'Three pairs of bed socks: charcoal, wine and moss.',
    },
    {
      name: 'Hearth Cushion Cover',
      kind: 'Home · weave',
      price: '$95',
      compareAt: '$160',
      swatch: '#b98d55',
      tones: ['#b98d55', '#6e1f2a', '#47503f'],
      img: '/assets/img/atelier/wool-cloth.jpg',
      pos: '50% 50%',
      tone: 'sepia(0.65) saturate(1.5) brightness(1.25)',
      cat: 'Home Goods',
      blurb: 'Camel cushion cover in the same mill run as the winter coats.',
    },
  ],
  stats: [
    { value: '8', label: 'Woollens on the rail' },
    { value: '$120', label: 'Free shipping over' },
    { value: '2 yrs', label: 'Repairs included' },
  ],
};
