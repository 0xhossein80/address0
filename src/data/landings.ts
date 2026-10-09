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
// 1. Coffee roastery
// ---------------------------------------------------------------------------

export interface Roast {
  name: string;
  origin: string;
  notes: string;
  price: string;
}

export const roastery: { roasts: Roast[]; plans: Plan[] } = {
  roasts: [
    {
      name: "Slow Sunday",
      origin: "Huila, Colombia",
      notes: "Cocoa, red apple, brown sugar",
      price: "$19",
    },
    {
      name: "Night Porter",
      origin: "Sidamo, Ethiopia",
      notes: "Blackcurrant, jasmine, cane sugar",
      price: "$22",
    },
    {
      name: "Harbour Blend",
      origin: "Brazil + Guatemala",
      notes: "Praline, dark cherry, malt",
      price: "$17",
    },
  ],
  plans: [
    {
      name: "The Drifter",
      price: "$16/mo",
      detail: "One 250g bag, ground to order",
      featured: false,
    },
    {
      name: "The Regular",
      price: "$29/mo",
      detail: "Two 250g bags + brew notes card",
      featured: true,
    },
    {
      name: "The Counter",
      price: "$54/mo",
      detail: "Four bags for offices and hosts",
      featured: false,
    },
  ],
};

// ---------------------------------------------------------------------------
// 2. Gym
// ---------------------------------------------------------------------------

export interface ClassSlot {
  day: string;
  name: string;
  time: string;
}

export interface Coach {
  name: string;
  focus: string;
}

