import type { SubPage } from './types';

export const PAGES: SubPage[] = [
  {
    parent: 'wanderly',
    slug: 'packing-list',
    title: 'Wanderly Travel Co. — packing lists for every trip',
    description: 'A seven-kilo carry-on baseline plus cold and hot add-ons, with weights, laundry plans and the four things travellers always wish they had packed.',
    kicker: 'Wanderly Travel Co. · packing',
    heading: 'What to pack',
    lede: 'Twelve travellers, one shared road, and no checked bags on most routes. This is the list our trip leaders send before every departure.',
    variant: 'cards',
    stats: [['7kg', 'carry-on target'], ['40L', 'bag size'], ['4', 'days per wash stop']],
    sections: [
      {
        title: 'The carry-on baseline',
        blocks: [
          { type: 'P', text: 'One 40-litre bag, under seven kilos, four days of clothes and a laundry stop halfway. Every trip on our books was scouted with this limit in mind, so it works from Kyoto to the Faroes without a single bag going in the hold.' },
          {
            type: 'List',
            items: [
              '40-litre bag, weighed at 7kg before you leave the house',
              'Four days of clothes; every hotel on our routes has laundry',
              'Passport and card copied, kept in a pocket away from the bag',
            ],
          },
        ],
      },
      {
        title: 'Cold and mountain add-ons',
        blocks: [
          { type: 'P', text: 'The Faroes and Patagonia run on layers, not bulk. These add about two kilos and you stay under the limit, because nothing on this list is packed twice or doing two jobs badly.' },
          {
            type: 'List',
            items: [
              'Base layer, mid layer, shell — three pieces, never one thick coat',
              'Gloves, warm hat and a buff; the wind on Mykines takes all three',
              'Broken-in waterproof boots; never a new pair on a trekking day',
            ],
          },
        ],
      },
      {
        title: 'Leave these at home',
        blocks: [
          { type: 'P', text: 'Four things every traveller brings and nobody needs: the straightener, the third pair of shoes, the full-size shampoo and the second book. That weight is better spent on camera gear, and it is the same four on every departure.' },
          {
            type: 'List',
            items: [
              'Travel-size toiletries — refillables cost under $5 out there',
              'One pair of shoes worn, one packed; nothing else earns the space',
              'A paper book or an e-reader, not both; the mornings are short',
            ],
          },
          { type: 'Note', text: 'If it cannot be replaced for under ten dollars in the first town on the route, it probably does not need to come.' },
        ],
      },
      {
        title: 'What travellers wish they had packed',
        blocks: [
          { type: 'P', text: 'Every leader keeps a running list of what people ask for on day three, and it is the same four items on every route we run. All of them are light, cheap and impossible to buy at 05:00 when the minibus is already loaded.' },
          {
            type: 'List',
            items: [
              'A dry bag — dirty clothes, wet swimwear and muddy boots in one sealed sack',
              'A pen — the immigration and customs forms still want ink, and the desk has none',
              'Eye mask and earplugs — guesthouses share walls and departures start before dawn',
              'A filter bottle — refill anywhere and skip two dollars a day in plastic',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Get the list for your trip',
    ctaBody: 'Tell us the departure and the route in the enquiry form. You get the packing list for that exact trip, checked against the forecast.',
  },
  {
    parent: 'wanderly',
    slug: 'insurance-guide',
    title: 'Wanderly Travel Co. — travel insurance, explained',
    description: 'Medical limits, repatriation, cancellation cover and activity fine print, checked line by line before you buy a policy for a Wanderly departure.',
    kicker: 'Wanderly Travel Co. · insurance',
    heading: 'Insurance, explained',
    lede: 'We do not sell insurance and we never take commission on it. What we do is tell you exactly what to check before you pay for a policy.',
    variant: 'guide',
    stats: [['$2m', 'medical minimum'], ['24h', 'assistance line'], ['60', 'days to balance']],
    sections: [
      {
        title: 'Medical cover and repatriation',
        blocks: [
          { type: 'P', text: 'The number that matters is not the medical limit but the repatriation clause beside it. Check that a policy flies you home as well as treating you where you are, before you start comparing prices on the two figures most comparison sites lead with.' },
          {
            type: 'List',
            items: [
              'At least $2 million medical, unlimited repatriation on long-haul trips',
              'Confirm the policy covers the Faroes and Morocco, not only the EU',
              'Save the 24-hour assistance number in your phone, not just on paper',
            ],
          },
        ],
      },
      {
        title: 'Cancellation and curtailment',
        blocks: [
          { type: 'P', text: 'Our trips ask for a 20% deposit and the balance sixty days out, and a good policy covers both if you have to pull out. Read for named perils rather than one vague line about unforeseen events, because the vague line is usually the one that gets declined.' },
          {
            type: 'List',
            items: [
              'Cover the full trip cost, including the balance you have not paid',
              'Cover for a delayed flight that makes you miss the first night',
              'Pre-existing conditions declared in writing, or the claim fails',
            ],
          },
        ],
      },
      {
        title: 'Activities and the fine print',
        blocks: [
          { type: 'P', text: 'Walking in the High Atlas and the W trek sit below most policy limits; diving, quad bikes and anything above 3,000 metres often do not. Check each activity on your itinerary line by line, because the two that catch people out are never the ones they worried about.' },
          {
            type: 'List',
            items: [
              'Hiking altitude limits — many policies stop at 2,000 to 3,000 metres',
              'Hire car excess cover, if you are driving the Carretera Austral',
              'Gadget cover is separate; a camera body is rarely included by default',
            ],
          },
          { type: 'Note', text: 'Policies bought more than fourteen days after the deposit are usually excluded from pre-existing conditions — buy it early, in one sitting.' },
        ],
      },
      {
        title: 'Buying a policy, in order',
        blocks: [
          { type: 'P', text: 'The order matters more than the brand. Take the policy out early enough that cancellation cover is live before you have paid anything you cannot get back, then check it against the itinerary while there is still time to switch providers rather than argue later.' },
          {
            type: 'Steps',
            items: [
              'Take out the policy the day you pay the deposit, so cover starts immediately',
              'Declare every pre-existing condition in writing and keep the confirmation',
              "Check the medical and repatriation limits against the trip's remoteness",
              'Run each bookable activity from the itinerary through the policy wording',
              'Save the 24-hour assistance number and a photo of the policy in your phone',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Ask us before you buy',
    ctaBody: 'Send your trip dates and the policy wording in the enquiry form. A planner will tell you honestly what it does and does not cover.',
  },
  {
    parent: 'wanderly',
    slug: 'itinerary-templates',
    title: 'Wanderly Travel Co. — the templates behind every trip',
    description: 'Every route starts as a template we walked ourselves: day shape, transit buffers and free hours, then it is rewritten around your dates within 48 hours.',
    kicker: 'Wanderly Travel Co. · itineraries',
    heading: 'How an itinerary is written',
    lede: 'A template is a route we have walked ourselves, with the timings that survived contact with reality. This is what we change first when it becomes your trip.',
    variant: 'story',
    stats: [['48h', 'first draft'], ['12', 'travellers max'], ['1', 'anchor per half-day']],
    sections: [
      {
        title: 'The shape of a day',
        blocks: [
          { type: 'P', text: 'Every day on a Wanderly template is built around one anchor — the table, the guide or the tide-dependent crossing you would be sorry to miss — and the rest of the day is arranged to protect it. Nothing bookable is ever stacked into the same half-day, because the day the second booking matters is the day the first one runs late.' },
          {
            type: 'List',
            items: [
              'One anchor per half-day, and it goes in the calendar first',
              'Mornings hold the anchors; afternoons stay open for the town',
              'Nothing that needs a reservation before 10:00 the morning after a flight',
              'Two hours of slack written into every full day, not carved out of one',
            ],
          },
        ],
      },
      {
        title: 'Transit days',
        blocks: [
          { type: 'P', text: 'A transit day is built backwards from the hour you must arrive, not forwards from the hour you leave. The connection is booked first, then the transfer, then the hotel is flagged for a late check-in, and the template assumes ninety minutes to hand back a hire car and three hours for an Atlantic connection.' },
          {
            type: 'List',
            items: [
              'At least two hours between flights, three when the change is transatlantic',
              "First night's hotel flagged for late arrival; no early start after it",
              'Hire car collected after 09:00 and returned ninety minutes before the flight',
              'Long drives and overnight trains never sit next to a booked morning',
            ],
          },
          { type: 'Note', text: 'If a transfer only works on paper three days out, we move the hotel rather than the connection.' },
        ],
      },
      {
        title: 'From template to your trip',
        blocks: [
          { type: 'P', text: 'Send the dates, who is coming and what you would rather avoid, and a planner pulls the closest template and rewrites it within 48 hours. Pace is always the first thing to move: two of you who want to see everything get a different day shape from a family whose teenager does not do a 07:00 alarm.' },
          {
            type: 'List',
            items: [
              'First draft inside 48 hours, free to revise until you confirm',
              'Tables held for 48 hours while you decide, released without a fee',
              'Two versions offered when the party disagrees — the slower one usually wins',
              'After you confirm, we change it only when something we booked goes wrong',
            ],
          },
          { type: 'Quote', text: 'They sent the route we asked for and a second, slower one underneath. We took theirs, and there was still a free afternoon in Kyoto to spend on nothing at all.' },
        ],
      },
    ],
    ctaTitle: 'Get a template rebuilt for you',
    ctaBody: 'Send your dates and who is coming through the enquiry form on the landing page. A planner replies with the closest route as a first draft within two days.',
  },
  {
    parent: 'wanderly',
    slug: 'budget-ledger',
    title: 'Wanderly Travel Co. — the daily budget ledger',
    description: 'What travellers actually spend on the ground with us: lunch, entries, transport, dinner, laundry and tips, with daily and weekly totals for a full week.',
    kicker: 'Wanderly Travel Co. · budget',
    heading: 'The daily ledger',
    lede: 'Ground costs only — flights are quoted separately — taken from what our trip leaders spent on the last twelve departures. Add the column and a week is not a guess.',
    variant: 'log',
    stats: [['$70', 'a full day'], ['$490', 'a week on the ground'], ['20%', 'deposit to book']],
    sections: [
      {
        title: 'How the ledger is built',
        blocks: [
          { type: 'P', text: 'These are real spends, averaged across the last twelve departures to Morocco, the Faroes and Japan. The trip price already covers accommodation, guiding and every entry named in your itinerary; what follows is the money that changes hands out of your own pocket, per person, per day.' },
          {
            type: 'Table',
            head: ['Line', 'Daily', 'Weekly', 'Notes'],
            rows: [
              ['Lunch', '$14', '$98', 'Markets and bakeries; the meal we never book'],
              ['Coffee and water', '$5', '$35', 'Bottles refilled from hotel jugs where safe'],
              ['Entries and tickets', '$11', '$77', 'Anything not on the itinerary, paid on the day'],
              ['Local transport', '$8', '$56', 'Metro, buses and the odd taxi split the group'],
              ['Dinner, self-guided', '$24', '$168', 'Five nights a week; two are group meals'],
              ['Laundry', '$3', '$21', 'One machine load per traveller per week'],
              ['Tips and incidentals', '$5', '$35', 'Guides tipped as a group, never individually'],
            ],
          },
          { type: 'Note', text: 'Japan runs about a fifth higher than these figures and Morocco about a third lower; the Faroes sit close to the middle.' },
        ],
      },
      {
        title: 'What the trip price covers',
        blocks: [
          { type: 'P', text: 'The ledger above is what you spend on top of the trip price, so it is worth knowing exactly where the boundary sits. Accommodation, transfers and the guiding in your itinerary are paid before you land, and two of the dinners are group meals arranged by the leader rather than settled by the bill.' },
          {
            type: 'List',
            items: [
              'Airport transfers both ways, in the same car as the rest of the group',
              'Every entry named in the itinerary — cable cars, museums, permits',
              'Two group dinners and all breakfasts; the other five nights are yours',
              "Planning, the 48-hour itinerary and the leader's own costs, all included",
            ],
          },
        ],
      },
      {
        title: 'Cash, cards and the currency day',
        blocks: [
          { type: 'P', text: 'The first morning of every trip starts with the same five minutes at an ATM while the group is still together, because the mountain huts and the market stalls that take cards are the exceptions rather than the rule. We plan two days of cash per person and adjust for the country we are in.' },
          {
            type: 'List',
            items: [
              'Day one: one ATM stop together, enough for two days of small spend',
              'Morocco — cash in the medina and the taxis, cards back at the riad',
              'Japan and the Faroes — cards take almost everything, buses included',
              'Keep receipts in one pocket; the ledger is far easier to read at home',
            ],
          },
          { type: 'Note', text: 'Leaders carry an emergency float in local currency and top it up from the hotel safe each night.' },
        ],
      },
      {
        title: 'When a day runs over',
        blocks: [
          { type: 'P', text: 'Some days cost more than the ledger says, and they are rarely the ones you plan for: the second cable car, the taxi in the rain, the dinner that turns into a bottle of wine because the conversation was good. Set aside about fifteen per cent on top of the weekly figure and the overrun stops being a decision.' },
          {
            type: 'List',
            items: [
              'A 15% float on the weekly total covers most unplanned days',
              'Split big taxi fares as a group on the spot, settle up that evening',
              'Big-ticket extras — a scenic flight, a private guide — quoted before you go',
              "Anything left over buys the next trip's first lunch, which is how it should go",
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Price your dates',
    ctaBody: 'Send your dates and who is coming through the enquiry form on the Wanderly landing page. You get the trip price and the ledger for that route within 48 hours.',
  },
];
