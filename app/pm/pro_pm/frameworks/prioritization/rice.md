# RICE Scoring

## What It Is
RICE is a quantitative prioritization framework developed by Intercom. It scores features by four factors — Reach, Impact, Confidence, and Effort — producing a single comparable score. The formula: **Score = (Reach x Impact x Confidence) / Effort**.

## When to Use
- Comparing features that vary widely in scope, audience, and effort
- When you need a defensible, data-informed priority list for roadmap planning
- Cross-team prioritization where subjective "gut feel" won't survive scrutiny

## When NOT to Use
- Very early-stage products where Reach/Impact data doesn't exist yet — use assumption mapping instead
- Urgent production issues that bypass prioritization entirely
- When comparing items of fundamentally different types (e.g., tech debt vs. features) without normalizing scales

## How to Apply
1. **List** all candidate features/projects
2. **Score Reach**: How many users/accounts will this affect per quarter? Use real data (DAU, segment size)
3. **Score Impact**: Per-user impact on your goal. Scale: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal
4. **Score Confidence**: How confident are you in these estimates? 100% = high (data-backed), 80% = medium, 50% = low (gut feel)
5. **Score Effort**: Person-months of work. Include design, eng, QA
6. **Calculate**: (R x I x C) / E
7. **Rank** by score. Review as a team for sanity check

## Template
| Feature | Reach (users/qtr) | Impact (0.25-3) | Confidence (%) | Effort (person-months) | RICE Score |
|---------|-------------------|-----------------|----------------|----------------------|------------|
|         |                   |                 |                |                      |            |

## Example
**Feature**: Add CSV export to analytics dashboard
- Reach: 4,000 users/quarter (based on dashboard DAU)
- Impact: 1 (medium -- saves time but not a blocker)
- Confidence: 80% (usage data is solid, impact is estimated)
- Effort: 1 person-month
- **Score**: (4000 x 1 x 0.8) / 1 = **3,200**

## Key Pitfalls
- Gaming Confidence scores to inflate favorites -- require justification for any score above 80%
- Using Reach as "total users" instead of "users actually affected in the time period"
- Ignoring strategic value -- RICE is tactical; pair with strategy frameworks for balance
- Not recalibrating after projects ship -- track actuals vs. estimates to improve scoring

## Related Frameworks
- **ICE** -- simpler version without Reach, faster for small lists
- **WSJF** -- when urgency/time-sensitivity matters more than reach
- **Value-Effort Matrix** -- visual alternative for stakeholder discussions
- **Cost of Delay** -- for quantifying the "not doing it" cost that RICE misses
