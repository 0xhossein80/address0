(() => {
  "use strict";

  window.__tenSig = window.__tenSig || {};

  const N = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16];
  const T = [1 / 2000, 1 / 1000, 1 / 500, 1 / 250, 1 / 125, 1 / 60, 1 / 30, 1 / 8, 1 / 2];
  const ISOV = [100, 200, 400, 800, 1600, 3200, 6400];
  const NLAB = ["f/1.4", "f/2", "f/2.8", "f/4", "f/5.6", "f/8", "f/11", "f/16"];
  const TLAB = ["1/2000", "1/1000", "1/500", "1/250", "1/125", "1/60", "1/30", "1/8", "1/2"];

  function sceneFor(ev) {
    if (ev <= 2) {
      return ["Deep night", "Tripod, wide open, low ISO — let the shutter drag."];
    }
    if (ev < 6) {
      return ["Blue hour / neon street", "Handheld works down to about 1/30 — lean on something."];
    }
    if (ev < 9) {
      return ["Dim interior", "Open the aperture a stop or push ISO to 1600 before you slow down."];
    }
    if (ev < 12) {
      return ["Bright room, open shade", "This is portrait weather — f/4, ISO 100, watch the window light."];
    }
    if (ev < 14.5) {
      return ["Overcast daylight", "Stop down to f/8, everything is sharp and nothing is harsh."];
    }
    return ["Hard midday sun", "f/11 or f/16, 1/500 — find shade or embrace the contrast."];
  }

  window.__tenSig.lumen = function (root) {
    const index = (name, fallback, max) => {
      const el = root.querySelector('input[name="' + name + '"]');
      let v = el ? parseInt(el.value, 10) : NaN;
      if (!Number.isFinite(v)) v = fallback;
      return Math.min(max, Math.max(0, v));
    };

    const ai = index("lu-aperture", 3, N.length - 1);
    const si = index("lu-shutter", 4, T.length - 1);
    const ii = index("lu-iso", 2, ISOV.length - 1);

    const aperture = N[ai];
    const shutter = T[si];
    const iso = ISOV[ii];

    const evRaw = Math.log2((aperture * aperture) / shutter) - Math.log2(iso / 100);
    const ev = Math.round(evRaw * 2) / 2;
    const scene = sceneFor(ev);

    const set = (key, value) => {
      const node = root.querySelector('[data-out="' + key + '"]');
      if (node) node.textContent = value;
    };

    set("v-aperture", NLAB[ai]);
    set("v-shutter", TLAB[si]);
    set("v-iso", String(iso));
    set("settings", NLAB[ai] + " · " + TLAB[si] + " · ISO " + iso);
    set("ev", "EV " + ev);
    set("scene", scene[0]);
    set("tip", scene[1]);
  };
})();
