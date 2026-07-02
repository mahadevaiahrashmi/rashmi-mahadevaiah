# Customer Health Scoring

## Purpose
Design or analyze a customer health scoring model — defining input signals, weighting methodology, threshold classifications, action triggers, and monitoring dashboard specs. Enables proactive identification of at-risk accounts before they churn and surfaces expansion opportunities in healthy accounts.

## Auto-Trigger Patterns
- "design a customer health score"
- "health scoring model for [product]"
- "how to measure customer health"
- "at-risk customer identification"
- "customer health dashboard"
- "health score analysis for [segment]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Available customer signals | Yes | User prompt |
| Customer segments | Recommended | User prompt |
| Churn history / patterns | Recommended | User prompt |
| Current health model (if exists) | Optional | User prompt |
| Business objectives | Optional | User prompt |

## Process
1. **Identify input signals** — Map available data across categories: product usage (DAU, feature adoption, depth), engagement (support tickets, NPS responses, community), commercial (billing health, contract terms, expansion signals), and relationship (champion changes, exec engagement).
2. **Weight the signals** — Not all signals are equal predictors. Analyze historical churn data to identify which signals most strongly correlate with retention and churn. Assign weights accordingly.
3. **Define thresholds** — Set clear boundaries: Healthy (green), At-Risk (yellow), Critical (red). Use data-driven cutoffs based on churn probability at different score levels.
4. **Build the scoring model** — Combine weighted signals into a composite score. Decide: simple weighted average, rule-based, or ML-based. Start simple.
5. **Define action triggers** — For each health tier: what actions should CS, Sales, and Product take? Automate where possible.
6. **Design the dashboard** — What does the health monitoring view look like? Account-level, segment-level, and portfolio-level views.
7. **Plan validation** — How to test if the health score actually predicts outcomes. Backtesting against historical churn, ongoing accuracy measurement.
8. **Iterate** — Plan for model refinement based on prediction accuracy and new signals.

## Output Format
```
## Customer Health Score: [Product]
**Model Version:** [X]  |  **Last Updated:** [date]

### Signal Inventory
| Category | Signal | Source | Weight | Direction |
|----------|--------|--------|--------|-----------|
| Usage | DAU/MAU ratio | Product analytics | [X%] | Higher = healthier |
| Usage | Key feature adoption | Product analytics | [X%] | Higher = healthier |
| Engagement | Support ticket volume | Zendesk | [X%] | Lower = healthier |
| Engagement | NPS score | Survey tool | [X%] | Higher = healthier |
| Commercial | Payment status | Billing | [X%] | On-time = healthier |
| Relationship | Executive sponsor active | CRM | [X%] | Active = healthier |

### Scoring Model
**Method:** [Weighted average / Rule-based / ML]
**Score range:** [0-100]
**Formula:** [How signals combine into the final score]

### Health Tiers
| Tier | Score Range | % of Accounts | Churn Probability | Color |
|------|-----------|---------------|------------------|-------|
| Healthy | [80-100] | [X%] | [<Y%] | 🟢 |
| At-Risk | [50-79] | [X%] | [Y-Z%] | 🟡 |
| Critical | [0-49] | [X%] | [>Z%] | 🔴 |

### Action Triggers
| Health Tier | Action | Owner | Timing |
|------------|--------|-------|--------|
| 🟢 Healthy | Identify expansion opportunities | CSM | Quarterly |
| 🟡 At-Risk | Proactive outreach, usage review | CSM | Within 48 hours |
| 🔴 Critical | Executive escalation, save plan | CS Manager | Within 24 hours |
| Score drop >20pts | Alert CSM, investigate cause | Automated | Immediate |

### Dashboard Spec
#### Account View
- Health score (current + 30-day trend)
- Signal breakdown (which signals are driving the score)
- Recent activity timeline
- CSM actions and notes

#### Portfolio View
- Health distribution (% green/yellow/red)
- Trending accounts (improving/declining)
- Revenue at risk ($ in yellow/red accounts)

### Validation Plan
- **Backtesting:** Run model against last 12 months of churn data
- **Accuracy target:** [X% of churned accounts were in red/yellow 30 days prior]
- **Refresh cadence:** [Quarterly model review and recalibration]
```

## Quality Standards
- Signals are weighted based on correlation with actual outcomes, not intuition.
- Thresholds are data-driven, not arbitrary score cutoffs.
- Action triggers are specific with owners and timing — a health score without actions is just data.
- Validation plan ensures the model actually predicts what it claims to predict.

**Anti-patterns:** Equal-weighting all signals, no validation against actual churn, health scores that never trigger action, models that are too complex to maintain, ignoring signal freshness.

## Framework References
- **Customer health scoring** — Signal-based predictive model for retention.
- **Predictive churn modeling** — Statistical approaches to churn prediction.

## Formatting Guidelines
- Signal inventory table with weights (transparent model).
- Health tiers with churn probability (data-driven thresholds).
- Action triggers with owners and timing (operational playbook).
- Dashboard spec with view descriptions (implementation guidance).

## Example
**Action trigger:** "Account 'Acme Corp' dropped from 82 (Healthy) to 58 (At-Risk) in 2 weeks. Primary driver: DAU/MAU ratio fell from 0.45 to 0.21 (champion Sarah left the company 3 weeks ago). Secondary: no feature adoption in last 14 days. Action: CSM outreach within 48 hours to identify new champion and schedule a re-engagement session."
