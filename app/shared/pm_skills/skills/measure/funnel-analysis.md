# Funnel Analysis

## Purpose
Analyze a conversion funnel step by step — calculating conversion rates, identifying drop-off points, comparing across segments and time periods, pinpointing bottlenecks, formulating improvement hypotheses, and recommending experiments. Turns funnel data into a prioritized list of optimization opportunities.

## Auto-Trigger Patterns
- "funnel analysis for [flow/product]"
- "where are users dropping off"
- "conversion funnel for [signup/purchase/onboarding]"
- "funnel optimization for [flow]"
- "drop-off analysis"
- "why is conversion low in [step]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Funnel steps and data | Yes | User prompt |
| Time period | Recommended | User prompt |
| Segment definitions | Optional | User prompt |
| Historical comparison data | Optional | User prompt |
| Benchmarks | Optional | User prompt |

## Process
1. **Define the funnel** — Map every step from entry to goal completion. Ensure the funnel is comprehensive — missing steps hide drop-off points.
2. **Calculate step conversion** — For each step: entering users, exiting users, conversion rate, and drop-off rate. Both step-to-step and overall.
3. **Identify the biggest drop-offs** — Where is the absolute and relative loss greatest? Prioritize by: volume of users lost × value per user.
4. **Segment the funnel** — Compare conversion by: acquisition channel, user type, device, plan tier, geography. Are some segments converting much better/worse?
5. **Time-series analysis** — How has the funnel changed over time? Week-over-week, month-over-month. Are drop-offs getting better or worse?
6. **Diagnose bottlenecks** — For the top drop-off points: what's causing users to leave? UX friction, value unclear, technical issues, trust barrier, competitive alternative?
7. **Form improvement hypotheses** — For each bottleneck: what could improve conversion? Rank by expected impact and implementation effort.
8. **Recommend tests** — Design experiments to validate top hypotheses. Quick wins first.

## Output Format
```
## Funnel Analysis: [Funnel Name]
**Period:** [Date range]  |  **Total entries:** [N]

### Funnel Overview
| Step | Users | Conversion | Drop-off | Cumulative |
|------|-------|-----------|---------|-----------|
| 1. [Landing page] | [N] | — | — | 100% |
| 2. [Signup start] | [N] | [X%] | [Y%] | [Z%] |
| 3. [Signup complete] | [N] | [X%] | [Y%] | [Z%] |
| 4. [Activation] | [N] | [X%] | [Y%] | [Z%] |
| 5. [Goal] | [N] | [X%] | [Y%] | [Z%] |

### Biggest Drop-Off Points
| Rank | Step | Drop-Off Rate | Users Lost | Revenue Impact |
|------|------|-------------|-----------|---------------|
| 1 | [Step X → Y] | [X%] | [N users] | [$X estimated] |

### Segment Comparison
| Segment | Overall Conversion | Best Step | Worst Step |
|---------|-------------------|----------|-----------|
| [Mobile] | [X%] | [Step A: Y%] | [Step B: Z%] |
| [Desktop] | [X%] | [Step A: Y%] | [Step B: Z%] |

### Time Trends
| Period | Overall Conversion | Key Step Change | Driver |
|--------|-------------------|----------------|--------|
| [Last month] | [X%] | [Step: Δ] | [What changed] |

### Bottleneck Diagnosis
| Drop-off Point | Likely Cause | Evidence | Confidence |
|---------------|-------------|----------|-----------|
| [Step X → Y] | [UX friction / value unclear / etc.] | [Data supporting] | High/Med/Low |

### Improvement Hypotheses
| # | Hypothesis | Expected Impact | Effort | Priority |
|---|-----------|----------------|--------|----------|
| 1 | [Reducing form fields will increase Step 2→3] | [+X% conversion] | Small | P0 |
| 2 | [Adding social proof will reduce Step 3→4 drop-off] | [+X%] | Medium | P1 |

### Recommended Experiments
1. **[Experiment name]** — Test [hypothesis] by [variant]. Expected lift: [X%].
```

## Quality Standards
- Every funnel step is accounted for — missing steps hide the real bottleneck.
- Drop-offs are prioritized by absolute impact (users × value), not just percentage.
- Diagnoses are evidence-based, not assumptions about what "probably" causes drop-off.
- Hypotheses are specific and testable, with expected impact quantified.

**Anti-patterns:** Incomplete funnels, focusing on percentage without absolute numbers, diagnosing without evidence, too many hypotheses without prioritization.

## Framework References
- **AARRR (Pirate Metrics)** — Acquisition, Activation, Retention, Revenue, Referral funnel.
- **Impact/effort matrix** — Prioritizing hypotheses by expected impact and implementation cost.

## Formatting Guidelines
- Funnel table with cumulative conversion (visual progression).
- Drop-off ranking by impact (prioritized action).
- Segment comparison table (finding optimization opportunities).
- Hypotheses with impact/effort/priority (decision support).

## Example
**Bottleneck diagnosis:** "The largest drop-off (38%) occurs between 'Signup Complete' and 'First Dashboard.' Session recordings show 60% of users land on an empty dashboard with no guidance. The 'setup wizard' is hidden behind a menu. Hypothesis: making the setup wizard the default post-signup experience will increase step 3→4 conversion by 15-20%."
