import type { SubPage } from './types';

export const PAGES: SubPage[] = [
  {
    parent: 'brightside',
    slug: 'aftercare',
    title: 'Brightside Dental — aftercare for every treatment',
    description: 'What is normal in the first 48 hours after a filling, crown, extraction or whitening, what to avoid, and the signs that mean you should call us.',
    kicker: 'Brightside Dental · aftercare',
    heading: 'After your visit',
    lede: 'Most treatment settles in a day or two. This page tells you what is normal, what is not, and exactly when to pick up the phone.',
    variant: 'guide',
    stats: [
      ['2–3 hrs', 'numbness after a filling'],
      ['48 hrs', 'the settling window'],
      ['08:00', 'the desk opens'],
    ],
    sections: [
      {
        title: 'After a filling or crown',
        blocks: [
          { type: 'P', text: 'Your lip and tongue stay numb for two to three hours, so eat only once sensation comes back or you will bite the inside of your cheek. Cold sensitivity for a week or two is common and settles on its own.' },
          {
            type: 'List',
            items: [
              'Wait two to three hours before eating; soft food that evening',
              'Mild cold sensitivity for up to two weeks — use a sensitive paste',
              'A bite that catches first when you close is not normal; call us',
            ],
          },
        ],
      },
      {
        title: 'After an extraction',
        blocks: [
          { type: 'P', text: 'The clot is what heals the socket, so the first day is mostly about leaving it alone. Bleeding for a few hours is expected; anything heavier means pressure, not rinsing, and a call to the desk.' },
          {
            type: 'List',
            items: [
              'No rinsing, spitting or straws for 24 hours after the tooth is out',
              'Avoid straws, smoking and hard exercise for 72 hours',
              'Bleeding that soaks a pad after 30 minutes of pressure: call us',
              'Salt-water rinses start on day two, gently, after meals',
            ],
          },
        ],
      },
      {
        title: 'After whitening',
        blocks: [
          { type: 'P', text: 'Sensitivity peaks on the first night and is worst with cold drinks. For 48 hours your enamel is more porous, which is exactly why coffee, red wine and curry are worth avoiding until the second morning.' },
          {
            type: 'List',
            items: [
              'Take-home trays: 30 minutes a day for 10 to 14 days',
              'No coffee, red wine or curry for 48 hours after each session',
              'Sensitive toothpaste from day one; tell us if it lasts past a week',
            ],
          },
        ],
      },
      {
        title: 'Cleaning around new work',
        blocks: [
          { type: 'P', text: 'The first week decides how long a filling or a crown lasts, and almost all of the damage happens at the gum line where people rush. Work through this in order and the only thing left to book is the six-month review.' },
          {
            type: 'Steps',
            items: [
              'Day one: leave the area alone — no floss beside a fresh filling or a new crown',
              'From day two, brush it as you would any tooth, soft brush and sensitive paste',
              'Slide the floss down the side and stop at the gum; never snap it back up through the contact',
              'If the bite still feels high on day seven, call — five minutes of polish fixes it',
              'Book the six-month review so the work is checked before anything shows',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Not sure if this is normal?',
    ctaBody: 'Describe it in the enquiry form and a dentist replies the same day. If it needs looking at, we book you into the next free slot.',
  },
  {
    parent: 'brightside',
    slug: 'kids-visits',
    title: "Brightside Dental — a child's first visits, by age",
    description: 'When to bring a child in, what happens at each check-up from the first tooth onwards, and how we help nervous children settle without any struggle.',
    kicker: 'Brightside Dental · children',
    heading: "Kids' visits",
    lede: 'Short, friendly appointments that build a habit rather than a fear. Here is what each visit looks like, from the first tooth onwards.',
    variant: 'story',
    stats: [
      ['1st', 'visit by first birthday'],
      ['25 min', 'check-up from three'],
      ['08:30', 'meet-and-greet slots'],
    ],
    sections: [
      {
        title: 'From the first tooth',
        blocks: [
          { type: 'P', text: 'Bring them in when the first tooth appears or by their first birthday, whichever comes first. It is a fifteen-minute lap visit with no instruments, just a count of the teeth and a chat with you.' },
          {
            type: 'List',
            items: [
              'First visit by the first birthday — free while they are under two',
              'Wipe the first teeth with a cloth twice a day until they can spit',
              'Sugary drinks in a cup, never in a bottle at bedtime',
            ],
          },
          { type: 'Quote', text: 'She counted the teeth, let him hold the mirror on her own hand first, and he laughed. Fifteen minutes later he was asking when he could come back.' },
        ],
      },
      {
        title: 'The check-up from three',
        blocks: [
          { type: 'P', text: 'From three years old a child gets their own chair, a count, a polish if they want one and fluoride varnish. Appointments run about twenty-five minutes and we never scold anyone for a missed brush.' },
          {
            type: 'List',
            items: [
              'Twenty-five minutes: exam, clean, fluoride varnish and a sticker',
              'Fissure sealants on permanent molars as soon as they come through',
              'X-rays only where a gap between teeth will not let the brush reach',
              'Half the adult fee on check-ups and hygiene visits until they are eighteen',
            ],
          },
          { type: 'Quote', text: 'Twenty-five minutes, a clean, a varnish and a sticker — and nobody once mentioned the sweets. He checks the calendar for the next one now.' },
        ],
      },
      {
        title: 'Nervous children',
        blocks: [
          { type: 'P', text: 'We agree a stop signal before anything begins and show every instrument before it is used. For children who need more, we run a morning meet-and-greet with no treatment at all, and book longer slots.' },
          {
            type: 'List',
            items: [
              'A stop signal agreed at the start — they are always in control',
              'Tell, show, do: every instrument shown on a finger first',
              'Meet-and-greet visits with no instruments, booked at 08:30',
              'Sedation is available for longer treatment if a child would rather not be present',
            ],
          },
          { type: 'Quote', text: 'We agreed the stop signal on the first visit and used it twice on the second. Knowing she could end it herself was exactly what let her carry on.' },
        ],
      },
      {
        title: 'Between visits',
        blocks: [
          { type: 'P', text: "Most of a child's dental year happens at home, in the two minutes twice a day that nobody enjoys arguing about. What happens between appointments matters more than anything we do in the chair, and none of it needs a chart on the bathroom wall." },
          {
            type: 'List',
            items: [
              'Brush twice a day with a pea of fluoride paste — 1,000ppm until they can spit, 1,450ppm after',
              'Sugary drinks stay in cups and out of bedrooms; water and milk are the defaults',
              'A fitted mouthguard for any contact sport, shaped here in ten minutes',
              'Come back sooner than the recall if a tooth chips, a gap bleeds or a bite changes',
            ],
          },
          { type: 'Note', text: "Recall intervals are set from your child's actual risk rather than a diary default — three, six or twelve months, written on the card at the desk." },
        ],
      },
    ],
    ctaTitle: 'Book their first visit',
    ctaBody: "Send your child's age and any worries in the enquiry form. We will find a morning slot and keep the first appointment short and easy.",
  },
  {
    parent: 'brightside',
    slug: 'treatment-menu',
    title: 'Brightside Dental — the full treatment menu, priced',
    description: 'Every Brightside Dental treatment with its appointment length and published fee, from a $95 check-up to $2,900 aligners, plus what each visit includes.',
    kicker: 'Brightside Dental · treatments',
    heading: 'The treatment menu',
    lede: 'Prices in full, appointment lengths attached, nothing quoted over the phone as from. If a treatment can wait, the menu says so as clearly as it says the fee.',
    variant: 'log',
    stats: [
      ['$95', 'check-up and clean'],
      ['35 min', 'first appointment'],
      ['12 mo', 'longest interest-free plan'],
    ],
    sections: [
      {
        title: 'The full price list',
        blocks: [
          { type: 'P', text: 'The fee on this page is the fee on the invoice — no from-prices, no exam surcharge added afterwards. Appointment lengths are what we actually book, including the minutes the dentist spends reviewing the work before you leave the chair.' },
          {
            type: 'List',
            items: [
              'Every treatment is quoted in writing before it starts and the price does not move',
              'X-rays are taken only where the brush cannot reach, and are part of the exam',
              'Children pay half the adult fee on check-ups and hygiene visits',
              'Emergency appointments are deducted from the treatment that follows',
            ],
          },
          {
            type: 'Table',
            head: ['Treatment', 'Appointment', 'Price'],
            rows: [
              ['Check-up and clean', '35 minutes', '$95'],
              ['Hygiene visit — scale and polish', '40 minutes', '$120'],
              ['Composite filling', '30 minutes', '$140'],
              ['Whitening — take-home trays', '20 minutes plus review', '$260'],
              ['Same-day crown', 'one 90-minute visit', '$1,150'],
              ['Clear aligners — full course', '6 reviews over 6–9 months', '$2,900'],
              ["Children's check-up", '25 minutes', '$48'],
              ['Emergency appointment', '20 minutes', '$65'],
            ],
          },
        ],
      },
      {
        title: 'What the price includes',
        blocks: [
          { type: 'P', text: 'A fee here covers the whole episode of care rather than the ten minutes you can see. The review after a crown, the retainers after aligners and the second visit that gets a bite right are all inside the number you were quoted, which is why we can publish it at all.' },
          {
            type: 'List',
            items: [
              'Crown — the fit appointment, the polish and any bite adjustment afterwards',
              'Aligners — every review appointment and both sets of retainers',
              'Whitening — the trays, gel for the full course and the review at two weeks',
              'Filling — one review at two weeks if the tooth is still sensitive',
            ],
          },
        ],
      },
      {
        title: 'Payment, plans and insurance',
        blocks: [
          { type: 'P', text: 'You pay at the appointment and claim back the same day with itemised treatment codes on the invoice. Anything over $600 can be split over six or twelve months at no interest, and for larger work we write a pre-treatment estimate your insurer can answer before you commit.' },
          {
            type: 'List',
            items: [
              'Six or twelve months interest-free on treatment over $600',
              'Itemised codes on every invoice — nothing for your insurer to re-key',
              'Pre-treatment estimates for larger work; most insurers reply inside a week',
              'Direct settlement where the policy allows it, arranged at booking',
            ],
          },
        ],
      },
      {
        title: 'What we put on recall instead',
        blocks: [
          { type: 'P', text: "Roughly one appointment in five ends with nothing to do today, and that is a good outcome rather than a lost one. Early decay, a small crack, a child's wobbly tooth and a grind that has not worn anything yet are all watched on a recall before they are drilled." },
          {
            type: 'List',
            items: [
              'Early decay — photographed, reviewed in six months, treated only if it progresses',
              'A cracked but comfortable tooth — night guard and review, not a crown on day one',
              "Children's adult molars sealed as they come through, never before",
              'A grind with no wear: a guard offered, a filling never rushed',
            ],
          },
          { type: 'Note', text: 'Every watch item is written in your notes with the date it was last photographed, so nothing quietly turns into an emergency between visits.' },
        ],
      },
    ],
    ctaTitle: 'Book the check-up',
    ctaBody: 'Pick the treatment and a day in the appointment form on the Brightside page. The desk texts two available times, usually within two hours.',
  },
  {
    parent: 'brightside',
    slug: 'emergency',
    title: 'Brightside Dental — dental emergencies, hour by hour',
    description: 'What counts as urgent at Brightside Dental, what to do in the first hour at home, how the held-back same-day slots work and when swelling means hospital first.',
    kicker: 'Brightside Dental · emergencies',
    heading: 'Dental emergencies',
    lede: 'Two slots are held back every weekday morning for teeth that cannot wait. This page tells you what to do before you get here, and when the answer is a hospital rather than us.',
    variant: 'cards',
    stats: [
      ['11:00', 'call by for the same day'],
      ['20 min', 'emergency appointment'],
      ['1st hour', 'decides a knocked-out tooth'],
    ],
    sections: [
      {
        title: 'What counts as urgent',
        blocks: [
          { type: 'P', text: 'Pain makes everything feel urgent, so here is the line we actually draw. Everything below gets a same-day or same-week slot when you call before 11:00, and the one item at the bottom gets a hospital, because dentistry is the wrong building for it.' },
          {
            type: 'List',
            items: [
              'Same day — a tooth knocked out, swelling, a broken tooth exposing the nerve, bleeding that will not stop',
              'Same week — a lost crown, a filling that has fallen out, a chipped edge that catches your tongue',
              'Routine — a clean, a check-up, a cosmetic consult, a tooth that only objects to cold drinks',
              'Hospital first — swelling travelling toward your eye or throat, facial trauma, uncontrolled bleeding',
            ],
          },
        ],
      },
      {
        title: 'The first hour, at home',
        blocks: [
          { type: 'P', text: 'Most of what decides an emergency happens before you reach the car, which is why four small things done properly beat ten done in a panic. None of this replaces the appointment — it only keeps the situation fixable when you arrive.' },
          {
            type: 'List',
            items: [
              'Knocked-out tooth: hold it by the crown, rinse it in milk, never scrub the root',
              'Broken tooth: keep the pieces, rinse with warm water, cover sharp edges with sugar-free gum',
              'Swelling: a cold compress ten minutes on and ten off; no heat, nothing pressed on the gum',
              'Pain: ibuprofen and paracetamol alternated as the packet says, never aspirin on the gum',
            ],
          },
          { type: 'Note', text: 'A tooth kept dry for an hour is far harder to save. If there is no milk to hand, hold it in your cheek — saliva beats a tissue every time.' },
        ],
      },
      {
        title: 'What happens when you arrive',
        blocks: [
          { type: 'P', text: 'Emergency appointments run twenty minutes and have one job: getting you out of pain. We diagnose, take an X-ray if it is needed, stop the problem where we can, then write the plan for the rest with prices attached before you reach reception.' },
          {
            type: 'List',
            items: [
              'Call before 11:00 and urgent cases are seen the same weekday',
              'Two morning slots are held back every weekday for exactly this',
              '$65 for the emergency appointment, deducted from the treatment that follows',
              'After 17:00 leave a desk message — you get what to take and when to come back',
            ],
          },
        ],
      },
      {
        title: 'After the emergency visit',
        blocks: [
          { type: 'P', text: 'The appointment that stops the pain is rarely the one that finishes the job, so every emergency ends with a follow-up booked before you leave. What the next fortnight looks like depends on which of the three endings you were given on the day.' },
          {
            type: 'List',
            items: [
              'Pain settled and cause treated — back onto your normal recall, nothing else to do',
              'Temporised and waiting — a second visit within two weeks to finish the work',
              'Referred on — a written referral the same day, and we will chase it if you would rather not',
              'Swelling or fever afterwards: call the same day, and go to hospital if it spreads',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Tell us what happened',
    ctaBody: "Call the desk from the Brightside page, or send an appointment request with 'Something is hurting' picked. Either way, if it is urgent you are seen the same weekday.",
  },
];
