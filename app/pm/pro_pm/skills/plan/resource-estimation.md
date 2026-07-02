# Resource Estimation

## Purpose
Produce T-shirt size and effort estimates by breaking work into components, estimating each, identifying unknowns, and presenting options with trade-offs. Good estimation isn't about precision — it's about making unknowns visible and giving decision-makers the range of outcomes to plan against.

## Auto-Trigger Patterns
- "estimate effort for [feature]"
- "how long will [project] take"
- "T-shirt size this work"
- "resource estimation for [initiative]"
- "how many engineers do we need"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature or initiative description | Yes | User prompt |
| Scope definition | Yes | User prompt or PRD |
| Team composition | Optional | `context/team/team.md` |
| Technical context | Optional | `context/products/*/tech-context.md` |
| Historical velocity | Optional | User prompt |
| Similar past projects | Optional | User prompt |

## Process
1. **Decompose the work** — Break into estimable components. No component larger than 2 weeks.
2. **Identify knowns and unknowns** — What's well-understood (estimable) vs. uncertain (needs spike/research)?
3. **T-shirt size each component** — XS (1-2 days), S (3-5 days), M (1-2 weeks), L (3-4 weeks), XL (>4 weeks, needs splitting).
4. **Add estimates** — Best case, likely, and worst case for each component.
5. **Apply buffers** — Add 20% for known unknowns, 30-50% for novel/uncertain work.
6. **Present options** — Minimum team, recommended team, and accelerated team with trade-offs.
7. **State assumptions** — Make every assumption explicit. What needs to be true for these estimates to hold?
8. **Set confidence level** — Overall confidence in the estimate: High (±10%), Medium (±25%), Low (±50%).
9. **Quality-check** — Estimates include all work (testing, docs, deployment), not just coding.

## Output Format
```
## Effort Estimate: [Feature Name]
**Confidence Level:** [High/Medium/Low] (±[range]%)

### Work Breakdown
| # | Component | Size | Best Case | Likely | Worst Case | Unknowns |
|---|-----------|------|-----------|--------|------------|----------|

### Unknowns & Spikes
| Unknown | Impact on Estimate | Spike Needed | Duration |
|---------|-------------------|-------------|----------|

### Total Estimate
| Scenario | Effort | Duration (with [N] engineers) |
|----------|--------|-------------------------------|
| Best case | ... | ... |
| Likely | ... | ... |
| Worst case | ... | ... |

### Team Options
| Option | Team Size | Duration | Trade-offs |
|--------|-----------|----------|------------|
| Minimum | ... | ... | ... |
| Recommended | ... | ... | ... |
| Accelerated | ... | ... | ... |

### Assumptions
- [Assumption that must be true for these estimates to hold]

### Not Included
- [Work explicitly excluded from this estimate]
```

## Quality Standards
- Work breakdown covers all phases: design, implementation, testing, docs, deployment.
- Three-point estimates (best/likely/worst) for honest range communication.
- Unknowns are called out with their impact on the estimate, not hidden.
- Assumptions are explicit — stakeholders can validate them.
- Estimates include buffer — teams that don't buffer are teams that miss deadlines.

**Anti-patterns:** Single-point estimates, ignoring testing/deployment/docs effort, no buffer, hiding unknowns, confusing effort with duration.

## Framework References
- **T-shirt Sizing** — Relative estimation for quick comparison.
- **Three-Point Estimation** — Best/likely/worst for range communication.
- **Planning Poker** — Team consensus on estimates (reference for team sessions).

## Formatting Guidelines
- Use tables for work breakdown with three-point estimates.
- Prominently display the confidence level.
- Separate the "Not Included" section to prevent scope assumptions.
- Include team options for decision-makers.

## Example
**Component:** "OAuth2 integration" — Size: M. Best: 5 days. Likely: 8 days. Worst: 14 days (if identity provider has undocumented quirks).

**Assumption:** "Estimate assumes the identity provider supports PKCE. If not, add 5 days for custom auth flow."
