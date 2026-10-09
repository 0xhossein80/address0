/* Booking pickers: calendar days, choice groups and steppers that write into
   the enquiry form below. Pure document-level delegation — no module-scope
   DOM refs — so it survives the SPA body swap in transition.js. */
(() => {
  const formOf = (root) =>
    root.closest('form[data-enquiry]') || document.getElementById('enquire')?.querySelector('form[data-enquiry]') || null;

  const write = (form, field, value) => {
    if (!form || !field) return;
    const el = form.elements.namedItem(field);
    if (el) el.value = value;
  };

  const refresh = (root) => {
    const summary = root.querySelector('[data-bk-summary]');
    if (!summary) return;
    const parts = [];
    root.querySelectorAll('[data-bk-cal]').forEach((cal) => {
      const on = cal.querySelector('[data-bk-day].is-on');
      if (on) parts.push(on.dataset.bkValue);
    });
    root.querySelectorAll('[data-bk-group]').forEach((group) => {
      const on = group.querySelector('[data-bk-opt].is-on');
      if (on) {
        const label = on.querySelector('.bk-opt__label')?.textContent?.trim() || on.dataset.bkValue;
        parts.push(label);
      }
    });
    root.querySelectorAll('[data-bk-step]').forEach((step) => {
      const out = step.querySelector('[data-bk-out]');
      const label = step.querySelector('.bk-step__label')?.textContent?.trim() || step.dataset.bkField;
      if (out) parts.push(`${label}: ${out.textContent.trim()}`);
    });
    if (parts.length) {
      summary.textContent = parts.join(' · ');
      summary.classList.remove('is-empty');
    } else {
      summary.textContent = summary.dataset.bkEmpty || '';
      summary.classList.add('is-empty');
    }
  };

  document.addEventListener('click', (e) => {
    const opt = e.target.closest?.('[data-bk-opt]');
    if (opt) {
      const group = opt.closest('[data-bk-group]');
      const root = opt.closest('[data-booking]');
      if (!group || !root) return;
      group.querySelectorAll('[data-bk-opt]').forEach((b) => {
        b.classList.remove('is-on');
        b.setAttribute('aria-pressed', 'false');
      });
      opt.classList.add('is-on');
      opt.setAttribute('aria-pressed', 'true');
      write(formOf(root), group.dataset.bkField, opt.dataset.bkValue);
      refresh(root);
      return;
    }

    const day = e.target.closest?.('[data-bk-day]');
    if (day && !day.disabled) {
      const cal = day.closest('[data-bk-cal]');
      const root = day.closest('[data-booking]');
      if (!cal || !root) return;
      cal.querySelectorAll('[data-bk-day]').forEach((b) => {
        b.classList.remove('is-on');
        b.setAttribute('aria-pressed', 'false');
      });
      day.classList.add('is-on');
      day.setAttribute('aria-pressed', 'true');
      write(formOf(root), cal.dataset.bkField, day.dataset.bkValue);
      const picked = cal.querySelector('[data-bk-picked]');
      if (picked) picked.textContent = `Picked: ${day.dataset.bkValue}`;
      refresh(root);
      return;
    }

    const step = e.target.closest?.('[data-bk-step]');
    if (step && (e.target.closest('[data-bk-inc]') || e.target.closest('[data-bk-dec]'))) {
      const root = step.closest('[data-booking]');
      if (!root) return;
      const out = step.querySelector('[data-bk-out]');
      if (!out) return;
      const min = Number(step.dataset.bkMin || 1);
      const max = Number(step.dataset.bkMax || 99);
      const cur = Number(out.textContent.trim()) || Number(step.dataset.bkStart || min);
      const next = e.target.closest('[data-bk-inc]') ? Math.min(cur + 1, max) : Math.max(cur - 1, min);
      out.textContent = String(next);
      write(formOf(root), step.dataset.bkField, String(next));
      refresh(root);
    }
  });
})();
