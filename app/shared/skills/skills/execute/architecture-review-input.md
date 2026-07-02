# Architecture Review Input

## Purpose
Provide the PM perspective for architecture reviews — articulating business context, user scenarios, scale requirements, constraints, and roadmap needs that should influence technical decisions. Ensures architecture serves product strategy, not just current requirements.

## Auto-Trigger Patterns
- "architecture review input for [system]"
- "PM context for architecture review"
- "business requirements for [technical design]"
- "scale requirements for [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| System under review | Yes | User prompt |
| Product requirements | Recommended | Related PRD |
| Product strategy / roadmap | Recommended | `context/products/` |
| Technical context | Optional | `context/products/*/tech-context.md` |

## Process
1. **Frame business context** — Why this system is being built/changed. Strategic importance.
2. **Define user scenarios** — Key workflows including edge cases and failure scenarios.
3. **Specify scale requirements** — Current, 6-month, 1-year, 3-year projections grounded in data.
4. **Articulate constraints** — Budget, timeline, compliance, integration requirements.
5. **Map roadmap implications** — What's coming in 2-4 quarters that architecture should anticipate.
6. **Define quality attributes** — Prioritize: latency, availability, consistency, scalability, security, cost.
7. **Provide competitive context** — What capabilities competitors have that inform ambitions.
8. **Define success criteria** — How architecture success is measured from product perspective.

## Output Format
```
## Architecture Review: PM Input — [System]

### Business Context
[Why this matters strategically]

### User Scenarios
| Scenario | Description | Scale | Priority |
|----------|------------|-------|----------|
| [Flow] | [User does X] | [Frequency] | P0 |

### Scale Requirements
| Dimension | Current | 6-Month | 1-Year | 3-Year |
|-----------|---------|---------|--------|--------|
| Users | ... | ... | ... | ... |

### Quality Attribute Priorities
| Attribute | Priority | Target | Justification |
|-----------|----------|--------|---------------|
| Latency | P0 | <200ms p99 | [User experience] |
```

## Quality Standards
- Scale projections grounded in data, not arbitrary multipliers.
- Quality attributes prioritized — can't optimize everything.
- Roadmap considerations influence flexibility where needed.
- Constraints are specific and sourced.

**Anti-patterns:** Dictating technical solutions, unbounded scale requirements, missing priority on quality attributes.

## Framework References
- **ATAM** — Architecture Tradeoff Analysis Method.
- **Scalability planning** — Data-driven capacity projections.

## Formatting Guidelines
- Tables for scenarios, scale, quality attributes.
- Growth projections in timeline columns.
- Priority labels on scenarios and attributes.

## Example
**Roadmap consideration:** "In Q3 we plan a marketplace for third-party integrations. Current monolithic API won't support multi-tenant isolation or per-partner rate limiting. Design modular service boundaries now, even if marketplace API layer waits until Q3."
