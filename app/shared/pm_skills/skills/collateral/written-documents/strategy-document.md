# Strategy Document

## Purpose
Produces a comprehensive 5-10 page strategy document covering situation analysis, strategic choices, execution plan, resource requirements, and risk mitigation. Data-rich and analytically rigorous, this document serves as the authoritative reference for where we're going and why.

## Auto-Trigger Patterns
- "Write a product strategy document for [area]"
- "Create a comprehensive strategy doc"
- "I need to document our strategic plan for [product/initiative]"
- "Help me build a strategy narrative with data"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product/business area, current performance data, market analysis, strategic options considered, recommended approach
- **Optional:** Competitive intelligence, customer research, financial models, technology assessments, stakeholder input
- **Reference files:** product-brief.md, product-vision-doc.md, market-research-report.md, competitive-landscape-report.md

## Process
1. **Situation analysis** — Assess current state honestly: market position, product performance, team capabilities, competitive dynamics.
2. **Identify strategic options** — Articulate 2-3 viable strategic paths. Evaluate each against criteria.
3. **Make the choice** — Recommend a direction with clear rationale. Explain what we're choosing NOT to do.
4. **Plan execution** — Break strategy into phases with milestones, resource needs, and dependencies.
5. **Assess risks** — Name the biggest risks, their probability and impact, and mitigation plans.
6. **Peer review** — Have a skeptical colleague review for logical gaps and unsupported assumptions.

## Output Format
```
# [Product/Area] Strategy — [Time Period]

## Executive Summary (0.5 page)
One-paragraph strategy statement. Key metrics targeted. Primary strategic bet.

## 1. Situation Analysis (1-2 pages)
### Market Context (data-backed trends, sizing)
### Current Performance (honest assessment with metrics)
### Competitive Landscape (positioning, threats, opportunities)
### Customer Insights (what the market is telling us)

## 2. Strategic Options Considered (1-2 pages)
### Option A: [Name] — Approach, pros, cons, requirements
### Option B: [Name] — Approach, pros, cons, requirements
### Option C: [Name] — Approach, pros, cons, requirements
### Evaluation Framework (criteria and scoring)

## 3. Recommended Strategy (1-2 pages)
### The Choice (what and why)
### What We're NOT Doing (and why)
### Key Bets (2-3 high-conviction moves)
### Success Metrics (leading and lagging)

## 4. Execution Plan (1-2 pages)
### Phase 1: [Timeline] — Milestones, resources, dependencies
### Phase 2: [Timeline] — Milestones, resources, dependencies
### Critical Path and Decision Points

## 5. Resource Requirements (0.5 page)
Headcount, budget, technology, partnerships needed.

## 6. Risks & Mitigations (0.5 page)
Risk | Probability | Impact | Mitigation | Owner
```

## Quality Standards
- Every strategic claim is backed by data, customer evidence, or logical argument.
- The "options considered" section shows genuine alternatives, not strawmen.
- Execution plan has enough specificity to be actionable but enough flexibility to adapt.
- **Anti-patterns:** Strategy without trade-offs, data-free assertions, execution plan without resource mapping, ignoring competitive threats.

## Audience
Leadership, cross-functional partners, and the product team. Leaders want confidence in the thinking; partners want to understand implications for their teams; the product team wants a decision framework. Write for an analytically sophisticated audience that values rigor.

## Formatting Guidelines
- 5-10 pages. Mix of prose and structured data (tables, matrices, charts).
- Executive summary is standalone—someone should be able to read only that and act.
- Use data callout boxes for key statistics.
- Number assertions and provide a sources appendix.

## Example
**Section 2 excerpt:** "We evaluated three strategic options against five criteria: market size, competitive defensibility, execution feasibility, time to revenue, and strategic alignment. Option B (Platform Expansion) scored highest overall but carries the highest execution risk. Option A (Vertical Deepening) is lower risk but caps our TAM. We recommend Option B with a phased approach that de-risks the biggest unknowns in Phase 1 before committing full resources in Phase 2."
