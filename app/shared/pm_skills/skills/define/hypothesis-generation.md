# Hypothesis Generation

## Purpose
Generate testable product hypotheses from a problem space — turning assumptions into structured experiments with clear success criteria. This bridges the gap between "we think this might work" and "here's how we'll prove it," enabling evidence-based product development.

## Auto-Trigger Patterns
- "generate hypotheses for [problem]"
- "what assumptions should we test"
- "help me design an experiment"
- "turn this into testable hypotheses"
- "what bets are we making with [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Problem space or opportunity | Yes | User prompt |
| User research / evidence | Optional | `artifacts/research/` |
| Customer segments | Optional | `context/products/*/customers.md` |
| Current metrics / baselines | Optional | User prompt |
| Strategic context | Optional | `context/company/overview.md` |

## Process
1. **Map the problem space** — What do we know? What do we assume? What are we guessing?
2. **Extract assumptions** — List every belief embedded in the current plan. Prioritize by risk: what's most dangerous to be wrong about?
3. **Convert to hypotheses** — Each assumption becomes a structured, falsifiable hypothesis.
4. **Define success criteria** — Specific metric, magnitude of change, and timeframe for each hypothesis.
5. **Design lightweight tests** — For each hypothesis, propose the cheapest way to test it: survey, prototype, A/B test, landing page, wizard-of-oz.
6. **Sequence by risk** — Test highest-risk hypotheses first. If the riskiest assumption fails, downstream hypotheses may be irrelevant.
7. **Quality-check** — Each hypothesis is falsifiable, success criteria are unambiguous, test methods are feasible.

## Output Format
```
## Hypothesis Set: [Problem Space]

### Assumptions Map
| # | Assumption | Confidence | Risk If Wrong | Priority |
|---|-----------|-----------|---------------|----------|

### Hypotheses
#### H1: [Short Name]
**We believe** [action/change]
**will result in** [measurable outcome]
**for** [target users]
**because** [rationale/evidence].

**We'll know this is true when** [metric] [direction] by [amount] within [timeframe].

**Test method:** [Cheapest valid test]
**Estimated duration:** [Time]
**Decision:** If true → [next step]. If false → [pivot/kill].

---

### Prioritized Testing Sequence
| Order | Hypothesis | Risk Level | Test Method | Duration |
|-------|-----------|-----------|-------------|----------|

### Key Decision Points
[What happens based on results — continue, pivot, or stop]
```

## Quality Standards
- Hypotheses are falsifiable — you can clearly prove them wrong.
- Success criteria are specific numbers, not directional ("improve engagement").
- Test methods are proportional to the risk — don't build to test what a survey can answer.
- The sequence tests riskiest assumptions first.

**Anti-patterns:** Untestable hypotheses, success criteria that can't fail, expensive tests for low-risk assumptions, hypotheses that confirm bias rather than challenge it.

## Framework References
- **Lean Startup (Build-Measure-Learn)** — Test assumptions before building.
- **Assumption Mapping** — Prioritize by importance × uncertainty.
- **Riskiest Assumption Test (RAT)** — Test the assumption that, if wrong, kills the idea.

## Formatting Guidelines
- Use the bold "We believe / will result in / because" template consistently.
- Tables for assumption mapping and test sequencing.
- Include decision trees: what happens if the hypothesis is confirmed vs. rejected.
- Number hypotheses for easy reference.

## Example
**Hypothesis:** "We believe adding a one-click template gallery will result in 25% higher 7-day activation for new users because our research shows 60% of churned users cited 'blank canvas paralysis' in exit surveys. We'll know this is true when Day-7 activation rate increases from 31% to 39% within 6 weeks of launch."
