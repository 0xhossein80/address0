/// Per-landing enquiry forms: field specs and validation, ported from
/// `src/forms.rs`. Every landing page posts to the enquiry endpoint; the spec
/// here is what the page renders and what `validate` checks against.

export type FieldKind = 'text' | 'email' | 'tel' | 'date' | 'number' | 'select' | 'textarea';

export interface Field {
  name: string;
  label: string;
  kind: FieldKind;
  options: string[];
  required: boolean;
  placeholder: string;
  autocomplete: string;
  max: number;
  /** Spans the full width of the form grid. */
  wide: boolean;
}

export function inputType(kind: FieldKind): string {
  switch (kind) {
    case 'email':
      return 'email';
    case 'tel':
      return 'tel';
    case 'date':
      return 'date';
    case 'number':
      return 'number';
    case 'select':
    case 'textarea':
    case 'text':
      return 'text';
  }
}

export function isSelect(kind: FieldKind): boolean {
  return kind === 'select';
}

export function isTextarea(kind: FieldKind): boolean {
  return kind === 'textarea';
}

export function fieldId(field: Field, page: string): string {
  return `${page}-${field.name}`;
}

export interface FormSpec {
  id: string;
  title: string;
  blurb: string;
  submit: string;
  success: string;
  note: string;
  fields: Field[];
}

/** Convenience constructor for a required single-line text field. */
function text(name: string, label: string, autocomplete: string): Field {
  return {
    name,
    label,
    kind: 'text',
    options: [],
    required: true,
    placeholder: '',
    autocomplete,
    max: 80,
    wide: false,
  };
}

function optional(field: Field): Field {
  return { ...field, required: false };
}

function email(): Field {
  return {
    name: 'email',
    label: 'Email',
    kind: 'email',
    options: [],
    required: true,
    placeholder: 'you@example.com',
    autocomplete: 'email',
    max: 120,
    wide: false,
  };
}

function tel(): Field {
  return {
    name: 'phone',
    label: 'Phone',
    kind: 'tel',
    options: [],
    required: false,
    placeholder: 'Optional',
    autocomplete: 'tel',
    max: 40,
    wide: false,
  };
}

function select(name: string, label: string, options: string[], required: boolean): Field {
  return {
    name,
    label,
    kind: 'select',
    options,
    required,
    placeholder: 'Choose one…',
    autocomplete: 'off',
    max: 80,
    wide: false,
  };
}

function notes(name: string, label: string, placeholder: string): Field {
  return {
    name,
    label,
    kind: 'textarea',
    options: [],
    required: false,
    placeholder,
    autocomplete: 'off',
    max: 800,
    wide: true,
  };
}

function date(name: string, label: string, required: boolean): Field {
  return {
    name,
    label,
    kind: 'date',
    options: [],
    required,
    placeholder: '',
    autocomplete: 'off',
    max: 40,
    wide: false,
  };
}

