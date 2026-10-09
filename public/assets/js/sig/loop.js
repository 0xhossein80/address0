(() => {
  "use strict";

  window.__tenSig = window.__tenSig || {};

  const VISITORS = 10000;
  const PLAN = 24;

  window.__tenSig.loop = function (root) {
    const read = (name, fallback, min, max) => {
      const el = root.querySelector('input[name="' + name + '"]');
      let v = el ? parseInt(el.value, 10) : NaN;
      if (!Number.isFinite(v)) v = fallback;
      return Math.min(max, Math.max(min, v));
    };

    const signup = read("lo-signup", 6, 1, 20);
    const activate = read("lo-activate", 45, 10, 90);
    const paid = read("lo-paid", 30, 5, 60);

    const s1 = VISITORS;
    const s2 = Math.round((s1 * signup) / 100);
    const s3 = Math.round((s2 * activate) / 100);
    const s4 = Math.round((s3 * paid) / 100);
    const mrr = s4 * PLAN;

    const set = (key, value) => {
      const node = root.querySelector('[data-out="' + key + '"]');
      if (node) node.textContent = value;
    };

    const count = (n) => n.toLocaleString("en-GB");
    const pct = (n) => Math.round((n / VISITORS) * 100000) / 1000 + "%";

    set("v-signup", signup + "%");
    set("v-activate", activate + "%");
    set("v-paid", paid + "%");
    set("s1", count(s1));
    set("s2", count(s2));
    set("s3", count(s3));
    set("s4", count(s4));
    set(
      "mrr",
      mrr.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 0,
      })
    );

    [s1, s2, s3, s4].forEach((n, i) => {
      const bar = root.querySelector('[data-bar="' + (i + 1) + '"]');
      if (bar) bar.style.width = pct(n);
    });
  };
})();
