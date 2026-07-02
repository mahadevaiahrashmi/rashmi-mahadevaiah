# Investor Update

## Purpose
Draft the product section of an investor update that frames progress through an investor's lens: market opportunity, traction, competitive moats, growth drivers, risk management, and forward trajectory. Designed to build confidence in execution and strategic direction.

## Auto-Trigger Patterns
- "Write an investor update" / "investor product section"
- "Prepare the product update for investors"
- "How should I frame this for our investors?"
- "Monthly/quarterly investor letter — product section"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Key product metrics (MRR/ARR, growth rate, engagement), strategic milestones, competitive developments
- **Optional:** Fundraising context, board feedback from prior updates, market data
- **Reference:** `context/initiatives/` for strategic progress, `context/products/` for competitive landscape

## Process
1. **Frame for investors** — They care about: Is the market big? Are you winning? Is the moat deepening? Can this scale? Every point connects to one of these.
2. **Lead with traction** — Numbers first. Revenue, growth rate, key engagement metrics. Show trajectory, not just snapshots.
3. **Connect features to value** — Don't list features. Explain how product work drives growth, retention, or competitive advantage.
4. **Show competitive moats** — What's getting harder for competitors to replicate? Data advantages, network effects, switching costs.
5. **Highlight growth drivers** — What's working? What loops are accelerating? Where's the next wave of growth coming from?
6. **Be honest about risks** — Investors respect transparency. Surface risks with mitigation plans.
7. **Paint the forward view** — Next quarter's priorities and how they compound the current trajectory.
8. **Keep it tight** — Investors read many updates. Dense signal, minimal noise.

## Output Format
```
## Product Update — [Period]

### Traction Highlights
- **[Key Metric 1]:** [Value] ([growth %], [trend context])
- **[Key Metric 2]:** [Value] ([growth %], [trend context])
- [Notable milestone or proof point]

### Strategic Progress
[2-3 sentences on most significant strategic advances — tied to market opportunity]

### What We Shipped & Why It Matters
- **[Initiative 1]:** [What it does → business impact → how it strengthens the moat]
- **[Initiative 2]:** [Same structure]

### Competitive Position
- [Key competitive dynamic — specific, not generic]
- [Our advantage and how it's compounding]

### Growth Drivers
- [Growth loop or channel that's working and why]
- [Emerging opportunity]

### Risks
- **[Risk]:** [Mitigation plan and current status]

### Forward Look
[Next quarter priorities → expected impact → what we'll be watching]
```

## Quality Standards
- Metrics include growth rates and trajectories, not just current values. Investors think in growth curves.
- Features are framed as business movers: "Launched X, which drove Y% improvement in Z."
- Competitive analysis is specific — name competitors, cite their moves, explain your response.
- Risks are paired with mitigations — not just problem statements.
- **Anti-patterns:** Feature lists without business impact, vanity metrics, hiding bad metrics, generic competitive language ("competitive landscape is heating up"), over-optimistic projections without basis.

## Framework References
- SaaS metrics hierarchy (ARR → NRR → CAC/LTV → Payback)
- Competitive moat frameworks (network effects, switching costs, scale, brand)
- Investor communication best practices — consistent cadence, honest reporting

## Formatting Guidelines
- Lead with the strongest number. First line should make them want to keep reading.
- Bold key metrics and growth rates.
- Keep to 1-2 pages. Dense with signal.
- Use consistent metric formatting across updates for easy comparison.

## Example
> **Traction:** ARR crossed $2.4M (↑38% QoQ), driven by enterprise expansion. NRR hit 124% — our highest quarter. 12 new logos including 3 Fortune 500 pilots.
>
> **What We Shipped:** The API platform launch reduced integration time from weeks to hours. Early adopters show 3.2x higher retention than non-API users, validating the platform thesis.
>
> **Competitive Moat:** Our data network now processes 8M events/day — 5x where we were 6 months ago. Each new integration increases the switching cost and trains our models.
