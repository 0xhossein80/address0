//! Atelier Noir shopping bag — client cart with localStorage persistence.

export interface CartLine {
  id: string;
  name: string;
  kind: string;
  /** Unit price in whole dollars. */
  price: number;
  qty: number;
}

const KEY = 'atelier-cart-v1';

let lines: CartLine[] = read();
const listeners = new Set<() => void>();

function read(): CartLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (l) =>
        l &&
        typeof l.id === 'string' &&
        typeof l.name === 'string' &&
        typeof l.price === 'number' &&
        typeof l.qty === 'number' &&
        l.qty > 0,
    );
  } catch {
    return [];
  }
}

function write(): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* private mode: in-memory only */
  }
  for (const fn of listeners) fn();
}

export function parsePrice(label: string): number {
  const n = Number(label.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

export function money(n: number): string {
  return `$${n.toLocaleString('en-US')}`;
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function getLines(): CartLine[] {
  return lines;
}

export function count(): number {
  return lines.reduce((sum, l) => sum + l.qty, 0);
}

export function subtotal(): number {
  return lines.reduce((sum, l) => sum + l.price * l.qty, 0);
}

/** Free domestic shipping over $120 — matches the delivery copy. */
export const FREE_SHIP_OVER = 120;

export function shipping(): number {
  const sub = subtotal();
  if (sub === 0 || sub >= FREE_SHIP_OVER) return 0;
  return 12;
}

export function total(): number {
  return subtotal() + shipping();
}

export function qtyOf(id: string): number {
  return lines.find((l) => l.id === id)?.qty ?? 0;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function add(product: { name: string; kind: string; price: string }): CartLine {
  const id = slugify(product.name);
  const price = parsePrice(product.price);
  const existing = lines.find((l) => l.id === id);
  if (existing) {
    lines = lines.map((l) => (l.id === id ? { ...l, qty: Math.min(l.qty + 1, 9) } : l));
  } else {
    lines = [...lines, { id, name: product.name, kind: product.kind, price, qty: 1 }];
  }
  write();
  return lines.find((l) => l.id === id)!;
}

export function setQty(id: string, qty: number): void {
  if (qty <= 0) {
    lines = lines.filter((l) => l.id !== id);
  } else {
    lines = lines.map((l) => (l.id === id ? { ...l, qty: Math.min(qty, 9) } : l));
  }
  write();
}

export function remove(id: string): void {
  lines = lines.filter((l) => l.id !== id);
  write();
}

export function clear(): void {
  lines = [];
  write();
}

export function summaryText(): string {
  if (lines.length === 0) return '';
  return lines.map((l) => `${l.qty}× ${l.name} (${money(l.price * l.qty)})`).join(', ');
}
