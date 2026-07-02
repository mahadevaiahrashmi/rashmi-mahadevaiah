# Sprint Review Prep

## Purpose
Prepare a compelling sprint review that tells the story of what the team accomplished — with a demo narrative, metrics snapshot, key decisions, and upcoming priorities. Transforms a status readout into a meaningful showcase of progress and learning.

## Auto-Trigger Patterns
- "prep for sprint review"
- "sprint review preparation"
- "demo script for sprint review"
- "sprint showcase prep"
- "prepare sprint demo"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Sprint goals / committed items | Yes | User prompt |
| Completed work | Yes | User prompt |
| Metrics data | Recommended | User prompt or dashboards |
| Initiative context | Optional | `context/initiatives/` |

## Process
1. **Review sprint commitments** — Planned vs. shipped. Honest accounting of scope changes and carry-overs.
2. **Build the demo narrative** — Tell the story, don't list features. Connect each demo to the user problem. Lead with strongest item.
3. **Prepare metrics snapshot** — Key metrics that moved (or didn't) with trends and drivers.
4. **Document key decisions** — Decisions made during sprint with rationale.
5. **Identify learnings** — Technical discoveries, user insights, process improvements.
6. **Frame upcoming priorities** — What's next and why, connected to initiative goals.
7. **Prepare for questions** — Anticipate stakeholder questions about delivered and undelivered work.
8. **Structure the review** — Demo (60%), metrics (15%), decisions/learnings (15%), upcoming (10%).

## Output Format
```
## Sprint Review: Sprint [X] — [Date Range]

### Sprint Scorecard
| Metric | Committed | Delivered | Notes |
|--------|-----------|-----------|-------|
| Stories | X | Y | [carry-over reason] |

### Demo Script
#### Demo 1: [Feature Name]
- **User problem:** [What this solves]
- **Flow:** [Step-by-step walkthrough]
- **Key moment:** [The "aha" to highlight]

### Metrics Snapshot
| Metric | Last Sprint | This Sprint | Trend | Driver |
|--------|------------|-------------|-------|--------|
| [KPI] | X | Y | ↑/↓/→ | [Why] |

### Upcoming Priorities
1. [Priority] — [Why it matters now]
```

## Quality Standards
- Demo tells a user story, not a feature list.
- Metrics include context (why things moved).
- Honest about what wasn't delivered.

**Anti-patterns:** Feature laundry lists, hiding carry-overs, metrics without context, demos that don't work.

## Framework References
- **Agile sprint review** — Inspect and adapt with stakeholder feedback.
- **Storytelling structure** — Problem → solution → impact narrative.

## Formatting Guidelines
- Scorecard table at top (instant health check).
- Demo script with clear flow and transitions.
- Metrics in trend table with directional arrows.

## Example
**Demo transition:** "That onboarding improvement solves activation for new users. But what about existing users who've churned? Let me show you what we built for win-back — it directly addresses the retention gap flagged last quarter."
