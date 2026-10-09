(() => {
  "use strict";

  window.__tenSig = window.__tenSig || {};

  const DAYS = [
    { key: "tue", name: "Tuesday", idx: 0 },
    { key: "wed", name: "Wednesday", idx: 1 },
    { key: "thu", name: "Thursday", idx: 2 },
    { key: "fri", name: "Friday", idx: 3 },
    { key: "sat", name: "Saturday", idx: 4 },
  ];

  const SLOTS = ["18:00", "20:30", "22:00"];
  const DOT = "\u00B7";
  const EMDASH = "\u2014";

  let picked = null;

  function dayOf(key) {
    for (let i = 0; i < DAYS.length; i += 1) {
      if (DAYS[i].key === key) return DAYS[i];
    }
    return DAYS[2];
  }

  function readDay(root) {
    const chosen = root.querySelector('input[name="sa-day"]:checked');
    return dayOf(chosen ? chosen.value : "thu");
  }

  function readParty(root) {
    const input = root.querySelector('input[name="sa-party"]');
    let party = input ? parseInt(input.value, 10) : 2;
    if (!Number.isFinite(party)) party = 2;
    return Math.min(12, Math.max(1, party));
  }

  function stateOf(dayIdx, party, slotIdx) {
    const h = (dayIdx * 7 + party * 3 + slotIdx * 5) % 10;
    if (h >= 7) return "full";
    if (h >= 4) return "waitlist";
    return "available";
  }

  function slotHtml(time, state, isPicked) {
    const cls = "sa-slot sa-slot--" + state + (isPicked ? " is-picked" : "");
    const dis = state === "full" ? ' disabled aria-disabled="true"' : "";
    return (
      '<button type="button" class="' +
      cls +
      '" data-act="slot" data-slot="' +
      time +
      '"' +
      dis +
      '><span class="sa-slot__time">' +
      time +
      '</span><span class="sa-slot__state">' +
      state +
      "</span></button>"
    );
  }

  function set(root, name, value) {
    const node = root.querySelector('[data-out="' + name + '"]');
    if (node) node.textContent = value;
  }

  function guests(party) {
    return party + (party === 1 ? " guest" : " guests");
  }

  function fillForm(dayName, time, party) {
    const form = document.querySelector("form[data-enquiry]");
    if (form) {
      const partySelect = form.querySelector('select[name="party"]');
      if (partySelect) {
        const want = String(party);
        const options = partySelect.querySelectorAll("option");
        for (let i = 0; i < options.length; i += 1) {
          const text = options[i].textContent ? options[i].textContent.trim() : "";
          if (text === want) {
            partySelect.value = options[i].value;
            break;
          }
        }
      }
      const notes = form.querySelector('textarea[name="notes"]');
      if (notes && notes.tagName === "TEXTAREA") {
        const line = "Table picker: " + dayName + " " + time + " sitting, " + guests(party) + ".";
        if (notes.value.indexOf(line) === -1) {
          const base = notes.value.replace(/\s+$/, "");
          const joined = base ? base + "\n" + line : line;
          const max = parseInt(notes.getAttribute("maxlength"), 10);
          if (!Number.isFinite(max) || joined.length <= max) notes.value = joined;
        }
      }
    }

    if (typeof window.tenToast === "function") {
      window.tenToast(dayName + " " + time + ", " + guests(party) + " " + EMDASH + " table noted.");
    }

    const target = form || document.getElementById("enquire");
    if (target && typeof target.scrollIntoView === "function") {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function render(root) {
    const day = readDay(root);
    const party = readParty(root);
    const counts = { available: 0, waitlist: 0, full: 0 };
    let html = "";

    for (let i = 0; i < SLOTS.length; i += 1) {
      const time = SLOTS[i];
      const state = stateOf(day.idx, party, i);
      counts[state] += 1;
      const isPicked = Boolean(picked) && picked.day === day.key && picked.time === time && state !== "full";
      html += slotHtml(time, state, isPicked);
    }

    const slots = root.querySelector('[data-out="slots"]');
    if (slots) slots.innerHTML = html;

    set(root, "party", String(party));
    set(
      root,
      "note",
      day.name +
        " " +
        DOT +
        " " +
        guests(party) +
        " " +
        EMDASH +
        " " +
        counts.available +
        " free, " +
        counts.waitlist +
        " waitlist, " +
        counts.full +
        " full."
    );
    set(
      root,
      "chosen",
      picked
        ? "Chosen: " + dayOf(picked.day).name + " " + picked.time + " for " + guests(picked.party)
        : "No sitting picked yet."
    );
  }

  const sig = function (root, event) {
    if (sig.__root !== root) {
      sig.__root = root;
      picked = null;
    }

    if (event && event.type === "click" && event.target && typeof event.target.closest === "function") {
      const act = event.target.closest("[data-act]");
      if (act && act.getAttribute("data-act") === "slot" && !act.hasAttribute("disabled")) {
        const time = act.getAttribute("data-slot");
        if (time) {
          const day = readDay(root);
          const party = readParty(root);
          picked = { day: day.key, time: time, party: party };
          fillForm(day.name, time, party);
          render(root);
          return;
        }
      }
    }

    render(root);
  };

  window.__tenSig.saffron = sig;
})();
