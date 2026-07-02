# Roadmap Review

## Purpose
Critique a product roadmap for gaps, risks, sequencing issues, strategic alignment, and resource concerns — producing a structured review that helps the PM strengthen the plan before presenting to stakeholders.

## Auto-Trigger Patterns
- "review this roadmap"
- "critique my roadmap"
- "find gaps in the roadmap"
- "is this roadmap solid"
- "feedback on [product] roadmap"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Roadmap to review | Yes | User prompt |
| Company strategy | No | `context/company/overview.md` |
| Team capacity | Optional | `context/me/working-agreements.md` |
| Customer needs | Optional | `context/products/*/customers.md` |
| Market context | Optional | `context/products/` |

## Process
1. **Strategic alignment** — Does every item connect to a strategic goal? Any priorities unrepresented?
2. **Sequencing analysis** — Dependencies respected? Learning order correct? Quick wins front-loaded?
3. **Capacity reality check** — Achievable with available resources? Buffer for unknowns?
4. **Customer coverage** — Key segments and top needs represented?
5. **Risk scan** — Single points of failure, external dependencies, market changes?
6. **Balance check** — New vs. improve vs. maintain? Short vs. long-term?
7. **Communication readiness** — Clear enough for stakeholders?
8. **Quality-check** — Findings are specific, actionable, and prioritized.

## Output Format
```
## Roadmap Review: [Product/Team]
**Reviewer:** [Name] | **Date:** [Date]
**Overall Assessment:** [Strong / Needs Work / Significant Gaps]

### Summary
[2-3 sentence assessment]

### Strategic Alignment
| Strategic Goal | Roadmap Coverage | Gap? |
|---------------|-----------------|------|

### Sequencing Concerns
| # | Issue | Impact | Suggestion |
|---|-------|--------|------------|

### Capacity Assessment
**Planned:** [Effort] | **Available:** [Effort] | **Utilization:** [%]

### Missing Customer Needs
| Segment | Unaddressed Need | Priority |
|---------|-----------------|----------|

### Risk Factors
| Risk | Likelihood | Impact | Mitigation Needed |
|------|-----------|--------|-------------------|

### Balance Analysis
| Dimension | Current Mix | Recommended | Adjustment |
|-----------|------------|-------------|------------|

### Recommendations
| Priority | Recommendation | Rationale |
|----------|---------------|-----------|
```

## Quality Standards
- Review covers strategy, sequencing, capacity, customers, risk, and balance.
- Findings cite specific roadmap items, not vague concerns.
- Recommendations are actionable and prioritized.
- Capacity assessment uses real numbers.

**Anti-patterns:** Surface-level comments, nitpicking without strategic perspective, reviewing items in isolation.

## Framework References
- **Three Horizons** — Check balance across sustain, grow, transform.
- **Opportunity Cost** — What are you NOT doing by committing to this roadmap?

## Formatting Guidelines
- Overall assessment rating at the top.
- Tables for findings and recommendations.
- Prioritize recommendations by impact.

## Example
**Finding:** "No items address 'data export' — the #2 feature request from enterprise (87 requests in Q2). Gap risks 3 renewals worth $340K ARR."

**Recommendation:** "Add basic CSV export to Q3 Next. Addresses 60% of requests at ~2 engineering-weeks."
