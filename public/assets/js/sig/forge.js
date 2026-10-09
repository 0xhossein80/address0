(() => {
  "use strict";

  window.__tenSig = window.__tenSig || {};

  const BAR = 20;
  const PLATES = [25, 20, 10, 5, 2.5, 1.25];

  function noteFor(reps) {
    if (reps <= 3) return "Heavy double — rest three minutes between attempts.";
    if (reps <= 6) return "Strength zone. Grind it, rack it, write it down.";
    return "Rep work — the 1RM is a guess, the pump is real.";
  }

  function chipsFor(perSide) {
    let rem = Math.round(perSide * 100) / 100;
    const chips = [];
    for (let i = 0; i < PLATES.length; i += 1) {
      const size = PLATES[i];
      while (rem >= size - 0.001) {
        chips.push(size);
        rem = Math.round((rem - size) * 100) / 100;
      }
    }
    return chips;
  }

  function read(root, name, fallback, min, max) {
    const el = root.querySelector('input[name="' + name + '"]');
    let value = el ? parseFloat(el.value) : NaN;
    if (!Number.isFinite(value)) value = fallback;
    return Math.min(max, Math.max(min, value));
  }

  function render(root) {
    const weight = read(root, "fo-weight", 0, 0, 400);
    const reps = Math.round(read(root, "fo-reps", 5, 1, 10));

    const set = (key, value) => {
      const node = root.querySelector('[data-out="' + key + '"]');
      if (node) node.textContent = value;
    };

    set("reps", String(reps));
    set("onerm", Math.round(weight * (1 + reps / 30)) + "kg");
    set("note", noteFor(reps));

    const plates = root.querySelector('[data-out="plates"]');
    if (plates) {
      if (weight < BAR) {
        plates.textContent = "Bar's 20kg — dumbbell work, skip the maths.";
      } else {
        const chips = chipsFor((weight - BAR) / 2);
        if (chips.length === 0) {
          plates.textContent = "Bare bar — 20kg, nothing to clip on.";
        } else {
          let html = "";
          for (let i = 0; i < chips.length; i += 1) {
            html += '<span class="fo-plate">' + chips[i] + "</span> ";
          }
          plates.innerHTML = html + '<span class="fo-load__each">each side</span>';
        }
      }
    }
  }

  window.__tenSig.forge = function (root, event) {
    if (event && event.type === "click" && event.target) {
      const act = event.target.closest ? event.target.closest("[data-act]") : null;
      if (act && root.contains(act) && act.getAttribute("data-act") === "load") {
        const target = root.querySelector('input[name="fo-weight"]');
        const kg = act.getAttribute("data-kg");
        if (target && kg) target.value = kg;
        render(root);
        return;
      }
    }
    render(root);
  };
})();