const SPECS: Record<string, FormSpec> = {
  // 1. Coffee roastery — subscription sign-up
  roastery: {
    id: 'subscribe',
    title: 'Start a subscription',
    blurb:
      'Tell us how you brew and we grind that bag to order. The first dispatch is the Friday after you join.',
    submit: 'Start my subscription',
    success: 'Saved. A confirmation with your first roast date is on its way.',
    note: 'Pause, skip or cancel from the email we send before each dispatch.',
    fields: [
      email(),
      text('name', 'Name', 'name'),
      select('plan', 'Plan', [
        'The Drifter — $16/mo',
        'The Regular — $29/mo',
        'The Counter — $54/mo',
      ], true),
      select('brew', 'Grind', ['Whole bean', 'Espresso', 'Filter', 'Plunger', 'Moka'], true),
      notes('message', 'Anything else?', 'Delivery day, a grind we do not list, a note for us…'),
    ],
  },

  // 2. Gym — free week pass
  forge: {
    id: 'trial',
    title: 'Claim a free week',
    blurb: 'No card, no contract. A coach confirms your first session within one working day.',
    submit: 'Claim my free week',
    success:
      'You are in. A coach will email you a slot for your first session — check spam if it is not there within a day.',
    note: 'One free week per person. Bring trainers and a water bottle; everything else is here.',
    fields: [
      text('name', 'Name', 'name'),
      email(),
      tel(),
      select('session', 'First session', [
        'Squat Mechanics (Mon 06:00)',
        'Conditioning Circuit (Tue 18:30)',
        'Bench & Press (Wed 06:00)',
        'Olympic Lifting (Thu 19:00)',
        'Long Session (Sat 09:00)',
        'Open floor only',
      ], true),
      select('plan', 'Membership', [
        'Open Floor — $49/mo',
        'Coached — $119/mo',
        'Drop-in — $18',
      ], false),
      select('experience', 'Experience', [
        'Never lifted',
        'Some experience',
        'Returning after a break',
        'Regular lifter',
      ], true),
    ],
  },

  // 3. Real estate — valuation request
  haven: {
    id: 'valuation',
    title: 'Book a valuation',
    blurb:
      'Forty minutes at your home and a written figure the same week. Free, with no obligation to instruct us.',
    submit: 'Request my valuation',
    success:
      'Request received. An agent will call to arrange a time — usually the same working day.',
    note: 'Your details stay with us. No third parties, no mailing list, no door-knocking.',
    fields: [
      text('name', 'Name', 'name'),
      email(),
      tel(),
      {
        name: 'address',
        label: 'Property address',
        kind: 'text',
        options: [],
        required: true,
        placeholder: 'Street and suburb',
        autocomplete: 'street-address',
        max: 160,
        wide: true,
      },
      select('property', 'Property type', [
        'Townhouse',
        'Loft',
        'Coastal',
        'Garden flat',
        'Apartment',
        'Other',
      ], true),
      select('timeline', 'Timeline', [
        'Just curious',
        'Within 3 months',
        'Within 6 months',
        'Ready now',
      ], true),
      date('visit', 'Preferred visit day', false),
    ],
  },

  // 4. Dental clinic — appointment request
  brightside: {
    id: 'appointment',
    title: 'Request an appointment',
    blurb: 'Pick the treatment and a day that suits. The desk confirms by SMS, usually within two hours.',
    submit: 'Request appointment',
    success: 'Request sent. We will text you two available times — reply to one and it is booked.',
    note: 'In pain today? Call the desk instead and we will fit you in the same day.',
    fields: [
      text('name', 'Name', 'name'),
      email(),
      tel(),
      select('treatment', 'Treatment', [
        'Check-up & clean',
        'Whitening',
        'Clear aligners',
        'Same-day crown',
        'Something is hurting',
      ], true),
      select('day', 'Preferred day', [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'First available',
      ], true),
      select('time', 'Preferred time', [
        'Morning — 9:00–12:30',
        'Early afternoon — 13:00–15:30',
        'Late afternoon — 15:30–18:00',
        'First available',
      ], false),
      notes('notes', 'Notes for the dentist', 'Nerves, medications, what you would like to change…'),
    ],
  },

  // 5. Law firm — consultation request
  verity: {
    id: 'consultation',
    title: 'Request a consultation',
    blurb: 'Send the outline of the matter and a partner replies within two working hours.',
    submit: 'Send my enquiry',
    success:
      'Enquiry received. A partner will reply within two working hours during office hours.',
    note:
      'Please hold off on confidential documents — we confirm we can act before anything sensitive is shared.',
    fields: [
      text('name', 'Name', 'name'),
      email(),
      select('matter', 'Matter', [
        'Commercial dispute',
        'Shareholder matter',
        'Employment',
        'Private wealth',
        'Something else',
      ], true),
      select('urgency', 'Urgency', [
        'Within 24 hours',
        'This week',
        'This month',
        'Exploring options',
      ], true),
      {
        name: 'summary',
        label: 'In a paragraph or two',
        kind: 'textarea',
        options: [],
        required: true,
        placeholder: 'Who, what happened, what outcome you want…',
        autocomplete: 'off',
        max: 900,
        wide: true,
      },
    ],
  },

  // 6. Restaurant — table reservation
  saffron: {
    id: 'reservation',
    title: 'Hold a table',
    blurb:
      'Parties up to eight book right here. Larger groups: send a note and we call you back within the hour.',
    submit: 'Request reservation',
    success: 'Table requested. We confirm by email within the hour during opening hours.',
    note: 'Walk-ins are always welcome — six bar stools are kept free every night.',
    fields: [
      text('name', 'Name', 'name'),
      email(),
      tel(),
      date('date', 'Date', true),
      select('seating', 'Sitting', [
        '17:30 — first seating',
        '20:15 — second seating',
        'Sunday lunch, 12:00–15:00',
        'No preference',
      ], true),
      select('party', 'Party size', ['1', '2', '3', '4', '5', '6', '7', '8'], true),
      notes('notes', 'Dietary notes', 'Allergies, high chairs, a birthday…'),
    ],
  },

  // 7. Travel agency — trip enquiry
  wanderly: {
    id: 'plan',
    title: 'Plan a trip',
    blurb: 'Tell us the trip, the window and who is coming. A real planner writes back within 48 hours.',
    submit: 'Get my itinerary',
    success: 'On it. A planner will reply within 48 hours with questions and a first route.',
    note: 'No deposit and no obligation until you confirm an itinerary you actually love.',
    fields: [
      text('name', 'Name', 'name'),
      email(),
      select('trip', 'Trip', [
        'Kyoto in Autumn — Japan',
        'Atlas & Sahara — Morocco',
        'Faroe Weather — Faroe Islands',
        'Patagonia South — Chile',
        'Something else entirely',
      ], true),
      select('window', 'When', [
        'Next 3 months',
        '3–6 months',
        '6–12 months',
        'Just dreaming',
      ], true),
      {
        name: 'travellers',
        label: 'Travellers',
        kind: 'number',
        options: [],
        required: false,
        placeholder: '2',
        autocomplete: 'off',
        max: 10,
        wide: false,
      },
      notes('notes', 'What you want out of it', 'Dates, budget, who is coming, what you hate…'),
    ],
  },

  // 8. SaaS — free trial
  loop: {
    id: 'trial',
    title: 'Start free',
    blurb: '50,000 events a month, forever free. No card, and no sales call unless you ask for one.',
    submit: 'Create my workspace',
    success:
      'Check your inbox — your workspace link is on its way. Nothing in five minutes? Look in spam.',
    note:
      'Prefer a walkthrough? Reply to the welcome email and you will get a 20-minute recording instead.',
    fields: [
      {
        name: 'email',
        label: 'Work email',
        kind: 'email',
        options: [],
        required: true,
        placeholder: 'you@company.com',
        autocomplete: 'email',
        max: 120,
        wide: false,
      },
      text('name', 'Name', 'name'),
      select('team', 'Team size', ['Just me', '2–10', '11–50', '51–200', '200+'], true),
      select('plan', 'Plan you want', [
        'Side Project — $0',
        'Team — $79/mo',
        'Scale — $249/mo',
      ], true),
      select('current', 'Coming from', [
        'Amplitude',
        'Mixpanel',
        'Google Analytics',
        'Segment',
        'Spreadsheets',
        'Nothing yet',
      ], false),
    ],
  },

  // 9. Photography studio — shoot booking
  lumen: {
    id: 'shoot',
    title: 'Book a shoot',
    blurb: 'Give us the package and the date. We hold the slot for 48 hours while you confirm.',
    submit: 'Request this date',
    success: 'Date requested. A confirmation and a short prep list follow — usually the same day.',
    note: 'The deposit is 30% and refundable up to 48 hours before the shoot.',
    fields: [
      text('name', 'Name', 'name'),
      email(),
      select('package', 'Package', [
        'Portrait Hour — $340',
        'Product Day — $1,150',
        'Editorial — POA',
      ], true),
      select('shoot', 'Shoot type', ['People', 'Product', 'Interiors', 'Editorial'], true),
      date('date', 'Preferred date', false),
      notes('notes', 'Brief', 'What you need the images for, deadlines, references…'),
    ],
  },

  // 10. Fashion boutique — capsule list
  atelier: {
    id: 'list',
    title: 'Join the capsule list',
    blurb: 'Two emails a year, plus a note if a piece you saved is about to come back.',
    submit: 'Join the list',
    success:
      'You are on the list. The next email lands when Capsule 08 does — nothing before then.',
    note: 'Unsubscribe in one click. We never sell or share your address.',
    fields: [
      email(),
      optional(text('name', 'Name', 'name')),
      select('piece', 'Piece you are watching', [
        'The Field Coat',
        'Wool Overshirt',
        'Poplin Shirt',
        'Pleated Trouser',
        'Merino Rollneck',
        'The Tote',
        'All of them',
      ], false),
      select('size', 'Your size', ['XS', 'S', 'M', 'L', 'XL', 'Not sure yet'], false),
      date('fitting', 'Fitting day', false),
    ],
  },
};

