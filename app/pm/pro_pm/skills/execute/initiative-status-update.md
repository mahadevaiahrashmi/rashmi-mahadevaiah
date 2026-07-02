# Initiative Status Update

## Purpose
Generate a clear, audience-tailored status update for an initiative — assessing health with objective criteria, tracking milestones, surfacing risks, highlighting blockers, and identifying decisions needed. Replaces vague "things are going well" with structured, honest reporting.

## Auto-Trigger Patterns
- "status update for [initiative]"
- "how is [project] tracking"
- "initiative health check"
- "weekly/monthly update for [initiative]"
- "generate status for [project]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Initiative name | Yes | User prompt |
| Initiative details | Recommended | `context/initiatives/` |
| Current progress data | Recommended | User prompt |
| Target audience | Optional | User prompt |

## Process
1. **Gather current state** — Pull from `context/initiatives/` and user input. Shipped, in progress, blocked.
2. **Assess health** — Green (on track), Yellow (at risk, mitigations in place), Red (off track, needs intervention). Justify.
3. **Track milestones** — Planned vs. actual, velocity trends, remaining work vs. time.
4. **Identify risks** — With likelihood, impact, mitigation status.
5. **Surface blockers** — Owner, escalation status, expected resolution.
6. **Flag decisions needed** — What's required from leadership to maintain momentum?
7. **Tailor for audience** — Exec gets summary; team gets details.
8. **Provide outlook** — What's expected next period.

## Output Format
```
## Initiative Status: [Name]
**Period:** [Date range]  |  **Health:** 🟢/🟡/🔴

### Health Justification
[Why this rating, what would change it]

### Milestone Tracker
| Milestone | Target | Status | Notes |
|-----------|--------|--------|-------|
| [M1] | [Date] | ✅ Complete | |
| [M2] | [Date] | 🔄 In Progress (70%) | |

### Risks
| Risk | Likelihood | Impact | Mitigation | Owner |
|------|-----------|--------|-----------|-------|
| [Risk] | High/Med/Low | High/Med/Low | [Action] | [Name] |

### Decisions Needed
1. **[Decision]** — By [date], from [person].
```

## Quality Standards
- Health ratings justified with specific criteria.
- Milestones show percentage completion.
- Decisions include "by when" and "from whom."

**Anti-patterns:** Perpetual green status, vague progress, risks without mitigations, disconnected from reality.

## Framework References
- **RAG status** — Red/Amber/Green with objective criteria.
- **Milestone-based tracking** — Progress against planned checkpoints.

## Formatting Guidelines
- Health emoji at top for instant assessment.
- Tables for milestones, risks, blockers.
- Numbered decisions (clear action items).

## Example
**Health justification:** "🟡 Yellow — Feature development at 85% but partner API docs 2 weeks late. Integration team hasn't started. If partner delivers by Friday, we recover to green. Otherwise, launch slides 1-2 weeks."
