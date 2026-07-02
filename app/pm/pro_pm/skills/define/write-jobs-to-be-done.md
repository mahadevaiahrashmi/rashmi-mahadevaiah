# Write Jobs-to-Be-Done Analysis

## Purpose
Conduct a rigorous JTBD analysis that uncovers the functional, emotional, and social jobs customers are trying to accomplish — revealing innovation opportunities that surface-level feature requests miss. JTBD shifts focus from "what customers say they want" to "what they're actually trying to achieve."

## Auto-Trigger Patterns
- "do a JTBD analysis"
- "what jobs are customers hiring us for"
- "jobs-to-be-done for [segment]"
- "help me understand customer jobs"
- "map the customer jobs for [product area]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Customer segment or product area | Yes | User prompt |
| Customer profiles | No | `context/products/*/customers.md` |
| Research data (interviews, surveys) | Optional | `artifacts/research/` |
| Competitive alternatives | Optional | `context/products/*/competitors.md` |
| Current product capabilities | Optional | `context/products/` |

## Process
1. **Define the main job** — What is the customer ultimately trying to accomplish? Frame at the right altitude — not too broad, not too narrow.
2. **Map job steps** — Break the main job into stages: Define → Locate → Prepare → Confirm → Execute → Monitor → Modify → Conclude.
3. **Identify job types** — Functional (practical task), Emotional (how they want to feel), Social (how they want to be perceived).
4. **Uncover desired outcomes** — For each job step, list what "done well" looks like. Use outcome statement format: Direction + metric + object of control.
5. **Score with ODI** — Apply Outcome-Driven Innovation: importance vs. satisfaction. Identify over-served, under-served, and appropriately-served outcomes.
6. **Identify competing solutions** — What do customers currently "hire" to do these jobs? Include non-obvious alternatives.
7. **Surface opportunities** — Under-served outcomes with high importance = innovation opportunities.
8. **Quality-check** — Jobs are solution-agnostic, outcomes are measurable, scoring is evidence-based.

## Output Format
```
## JTBD Analysis: [Segment / Product Area]

### Main Job Statement
"When [situation], I want to [motivation], so I can [desired outcome]."

### Job Map
| Stage | Job Step | Desired Outcome |
|-------|----------|----------------|

### Functional Jobs
| Job | Importance (1-10) | Satisfaction (1-10) | Opportunity |
|-----|-------------------|--------------------:|-------------|

### Emotional Jobs
| Job | Context |
|-----|---------|

### Social Jobs
| Job | Context |
|-----|---------|

### ODI Opportunity Scores
| Outcome | Importance | Satisfaction | Opp Score | Category |
|---------|-----------|-------------|-----------|----------|
[Opp Score = Importance + (Importance - Satisfaction)]

### Current Alternatives ("Hiring" Today)
| Alternative | Jobs It Serves | Strengths | Weaknesses |
|-------------|---------------|-----------|------------|

### Top Opportunities
1. [Under-served outcome with highest opportunity score]
```

## Quality Standards
- Jobs are framed as customer goals, not product features.
- Job map covers the full lifecycle, not just the core action.
- ODI scoring uses real data, not guesses. Flag when scores are estimated.
- Emotional and social jobs are included, not just functional.

**Anti-patterns:** Feature-as-job ("I want a dashboard"), solution-embedded jobs, ignoring emotional/social dimensions, skipping competing alternatives.

## Framework References
- **JTBD (Christensen/Ulwick)** — Core framework for job identification and outcome mapping.
- **Outcome-Driven Innovation (ODI)** — Quantitative scoring to identify under-served outcomes.

## Formatting Guidelines
- Use the canonical job statement format.
- Tables for job maps and scoring.
- Sort opportunity scores descending to surface top priorities.
- Bold the highest-opportunity outcomes.

## Example
**Main Job:** "When I'm preparing a quarterly business review, I want to quickly assemble accurate performance data, so I can confidently present progress to leadership."

**Under-served Outcome:** "Minimize the time it takes to reconcile data from multiple sources" — Importance: 9, Satisfaction: 3, Opp Score: 15.