/** The form spec for a landing slug, if that page has one. */
export function formFor(slug: string): FormSpec | undefined {
  return SPECS[slug];
}

/** A rejected submission: `(field label, message)` pairs. */
export interface Invalid {
  issues: [string, string][];
  message: string;
}

export type ValidationResult =
  | { ok: true; cleaned: [string, string][] }
  | { ok: false; invalid: Invalid };

function looksLikeEmail(value: string): boolean {
  const at = value.indexOf('@');
  if (at === -1) return false;
  const local = value.slice(0, at);
  const domain = value.slice(at + 1);
  return (
    local.length > 0 &&
    local.length <= 64 &&
    domain.length > 0 &&
    domain.includes('.') &&
    !domain.startsWith('.') &&
    !domain.endsWith('.') &&
    !domain.includes('..')
  );
}

function isTelChar(c: string): boolean {
  return (c >= '0' && c <= '9') || '+-() /.,'.includes(c);
}

function isInteger(raw: string): boolean {
  if (!/^[+-]?\d+$/.test(raw)) return false;
  const n = Number(raw);
  return Number.isSafeInteger(n);
}

/** Validate a submission against the spec that the page actually rendered. */
export function validate(
  slug: string,
  formId: string,
  data: Record<string, string>,
): ValidationResult {
  const spec = formFor(slug);
  if (!spec) {
    return { ok: false, invalid: { issues: [], message: 'This form does not exist on that page.' } };
  }

  if (spec.id !== formId) {
    return { ok: false, invalid: { issues: [], message: 'This form does not belong to that page.' } };
  }

  const issues: [string, string][] = [];
  const cleaned: [string, string][] = [];

  for (const field of spec.fields) {
    const raw = (data[field.name] ?? '').trim();

    if (raw.length === 0) {
      if (field.required) {
        issues.push([field.label, 'is required']);
      }
      continue;
    }

    if ([...raw].length > field.max) {
      issues.push([field.label, `is too long (limit ${field.max} characters)`]);
      continue;
    }

    switch (field.kind) {
      case 'email': {
        if (!looksLikeEmail(raw)) {
          issues.push([field.label, 'needs a valid email address']);
          continue;
        }
        break;
      }
      case 'tel': {
        if (![...raw].every(isTelChar)) {
          issues.push([field.label, 'needs a phone number']);
          continue;
        }
        break;
      }
      case 'number': {
        if (!isInteger(raw)) {
          issues.push([field.label, 'needs a number']);
          continue;
        }
        break;
      }
      case 'select': {
        if (!field.options.includes(raw)) {
          issues.push([field.label, 'is not one of the options']);
          continue;
        }
        break;
      }
      default:
        break;
    }

    cleaned.push([field.name, raw]);
  }

  if (issues.length === 0) {
    return { ok: true, cleaned };
  }
  return { ok: false, invalid: { issues, message: 'Please check the highlighted fields.' } };
}
