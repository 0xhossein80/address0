export type GroupStyle = 'cards' | 'chips' | 'times';

export interface Choice {
  value: string;
  label: string;
  note: string;
}

export interface ChoiceGroup {
  legend: string;
  field: string;
  style: GroupStyle;
  choices: Choice[];
}

export interface Day {
  iso: string;
  dom: string;
  available: boolean;
  note: string;
}

export interface Month {
  title: string;
  slots: (Day | null)[];
}

export interface Stepper {
  field: string;
  label: string;
  min: number;
  max: number;
  start: number;
  unit: string;
}

export interface Booking {
  id: string;
  flavor: string;
  kicker: string;
  title: string;
  lede: string;
  rail: [string, string][];
  dateField: string;
  dateNote: string;
  groups: ChoiceGroup[];
  steppers: Stepper[];
  foot: string;
}

// ------------------------------------------------------------ date helpers

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function idiv(a: number, b: number): number {
  return Math.trunc(a / b);
}

function daysFromCivil(y: number, m: number, d: number): number {
  const yAdj = y - (m <= 2 ? 1 : 0);
  const era = idiv(yAdj >= 0 ? yAdj : yAdj - 399, 400);
  const yoe = yAdj - era * 400;
  const doy = idiv(153 * (m + (m > 2 ? -3 : 9)) + 2, 5) + d - 1;
  const doe = yoe * 365 + idiv(yoe, 4) - idiv(yoe, 100) + doy;
  return era * 146097 + doe - 719468;
}

function civilFromDays(zIn: number): [number, number, number] {
  const z = zIn + 719468;
  const era = idiv(z >= 0 ? z : z - 146096, 146097);
  const doe = z - era * 146097;
  const yoe = idiv(doe - idiv(doe, 1460) + idiv(doe, 36524) - idiv(doe, 146096), 365);
  const y = yoe + era * 400;
  const doy = doe - (365 * yoe + idiv(yoe, 4) - idiv(yoe, 100));
  const mp = idiv(5 * doy + 2, 153);
  const d = doy - idiv(153 * mp + 2, 5) + 1;
  const m = mp < 10 ? mp + 3 : mp - 9;
  return [y + (m <= 2 ? 1 : 0), m, d];
}

function todayDays(): number {
  const now = Date.now();
  if (!Number.isFinite(now)) return 20000;
  return Math.floor(now / 86400000);
}

function dowOf(days: number): number {
  return (((days % 7) + 4 + 7) % 7); // 0 = Sunday
}

function pad(n: number, width: number): string {
  let s = String(n);
  while (s.length < width) s = '0' + s;
  return s;
}

function calendar(open: number[], count: number): Month[] {
  const today = todayDays();
  const [ty, tm] = civilFromDays(today);
  const first = daysFromCivil(ty, tm, 1);
  const out: Month[] = [];

  for (let m = 0; m < count; m++) {
    const anchor = first + m * 32;
    let [y, mon] = civilFromDays(anchor);
    if (mon > 12) {
      y = y + 1;
      mon = mon - 12;
    }
    const firstOf = daysFromCivil(y, mon, 1);
    const lead = (dowOf(firstOf) + 6) % 7; // Monday-first column
    const daysInMonth =
      mon === 12
        ? daysFromCivil(y + 1, 1, 1) - firstOf
        : daysFromCivil(y, mon + 1, 1) - firstOf;

    const slots: (Day | null)[] = [];
    for (let i = 0; i < lead; i++) {
      slots.push(null);
    }
    for (let dom = 0; dom < daysInMonth; dom++) {
      const days = firstOf + dom;
      const d = civilFromDays(days)[2];
      const dow = dowOf(days);
      const past = days < today;
      const closed = !open.includes(dow);
      const busy = (days * 2654435761) % 13 < 3;
      const available = !past && !closed && !busy;
      let note: string;
      if (past || closed) {
        note = '';
      } else if (busy) {
        note = 'full';
      } else if (days === today) {
        note = 'tonight';
      } else if ((days - today) % 7 === 0) {
        note = 'two left';
      } else {
        note = '';
      }
      slots.push({
        iso: `${pad(y, 4)}-${pad(mon, 2)}-${pad(d, 2)}`,
        dom: String(d),
        available,
        note,
      });
    }
    while (slots.length % 7 !== 0) {
      slots.push(null);
    }
    out.push({
      title: `${MONTHS[mon - 1]} ${y}`,
      slots,
    });
  }
  return out;
}

// ------------------------------------------------------------- the ten books

