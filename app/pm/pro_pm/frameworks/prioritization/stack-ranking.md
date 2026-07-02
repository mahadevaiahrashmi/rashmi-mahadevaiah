# Stack Ranking

## What It Is
Stack ranking is a prioritization method that forces every item into a strict sequential order (1, 2, 3... N) with no ties allowed. It eliminates the "everything is P1" problem by requiring explicit trade-offs. Used extensively at companies like Amazon and Microsoft for roadmap and resource allocation decisions.

## When to Use
- When you need a definitive ordered list and can't have multiple items at the same priority
- Resource allocation decisions where only the top N items get funded
- Breaking deadlocks when other frameworks produce clusters of similar scores
- Exec-level prioritization where "pick the top 3" is the decision format

## When NOT to Use
- Comparing items across fundamentally different categories without a unifying criterion
- When the ordered list creates false precision — items 12 and 13 may be functionally equivalent
- Large backlogs (50+) — stack ranking becomes impractical; bucket first, then rank within buckets
- When collaborative buy-in matters more than a ranked list — use Buy a Feature or Value-Effort Matrix

## How to Apply
1. **Define the single criterion** for ranking (value to customer, revenue impact, strategic alignment)
2. **List** all items to rank
3. **Start with extremes**: Identify the clear #1 and clear last item
4. **Use pairwise comparison**: For each remaining item, ask "Is this more or less important than what's already placed?"
5. **Insert** items into the ordered list using binary search logic
6. **Review** the full list as a team — swap adjacent items if needed
7. **Draw the cut line**: Above the line = committed. Below = not this cycle

## Template
| Rank | Feature/Initiative | Rationale for Position | Status |
|------|--------------------|----------------------|--------|
| 1    |                    |                      | Committed |
| 2    |                    |                      | Committed |
| 3    |                    |                      | Committed |
| ---  | **CUT LINE**       |                      |        |
| 4    |                    |                      | Backlog |

## Example
**Context**: Q4 planning, capacity for 3 major initiatives
1. **Self-serve onboarding** — directly drives activation metric (North Star)
2. **Enterprise SSO** — unlocks $2M pipeline of blocked deals
3. **Performance optimization** — retention risk if not addressed
--- CUT LINE ---
4. **Dashboard redesign** — valuable but not urgent
5. **Mobile app v2** — important but can wait for Q1

## Key Pitfalls
- Spending excessive time on items near the cut line — timebox debates
- Ignoring dependencies — item #4 might be a prerequisite for item #2
- Not revisiting the ranking as new information arrives
- Using stack ranking to pit teams against each other — rank work, not people
- Treating the ranking as permanent — it's a snapshot for this planning cycle

## Related Frameworks
- **RICE/ICE** — scoring that can inform stack ranking decisions
- **MoSCoW** — categorical alternative when strict ordering isn't needed
- **WSJF** — produces a ranked list with urgency factored in
- **Value-Effort Matrix** — visual triage before stack ranking
