# Growth Strategy

## Purpose
Develop a comprehensive growth strategy analyzing PLG vs SLG vs community-led approaches, growth loop identification, activation optimization, retention strategy, viral mechanics, and expansion revenue levers. Applies modern growth frameworks to create a systematic, compounding growth engine.

## Auto-Trigger Patterns
- "Create a growth strategy" / "growth plan"
- "PLG vs SLG analysis" / "product-led growth strategy"
- "How do we grow faster?" / "growth loop analysis"
- "Activation and retention strategy"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Current growth metrics (acquisition, activation, retention, revenue), product type, target segments, current go-to-market motion
- **Optional:** Funnel data, cohort analysis, viral coefficient, expansion revenue data, competitive growth analysis
- **Reference:** Growth frameworks (Reforge, PLG), `context/initiatives/` for current growth initiatives

## Process
1. **Diagnose current growth** — Where in the funnel is the biggest opportunity? Acquisition, activation, retention, or monetization? Use AARRR pirate metrics to find the constraint.
2. **Evaluate growth motions:**
   - **PLG (Product-Led Growth):** Product is the primary driver. Free/trial, self-serve onboarding, in-product expansion triggers. Best for: high-volume, low-touch, broad market.
   - **SLG (Sales-Led Growth):** Sales team drives adoption. Demo → proposal → close. Best for: high-value, complex, enterprise.
   - **Community-Led Growth:** Community creates awareness and trust. Content, events, open-source, developer relations. Best for: developer tools, knowledge work.
   - **Hybrid:** Most companies combine motions. Identify the primary and secondary.
3. **Map growth loops** — Identify the repeatable cycle: input → action → output → new input. Viral loops, content loops, paid loops, sales loops.
4. **Optimize activation** — What's the "aha moment"? How quickly do users reach it? What % reach it? What interventions accelerate it?
5. **Strengthen retention** — What drives habitual usage? What's the natural frequency? Where do users churn and why?
6. **Build viral mechanics** — Natural virality (collaboration features), incentivized virality (referrals), word-of-mouth (NPS-driven). Not every product is viral — that's okay.
7. **Design expansion revenue** — Seat expansion, feature upsells, usage growth, cross-sell. What triggers expansion naturally?
8. **Prioritize and sequence** — Can't do everything. Pick the highest-leverage growth lever and double down.

## Output Format
```
## Growth Strategy: [Product]
**Primary Motion:** [PLG / SLG / Community-Led / Hybrid]
**Growth Constraint:** [Where the biggest opportunity is]

### Current Growth Diagnostics
| Stage | Metric | Current | Benchmark | Status |
|-------|--------|---------|-----------|--------|
| Acquisition | [Metric] | [Value] | [Benchmark] | 🟢/🟡/🔴 |
| Activation | [Metric] | [Value] | [Benchmark] | 🟢/🟡/🔴 |
| Retention | [Metric] | [Value] | [Benchmark] | 🟢/🟡/🔴 |
| Revenue | [Metric] | [Value] | [Benchmark] | 🟢/🟡/🔴 |
| Referral | [Metric] | [Value] | [Benchmark] | 🟢/🟡/🔴 |

### Growth Motion Analysis
| Motion | Fit Score | Rationale |
|--------|-----------|-----------|
| PLG | [1-5] | [Why or why not] |
| SLG | [1-5] | [Why or why not] |
| Community-Led | [1-5] | [Why or why not] |

### Growth Loops
**Primary loop:** [Description of the main repeatable growth cycle]
**Secondary loop:** [Supporting growth mechanism]

### Activation Strategy
- **"Aha moment":** [What it is and evidence]
- **Current time-to-aha:** [Metric]
- **Target time-to-aha:** [Goal]
- **Interventions:** [How to accelerate activation]

### Retention Strategy
- **Natural frequency:** [How often users should return]
- **Retention drivers:** [What drives repeat usage]
- **Churn causes:** [Top 3 churn reasons]
- **Interventions:** [How to improve retention]

### Viral & Expansion Mechanics
- **Viral coefficient:** [Current k-factor, if measurable]
- **Viral mechanics:** [What drives organic sharing]
- **Expansion triggers:** [What drives seat/usage expansion]
- **Expansion revenue strategy:** [How to systematically grow ACV]

### Priority Growth Levers
| Lever | Impact | Effort | Priority |
|-------|--------|--------|----------|
| [Lever 1] | High/Med/Low | High/Med/Low | P1 |
| [Lever 2] | ... | ... | P2 |

### 90-Day Growth Plan
[Top 3 initiatives for the next 90 days — the highest-leverage moves]
```

## Quality Standards
- Growth motion analysis is evidence-based, not aspirational. "We should be PLG" needs to be supported by product and market evidence.
- Growth loops are specific and diagrammable — not vague "users tell other users."
- Activation is tied to a specific, measurable "aha moment" — not a generic onboarding flow.
- Retention analysis addresses root causes of churn, not just symptoms.
- **Anti-patterns:** Declaring PLG without product-market fit, optimizing acquisition when activation is broken, generic "growth hacking" tactics without strategy, ignoring retention in favor of acquisition, no prioritization of growth levers.

## Framework References
- AARRR Pirate Metrics — funnel framework
- Growth Loops (Reforge) — sustainable, compounding growth mechanisms
- PLG frameworks — product-led acquisition, expansion, retention
- Viral coefficient and viral cycle time

## Formatting Guidelines
- Funnel diagnostics in table format with benchmarks.
- Growth loops described as cycles, not features.
- Priority matrix for growth levers.
- 90-day plan is concrete and actionable.
- Keep to 4-5 pages.

## Example
> **Growth Constraint:** Activation — 62% of signups never reach the "aha moment" (creating their first workflow). Acquisition is healthy (growing 8% MoM organically), but we're leaking users before they experience value.
>
> **Primary Growth Loop:** Developer integrates API → builds workflow → invites team → team members become advocates → org expands seats → developer community shares use cases → new developers integrate API.
>
> **90-Day Plan:**
> 1. Reduce time-to-first-workflow from 45 minutes to 10 minutes (guided setup wizard)
> 2. Launch "invite your team" prompt at the workflow-creation moment (activation → expansion)
> 3. Ship usage-based email digests showing workflow value (retention reinforcement)
