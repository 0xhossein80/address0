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
  // Restaurant — table reservation
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

  // Travel agency — trip enquiry
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

  // Photography studio — shoot booking
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

  // Photography studio — free shot prep sheet (lead magnet)
  'lumen-guide': {
    id: 'guide',
    title: 'Get the shot prep sheet',
    blurb:
      'One page: what to bring, how to prep products, and the timeline after the shutter. Free, no pitch deck attached.',
    submit: 'Send me the sheet',
    success:
      'The prep sheet is below — the same list we send every client before a shoot. A copy is on its way to your inbox.',
    note: 'One email with the sheet. Unsubscribe in one click. We never sell or share your address.',
    fields: [
      email(),
      optional(text('name', 'Name', 'name')),
      select(
        'shooting',
        'What are you shooting?',
        ['People', 'Product', 'Interiors', 'Editorial', 'Not sure yet'],
        false,
      ),
    ],
  },

  // Fashion boutique — bag checkout (AtelierCart drawer)
  'atelier-order': {
    id: 'order',
    title: 'Checkout',
    blurb:
      'Confirm the bag. We pack within two working days and email a tracking note when it leaves the workshop.',
    submit: 'Place order',
    success:
      'Order received. A confirmation is on its way — payment is captured when the piece is packed, not before.',
    note: 'Free domestic shipping over $120. Two years of repairs included.',
    fields: [
      email(),
      optional(text('name', 'Name on the parcel', 'name')),
      notes('items', 'Bag', ''),
      optional(notes('notes', 'Delivery notes', 'Occasion, gift note, safe place…')),
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
