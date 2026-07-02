# Weighted Shortest Job First (WSJF)

## What It Is
WSJF is a prioritization model from the Scaled Agile Framework (SAFe) that calculates priority as **Cost of Delay divided by Job Duration**. Cost of Delay combines user/business value, time criticality, and risk reduction/opportunity enablement. It ensures you do the most valuable, time-sensitive, shortest work first.

## When to Use
- SAFe environments during PI Planning or backlog refinement
- When urgency and time-sensitivity matter as much as value
- Comparing features where some have deadlines or decaying value
- Portfolio-level prioritization across multiple teams

## When NOT to Use
- Small teams with simple backlogs — WSJF overhead isn't justified
- When all items have similar durations — Cost of Delay alone suffices
- Early discovery where you can't estimate job size meaningfully

## How to Apply
1. **List** features/epics to prioritize
2. **Score Cost of Delay** using three components (each 1–10, Fibonacci, or relative sizing):
   - **User-Business Value**: How much value does this deliver?
   - **Time Criticality**: Does value decay over time? Fixed deadlines?
   - **Risk Reduction / Opportunity Enablement**: Does this reduce risk or unlock future value?
3. **Sum** the three components → Cost of Delay
4. **Estimate Job Duration**: Size of the work (story points, sprints, or relative)
5. **Calculate**: WSJF = Cost of Delay / Job Duration
6. **Rank** by WSJF score — highest first
7. **Use relative sizing**: Compare items against each other, not absolute scales

## Template
| Feature | User-Biz Value | Time Criticality | Risk Reduction | CoD (sum) | Job Size | WSJF |
|---------|---------------|-----------------|----------------|-----------|----------|------|
|         |               |                 |                |           |          |      |

## Example
**Feature A**: Compliance update (regulatory deadline)
- User-Biz Value: 5, Time Criticality: 10, Risk Reduction: 8 → CoD = 23
- Job Size: 5 → **WSJF = 4.6**

**Feature B**: New reporting dashboard
- User-Biz Value: 8, Time Criticality: 3, Risk Reduction: 2 → CoD = 13
- Job Size: 8 → **WSJF = 1.6**

→ Feature A is prioritized first despite lower user value, because urgency drives it.

## Key Pitfalls
- Inflating Time Criticality to game scores — require deadlines to be real and documented
- Using absolute sizing instead of relative — SAFe recommends comparing items to each other
- Ignoring Job Duration and just using Cost of Delay — the "shortest job" part is critical
- Applying WSJF mechanically without team discussion and judgment

## Related Frameworks
- **Cost of Delay** — the core concept that WSJF builds on
- **RICE** — alternative scoring without time-criticality emphasis
- **SAFe** — the broader framework WSJF lives within
- **Stack Ranking** — simpler force-ranked alternative
