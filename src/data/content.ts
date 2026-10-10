//! The copy that makes each landing page worth indexing: page titles, meta
//! descriptions, FAQ sections, cross-links and the schema.org entity type.

import { bySlug, pathOf } from './categories';

export interface Faq {
  q: string;
  a: string;
}

/** Everything a landing page needs beyond its own layout and demo data. */
export interface Content {
  title: string;
  description: string;
  faqTitle: string;
  faqNote: string;
  faqs: Faq[];
  /** Slugs this page cross-links to, for internal linking. */
  /** schema.org type of the business entity. */
  schemaKind: string;
  /** Extra JSON object body merged into that entity. */
  schemaExtras: string;
}

/** Content for one landing page, or the index. */
export function contentForSlug(slug: string): Content | undefined {
  switch (slug) {
    case 'index':
      return {
        title: "Four Landings — four business landing pages, one next button",
        description: "A portfolio of four hand-built landing pages for four business categories, rendered with Million and React. Press next and the whole page wipes into the following one.",
        faqTitle: "About this collection",
        faqNote: "What these pages are, how they are built and what to do with them.",
        faqs: indexFaqs(),
        schemaKind: "Organization",
        schemaExtras: "\"founder\":{\"@type\":\"Person\",\"name\":\"Hossein\"},\"knowsAbout\":[\"Landing page design\",\"React\",\"Million compiler\",\"Technical SEO\"]",
      };

    case 'saffron':
      return {
        title: "Saffron & Stone — seasonal restaurant, wood fire, old quarter",
        description: "Twelve dishes a night written when the market opens, cooked over embers. Two seatings at 17:30 and 20:15, eighteen wines by the glass, 32 seats.",
        faqTitle: "Before you book",
        faqNote: "Walk-ins, allergies, corkage and what the two seatings actually mean.",
        faqs: [
          {
            q: "Do I need a reservation?",
            a: "For the 17:30 and 20:15 seatings, yes — they usually fill by Wednesday. The bar keeps six stools for walk-ins every night, and Sunday lunch is entirely walk-in from noon until the kitchen runs out.",
          },
          {
            q: "How do you handle allergies?",
            a: "Tell us when you book and again when you arrive. Because the menu changes daily, the kitchen checks every dish against your note before service starts. With 24 hours' notice we can build a full menu around allergies for parties of two or more.",
          },
          {
            q: "Is there a set menu or is it à la carte?",
            a: "À la carte, always — no set menu and no upsell to a tasting format. Most people spend around $60 a head for three courses, and the kitchen will happily send smaller plates if you want to share across the table.",
          },
          {
            q: "Can we bring our own wine?",
            a: "Yes on Tuesdays and Wednesdays with no corkage at all; the rest of the week it is $25 a bottle. The list itself is eighteen wines by the glass, all made within a hundred kilometres, mostly by people we have met.",
          },
          {
            q: "Is the restaurant good for children?",
            a: "Before 19:30, absolutely — two tables are kept for families and we will do a smaller plate of anything on the menu. After 20:15 the room turns louder and darker, so we do not take under-12s for the second seating.",
          },
        ],
        schemaKind: "Restaurant",
        schemaExtras: "\"servesCuisine\":\"Seasonal\",\"priceRange\":\"$$\",\"acceptsReservations\":\"True\",\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"],\"opens\":\"17:00\",\"closes\":\"23:00\"}",
      };

    case 'wanderly':
      return {
        title: "Wanderly Travel Co. — small-group trips, max 12 travellers",
        description: "Trips scouted in person and planned by people who have been there: Kyoto, Morocco, the Faroes and Patagonia. Twelve travellers maximum, itineraries in 48 hours.",
        faqTitle: "Planning, paying and going",
        faqNote: "Group size, flights, deposits and what happens if plans change.",
        faqs: [
          {
            q: "How big do groups get?",
            a: "Twelve travellers, maximum, and most departures run with eight to ten. Past twelve we either split the group or turn the date into a private trip, because a coach of twenty is a completely different holiday.",
          },
          {
            q: "Are flights included?",
            a: "No — we quote trips on the ground so you can use points or your own airline. We hold the flights, tell you exactly what to book, and the itinerary we send includes connection times that actually work.",
          },
          {
            q: "What deposit do you need?",
            a: "Twenty percent holds your place and the balance is due sixty days before departure. Deposits are fully refundable for seven days in case the dates were wrong, and we take card or bank transfer with no surcharge either way.",
          },
          {
            q: "Can you adapt one of the trips for us?",
            a: "Yes, and most private journeys start from a published route. Send the dates, budget, who is coming and what you hate, and you get a revised itinerary within 48 hours. Revisions are free until you confirm.",
          },
          {
            q: "What if I have to cancel?",
            a: "More than sixty days out you lose only the deposit. Inside sixty days we refund whatever is recoverable from hotels and guides and give you the real number rather than a penalty. Travel insurance covers the rest, and we will tell you honestly when it is worth buying.",
          },
        ],
        schemaKind: "TravelAgency",
        schemaExtras: "\"areaServed\":\"Worldwide\",\"priceRange\":\"$$$\",\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\"],\"opens\":\"09:00\",\"closes\":\"17:30\"}",
      };

    case 'lumen':
      return {
        title: "Lumen Studio — Daylight Portraits & Product Photography from $340",
        description: "North-facing daylight studio for portraits, products and interiors. Previews in 48 hours, unlimited usage, packages from $340. Book a date or get a same-day fixed quote.",
        faqTitle: "Shooting questions",
        faqNote: "Turnaround, usage rights, locations and how rescheduling works.",
        faqs: [
          {
            q: "How quickly do I get the images?",
            a: "A preview gallery within 48 hours of the shoot and retouched selects within five working days. Rush delivery the next morning is available for $120 when a campaign deadline will not move.",
          },
          {
            q: "Who owns the photographs?",
            a: "You get unlimited usage for your own web, social and print marketing, in perpetuity. We keep the copyright and may show the work in the portfolio — ask in writing and we will sign an NDA or grant exclusivity for a campaign.",
          },
          {
            q: "Studio or location — which should I pick?",
            a: "Products almost always want the studio: the north windows give even light all day and the paper roll stays clean. People on location get context — a kitchen, a workshop, a shopfront — and we bring two portable lights if the space fights us.",
          },
          {
            q: "What if I need to reschedule?",
            a: "Give us 48 hours and we move you to the next open slot at no cost. Inside 48 hours we keep the deposit, but it stays valid for six months because that studio day was held for you.",
          },
          {
            q: "Do you style, or provide a stylist?",
            a: "Simple styling — steaming, pinning, surfaces — is included. For product ranges and editorial we book one of our usual three stylists at day rate plus expenses, quoted before you confirm. Bring your own props and we will shoot around them.",
          },
        ],
        schemaKind: "PhotographyBusiness",
        schemaExtras: "\"priceRange\":\"$340–$1,150\",\"areaServed\":\"Studio and on location\",\"image\":\"/assets/img/lumen/harbour-portrait.jpg\",\"slogan\":\"Light, arranged — north-facing daylight portraits, products and interiors\",\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],\"opens\":\"09:00\",\"closes\":\"18:00\"},\"hasOfferCatalog\":{\"@type\":\"OfferCatalog\",\"name\":\"Shoot packages\",\"itemListElement\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Portrait Hour\"},\"price\":\"340\",\"priceCurrency\":\"USD\",\"description\":\"60 minutes, 12 delivered frames, one look\"},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Product Day\"},\"price\":\"1150\",\"priceCurrency\":\"USD\",\"description\":\"Full studio day, 40 delivered frames\"},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Editorial\"},\"description\":\"Half day and up, styling on request, price on application\"}]}",
      };

    case 'atelier':
      return {
        title: "Atelier Noir — Deadstock Capsule Clothing from $145",
        description: "Ten pieces, twice a year. Deadstock cotton and traceable wool in limited runs. Free repairs for two years, 30-day returns. Reserve Capsule 07 from $145.",
        faqTitle: "Fit, fabric and returns",
        faqNote: "Sizing, restocks, shipping and what happens when a piece sells out.",
        faqs: [
          {
            q: "How does your sizing run?",
            a: "Every piece is cut to a relaxed unisex block with room for a layer underneath. The measurements on each piece list chest, length and sleeve in centimetres — compare them to something you already own rather than trusting your usual label.",
          },
          {
            q: "What happens when a piece sells out?",
            a: "It is gone until the next capsule unless we have deadstock left. Join the list with your size and we email you if a return or an extra roll of cloth unlocks a small second run — that has happened twice in three years.",
          },
          {
            q: "What is your returns policy?",
            a: "Thirty days, unworn, with free return shipping inside the country. Made-to-order pieces are final sale and we always say so at checkout. Size exchanges ship the same day we receive your parcel back.",
          },
          {
            q: "Where is it made, and how do I wash it?",
            a: "Cut and sewn in a workshop we name on the label, from cloth milled in Portugal and northern Italy. Everything except the wool overshirt is machine washable cold; the overshirt wants a hand wash or an occasional dry clean.",
          },
          {
            q: "Do you offer repairs?",
            a: "Yes — buttons, seams and elbows are free for the first two years, then cost plus postage after that. Send the piece back and it returns within two weeks, patched rather than replaced, because the wear is part of the point.",
          },
        ],
        schemaKind: "ClothingStore",
        schemaExtras: "\"priceRange\":\"$145–$480\",\"currenciesAccepted\":\"USD\",\"paymentAccepted\":\"Credit Card, Apple Pay\",\"image\":\"/assets/img/atelier/field-coat.jpg\",\"slogan\":\"Ten pieces. Twice a year. No waste.\",\"hasMerchantReturnPolicy\":{\"@type\":\"MerchantReturnPolicy\",\"returnPolicyCategory\":\"https://schema.org/MerchantReturnFiniteReturnWindow\",\"merchantReturnDays\":30,\"applicableCountry\":\"US\"},\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],\"opens\":\"11:00\",\"closes\":\"18:00\"},\"hasOfferCatalog\":{\"@type\":\"OfferCatalog\",\"name\":\"Capsule 07\",\"itemListElement\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Product\",\"name\":\"The Field Coat\"},\"price\":\"480\",\"priceCurrency\":\"USD\"},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Product\",\"name\":\"Wool Overshirt\"},\"price\":\"260\",\"priceCurrency\":\"USD\"},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Product\",\"name\":\"Poplin Shirt\"},\"price\":\"145\",\"priceCurrency\":\"USD\"},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Product\",\"name\":\"Pleated Trouser\"},\"price\":\"220\",\"priceCurrency\":\"USD\"},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Product\",\"name\":\"Merino Rollneck\"},\"price\":\"185\",\"priceCurrency\":\"USD\"},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Product\",\"name\":\"The Tote\"},\"price\":\"160\",\"priceCurrency\":\"USD\"}]}",
      };

    default:
      return undefined;
  }
}

function indexFaqs(): Faq[] {
  return [
    {
      q: "What exactly is this site?",
      a: "Four complete landing pages for four different businesses — a restaurant, a travel agency, a photography studio and a fashion label — plus a portfolio index that jumps between them with a circle wipe.",
    },
    {
      q: "How were the pages built?",
      a: "As a Vite + Million + React single-page app. Every page is a React component that the Million compiler hoists into fast DOM blocks at build time, so navigation is client-side and the whole site builds down to static files — no server required.",
    },
    {
      q: "Can I use one of these designs for my business?",
      a: "Yes — the layouts are starting points rather than a theme store. Send the industry you need and you get a landing page back, rewritten for your own copy, palette, contact details and calls to action.",
    },
    {
      q: "Why does the next button exist?",
      a: "It is the fastest way to compare four very different designs: one click grows a circle over the page from where you clicked, and the next brand in the tour fades in underneath, without a full reload. Prev and next wrap around the collection in order.",
    },
  ];
}

