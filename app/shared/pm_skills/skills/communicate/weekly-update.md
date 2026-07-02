# Weekly Update

## Purpose
Produce a consistent, scannable weekly update for stakeholders and team members. Covers accomplishments, in-progress work, blockers, upcoming priorities, and key metrics. Designed for week-over-week continuity so readers can track momentum without re-reading prior context.

## Auto-Trigger Patterns
- "Write a weekly update" / "weekly status"
- "What should I put in my weekly update?"
- "Summarize this week's progress"
- "Team update for this week"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** This week's accomplishments, current work items, blockers
- **Optional:** Metrics snapshot, key decisions made/needed, prior weekly update for continuity
- **Reference:** `context/initiatives/` for initiative status, `context/team/` for team context

## Process
1. **Gather accomplishments** — What shipped, completed, or meaningfully progressed? Focus on outcomes, not activities.
2. **Identify in-progress** — What's actively being worked on? Include expected completion.
3. **Surface blockers** — What's stuck and what's needed to unblock? Name the blocker owner.
4. **Queue upcoming** — Next week's priorities. Keep to 3-5 items maximum.
5. **Pull metrics** — Key metrics with week-over-week change. Only metrics that matter this week.
6. **Flag decisions** — Decisions made this week (for visibility) and decisions needed next week.
7. **Maintain consistency** — Use the same format every week. Readers should know exactly where to look.
8. **Review for signal-to-noise** — Remove anything that doesn't help the reader. Every line earns its place.

## Output Format
```
## Weekly Update: [Team/Initiative] — Week of [Date]

### ✅ Accomplished
- [Outcome 1 — quantified impact if available]
- [Outcome 2]

### 🔄 In Progress
- [Work item 1 — expected completion: date]
- [Work item 2 — % complete or stage]

### 🚧 Blocked
- [Blocker 1] — **Needs:** [what's needed] from [who] by [when]

### 📅 Upcoming (Next Week)
- [Priority 1]
- [Priority 2]
- [Priority 3]

### 📊 Metrics Snapshot
| Metric | This Week | Last Week | Δ |
|--------|-----------|-----------|---|
| ...    | ...       | ...       | ↑/↓ |

### 🔑 Decisions
- **Made:** [Decision and rationale]
- **Needed:** [Decision needed, deadline, decider]
```

## Quality Standards
- Accomplishments are outcomes ("Shipped X, driving Y% improvement") not activities ("Worked on X").
- Blockers include a clear unblock path — who needs to do what by when.
- Format is identical week over week. Readers build muscle memory.
- Metrics show trend, not just snapshot. Week-over-week delta is required.
- **Anti-patterns:** Activity logs disguised as accomplishments, buried blockers, inconsistent format, metrics without context, listing everything instead of curating.

## Framework References
- SCQA (Situation, Complication, Question, Answer) for framing blockers
- OKR alignment for connecting accomplishments to objectives

## Formatting Guidelines
- Use emoji headers for quick visual scanning.
- Keep each bullet to one line where possible. Wrap at two lines max.
- Tables for metrics. Bullets for everything else.
- Bold blocker owners and decision deadlines.

## Example
> ### ✅ Accomplished
> - Shipped in-app onboarding v2 — early data shows 18% lift in Day-1 activation
> - Closed partnership API spec with Acme Corp — eng starting integration Monday
>
> ### 🚧 Blocked
> - **Data pipeline migration** — Needs: Eng lead to approve schema change by Thursday
>
> ### 📊 Metrics: DAU 12.4K (↑3.2% WoW) | NPS 42 (→ flat)
