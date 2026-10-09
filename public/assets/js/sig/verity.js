(() => {
  "use strict";

  window.__tenSig = window.__tenSig || {};

  const POUND = "\u00A3";
  const ENDA = "\u2013";
  const DOT = "\u00B7";
  const APPROX = "\u2248";
  const EMDASH = "\u2014";

  const COMPLEX = { straight: "straightforward", involved: "involved" };

  const BAND = (low, high) => POUND + low + " " + ENDA + " " + POUND + high;

  const MATTERS = {
    employment: {
      name: "Employment",
      bands: {
        straight: BAND("350", "700"),
        involved: BAND("700", "1,400"),
      },
      disb: {
        straight: "No third-party costs unless a claim is issued.",
        involved: "Tribunal issue fee up to " + POUND + "1,050 if it escalates.",
      },
      incl: {
        straight: [
          "Fixed fee agreed in writing before any work starts",
          "Contract and handbook reviewed in two working days",
          "One round of amendments included",
        ],
        involved: [
          "Advisory calls and correspondence right up to tribunal issued",
          "Bundle, witness statements and chronology drafted for you",
          "Hearing attended, with counsel instructed if the case needs it",
        ],
      },
    },
    conveyancing: {
      name: "Conveyancing",
      bands: {
        straight: BAND("1,100", "1,600"),
        involved: BAND("1,600", "2,400"),
      },
      disb: {
        straight:
          "Searches " + APPROX + " " + POUND + "250 " + DOT + " Land Registry " + APPROX + " " + POUND + "270 (pass-through at cost).",
        involved:
          "Searches " + APPROX + " " + POUND + "250 " + DOT + " Land Registry " + APPROX + " " + POUND + "270 (pass-through at cost).",
      },
      incl: {
        straight: [
          "Sale or purchase of a freehold with one mortgage on it",
          "Searches, draft contract and exchange managed end to end",
          "Stamp duty return and Land Registry filing after completion",
        ],
        involved: [
          "Leasehold, shared ownership or a title with conditions on it",
          "Management pack, licence and deed variations chased down",
          "Survey findings renegotiated with the other side on your behalf",
        ],
      },
    },
    family: {
      name: "Family",
      bands: {
        straight: BAND("1,500", "2,500"),
        involved: BAND("2,500", "5,000"),
      },
      disb: {
        straight: "Court fee from " + POUND + "590 if an application is issued.",
        involved: "Court fee from " + POUND + "590 if an application is issued.",
      },
      incl: {
        straight: [
          "One agreed application drafted and checked with you before filing",
          "Financial disclosure read and summarised in plain English",
          "Two advice calls before anything leaves the office",
        ],
        involved: [
          "Contested application drafted, served and fought through",
          "Pensions, property and business valuations coordinated for you",
          "Hearing attended with counsel and a note after every step",
        ],
      },
    },
    debt: {
      name: "Debt",
      bands: {
        straight: BAND("600", "1,100"),
        involved: BAND("1,100", "2,200"),
      },
      disb: {
        straight:
          "Recovery surcharge capped at 10% of what we collect " + EMDASH + " nothing if nothing.",
        involved:
          "Recovery surcharge capped at 10% of what we collect " + EMDASH + " nothing if nothing.",
      },
      incl: {
        straight: [
          "Letter before action drafted and sent within two working days",
          "Payment plans tracked and chased the day an instalment slips",
          "Interest and late payment charges calculated for you",
        ],
        involved: [
          "Claim issued, served and pleaded all the way to trial",
          "Asset checks before we spend a pound on enforcement",
          "Judgment enforced by attachment, order or bailiff as fits",
        ],
      },
    },
  };

  window.__tenSig.verity = function (root, event) {
    const select = root.querySelector('select[name="ve-matter"]');
    const key = select && MATTERS[select.value] ? select.value : "employment";
    const matter = MATTERS[key];

    const chosen = root.querySelector('input[name="ve-complex"]:checked');
    const cx = chosen && chosen.value === "involved" ? "involved" : "straight";

    const set = (name, value) => {
      const node = root.querySelector('[data-out="' + name + '"]');
      if (node) node.textContent = value;
    };

    set("label", matter.name + " " + DOT + " " + COMPLEX[cx]);
    set("fee", matter.bands[cx] + " + VAT");
    set("disburse", matter.disb[cx]);

    const included = root.querySelector('[data-out="included"]');
    if (included) {
      const items = matter.incl[cx];
      let html = "<ul>";
      for (let i = 0; i < items.length; i += 1) {
        html += "<li>" + items[i] + "</li>";
      }
      included.innerHTML = html + "</ul>";
    }
  };
})();
