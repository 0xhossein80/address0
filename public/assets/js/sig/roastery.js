(() => {
  "use strict";

  window.__tenSig = window.__tenSig || {};

  const METHODS = {
    v60: {
      perCup: 250,
      ratio: 16,
      ratioLabel: "1:16",
      time: "2:45",
      grind: "Grind: medium-fine, like table salt.",
      note: "Water straight off the boil, bloom 45 seconds, two circles to finish.",
    },
    espresso: {
      perCup: 40,
      ratio: 2,
      ratioLabel: "1:2",
      time: "0:28",
      grind: "Grind: fine, like powdered sugar.",
      note: "Aim for 26–30 seconds. Sour? go finer. Bitter? go coarser — nothing else.",
    },
    aero: {
      perCup: 220,
      ratio: 14,
      ratioLabel: "1:14",
      time: "1:30",
      grind: "Grind: medium-fine, slightly coarser than the V60.",
      note: "Steep 1:30, gentle press, drink straight from the mug it fell into.",
    },
    plunger: {
      perCup: 300,
      ratio: 16,
      ratioLabel: "1:16",
      time: "4:00",
      grind: "Grind: coarse, like sea salt.",
      note: "Four minutes flat, break the crust, skim, one more minute, press.",
    },
  };

  window.__tenSig.roastery = function (root) {
    const chosen = root.querySelector('input[name="rb-method"]:checked');
    const method = METHODS[chosen ? chosen.value : "v60"] || METHODS.v60;

    const cupsInput = root.querySelector("#rb-cups");
    let cups = parseInt(cupsInput ? cupsInput.value : "2", 10);
    if (!Number.isFinite(cups)) cups = 2;
    cups = Math.min(6, Math.max(1, cups));

    const water = method.perCup * cups;
    const dose =
      method.ratio === 2
        ? Math.round(cups * 18)
        : Math.max(1, Math.round(water / method.ratio));

    const set = (key, value) => {
      const node = root.querySelector('[data-out="' + key + '"]');
      if (node) node.textContent = value;
    };

    set("cups", String(cups));
    set("dose", dose + "g");
    set("water", water + "g");
    set("ratio", method.ratioLabel);
    set("time", method.time);
    set("grind", method.grind);
    set("note", method.note);
  };
})();
