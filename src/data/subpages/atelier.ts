import type { SubPage } from './types';

export const PAGES: SubPage[] = [
  {
    parent: 'atelier',
    slug: 'care-guide',
    title: 'Atelier Noir — care for cotton, wool and deadstock',
    description: 'Wash temperatures, drying, storage and moth prevention for Atelier Noir pieces, so a capsule bought this year still looks right in its tenth year.',
    kicker: 'Atelier Noir · care',
    heading: 'Care guide',
    lede: 'These pieces are cut to be worn for a decade, not a season. A little care in the first year decides how the tenth one looks.',
    variant: 'guide',
    stats: [
      ['30°C', 'cotton wash'],
      ['2 yrs', 'free repairs'],
      ['1 day', 'aired before storage'],
    ],
    sections: [
      {
        title: 'Cotton, machine washable',
        blocks: [
          { type: 'P', text: 'The poplin shirt, pleated trouser and tote are all cotton and all easy. Cold water, a gentle cycle and hanging them to dry keeps the hand of the cloth the way the mill finished it.' },
          {
            type: 'List',
            items: [
              'Wash at 30 degrees, gentle cycle, inside out with like colours',
              'Hang dry in shade — a dryer is what shrinks a cotton shirt',
              'Press the poplin while damp; it wants nothing more than a warm iron',
            ],
          },
        ],
      },
      {
        title: 'The wool overshirt',
        blocks: [
          { type: 'P', text: "Wool does not want heat, friction or a hanger. Hand wash it in cool water or dry clean it occasionally, then dry it flat so the shoulders never stretch into someone else's shape." },
          {
            type: 'List',
            items: [
              'Hand wash in cool water, or dry clean once or twice a year',
              'Dry flat on a towel, never on a hanger, never in sunlight',
              'Fold for storage with cedar; moths prefer the dark cupboard',
            ],
          },
          { type: 'Note', text: 'A steamer beats an iron on the overshirt: five minutes hanging, no pressure on the shoulder, and the creases go without flattening the nap.' },
        ],
      },
      {
        title: 'The wash, step by step',
        blocks: [
          { type: 'P', text: 'Most of what goes wrong with a garment happens between the machine and the line rather than in the drum itself. Run the five steps below in order and the cloth keeps the hand the mill finished it with, however many times it is worn.' },
          {
            type: 'Steps',
            items: [
              'Turn the piece inside out and close every fastening so the outer face never rubs',
              'Wash at 30 degrees on a gentle cycle with a small dose of non-biological detergent',
              'Lift it out the moment the cycle ends — an hour standing wet is what sets a crease',
              'Hang cotton on a wide hanger and dry wool flat, both away from direct sun',
              'Press cotton while damp on a warm iron; let wool settle overnight before ironing',
            ],
          },
        ],
      },
      {
        title: 'Between seasons',
        blocks: [
          { type: 'P', text: 'Whatever you store, store it clean: moths are drawn to the invisible film of skin and detergent left on a worn piece far more than to the dye. After that, it is only about air and space.' },
          {
            type: 'List',
            items: [
              'Wash before storing — unwashed wool is the piece moths find',
              'Breathable cotton bags, never plastic; check them once a month',
              'Air knitwear for a full day before it goes back in the drawer',
            ],
          },
          { type: 'Note', text: 'Cedar loses its scent after a season or two — replace the blocks when they stop smelling, because a quiet cupboard is not the same as a protected one.' },
        ],
      },
    ],
    ctaTitle: 'Ask us about a piece',
    ctaBody: 'Tell us which piece and what has happened to it in the enquiry form. We will reply with the fix, the cost and where to send it.',
  },
  {
    parent: 'atelier',
    slug: 'sizing',
    title: 'Atelier Noir — sizing, measured in centimetres',
    description: 'How the relaxed unisex block fits, how to measure chest, length and sleeve at home, and where each of the five sizes sits on the tape.',
    kicker: 'Atelier Noir · sizing',
    heading: 'Sizing, measured',
    lede: 'Five sizes, one relaxed block, and centimetres on every piece. Compare them to something you already own and you will not have to guess.',
    variant: 'log',
    stats: [
      ['5', 'sizes, XS to XL'],
      ['2 min', 'to measure at home'],
      ['30 days', 'to exchange a size'],
    ],
    sections: [
      {
        title: 'Measure yourself in two minutes',
        blocks: [
          { type: 'P', text: 'A soft tape and a mirror are all you need, and one loose pull will not mislead you if you keep the tape flat. Measure over the shirt you would wear under the piece, not over a coat.' },
          {
            type: 'List',
            items: [
              'Chest — tape under the arms, across the fullest point, arms down',
              'Length — from the base of the collar straight down the front',
              'Sleeve — shoulder seam to wrist bone, arm slightly bent',
            ],
          },
        ],
      },
      {
        title: 'The unisex block',
        blocks: [
          { type: 'P', text: 'Every piece is cut from the same relaxed block with room for a layer underneath and a dropped shoulder. It is meant to sit away from the body, so a close fit means you sized down by mistake.' },
          {
            type: 'List',
            items: [
              'Room for a mid-layer: size down only if you wear it next to skin',
              'Dropped shoulder — the seam sits past the shoulder point by design',
              'Trouser leg is straight and the waistband is not elasticated',
            ],
          },
        ],
      },
      {
        title: 'The size table',
        blocks: [
          { type: 'P', text: 'Garment measurements in centimetres, taken flat across the finished piece rather than around a body. Lay a jacket or shirt you already wear and like flat on a table, square the seams off, and compare it column by column below.' },
          {
            type: 'Table',
            head: ['Size', 'Chest (cm)', 'Length (cm)', 'Sleeve (cm)'],
            rows: [
              ['XS', '106', '68', '61'],
              ['S', '110', '70', '62'],
              ['M', '114', '72', '64'],
              ['L', '118', '74', '65'],
              ['XL', '122', '76', '66'],
            ],
          },
        ],
      },
      {
        title: 'Between sizes',
        blocks: [
          { type: 'P', text: 'Outerwear wants the larger size, knits the smaller, and the measurements printed on each piece settle any argument. If you are between two, tell us your usual brand and size and we will say which.' },
          {
            type: 'List',
            items: [
              'Between two sizes: up for the Field Coat, down for the Rollneck',
              'Compare chest and length in cm to a favourite piece at home',
              'Size exchanges ship the same day we receive your parcel back',
            ],
          },
          { type: 'Note', text: 'The tape beats the label every time — a medium here is cut from the same block as every other medium we have made.' },
        ],
      },
    ],
    ctaTitle: 'Ask before you order',
    ctaBody: 'Send your measurements and the piece you are eyeing in the enquiry form. We will tell you which size to take and hold it while you decide.',
  },
  {
    parent: 'atelier',
    slug: 'fabrics',
    title: 'Atelier Noir — the cloth, the mills and the seasons',
    description: 'Where the capsule cloth comes from: cleared mill runs in Portugal, traceable wool from Biella, and what lands in spring and again in autumn.',
    kicker: 'Atelier Noir · cloth',
    heading: 'Cloth and seasons',
    lede: 'Two capsules a year because two lots of cloth arrive a year. This is where each one is bought, who milled it and what it becomes once it is on the floor.',
    variant: 'story',
    stats: [
      ['10', 'pieces a capsule'],
      ['2', 'collections a year'],
      ['40m', 'smallest roll we buy'],
    ],
    sections: [
      {
        title: 'Deadstock, bought once',
        blocks: [
          { type: 'P', text: 'Every capsule is cut from cloth bought once, in the length the ten pieces need, at the price the mill or the clearing house asked that week. There is no second order to place and no roll held back for next season — the ticket on the piece is set the week the cloth lands.' },
          {
            type: 'List',
            items: [
              'Cotton bought as deadstock: cleared mill runs, sold by the roll, never re-ordered',
              'Wool bought new and traceable, from a mill we visit each spring',
              'The length a capsule needs is worked out before a single piece is cut',
              'Nothing is carried over; the offcuts are kept for repairs instead',
            ],
          },
        ],
      },
      {
        title: 'The two mills',
        blocks: [
          { type: 'P', text: 'Cotton comes from a family mill outside Guimarães in northern Portugal, wool from a spinning house outside Biella. Both have supplied us since Capsule 02, both are visited each spring, and both send the roll with its own ticket still stapled to the end.' },
          {
            type: 'List',
            items: [
              'Guimarães, Portugal — poplin and twill cotton, cleared mill runs',
              'Biella, Italy — worsted wool for the overshirt and the rollneck',
              'Each mill is named on the label, as is the workshop that sews the piece',
              'Tickets stay attached until the last piece of that roll is cut',
            ],
          },
          { type: 'Quote', text: "The roll comes off the lorry with the mill's ticket stapled to the end, and we leave it on until the last piece is cut. It is the only proof a customer ever sees of where their coat began." },
        ],
      },
      {
        title: 'Spring and autumn',
        blocks: [
          { type: 'P', text: 'Two releases a year, built around what the cloth allows rather than a trend calendar. Spring arrives in March in cotton and autumn in October in wool, and the ten pieces are chosen with the cloth already on the floor, never before.' },
          {
            type: 'List',
            items: [
              'Spring — poplin shirt, pleated trouser and the tote, in Portuguese cotton',
              'Autumn — wool overshirt, merino rollneck and the field coat, in Biella wool',
              'Ten pieces each, released on the same morning, announced in two emails',
              'Block and sizing carry across both, so a size M in March is a size M in October',
            ],
          },
        ],
      },
      {
        title: 'When a length runs out',
        blocks: [
          { type: 'P', text: 'A deadstock roll runs 40 to 60 metres, and a capsule that sells through is genuinely finished until cloth of the same weight comes back — which it may not. Twice in three years a return or a second clearing-house purchase has unlocked a small extra run, and the list heard first.' },
          {
            type: 'List',
            items: [
              'Sold-out pieces stay on the site as reference, never as a backorder',
              'The list is written to within 48 hours if a matching length turns up',
              'An extra run is cut in the same block, from the same cloth if it survives',
              'A re-cut in your size is asked for through the form, not assumed',
            ],
          },
          { type: 'Note', text: 'Repairs draw on the same rolls: every capsule keeps its offcuts for two years, which is how elbows and buttons are matched rather than approximated.' },
        ],
      },
    ],
    ctaTitle: 'Ask about a length',
    ctaBody: 'Name the piece and the cloth you are after in the enquiry form. We reply with what is left on the roll, what it costs and whether it can still be cut.',
  },
  {
    parent: 'atelier',
    slug: 'appointments',
    title: 'Atelier Noir — fittings, from first measure to collection',
    description: 'The four appointments behind a piece cut for you: first measure, basted fitting, final fitting and alterations, with timings, prices and what to bring.',
    kicker: 'Atelier Noir · appointments',
    heading: 'The fittings',
    lede: 'A commission runs on four appointments, not one. This is what happens at each, how long it takes and what is worth bringing with you.',
    variant: 'cards',
    stats: [
      ['45 min', 'first measure'],
      ['3 wks', 'to the basted fitting'],
      ['30 days', 'free alterations'],
    ],
    sections: [
      {
        title: 'First measure',
        blocks: [
          { type: 'P', text: 'Forty-five minutes with the tape: about twenty figures written down — chest, waist, shoulder, sleeve, back length — plus the posture notes no size chart carries, such as a low right shoulder or a sleeve that wants an inch of break over the shoe. Nothing is cut and nothing is charged at this appointment.' },
          {
            type: 'List',
            items: [
              '45 minutes in the workshop, no deposit and no obligation to commission',
              'Around twenty measurements, taken over the shirt you arrived in',
              'Shoulder slope, posture and sleeve break recorded for the cutter',
              'Bring the shoes and the layer you will actually wear with the piece',
            ],
          },
        ],
      },
      {
        title: 'Basted fitting',
        blocks: [
          { type: 'P', text: 'About three weeks after the measure the piece comes back assembled in white basting thread, seams still open and pockets tacked shut. It is not meant to look finished — this is where shoulders, waist and length are chalked and moved while every seam can still come apart in an hour.' },
          {
            type: 'List',
            items: [
              'Held roughly three weeks after your first measure, thirty minutes',
              'Tried on over your shirt; chalk marks taken at shoulder, waist and hem',
              'Nothing is cut away until you have said the fit is right',
              'Changes at this stage cost nothing — the garment is not finished yet',
            ],
          },
          { type: 'Note', text: 'Skip the basted fitting and the final becomes the first chance to say something, with far less cloth left to move.' },
        ],
      },
      {
        title: 'Final fitting',
        blocks: [
          { type: 'P', text: 'The finished piece, pressed and buttoned, three to four weeks after the basted fitting. We check the closure, the drape and the sleeve against your shoe, then take the last millimetre while the hems are still open. Most finals take fifteen minutes and need nothing done at all.' },
          {
            type: 'List',
            items: [
              'Three to four weeks after the basted fitting; thirty minutes held',
              'Buttonholes, hems and lining checked against the marks from fitting two',
              'Takes and lets finished in the workroom before you leave the room',
              'Collection the same day once the press is done',
            ],
          },
        ],
      },
      {
        title: 'Alterations after collection',
        blocks: [
          { type: 'P', text: 'Shoulders settle, a sleeve turns out long for one particular shoe, a waist comes in over the winter. Small alterations on a piece we cut are free for the first thirty days, and buttons, seams and elbows stay free for two years from the day you collect.' },
          {
            type: 'List',
            items: [
              'Free alterations for 30 days on anything cut for you here',
              'Buttons, seams and elbows repaired free for two years, then at cost',
              'Booked through the same form — name the piece and what needs moving',
              'Most work is back with you inside two weeks, pressed and boxed',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Book your first fitting',
    ctaBody: 'Put the piece you want cut, your usual size and a date you can come in through the enquiry form. We reply with a first-measure slot and the fittings that follow it.',
  },
];
