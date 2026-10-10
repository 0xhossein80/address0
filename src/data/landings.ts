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
}

export interface MenuGroup {
  title: string;
  dishes: Dish[];
}

export const saffron: { menu: MenuGroup[]; stats: Stat[] } = {
  menu: [
    {
      title: "To start",
      dishes: [
        { name: "Charred sourdough", detail: "Cultured butter, sea salt", price: "$8" },
        { name: "Raw kingfish", detail: "Green chilli, lime leaf, sesame", price: "$17" },
        { name: "Blistered shishitos", detail: "Almond cream, smoked paprika", price: "$12" },
      ],
    },
    {
      title: "From the fire",
      dishes: [
        { name: "Coal-roasted lamb", detail: "Fermented chilli, mint oil", price: "$34" },
        { name: "Market fish", detail: "Brown butter, capers, dill", price: "$29" },
        { name: "Wood-oven squash", detail: "Labneh, hazelnut, sage", price: "$23" },
      ],
    },
    {
      title: "Sweet",
      dishes: [
        { name: "Olive oil cake", detail: "Blood orange, crème fraîche", price: "$11" },
        { name: "Dark chocolate tart", detail: "Sea salt, olive oil", price: "$12" },
      ],
    },
  ],
  stats: [
    { value: "Tue–Sun", label: "Dinner from 5pm" },
    { value: "18", label: "Wines by the glass" },
    { value: "32", label: "Seats, two sittings" },
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
// Fashion boutique
// ---------------------------------------------------------------------------

export interface Product {
  name: string;
  kind: string;
  price: string;
  swatch: string;
}

export const atelier: { products: Product[]; stats: Stat[] } = {
  products: [
    { name: "The Field Coat", kind: "Outerwear", price: "$480", swatch: "#4a4038" },
    { name: "Wool Overshirt", kind: "Layer", price: "$260", swatch: "#6b6357" },
    { name: "Poplin Shirt", kind: "Essential", price: "$145", swatch: "#e8e4da" },
    { name: "Pleated Trouser", kind: "Bottom", price: "$220", swatch: "#2c2c30" },
    { name: "Merino Rollneck", kind: "Knit", price: "$185", swatch: "#7a3f3a" },
    { name: "The Tote", kind: "Object", price: "$160", swatch: "#8a7a5f" },
  ],
  stats: [
    { value: "10", label: "Pieces per capsule" },
    { value: "2×", label: "Collections each year" },
    { value: "Traceable", label: "Mills named on every label" },
  ],
};
