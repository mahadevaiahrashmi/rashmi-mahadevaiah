# Kanban

## What It Is
Kanban is a flow-based work management method originating from Toyota's manufacturing system, adapted for knowledge work by David Anderson. Instead of fixed-length sprints, work flows continuously through stages with Work-In-Progress (WIP) limits to prevent overload. Key metrics are lead time, cycle time, and throughput. It emphasizes visualizing work, limiting WIP, and optimizing flow.

## When to Use
- Support, ops, or maintenance teams with unpredictable, continuous work
- When sprint boundaries feel artificial and create unnecessary batching
- Teams managing multiple work streams with varying priorities
- As an evolution from Scrum when the team wants more flexibility

## When NOT to Use
- Teams that benefit from the cadence and commitment of sprints — use Scrum
- When stakeholders need predictable delivery dates — Kanban's dates emerge from flow data
- Very early-stage products where you need intense focus — timeboxed sprints help constrain scope

## How to Apply
1. **Visualize the workflow**: Create a board with columns representing stages (Backlog → Ready → In Progress → Review → Done)
2. **Set WIP limits**: Limit how many items can be in each stage simultaneously. Common starting point: # of team members ÷ 2
3. **Manage flow**: Pull work when capacity opens. Don't push new work into full columns
4. **Measure**:
   - **Lead Time**: Time from request to delivery
   - **Cycle Time**: Time from work-started to delivery
   - **Throughput**: Items completed per unit time
5. **Improve**: Use metrics to identify bottlenecks. If Review column is always full, invest in code review capacity
6. **Explicit policies**: Define when items move between columns (Definition of Ready, Definition of Done)

## Template
```
│ Backlog │ Ready [3] │ In Progress [4] │ Review [2] │ Done │
│─────────│───────────│─────────────────│────────────│──────│
│         │           │                 │            │      │
│         │           │                 │            │      │
```

**Metrics Dashboard**:
| Metric | This Week | Last Week | Trend |
|--------|----------|-----------|-------|
| Avg Cycle Time | | | |
| Throughput (items/week) | | | |
| WIP | | | |

## Example
**Team**: Platform engineering (handles support escalations + planned improvements)
- **Board**: Backlog → Triaged → In Progress [3] → In Review [2] → Deployed → Done
- **WIP Limit**: 3 items in progress (for a 6-person team)
- **Bottleneck discovered**: Review column consistently at limit → Added daily review rotation
- **Result**: Cycle time dropped from 8 days to 5 days over one month

## Key Pitfalls
- No WIP limits = just a to-do list on a board, not Kanban
- Setting WIP limits too high (no constraint) or too low (starving the team)
- Not measuring flow metrics — without data, you can't identify or fix bottlenecks
- Treating Kanban as "Scrum without the rules" — Kanban has its own discipline

## Related Frameworks
- **Scrum** — sprint-based alternative with more ceremony and predictable cadence
- **Shape Up** — timeboxed alternative with more upfront shaping
- **Theory of Constraints** — the underlying principle behind WIP limits and bottleneck management
- **Team Topologies** — informs how to organize Kanban boards across team types
