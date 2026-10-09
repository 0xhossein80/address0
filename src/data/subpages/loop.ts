import type { SubPage } from './types';

export const PAGES: SubPage[] = [
  {
    parent: 'loop',
    slug: 'metrics-playbook',
    title: 'Loopmetric — the metrics playbook for product teams',
    description: 'Definitions, targets and chart templates for activation, retention and revenue, written so your team can rebuild each metric in Loopmetric this afternoon.',
    kicker: 'Loopmetric · playbooks',
    heading: 'The metrics playbook',
    lede: 'Pick three metrics, not thirty. Each one below has a definition, a target and a chart you can rebuild in an afternoon.',
    variant: 'guide',
    stats: [['3', 'metrics to start'], ['40%', 'activation target'], ['25%', 'week-four retention']],
    sections: [
      {
        title: 'Activation that counts',
        blocks: [
          { type: 'P', text: 'Pick the one event that predicts a retained user, then measure how many signups reach it within three days. Ask Loopmetric for the funnel, rename the steps if they do not match your product, and read it weekly rather than whenever someone remembers to open the dashboard.' },
          {
            type: 'List',
            items: [
              'Define one activation event — invite sent, first project, first payment',
              'Target 40% of signups reaching it within 72 hours',
              'Funnel: signup to activation to second session, grouped by channel',
            ],
          },
        ],
      },
      {
        title: 'Retention — cohorts, not averages',
        blocks: [
          { type: 'P', text: 'Daily actives average the story away; weekly cohorts show it. Build a retention chart grouped by signup week, read the fourth column first, and you will know whether the last release changed behaviour at all instead of arguing about a line that moved for other reasons.' },
          {
            type: 'List',
            items: [
              'Weekly cohorts, four and eight week retention side by side',
              'Healthy early-stage target: 25% at week four, 15% at week eight',
              'Compare cohorts before and after each release, one at a time',
            ],
          },
        ],
      },
      {
        title: 'Revenue you can trace back',
        blocks: [
          { type: 'P', text: 'Tie plan changes to identify calls so upgrades land in the same chart as the feature that caused them. Loopmetric groups revenue by cohort, the only view that separates new money from retained money, and it is the chart that ends the monthly argument about which launch worked.' },
          {
            type: 'List',
            items: [
              'Track plan upgrades as events, plan name as a property',
              'Group revenue by signup cohort to split new from retained',
              'Alert on a 20% week-over-week drop in expansion revenue',
            ],
          },
          { type: 'Note', text: 'A single upgrade event beats a nightly billing-table sync: it carries the property that says why the money moved.' },
        ],
      },
      {
        title: 'Instrumenting your first metric',
        blocks: [
          { type: 'P', text: 'Definitions are cheap and events are not, so the first metric gets instrumented in one afternoon and then left alone for a full week. Write the event name down before anyone opens the code, agree the two properties it needs, and resist the other eleven you have just thought of.' },
          {
            type: 'Steps',
            items: [
              'Write down the one event that predicts a retained user before touching code',
              'Add it with two properties — plan and source — and nothing else in the first pass',
              'Send it to a test project for a day and check volume against your database',
              'Ship to production, then leave the definition alone for a full week',
              "Build the chart from the playbook template and put it on Monday's dashboard",
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Build your first chart',
    ctaBody: 'Send the metric you care most about in the enquiry form. We reply with the event spec and the chart template to start from.',
  },
  {
    parent: 'loop',
    slug: 'integrations',
    title: 'Loopmetric — integrations and warehouse sync',
    description: 'JavaScript, iOS, Android and server SDKs, Segment and RudderStack mirrors, and Snowflake or BigQuery sync: what each connection does and how long it takes.',
    kicker: 'Loopmetric · integrations',
    heading: 'Connect your stack',
    lede: 'Instrument in under ten minutes, or skip the SDK entirely and sync from the warehouse you already own. Both paths land in the same charts.',
    variant: 'cards',
    stats: [['10min', 'to first event'], ['4', 'server SDKs'], ['12mo', 'history backfilled']],
    sections: [
      {
        title: 'The SDKs',
        blocks: [
          { type: 'P', text: 'Four lines of JavaScript or a single server call starts the flow, and identify calls are free on every plan. Most teams see their first event inside ten minutes and their first chart the same afternoon, without a data engineer in the room.' },
          {
            type: 'List',
            items: [
              'JavaScript snippet, iOS and Android, Node, Python and Go servers',
              'First event usually live in under ten minutes',
              'identify() and property updates never count toward your event limit',
            ],
          },
        ],
      },
      {
        title: 'Segment and RudderStack',
        blocks: [
          { type: 'P', text: 'If you already send events through a pipeline, mirror the spec instead of re-instrumenting. Turn on the destination, map your existing event names, and historical funnels backfill on day one — no renaming sprint, no second source of truth for the same click.' },
          {
            type: 'List',
            items: [
              'Works as a destination — no code change beyond the toggle',
              'Existing event names map straight through, no renaming sprint',
              'Twelve months of history backfilled from your warehouse on day one',
            ],
          },
        ],
      },
      {
        title: 'Warehouse-native mode',
        blocks: [
          { type: 'P', text: 'Raw events stay in your Snowflake or BigQuery and we store only derived models. Revoke our access and your data is untouched: the charts stop, but nothing you own leaves your account, which is the answer security teams want in the first meeting.' },
          {
            type: 'List',
            items: [
              'Snowflake, BigQuery and Redshift supported on the Scale plan',
              'Raw tables stay in your account; we read only what you model',
              'EU hosting in Frankfurt by default, US and Australia per project',
            ],
          },
          { type: 'Note', text: 'Warehouse mode still needs one of the SDKs or a Segment source — it changes where events are stored, not how they are collected.' },
        ],
      },
      {
        title: 'Which path fits your team',
        blocks: [
          { type: 'P', text: 'Three routes into the same charts, and the right one depends less on your stack than on who owns instrumentation six months from now. Teams with a dedicated data person tend to start in the warehouse; everyone else usually gets more value from the SDK and a written event spec.' },
          {
            type: 'List',
            items: [
              'Under five engineers, no data team — JavaScript snippet plus server identify calls',
              'Events already flowing through Segment or RudderStack — add us as a destination',
              'Raw data must not leave your account — warehouse-native on Snowflake or BigQuery',
              'Leaving another tool — backfill twelve months first, then move the dashboards',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Connect your first source',
    ctaBody: 'Tell us your stack in the enquiry form — SDK, Segment or warehouse. We reply with the exact steps and a sample event spec.',
  },
  {
    parent: 'loop',
    slug: 'retention-benchmarks',
    title: 'Loopmetric — retention benchmarks by segment',
    description: 'Median day 1, day 7 and day 30 retention for six product segments, with the sample behind each figure and the three ways teams misread the columns.',
    kicker: 'Loopmetric · benchmarks',
    heading: 'Retention benchmarks',
    lede: 'Medians from anonymised cohort charts across the Loopmetric panel, split by segment. Treat them as a floor to argue with rather than a target to hit.',
    variant: 'log',
    stats: [['6', 'segments'], ['2,400', 'apps in the panel'], ['12mo', 'window to September']],
    sections: [
      {
        title: 'How the numbers were built',
        blocks: [
          { type: 'P', text: 'Every figure is the median of per-app day 1, day 7 and day 30 retention, computed from weekly signup cohorts over the twelve months to September. Apps under 1,000 monthly signups are excluded, as are apps where more than a third of sessions come from internal traffic.' },
          {
            type: 'Table',
            head: ['Segment', 'D1', 'D7', 'D30'],
            rows: [
              ['Consumer mobile', '42%', '18%', '9%'],
              ['Prosumer SaaS, self-serve', '58%', '31%', '19%'],
              ['Team B2B SaaS', '71%', '44%', '32%'],
              ['Marketplace', '38%', '16%', '8%'],
              ['Fintech', '64%', '34%', '21%'],
              ['News and media', '27%', '11%', '5%'],
            ],
          },
          { type: 'Note', text: 'Percentages are of the signup cohort, not of actives — a chunk of every cohort never returns at all, which is exactly why all three columns matter.' },
        ],
      },
      {
        title: 'Reading the three columns',
        blocks: [
          { type: 'P', text: 'Day 1 measures your onboarding, day 7 measures whether a habit formed, and day 30 measures whether the product still earns a place. Reading them as a single number is the fastest way to argue about the wrong thing: a strong D1 and a soft D7 is a reminder problem, not an acquisition one.' },
          {
            type: 'List',
            items: [
              'D1 below the line — the first session never reaches the activation event',
              'D1 healthy, D7 soft — people get value once and are never pulled back',
              'D7 healthy, D30 soft — the weekly loop is missing; give people a reason to return',
              'Compare like with like: same segment, same cohort definition, same window',
            ],
          },
        ],
      },
      {
        title: 'The three ways teams misread this',
        blocks: [
          { type: 'P', text: 'The same three mistakes explain almost every panic we have talked a customer out of. None of them are about the product, and all of them are fixed by changing the query rather than the roadmap, usually in an afternoon with the analyst who wrote it.' },
          {
            type: 'List',
            items: [
              'Averaging across channels — paid installs retain nothing like organic signups',
              'Mixing new and revived users in one cohort, so a win-back email looks like growth',
              'Reading a weekly cohort against a daily active average — different denominators',
              'Checking a single good day against a median built from twelve months of them',
            ],
          },
          { type: 'Note', text: 'Split any surprising cohort by acquisition source before you post it in the incident channel.' },
        ],
      },
      {
        title: 'If you are under the line',
        blocks: [
          { type: 'P', text: 'Benchmarks are the start of a conversation, not a verdict. Teams that move up a band within a quarter tend to do the same three things: name the activation event, shorten the time to first value, and give people a scheduled reason to come back before day six rather than a plea on day thirty.' },
          {
            type: 'List',
            items: [
              'Put the activation funnel on the Monday dashboard and read it out loud',
              'Cut every step between signup and that event until one of them hurts',
              "Build a day-six trigger — a digest, a pending task, a teammate's reply",
              'Re-measure against this table after a full month of cohorts, not a week',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Benchmark your own cohorts',
    ctaBody: 'Send your segment and your current D7 number through the enquiry form. We reply with the matching row, the chart template and where you sit against it.',
  },
  {
    parent: 'loop',
    slug: 'rollout',
    title: 'Loopmetric — a three-week rollout, week by week',
    description: 'How one fourteen-person product team went from a first event to alerts on the numbers that matter: week one instrument, week two agree, week three trust.',
    kicker: 'Loopmetric · rollout',
    heading: 'A rollout, week by week',
    lede: 'One team, three weeks, no migration project. The order below is what worked — including the week they nearly instrumented everything and spent Friday unwinding it.',
    variant: 'story',
    stats: [['3', 'weeks to live'], ['6', 'events at launch'], ['14', 'engineers']],
    sections: [
      {
        title: 'Week one — one event, one question',
        blocks: [
          { type: 'P', text: 'The team started with a single question: how many people who arrive on the pricing page send an invite during their first session. One event, two properties — plan and source — and a test project that ran for a day before anything touched production. Six events existed by Friday, twelve fewer than the spreadsheet had suggested they needed.' },
          {
            type: 'List',
            items: [
              'Monday: write the event name and its two properties before opening the editor',
              'Tuesday: ship to a test project and compare volume against the database',
              'Wednesday: production, tagged so cohorts can be split around the deploy',
              'Friday: six events live, the event spec committed to the repo, the rest refused',
            ],
          },
        ],
      },
      {
        title: 'Week two — agreeing what the numbers mean',
        blocks: [
          { type: 'P', text: 'Instrumentation was the easy half. The hard half was a forty-minute argument about whether an activation event counted a signup who had not confirmed their email — settled, in the end, by the person who showed what the old dashboard had been reporting all along. From that meeting, Loopmetric is the number read out on Mondays and the old Looker tab was retired the same afternoon.' },
          { type: 'Quote', text: 'The argument used to be whose query was right. Now it is what we do about the number, and that meeting is twenty minutes shorter.' },
          {
            type: 'List',
            items: [
              'One written definition per metric, stored beside the events in the repo',
              'Loopmetric quoted in reviews; other dashboards kept for debugging only',
              'Definitions change in a pull request, never in a private message',
            ],
          },
        ],
      },
      {
        title: 'Week three — alerts and the warehouse',
        blocks: [
          { type: 'P', text: 'With the numbers agreed, the team turned on the two things that make a dashboard live rather than decorative: alerts on the metrics that move the business, and a sync that writes the derived models back into their own Snowflake. Data engineering signed off in an afternoon because raw events never left their account.' },
          {
            type: 'List',
            items: [
              'Alert on a 20% week-over-week drop in activation — one channel, one message',
              'Hourly warehouse sync to Snowflake, derived models only',
              'SAML SSO for the whole team, audit logs exported to the SIEM',
              'A shared dashboard for Monday, a private one for whoever is on call',
            ],
          },
          { type: 'Note', text: 'Alerts were capped at three for the first month. Every extra one diluted the ones that mattered.' },
        ],
      },
      {
        title: 'What they would do differently',
        blocks: [
          { type: 'P', text: 'Ask the analytics lead what she would change and the answer is not the tools. They spent a week naming twenty events nobody read, then two days writing the six that everything now depends on; the order below is the shortcut they would take on the next rollout, and the spreadsheet of rejected events is how they say no to the next request.' },
          {
            type: 'List',
            items: [
              'Write the spec before the code — six events beat twenty guessed ones',
              'Agree definitions in a room with the people who quote them, not in a ticket',
              'Backfill history first so week two has a line to compare against',
              'Give one team ownership; a shared dashboard nobody owns rots quietly',
            ],
          },
        ],
      },
    ],
    ctaTitle: 'Plan your rollout',
    ctaBody: 'Send your team size and the first question you want answered through the enquiry form. We reply with a three-week plan shaped around your stack.',
  },
];
