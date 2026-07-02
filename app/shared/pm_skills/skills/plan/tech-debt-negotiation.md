# Tech Debt Negotiation

## Purpose
Help PMs negotiate tech debt investment with stakeholders by quantifying the impact of debt, proposing allocation strategies, and framing the conversation in terms leadership cares about — velocity, reliability, and business risk. Tech debt is a business problem, not just an engineering complaint.

## Auto-Trigger Patterns
- "help me negotiate tech debt time"
- "how to get buy-in for tech debt"
- "frame tech debt for leadership"
- "quantify tech debt impact"
- "plan tech debt investment"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Known tech debt items | Yes | User prompt |
| Impact evidence (velocity, incidents) | Yes | User prompt |
| Team capacity | Optional | `context/me/working-agreements.md` |
| Strategic goals | Optional | `context/company/overview.md` |
| Stakeholder concerns | Optional | User prompt |

## Process
1. **Inventory the debt** — List known tech debt with descriptions. Categorize: code debt, architecture debt, infrastructure debt, test debt.
2. **Quantify the impact** — For each item: how does it affect velocity, reliability, developer experience, and customer experience?
3. **Translate to business language** — Convert engineering pain into metrics leadership cares about: time-to-market, incident frequency, customer churn.
4. **Propose allocation** — Recommend a percentage of sprint capacity for tech debt. Industry norm: 15-25%.
5. **Prioritize debt items** — Which debt has the highest ROI to address? Use interest rate analogy.
6. **Set tracking metrics** — How will you measure the return on tech debt investment?
7. **Build the narrative** — Frame as investment, not cost. Show the compounding penalty of inaction.
8. **Plan reporting** — How you'll show stakeholders the impact of tech debt investment over time.
9. **Quality-check** — Impact is quantified with data, allocation is reasonable, narrative resonates with stakeholders.

## Output Format
```
## Tech Debt Investment Proposal
**Team:** [Name] | **Proposed Allocation:** [X]% of sprint capacity

### The Cost of Inaction
[2-3 sentences on what happens if you don't invest. Business language.]

### Tech Debt Inventory
| # | Item | Category | Impact Area | Severity | Interest Rate |
|---|------|----------|-------------|----------|---------------|

### Business Impact
| Impact | Current State | Projected (6 months without investment) | Evidence |
|--------|--------------|----------------------------------------|----------|
| Velocity | ... | ... | ... |
| Reliability | ... | ... | ... |
| Dev experience | ... | ... | ... |

### Proposed Investment
**Allocation:** [X]% of each sprint ([Y] points/sprint)
**Prioritized items for next quarter:**
| Priority | Item | Estimated Effort | Expected Return |
|----------|------|-----------------|-----------------|

### Success Metrics
| Metric | Baseline | 3-Month Target | 6-Month Target |
|--------|----------|---------------|----------------|

### Reporting Plan
[Cadence and format for showing ROI to stakeholders]
```

## Quality Standards
- Impact is quantified, not just described ("velocity dropped 20% in 6 months" not "things are slow").
- Allocation proposal is specific and justified by ROI analysis.
- Debt items are prioritized by "interest rate" — how much more costly they become over time.
- Success metrics prove the investment is paying off.

**Anti-patterns:** "We need tech debt time" without quantification, framing as an engineering desire vs. a business need, all-or-nothing requests, no measurement plan.

## Framework References
- **Tech Debt Quadrant (Fowler)** — Deliberate/inadvertent × reckless/prudent.
- **Interest Rate Analogy** — Debt that compounds fast should be paid first.

## Formatting Guidelines
- Use business language throughout — this document is for stakeholders, not engineers.
- Bold the key impact numbers.
- Include a "Cost of Inaction" section prominently.
- Track ROI over time with clear before/after metrics.

## Example
**Cost of Inaction:** "Our deployment pipeline takes 4.5 hours (up from 45 minutes a year ago). This means each engineer loses 2+ days/sprint waiting for deploys. At our team size, that's 40 engineering-days/quarter — equivalent to losing one full-time engineer to waiting."

**Investment return:** "Fixing the CI pipeline (estimated 15 days of work) would save 40 days/quarter. Break-even in 2 weeks. Annualized ROI: 10x."
