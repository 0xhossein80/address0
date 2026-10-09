import type { SubPage } from './types';

export const PAGES: SubPage[] = [
  {
    parent: 'saffron',
    slug: 'pantry',
    title: 'The pantry — where Saffron buys everything',
    description: 'The farms, millers, bakers and fermenters behind the Saffron menu, with what arrives each week and how it is handled.',
    kicker: 'Saffron · sourcing',
    heading: 'The pantry',
    lede: 'Twelve dishes a night are only as good as what lands in the back door at four. This is the list of who sends it.',
    variant: 'story',
    stats: [
      ['12', 'dishes written each afternoon'],
      ['06:00', 'day boats land in the harbour'],
      ['40 min', 'north to the holm oak copse'],
    ],
    sections: [
      {
        title: 'Fire and hearth',
        blocks: [
          { type: 'P', text: 'The grill runs on holm oak from a managed copse forty minutes north; the bread is the only thing in the building not cooked over it.' },
          {
            type: 'List',
            items: [
              'Holm oak, split and delivered fortnightly by the same family',
              "Sourdough from Maroun's starter, nine years old and named",
              'Butter churned in Zgharta, cultured for 48 hours',
            ],
          },
          { type: 'Quote', text: 'Nine years old, fed twice a day, moved flats three times. Call it a recipe if you like; I call it a tenant.' },
        ],
      },
      {
        title: 'Sea and river',
        blocks: [
          { type: 'P', text: 'Fish is day-boat only. If the boats do not go out, the menu changes before service, not during it.' },
          {
            type: 'List',
            items: [
              'Day-boat catch landed at 06:00, on the board by 07:30',
              'Shellfish purged in tank water, never freshwater ice',
              'Fermented fish sauce made in-house from the trim',
            ],
          },
        ],
      },
      {
        title: 'Garden',
        blocks: [
          { type: 'P', text: 'Two market gardeners, both within the district, both paid a fixed price before the season so a bad week does not land on them.' },
          {
            type: 'List',
            items: [
              'Herbs cut the morning of service, stems in water',
              'Stone fruit left to ripen on the branch, not the truck',
              'Waste goes back as compost to both gardens, weekly',
            ],
          },
          { type: 'Note', text: 'Prices for the season are agreed in November on a single page and never renegotiated mid-season, whichever way the weather goes.' },
        ],
      },
    ],
    ctaTitle: 'Eat what the pantry sent',
    ctaBody: 'The menu is written each afternoon from what arrived. Reserve a table through the enquiry form and you will get whatever the day was good for.',
  },
  {
    parent: 'saffron',
    slug: 'private-dining',
    title: 'Private dining at Saffron — the hearth room, seats twelve',
    description: 'The hearth room seats twelve with its own fire, menu and service. Minimum spend, sample menus and how far ahead to book.',
    kicker: 'Saffron · the hearth room',
    heading: 'Private dining',
    lede: 'One room, its own fire, its own service. Twelve seats around a single table, cooked two steps away.',
    variant: 'guide',
    stats: [
      ['12', 'seats around one table'],
      ['20%', 'deposit holds the date'],
      ['72', 'hours to confirm final numbers'],
    ],
    sections: [
      {
        title: 'The room',
        blocks: [
          { type: 'P', text: 'The hearth room sits behind the main dining room with a door that closes. It has its own hearth and its own team for the evening.' },
          {
            type: 'List',
            items: [
              'Twelve seats, one table, no shared walls with the bar',
              'Its own hearth — same oak, its own fire-keeper',
              'Step-free access from the courtyard entrance',
            ],
          },
        ],
      },
      {
        title: 'Menus',
        blocks: [
          { type: 'P', text: "Two shapes: a five-course set written around the day's market, or a longer grazing menu for evenings that should not have courses." },
          {
            type: 'List',
            items: [
              'Five courses, set price, one vegetarian path throughout',
              'Grazing menu for six or more, served family-style',
              'Wine pairings chosen the afternoon of the booking',
            ],
          },
        ],
      },
      {
        title: 'Booking it',
        blocks: [
          { type: 'P', text: 'Evenings only, Tuesday to Saturday, booked at least two weeks ahead for weekends and one week for midweek.' },
          {
            type: 'List',
            items: [
              'Minimum spend applies on Friday and Saturday',
              'A 20% deposit holds the date and comes off the bill',
              'Final numbers confirmed 72 hours before service',
            ],
          },
        ],
      },
      {
        title: 'How the evening runs',
        blocks: [
          { type: 'P', text: 'The hearth room runs on its own clock from the moment you arrive to the last plate cleared. These five steps are what the team does around you, so you know when the fire is doing its loudest work and when the courses will land.' },
          {
            type: 'Steps',
            items: [
              'Arrival — a glass in the courtyard room while the hearth is lit and the first bread warms',
              'First two courses within twenty minutes of sitting, once the fire is at cooking heat',
              'The whole lamb or fish goes on at the halfway point, then the room goes quiet for the longest pause',
              'Wine pairings are poured by the person who chose them, not read off a card',
              'Coffee, the last plate and the bill come together; nobody is hurried out of the room',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Ask about a date',
    ctaBody: 'Send the date, the headcount and how you like to eat in the enquiry form. We reply with availability and the menu we would write for you.',
  },
  {
    parent: 'saffron',
    slug: 'menu-archive',
    title: 'Saffron & Stone — the menu archive by season',
    description: 'Four seasons of Saffron & Stone dishes with the garden, boat or bakery behind each one, kept so you can see what came back, what sold out and what never returned.',
    kicker: 'Saffron & Stone · menu archive',
    heading: 'The menu archive',
    lede: 'Four seasons of dishes, newest first, with the source named beside each one. If a dish is not here, the kitchen has not served it.',
    variant: 'log',
    stats: [
      ['4', 'seasons on one page'],
      ['12', 'dishes, three from each season'],
      ['1', 'paper log behind every entry'],
    ],
    sections: [
      {
        title: 'How the archive is kept',
        blocks: [
          { type: 'P', text: 'The pass keeps a paper log: every dish that goes out, what it came with and who sent it. At close the log is typed up here, so the archive runs a night behind service and stays honest about what actually left the kitchen.' },
          {
            type: 'List',
            items: [
              'Each entry names the dish, the season and the supplier it came from',
              'A plate that never left the pass is not written down',
              'Sources are recorded the way the kitchen says them, not as legal entities',
            ],
          },
          { type: 'Note', text: 'When a source changes — a new boat, a different orchard — the old name stays on the old dish and the new one starts on the day it arrives.' },
        ],
      },
      {
        title: 'Four seasons on the hearth',
        blocks: [
          { type: 'P', text: 'Twelve dishes that have defined a season in the last year, three from each. Prices are left out on purpose: the archive records where things came from, and the board outside the door records what they cost that week.' },
          {
            type: 'Table',
            head: ['Season', 'Dish', 'Source'],
            rows: [
              ['Winter', 'Lamb shoulder in the coals, six hours', 'District flock, butchered Tuesdays'],
              ['Winter', 'Hispi cabbage charred over oak, brown butter', 'Market garden, in the district'],
              ['Winter', 'Preserved lemon flatbread off the hearth stones', "Maroun's nine-year starter, baked at 06:00"],
              ['Spring', 'Whole sea bream on the embers, fennel and capers', 'Day boats, landed 06:00 and on the board by 07:30'],
              ['Spring', 'Wild garlic and curd on grilled bread', 'Cut by hand at the copse edge, a three-week window'],
              ['Spring', 'First broad beans, charred whole, Zgharta butter', 'Both market gardens, picked the morning of service'],
              ['Summer', "Tomatoes, sheep's yoghurt, last year's oil", 'Fruit left to ripen on the vine, not the truck'],
              ['Summer', 'Grilled sardines, fermented chilli', 'Day-boat catch; sauce made in-house from the trim'],
              ['Summer', 'Apricots split over the fire, dropped in syrup', 'Orchard two districts over, ripe on the branch'],
              ['Autumn', 'Hake, brown crab and saffron broth', 'Day boats; the crab is picked at the pass'],
              ['Autumn', "Roast quince, sheep's milk yoghurt", 'Windfalls from the market garden, accepted as they fall'],
              ['Autumn', 'Sourdough and cultured butter', "Maroun's starter; butter churned in Zgharta over 48 hours"],
            ],
          },
        ],
      },
      {
        title: 'What came back, and what did not',
        blocks: [
          { type: 'P', text: 'Roughly a third of the menu is written again each year — the dishes guests ask for by name, cooked with whatever that month\'s source is actually good for. The rest is replaced, usually because a supplier stopped selling rather than because we grew tired of it.' },
          {
            type: 'List',
            items: [
              'Back for a fourth winter: lamb shoulder in the coals and the preserved lemon flatbread',
              'Retired after one summer: a stone fruit plate that leaned on a grower who left the market',
              'Returning this spring only if the wild garlic does — it is cut by hand and the window is three weeks',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Book the current season',
    ctaBody: "Send your date and how many are coming through the enquiry form. The kitchen writes that afternoon's menu from whatever landed at six that morning.",
  },
  {
    parent: 'saffron',
    slug: 'allergens',
    title: 'Saffron & Stone — allergens, what is in the kitchen',
    description: 'The allergens Saffron & Stone cooks with, where each one sits around a single hearth, and exactly how to tell us before you book, sit down or order.',
    kicker: 'Saffron & Stone · allergens',
    heading: 'Allergens, honestly',
    lede: 'One fire, one set of boards and a menu that changes daily. This is what is in the building, where it gets around, and how to reach the kitchen before service.',
    variant: 'cards',
    stats: [
      ['10', 'of the 14 allergens in the building'],
      ['24', "hours' notice to build a full menu"],
      ['1', 'hearth behind everything we serve'],
    ],
    sections: [
      {
        title: 'What is actually in the kitchen',
        blocks: [
          { type: 'P', text: 'Fourteen allergens are tracked under the rules; ten of them are genuinely in this building. This is the real list, kept current, and the sheet taped inside the door on the night is the same one you are reading now.' },
          {
            type: 'List',
            items: [
              'Gluten — the sourdough, every flatbread and the batter on the fritters',
              'Milk and egg — cultured butter, yoghurt and the wash on the pastry',
              'Fish and shellfish — whole day-boat fish, crab in two sauces, prawns twice a week',
              'Sesame, mustard and celery — dukkah, the dressing and the stock base',
              'Nuts — walnuts on two dishes a season, and the only tree nut we buy',
              'Sulphites — in the wine and the pickles, and nowhere else',
              'Peanuts, soybeans, lupin and molluscs are never brought into the building',
            ],
          },
        ],
      },
      {
        title: 'Cross-contact, plainly',
        blocks: [
          { type: 'P', text: 'There is one hearth, one grill and one set of boards, so no plate leaving this kitchen can be promised as completely free of everything else. What we can do is move a dish off the stones and swap the pan — and we will always say so when we cannot.' },
          {
            type: 'List',
            items: [
              'Gluten-free bread is toasted on a separate plancha, never on the hearth stones',
              'Butter and yoghurt swap to oil and oat cream on most dishes, on request',
              'Walnuts are cracked to order at the pass, so a dish without them stays off that board',
              'Anything going out for a severe allergy is spoken to the chef, not written on a ticket',
            ],
          },
          { type: 'Note', text: 'If a reaction has ever needed an adrenaline pen, say so when you book. The chef calls you back rather than guess with it.' },
        ],
      },
      {
        title: 'How to ask',
        blocks: [
          { type: 'P', text: 'Two mentions and you are covered: once when you book, once when you arrive, and the kitchen checks every dish against your note before the first plate leaves. With a day\'s notice we will build a full menu around allergies for a table of two or more.' },
          {
            type: 'Steps',
            items: [
              'Tell us in the enquiry form when you book — every allergy, intolerance and preference in one line',
              'We reply with the dishes that already fit and the ones the kitchen would change',
              "Mention it again at the door; the note travels to the pass on the sheet, not in someone's memory",
              'If the board has moved since you booked, your server tells you before you order',
            ],
          },
        ],
      },
      {
        title: 'Wine, drinks and the small print',
        blocks: [
          { type: 'P', text: 'The eighteen wines by the glass are fined with egg or fish isinglass unless the maker says otherwise, and we keep the low-sulphur bottles listed at the bar. Soft drinks are built to order, so anything in them can be left out.' },
          {
            type: 'List',
            items: [
              'Three of the eighteen are unfined; the bar list is rewritten monthly',
              'House cordials are made with mustard seed and celery, declared on the bar card',
              'Anything shaken or built can be made without the syrup — ask, do not assume',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Ask before you book',
    ctaBody: 'Put every allergy in the enquiry form when you book. The chef reads it before service and we come back with what the kitchen can do, dish by dish.',
  },
];
