import type { SubPage } from './types';

export const PAGES: SubPage[] = [
  {
    parent: 'haven',
    slug: 'buying-guide',
    title: 'Haven & Vale — the buying guide, offer to keys',
    description: 'A stage-by-stage guide to buying with Haven and Vale: budgets, viewings, surveys, offers and the six to eight weeks between an accepted offer and exchange.',
    kicker: 'Haven & Vale · buying guide',
    heading: 'The buying guide',
    lede: 'From the first budget conversation to the day you collect the keys, every stage in order, with the timelines we usually see.',
    variant: 'guide',
    stats: [
      ['21 days', 'median time to offer'],
      ['6–8 weeks', 'offer to exchange'],
      ['3 days', 'decision in principle'],
    ],
    sections: [
      {
        title: 'Before you view',
        blocks: [
          { type: 'P', text: 'Agree the number with your lender first, then look at houses. Buyers who arrive with a decision in principle see the right homes sooner and move on the right one without a weekend of hesitation.' },
          {
            type: 'List',
            items: [
              'Decision in principle in hand — most lenders return one in three days',
              'Budget the deposit plus about $3,500 for searches, survey and legal',
              'Shortlist three streets before your first Saturday of viewings',
            ],
          },
        ],
      },
      {
        title: 'Making the offer',
        blocks: [
          { type: 'P', text: "The offer itself is a short piece of paperwork done properly: a number, proof of funds and a clear picture of what the seller needs. We present every offer the same day it reaches us, and we come back with an answer or a question rather than three days of silence." },
          {
            type: 'Steps',
            items: [
              'Agree your ceiling with your lender before the viewing, not during the negotiation',
              "Ask us for the seller's position first: chain, timing and what they will not move on",
              "Send the offer in writing with proof of funds or your broker's direct number",
              'We present it the same day and verify your position before the seller replies',
              'Accepted? Instruct your solicitor that afternoon — lost days come out of the eight weeks',
            ],
          },
        ],
      },
      {
        title: 'Offer to survey',
        blocks: [
          { type: 'P', text: "The survey is the first money you spend after an accepted offer, so we book it inside seven days while the price is still fresh in everyone's head. Level 2 unless the house is old or substantially altered, then Level 3, and your solicitor opens the file the same week." },
          {
            type: 'List',
            items: [
              'Level 2 survey for most homes; Level 3 for anything pre-1930 or altered',
              'Searches and the contract issued to your solicitor inside fourteen days',
              "We chase the seller's solicitor weekly, so your side is never the slow one",
              'Anything the survey turns up goes back to the seller in writing, not by phone',
            ],
          },
        ],
      },
      {
        title: 'Six to eight weeks to exchange',
        blocks: [
          { type: 'P', text: 'That is our median from an accepted offer to exchange, and most of the wait is solicitors chasing searches. Two things keep you on schedule: answering your solicitor the day they ask, and a survey contingency you agreed before you spent anything.' },
          {
            type: 'List',
            items: [
              'Keep a 5% contingency for anything the survey turns up',
              'Reply to enquiries within 24 hours — silence is what stalls a chain',
              'Chain-free buyers can exchange and complete on the same day',
              'Remortgage paperwork starts at the same time as the searches, not after them',
            ],
          },
          { type: 'Note', text: 'Buyers who answer their solicitor the same day move through the week markedly faster than buyers who answer on Sunday — it is the one habit we ask for on day one.' },
        ],
      },
    ],
    ctaTitle: 'Start with your budget',
    ctaBody: 'Send the number, the area and when you want to move in the enquiry form. We reply with what that buys and the first three viewings worth taking.',
  },
  {
    parent: 'haven',
    slug: 'neighbourhoods',
    title: 'Haven & Vale — four neighbourhoods, compared',
    description: 'Old Dock, Warehouse District, North Point and Ashgrove compared on price per square foot, typical buyers, commute times and what is being built nearby.',
    kicker: 'Haven & Vale · neighbourhoods',
    heading: 'Where we sell',
    lede: 'We list in four areas and know all of them street by street. This is how they differ before you book a single viewing.',
    variant: 'story',
    stats: [
      ['4', 'neighbourhoods listed'],
      ['$470', 'entry price per sqft'],
      ['16 days', 'fastest offer last year'],
    ],
    sections: [
      {
        title: 'Old Dock',
        blocks: [
          { type: 'P', text: 'Converted warehouses along the water, bought by first-time upsizers and people who want a real floorplan without a garden to mind. Our listing at 14 Cooper Row sits here: three beds, 1,940 square feet, $845,000.' },
          {
            type: 'List',
            items: [
              'Townhouses and warehouse conversions, roughly $470 to $950 per sqft',
              'Most buyers are 30 to 45, no children yet or not planning to',
              'Ten minutes to the financial district on foot, 14 by tram',
            ],
          },
          { type: 'Quote', text: 'You give up a garden and get eleven-foot windows instead. I have not missed the mower once, and the walk to work takes less time than the old commute took to park.' },
        ],
      },
      {
        title: 'Warehouse District',
        blocks: [
          { type: 'P', text: 'Loft living with the shortest commute and the liveliest weekends. Inventory stays small — rarely more than a dozen homes at once — so good units move in under three weeks when they are priced honestly.' },
          {
            type: 'List',
            items: [
              'Lofts from about $610,000; 8a Mill Lane is 1,320 sqft for that figure',
              'Roughly a dozen homes on the market at any one time',
              'Median time to an offer here last year was 16 days',
              'Concrete floors and steel windows — the heating bills are what they are',
            ],
          },
        ],
      },
      {
        title: 'North Point and Ashgrove',
        blocks: [
          { type: 'P', text: 'Two ends of the family spectrum: coastal houses with gardens at the top of our range, and garden flats under half a million for buyers who want space without a mortgage that runs the whole decade.' },
          {
            type: 'List',
            items: [
              'North Point — four-bed coastal homes from $1.2m, 2,780 sqft at 2 Tidewater',
              'Ashgrove — garden flats from $472,000, two primary schools within a walk',
              'Both areas: 25 to 35 minutes by car, buses every 12 minutes at peak',
            ],
          },
          { type: 'Quote', text: 'The school run is four minutes on foot from Fern Court, and the flat still cost less than the loft we looked at first. That arithmetic decided it for us.' },
        ],
      },
      {
        title: 'Choosing between the four',
        blocks: [
          { type: 'P', text: 'Price per square foot tells you what an area costs, not whether you will enjoy living in it. Start from the twenty minutes you spend every day — commute, school run, the walk to a decent shop — and let the shortlist fall out of that instead of out of a brochure.' },
          {
            type: 'List',
            items: [
              'Commuter on foot: Old Dock or Warehouse District, both inside fifteen minutes',
              'Dog, garden and a weekend outside: North Point or Ashgrove',
              'Two hundred homes complete near Old Dock next year, which softens that market first',
              'School catchments in Ashgrove move in February — view in January if that matters',
            ],
          },
          { type: 'Note', text: 'Every valuation we write comes with the comparable sales behind it, so if we quote $470 per square foot you can see the four sales that produced the figure.' },
        ],
      },
    ],
    ctaTitle: 'Tell us which area fits',
    ctaBody: 'Describe your commute, your budget and whether you want a garden in the enquiry form. We will tell you which of the four to see first.',
  },
  {
    parent: 'haven',
    slug: 'sold-archive',
    title: 'Haven & Vale — the sold archive, price by price',
    description: 'Every Haven & Vale sale from the last twelve months: area, property type, asking price, the agreed price and the days it took to accept an offer.',
    kicker: 'Haven & Vale · sold archive',
    heading: 'The sold archive',
    lede: 'Twelve months of agreed sales, one line each. The asking price is what went on the board; the sold price is what the two sides actually shook on.',
    variant: 'log',
    stats: [
      ['142', 'sales logged'],
      ['98.4%', 'of asking achieved'],
      ['21 days', 'median to offer'],
    ],
    sections: [
      {
        title: 'Reading the archive',
        blocks: [
          { type: 'P', text: 'Each line is a completed sale from the last twelve months, with the area it sits in, the type of home, the price on the board and the price the two sides agreed. Days counts from the day the listing went live to the day a written offer was accepted — not to completion.' },
          {
            type: 'List',
            items: [
              'Asking — the price on the portal the morning it launched',
              'Sold — the agreed figure, before legal fees and duty',
              'Days — live listing to accepted offer, not offer to exchange',
              'Area and type — recorded the way we market them, so comparisons stay honest',
            ],
          },
          {
            type: 'Table',
            head: ['Area', 'Type', 'Asking', 'Sold', 'Days'],
            rows: [
              ['Old Dock', 'Townhouse', '$845,000', '$838,000', '18'],
              ['Warehouse District', 'Loft', '$610,000', '$615,000', '11'],
              ['North Point', 'Coastal', '$1,240,000', '$1,215,000', '34'],
              ['Ashgrove', 'Garden flat', '$472,000', '$465,000', '24'],
              ['Old Dock', 'Apartment', '$535,000', '$528,000', '21'],
              ['Ashgrove', 'Townhouse', '$690,000', '$684,000', '27'],
              ['Warehouse District', 'Loft', '$725,000', '$720,000', '16'],
            ],
          },
        ],
      },
      {
        title: 'What the year adds up to',
        blocks: [
          { type: 'P', text: 'Across 142 sales the average home fetched 98.4% of its asking price in a median of 21 days, and the average hides the useful part: the spread by area is far wider than the spread by price bracket. Where you sell matters more than what you sell for.' },
          {
            type: 'Table',
            head: ['Area', 'Sales', 'Median days', '% of asking'],
            rows: [
              ['Old Dock', '38', '17', '99.1'],
              ['Warehouse District', '31', '14', '100.2'],
              ['North Point', '27', '29', '97.4'],
              ['Ashgrove', '46', '24', '98.0'],
            ],
          },
          {
            type: 'List',
            items: [
              'Warehouse District sells fastest and closest to asking — stock is thin and buyers know it',
              'North Point takes longest: bigger numbers, fewer buyers, more survey renegotiation',
              'Homes launched within 2% of the valuation went under offer nine days sooner',
            ],
          },
        ],
      },
      {
        title: 'Where the slow sales were',
        blocks: [
          { type: 'P', text: 'Thirty-one homes took more than forty-five days last year, and they share almost nothing except the reason: they launched above the valuation. Two repriced in the third week and sold within a fortnight of the new figure; six sat until the price met the market anyway.' },
          {
            type: 'List',
            items: [
              'Launched over 5% above valuation: 41% still unsold at day sixty',
              'Launched at or below valuation: 94% under offer inside forty-five days',
              'Every reprice we recommend arrives with the three comparables behind it',
              'A price cut reads as a fault on the portals — better to launch at the right number',
            ],
          },
        ],
      },
      {
        title: 'Getting your line on this page',
        blocks: [
          { type: 'P', text: 'A line here starts with a valuation at your kitchen table and a price we can defend in a viewing. If the number that sells and the number you were hoping for sit far apart, we say so before you sign anything rather than three weeks after the sign has gone up.' },
          {
            type: 'List',
            items: [
              'Free written valuation within the week, about forty minutes at your home',
              'Photography, floor plan and portal listing inside five working days',
              'Launch price agreed in writing before the first viewing is booked',
              "Sold lines published with the seller's permission; quiet sales are left off",
            ],
          },
          { type: 'Note', text: 'Asking and sold figures are shown exactly as agreed, including the ones that came in under the board — an archive that only prints the flattering rows is not an archive.' },
        ],
      },
    ],
    ctaTitle: 'Get on this page',
    ctaBody: 'Put your address and timeline in the valuation form on the Haven & Vale page. You get a written figure within the week, with the comparables behind it.',
  },
  {
    parent: 'haven',
    slug: 'selling-with-haven',
    title: 'Selling with Haven & Vale — fee, launch and exit',
    description: 'What the flat 1.2% fee covers, how the forty-minute valuation works, what launch week looks like and how the ninety-day tie-in ends if it is not working.',
    kicker: 'Haven & Vale · selling',
    heading: 'Selling, stage by stage',
    lede: 'One fee, no upfront marketing charge and no tie-in beyond ninety days. This is everything between the valuation call and the day you hand over the keys.',
    variant: 'cards',
    stats: [
      ['1.2%', 'flat fee, at completion'],
      ['21 days', 'median time to offer'],
      ['90 days', 'the only tie-in'],
    ],
    sections: [
      {
        title: 'What the 1.2% covers',
        blocks: [
          { type: 'P', text: 'One percentage of the agreed sale price, taken at completion, and nothing before it. It covers the photography, the floor plan, the portal listings, every accompanied viewing and the negotiation all the way to exchange — the parts that usually arrive as a separate marketing invoice elsewhere.' },
          {
            type: 'List',
            items: [
              'Professional photography and a measured floor plan, refreshed if you reprice',
              'Premium portal listings, plus the pocket list where a quiet sale suits you better',
              'Accompanied viewings six days a week, evenings and Saturday mornings included',
              'Offer verification, weekly updates and negotiation through to exchange',
            ],
          },
          { type: 'Note', text: 'No upfront marketing fee, no photographer surcharge and no tie-in beyond ninety days — the contract is three months long on purpose.' },
        ],
      },
      {
        title: 'The forty-minute valuation',
        blocks: [
          { type: 'P', text: 'An agent walks the house with you for about forty minutes, opens the cupboard you were going to tidy first, and leaves. The written figure follows the same week with the three comparable sales behind it and a suggested launch price sitting next to the number you were hoping for.' },
          {
            type: 'List',
            items: [
              'Free, with no obligation to instruct us afterwards',
              'Written figure the same week, comparables attached',
              'We price to the market we can see, not to the number that wins the instruction',
              'If a room needs work first, you will hear it in the kitchen, not in week six',
            ],
          },
        ],
      },
      {
        title: 'Launch week',
        blocks: [
          { type: 'P', text: 'Photography on the Monday, floor plan the same day, live on the portals by Wednesday and the first open viewing on the Saturday. Between those dates the sign goes up, the pocket list hears first, and every enquiry lands with the one agent who knows the house.' },
          {
            type: 'List',
            items: [
              'Day 1 — photography, floor plan and particulars drafted for your sign-off',
              'Day 3 — live on the portals, pocket list matched before it goes public',
              'Day 5 — first Saturday of viewings, written summary of every visit within 24 hours',
              'Week 2 — review call: feedback, portal saves and whether anything should change',
            ],
          },
        ],
      },
      {
        title: 'Ninety days and the honest exit',
        blocks: [
          { type: 'P', text: 'The contract runs ninety days and then stops, which keeps both sides honest. If viewings are healthy but offers are not, the conversation is about price; if the viewings themselves are thin, the fault is the photography, the particulars or the portals, and we fix those before we ever ask you to move the number.' },
          {
            type: 'List',
            items: [
              'Weekly written update: viewings, feedback, portal saves and where interest sits',
              'A day-21 review built into the agreement — price, presentation and marketing checked together',
              'Walk away at ninety days with no exit fee and the full pack to take elsewhere',
              'Sold before then? The fee falls due at completion, nothing in advance',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Book the forty-minute valuation',
    ctaBody: 'Put your address, property type and timeline in the valuation form on the Haven & Vale page. A written figure arrives the same week, free and with no obligation.',
  },
];
