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
        title: "Ten Landings — ten business landing pages, one next button",
        description: "A portfolio of ten hand-built landing pages for ten business categories, rendered with Million and React. Press next and the whole page wipes into the following one.",
        faqTitle: "About this collection",
        faqNote: "What these pages are, how they are built and what to do with them.",
        faqs: indexFaqs(),
        schemaKind: "Organization",
        schemaExtras: "\"founder\":{\"@type\":\"Person\",\"name\":\"Hossein\"},\"knowsAbout\":[\"Landing page design\",\"React\",\"Million compiler\",\"Technical SEO\"]",
      };

    case 'roastery':
      return {
        title: "Ember & Oak — small-batch coffee roasted every Thursday",
        description: "Single-origin coffee roasted on a 12kg drum each Thursday and shipped Friday. Subscriptions from $16/month, brewing guides and published prices.",
        faqTitle: "Coffee questions, answered",
        faqNote: "Roast dates, grinds, shipping and how the subscription actually works.",
        faqs: [
          {
            q: "How fresh is the coffee when it arrives?",
            a: "We roast on Thursday and bags leave the roastery Friday morning, so most orders land within 48 hours of the roast. Every bag is stamped with its roast date — if yours is older than ten days when it arrives, tell us and we replace it free.",
          },
          {
            q: "Can you grind the beans for me?",
            a: "Yes, at no extra cost. Pick espresso, filter, plunger or moka when you subscribe and we grind that bag to order on dispatch day. Buying a single bag? Note your brew method in the form and we will match it. Whole bean stays freshest, so that is the default.",
          },
          {
            q: "Which subscription suits one person?",
            a: "The Drifter — one 250g bag a month lasts a daily drinker about three weeks. A household of two, or anyone who hosts, should take The Regular. The Counter is for offices and anyone getting through more than a kilo a month.",
          },
          {
            q: "Do you ship outside the country?",
            a: "We ship worldwide with the rate calculated before you pay, and orders over $60 ship free within the country. International orders leave with the Friday dispatch, so delivery usually takes three to six working days depending on customs.",
          },
          {
            q: "How should I store the beans?",
            a: "Keep them in the bag, sealed, in a cupboard away from the oven and any sunlight. Do not freeze opened beans and do not refrigerate them — coffee absorbs whatever else is in the fridge. A valve bag open for two weeks beats airtight canisters opened every morning.",
          },
        ],
        schemaKind: "CafeOrCoffeeShop",
        schemaExtras: "\"priceRange\":\"$$\",\"currenciesAccepted\":\"USD\",\"paymentAccepted\":\"Cash, Credit Card, Apple Pay\",\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Thursday\",\"Friday\"],\"opens\":\"08:00\",\"closes\":\"16:00\"}",
      };

    case 'forge':
      return {
        title: "Ironclad Strength — barbell gym with real coaching",
        description: "A barbell gym open 05:00–23:00 with small coached classes, three permanent coaches, no contract and a free trial week. Memberships from $49/month.",
        faqTitle: "Before your first session",
        faqNote: "Contracts, coaching, parking and what the free week actually includes.",
        faqs: [
          {
            q: "Is there a contract or a joining fee?",
            a: "Neither. Open Floor and Coached are both month to month, and you can cancel from your account page without speaking to anyone. The free week needs no card details, and if you join afterwards we backdate it so you never pay for days you already trained.",
          },
          {
            q: "I have never lifted. Is this gym for me?",
            a: "Yes. Every coached session starts with a movement screen and the loads are scaled to you on day one. Beginners usually run two coached sessions a week for a month, then settle into one class plus open floor time — no one is thrown onto a bar cold.",
          },
          {
            q: "What happens in the free week?",
            a: "A tour, a coach-led session to set your squat, bench and deadlift, and full access to the board and open floor for seven days. You also get a locker, showers and a written starting programme to take away whether or not you join.",
          },
          {
            q: "Where do I park, and is there storage?",
            a: "Free parking behind the building after 18:00 and on the street all day Sunday. Inside there are lockers — take a padlock from the desk or buy one for a couple of dollars — plus showers with towels. Bikes go in the cage next to the loading bay.",
          },
          {
            q: "Can I train around an injury?",
            a: "Yes. Ruth Callahan runs return-to-lift sessions and will work from your physio's plan. Bring the report if you have one; we modify the board for you rather than waving you through the same session as everyone else.",
          },
        ],
        schemaKind: "ExerciseGym",
        schemaExtras: "\"priceRange\":\"$$\",\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"],\"opens\":\"05:00\",\"closes\":\"23:00\"},\"amenityFeature\":[{\"@type\":\"LocationFeatureSpecification\",\"name\":\"Free parking\",\"value\":true},{\"@type\":\"LocationFeatureSpecification\",\"name\":\"Showers\",\"value\":true}]",
      };

    case 'haven':
      return {
        title: "Haven & Vale — boutique real estate for homes with a point of view",
        description: "Boutique agency for lofts, townhouses and coastal builds. Flat 1.2% fee, median 21 days to an accepted offer, free written valuation within the week.",
        faqTitle: "Selling and buying, explained",
        faqNote: "Fees, timings, viewings and what happens the moment an offer arrives.",
        faqs: [
          {
            q: "What do you charge to sell a house?",
            a: "A flat 1.2% of the agreed sale price with no upfront marketing fee and no tie-in beyond ninety days. That covers photography, floor plans, portal listings, accompanied viewings and negotiation all the way to exchange.",
          },
          {
            q: "How long does it usually take to sell?",
            a: "Our median time to an accepted offer last year was 21 days, and agreed sales took another six to eight weeks to exchange. Homes priced within 2% of our valuation moved fastest — overpricing is the single biggest cause of a listing going stale.",
          },
          {
            q: "Do I need a valuation before listing?",
            a: "You do not, but we will not list without one. The valuation takes about forty minutes at your home and you get a written figure the same week, with the comparable sales behind it. It is free and there is no obligation to instruct us afterwards.",
          },
          {
            q: "How do viewings work?",
            a: "We accompany every viewing unless you ask us not to. Weekday evenings and Saturday mornings book out first, and you get a written summary of each visit within 24 hours — what they liked, what they flinched at, and whether they are coming back.",
          },
          {
            q: "What happens once an offer arrives?",
            a: "We present every offer in writing, verify the buyer's position with their solicitor or broker, and advise on price, chain and timing. You are never pushed to accept — we will tell you what we would do if it were our own house.",
          },
        ],
        schemaKind: "RealEstateAgent",
        schemaExtras: "\"priceRange\":\"1.2% flat fee\",\"areaServed\":[\"Old Dock\",\"Warehouse District\",\"North Point\",\"Ashgrove\"],\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],\"opens\":\"09:00\",\"closes\":\"18:00\"}",
      };

    case 'brightside':
      return {
        title: "Brightside Dental — gentle family & cosmetic dentistry",
        description: "Calm, modern dental practice with published prices: check-ups $95, whitening $260, clear aligners $2,900. New patients welcome, most Saturdays open.",
        faqTitle: "Dental questions, answered",
        faqNote: "Prices, nerves, emergencies and how often you really need to come in.",
        faqs: [
          {
            q: "Are you taking new patients this month?",
            a: "Yes — most weeks hold Saturday slots for new patients. Book through the form or call the desk. The first visit is thirty-five minutes and covers the exam, a scale and polish, X-rays only if you need them, and a written plan with prices.",
          },
          {
            q: "Are there any costs I will not see coming?",
            a: "No. Every treatment is quoted in writing before it starts and the price does not move unless you ask for something extra. If a treatment can wait, we say so and put you on a recall instead of booking it today.",
          },
          {
            q: "I am nervous about dentists. What is different here?",
            a: "Longer appointments, no lectures, and we agree a stop signal before anything begins. We are happy to run a meet-and-greet visit with no instruments at all, and sedation is available for longer treatments if you would rather not be present for them.",
          },
          {
            q: "How often should I come for a check-up?",
            a: "Most people every six months; if you have gum disease or a high decay rate we may suggest three or four. We set the interval from your actual risk rather than a default diary slot, and we will tell you when stretching it to twelve months is fine.",
          },
          {
            q: "Do you offer payment plans for aligners and crowns?",
            a: "Yes. Treatments over $600 can be split over six or twelve months at no interest, and clear aligners include retainers and review appointments in the quoted price. We run the numbers with you before you commit to anything.",
          },
        ],
        schemaKind: "Dentist",
        schemaExtras: "\"medicalSpecialty\":\"Dentistry\",\"priceRange\":\"$95–$2,900\",\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],\"opens\":\"08:00\",\"closes\":\"17:00\"}",
      };

    case 'verity':
      return {
        title: "Verity & Hale LLP — commercial lawyers in London & Dublin",
        description: "Disputes, shareholder, employment and private wealth counsel. Fixed-fee phases, 87% of matters resolved pre-trial, first response within two working hours.",
        faqTitle: "How we work with you",
        faqNote: "Fees, conflicts, jurisdictions and what happens in the first two hours.",
        faqs: [
          {
            q: "What happens after I send an enquiry?",
            a: "A partner reviews it and replies within two working hours, guaranteed during office hours. That first reply tells you whether we can act, who would lead the matter and the likely shape of the cost — before you book any meeting.",
          },
          {
            q: "How are you billed — hourly or fixed?",
            a: "Both, depending on the work. Straightforward matters such as an employment exit or a shareholders' agreement are fixed from a written scope. Disputes are scoped by phase with a cap per phase, so you always know what the next stage costs.",
          },
          {
            q: "Do you act against your own clients?",
            a: "We run a conflicts check on every enquiry before replying. If a party on the other side is a current or recent client we say so immediately and, where the rules allow it, refer you to someone we trust instead.",
          },
          {
            q: "Which jurisdictions do you cover?",
            a: "England & Wales and Ireland, from offices in London and Dublin, with counsel we instruct regularly in New York and Singapore for cross-border work. If a matter needs local law we say so rather than stretch into it.",
          },
          {
            q: "Will I work with the partner I first speak to?",
            a: "Yes. Partners lead their own matters here — the person who takes your call drafts the advice and stands up in court for it. Associates support with research and documents, but they never replace your point of contact.",
          },
        ],
        schemaKind: "LegalService",
        schemaExtras: "\"areaServed\":[{\"@type\":\"City\",\"name\":\"London\"},{\"@type\":\"City\",\"name\":\"Dublin\"}],\"priceRange\":\"Fixed fees and capped phases\",\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\"],\"opens\":\"08:30\",\"closes\":\"18:30\"}",
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

    case 'loop':
      return {
        title: "Loopmetric — product analytics that answers back",
        description: "Ask questions in plain English, get the chart, the cohort and the SQL. Free for 50k events a month, EU hosting, SOC 2, warehouse-native from day one.",
        faqTitle: "Technical questions, plain answers",
        faqNote: "Event counts, data residency, migration, SSO and what happens when a trial ends.",
        faqs: [
          {
            q: "What counts as an event?",
            a: "One tracked action with properties — a page view, a signup, a purchase. Identify calls and property updates are free. The free tier allows 50,000 events a month, and if you go over we ask you to upgrade rather than silently dropping data.",
          },
          {
            q: "Where does my data live?",
            a: "In the EU (Frankfurt) by default, with US and Australian regions available per project. In warehouse-native mode the raw events stay in your Snowflake or BigQuery and we only store derived models — revoke our access and your data is untouched.",
          },
          {
            q: "How long does migration take?",
            a: "Most teams instrument the first event in under ten minutes using our JS, iOS, Android and server SDKs, or a sync from Segment and RudderStack. Historical funnels can be back-filled twelve months from your warehouse on day one.",
          },
          {
            q: "Do you support SSO and audit logs?",
            a: "SAML and Google SSO on the Team plan, SCIM provisioning on Scale. Audit logs cover every query, export and member change, retained for twelve months and exportable to your SIEM whenever you need them.",
          },
          {
            q: "What happens when the trial ends?",
            a: "Nothing dramatic — the project drops to the free tier and keeps collecting data. Alerts pause, replay and warehouse sync stop, and you have thirty days to upgrade before older recordings start being pruned.",
          },
        ],
        schemaKind: "SoftwareApplication",
        schemaExtras: "\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\",\"description\":\"Free tier: 50,000 events per month\"},\"featureList\":\"Plain-English questions, funnels, session replay, warehouse sync, anomaly alerts\",\"availableLanguage\":\"en\"",
      };

    case 'lumen':
      return {
        title: "Lumen Studio — daylight photography for people and products",
        description: "North-facing daylight studio for portraits, products and interiors. Previews in 48 hours, packages from $340, twelve years shooting for brands and people.",
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
        schemaExtras: "\"priceRange\":\"$340–$1,150\",\"areaServed\":\"Studio and on location\",\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\"],\"opens\":\"09:00\",\"closes\":\"18:00\"}",
      };

    case 'atelier':
      return {
        title: "Atelier Noir — a ten-piece capsule, twice a year",
        description: "Deadstock cotton and traceable wool cut into a ten-piece capsule twice a year, in limited runs. Free repairs for two years, thirty-day returns.",
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
        schemaExtras: "\"priceRange\":\"$$\",\"currenciesAccepted\":\"USD\",\"paymentAccepted\":\"Credit Card, Apple Pay\",\"hasMerchantReturnPolicy\":{\"@type\":\"MerchantReturnPolicy\",\"returnPolicyCategory\":\"https://schema.org/MerchantReturnFiniteReturnWindow\",\"merchantReturnDays\":30,\"applicableCountry\":\"US\"},\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],\"opens\":\"11:00\",\"closes\":\"18:00\"}",
      };

    default:
      return undefined;
  }
}

function indexFaqs(): Faq[] {
  return [
    {
      q: "What exactly is this site?",
      a: "Ten complete landing pages for ten different businesses — a coffee roastery, a gym, an estate agency, a dental practice, a law firm, a restaurant, a travel agency, a SaaS product, a photography studio and a fashion label — plus a portfolio index that jumps between them with a circle wipe.",
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
      a: "It is the fastest way to compare ten very different designs: one click grows a circle over the page from where you clicked, and the next brand in the tour fades in underneath, without a full reload. Prev and next wrap around the collection in order.",
    },
  ];
}

