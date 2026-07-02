# Feature Factory Antidote

## What It Is
"Feature Factory" is a term coined by John Cutler to describe product teams that measure success by features shipped rather than outcomes achieved. The antidote is a set of practices that reorient teams toward outcomes, learning, and impact. Symptoms include: no measurement after launch, roadmaps as feature lists, success = on-time delivery, and PMs acting as project managers.

## When to Use
- When your team ships constantly but metrics don't improve
- When roadmap discussions focus on "what" and "when" but never "why" or "did it work"
- When PMs are valued for shipping features, not for moving metrics
- Team retrospectives that ask "did we ship on time?" but never "did it matter?"

## When NOT to Use
- Teams already operating with outcome-focused practices — you're not a feature factory
- Very early-stage products where shipping fast to learn is appropriate — the problem is shipping without measuring
- As a blunt critique of teams that ship a lot — shipping is good when coupled with measurement

## How to Apply
1. **Diagnose**: Score your team on feature factory symptoms:
   - Do you measure the impact of features after launch? (If no → feature factory)
   - Can every engineer explain *why* they're building their current feature? (If no → feature factory)
   - Is success defined as shipping on time or moving a metric? (If former → feature factory)
   - Do features ever get killed or rolled back based on data? (If never → feature factory)
2. **Shift to outcomes**:
   - Replace feature roadmaps with outcome roadmaps (what metrics will move, not what features will ship)
   - Add "success criteria" to every feature spec: how will we know this worked?
   - Institute post-launch reviews: measure impact 30/60/90 days after shipping
3. **Build learning loops**:
   - Allocate 20% of engineering capacity to experimentation and validation
   - Celebrate learning ("we learned X didn't work") alongside shipping
   - Share experiment results broadly — build a culture of data-informed decisions
4. **Change incentives**: Evaluate PMs on outcomes moved, not features delivered

## Template
**Feature Factory Assessment**:
| Symptom | Present? (Y/N) | Evidence |
|---------|----------------|----------|
| No post-launch measurement | | |
| Roadmap = feature list | | |
| Success = shipping on time | | |
| No one asks "did it work?" | | |
| PMs are project managers | | |
| Features never killed/rolled back | | |

**Score**: ___/6 symptoms present → ___ severity

**Transition Plan**:
| Practice | Current State | Target State | First Step |
|----------|-------------|-------------|------------|
| Outcome measurement | | | |
| Roadmap format | | | |
| Success criteria | | | |
| Post-launch review | | | |

## Example
**Before (Feature Factory)**:
- Q3 Roadmap: "Ship dashboard redesign, add CSV export, build API v2, launch mobile app"
- Success: "We shipped all 4 features on time!"
- Impact: Unknown — nobody measured

**After (Outcome-Oriented)**:
- Q3 Roadmap: "Increase weekly active users by 20% (currently 12K → 14.4K)"
- Work: Dashboard redesign experiment (A/B test), CSV export (customer request with revenue tied), API v2 (enable partner integrations)
- Success: WAU increased 15% (12K → 13.8K) — dashboard redesign drove most of the lift. API v2 too early to measure. CSV export had minimal impact — deprioritize similar requests

## Key Pitfalls
- Swinging too far — refusing to ship without perfect data. Ship fast, but measure
- Blaming engineers or PMs — feature factories are systemic, not individual failures
- Thinking "outcomes" means only revenue — user satisfaction, retention, and engagement are outcomes too
- Not giving teams time — the transition from feature factory to outcome-oriented takes quarters, not weeks

## Related Frameworks
- **Product Kata** — the operating rhythm for outcome-focused work
- **OKRs** — mechanism for defining and tracking outcomes
- **North Star Framework** — provides the metric that replaces the feature roadmap
- **Continuous Discovery** — the learning practices that prevent feature factory relapse
