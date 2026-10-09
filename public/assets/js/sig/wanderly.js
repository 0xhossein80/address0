(() => {
  "use strict";

  window.__tenSig = window.__tenSig || {};

  const KEY = "sig-wanderly";
  const TOTAL = 9;
  const SELECTOR = 'input[name="wy-item"]';
  const VALUES = [
    "passport",
    "insurance",
    "copies",
    "adapter",
    "meds",
    "sun",
    "daybag",
    "card",
    "keys",
  ];

  function readStore() {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      return data && typeof data === "object" && !Array.isArray(data) ? data : null;
    } catch (err) {
      return null;
    }
  }

  function writeStore(data) {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(data));
    } catch (err) {
      /* storage blocked: the checklist still works for this visit */
    }
  }

  function dropStore() {
    try {
      sessionStorage.removeItem(KEY);
    } catch (err) {
      /* storage blocked */
    }
  }

  function boxFor(root, value) {
    return root.querySelector('input[name="wy-item"][value="' + value + '"]');
  }

  function applyStored(root, data) {
    for (let i = 0; i < VALUES.length; i += 1) {
      const box = boxFor(root, VALUES[i]);
      if (box) box.checked = Boolean(data[VALUES[i]]);
    }
  }

  function collect(root) {
    const data = {};
    for (let i = 0; i < VALUES.length; i += 1) {
      const box = boxFor(root, VALUES[i]);
      if (box && box.checked) data[VALUES[i]] = true;
    }
    return data;
  }

  function render(root) {
    let ready = 0;
    const boxes = root.querySelectorAll(SELECTOR);
    for (let i = 0; i < boxes.length; i += 1) {
      if (boxes[i].checked) ready += 1;
    }

    const progress = root.querySelector('[data-out="progress"]');
    if (progress) progress.textContent = ready + " of " + TOTAL + " ready";

    const bar = root.querySelector('[data-out="bar"]');
    if (bar) bar.style.width = Math.round((ready / TOTAL) * 100) + "%";

    const next = root.querySelector('[data-out="next"]');
    if (next) {
      if (ready >= TOTAL) {
        next.textContent = "All packed — clear the list when you land.";
      } else {
        for (let i = 0; i < VALUES.length; i += 1) {
          const box = boxFor(root, VALUES[i]);
          if (box && !box.checked) {
            const label = box.closest("label");
            const text = label ? label.querySelector(".wa-check__text") : null;
            next.textContent = "Up next: " + (text ? text.textContent : VALUES[i]);
            break;
          }
        }
      }
    }
  }

  const sig = function (root, event) {
    if (sig.__root !== root) {
      sig.__root = root;
      const stored = readStore();
      if (stored) applyStored(root, stored);
    }

    if (event && (event.type === "change" || event.type === "input")) {
      const target = event.target;
      if (target && target.name === "wy-item") writeStore(collect(root));
    }

    if (event && event.type === "click" && event.target && typeof event.target.closest === "function") {
      const act = event.target.closest("[data-act]");
      if (act && act.getAttribute("data-act") === "reset") {
        dropStore();
        const boxes = root.querySelectorAll(SELECTOR);
        for (let i = 0; i < boxes.length; i += 1) {
          boxes[i].checked = false;
        }
      }
    }

    render(root);
  };

  window.__tenSig.wanderly = sig;
})();
