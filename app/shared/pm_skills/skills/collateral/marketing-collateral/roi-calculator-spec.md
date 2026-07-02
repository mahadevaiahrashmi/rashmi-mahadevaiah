# ROI Calculator Spec

## Purpose
Creates a specification for an interactive ROI calculator tool, defining input variables, calculation methodology, output format, underlying assumptions, sensitivity analysis parameters, and presentation design. Enables prospects to quantify the business value of adopting your product.

## Auto-Trigger Patterns
- "Create an ROI calculator spec for [product]"
- "Build a business value calculator design"
- "I need to spec out an ROI tool for prospects"
- "Help me design a value assessment calculator"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Value drivers (time saved, revenue gained, cost reduced), cost model, baseline assumptions, customer data for calibration
- **Optional:** Industry benchmarks, customer-validated metrics, competitor cost comparison, implementation timeline
- **Reference files:** product-brief.md, business-case.md, customer-case-study.md

## Process
1. **Identify value drivers** — What are the 3-5 measurable ways your product creates value?
2. **Define input variables** — What does the user need to provide? Minimize inputs; provide smart defaults.
3. **Build calculation methodology** — Transparent formulas connecting inputs to outputs. Defensible assumptions.
4. **Design output format** — Key metrics: payback period, annual savings, ROI percentage, 3-year value.
5. **Add sensitivity analysis** — Show how results change with different assumptions.
6. **Validate with customers** — Test calculations against real customer data for credibility.

## Output Format
```
# ROI Calculator Specification: [Product Name]

## Overview
[Purpose. Target user. Where in the sales cycle this is used.]

## Input Variables
| Variable | Description | Default | Range | Source |
|----------|-------------|---------|-------|--------|
| [Team size] | [Number of users] | [10] | [1-1000] | [User input] |
| [Current time on task] | [Hours/week] | [15] | [1-40] | [User input] |
| [Hourly cost] | [Blended rate] | [$75] | [$25-200] | [User or benchmark] |

## Calculation Methodology
### Value Driver 1: [Time Savings]
Formula: [team_size] × [current_time] × [efficiency_gain_%] × [hourly_cost] × 52
Assumptions: [efficiency_gain based on customer average of X%]

### Value Driver 2: [Error Reduction]
Formula: [current_errors/month] × [avg_error_cost] × [reduction_%] × 12

### Total Value: Sum of all value drivers
### Total Cost: [License] + [Implementation] + [Training]
### ROI: (Total Value - Total Cost) / Total Cost × 100
### Payback Period: Total Cost / (Total Value / 12) months

## Output Display
| Metric | Value |
|--------|-------|
| Annual Savings | $[calculated] |
| 3-Year Value | $[calculated] |
| ROI | [X]% |
| Payback Period | [X] months |

## Sensitivity Analysis
Show ±20% variation on key assumptions.
| Scenario | Conservative | Base | Optimistic |
Visual: bar chart comparing scenarios.

## Assumptions & Sources
[Every assumption listed, sourced, and defensible]
```

## Quality Standards
- Calculations are transparent and reproducible—no black-box magic.
- Default values are sourced from customer data or industry benchmarks.
- Results are credible—conservative enough that real outcomes exceed projections.
- **Anti-patterns:** Inflated defaults, hidden assumptions, results that seem too good to be true, no sensitivity analysis.

## Audience
Sales teams using it in deal cycles and prospects evaluating the business case for purchase. Finance and procurement will scrutinize the methodology. Build for the skeptic—transparency builds trust.

## Formatting Guidelines
- Minimal inputs (5-8 fields). Smart defaults with option to customize.
- Real-time calculation as inputs change.
- Exportable as PDF for internal business case use.
- Include methodology footnotes and assumption sources.

## Example
**Calculation excerpt:** "Time Savings calculation: A team of 25 analysts spending an average of 12 hours/week on manual data reconciliation at a blended cost of $85/hour. With a verified 70% efficiency improvement (based on median of 18 customer deployments), annual savings = 25 × 12 × 0.70 × $85 × 52 = $928,200. Conservative estimate (50% efficiency): $663,000."
