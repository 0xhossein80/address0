import type { SubPage } from './types';

export const PAGES: SubPage[] = [
  {
    parent: 'verity',
    slug: 'fees-explained',
    title: 'Verity & Hale — how our fees are structured',
    description: 'Fixed fees, capped phases and hourly rates: how Verity and Hale scopes a matter, what each fee includes, and what the first invoice will show you.',
    kicker: 'Verity & Hale · fees',
    heading: 'Fees, explained',
    lede: 'Every engagement starts with a written scope and a figure attached to it. These are the three ways we bill and what each one covers.',
    variant: 'guide',
    stats: [
      ['3', 'ways to bill: fixed, capped, hourly'],
      ['30 min', 'free call with the partner'],
      ['50%', 'of a fixed fee on instruction'],
    ],
    sections: [
      {
        title: 'Fixed fees for defined work',
        blocks: [
          { type: 'P', text: "Straightforward matters — a shareholders' agreement, an employment exit, a single opinion letter — are quoted as one figure from a written scope. The number does not move unless you ask us to widen the work." },
          {
            type: 'List',
            items: [
              'Scope agreed in writing before anything starts, fee stated on it',
              'Half on instruction, half on delivery for matters over $5,000',
              'Any extra work is quoted and approved before we do it',
            ],
          },
        ],
      },
      {
        title: 'Capped phases for disputes',
        blocks: [
          { type: 'P', text: 'Disputes are cut into phases — letters before action, disclosure, settlement, trial preparation — each with its own cap. You approve the next phase and its ceiling before we begin, and 87% of matters settle before trial.' },
          {
            type: 'List',
            items: [
              'Phase one: letters before action and advice, capped at a fixed figure',
              'Disclosure and witness statements: a separate cap, approved separately',
              'The cap is a ceiling, not an estimate; unused time is not billed',
            ],
          },
        ],
      },
      {
        title: 'What we do not charge for',
        blocks: [
          { type: 'P', text: 'The first reply to your enquiry, the conflicts check and the initial thirty-minute call with the partner who would lead the matter all come free. You know the likely shape of the cost before you book anything.' },
          {
            type: 'List',
            items: [
              'First response within two working hours, at no cost',
              'Conflicts check run on every enquiry before we reply',
              'Thirty-minute call with the partner who would handle it',
            ],
          },
        ],
      },
      {
        title: 'From enquiry to first invoice',
        blocks: [
          { type: 'P', text: 'Nothing starts until you have seen the figure, and nothing is billed that the scope did not describe. The sequence below runs the same way whether you land on a fixed fee, a capped phase or an hourly matter, and you can stop after any step of it.' },
          {
            type: 'Steps',
            items: [
              'Send the outline of your matter through the enquiry form — dates, parties and what you want to happen',
              'We run a conflicts check and reply with whether we can act, and who would lead it',
              'Thirty minutes on the phone with that partner, free, testing the scope against what you need',
              'A written scope and a figure land within two working days of that call',
              'Half the fee on instruction; the balance only when the work in the scope is delivered',
            ],
          },
          { type: 'Note', text: 'If the work widens after instruction, the new figure is quoted and approved in writing before anyone spends an hour on it.' },
        ],
      },
    ],
    ctaTitle: 'Ask for a written estimate',
    ctaBody: 'Send the outline of your matter in the enquiry form. You get a scope, a fee and the name of the partner who would lead it, before you instruct us.',
  },
  {
    parent: 'verity',
    slug: 'glossary',
    title: 'Verity & Hale — a plain-English legal glossary',
    description: 'Twelve terms you will meet in a letter, a claim or a contract, from letter before action to restrictive covenant, each defined in one plain sentence.',
    kicker: 'Verity & Hale · glossary',
    heading: 'The glossary',
    lede: 'Twelve words you will meet in a letter, a claim or a contract, defined the way we would explain them across a table.',
    variant: 'cards',
    stats: [
      ['12', 'terms, each in one sentence'],
      ['3', 'areas: disputes, companies, employment'],
    ],
    sections: [
      {
        title: 'In a dispute',
        blocks: [
          { type: 'P', text: 'The vocabulary of a claim, from the first letter to the day it reaches a judge. If you can follow these four, you can follow almost any correspondence a matter generates.' },
          {
            type: 'List',
            items: [
              'Letter before action — the formal demand that must precede a claim',
              'Disclosure — exchanging the documents and evidence both sides hold',
              'Without prejudice — a settlement offer the court never sees',
              'Summary judgment — asking the court to decide without a full trial',
            ],
          },
        ],
      },
      {
        title: 'In a company',
        blocks: [
          { type: 'P', text: 'Terms that surface in shareholder agreements and board minutes. Most of them exist to answer one question in advance: what happens when the founders disagree about the direction of the business.' },
          {
            type: 'List',
            items: [
              'Deadlock — neither side can force a decision, so the company stalls',
              'Drag-along — the majority can compel the minority to sell on the same terms',
              'Vesting — ownership earned over time rather than granted on day one',
              'Anti-dilution — protection when new shares are issued below your price',
            ],
          },
        ],
      },
      {
        title: 'In employment',
        blocks: [
          { type: 'P', text: 'What an exit letter actually means when you read it line by line. Each of these carries a deadline or a restriction, and both are worth understanding properly before you sign anything.' },
          {
            type: 'List',
            items: [
              'Settlement agreement — a waiver of claims in exchange for a payment',
              'Restrictive covenant — limits on where and with whom you work next',
              'Garden leave — you are paid to stay away through your notice period',
            ],
          },
          { type: 'Note', text: 'Every letter we send defines any term it uses in the same paragraph, so you should never need a second document to read the first one.' },
        ],
      },
    ],
    ctaTitle: 'Still unclear on a term?',
    ctaBody: 'Paste the clause or the letter into the enquiry form. A partner will explain it in plain English and say whether it needs acting on.',
  },
  {
    parent: 'verity',
    slug: 'conveyancing-timeline',
    title: 'Verity & Hale — how long conveyancing takes, stage by stage',
    description: 'The residential conveyancing timetable stage by stage: instruction, searches, survey, enquiries, exchange and completion, with the duration each one takes.',
    kicker: 'Verity & Hale · conveyancing',
    heading: 'The conveyancing timeline',
    lede: 'From an accepted offer to the day you collect the keys, every stage in the order it happens, with the durations we actually see on a straightforward purchase.',
    variant: 'log',
    stats: [
      ['£1,250', 'typical conveyancing fee'],
      ['6–10', 'working days to exchange'],
      ['8–12', 'weeks instruction to completion'],
    ],
    sections: [
      {
        title: 'How to read the timeline',
        blocks: [
          { type: 'P', text: 'Conveyancing runs to a script, and the only real variable is how quickly the other side answers. Every figure below is the typical range we see on a freehold purchase with a mortgage, not a promise anyone can hold a seller to.' },
          {
            type: 'List',
            items: [
              'Durations are working days unless the row says weeks',
              'Searches are the longest single block, and the one nobody can rush',
              'The six-to-ten-day count starts when enquiries are agreed, not when you instruct',
            ],
          },
          { type: 'Note', text: 'Leasehold adds two to four weeks for the management pack, and a flat in a small block can add longer if the freeholder is slow to answer.' },
        ],
      },
      {
        title: 'Stage by stage',
        blocks: [
          { type: 'P', text: 'Seven stages in the order they happen, with the durations we logged across the last forty completions. Some of them overlap — the surveyor often visits while searches are still out — but nothing downstream starts until the stage above it has cleared.' },
          {
            type: 'Table',
            head: ['Stage', 'Typical duration', 'What happens'],
            rows: [
              ['Instruction and identity checks', '1–2 working days', "We confirm the scope, run ID and source-of-funds checks, open the file and write to the seller's solicitor"],
              ['Draft contract issued', '3–5 working days', "The seller's solicitor sends the contract pack, title copies and the fixtures and fittings list"],
              ['Searches', '10–15 working days', 'Local authority, water and drainage, environmental and chancel repair searches are ordered'],
              ['Survey and mortgage offer', '2–3 weeks', 'The lender values the property and issues the offer; your surveyor reports on the fabric'],
              ['Enquiries and pre-completion search', '1–2 weeks', 'Questions on boundaries, leases and rights of way are raised, answered and signed off'],
              ['Exchange of contracts', '6–10 working days once clear', 'Both sides sign, the deposit clears and a completion date is fixed in writing'],
              ['Completion', '1–3 working days after exchange', 'Mortgage funds are drawn down, the balance is paid and the keys are released'],
            ],
          },
        ],
      },
      {
        title: 'Where matters stall',
        blocks: [
          { type: 'P', text: 'Almost every delayed file we take over stalled in one of three places, and only one of them is outside our control. Chasing is a full-time job here, which is why every file carries a named solicitor and a written update every Friday.' },
          {
            type: 'List',
            items: [
              'Missing information from the seller — we ask once in writing, then go to their agent',
              'A search result that needs a second enquiry, which adds five to ten working days',
              'A mortgage offer heading towards expiry while the chain waits — we flag it at sixty days, not ten',
            ],
          },
          { type: 'Note', text: 'Chain-free buyers can name their own completion date at exchange, and typically save two to three weeks against a chain of four.' },
        ],
      },
      {
        title: 'Completion week',
        blocks: [
          { type: 'P', text: 'The last week is the busiest one for you, even though most of the work is ours. These four steps are what we need between the day the date is fixed and the day the keys change hands, in the order they usually fall due.' },
          {
            type: 'Steps',
            items: [
              'Confirm your deposit figure and where it is held, five working days before the date',
              'Read and sign the transfer, raising any query the same day you receive it',
              'Approve the completion statement — stamp duty, disbursements and our fee — 48 hours ahead',
              "Collect keys from our office once the seller's solicitor confirms cleared funds, usually after 14:00",
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Get your own timeline',
    ctaBody: 'Send the property, your mortgage and your dates through the enquiry form. You get a week-by-week plan back, with the name of the solicitor who will run it.',
  },
  {
    parent: 'verity',
    slug: 'client-stories',
    title: 'Verity & Hale — client stories from four matters',
    description: "A shareholder row, an employment exit, a boundary dispute and a purchase that nearly collapsed: what happened, what it cost and what the client would do again.",
    kicker: 'Verity & Hale · client stories',
    heading: 'Client stories',
    lede: "Four matters from the last two years, told with the client's permission and with the figures attached. Names are changed; the numbers are not.",
    variant: 'story',
    stats: [
      ['4', 'matters, told start to finish'],
      ['11', "days to a signed shareholders' agreement"],
      ['0', 'of the four that needed a trial'],
    ],
    sections: [
      {
        title: 'The agreement nobody wanted to sign',
        blocks: [
          { type: 'P', text: "Two founders, eleven years in, had never put a shareholders' agreement in place. When they disagreed about a sale, neither could force the decision and the company sat in deadlock for four months before one of them picked up the phone to us." },
          {
            type: 'List',
            items: [
              "Scope: shareholders' agreement, new articles and a deadlock clause, fixed fee",
              'Eleven days from instruction to signature, two of them spent deciding',
              'The deadlock clause has been used once since, and the company is still intact',
            ],
          },
          { type: 'Quote', text: 'We came in arguing about the business and left with a document both sides had actually read. Eleven days, and nobody had to be the winner.' },
        ],
      },
      {
        title: 'An exit agreed in nine days',
        blocks: [
          { type: 'P', text: 'A finance director was handed a restructure letter on a Monday. We read it line by line the same day, put a counter-proposal to her employer nine days later, and the settlement agreement was signed once the statutory consideration period had run.' },
          {
            type: 'List',
            items: [
              "Two months' salary added to the payment and a neutral reference agreed",
              'Restrictive covenants cut back so the next role was not blocked',
              'Four hours of work past the estimate; the fee did not move',
            ],
          },
          { type: 'Quote', text: 'They explained what the letter actually meant before they told me what it would cost. I signed the first draft because I understood it.' },
        ],
      },
      {
        title: 'A boundary that ended at the fence',
        blocks: [
          { type: 'P', text: "A survey placed the fence two metres inside a neighbour's garden, thirty years after it was built. Neither side would move, and the letters had run for a year before both parties agreed to one joint survey instead of two." },
          {
            type: 'List',
            items: [
              'One joint expert instructed by agreement, which halved the survey cost',
              'Resolved before any claim was issued — letters before action never became a writ',
              'The agreed boundary is now recorded on both titles, for £480 in Land Registry fees',
            ],
          },
          { type: 'Quote', text: 'One surveyor, one afternoon, and eleven months of letters stopped. We should have called them in the first week.' },
        ],
      },
      {
        title: 'The purchase that nearly fell through',
        blocks: [
          { type: 'P', text: 'Eleven days before completion the lender withdrew the offer over a consent nobody had found for a loft conversion. The seller still wanted the fixed date, our buyers had already given notice on a rented flat, and the file became a daily call sheet until it was back on track.' },
          {
            type: 'List',
            items: [
              'The consent was on the local planning portal all along; we pulled it in two days',
              'A replacement offer came back in nine working days, at the same rate, through their broker',
              'Completion moved back eleven days and the chain held, because nobody was left guessing',
              'The conveyancing fee never moved from the figure quoted at instruction',
            ],
          },
          { type: 'Quote', text: 'We had given notice on the flat and were counting the days. They called every afternoon with what had changed, even when the answer was nothing.' },
          { type: 'Note', text: 'All four matters turned on something early rather than something clever: reading a letter properly, one joint surveyor, or asking for the figure before the work started.' },
        ],
      },
    ],
    ctaTitle: 'Tell us your matter',
    ctaBody: 'Put the outline in the enquiry form and a partner reads it the same working day, with whether we can act, who would lead it and the shape of the fee.',
  },
];
