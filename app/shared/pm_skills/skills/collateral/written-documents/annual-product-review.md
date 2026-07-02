# Annual Product Review

## Purpose
Creates a comprehensive year-in-review document covering major milestones, metric performance against annual goals, strategic progress assessment, key learnings, team growth, and a preview of the next year. Serves as both a celebration of achievement and an honest assessment that informs next year's strategy.

## Auto-Trigger Patterns
- "Write an annual product review for [year]"
- "Create a year-in-review document"
- "I need to summarize our product year"
- "Help me put together an annual retrospective"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Annual goals/OKRs with results, key metrics (start of year vs end), major launches, team changes
- **Optional:** Customer satisfaction data, competitive developments, industry benchmarks, team retrospective notes
- **Reference files:** product-brief.md, quarterly-business-review.md, strategy-document.md

## Process
1. **Gather annual data** — Compile all quarterly metrics, launches, customer data, and team changes.
2. **Assess against goals** — Score each annual goal/OKR. Honest red/yellow/green assessment.
3. **Identify milestones** — Select the 5-10 moments that defined the year.
4. **Extract learnings** — What worked that we should double down on? What didn't that we should change?
5. **Celebrate the team** — Growth, development, key contributions.
6. **Set up next year** — Preview strategic direction informed by this year's learnings.

## Output Format
```
# [Year] Product Year in Review

## 1. Year at a Glance (1 page)
Timeline of key milestones. Headline metrics. Year in one sentence.

## 2. Goals & Performance (2-3 pages)
| Goal | Target | Result | Status | Commentary |
Per-goal deep dive with context.

## 3. Major Milestones (2-3 pages)
Top 5-10 achievements. Impact. Team behind each.

## 4. Metrics Deep Dive (1-2 pages)
Full metrics dashboard: YoY comparisons, trend analysis, benchmarks.

## 5. Strategic Progress (1-2 pages)
How did we advance our strategic pillars? What shifted mid-year and why?

## 6. Key Learnings (1-2 pages)
What worked and why. What didn't and why.
What surprised us. What we'd do differently.

## 7. Team & Culture (1 page)
Growth. Key hires. Development milestones. Culture moments.

## 8. Looking Ahead (1 page)
Next year's strategic themes. Key questions to answer.
Opportunities and challenges on the horizon.
```

## Quality Standards
- Honest about misses with root cause analysis, not just celebration.
- Learnings are specific enough to change behavior ("we learned that..." → "so next year we will...").
- Metrics include YoY comparison and industry benchmarks for context.
- **Anti-patterns:** All celebration no reflection, vague learnings, missing the team dimension, no forward link.

## Audience
Product team, leadership, cross-functional partners, and board. The team needs recognition and reflection; leadership needs performance assessment; the board needs trajectory confidence. Write for all three simultaneously.

## Formatting Guidelines
- 8-12 pages. Visual timeline for milestones. Dashboard for metrics.
- Balance narrative prose with data tables.
- Include team photos or shoutouts (with permission).
- End on a forward-looking, energizing note.

## Example
**Section 6 excerpt:** "Our biggest learning: we over-indexed on shipping velocity and under-indexed on adoption. We launched 23 features but only 8 achieved >20% adoption within 60 days. In retrospect, 3-4 features should have been cut in favor of deeper investment in the top performers. Next year, we're implementing a 'launch and land' framework—every feature ships with an adoption target and a 30-day investment commitment post-launch."
