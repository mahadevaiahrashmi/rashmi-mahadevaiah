# Revenue Impact Analysis

## Purpose
Quantify the revenue impact of a feature or product change — measuring direct revenue effects, indirect impacts on retention and expansion, assessing cannibalization risk, calculating ROI, and projecting payback timelines. Connects product decisions to financial outcomes for business-case rigor.

## Auto-Trigger Patterns
- "revenue impact of [feature]"
- "ROI analysis for [initiative]"
- "what's [feature] worth in revenue"
- "business case for [investment]"
- "revenue attribution for [feature]"
- "financial impact of [product change]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / change description | Yes | User prompt |
| Revenue data | Yes | User prompt |
| Usage / adoption data | Recommended | User prompt |
| Cost data | Recommended | User prompt |
| Retention / churn data | Optional | User prompt |

## Process
1. **Define the scope** — What revenue streams are potentially affected? Direct (monetized feature), indirect (retention improvement, upsell enablement), and negative (cannibalization of existing revenue).
2. **Measure direct revenue impact** — New revenue directly attributable to the feature: new customers acquired because of it, upsells driven by it, add-on revenue.
3. **Assess indirect effects** — Retention improvement (fewer cancellations), expansion revenue (users upgrading because of improved value), NRR improvement.
4. **Evaluate cannibalization risk** — Does this feature/change reduce revenue elsewhere? Free tier substituting for paid? New product cannibalizing existing product?
5. **Calculate ROI** — (Revenue gained − Revenue lost − Cost of building) / Cost of building. Include ongoing maintenance costs.
6. **Project payback timeline** — When does cumulative revenue from the change exceed the investment? Monthly cash flow projection.
7. **Sensitivity analysis** — What if adoption is 50% lower? What if churn impact is half of expected? Model optimistic, base, and pessimistic scenarios.
8. **Compare to opportunity cost** — What else could the team have built with the same resources? Is this the highest-ROI use of engineering time?

## Output Format
```
## Revenue Impact Analysis: [Feature/Change]
**Analysis Date:** [date]  |  **Period:** [Date range]

### Impact Summary
| Category | Impact | Confidence | Notes |
|----------|--------|-----------|-------|
| Direct revenue | [+$X / month] | High/Med/Low | [New sales / upsells] |
| Retention improvement | [+$X / month saved] | High/Med/Low | [Reduced churn] |
| Expansion revenue | [+$X / month] | High/Med/Low | [Upgrades enabled] |
| Cannibalization | [-$X / month] | High/Med/Low | [Revenue displaced] |
| **Net impact** | **[+$X / month]** | | |

### Direct Revenue Attribution
| Source | Revenue | Methodology |
|--------|---------|------------|
| [New customers citing feature] | [$X] | [Attribution method] |
| [Upsells to access feature] | [$X] | [Direct tracking] |
| [Usage-based revenue] | [$X] | [Metered billing] |

### Indirect Revenue Effects
| Effect | Metric Change | Revenue Impact | Evidence |
|--------|-------------|---------------|----------|
| Retention | [Churn reduced by X%] | [+$X/month saved] | [Cohort analysis] |
| Expansion | [NRR improved by X%] | [+$X/month] | [Segment data] |

### ROI Calculation
| Component | Value |
|-----------|-------|
| Total investment (build + maintain) | [$X] |
| Total revenue impact (annualized) | [$X] |
| ROI | [X%] |
| Payback period | [X months] |

### Scenario Analysis
| Scenario | Revenue Impact | ROI | Payback |
|----------|---------------|-----|---------|
| Optimistic | [$X / month] | [X%] | [X months] |
| Base case | [$X / month] | [X%] | [X months] |
| Pessimistic | [$X / month] | [X%] | [X months] |

### Cannibalization Assessment
| Risk | Description | Magnitude | Mitigation |
|------|------------|-----------|-----------|
| [Free tier substitution] | [Users downgrade because...] | [-$X/mo] | [Packaging change] |

### Recommendations
1. [Action based on revenue findings]
2. [Optimization opportunity]
```

## Quality Standards
- Revenue attribution methodology is explicit and defensible — not just correlated.
- Indirect effects include both positive (retention) and negative (cannibalization) impacts.
- Scenario analysis shows sensitivity to key assumptions — decisions shouldn't hinge on one number.
- Investment cost includes ongoing maintenance, not just initial build.

**Anti-patterns:** Attributing all correlated revenue to the feature, ignoring cannibalization, ROI without including full costs, single-scenario projections.

## Framework References
- **Revenue attribution** — Methods for connecting features to financial outcomes.
- **ROI analysis** — Return on investment calculation with payback period.
- **Scenario planning** — Optimistic/base/pessimistic projections.

## Formatting Guidelines
- Impact summary table at top (net revenue picture).
- ROI calculation clearly laid out (transparent methodology).
- Scenario analysis table (sensitivity to assumptions).
- Confidence levels on each impact category (honest uncertainty).

## Example
**Impact summary:** "Smart Filters generates $28K/month direct revenue (3% conversion uplift in free→paid) and saves $15K/month in retained revenue (users with Filters churn 22% less). Cannibalization is minimal ($2K from users who would have upgraded anyway). Net impact: +$41K/month. At $180K total investment, payback is 4.4 months. Even in the pessimistic scenario (50% lower adoption), payback is under 9 months."
