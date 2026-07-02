# Write PRD

## Purpose
Produce a stakeholder-ready Product Requirements Document that anchors an initiative in evidence — articulating the problem, target users, proposed solution, success metrics, and scope with enough precision for eng, design, and business partners to align and execute. A strong PRD is the single source of truth that prevents scope creep, miscommunication, and wasted cycles.

## Auto-Trigger Patterns
- "write a PRD"
- "draft product requirements for [feature]"
- "create a spec for [initiative]"
- "I need a PRD for [project]"
- "help me document requirements"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Problem statement or opportunity | Yes | User prompt |
| Target users / segments | No | User prompt or `context/products/*/customers.md` |
| Strategic context | No | `context/company/overview.md` |
| Technical landscape | No | `context/products/*/tech-context.md` |
| Competitive context | No | `context/products/*/competitors.md` |
| Prior research | No | User paste or `artifacts/research/` |

## Process
1. **Frame the problem** — State the problem with evidence (data, research, support tickets). Quantify the impact. Avoid solution-framing.
2. **Identify target users** — Use JTBD to define who has this problem and what they're trying to accomplish. Reference customer personas.
3. **Articulate the proposed solution** — Describe the experience, not implementation. Use the Working Backwards press release test: could a customer understand this?
4. **Define success metrics** — North star metric + 2-3 input metrics + guardrail metrics. Each with a target and measurement plan.
5. **Negotiate scope** — Explicit in-scope and out-of-scope lists. Call out what's deliberately deferred and why.
6. **Surface technical considerations** — Constraints, dependencies, data needs, performance requirements. Frame as context for eng, not prescriptions.
7. **Map risks and mitigations** — Identify execution, market, and technical risks. Propose mitigations or monitoring plans.
8. **List open questions** — Unresolved items with owners and target resolution dates.
9. **Quality-check** — Verify: every claim has evidence, scope is tight, metrics are measurable, no ambiguity in acceptance criteria.

## Output Format
```
## PRD: [Feature/Initiative Name]
**Author:** [Name] | **Status:** Draft | **Last Updated:** [Date]

### Problem Statement
[Evidence-backed description. Quantify impact.]

### Target Users
| Segment | Job-to-Be-Done | Current Alternative | Pain Level |
|---------|---------------|--------------------:|------------|

### Proposed Solution
[Narrative description of the experience. Not implementation.]

### Success Metrics
| Metric | Type | Target | Measurement | Data Source |
|--------|------|--------|-------------|-------------|

### Scope
**In Scope:** ...
**Out of Scope:** ...
**Deferred:** ...

### Technical Considerations
[Constraints, dependencies, integration points]

### Risks & Mitigations
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|

### Dependencies
[Cross-team, external, sequential]

### Open Questions
| # | Question | Owner | Target Date |
|---|----------|-------|-------------|
```

## Quality Standards
- Problem statement cites real data, not assumptions.
- Solution describes user experience, not technical implementation.
- Every metric has a target, a source, and a baseline.
- Scope section explicitly states what is excluded and why.
- A new team member could read this and understand the full context.

**Anti-patterns:** Solution-first thinking, vague metrics ("improve engagement"), missing out-of-scope section, PRD that's really a technical spec, no evidence for the problem.

## Framework References
- **Working Backwards** — Start from the customer experience and work backward to requirements.
- **JTBD** — Define users by the job they're hiring the product to do, not demographics.
- **North Star Framework** — Anchor metrics around the unit of value delivered.

## Formatting Guidelines
- Use tables for metrics, risks, and open questions.
- Keep narrative sections to 2-3 paragraphs maximum.
- Bold key decisions and non-negotiables.
- Include a status badge and last-updated date at the top.

## Example
**Problem:** "Enterprise customers (ARR >$100K) report a 34% drop-off during data integration setup (Source: Mixpanel funnel, Q3). Support tickets for integration issues increased 2.4x YoY, with a median resolution time of 3.2 days."

**Metric:** "Reduce integration setup abandonment from 34% to 15% within 90 days of launch, measured by Mixpanel funnel completion rate."
