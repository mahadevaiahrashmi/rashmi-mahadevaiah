# Scenario Planning

## Purpose
Conduct what-if analysis by defining 2-4 scenarios — optimistic, expected, pessimistic, and black swan — with their assumptions, implications, and recommended actions. Scenario planning prepares the team for multiple futures rather than betting everything on a single prediction.

## Auto-Trigger Patterns
- "what-if analysis for [initiative]"
- "scenario planning for [project]"
- "what could happen with [decision]"
- "contingency planning for [risk]"
- "plan for best and worst case"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Decision or initiative context | Yes | User prompt |
| Key uncertainties | Yes | User prompt |
| Strategic context | Optional | `context/company/overview.md` |
| Market conditions | Optional | `context/products/` |
| Historical data | Optional | User prompt |

## Process
1. **Identify key uncertainties** — What are the 2-3 factors that could most significantly change outcomes?
2. **Define scenarios** — Build 2-4 distinct scenarios based on combinations of how uncertainties resolve.
3. **Name each scenario** — Give memorable names that capture the essence (not just "good/bad").
4. **State assumptions** — For each scenario, list the specific conditions that would make it reality.
5. **Model implications** — What happens to timeline, resources, revenue, customer experience in each scenario?
6. **Develop recommended actions** — What should the team do in each scenario? Pre-planned responses.
7. **Set trigger points** — Observable leading indicators that signal which scenario is emerging.
8. **Identify no-regret moves** — Actions that are valuable regardless of which scenario plays out.
9. **Quality-check** — Scenarios are genuinely distinct, not just the same plan with different numbers.

## Output Format
```
## Scenario Analysis: [Decision/Initiative]
**Key Uncertainties:** [Factors that could most change outcomes]

### Scenarios Overview
| Scenario | Name | Probability | Key Assumption |
|----------|------|-------------|----------------|

### Scenario 1: [Name] (Optimistic)
**Assumptions:** [What must be true]
**Implications:**
- Timeline: ...
- Resources: ...
- Revenue: ...
- Customer impact: ...
**Recommended actions:** [What to do if this scenario emerges]

### Scenario 2: [Name] (Expected)
[Same structure]

### Scenario 3: [Name] (Pessimistic)
[Same structure]

### Scenario 4: [Name] (Black Swan)
[Same structure]

### Trigger Points
| Indicator | Scenario Signaled | When to Check | Data Source |
|-----------|------------------|---------------|------------|

### No-Regret Moves
[Actions valuable in ALL scenarios — do these regardless]

### Decision Timeline
| Decision | Latest Decision Date | Rationale |
|----------|---------------------|-----------|
```

## Quality Standards
- Scenarios are genuinely different — not just ±10% variations of the same plan.
- Black swan scenario is included to prepare for extreme outcomes.
- Trigger points are observable and available early enough to act.
- No-regret moves are identified — things to do regardless of which scenario materializes.

**Anti-patterns:** Only two scenarios (good/bad), scenarios without actionable responses, no trigger points, ignoring black swans, scenarios that are really just optimistic/pessimistic versions of one plan.

## Framework References
- **Scenario Planning (Shell/Schwartz)** — Classic approach to navigating uncertainty.
- **Real Options** — Preserve optionality until uncertainty resolves.
- **Pre-mortem** — "What went wrong?" exercise feeds pessimistic and black swan scenarios.

## Formatting Guidelines
- Use a consistent structure for each scenario.
- Include a summary overview table for quick comparison.
- Bold the trigger points for visibility.
- Separate no-regret moves into their own section.

## Example
**Scenario: "The Bottleneck"** (Pessimistic) — Assumptions: Platform team delivers API 6 weeks late; competitor launches similar feature first. Implications: Our launch slides to Q4; we lose first-mover positioning. Response: Pivot to differentiation strategy; build client-side workaround for API gap; accelerate unique features competitor doesn't have.

**Trigger point:** "If Platform team misses their Q2 milestone by >2 weeks, activate Bottleneck contingency plan."
