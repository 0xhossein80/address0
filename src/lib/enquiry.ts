import { formFor, validate } from '../data/forms';

export interface EnquiryIssue {
  field: string;
  message: string;
}

export interface EnquiryResult {
  ok: boolean;
  ticket?: string;
  message: string;
  errors?: EnquiryIssue[];
}

/** Aggregate view of the local submission store (the old `GET /api/enquiry`). */
export interface EnquiryStats {
  total: number;
  latestTicket: string | null;
  latestAt: number | null;
  byPage: Record<string, number>;
}

const STORE_KEY = 'ten-enquiries-v1';

interface Stored {
  ticket: string;
  page: string;
  form: string;
  at: number;
}

function load(): { counter: number; items: Stored[] } {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { counter: number; items: Stored[] };
      if (typeof parsed.counter === 'number' && Array.isArray(parsed.items)) return parsed;
    }
  } catch {
    /* private mode or corrupt data: start fresh */
  }
  return { counter: 0, items: [] };
}

function save(state: { counter: number; items: Stored[] }): void {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch {
    /* private mode: keep the in-memory state only */
  }
}

/** The next ticket number, without recording anything (used for honeypot
 *  replies so a bot cannot tell them apart from the real thing). */
function reserveTicket(): string {
  const state = load();
  state.counter += 1;
  save(state);
  return `TL-${String(state.counter).padStart(4, '0')}`;
}

/** Record a submission and return its ticket number. */
function record(page: string, form: string): string {
  const ticket = reserveTicket();
  const state = load();
  state.items.push({ ticket, page, form, at: Math.floor(Date.now() / 1000) });
  if (state.items.length > 500) state.items = state.items.slice(-500);
  save(state);
  return ticket;
}

/** Totals per page plus the newest ticket. */
export function stats(): EnquiryStats {
  const { items } = load();
  const byPage: Record<string, number> = {};
  for (const item of items) byPage[item.page] = (byPage[item.page] ?? 0) + 1;
  return {
    total: items.length,
    latestTicket: items.length ? items[items.length - 1].ticket : null,
    latestAt: items.length ? items[items.length - 1].at : null,
    byPage,
  };
}

/** Same shape the old server answered with — validated against the spec the
 *  page rendered, stored locally, and reported with a ticket number. */
async function submit(data: Record<string, string>): Promise<EnquiryResult> {
  // Simulated round trip, so the busy state on the button still means something.
  await new Promise((resolve) => setTimeout(resolve, 350));

  // Honeypot filled in: bots get a convincing win and nothing is stored.
  if (data.website && data.website.trim().length > 0) {
    return { ok: true, ticket: reserveTicket(), message: 'Thanks — that is with us.' };
  }

  const page = data.page ?? '';
  const formId = data.form ?? '';
  const result = validate(page, formId, data);

  if (result.ok) {
    const spec = formFor(page);
    const ticket = record(page, formId);
    const message = spec ? spec.success : 'Thanks — that is with us.';
    return { ok: true, ticket, message };
  }

  return {
    ok: false,
    message: result.invalid.message,
    errors: result.invalid.issues.map(([field, message]) => ({ field, message })),
  };
}

/** Exposes the enquiry API to the vanilla enquiry.js submit handler. */
export function installEnquiryApi(): void {
  (window as unknown as { tenEnquiry: { submit: typeof submit } }).tenEnquiry = { submit };
}
