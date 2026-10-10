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

// ------------------------------------------------------------- the four books

export function bookingFor(slug: string): Booking | undefined {
  const booking = ((): Booking | undefined => {
    switch (slug) {
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
    default:
      open = [1, 2, 3, 4, 5, 6];
      break;
  }
  return calendar(open, 2);
}