export function bookingFor(slug: string): Booking | undefined {
  const booking = ((): Booking | undefined => {
    switch (slug) {
      case 'roastery':
        return {
          id: 'roastery-dispatch',
          flavor: 'dispatch',
          kicker: 'Step 01 — the standing order',
          title: 'Set up your dispatch',
          lede: 'Pick the plan and how it should arrive. We roast Thursday morning and the bag leaves the same afternoon.',
          rail: [
            ['01', 'Choose a plan'],
            ['02', 'Pick the grind'],
            ['03', 'First bag ships Thursday'],
          ],
          dateField: '',
          dateNote: '',
          groups: [
            {
              legend: 'Plan',
              field: 'plan',
              style: 'cards',
              choices: [
                { value: 'The Drifter — $16/mo', label: 'The Drifter', note: '1 × 250g, one origin' },
                { value: 'The Regular — $29/mo', label: 'The Regular', note: '2 × 250g, you pick' },
                { value: 'The Counter — $54/mo', label: 'The Counter', note: '3 × 250g + filter pack' },
              ],
            },
            {
              legend: 'Grind',
              field: 'brew',
              style: 'chips',
              choices: [
                { value: 'Whole bean', label: 'Whole bean', note: 'grinds best, keeps longest' },
                { value: 'Espresso', label: 'Espresso', note: '' },
                { value: 'Filter', label: 'Filter', note: '' },
                { value: 'Plunger', label: 'Plunger', note: '' },
                { value: 'Moka', label: 'Moka', note: '' },
              ],
            },
          ],
          steppers: [],
          foot: 'Nothing is charged until we email the first roast date.',
        };

      case 'forge':
        return {
          id: 'forge-timetable',
          flavor: 'timetable',
          kicker: 'Step 01 — the free week',
          title: 'Pick your first session',
          lede: 'Choose the session a coach walks you through. After that the whole board is yours for seven days.',
          rail: [
            ['01', 'Pick a session'],
            ['02', 'Claim the week'],
            ['03', 'Ten minutes early, no more'],
          ],
          dateField: '',
          dateNote: '',
          groups: [
            {
              legend: 'First session',
              field: 'session',
              style: 'times',
              choices: [
                { value: 'Squat Mechanics (Mon 06:00)', label: 'Squat Mechanics', note: 'Mon · 06:00 · 60 min' },
                { value: 'Conditioning Circuit (Tue 18:30)', label: 'Conditioning Circuit', note: 'Tue · 18:30 · 45 min' },
                { value: 'Bench & Press (Wed 06:00)', label: 'Bench & Press', note: 'Wed · 06:00 · 60 min' },
                { value: 'Olympic Lifting (Thu 19:00)', label: 'Olympic Lifting', note: 'Thu · 19:00 · 75 min' },
                { value: 'Long Session (Sat 09:00)', label: 'Long Session', note: 'Sat · 09:00 · 90 min' },
                { value: 'Open floor only', label: 'Open floor only', note: 'no coach, your own numbers' },
              ],
            },
            {
              legend: 'Membership after the week',
              field: 'plan',
              style: 'chips',
              choices: [
                { value: 'Open Floor — $49/mo', label: 'Open Floor', note: '$49/mo' },
                { value: 'Coached — $119/mo', label: 'Coached', note: '$119/mo · groups of six' },
                { value: 'Drop-in — $18', label: 'Drop-in', note: '$18 a session' },
              ],
            },
            {
              legend: 'Experience',
              field: 'experience',
              style: 'chips',
              choices: [
                { value: 'Never lifted', label: 'Never lifted', note: 'we start with an empty bar' },
                { value: 'Some experience', label: 'Some experience', note: '' },
                { value: 'Returning after a break', label: 'Back after a break', note: '' },
                { value: 'Regular lifter', label: 'Regular lifter', note: '' },
              ],
            },
          ],
          steppers: [],
          foot: 'One free week per person. Trainers and water; we have the rest.',
        };

      case 'haven':
        return {
          id: 'haven-valuation',
          flavor: 'valuation',
          kicker: 'Step 01 — the visit',
          title: 'When should we come by?',
          lede: 'Forty minutes at the property and a written figure the same week. Pick a day and we will confirm the hour by phone.',
          rail: [
            ['01', 'Choose a day'],
            ['02', 'Tell us about the place'],
            ['03', 'Written figure the same week'],
          ],
          dateField: 'visit',
          dateNote: 'Weekdays and Saturday mornings — we price on Sundays.',
          groups: [
            {
              legend: 'Property type',
              field: 'property',
              style: 'chips',
              choices: [
                { value: 'Townhouse', label: 'Townhouse', note: 'wall-to-wall garden' },
                { value: 'Loft', label: 'Loft', note: 'warehouse conversions' },
                { value: 'Coastal', label: 'Coastal', note: 'salt air, sea views' },
                { value: 'Garden flat', label: 'Garden flat', note: 'own door, lower ground' },
                { value: 'Apartment', label: 'Apartment', note: 'consent checked' },
                { value: 'Other', label: 'Other', note: 'describe it below' },
              ],
            },
            {
              legend: 'Timeline',
              field: 'timeline',
              style: 'chips',
              choices: [
                { value: 'Just curious', label: 'Just curious', note: 'no deadline' },
                { value: 'Within 3 months', label: 'Within 3 months', note: '' },
                { value: 'Within 6 months', label: 'Within 6 months', note: '' },
                { value: 'Ready now', label: 'Ready now', note: 'instruct us this week' },
              ],
            },
          ],
          steppers: [],
          foot: 'The valuation is free and carries no obligation to instruct us.',
        };

      case 'brightside':
        return {
          id: 'brightside-slots',
          flavor: 'slots',
          kicker: 'Step 01 — the appointment',
          title: 'Treatment, day, time',
          lede: 'Three taps. The desk texts two concrete times back — usually within two hours of the request.',
          rail: [],
          dateField: '',
          dateNote: '',
          groups: [
            {
              legend: 'Treatment',
              field: 'treatment',
              style: 'cards',
              choices: [
                { value: 'Check-up & clean', label: 'Check-up & clean', note: '45 minutes' },
                { value: 'Whitening', label: 'Whitening', note: '60 minutes' },
                { value: 'Clear aligners', label: 'Clear aligners', note: 'consult comes first' },
                { value: 'Same-day crown', label: 'Same-day crown', note: 'mornings only' },
                { value: 'Something is hurting', label: 'Something is hurting', note: 'we hold emergencies' },
              ],
            },
            {
              legend: 'Preferred day',
              field: 'day',
              style: 'chips',
              choices: [
                { value: 'Monday', label: 'Mon', note: '' },
                { value: 'Tuesday', label: 'Tue', note: '' },
                { value: 'Wednesday', label: 'Wed', note: '' },
                { value: 'Thursday', label: 'Thu', note: '' },
                { value: 'Friday', label: 'Fri', note: '' },
                { value: 'Saturday', label: 'Sat', note: '8:00–13:00' },
                { value: 'First available', label: 'Soonest', note: 'whenever a chair frees' },
              ],
            },
            {
              legend: 'Time of day',
              field: 'time',
              style: 'times',
              choices: [
                { value: 'Morning — 9:00–12:30', label: 'Morning', note: '9:00–12:30' },
                { value: 'Early afternoon — 13:00–15:30', label: 'Early afternoon', note: '13:00–15:30' },
                { value: 'Late afternoon — 15:30–18:00', label: 'Late afternoon', note: '15:30–18:00' },
                { value: 'First available', label: 'Soonest', note: 'first chair going' },
              ],
            },
          ],
          steppers: [],
          foot: 'In pain right now? Call the desk — same-day slots are held back every morning.',
        };

      case 'verity':
        return {
          id: 'verity-consult',
          flavor: 'consult',
          kicker: 'Step 01 — the matter',
          title: 'What is it about?',
          lede: 'Two taps and a paragraph. A partner picks the file up within two working hours of office time.',
          rail: [
            ['01', 'Name the matter'],
            ['02', 'How urgent it is'],
            ['03', 'Reply within two working hours'],
          ],
          dateField: '',
          dateNote: '',
          groups: [
            {
              legend: 'Matter',
              field: 'matter',
              style: 'cards',
              choices: [
                { value: 'Commercial dispute', label: 'Commercial dispute', note: 'contracts, breaches' },
                { value: 'Shareholder matter', label: 'Shareholder matter', note: 'deadlock, exits' },
                { value: 'Employment', label: 'Employment', note: 'advisory or tribunal' },
                { value: 'Private wealth', label: 'Private wealth', note: 'trusts, estates' },
                { value: 'Something else', label: 'Something else', note: 'we will route it' },
              ],
            },
            {
              legend: 'Urgency',
              field: 'urgency',
              style: 'chips',
              choices: [
                { value: 'Within 24 hours', label: 'Within 24 hours', note: 'red file' },
                { value: 'This week', label: 'This week', note: '' },
                { value: 'This month', label: 'This month', note: '' },
                { value: 'Exploring options', label: 'Exploring options', note: 'no deadline' },
              ],
            },
          ],
          steppers: [],
          foot: 'A fixed-fee quote comes back with the first reply — no hourly meter until you say go.',
        };

      case 'saffron':
        return {
          id: 'saffron-table',
          flavor: 'table',
          kicker: 'Step 01 — the table',
          title: 'Night, sitting, party',
          lede: 'The board is written each morning. Pick a night — the kitchen buys for the numbers standing on it.',
          rail: [
            ['01', 'Pick a night'],
            ['02', 'Choose a sitting'],
            ['03', 'How many of you'],
          ],
          dateField: 'date',
          dateNote: 'Tuesday to Saturday. Sunday lunch is one long table at noon.',
          groups: [
            {
              legend: 'Sitting',
              field: 'seating',
              style: 'times',
              choices: [
                { value: '17:30 — first seating', label: '17:30', note: 'first seating · eight tables' },
                { value: '20:15 — second seating', label: '20:15', note: 'second seating · the louder room' },
                { value: 'Sunday lunch, 12:00–15:00', label: 'Sunday lunch', note: '12:00–15:00 · one table' },
                { value: 'No preference', label: 'No preference', note: 'we seat the night we have' },
              ],
            },
          ],
          steppers: [
            {
              field: 'party',
              label: 'Party size',
              min: 1,
              max: 8,
              start: 2,
              unit: 'guests',
            },
          ],
          foot: 'Walk-ins: six stools at the bar stay free every night.',
        };

      case 'wanderly':
        return {
          id: 'wanderly-trip',
          flavor: 'trip',
          kicker: 'Step 01 — the route',
          title: 'Where are you drawn?',
          lede: 'Pick the trip — or none of them — and the window you are working with. A planner writes back within 48 hours.',
          rail: [],
          dateField: '',
          dateNote: '',
          groups: [
            {
              legend: 'Trip',
              field: 'trip',
              style: 'cards',
              choices: [
                { value: 'Kyoto in Autumn — Japan', label: 'Kyoto in Autumn', note: 'temple mornings, market nights' },
                { value: 'Atlas & Sahara — Morocco', label: 'Atlas & Sahara', note: 'camels, kasbahs, cold dunes' },
                { value: 'Faroe Weather — Faroe Islands', label: 'Faroe Weather', note: 'weather as the main event' },
                { value: 'Patagonia South — Chile', label: 'Patagonia South', note: 'wind, guanaco, granite' },
                { value: 'Something else entirely', label: 'Something else entirely', note: 'start from zero' },
              ],
            },
            {
              legend: 'When',
              field: 'window',
              style: 'chips',
              choices: [
                { value: 'Next 3 months', label: 'Next 3 months', note: '' },
                { value: '3–6 months', label: '3–6 months', note: 'safest for flights' },
                { value: '6–12 months', label: '6–12 months', note: '' },
                { value: 'Just dreaming', label: 'Just dreaming', note: 'no date at all' },
              ],
            },
          ],
          steppers: [
            {
              field: 'travellers',
              label: 'Travellers',
              min: 1,
              max: 12,
              start: 2,
              unit: 'travellers',
            },
          ],
          foot: 'No deposit until you have seen an itinerary you actually love.',
        };

      case 'loop':
        return {
          id: 'loop-signup',
          flavor: 'signup',
          kicker: 'Step 01 — the workspace',
          title: 'Set the account up',
          lede: 'Free forever under fifty thousand events a month. Pick a plan and a team size — nothing is charged today.',
          rail: [],
          dateField: '',
          dateNote: '',
          groups: [
            {
              legend: 'Plan',
              field: 'plan',
              style: 'cards',
              choices: [
                { value: 'Side Project — $0', label: 'Side Project', note: '50k events · one project' },
                { value: 'Team — $79/mo', label: 'Team', note: 'unlimited projects · alerts' },
                { value: 'Scale — $249/mo', label: 'Scale', note: 'SSO · audit log' },
              ],
            },
            {
              legend: 'Team size',
              field: 'team',
              style: 'chips',
              choices: [
                { value: 'Just me', label: 'Just me', note: '' },
                { value: '2–10', label: '2–10', note: '' },
                { value: '11–50', label: '11–50', note: '' },
                { value: '51–200', label: '51–200', note: '' },
                { value: '200+', label: '200+', note: '' },
              ],
            },
            {
              legend: 'Coming from',
              field: 'current',
              style: 'chips',
              choices: [
                { value: 'Amplitude', label: 'Amplitude', note: '' },
                { value: 'Mixpanel', label: 'Mixpanel', note: '' },
                { value: 'Google Analytics', label: 'Google Analytics', note: '' },
                { value: 'Segment', label: 'Segment', note: '' },
                { value: 'Spreadsheets', label: 'Spreadsheets', note: 'we have all been there' },
                { value: 'Nothing yet', label: 'Nothing yet', note: '' },
              ],
            },
          ],
          steppers: [],
          foot: 'A card is only needed when you leave the free tier — and we ask first.',
        };

      case 'lumen':
        return {
          id: 'lumen-calendar',
          flavor: 'calendar',
          kicker: 'Step 01 — the date',
          title: 'Hold a day on the board',
          lede: 'The studio runs Tuesday to Saturday. Pick a date and a package — we hold the slot for forty-eight hours.',
          rail: [
            ['01', 'Pick a date'],
            ['02', 'Package and shoot'],
            ['03', 'Deposit 30%, refundable to 48h'],
          ],
          dateField: 'date',
          dateNote: 'Mondays we edit — the board starts again on Tuesday.',
          groups: [
            {
              legend: 'Package',
              field: 'package',
              style: 'cards',
              choices: [
                { value: 'Portrait Hour — $340', label: 'Portrait Hour', note: '$340 · one look, one hour' },
                { value: 'Product Day — $1,150', label: 'Product Day', note: '$1,150 · styling included' },
                { value: 'Editorial — POA', label: 'Editorial', note: 'half or full day' },
              ],
            },
            {
              legend: 'Shoot type',
              field: 'shoot',
              style: 'chips',
              choices: [
                { value: 'People', label: 'People', note: '' },
                { value: 'Product', label: 'Product', note: '' },
                { value: 'Interiors', label: 'Interiors', note: '' },
                { value: 'Editorial', label: 'Editorial', note: '' },
              ],
            },
          ],
          steppers: [],
          foot: 'The deposit is refundable up to forty-eight hours before the shoot.',
        };

      case 'atelier':
        return {
          id: 'atelier-fitting',
          flavor: 'fitting',
          kicker: 'Step 01 — the fitting room',
          title: 'Book the fitting room',
          lede: 'Twenty minutes, one rail, honest opinions. Pick a day and we will hold the room for you.',
          rail: [
            ['01', 'Choose a day'],
            ['02', 'The piece and size'],
            ['03', 'Alterations quoted same day'],
          ],
          dateField: 'fitting',
          dateNote: 'Tuesday to Saturday, by appointment only — the room is never shared.',
          groups: [
            {
              legend: 'Piece',
              field: 'piece',
              style: 'chips',
              choices: [
                { value: 'The Field Coat', label: 'The Field Coat', note: '' },
                { value: 'Wool Overshirt', label: 'Wool Overshirt', note: '' },
                { value: 'Poplin Shirt', label: 'Poplin Shirt', note: '' },
                { value: 'Pleated Trouser', label: 'Pleated Trouser', note: '' },
                { value: 'Merino Rollneck', label: 'Merino Rollneck', note: '' },
                { value: 'The Tote', label: 'The Tote', note: '' },
                { value: 'All of them', label: 'Bring them all', note: 'the whole capsule' },
              ],
            },
            {
              legend: 'Size',
              field: 'size',
              style: 'chips',
              choices: [
                { value: 'XS', label: 'XS', note: '' },
                { value: 'S', label: 'S', note: '' },
                { value: 'M', label: 'M', note: '' },
                { value: 'L', label: 'L', note: '' },
                { value: 'XL', label: 'XL', note: '' },
                { value: 'Not sure yet', label: 'Not sure yet', note: 'we measure there' },
              ],
            },
          ],
          steppers: [],
          foot: 'Nothing goes on sale — the fitting is where the decision happens.',
        };

      default:
        return undefined;
    }
  })();

  return booking;
}

/// Calendar months for a booking (empty when the booking has no date field).
export function monthsFor(booking: Booking): Month[] {
  if (booking.dateField === '') {
    return [];
  }
  let open: number[];
  switch (booking.id) {
    case 'saffron-table':
    case 'atelier-fitting':
    case 'lumen-calendar':
      open = [2, 3, 4, 5, 6];
      break;
    case 'haven-valuation':
      open = [1, 2, 3, 4, 5, 6];
      break;
    default:
      open = [1, 2, 3, 4, 5, 6];
      break;
  }
  return calendar(open, 2);
}
