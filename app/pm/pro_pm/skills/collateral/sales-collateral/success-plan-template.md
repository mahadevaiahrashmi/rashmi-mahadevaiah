# Success Plan Template

## Purpose
Creates a customer success plan that defines shared goals, success metrics, milestones, planned activities, timeline, DRIs (directly responsible individuals), review cadence, and escalation path. Serves as the operating agreement between your team and the customer for achieving their desired outcomes.

## Auto-Trigger Patterns
- "Create a customer success plan for [account]"
- "Build a success plan template"
- "I need a joint success plan for [customer]"
- "Help me structure a customer outcomes plan"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Customer goals, success metrics, key milestones, stakeholders on both sides
- **Optional:** Contract details, expansion opportunities, risk factors, prior account history, usage data
- **Reference files:** product-brief.md, customer-onboarding-guide.md, proposal-template.md

## Process
1. **Co-create with the customer** — This is a shared plan, not something done TO them.
2. **Define their goals in their words** — What business outcomes are they trying to achieve?
3. **Agree on measurable success** — Specific metrics with baselines, targets, and measurement methods.
4. **Map milestones** — Key checkpoints from onboarding through value realization to expansion.
5. **Assign ownership** — Every activity has a DRI on each side.
6. **Schedule reviews** — Regular cadence to assess progress and adjust.

## Output Format
```
# Success Plan: [Customer Name]
**Created:** [Date] | **Review Cadence:** [Monthly/Quarterly]
**CSM:** [Name] | **Customer Champion:** [Name]

## Customer Goals
1. **[Goal 1]:** [Business outcome in their language]
   Metric: [Specific, measurable indicator]
   Baseline: [Current state] → Target: [Desired state]
   Timeline: [By when]

2. **[Goal 2-3]:** [Same structure]

## Success Milestones
| Milestone | Target Date | Success Criteria | Owner (Us) | Owner (Them) | Status |
|-----------|------------|------------------|------------|--------------|--------|
| Onboarding complete | [Date] | [Criteria] | [CSM] | [Champion] | ⬜ |
| First value delivered | [Date] | [Criteria] | [CSM] | [Champion] | ⬜ |
| Team adoption | [Date] | [Criteria] | [CSM] | [Champion] | ⬜ |
| Goal 1 achieved | [Date] | [Criteria] | [CSM] | [Champion] | ⬜ |
| Expansion opportunity | [Date] | [Criteria] | [CSM] | [Champion] | ⬜ |

## Planned Activities
| Activity | Cadence | Purpose | Participants |
|----------|---------|---------|-------------|
| Business review | Quarterly | Assess goal progress | [Exec sponsors] |
| Check-in | Bi-weekly | Tactical progress | [CSM + Champion] |
| Training session | As needed | Skill building | [Users] |
| Health check | Monthly | Usage and adoption review | [CSM] |

## Risk Factors
| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|

## Escalation Path
| Severity | Our Contact | Their Contact | Response Time |
|----------|------------|---------------|---------------|

## Review Log
| Date | Key Discussion | Decisions | Action Items |
|------|---------------|-----------|-------------|
```

## Quality Standards
- Goals are defined by the customer, not assumed by us.
- Every metric has a baseline, target, and measurement method—no vague objectives.
- The plan is a living document reviewed at every touchpoint.
- **Anti-patterns:** Plan created without customer input, metrics we can't measure, no review cadence, plan that lives in a drawer.

## Audience
Customer success managers, account executives, and customer stakeholders who share accountability for outcomes. The plan bridges the gap between "we bought your product" and "your product is delivering the value we expected."

## Formatting Guidelines
- 2-3 pages. Table-heavy for trackability.
- Milestone status indicators (⬜ Not started, 🟡 In progress, 🟢 Complete, 🔴 At risk).
- Shared in a collaborative format (Google Doc, Notion, or customer's preferred tool).
- Include a review log that captures decisions and action items over time.

## Example
**Goal 1:** "Reduce time-to-close for security incidents from 72 hours to 24 hours within 6 months. Baseline: 72-hour average MTTC (measured Jan-Mar). Target: 24-hour MTTC by month 6. Measurement: Monthly report from [Product] dashboard, validated against their ticketing system. Milestone 1 (Month 2): Team trained and processing 50% of incidents through [Product]. Milestone 2 (Month 4): 36-hour MTTC achieved. Milestone 3 (Month 6): 24-hour target."
