# Build vs Buy vs Partner

## Purpose
Produce a structured analysis comparing build, buy, and partner options for a capability or solution. Covers evaluation criteria, scoring, total cost of ownership, risk analysis, and long-term strategic implications. Delivers a clear recommendation with conditions and reversibility assessment.

## Auto-Trigger Patterns
- "Should we build or buy?" / "build vs buy analysis"
- "Evaluate build vs buy vs partner for [capability]"
- "Should we integrate with [vendor] or build our own?"
- "Partnership vs building in-house"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Capability or solution being evaluated, business requirements, timeline constraints
- **Optional:** Vendor options already identified, team capacity, existing technical architecture, budget constraints
- **Reference:** `context/initiatives/` for strategic alignment, technical architecture docs

## Process
1. **Define the capability** — What exactly do you need? Scope it precisely. Ambiguous scope leads to bad comparisons.
2. **Set evaluation criteria** — Cost (upfront + ongoing), time to value, quality/fit, control/customization, strategic importance, expertise availability, security/compliance.
3. **Analyze Build** — Engineering effort, timeline, maintenance cost, opportunity cost of building vs other priorities. What do you gain in control? What do you lose in speed?
4. **Analyze Buy** — Vendor options, pricing models, integration effort, vendor risk (lock-in, viability), feature fit. Include hidden costs: integration, training, migration.
5. **Analyze Partner** — Partnership models, value exchange, dependency risk, co-development effort, revenue sharing, strategic alignment.
6. **Calculate TCO** — 3-year total cost of ownership for each option. Include: implementation, maintenance, training, opportunity cost.
7. **Score and compare** — Weighted scoring against criteria. Make weights explicit and tied to strategic priorities.
8. **Assess long-term implications** — What does each option mean in 3-5 years? Lock-in? Strategic flexibility? Competitive differentiation?
9. **Recommend with conditions** — Clear recommendation with the conditions under which it holds and when to revisit.

## Output Format
```
## Build vs Buy vs Partner: [Capability]
**Decision Needed By:** [Date] | **Reversibility:** [Assessment]

### Capability Definition
[Precise description of what's needed and why]

### Evaluation Criteria
| Criterion | Weight | Description |
|-----------|--------|-------------|
| Cost | [%] | [What this measures] |
| Time to Value | [%] | ... |
| Strategic Fit | [%] | ... |
| Control | [%] | ... |

### Option Analysis

#### Build
- **Effort:** [Engineering estimate]
- **Timeline:** [Months to production]
- **Pros:** [Key advantages]
- **Cons:** [Key disadvantages]
- **3-Year TCO:** [$X]

#### Buy
- **Vendor(s):** [Options evaluated]
- **Cost:** [Pricing model and estimate]
- **Integration effort:** [Engineering estimate]
- **Pros / Cons:** [Key trade-offs]
- **3-Year TCO:** [$X]

#### Partner
- **Partner(s):** [Options evaluated]
- **Model:** [Integration, white-label, co-development]
- **Pros / Cons:** [Key trade-offs]
- **3-Year TCO:** [$X]

### Comparison Matrix
| Criterion | Weight | Build | Buy | Partner |
|-----------|--------|-------|-----|---------|
| ... | ...% | [Score] | [Score] | [Score] |
| **Weighted Total** | | **[X]** | **[X]** | **[X]** |

### Recommendation
**Recommended: [Option]** because [rationale tied to strategic priorities].
**Conditions:** [When this recommendation holds]
**Revisit if:** [Triggers that would change the recommendation]
```

## Quality Standards
- TCO includes hidden costs: integration, training, opportunity cost, ongoing maintenance, migration.
- Scoring weights are explicit and justified — not arbitrary. Tied to stated strategic priorities.
- Long-term implications are considered — what does this look like in 3-5 years?
- Recommendation includes conditions and revisit triggers — decisions aren't permanent.
- **Anti-patterns:** Ignoring opportunity cost of building, underestimating integration costs of buying, overestimating partner alignment, analysis paralysis with too many criteria, predetermined conclusion disguised as analysis.

## Framework References
- Total Cost of Ownership (TCO) — full lifecycle cost comparison
- Strategic fit analysis — core vs context capabilities (Geoffrey Moore)
- Vendor evaluation frameworks — Gartner-style criteria

## Formatting Guidelines
- Comparison matrix in a table for side-by-side view.
- Separate sections per option with consistent structure.
- Bold the recommendation. Include conditions and revisit triggers.
- Keep to 3-5 pages with appendix for detailed vendor analysis.

## Example
> **Recommendation: Buy (Vendor X)** — Our core differentiation is in the onboarding experience, not in billing infrastructure. Building billing would consume 2 engineers for 6 months (opportunity cost: the API platform work that's our #1 strategic priority). Vendor X covers 90% of requirements at $2K/mo with a 2-week integration.
>
> **Revisit if:** We exceed 10K customers (pricing tier jump), need billing customization beyond their API capabilities, or Vendor X shows viability concerns.
