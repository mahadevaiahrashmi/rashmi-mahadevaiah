# Feature Adoption Analysis

## Purpose
Analyze how a feature is being adopted — tracking adoption rate over time, mapping the activation funnel, examining usage patterns, distinguishing power users from casual users, measuring feature retention, and recommending strategies to increase adoption. Determines whether a shipped feature is actually delivering value.

## Auto-Trigger Patterns
- "feature adoption for [feature]"
- "how is [feature] being used"
- "adoption rate for [feature]"
- "who's using [feature]"
- "feature usage analysis"
- "improve adoption of [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature name and description | Yes | User prompt |
| Usage / analytics data | Yes | User prompt |
| Time since launch | Recommended | User prompt |
| Target adoption metrics | Optional | User prompt or PRD |
| User segments | Optional | User prompt |

## Process
1. **Define adoption metrics** — Awareness (saw the feature), activation (tried it), adoption (regular use), power usage (deep/advanced use). Each stage has different metrics.
2. **Measure adoption rate** — What percentage of eligible users have tried the feature? Used it more than once? Use it regularly? Track over time.
3. **Map the activation funnel** — From feature discovery to regular use: where do users drop off? Is the first experience compelling enough to drive repeat use?
4. **Analyze usage patterns** — How are users actually using it? Frequency, depth, use cases. Are they using it as designed or finding workarounds?
5. **Segment analysis** — Which segments adopt most/least? By: plan tier, company size, role, tenure, acquisition channel. Where should you invest in adoption?
6. **Power users vs. casual** — What distinguishes heavy users from light users? Feature of behavior, company characteristics, onboarding experience.
7. **Feature retention** — Of users who try the feature, how many continue using it over time? D1, D7, D30 feature retention.
8. **Recommendations** — Based on findings: improve discoverability, simplify activation, enhance the feature, target specific segments, or reconsider the feature.

## Output Format
```
## Feature Adoption Analysis: [Feature Name]
**Launch Date:** [date]  |  **Analysis Date:** [date]
**Eligible Users:** [N]

### Adoption Funnel
| Stage | Users | Rate | Notes |
|-------|-------|------|-------|
| Eligible | [N] | 100% | [Who can use this feature] |
| Aware | [N] | [X%] | [Saw feature / tooltip / announcement] |
| Activated | [N] | [X%] | [Tried it at least once] |
| Adopted | [N] | [X%] | [Used 3+ times or regularly] |
| Power user | [N] | [X%] | [Heavy / advanced usage] |

### Adoption Over Time
| Period | Weekly Adoption Rate | Cumulative Adopters | Trend |
|--------|---------------------|-------------------|-------|
| Week 1 | [X%] | [N] | — |
| Week 2 | [X%] | [N] | ↑/↓ |
| Week 4 | [X%] | [N] | ↑/↓ |

### Feature Retention
| Cohort | D1 | D7 | D14 | D30 |
|--------|-----|-----|------|------|
| [Week 1 activators] | [%] | [%] | [%] | [%] |

### Usage Patterns
| Pattern | % of Users | Frequency | Depth |
|---------|-----------|-----------|-------|
| [Primary use case] | [X%] | [X/week] | [Basic/Advanced] |
| [Secondary use case] | [X%] | [X/week] | [Basic/Advanced] |

### Segment Breakdown
| Segment | Adoption Rate | vs. Average | Power User % |
|---------|--------------|-------------|-------------|
| [Enterprise] | [X%] | [Above/Below] | [X%] |
| [SMB] | [X%] | [Above/Below] | [X%] |

### Power User Profile
| Characteristic | Power Users | Casual Users | Delta |
|---------------|-------------|-------------|-------|
| [Company size] | [Average] | [Average] | [Diff] |
| [Tenure] | [Average] | [Average] | [Diff] |
| [Other feature usage] | [Pattern] | [Pattern] | [Diff] |

### Drop-Off Analysis
| Drop-off Point | Rate | Likely Cause | Recommendation |
|---------------|------|-------------|----------------|
| Aware → Activated | [X%] | [Discoverability / UX] | [Action] |
| Activated → Adopted | [X%] | [Value unclear / effort] | [Action] |

### Recommendations
| Priority | Action | Expected Impact | Effort |
|----------|--------|----------------|--------|
| 1 | [Improve discoverability] | [+X% activation] | S/M/L |
| 2 | [Simplify first experience] | [+X% adoption] | S/M/L |
```

## Quality Standards
- Adoption is measured through the full funnel (aware → power user), not just "used it once."
- Feature retention is tracked — a feature that people try but don't return to has a value problem.
- Segment analysis identifies where to focus adoption efforts.
- Recommendations are prioritized by impact and effort.

**Anti-patterns:** Reporting only activation (first use) as success, ignoring feature retention, not segmenting adoption, no action plan for low adoption.

## Framework References
- **Feature adoption funnel** — Awareness → Activation → Adoption → Advocacy.
- **Product-led growth** — Driving feature adoption through product experience.

## Formatting Guidelines
- Adoption funnel as cascading table (visual progression).
- Feature retention by cohort (standard retention analysis).
- Segment breakdown with above/below average flags.
- Recommendations with priority, impact, and effort.

## Example
**Drop-off insight:** "62% of users who are 'aware' of Smart Filters (saw the tooltip) never activate it. Session recordings show the tooltip appears during a task-focused workflow — users dismiss it and never return to explore. Recommendation: instead of a tooltip, show a contextual 'try Smart Filters' prompt when users manually apply 3+ filters in one session — meeting them at the point of need."
