# Lean Experimentation

## What It Is
Lean Experimentation is a structured approach to testing product assumptions before building. It follows a disciplined process: identify the riskiest assumption, formulate a hypothesis, design the smallest possible experiment, define success criteria, run the test, and decide based on results. It transforms opinion-based decisions into evidence-based ones.

## When to Use
- Before committing development resources to build a feature
- When the team disagrees about whether something will work
- Testing demand, usability, or willingness-to-pay for new concepts
- Continuous discovery — each week's experiments test new assumptions

## When NOT to Use
- Well-validated features where the risk of being wrong is low
- Urgent fixes where experimentation introduces unacceptable delay
- When the cost of building is lower than the cost of experimenting (rare)

## How to Apply
1. **Identify the riskiest assumption**: What must be true for this to succeed? What do we know the least about?
2. **Write a hypothesis**: "We believe [assumption]. We'll know we're right when [measurable outcome] within [timeframe]"
3. **Choose experiment type** (from least to most effort):
   - **Smoke test**: Fake door / landing page / painted door button
   - **Concierge**: Deliver the service manually to a few users
   - **Wizard of Oz**: Looks automated to users but is manual behind the scenes
   - **Prototype test**: Clickable prototype with user observation
   - **A/B test**: Live code experiment with real users and statistical significance
   - **Beta/pilot**: Limited release to a subset of users
4. **Define success criteria**: What number constitutes success *before* seeing results?
5. **Run the experiment**: Set a time limit. Collect data
6. **Analyze and decide**: Did it meet the success criteria? → Build / Iterate / Kill

## Template
| Element | Description |
|---------|-----------|
| Riskiest Assumption | |
| Hypothesis | We believe [___]. We'll know we're right when [___] |
| Experiment Type | Smoke test / Concierge / Wizard of Oz / Prototype / A/B / Beta |
| Success Criteria | [Metric] ≥ [threshold] within [timeframe] |
| Sample Size | |
| Duration | |
| Result | |
| Decision | Build / Iterate / Kill |

## Example
**Assumption**: Users will pay $10/month for AI-generated weekly reports
- **Hypothesis**: "We believe 5%+ of free users will upgrade when shown AI reports. We'll know within 2 weeks"
- **Experiment**: Painted door test — add "AI Reports (Premium)" button in navigation. Track clicks
- **Success Criteria**: >5% click-through rate on the button
- **Result**: 8.3% of users clicked within 1 week
- **Decision**: Build — demand signal is strong. Next: Wizard of Oz test with manual AI reports for 20 users to validate retention

## Key Pitfalls
- Choosing success criteria *after* seeing results — define them before the experiment
- Running experiments too long or too short — set a timeframe and stick to it
- Not testing the riskiest assumption first — you'll waste time validating safe bets
- Experiment theater — running tests but ignoring results when they conflict with preferences

## Related Frameworks
- **Assumption Mapping** — identifies which assumptions to experiment on
- **Lean Startup** — the broader methodology lean experimentation supports
- **Opportunity Solution Tree** — experiments sit at the leaves of the tree
- **Continuous Discovery** — weekly experimentation as a team habit
