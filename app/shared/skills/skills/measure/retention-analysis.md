# Retention Analysis

## Purpose
Conduct a deep retention analysis — examining D1/D7/D30/D90 retention rates, retention by cohort and segment, retention by acquisition channel, plotting retention curves, identifying inflection points, and developing improvement strategies. Retention is the truest signal of product-market fit and the foundation of sustainable growth.

## Auto-Trigger Patterns
- "retention analysis for [product]"
- "D1/D7/D30 retention"
- "why is retention dropping"
- "retention by [segment/channel/cohort]"
- "improve retention for [product/segment]"
- "retention curves"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Retention data | Yes | User prompt |
| Cohort definitions | Recommended | User prompt |
| Segment definitions | Recommended | User prompt |
| Acquisition channel data | Optional | User prompt |
| Product change timeline | Optional | User prompt |

## Process
1. **Calculate core retention rates** — D1, D7, D14, D30, D60, D90 retention. Define "retained" clearly: any login? Meaningful action? Revenue-generating activity?
2. **Plot retention curves** — Visualize retention over time. Does the curve flatten (healthy — found retained users) or continue declining (problematic — no stable base)?
3. **Cohort comparison** — Compare retention curves across signup cohorts. Are newer cohorts retaining better? Where specifically do they diverge?
4. **Segment analysis** — Retention by meaningful segments: plan tier, company size, role, use case, geography. Which segments have best/worst retention?
5. **Channel analysis** — Retention by acquisition channel: organic, paid, referral, sales-led. Which channels bring users who stick?
6. **Identify inflection points** — Where does the retention curve change slope? Day 3? Week 2? This reveals critical experience moments.
7. **Diagnose retention drivers** — What behaviors predict high retention? What behaviors precede churn? Identify "magic number" activation criteria.
8. **Develop improvement strategies** — For each retention gap: specific intervention, target audience, expected impact, implementation approach.

## Output Format
```
## Retention Analysis: [Product]
**Period:** [Date range]  |  **Definition of "retained":** [Criteria]

### Core Retention Rates
| Timeframe | Retention Rate | Benchmark | Status | Trend |
|-----------|---------------|-----------|--------|-------|
| D1 | [X%] | [Y%] | ✅/⚠️/❌ | ↑/↓/→ |
| D7 | [X%] | [Y%] | ✅/⚠️/❌ | ↑/↓/→ |
| D14 | [X%] | [Y%] | ✅/⚠️/❌ | ↑/↓/→ |
| D30 | [X%] | [Y%] | ✅/⚠️/❌ | ↑/↓/→ |
| D60 | [X%] | [Y%] | ✅/⚠️/❌ | ↑/↓/→ |
| D90 | [X%] | [Y%] | ✅/⚠️/❌ | ↑/↓/→ |

### Retention Curve Assessment
- **Curve shape:** [Flattening / Continuous decline / Step-function]
- **Stabilization point:** [Day/week where curve flattens — if it does]
- **Stable retention rate:** [Long-term retention %]
- **Interpretation:** [What this means for the product]

### Cohort Comparison
| Cohort | D1 | D7 | D30 | D90 | Trend vs. Prior |
|--------|-----|-----|------|------|----------------|
| [Latest] | [%] | [%] | [%] | — | [Better/Worse/Same] |
| [Prior] | [%] | [%] | [%] | [%] | — |
| [Oldest] | [%] | [%] | [%] | [%] | — |

### Segment Retention
| Segment | D7 | D30 | D90 | Notable |
|---------|-----|------|------|---------|
| [Enterprise] | [%] | [%] | [%] | [Insight] |
| [SMB] | [%] | [%] | [%] | [Insight] |
| [Self-serve] | [%] | [%] | [%] | [Insight] |

### Channel Retention
| Channel | D7 | D30 | CAC | D30 Retention-Adjusted CAC |
|---------|-----|------|-----|--------------------------|
| [Organic] | [%] | [%] | [$X] | [$X / D30 rate] |
| [Paid] | [%] | [%] | [$X] | [$X / D30 rate] |
| [Referral] | [%] | [%] | [$X] | [$X / D30 rate] |

### Inflection Points
| Period | Event | Retention Impact | Hypothesis |
|--------|-------|-----------------|-----------|
| D1-D3 | [First session drop-off] | [Major — lose X%] | [Onboarding friction] |
| D7-D14 | [Second week dip] | [Moderate — lose X%] | [No habit formed] |

### Retention Drivers
| Behavior | D30 Retention If Done | D30 Retention If Not | Lift |
|----------|---------------------|---------------------|------|
| [Completed onboarding] | [X%] | [Y%] | [+Z pp] |
| [Used feature A in week 1] | [X%] | [Y%] | [+Z pp] |
| [Invited teammate] | [X%] | [Y%] | [+Z pp] |

### Improvement Strategies
| Priority | Strategy | Target Period | Expected Impact | Effort |
|----------|---------|-------------|----------------|--------|
| 1 | [Improve first-session experience] | D0-D1 | [+X pp D7 retention] | Medium |
| 2 | [Week 2 re-engagement campaign] | D7-D14 | [+X pp D30 retention] | Small |
| 3 | [Team activation incentive] | D1-D7 | [+X pp D30 retention] | Medium |

### Key Insight
[The single most important finding from this analysis]
```

## Quality Standards
- "Retained" is clearly defined — ambiguous definitions produce meaningless metrics.
- Retention curves are assessed for shape (flattening vs. continuous decline) — this is the most important signal.
- Retention drivers identify specific behaviors to encourage, not just correlations.
- Channel retention is combined with CAC for true acquisition quality assessment.

**Anti-patterns:** Reporting retention without defining "retained," ignoring curve shape, treating correlation as causation in retention drivers, no action plan for improvement.

## Framework References
- **Retention curve analysis** — Shape-based assessment of product-market fit.
- **Activation metrics** — Identifying behaviors that predict retention.
- **Retention-adjusted CAC** — True cost of acquiring a retained customer.

## Formatting Guidelines
- Core retention table with benchmarks and status (instant health check).
- Curve assessment in prose (qualitative interpretation of quantitative data).
- Cohort comparison table (are things getting better?).
- Retention drivers with lift (identifies product levers).

## Example
**Key insight:** "The biggest retention opportunity is in the D1-D3 window where we lose 35% of users. Users who complete the 'first project' action within 48 hours retain at 2.4x the rate of those who don't (58% D30 vs. 24% D30). Currently only 41% of new users create a project in 48 hours. Reducing friction in project creation (currently 7 steps — could be 3) is the highest-leverage retention investment we can make."
