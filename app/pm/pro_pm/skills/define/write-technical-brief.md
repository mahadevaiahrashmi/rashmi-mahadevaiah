# Write Technical Brief

## Purpose
Create the PM's input document for engineering design discussions — providing business context, user problems, constraints, and open questions without prescribing technical solutions. This bridges PM intent and eng execution, ensuring engineers understand *why* before deciding *how*.

## Auto-Trigger Patterns
- "write a technical brief"
- "prepare eng handoff for [feature]"
- "create a brief for the engineering team"
- "write PM input for technical design"
- "help me communicate requirements to eng"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature/initiative description | Yes | User prompt or PRD |
| Business context and goals | No | `context/company/overview.md` |
| User problem and evidence | Yes | User prompt |
| Technical landscape | Optional | `context/products/*/tech-context.md` |
| Constraints (timeline, budget, compliance) | Optional | User prompt |
| Related systems or integrations | Optional | `context/products/*/tech-context.md` |

## Process
1. **Set the context** — Why does this initiative exist? What business outcome are we driving? Link to strategy.
2. **Describe the user problem** — What pain exists today? Include evidence. Describe the desired end-state from the user's perspective.
3. **State what's non-negotiable** — Hard requirements: compliance, performance thresholds, compatibility, deadlines.
4. **State what's flexible** — Areas where eng has design freedom. Trade-offs the PM is willing to make.
5. **List known constraints** — Timeline, budget, existing technical debt, team capacity, dependencies on other teams.
6. **Pose questions for eng** — What the PM needs eng to answer: feasibility, effort, risks, alternative approaches.
7. **Define success criteria** — How we'll know the technical solution meets the product need.
8. **Quality-check** — Brief provides enough context for eng to start design without requiring a follow-up meeting.

## Output Format
```
## Technical Brief: [Feature Name]
**Author:** [PM Name] | **For:** [Eng Team] | **Date:** [Date]

### Why This Matters
[Business context. Strategy link. Customer impact.]

### The User Problem
[Evidence-backed problem description. Current state vs desired state.]

### Non-Negotiables
- [Hard requirement with rationale]

### Where You Have Flexibility
- [Area of eng discretion with context on trade-offs PM accepts]

### Known Constraints
| Constraint | Detail | Negotiable? |
|-----------|--------|-------------|

### Questions for Engineering
| # | Question | Context | Needed By |
|---|----------|---------|-----------|

### Success Criteria
[How we'll validate the technical approach meets product needs]

### References
- [Links to PRD, designs, research, relevant systems]
```

## Quality Standards
- Clearly separates *what* (PM domain) from *how* (eng domain).
- Non-negotiables have rationale — not arbitrary mandates.
- Questions are specific enough to get actionable answers.
- An engineer unfamiliar with the project can understand the full context.

**Anti-patterns:** Prescribing technical solutions, vague constraints ("make it fast"), mixing PM opinions with requirements, omitting the "why" behind non-negotiables.

## Framework References
- **Shape Up (Appetite)** — Frame constraints as appetite (how much time we're willing to spend), not estimates.
- **Working Backwards** — Ground technical needs in customer outcomes.

## Formatting Guidelines
- Use tables for constraints and questions.
- Keep narrative sections concise — engineers skim.
- Bold non-negotiables to make them visually distinct.
- Link to source documents rather than duplicating content.

## Example
**Non-negotiable:** "Response time must be < 200ms at p95 because this powers a real-time autocomplete experience where latency is directly visible to users."

**Flexibility:** "We don't have a preference on whether this is a new microservice or an extension of the existing search service — whatever eng recommends for maintainability."
