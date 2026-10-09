import type { SubPage } from './types';

export const PAGES: SubPage[] = [
  {
    parent: 'lumen',
    slug: 'process',
    title: 'Lumen Studio — how a shoot runs, start to finish',
    description: 'Brief, moodboard, shot list, shoot day and delivery: the five stages of a Lumen Studio shoot, with the turnaround times and costs attached to each.',
    kicker: 'Lumen Studio · process',
    heading: 'The process',
    lede: 'Every shoot runs the same five stages, whether it is one portrait or a full product day. Knowing them makes the day much calmer for everyone.',
    variant: 'story',
    stats: [
      ['48h', 'preview gallery'],
      ['5 days', 'retouched selects'],
      ['$120', 'rush delivery'],
    ],
    sections: [
      {
        title: 'Brief and moodboard',
        blocks: [
          { type: 'P', text: 'A thirty-minute call covers what the images are for, where they will run and the size of the list. You get a moodboard and a written shot list within 48 hours, and nothing is booked until you approve both.' },
          {
            type: 'List',
            items: [
              'Thirty-minute call, then a moodboard and shot list in 48 hours',
              'Shot list sized to delivery: 12 frames for a portrait hour, 40 for a day',
              'Nothing books until you approve the list in writing',
            ],
          },
          { type: 'Note', text: 'Bring three references you like and one you do not — the one you dislike usually moves the moodboard further.' },
        ],
      },
      {
        title: 'Shoot day',
        blocks: [
          { type: 'P', text: 'The studio is lit and steamed before you arrive, so we start on the first frame rather than the first coffee. We review on the back of the camera with you, and the shot list is marked off as it goes.' },
          {
            type: 'List',
            items: [
              'North windows give even light all day; nothing starts before 10:30',
              'Review selects on the camera as we go, so nothing is a surprise',
              'Simple styling, steaming and surfaces included in the day rate',
            ],
          },
          { type: 'Quote', text: 'Forty pieces, a hard deadline, and not one minute spent standing around. The list was on the wall, the light was already up, and we finished early.' },
        ],
      },
      {
        title: 'Delivery',
        blocks: [
          { type: 'P', text: 'A preview gallery lands within 48 hours of the shoot so you can choose selects while the shoot is still fresh. Retouched frames follow within five working days, and rush delivery before noon the next day costs $120.' },
          {
            type: 'List',
            items: [
              'Preview gallery within 48 hours of the shoot',
              'Retouched selects within five working days',
              'Rush delivery before noon the next day, $120',
            ],
          },
          { type: 'Note', text: 'Selects are called by frame number from the preview gallery, and retouching starts the hour your list comes back.' },
        ],
      },
    ],
    ctaTitle: 'Plan your shoot',
    ctaBody: 'Send the date, the shot list and where the images will run in the enquiry form. We reply with availability and a fixed quote.',
  },
  {
    parent: 'lumen',
    slug: 'case-notes',
    title: 'Lumen Studio — notes from three recent shoots',
    description: 'A sixty-piece product range, a north-facing interior set and a fourteen-person portrait series: the brief, the light and what the client did next.',
    kicker: 'Lumen Studio · case notes',
    heading: 'Case notes',
    lede: 'Three shoots from the last quarter, with the brief, the setup and the numbers behind them — useful when you are briefing something similar.',
    variant: 'log',
    stats: [
      ['60', 'pieces in a day'],
      ['07:10', 'atrium call time'],
      ['14', 'portraits, one afternoon'],
    ],
    sections: [
      {
        title: 'The three shoots, side by side',
        blocks: [
          { type: 'P', text: 'Three briefs from the last quarter, the setup each one ran on and what was handed over at the end. Read the table first: it is the fastest way to see how a written brief turns into a delivery date.' },
          {
            type: 'Table',
            head: ['Brief', 'Setup', 'Time on site', 'Delivered'],
            rows: [
              ['Stoneware range', 'One north window', '1 day', '40 retouched frames'],
              ['Atrium chairs', 'Tilt-shift, ambient', '90 minutes', '12 frames'],
              ['Fourteen portraits', 'Seamless, one bounce', '4 hours 40', '14 retouched headshots'],
            ],
          },
        ],
      },
      {
        title: 'Stoneware range — 60 pieces in a day',
        blocks: [
          { type: 'P', text: 'A ceramics maker needed a full catalogue on white before a trade fair with eight days to spare. One lighting setup, colour-checked against the glaze samples, and forty retouched frames delivered in two.' },
          {
            type: 'List',
            items: [
              'Product Day, $1,150 — 60 pieces shot, 40 retouched frames delivered',
              'Single north window, white card for fill, one setup all day',
              'Preview gallery the next morning, the full set inside four days',
            ],
          },
        ],
      },
      {
        title: 'Atrium chairs — before the doors opened',
        blocks: [
          { type: 'P', text: 'A furniture showroom needed its atrium photographed before the public walked in. We shot at 07:10 with a tilt-shift so the columns stayed straight and finished the set in ninety minutes flat.' },
          {
            type: 'List',
            items: [
              '07:10 call time; three rooms and the atrium done by 09:00',
              'Tilt-shift lens so columns and doorframes stay parallel',
              'Twelve frames delivered, five chosen for the launch campaign',
            ],
          },
        ],
      },
      {
        title: 'Fourteen portraits, one afternoon',
        blocks: [
          { type: 'P', text: 'A team of fourteen wanted headshots that looked like one set rather than fourteen separate ones. Seamless paper, one bounce and a twenty-minute slot per person meant nobody sat waiting around.' },
          {
            type: 'List',
            items: [
              'Portrait Hour rate, staggered twenty minutes per person',
              'Same backdrop and key light for every person in the team',
              'Individual previews within 48 hours, retouched set in five days',
            ],
          },
          { type: 'Note', text: 'The whole series ran 4 hours 40 minutes on site — one team photographed between lunch and the school run.' },
        ],
      },
    ],
    ctaTitle: 'Brief us on your next set',
    ctaBody: 'Send the shot list, the deadline and where the images will run in the enquiry form. You get availability and a fixed quote back.',
  },
  {
    parent: 'lumen',
    slug: 'session-types',
    title: 'Lumen Studio — the four sessions and what each delivers',
    description: 'Portrait hour, editorial day, product range and interiors: what each Lumen Studio session runs to, what it hands over and the price it starts from.',
    kicker: 'Lumen Studio · sessions',
    heading: 'Session types',
    lede: 'Four ways to book the studio, each with a fixed shape, a frame count and a price. Pick the one closest to your brief and we will size it properly on the call.',
    variant: 'cards',
    stats: [
      ['$340', 'portrait hour'],
      ['$1,150', 'product day'],
      ['48h', 'preview gallery'],
    ],
    sections: [
      {
        title: 'Portrait hour',
        blocks: [
          { type: 'P', text: 'The portrait hour is the smallest session we run and the one most people start with: sixty minutes, one or two looks, and a set of images that clearly belong to the same family. It is $340 in the studio or on location inside the city, with travel beyond twenty miles quoted before you book.' },
          {
            type: 'List',
            items: [
              '$340 for sixty minutes, studio or location inside the city',
              '12 retouched frames, chosen by you from the preview gallery',
              'Two looks — a jacket and collar change reads as a whole new set',
              'Headshots, author photos, press pictures and one-off profiles',
            ],
          },
          { type: 'Note', text: 'Bring the outfit you actually wear to work. A second shirt on a hanger is worth more to this session than a second location.' },
        ],
      },
      {
        title: 'Editorial and lookbook',
        blocks: [
          { type: 'P', text: 'Editorial days are quoted rather than booked off a price list, because the shot count depends on the story: eight looks for a lookbook and one hero image are simply different days. We shoot against the studio plaster wall or on location, with a stylist booked at day rate plus expenses when the brief asks for one.' },
          {
            type: 'List',
            items: [
              'Full day, 09:30 to 17:30, with set-up on the floor before you arrive',
              'Quoted from the shot list — usage for your own channels sits inside it',
              'Ten to eighteen finished looks, delivered as a numbered sequence',
              'Stylist, hair and make-up arranged on your instruction, priced up front',
            ],
          },
        ],
      },
      {
        title: 'Product day',
        blocks: [
          { type: 'P', text: '$1,150 buys a full product day: one lighting setup held consistent from the first piece to the last, up to sixty items shot, and forty retouched frames handed over. Colour is checked against your physical samples before the first frame, so the white on screen is the white of the glaze.' },
          {
            type: 'List',
            items: [
              'Up to 60 pieces shot on the day, 40 retouched frames delivered',
              'One north-window setup — consistency is what makes a catalogue read',
              'Objects up to 40cm on the sweep; larger pieces move to a location half-day',
              'Tethered screen you can check at any point, not at the end of the day',
            ],
          },
          { type: 'Note', text: 'Send the ten trickiest pieces first. Once those are right on screen, the rest of the range follows the same setup.' },
        ],
      },
      {
        title: 'Interiors and location',
        blocks: [
          { type: 'P', text: 'Interiors are shot when the room is empty and the light is right, which usually means a 07:00 call and a showroom that opens at nine. We bring a tilt-shift so verticals stay vertical and two portable heads for the corners the windows cannot reach.' },
          {
            type: 'List',
            items: [
              'Early calls from 07:00 for showrooms, workshops and public spaces',
              'Half-day from $680, full day from $1,150, travel quoted separately',
              'Tilt-shift lens, tripod and portable fill for deep rooms',
              'Twelve frames from a half-day, twenty-four from a full day',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Pick a session',
    ctaBody: 'Choose the closest package in the enquiry form, add your date and the brief, and we will reply with the session we would actually book for you.',
  },
  {
    parent: 'lumen',
    slug: 'retouching',
    title: 'Lumen Studio — what we retouch, and what we leave alone',
    description: 'Dust, stray threads, colour and skin: the Lumen Studio retouching standard, the five stages every frame passes through, and the edits we refuse.',
    kicker: 'Lumen Studio · retouching',
    heading: 'How we retouch',
    lede: 'Retouching is the part clients ask about most carefully, and rightly. This is exactly what happens to a frame between the preview gallery and the final delivery.',
    variant: 'guide',
    stats: [
      ['5 days', 'standard turnaround'],
      ['48h', 'preview gallery'],
      ['$120', 'next-morning rush'],
    ],
    sections: [
      {
        title: 'What every frame gets',
        blocks: [
          { type: 'P', text: 'Every frame that leaves the studio passes the same baseline work, whether it is a headshot or the sixtieth mug of the day. It is the boring half of retouching, and it is the half that makes a set look like one set rather than sixty separate exposures.' },
          {
            type: 'List',
            items: [
              'Sensor dust and background marks cleaned off every frame',
              'Stray threads, steamer creases and price tags removed from product work',
              'Exposure matched across the set so one frame never jumps out',
              'Colour checked against your physical sample or the brand swatch',
            ],
          },
        ],
      },
      {
        title: 'What we do not change',
        blocks: [
          { type: 'P', text: 'We do not reshape bodies, narrow jaws or move shoulders, and we do not remove tattoos, birthmarks or scars unless you ask for it in writing. Faces stay yours; cloth keeps the way it actually hangs. If a picture only works after that kind of edit, the fix belongs on the shoot, not in the file.' },
          {
            type: 'List',
            items: [
              'No slimming, no liquify, no changing the shape of a person',
              'No removing permanent features without a written note on the brief',
              'No painting cloth into a shape it was never cut into',
              'Wrinkles that a steamer missed are taken out; wrinkles that are the fabric stay',
            ],
          },
          { type: 'Note', text: 'Ask us to push something and we will say yes or no the same day, with the reason — no silent changes either way.' },
        ],
      },
      {
        title: 'The retouch sequence',
        blocks: [
          { type: 'P', text: 'The same five stages run on every delivery, in this order, on calibrated screens. It is why a portrait hour and a product day both land on day five rather than whenever someone finds the time.' },
          {
            type: 'Steps',
            items: [
              'Cull from your selects and discard anything soft, doubled or badly timed',
              'Set colour and exposure on the reference frame, then match the rest of the set to it',
              'Clean each frame: dust, threads, marks, background seams, then skin and teeth',
              'Dodge and burn for shape and separation, kept subtle enough to survive print',
              'Soft-proof, export to sRGB, and upload the gallery under your frame numbers',
            ],
          },
        ],
      },
      {
        title: 'Colour, screens and delivery',
        blocks: [
          { type: 'P', text: 'Screens here are calibrated monthly with the same hardware profiler, and the reference monitor is checked against printed proofs before any catalogue work. Files arrive as sRGB JPEGs by default; layered TIFFs and Adobe RGB exports are available when your printer asks for them.' },
          {
            type: 'List',
            items: [
              'sRGB JPEGs at full resolution, named to the frame numbers you picked',
              'Layered TIFF or Adobe RGB on request — say so when you send selects',
              'Web-sized copies cut to 2000px on the long edge, ready to upload',
              'Original raw files kept for twelve months, re-sent on request',
            ],
          },
          { type: 'Note', text: 'Rush delivery before noon the next day costs $120 and shortens the stages, never skips them.' },
        ],
      },
    ],
    ctaTitle: 'Send us a brief',
    ctaBody: 'Put the frame count, the deadline and where the images run in the enquiry form. We reply with the retouch standard applied to your brief and a date.',
  },
];
