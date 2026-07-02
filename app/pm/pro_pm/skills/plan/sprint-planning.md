# Sprint Planning

## Purpose
Plan a sprint by reviewing capacity, selecting work from the prioritized backlog, setting a clear sprint goal, assigning owners, and identifying risks — ensuring the team commits to an achievable, focused, and valuable set of work for the iteration.

## Auto-Trigger Patterns
- "plan the next sprint"
- "sprint planning for [sprint name]"
- "what should we commit to this sprint"
- "help me plan the iteration"
- "prepare for sprint planning"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Prioritized backlog | Yes | User prompt |
| Team capacity | Yes | User prompt or `context/me/working-agreements.md` |
| Sprint duration | No | `context/me/working-agreements.md` |
| Previous sprint results | Optional | User prompt |
| In-flight work | Optional | User prompt |
| Dependencies / blockers | Optional | User prompt |

## Process
1. **Review previous sprint** — What carried over? What was the velocity? Any learnings to apply?
2. **Calculate capacity** — Available person-days minus PTO, meetings, support rotation, and buffer.
3. **Set sprint goal** — One clear sentence: what will be true at the end of this sprint that isn't true now?
4. **Select from backlog** — Pull stories by priority until capacity is filled. Leave 15-20% buffer.
5. **Check for sprint-readiness** — Each selected item has: clear acceptance criteria, estimated effort, no unresolved blockers.
6. **Assign owners** — Primary owner for each story. Balance workload across the team.
7. **Identify risks** — Dependencies on other teams, technically uncertain work, single-person bottlenecks.
8. **Plan ceremonies** — Standup cadence, mid-sprint check, demo/review logistics.
9. **Quality-check** — Sprint is focused (one goal), achievable (capacity-backed), and every item is ready.

## Output Format
```
## Sprint Plan: [Sprint Name/Number]
**Dates:** [Start] — [End] | **Duration:** [Days]

### Sprint Goal
[One clear sentence]

### Capacity
| Team Member | Available Days | Allocated | Buffer |
|-------------|---------------|-----------|--------|
| **Total** | ... | ... | ... |

### Committed Work
| # | Story | Points/Days | Owner | Status | Dependency |
|---|-------|------------|-------|--------|------------|

### Carryover from Last Sprint
| # | Story | Reason | Remaining Effort |
|---|-------|--------|-----------------|

### Risks
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|

### Ceremonies
| Ceremony | Day/Time | Duration |
|----------|----------|----------|

### Sprint Metrics Target
| Metric | Last Sprint | This Sprint Target |
|--------|-------------|-------------------|
```

## Quality Standards
- Sprint goal is specific and outcome-oriented, not a list of tasks.
- Capacity calculation is realistic — accounts for meetings, support, and PTO.
- Buffer exists (15-20%) for unplanned work and estimation error.
- Every story has an owner and is sprint-ready (AC defined, blockers resolved).

**Anti-patterns:** Over-committing (100% capacity utilization), no sprint goal, carrying over >20% from previous sprint, stories without acceptance criteria.

## Framework References
- **Scrum Sprint Planning** — Standard ceremony structure.
- **Yesterday's Weather** — Use last sprint's velocity as baseline for commitment.

## Formatting Guidelines
- Put sprint goal prominently at the top.
- Use a capacity table showing per-person allocation.
- Include carryover items separately from new commitments.
- Bold the total capacity numbers.

## Example
**Sprint Goal:** "By end of sprint, enterprise customers can export any dashboard to PDF with their company branding."

**Capacity:** 5 engineers × 8 days = 40 person-days. PTO: 3 days. Meetings: 5 days. Support: 4 days. Available: 28 days. Buffer (20%): 5.6 days. Committable: 22.4 days.
