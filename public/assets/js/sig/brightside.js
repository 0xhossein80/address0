(() => {
  "use strict";

  window.__tenSig = window.__tenSig || {};

  const VERDICTS = {
    knocked: {
      tone: "urgent",
      head: "Come in today — this one comes first.",
      body: "A knocked-out tooth is a race against the clock — call now, keep it in milk, we will see you today.",
      cta: "Request a same-day slot",
    },
    bleeding: {
      tone: "urgent",
      head: "Call now, we will see you today.",
      body: "Bleeding that will not settle needs eyes on it today. Keep biting on a clean damp gauze, sit upright and ring the desk — we will fit you in.",
      cta: "Request a same-day slot",
    },
    swelling: {
      tone: "urgent",
      head: "Come in today.",
      body: "Same-day territory: swelling plus that much pain usually means an abscess building.",
      cta: "Request a same-day slot",
    },
    severe: {
      tone: "urgent",
      head: "Come in today.",
      body: "Pain this high rarely settles on its own. Ring now and we will get you seen today and take the edge off it.",
      cta: "Request a same-day slot",
    },
    ache: {
      tone: "soon",
      head: "Book in the next couple of days.",
      body: "Book within 48 hours — we will get you out of pain first, then fix the cause.",
      cta: "Request an appointment",
    },
    week: {
      tone: "soon",
      head: "A same-week visit.",
      body: "Come in this week — nothing here needs a same-day slot, and the sooner we look, the simpler the fix.",
      cta: "Request an appointment",
    },
    routine: {
      tone: "routine",
      head: "Any time that suits you.",
      body: "Book any routine slot that suits you — a check-up is exactly the visit that stops the emergency ones later.",
      cta: "Book a check-up",
    },
  };

  function pick(issue, pain, bleeding) {
    if (issue === "knocked-out") return "knocked";
    if (bleeding) return "bleeding";
    if (issue === "swelling" && pain >= 5) return "swelling";
    if (issue === "toothache" && pain >= 7) return "severe";
    if (issue === "toothache") return "ache";
    if (issue === "chip" || issue === "swelling") return "week";
    return "routine";
  }

  function render(root) {
    const chosen = root.querySelector('input[name="br-issue"]:checked');
    const issue = chosen ? chosen.value : "checkup";

    const painEl = root.querySelector('input[name="br-pain"]');
    let pain = painEl ? parseInt(painEl.value, 10) : NaN;
    if (!Number.isFinite(pain)) pain = 3;
    pain = Math.min(10, Math.max(0, pain));

    const bleedEl = root.querySelector('input[name="br-bleed"]');
    const bleeding = !!(bleedEl && bleedEl.checked);

    const painNode = root.querySelector('[data-out="pain"]');
    if (painNode) painNode.textContent = String(pain);

    const severity = root.querySelector('[data-out="severity"]');
    if (severity) {
      severity.textContent =
        pain <= 1
          ? "Barely there"
          : pain <= 4
            ? "Noticeable"
            : pain <= 6
              ? "Bad enough to book now"
              : "Severe — same-day territory";
    }

    const box = root.querySelector('[data-out="verdict"]');
    if (!box) return;
    const verdict = VERDICTS[pick(issue, pain, bleeding)] || VERDICTS.routine;
    box.className = "bt-verdict bt-verdict--" + verdict.tone;
    box.innerHTML =
      "<h3>" +
      verdict.head +
      "</h3><p>" +
      verdict.body +
      '</p><a class="btn btn--accent" href="#enquire">' +
      verdict.cta +
      "</a>";
  }

  window.__tenSig.brightside = function (root, event) {
    if (event && event.type === "click" && event.target) {
      const act = event.target.closest ? event.target.closest("[data-act]") : null;
      if (act && root.contains(act) && act.getAttribute("data-act") === "reset") {
        const issue = root.querySelector('input[name="br-issue"][value="toothache"]');
        if (issue) issue.checked = true;
        const pain = root.querySelector('input[name="br-pain"]');
        if (pain) pain.value = "3";
        const bleed = root.querySelector('input[name="br-bleed"]');
        if (bleed) bleed.checked = false;
        render(root);
        return;
      }
    }
    render(root);
  };
})();
