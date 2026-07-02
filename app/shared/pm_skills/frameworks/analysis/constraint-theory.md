# Theory of Constraints (TOC)

## What It Is
The Theory of Constraints, developed by Eliyahu Goldratt (The Goal, 1984), states that every system has at least one constraint (bottleneck) that limits its overall throughput. Improving anything other than the constraint is wasted effort. TOC provides a five-step process (the Five Focusing Steps) to systematically identify and address the constraint.

## When to Use
- When improving individual components doesn't improve overall system performance
- Identifying why a product, team, or process isn't achieving its potential
- Optimizing throughput in development pipelines, sales funnels, or operational processes
- When everything seems important but you can only fix one thing

## When NOT to Use
- When the system doesn't have a clear bottleneck — multiple equal constraints are rare but possible
- Very early-stage exploration where the "system" isn't defined yet
- When you need to optimize multiple things simultaneously — TOC is sequential

## How to Apply
**Five Focusing Steps**:
1. **Identify the constraint**: What is the single bottleneck that limits overall throughput? Look for queues, delays, and capacity limits
2. **Exploit the constraint**: Make the most of the constraint without adding resources. Ensure it's never idle. Remove any waste from the constraint's process
3. **Subordinate everything else**: Align all other processes to support the constraint. Non-constraints should operate at the constraint's pace, not their own capacity
4. **Elevate the constraint**: If exploitation and subordination aren't enough, add capacity to the constraint (hire, automate, invest)
5. **Repeat**: Once the constraint moves (it will), go back to step 1 and find the new bottleneck

## Template
| Step | Analysis | Action |
|------|---------|--------|
| 1. Identify | The constraint is: ___ Evidence: ___ | |
| 2. Exploit | How to maximize constraint output without adding resources: | |
| 3. Subordinate | What should other parts of the system change: | |
| 4. Elevate | Investment needed to add constraint capacity: | |
| 5. New Constraint | After fixing, the new constraint will likely be: | |

## Example
**System**: SaaS product development pipeline
- **Constraint identified**: Code review — PRs wait 3 days average for review; developers context-switch while waiting
- **Exploit**: Implement PR size limits (smaller PRs = faster reviews). Prioritize reviews first thing each morning
- **Subordinate**: Don't start new stories if review queue exceeds 5 PRs. QA prepares test plans while code is in review (not after)
- **Elevate**: Add a second reviewer per squad. Implement automated code review for style/formatting issues
- **Result**: PR review time dropped from 3 days to 6 hours. New constraint: QA capacity (next iteration)

## Key Pitfalls
- Optimizing non-constraints — this is the core mistake TOC warns against; improvements elsewhere don't improve the system
- Identifying the wrong constraint — look for where work queues up, not where people are busiest
- Elevating before exploiting — adding resources to a poorly managed constraint is wasteful
- Assuming the constraint is permanent — constraints move; continuously reassess

## Related Frameworks
- **Kanban** — WIP limits are a direct application of TOC principles
- **Root Cause / Five Whys** — helps understand why the constraint exists
- **Pareto Analysis** — identifies the vital few contributing to the constraint
- **Lean Startup** — Build-Measure-Learn loop is a constraint-aware iteration process
