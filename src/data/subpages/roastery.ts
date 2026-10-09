import type { SubPage } from './types';

export const PAGES: SubPage[] = [
  {
    parent: 'roastery',
    slug: 'roast-log',
    title: 'Roast log — every batch Ember & Oak has released',
    description: 'The running log of every roast we have shipped: origin, process, cupping score, roast date and what it tastes like in the cup.',
    kicker: 'Ember & Oak · archive',
    heading: 'The roast log',
    lede: 'Every batch that has come off the 12kg drum since we opened, newest first. If a coffee is not on this page, we do not have it.',
    variant: 'log',
    stats: [['12kg', 'drum size'], ['Thu', 'roast day'], ['48h', 'subscriber window']],
    sections: [
      {
        title: 'How to read the log',
        blocks: [
          { type: 'P', text: 'Each entry carries the farm or washing station, the process, the roast level and the date the batch left the roastery. Cupping scores are our own, blind, on the Friday after roast.' },
          {
            type: 'List',
            items: [
              'Origin — country, region and the station it came through',
              'Process — washed, natural, honey or anaerobic, stated plainly',
              'Roast date — the day it was roasted, not a best-before guess',
              'Cupping score — blind-scored by the team, out of 100',
            ],
          },
          {
            type: 'Table',
            head: ['Coffee', 'Origin', 'Process', 'Roasted', 'Score'],
            rows: [
              ['Slow Sunday', 'Huila, Colombia', 'Washed', '2 Oct', '84.5'],
              ['Night Porter', 'Sidamo, Ethiopia', 'Natural', '9 Oct', '87.0'],
              ['Harbour Blend', 'Brazil + Guatemala', 'Mixed', '16 Oct', '83.0'],
              ['Sierra Nevada', 'Nariño, Colombia', 'Honey', '23 Oct', '85.5'],
            ],
          },
        ],
      },
      {
        title: 'How we buy',
        blocks: [
          { type: 'P', text: 'We buy through two importers we have used for years and one direct relationship in Huila that we visit each harvest. Prices paid are logged per lot.' },
          {
            type: 'List',
            items: [
              'Direct trade lots are re-priced every harvest, never locked in',
              'Every green lot is cupped three times before we commit',
              'Lots under 60kg get blended; single lots ship as single origins',
            ],
          },
        ],
      },
      {
        title: 'Restock rhythm',
        blocks: [
          { type: 'P', text: 'Batches are small on purpose. A typical single origin lasts three to four weeks on subscription before it is gone, and the log is where you find out what replaced it.' },
          {
            type: 'List',
            items: [
              'New log entries land the Thursday of each roast',
              'Subscribers get first refusal for 48 hours before the shop',
              'Sold-out batches stay on the log for reference, not sale',
            ],
          },
          { type: 'Note', text: 'Scores are updated once, on the Friday after roast, and never adjusted afterwards — a batch that dipped stays written down as it was.' },
        ],
      },
    ],
    ctaTitle: 'Want a bag from the next batch?',
    ctaBody: "Subscribers pick their roast before the public. Choose a plan in the subscription form and we will hold one back from Thursday's drum.",
  },
  {
    parent: 'roastery',
    slug: 'brew-guides',
    title: 'Brew guides — dialling in Ember & Oak coffee at home',
    description: 'Ratio, grind, temperature and timing for espresso, V60, AeroPress, plunger and moka, written for our roasts and yours.',
    kicker: 'Ember & Oak · guides',
    heading: 'Brew guides',
    lede: 'Four methods, one page, no romance. Start with the ratio, adjust one variable at a time and write down what you changed.',
    variant: 'guide',
    stats: [['94°C', 'filter water'], ['18g', 'espresso dose'], ['2:30', 'filter finish']],
    sections: [
      {
        title: 'Filter — V60 or batch',
        blocks: [
          { type: 'P', text: 'Our default recipe for washed Africans and the house filter blend. It is the recipe the tasting bar uses when a coffee lands, and it is close enough to the printed card that you will not have to convert anything.' },
          {
            type: 'List',
            items: [
              '15g coffee to 250g water, medium-fine, 94°C',
              'Bloom 45g for 40 seconds, stir once, no swirl',
              'Two further pours to 250g, aim to finish by 2:30',
            ],
          },
        ],
      },
      {
        title: 'Espresso',
        blocks: [
          { type: 'P', text: 'Start here, then move only the grind. Every other variable stays fixed until the shot tastes wrong twice in a row — chasing temperature first is how a good machine ends up with a bad recipe.' },
          {
            type: 'List',
            items: [
              '18g in, 38g out, 26–30 seconds on a medium roast',
              'If it sours, coarsen slightly — do not chase temperature first',
              'Rest new beans five days off roast before dialling in',
            ],
          },
        ],
      },
      {
        title: 'Immersion — plunger and AeroPress',
        blocks: [
          { type: 'P', text: 'The forgiving end of the spectrum, and what we recommend to anyone starting out or brewing for a crowd. Neither method punishes a coarse grind the way a pour-over does, so the ratios below have room in them.' },
          {
            type: 'List',
            items: [
              '60g per litre, coarse grind, four minutes flat',
              'Break the crust, skim, wait one more minute, press',
              'AeroPress: 16g to 220g, 1:30 steep, gentle press',
            ],
          },
        ],
      },
      {
        title: 'Dialling in a new bag',
        blocks: [
          { type: 'P', text: 'A new lot rarely lands on your first attempt, and it should not need five either. Work through the sequence below once per bag, write each change on the wrapper, and the second brew of the week will be the one you keep.' },
          {
            type: 'Steps',
            items: [
              'Rest the bag five days off roast before the first serious attempt',
              'Brew the printed recipe twice and taste both without changing anything',
              'Change one thing only — grind first, then dose, then water temperature',
              'Taste again after each change and stop the moment the sour or dry note goes',
              'Write the winning recipe on the bag so the next brew starts there',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Tell us how you brew',
    ctaBody: 'The subscription form has a grind field. Match it to your method and the first bag arrives ready for the recipe you picked.',
  },
  {
    parent: 'roastery',
    slug: 'subscriptions',
    title: 'Subscriptions — how the Ember & Oak plans really run',
    description: 'Plans, billing dates, skips and gift subscriptions for Ember & Oak coffee: what arrives each month, when the card is charged and how to change plan.',
    kicker: 'Ember & Oak · subscriptions',
    heading: 'How subscriptions run',
    lede: 'Everything that happens between pressing subscribe and the bag landing on the mat — billing, skips, grinds and what to do when you go on holiday.',
    variant: 'cards',
    stats: [['$16', 'cheapest plan'], ['Fri', 'dispatch day'], ['48h', 'skip deadline']],
    sections: [
      {
        title: 'How the subscription runs',
        blocks: [
          { type: 'P', text: 'The subscription bills monthly on the day you joined, and every dispatch is roasted on the Thursday before it leaves the building. A confirmation email arrives each Tuesday, which is the last moment to skip the month, change your grind or add a note for the roastery.' },
          {
            type: 'List',
            items: [
              'First dispatch: the Friday after you join, whichever plan you pick',
              'Confirmation each Tuesday; edit or skip until midnight Wednesday',
              'Billed monthly on your join date, from the card on the account',
              'One email covers the plan, the grind and the delivery day',
            ],
          },
          { type: 'Note', text: 'A skipped dispatch becomes credit on your account rather than a refund, and the credit does not lapse when the next month runs.' },
        ],
      },
      {
        title: 'Choosing a plan',
        blocks: [
          { type: 'P', text: 'The three plans differ by how much coffee leaves the roastery each month, not by what you are allowed to order. A 250g bag works out at roughly sixteen filter cups at 15g a pot, or thirteen double espressos, which is how most people decide.' },
          {
            type: 'List',
            items: [
              'The Drifter — $16/mo, one 250g bag, about three weeks for one drinker',
              'The Regular — $29/mo, two bags plus the brew notes card',
              'The Counter — $54/mo, four bags, for offices and hosts',
              'Plan changes take effect on your next billing date, not mid-cycle',
            ],
          },
        ],
      },
      {
        title: 'Grinds, dates and the brew card',
        blocks: [
          { type: 'P', text: 'Every bag is ground on dispatch morning to the method saved on your account, then stamped with its roast date before it is sealed. Whole bean stays the default because a ground bag starts losing its top notes within a fortnight, but the method is one click to change.' },
          {
            type: 'List',
            items: [
              'Grinds: whole bean, espresso, filter, plunger and moka, all free',
              'Roast date stamped on the base of every bag, never a best-before guess',
              'The Regular and The Counter get a brew card with the recipe we cupped on',
              "Changed method? Edit the grind on Tuesday's email, before Wednesday midnight",
            ],
          },
        ],
      },
      {
        title: 'Pausing, skipping and gifting',
        blocks: [
          { type: 'P', text: 'Subscriptions are built to be stopped: holidays, house moves and a month of too much coffee are all ordinary reasons to pause, and none of them need an email explaining themselves. Gift subscriptions are paid up front and simply end when their term does.' },
          {
            type: 'List',
            items: [
              'Skip a dispatch free until midnight Wednesday before the roast',
              'Pause up to three months; billing restarts the day you unpause',
              'Gifts run three, six or twelve months prepaid and never auto-renew',
              'Cancel from the account page — access runs to the end of the month paid',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Start a subscription',
    ctaBody: 'Fill in the subscription form on the Ember & Oak front page — plan, grind, anything else — and we will hold your first bag for Friday.',
  },
  {
    parent: 'roastery',
    slug: 'wholesale',
    title: 'Wholesale coffee — accounts, training and terms',
    description: 'Weekly wholesale delivery, barista training and dial-in visits for cafés, offices and restaurants buying Ember & Oak by the kilo.',
    kicker: 'Ember & Oak · wholesale',
    heading: 'Wholesale accounts',
    lede: 'Coffee by the kilo, a van on Wednesdays, and a roaster who picks up the phone. What an account actually includes before you ask for a price list.',
    variant: 'story',
    stats: [['22', 'accounts'], ['5kg', 'first order'], ['Wed', 'delivery day']],
    sections: [
      {
        title: 'Who we supply',
        blocks: [
          { type: 'P', text: 'Twenty-two accounts take coffee from the roastery each week: six cafés, eleven offices, three restaurants and two small hotels. We cap the list at twenty-five, because one roaster on a 12kg drum can only dial in that many machines properly, and a twenty-sixth would make liars of the twenty-five.' },
          {
            type: 'List',
            items: [
              'Cafés and restaurants — espresso and filter, ground for your machine',
              'Offices — bean-to-cup or filter on a fixed weekly or fortnightly slot',
              'First order 5kg minimum, then any increment the week needs',
              'Wednesday delivery inside the city, Thursday by courier beyond it',
            ],
          },
        ],
      },
      {
        title: 'What an account includes',
        blocks: [
          { type: 'P', text: 'The price per kilo covers more than the green coffee. Every account gets a dial-in visit whenever the espresso changes, a quarterly staff session at the roastery, and a phone number a roaster answers rather than a ticket queue that replies in a day.' },
          {
            type: 'List',
            items: [
              'Dial-in on your machine, included for the first month and after any change',
              'Quarterly training at the roastery — one hour, four staff, no charge',
              'Loaner grinder while yours is serviced, most back within three days',
              'Samples of any new lot before it ever reaches an invoice',
            ],
          },
          { type: 'Quote', text: 'The week they took over the grinder our espresso stopped swinging between sour and ashy, and the baristas stopped arguing about it at eight in the morning.' },
        ],
      },
      {
        title: 'Pricing and terms',
        blocks: [
          { type: 'P', text: 'Wholesale is priced per kilo and drops in two steps, invoiced weekly in arrears. The first order is paid on delivery; from the third invoice the account moves to thirty-day terms with no deposit and no tie-in beyond the coffee you have already had.' },
          {
            type: 'List',
            items: [
              'Filter from $14.50/kg, espresso from $16.00/kg at 10kg a week',
              '5% off the list price from 10kg a week, 10% from 25kg',
              'Invoices issued each Thursday, thirty days from your third order',
              'No contract and no minimum beyond the opening 5kg order',
            ],
          },
        ],
      },
      {
        title: 'Starting an account',
        blocks: [
          { type: 'P', text: 'Opening an account takes about a fortnight: a tasting at the roastery, samples running on your own grinder, then a first delivery. We would rather you cup two lots on your bar than commit to a pallet from ours, and nobody has ever been rushed through that step.' },
          {
            type: 'List',
            items: [
              'Book a tasting — thirty minutes, no charge, any Thursday',
              'We put samples through your machine and set the grind with your baristas',
              'First 5kg delivery the Wednesday after you approve the lot',
              'Standing order set up, edited any time by email or phone',
            ],
          },
          { type: 'Note', text: 'Wholesale enquiries go through the same form as everything else — say how much coffee you get through a week and we will send the price list.' },
        ],
      },
    ],
    ctaTitle: 'Open a wholesale account',
    ctaBody: 'Send your weekly usage, brew methods and machine through the enquiry form on the landing page. You get samples, a price per kilo and a delivery day back.',
  },
];
