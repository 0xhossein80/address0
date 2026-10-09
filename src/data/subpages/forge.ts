import type { SubPage } from './types';

export const PAGES: SubPage[] = [
  {
    parent: 'forge',
    slug: 'programming',
    title: 'Ironclad Strength — how the programme is written',
    description: 'The method behind the Ironclad Strength board: two main lifts, one accessory slot, and the exact rules that decide when the weight goes up.',
    kicker: 'Ironclad Strength · programming',
    heading: 'The programme',
    lede: 'Nothing on the board is improvised. Every session comes from the same three rules, and this page shows you all of them.',
    variant: 'guide',
    stats: [['2', 'main lifts a session'], ['2.5kg', 'smallest jump'], ['4th', 'week is a deload']],
    sections: [
      {
        title: 'How the week is built',
        blocks: [
          { type: 'P', text: 'Coached members train four days around the class board and take open floor whenever else they like. Each session pairs one main lift with a short accessory slot, and the slots rotate so nothing gets left behind.' },
          {
            type: 'List',
            items: [
              'Squat Mechanics, Monday 06:00 — squat 5x5, bench 3x8, twelve minutes of core',
              'Bench & Press, Wednesday 06:00 — paused bench 4x3, press 4x6',
              'Olympic Lifting, Thursday 19:00 — snatch technique, clean and jerk, pulls',
              'Long Session, Saturday 09:00 — conditioning work, no barbell test',
            ],
          },
        ],
      },
      {
        title: 'When the weight goes up',
        blocks: [
          { type: 'P', text: 'Load moves only when the last set was clean. Finish every prescribed rep with two in reserve and the smallest plate goes on next session; grind through it and you repeat the week instead of progressing.' },
          {
            type: 'List',
            items: [
              'Lower body — add 2.5kg after two clean sessions in a row',
              'Upper body — add 1.25kg, or one rep per set when the bar feels fast',
              'Two missed sessions in a row drops you back one step, not to zero',
            ],
          },
          { type: 'Note', text: 'A clean session is every prescribed rep finished with two left in the tank, same rest, same range. If the bar speed dies on rep four, the week repeats — that is the whole rule.' },
        ],
      },
      {
        title: 'Your first four weeks',
        blocks: [
          { type: 'P', text: 'Beginners spend a month learning the lifts before chasing numbers. A coach sets your squat, bench and deadlift in week one, then adjusts the loads each session from what they actually see on the floor.' },
          {
            type: 'List',
            items: [
              'Week 1 — movement screen, no working set above a comfortable RPE 6',
              'Weeks 2 and 3 — two coached sessions plus one open floor visit',
              'Week 4 — retest the three lifts and pick your first full cycle',
            ],
          },
        ],
      },
      {
        title: 'Running a session, start to finish',
        blocks: [
          { type: 'P', text: "Every coached session runs in the same order, whether it is Squat Mechanics at 06:00 or the Long Session on Saturday. The warm-up is yours, the working sets come off the board, and the log you leave behind is what tells next Monday's coach exactly where you got to." },
          {
            type: 'Steps',
            items: [
              "Warm up ten minutes — bike or row, then the movements of the day's main lift",
              'Build to your working weight over two or three sets, never more than five reps each',
              'Run the working sets written on the board, resting two to three minutes between them',
              'Log the load and the reps before you leave the rack, not at home that evening',
              'Finish with the accessory slot and the core work — the last ten minutes are not optional',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Get a cycle written for you',
    ctaBody: 'Put your lifts, your weekly schedule and any injuries in the enquiry form. A coach replies with the cycle we would start you on.',
  },
  {
    parent: 'forge',
    slug: 'recovery',
    title: 'Ironclad Strength — recovery between sessions',
    description: 'Sleep, soreness and deload weeks: how Ironclad Strength decides when to push, when to back off, and when to book a return-to-lift session.',
    kicker: 'Ironclad Strength · recovery',
    heading: 'The recovery room',
    lede: 'Training is the stimulus; recovery is where you actually get stronger. Four rules keep you on the floor instead of on the couch.',
    variant: 'story',
    stats: [['7–9h', 'sleep target'], ['48h', 'soreness window'], ['60%', 'deload weight']],
    sections: [
      {
        title: 'Sleep does most of the work',
        blocks: [
          { type: 'P', text: "Seven to nine hours is the number we give every member, because a missed night costs more than a missed session. Three short nights in a row and we cut the week's volume before you get hurt." },
          {
            type: 'List',
            items: [
              'Seven to nine hours, same wake time seven days a week',
              'Hard sessions finish before 21:00 — the board closes at 23:00 for a reason',
              'Under six hours for three nights means the next session runs at half volume',
            ],
          },
        ],
      },
      {
        title: 'Soreness or pain',
        blocks: [
          { type: 'P', text: "Muscle soreness settles in 48 to 72 hours and is not a reason to skip a lift. Sharp, one-sided or joint pain does not wait, and Ruth Callahan runs return-to-lift sessions from your physio's report." },
          {
            type: 'List',
            items: [
              'Muscle soreness — train through it and expect it gone by day three',
              'Joint, nerve or back pain — stop the movement and message a coach today',
              'Book return-to-lift if pain has changed how you walk, sit or grip',
            ],
          },
          { type: 'Quote', text: 'Soreness settles in three days and asks nothing of you. Pain argues for three weeks — when it is the second kind, stop the lift and message a coach that afternoon.' },
        ],
      },
      {
        title: 'Deload every fourth week',
        blocks: [
          { type: 'P', text: 'Every fourth week the top sets drop to sixty percent of the weight and the accessory slot halves. You keep the same days and times, the technique stays sharp, and the week after you add again.' },
          {
            type: 'List',
            items: [
              'Week 4 — main lifts at 60% of the weight, three sets instead of five',
              'Keep your usual class times so the habit does not wobble',
              'Sleep and appetite settle during a deload; weigh in anyway',
            ],
          },
        ],
      },
      {
        title: 'Two weeks off, come back properly',
        blocks: [
          { type: 'P', text: 'Flu, work trips and new babies all happen. The rule on the board is simple: fewer than ten days away and you pick the programme up where you stopped; longer than that and you restart the cycle at seventy percent, because tendons forget faster than muscle does.' },
          {
            type: 'List',
            items: [
              'Under ten days off — repeat your last session at the same loads, then continue',
              'Ten days to a month — restart the cycle at 70% and build back over three weeks',
              'Longer than a month, book a return-to-lift session with Ruth before day one',
              'A chest cold: no hard sessions until you have been clear for 48 hours',
            ],
          },
          { type: 'Note', text: 'Missed a deload week while you were away? Take it when you land rather than skipping it — the recovery still counts even if the calendar has moved.' },
        ],
      },
    ],
    ctaTitle: 'Train around what your body is doing',
    ctaBody: 'Tell us your schedule, old injuries and how you sleep in the enquiry form. We will write a week that works around all three.',
  },
  {
    parent: 'forge',
    slug: 'timetable',
    title: 'The class timetable — every coached slot at Ironclad Strength',
    description: 'Coached class times, coach rota, booking windows and class caps for every day at Ironclad Strength, plus the quietest hours on the open floor.',
    kicker: 'Ironclad Strength · timetable',
    heading: 'The class timetable',
    lede: 'Seven days of coached classes around open floor from 05:00 to 23:00. Book up to seven days ahead; reception prints this same board every Sunday night.',
    variant: 'log',
    stats: [['05:00', 'doors open'], ['23:00', 'last entry'], ['6', 'coached classes a week']],
    sections: [
      {
        title: 'The week at a glance',
        blocks: [
          { type: 'P', text: 'This is the week as it is printed on the wall by the keycard readers: six coached slots, each with the coach who runs it. Everything else in the building during those hours is open floor, and the four racks nearest the platform stay reserved for the class that is in progress.' },
          {
            type: 'Table',
            head: ['Class', 'Days', 'Time', 'Length', 'Coach'],
            rows: [
              ['Squat Mechanics', 'Monday', '06:00', '60 min', 'Ruth Callahan'],
              ['Bench & Press', 'Wednesday', '06:00', '60 min', 'Ruth Callahan'],
              ['Olympic Lifting', 'Thursday', '19:00', '75 min', 'Ade Bankole'],
              ['Long Session', 'Saturday', '09:00', '90 min', 'Priya Raman'],
              ['Barbell Basics', 'Tuesday & Friday', '12:30', '45 min', 'Ade Bankole'],
              ['Coached open floor', 'Sunday', '10:00', '60 min', 'Priya Raman'],
            ],
          },
        ],
      },
      {
        title: 'Booking, waitlists and no-shows',
        blocks: [
          { type: 'P', text: 'Classes hold twelve lifters and book from the same account page you manage your membership on. The window opens exactly seven days ahead at 06:00, and the waitlist runs itself — when a place frees up the next name gets an email and the spot, not a phone call at midnight.' },
          {
            type: 'List',
            items: [
              'Twelve places a class; the window opens seven days ahead at 06:00',
              'Cancel free up to two hours before the start — after that it is a no-show',
              'Three no-shows in thirty days closes class booking for seven days',
              'Running late: the waitlist skips you once, then the place goes to the next name',
            ],
          },
          { type: 'Note', text: "The members' email goes out each Tuesday with the week ahead and the slots already open, so you can book from that instead of remembering the window." },
        ],
      },
      {
        title: 'Open floor between the classes',
        blocks: [
          { type: 'P', text: 'A class never closes the floor. From 05:00 to 23:00 the racks, platforms and machines are open to anyone with a keycard; the table above only tells you where a coach is standing. Before 06:00 and after 20:00 you will usually have a rack to yourself, and the hour either side of noon is the one to avoid if you are squatting.' },
          {
            type: 'List',
            items: [
              '05:00–06:00 and 20:00–23:00 — free racks, no queue for a platform',
              '12:00–13:30 and 17:30–19:30 — busiest; expect to share a rack or work in',
              'During a class, racks 1–4 belong to it and racks 5–8 stay open to everyone',
              'Platforms are free between classes; chalk lives on the wall, not in a bag',
            ],
          },
        ],
      },
      {
        title: 'Changes, closures and holidays',
        blocks: [
          { type: 'P', text: "Bank holidays run a reduced 08:00 to 14:00 timetable with the Long Session and open floor only, and any coach holiday is posted a fortnight ahead at reception and in the members' email. Emergency closures — burst pipes, power cuts — are announced the same way by 05:30." },
          {
            type: 'List',
            items: [
              'Bank holidays — 08:00 to 14:00, Long Session plus open floor',
              'Coach holidays posted 14 days ahead; that slot runs as open floor instead',
              'The 12:30 lunch class moves to 13:00 through July and August',
              'Emergency closures emailed by 05:30 and written on the door',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Check a slot before you join',
    ctaBody: 'Send the days and times you can usually make through the enquiry form on the landing page. A coach replies with the classes that fit and holds your first one.',
  },
  {
    parent: 'forge',
    slug: 'membership',
    title: 'Memberships — month to month at Ironclad Strength',
    description: 'Both Ironclad Strength plans priced in full: what the $49 open floor and $95 coached memberships include, how freezes and cancellations work, and the paid extras.',
    kicker: 'Ironclad Strength · membership',
    heading: 'Membership, priced',
    lede: 'Two plans, one price each, both month to month. What each includes, what it does not and everything that costs extra — written out before you fill in a form.',
    variant: 'cards',
    stats: [['$49', 'open floor'], ['$95', 'coached'], ['$16', 'day pass']],
    sections: [
      {
        title: 'The two plans',
        blocks: [
          { type: 'P', text: 'Open Floor is $49 a month and gets you the building, the equipment and every hour of it. Coached is $95 and adds the class board, the programme written for you and a coach who knows your lifts. Neither price hides a booking charge, a class fee or a limit on the hours you keep.' },
          {
            type: 'List',
            items: [
              'Open Floor — $49/month, every hour from 05:00 to 23:00, classes not included',
              'Coached — $95/month, everything in Open Floor plus all six weekly classes',
              'Students and unwaged — 20% off either plan, with a card checked each September',
              'A second membership at the same address — $10 off, billed on the same day',
            ],
          },
        ],
      },
      {
        title: 'Guests, day passes and drop-ins',
        blocks: [
          { type: 'P', text: 'Members bring one guest a month for free — sign them in at the desk with your keycard and they get open floor for the day. Anyone else pays $16 at the door, or $140 for a ten-visit pass that never expires. Guests cannot take a coached class unless a coach has screened them first.' },
          {
            type: 'List',
            items: [
              'One free guest per member per month, open floor hours only',
              'Day pass $16; ten-visit pass $140, both sold at the desk with no expiry',
              'Visiting lifters with a competition entry train free for the week before it',
              'Guests watch classes from the mezzanine unless a coach has cleared them to join',
            ],
          },
          { type: 'Note', text: 'Day passes and extra guests are added to your account from the enquiry form or the desk — there is no booking window for either.' },
        ],
      },
      {
        title: 'Freezes, cancellations and coming back',
        blocks: [
          { type: 'P', text: 'Cancelling takes a minute on the account page and runs to the end of the month you have already paid for — no letter, no phone call, no conversation about it. A freeze pauses the billing instead, which is the right answer for a holiday or a twisted ankle, and either way your lifting log stays put.' },
          {
            type: 'List',
            items: [
              'Cancel from the account page; access runs to the end of the month paid',
              'Freeze up to three months a year at no charge, starting the day you email',
              'Longer freezes are $10 a month and keep your programme and class history',
              "Prices rise at most once a year, always with 30 days' notice by email",
              'Rejoin within six months and you pick the same programme back up',
            ],
          },
        ],
      },
      {
        title: 'What costs extra',
        blocks: [
          { type: 'P', text: 'Some things cost money and we would rather print them here than surprise you at the desk. One-to-one coaching is $65 an hour with any of the three permanent coaches, and the only other paid extras are the ones somebody else has to do for you.' },
          {
            type: 'List',
            items: [
              'One-to-one coaching — $65/hour, booked in 30 or 60 minute slots',
              "Return-to-lift with Ruth Callahan — $50, run from your physio's report",
              'Programme written and revised each block — included on Coached, $30 on Open Floor',
              'A coach on the platform at your meet — free, ask a fortnight ahead',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Ask about a plan',
    ctaBody: 'Put Open Floor or Coached in the enquiry form with the week you want to start. We reply with the exact price, what is included and how the free week is claimed.',
  },
];