export const forge: { classes: ClassSlot[]; coaches: Coach[]; plans: Plan[] } = {
  classes: [
    {
      day: "Mon",
      name: "Squat Mechanics",
      time: "06:00",
    },
    {
      day: "Tue",
      name: "Conditioning Circuit",
      time: "18:30",
    },
    {
      day: "Wed",
      name: "Bench & Press",
      time: "06:00",
    },
    {
      day: "Thu",
      name: "Olympic Lifting",
      time: "19:00",
    },
    {
      day: "Sat",
      name: "Long Session",
      time: "09:00",
    },
  ],
  coaches: [
    {
      name: "Mara Okonjo",
      focus: "Strength & powerlifting",
    },
    {
      name: "Deniz Aydın",
      focus: "Olympic lifting",
    },
    {
      name: "Ruth Callahan",
      focus: "Return-to-lift rehab",
    },
  ],
  plans: [
    {
      name: "Open Floor",
      price: "$49/mo",
      detail: "24/7 access, no contract",
      featured: false,
    },
    {
      name: "Coached",
      price: "$119/mo",
      detail: "Unlimited classes + programming",
      featured: true,
    },
    {
      name: "Drop-in",
      price: "$18",
      detail: "Single session, any class",
      featured: false,
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. Real estate
// ---------------------------------------------------------------------------

export interface Listing {
  kind: string;
  address: string;
  area: string;
  price: string;
  beds: string;
  baths: string;
  size: string;
}

export const haven: { listings: Listing[]; stats: Stat[] } = {
  listings: [
    {
      kind: "Townhouse",
      address: "14 Cooper Row",
      area: "Old Dock",
      price: "$845,000",
      beds: "3",
      baths: "2",
      size: "1,940 sqft",
    },
    {
      kind: "Loft",
      address: "8a Mill Lane, Unit 3",
      area: "Warehouse District",
      price: "$610,000",
      beds: "2",
      baths: "1",
      size: "1,320 sqft",
    },
    {
      kind: "Coastal",
      address: "2 Tidewater Close",
      area: "North Point",
      price: "$1,240,000",
      beds: "4",
      baths: "3",
      size: "2,780 sqft",
    },
    {
      kind: "Garden flat",
      address: "7 Fern Court",
      area: "Ashgrove",
      price: "$472,000",
      beds: "2",
      baths: "1",
      size: "980 sqft",
    },
  ],
  stats: [
    { value: "21 days", label: "Median time to offer" },
    { value: "98.4%", label: "Of asking price achieved" },
    { value: "142", label: "Homes placed last year" },
  ],
};

// ---------------------------------------------------------------------------
// 4. Dental clinic
// ---------------------------------------------------------------------------

export interface Service {
  name: string;
  detail: string;
  price: string;
}

export const brightside: { services: Service[]; stats: Stat[] } = {
  services: [
    {
      name: "Check-up & clean",
      detail: "Exam, scale, fluoride and X-rays if needed",
      price: "$95",
    },
    {
      name: "Whitening",
      detail: "Take-home trays, dentist supervised",
      price: "$260",
    },
    {
      name: "Clear aligners",
      detail: "Full course, retainers included",
      price: "$2,900",
    },
    {
      name: "Same-day crown",
      detail: "Milled in-house, one visit",
      price: "$1,150",
    },
  ],
  stats: [
    { value: "4.9★", label: "From 610 patient reviews" },
    { value: "0", label: "Surprise bills, ever" },
    { value: "Sat", label: "Open most Saturdays" },
  ],
};

// ---------------------------------------------------------------------------
// 5. Law firm
// ---------------------------------------------------------------------------

export interface Area {
  name: string;
  detail: string;
}

export interface Partner {
  name: string;
  role: string;
}

export const verity: { areas: Area[]; partners: Partner[]; stats: Stat[] } = {
  areas: [
    { name: "Commercial disputes", detail: "Contracts, supply chains, joint ventures" },
    { name: "Shareholder matters", detail: "Exit rows, dilution, governance" },
    { name: "Employment", detail: "Restrictive coves, exits, investigations" },
    { name: "Private wealth", detail: "Trusts, succession, cross-border families" },
  ],
  partners: [
    { name: "Alice Verity KC", role: "Founding partner — disputes" },
    { name: "Marcus Hale", role: "Corporate & shareholders" },
    { name: "Priya Raman", role: "Private wealth" },
  ],
  stats: [
    { value: "87%", label: "Matters resolved pre-trial" },
    { value: "31 yrs", label: "Combined partner tenure here" },
    { value: "2 hrs", label: "First response, guaranteed" },
  ],
};

// ---------------------------------------------------------------------------
// 6. Restaurant
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
// 7. Travel agency
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
// 8. SaaS
// ---------------------------------------------------------------------------

export interface Feature {
  title: string;
  body: string;
}

export const loop: { features: Feature[]; plans: Plan[]; stats: Stat[] } = {
  features: [
    {
      title: "Ask, don't query",
      body: "Type a question in plain English and get the chart, the cohort and the SQL behind it.",
    },
    {
      title: "Funnels that survive edits",
      body: "Retroactively re-run every funnel when you rename or reorder an event.",
    },
    {
      title: "Session replay, in context",
      body: "Jump from a dip in a metric straight to the recordings that explain it.",
    },
    {
      title: "Warehouse native",
      body: "Sync to Snowflake or BigQuery on day one. Your data never gets locked up.",
    },
    {
      title: "Alerts with opinions",
      body: "Anomalies ranked by revenue impact, not by volume noise.",
    },
    {
      title: "Privacy by default",
      body: "Auto-redaction, EU hosting and a cookieless mode out of the box.",
    },
  ],
  plans: [
    {
      name: "Side Project",
      price: "$0",
      detail: "50k events/mo, one project",
      featured: false,
    },
    {
      name: "Team",
      price: "$79/mo",
      detail: "1M events, replay, alerts, SSO",
      featured: true,
    },
    {
      name: "Scale",
      price: "$249/mo",
      detail: "10M events, warehouse sync, SLA",
      featured: false,
    },
  ],
  stats: [
    { value: "4 min", label: "Median time to first answer" },
    { value: "2,100+", label: "Product teams onboard" },
    { value: "99.98%", label: "Ingest uptime, last 12 mo" },
  ],
};

// ---------------------------------------------------------------------------
// 9. Photography studio
// ---------------------------------------------------------------------------

export interface Shot {
  title: string;
  kind: string;
  note: string;
}

export const lumen: { shots: Shot[]; plans: Plan[]; stats: Stat[] } = {
  shots: [
    {
      title: "Harbour Portrait",
      kind: "People",
      note: "Fifteen minutes before the ferry came in, one 85mm lens and no reflector.",
    },
    {
      title: "Stoneware No. 4",
      kind: "Product",
      note: "Single north window, white card for fill, twelve plates shot in ninety minutes.",
    },
    {
      title: "Winter Kitchen",
      kind: "Editorial",
      note: "A magazine commission — cook, hands and steam, all natural light.",
    },
    {
      title: "Atrium Chairs",
      kind: "Interiors",
      note: "Shot at 07:10 before the atrium filled, tilt-shift to keep the columns straight.",
    },
    {
      title: "Two Sisters",
      kind: "People",
      note: "Studio against seamless paper, one bounce, forty frames and this one.",
    },
    {
      title: "Ceramic Range",
      kind: "Product",
      note: "Nine pieces, one lighting setup, colour-checked against the glaze samples.",
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
// 10. Fashion boutique
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
