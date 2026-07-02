# Cross-Team Coordination

## Purpose
Coordinate initiatives spanning multiple teams — mapping dependencies, identifying integration points, creating shared timelines, defining handoff criteria, and establishing communication and escalation paths. Prevents "nobody told us" failures.

## Auto-Trigger Patterns
- "coordinate between [team A] and [team B]"
- "cross-team coordination for [initiative]"
- "dependency mapping for [project]"
- "RACI for [cross-team initiative]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Initiative description | Yes | User prompt |
| Teams involved | Yes | User prompt |
| Dependencies (known) | Recommended | User prompt |
| Team contacts | Recommended | `context/people/` |

## Process
1. **Map participating teams** — Every team that contributes, depends on, or is affected by the initiative.
2. **Identify dependencies** — What each team delivers, consumes, and when. Create dependency graph.
3. **Define integration points** — API contracts, shared data, UX handoffs, deployment coordination.
4. **Build shared timeline** — Single source of truth with dependency-driven sequencing.
5. **Set handoff criteria** — For each handoff: "done" definition, acceptance criteria, quality bar.
6. **Create RACI** — Responsible, Accountable, Consulted, Informed per deliverable.
7. **Design communication plan** — Sync cadence, async channels, escalation triggers.
8. **Plan for failure modes** — What if a team misses a milestone? Contingencies and early warnings.

## Output Format
```
## Cross-Team Coordination: [Initiative]

### Dependency Map
| Dependency | Provider | Consumer | Due | Status |
|-----------|----------|----------|-----|--------|
| [API contract] | Team A | Team B | [Date] | Not started |

### RACI
| Deliverable | R | A | C | I |
|------------|---|---|---|---|
| [Item 1] | Team A | PM | Teams B,C | Stakeholders |

### Communication Plan
- **Sync:** [Cadence, attendees]
- **Async:** [Channel, frequency]
- **Escalation:** [Trigger → path → timeline]
```

## Quality Standards
- Every dependency has owner, date, and status.
- Critical path identified.
- Handoff criteria are specific and testable.
- RACI has exactly one Accountable per deliverable.

**Anti-patterns:** Missing teams, unclear handoffs, no escalation path, multiple Accountables per item.

## Framework References
- **RACI** — Responsibility assignment matrix.
- **Critical path method** — Identifying the longest dependency chain.

## Formatting Guidelines
- Tables for dependencies, timeline, RACI.
- Dependency arrows (→, ↔) for direction.
- Communication plan with specific cadences.

## Example
**Dependency:** "Team B's mobile SDK depends on Team A's API v2 in staging. ETA March 10, but Team B needs 2 weeks for testing. If API delayed past March 10, mobile launch misses March 31. Early warning: check API progress on March 3."
