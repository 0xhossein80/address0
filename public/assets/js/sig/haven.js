(() => {
  "use strict";

  window.__tenSig = window.__tenSig || {};

  function money(value) {
    if (!Number.isFinite(value) || value < 0) value = 0;
    return value.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    });
  }

  function read(root, selector, fallback, min, max) {
    const el = root.querySelector(selector);
    let value = el ? parseFloat(el.value) : NaN;
    if (!Number.isFinite(value)) value = fallback;
    return Math.min(max, Math.max(min, value));
  }

  function render(root) {
    const price = read(root, 'input[name="ha-price"]', 450000, 100000, 2000000);
    const deposit = read(root, 'input[name="ha-deposit"]', 15, 1, 50);
    const term = Math.round(read(root, 'select[name="ha-term"]', 25, 10, 30));
    const rate = read(root, 'input[name="ha-rate"]', 4.6, 3, 8);

    const loan = price * (1 - deposit / 100);
    const monthlyRate = rate / 1200;
    const months = term * 12;
    let monthly = 0;
    if (loan > 0 && monthlyRate > 0) {
      monthly = (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    }
    const interest = monthly * months - loan;

    const set = (key, value) => {
      const node = root.querySelector('[data-out="' + key + '"]');
      if (node) node.textContent = value;
    };

    set("monthly", money(monthly));
    set("deposit-amount", money((price * deposit) / 100));
    set("interest", money(interest));
    set("ltv", Math.round(100 - deposit) + "%");
    set("dep-pct", deposit + "%");
    set("rate-pct", rate.toFixed(1) + "%");
  }

  window.__tenSig.haven = function (root, event) {
    if (event && event.type === "click" && event.target) {
      const act = event.target.closest ? event.target.closest("[data-act]") : null;
      if (act && root.contains(act) && act.getAttribute("data-act") === "dep") {
        const target = root.querySelector('input[name="ha-deposit"]');
        const pct = act.getAttribute("data-dep");
        if (target && pct) target.value = pct;
        render(root);
        return;
      }
    }
    render(root);
  };
})();
