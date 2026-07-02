# Root Cause Analysis / Five Whys

## What It Is
The Five Whys is an iterative questioning technique developed at Toyota by Sakichi Toyoda. For any problem, ask "Why?" five times (or more) to peel back layers of symptoms and reach the root cause. Often paired with the Fishbone (Ishikawa) diagram, which categorizes potential causes visually across dimensions like People, Process, Technology, and Environment.

## When to Use
- Post-incident analysis (system outages, bugs, customer escalations)
- Understanding why a metric moved unexpectedly
- Team retrospectives when addressing recurring problems
- Any time you're treating symptoms instead of root causes

## When NOT to Use
- Complex systemic problems with multiple interacting causes — Five Whys is linear; use systems thinking
- When blame culture exists — Five Whys must focus on systems, not people
- Exploratory research — Five Whys is for diagnosed problems, not open discovery

## How to Apply
**Five Whys**:
1. State the problem clearly and specifically
2. Ask "Why did this happen?" — write the answer
3. Ask "Why?" again of the answer — write the next level
4. Repeat until you reach a root cause that, if fixed, would prevent recurrence
5. Typically 5 iterations, but stop when you reach an actionable root cause (could be 3 or 7)
6. Define corrective actions for the root cause

**Fishbone / Ishikawa** (for complex problems):
1. Place the problem at the "head" of the fish
2. Draw main "bones" for cause categories: People, Process, Technology, Environment, Materials, Measurement
3. Brainstorm specific causes under each category
4. Identify the most likely root causes and investigate

## Template
**Five Whys**:
| Level | Why? | Answer |
|-------|------|--------|
| 1 | Why [problem]? | |
| 2 | Why [answer 1]? | |
| 3 | Why [answer 2]? | |
| 4 | Why [answer 3]? | |
| 5 | Why [answer 4]? | |

**Root Cause**: ___
**Corrective Action**: ___

## Example
**Problem**: Customer churn increased 15% last quarter
1. Why? → Customers cited "product doesn't meet needs" in exit surveys
2. Why? → The features they needed were on the roadmap but not shipped
3. Why? → Engineering capacity was consumed by unplanned bug fixes
4. Why? → A major refactor introduced regressions that weren't caught
5. Why? → The refactor didn't have adequate test coverage

**Root Cause**: Insufficient test coverage requirements for major refactors
**Corrective Action**: Require test coverage thresholds for any PR that touches >500 lines; add integration test suite for core workflows

## Key Pitfalls
- Stopping too early (at symptoms) or going too deep (into philosophy)
- Accepting "people made mistakes" as a root cause — dig deeper into why the system allowed the mistake
- Single causal chain when multiple causes contributed — use fishbone for multi-causal analysis
- Not defining corrective actions — analysis without action is an academic exercise
- Blame culture — ask "Why did the system allow this?" not "Who caused this?"

## Related Frameworks
- **Pre-mortem** — proactive root cause analysis (before the problem happens)
- **Constraint Theory** — identifies systemic bottlenecks, not just incident causes
- **Pareto Analysis** — identifies the 20% of causes driving 80% of problems
- **Inversion** — related thinking style: "What would make this fail?"
