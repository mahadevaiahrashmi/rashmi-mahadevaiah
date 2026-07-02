# Value-Effort Matrix

## What It Is
The Value-Effort Matrix is a 2×2 prioritization tool that plots features by their expected value (to users/business) against the effort required to build them. It produces four quadrants that make prioritization intuitive and visual. Widely used for stakeholder alignment sessions.

## When to Use
- Stakeholder workshops where you need quick, visual consensus
- Initial roadmap triage before applying more rigorous scoring
- When you need to identify quick wins and money pits at a glance
- Cross-functional planning where eng and product need a shared view

## When NOT to Use
- When you need a precise ranked list — use RICE or stack ranking
- Comparing 50+ items — the 2×2 becomes cluttered; batch first
- When effort estimates are wildly uncertain — do spike/discovery first

## How to Apply
1. **List** candidate features (ideally 10–25 for a productive session)
2. **Define "Value"**: Agree on what value means — revenue impact, user satisfaction, strategic alignment. Use a 1–10 scale or T-shirt sizes
3. **Define "Effort"**: Engineering + design + QA effort. Use story points, days, or T-shirt sizes
4. **Plot** each item on the matrix (whiteboard or digital tool)
5. **Discuss** placement as a team — the conversation matters more than precision
6. **Prioritize by quadrant**:
   - **Quick Wins** (high value, low effort): Do first
   - **Big Bets** (high value, high effort): Plan and invest carefully
   - **Fill-ins** (low value, low effort): Do if capacity allows
   - **Money Pits** (low value, high effort): Don't do

## Template
```
                    HIGH VALUE
                        │
     Big Bets           │         Quick Wins
     (Plan carefully)   │         (Do first)
                        │
   HIGH EFFORT ─────────┼───────── LOW EFFORT
                        │
     Money Pits         │         Fill-ins
     (Don't do)         │         (If capacity)
                        │
                    LOW VALUE
```

| Feature | Value (1–10) | Effort (1–10) | Quadrant |
|---------|-------------|--------------|----------|
|         |             |              |          |

## Example
**Product**: Project management SaaS
- **Quick Win**: Add keyboard shortcuts (Value: 7, Effort: 2) → Do first
- **Big Bet**: Real-time collaboration (Value: 9, Effort: 9) → Plan for Q3
- **Fill-in**: Custom color themes (Value: 3, Effort: 2) → Backlog, if time
- **Money Pit**: Build native desktop app (Value: 4, Effort: 9) → Skip

## Key Pitfalls
- Clustering everything in "Quick Wins" — force distribution across quadrants
- Confusing effort with duration — a 2-week task for 1 person ≠ a 2-week task for 5
- Skipping the team discussion — the matrix is a tool for conversation, not a calculator
- Ignoring Big Bets — they're where transformative value lives; don't just chase quick wins

## Related Frameworks
- **RICE** — quantitative scoring when the matrix needs more rigor
- **ICE** — similar simplicity with a numeric output
- **MoSCoW** — categorical alternative for scope-fixed releases
- **Cost of Delay** — helps quantify the "value" axis more precisely
