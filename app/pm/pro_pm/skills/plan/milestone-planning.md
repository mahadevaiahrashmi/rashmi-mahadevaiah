# Milestone Planning

## Purpose
Break a large initiative into milestones — each with clear deliverables, success criteria, dependencies, and dates — creating a shared timeline that makes progress legible and enables early course-correction. Milestones transform "it'll be done when it's done" into manageable checkpoints.

## Auto-Trigger Patterns
- "create milestones for [project]"
- "break this into milestones"
- "milestone plan for [initiative]"
- "set checkpoints for [project]"
- "create a project timeline"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Initiative scope and goals | Yes | User prompt or PRD |
| Estimated effort | Optional | User prompt |
| Team capacity | Optional | `context/me/working-agreements.md` |
| Dependencies | Optional | User prompt |
| Hard deadlines | Optional | User prompt |

## Process
1. **Define the end state** — What does "done" look like for the full initiative?
2. **Identify natural breakpoints** — Where does the work create demonstrable, reviewable progress?
3. **Define milestones** — Each should deliver something reviewable. Not just "phase 1 complete" but "users can do X."
4. **Set success criteria** — How do you know the milestone is truly achieved? Specific, observable criteria.
5. **Map dependencies** — Which milestones depend on others? External dependencies?
6. **Assign dates and owners** — Target dates with confidence levels. Primary owner per milestone.
7. **Identify the critical path** — Which milestones, if delayed, delay everything?
8. **Add buffer** — Between milestones, not just at the end.
9. **Plan communication** — Who needs to know about each milestone? What's the update cadence?
10. **Quality-check** — Milestones are outcome-oriented, dates are realistic, critical path is identified.

## Output Format
```
## Milestone Plan: [Initiative Name]
**Target completion:** [Date] | **Owner:** [Name]

### Milestone Timeline
| # | Milestone | Deliverables | Success Criteria | Date | Owner | Confidence |
|---|-----------|-------------|-----------------|------|-------|-----------|

### Critical Path
[Sequence of milestones that determines the minimum timeline]

### Dependencies
| Milestone | Depends On | Type | Risk |
|-----------|-----------|------|------|

### Buffer Allocation
| Between | Buffer | Purpose |
|---------|--------|---------|

### Communication Plan
| Milestone | Audience | Format | Timing |
|-----------|----------|--------|--------|

### Risk to Timeline
| Risk | Impact (days) | Probability | Mitigation |
|------|--------------|-------------|------------|
```

## Quality Standards
- Each milestone delivers something demonstrable — not just "code complete" but "users can do X."
- Success criteria are observable and agreed upon before work starts.
- Buffer is distributed across milestones, not lumped at the end.
- Critical path is explicitly identified so the team knows what can't slip.

**Anti-patterns:** Milestones that are just dates without deliverables, all buffer at the end, no critical path analysis, success criteria that are subjective.

## Framework References
- **Critical Path Method** — Identify the sequence that determines minimum project duration.
- **Phase Gates** — Decision points where you assess go/no-go before continuing.

## Formatting Guidelines
- Use a timeline table with all milestones.
- Bold the critical path milestones.
- Include confidence levels (High/Medium/Low) per milestone.
- Separate buffer allocation into its own section for visibility.

## Example
**Milestone 2:** "Beta launch — 10 selected customers can use the full integration workflow end-to-end. Success: ≥7 of 10 complete setup without support escalation. Date: April 15. Owner: PM + Eng Lead. Confidence: Medium."
