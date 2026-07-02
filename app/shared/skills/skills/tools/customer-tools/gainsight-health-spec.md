# Gainsight Health Spec

## Purpose
Designs Gainsight customer health score models — defining measures, weighting, thresholds, CTAs (Calls to Action), and playbooks — to proactively identify at-risk accounts and drive customer success actions that inform product strategy.

## Auto-Trigger Patterns
- "Design a health score in Gainsight"
- "Customer health model"
- "Gainsight health score spec"
- "At-risk account identification"
- "Customer success scoring model"

## Tool Configuration
Requires `context/integrations/gainsight.md` with: Gainsight instance URL, API access. Auth: OAuth 2.0 or API key with admin access for health score configuration.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Customer segments, key health indicators, outcome definition (churn/expansion)
- **Optional:** Data sources, existing health score to refine, CTA types, playbook needs

## Process
1. Define what "healthy" means for each customer segment.
2. Identify measurable health indicators across categories.
3. Assign weights reflecting each indicator's predictive value.
4. Set thresholds for Green/Yellow/Red scoring per measure.
5. Design the composite health score calculation.
6. Create CTAs (Calls to Action) triggered by health changes.
7. Build playbooks for each CTA type.
8. Define reporting and escalation processes.

## Output Format
```
# Gainsight Health Score: [Product/Segment]

## Health Score Model

### Measures
| Measure | Category | Weight | Data Source | Frequency |
|---|---|---|---|---|
| Product Usage | Engagement | 25% | Product analytics | Weekly |
| Feature Adoption | Engagement | 15% | Product analytics | Weekly |
| Support Tickets | Support | 15% | Zendesk | Daily |
| NPS/CSAT | Sentiment | 15% | Survey | Quarterly |
| Contract Value Trend | Financial | 15% | Salesforce | Monthly |
| Executive Engagement | Relationship | 15% | Manual/CRM | Monthly |

### Scoring Thresholds
| Measure | Green (Healthy) | Yellow (At Risk) | Red (Unhealthy) |
|---|---|---|---|
| Product Usage | ≥ 80% of license | 50-79% | < 50% |
| Feature Adoption | ≥ 3 core features | 1-2 features | 0 features |
| Support Tickets | ≤ 2 P1 tickets/month | 3-5 P1 | > 5 P1 |
| NPS Score | ≥ 8 | 6-7 | ≤ 5 |
| Contract Trend | Growing or stable | Flat | Declining |
| Exec Engagement | Monthly contact | Quarterly contact | No contact 90d+ |

### Composite Score
- **Green:** 80-100 (Healthy — expand)
- **Yellow:** 50-79 (At Risk — intervene)
- **Red:** 0-49 (Unhealthy — urgent action)

## CTAs (Calls to Action)
| Trigger | CTA Type | Priority | Owner | Playbook |
|---|---|---|---|---|
| Health → Red | Risk Escalation | Urgent | CSM + Manager | At-Risk Playbook |
| Usage drop > 30% | Engagement | High | CSM | Re-engagement |
| NPS ≤ 5 | Sentiment | High | CSM | Detractor Recovery |
| Health Green + expansion signal | Opportunity | Medium | CSM + AE | Expansion |

## Playbooks

### At-Risk Playbook
1. Review account health details (day 1)
2. Internal account review with AE and PM (day 2)
3. Executive outreach call (day 3-5)
4. Action plan creation with customer (day 5-7)
5. Weekly check-ins until health improves (ongoing)

### Re-engagement Playbook
1. Analyze usage drop root cause (day 1)
2. Personalized outreach with value reminder (day 2)
3. Offer training session or office hours (day 3)
4. Feature adoption workshop if needed (day 7)

## Reporting
| Report | Audience | Frequency | Content |
|---|---|---|---|
| Health Dashboard | CS Team | Real-time | All accounts by health |
| At-Risk Summary | CS Leadership | Weekly | Red/Yellow accounts + actions |
| Health Trends | Product Team | Monthly | Aggregate trends + product signals |
```

## Quality Standards
- Measures are objective and data-driven wherever possible (minimize manual scoring).
- Weights reflect actual correlation with renewal/churn outcomes.
- Thresholds are calibrated to the customer base (not arbitrary).
- CTAs have clear owners, timelines, and playbooks — not just alerts.
- Product team receives aggregated health signals for roadmap input.

## Permissions Required
Gainsight Admin for health score model configuration. CSM access for CTA management.

## Example
A SaaS health model with 6 measures weighted by churn correlation analysis: Product Usage (25%) is the strongest predictor, followed by Feature Adoption (15%) and Support Tickets (15%). Model identifies 12% of accounts as Red (urgent risk), 23% as Yellow (proactive intervention), and 65% as Green. CTAs are generated automatically, with the At-Risk playbook triggering executive engagement within 5 days of a Red health score.
