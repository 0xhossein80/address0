(() => {
  "use strict";

  window.__tenSig = window.__tenSig || {};

  const SIZES = [
    { max: 162, size: "XS", length: 66, sleeve: 58 },
    { max: 169, size: "S", length: 69, sleeve: 61 },
    { max: 177, size: "M", length: 72, sleeve: 64 },
    { max: 185, size: "L", length: 75, sleeve: 67 },
    { max: Infinity, size: "XL", length: 78, sleeve: 70 },
  ];

  const FITS = {
    cropped: { length: 0.94, sleeve: 0.97, note: "Cut above the hip — sits at the waistband." },
    slim: { length: 0.98, sleeve: 0.99, note: "Close to the body through the chest." },
    regular: { length: 1, sleeve: 1, note: "Straight from the shoulder, nothing pinned." },
    relaxed: { length: 1.06, sleeve: 1.04, note: "The house cut — room to layer." },
  };

  const DEFAULT_TONE = "#1c1416";

  window.__tenSig.atelier = function (root, event) {
    const fn = window.__tenSig.atelier;
    if (fn.__root !== root) {
      fn.__root = root;
      fn.__tone = DEFAULT_TONE;
      root.style.setProperty("--swatch", fn.__tone);
    }

    if (event && event.type === "click" && event.target) {
      const swatch = event.target.closest('[data-act="swatch"]');
      if (swatch && root.contains(swatch)) {
        const tone = swatch.getAttribute("data-tone");
        fn.__tone = tone || DEFAULT_TONE;
        root.style.setProperty("--swatch", fn.__tone);
      }
    }

    const heightInput = root.querySelector('input[name="at-height"]');
    let height = heightInput ? parseInt(heightInput.value, 10) : NaN;
    if (!Number.isFinite(height)) height = 170;
    height = Math.min(195, Math.max(150, height));

    const fitInput = root.querySelector('input[name="at-fit"]:checked');
    const fit = FITS[fitInput ? fitInput.value : "regular"] || FITS.regular;

    const chosen =
      SIZES.find((s) => height < s.max) || SIZES[SIZES.length - 1];
    const length = Math.round(chosen.length * fit.length);
    const sleeve = Math.round(chosen.sleeve * fit.sleeve);

    const set = (key, value) => {
      const node = root.querySelector('[data-out="' + key + '"]');
      if (node) node.textContent = value;
    };

    set("height", height + "cm");
    set("size", chosen.size);
    set("length", length + "cm");
    set("sleeve", sleeve + "cm");
    set("fit-note", fit.note);

    root.querySelectorAll('[data-act="swatch"]').forEach((btn) => {
      const on = (btn.getAttribute("data-tone") || "") === fn.__tone;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-on", on);
    });
  };
})();
