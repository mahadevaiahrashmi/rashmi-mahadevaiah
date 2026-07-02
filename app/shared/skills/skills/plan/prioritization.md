# Prioritization

## Purpose
Apply the right prioritization framework to rank a set of initiatives, features, or backlog items — making trade-offs explicit and defensible. Different situations call for different frameworks; the skill is choosing the right one and applying it rigorously, not just scoring items.

## Auto-Trigger Patterns
- "prioritize these features"
- "help me prioritize [backlog/list]"
- "RICE score these items"
- "rank these initiatives"
- "what should we work on first"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Items to prioritize | Yes | User prompt |
| Strategic goals | No | `context/company/overview.md` |
| Effort estimates | Optional | User prompt |
| Customer data | Optional | `context/products/*/customers.md` |
| Revenue impact data | Optional | User prompt |

## Process
1. **Assess the situation** — What are you prioritizing? (Strategic bets vs. backlog items vs. bugs.) How many items? What data is available?
2. **Select the framework** — Match the framework to the situation:
   - **RICE** — When you have reasonable data on reach, impact, confidence, and effort.
   - **ICE** — Quick and simple when limited data is available.
   - **Value-Effort (2x2)** — When you need visual communication for stakeholders.
   - **WSJF** — When cost of delay matters (time-sensitive opportunities).
   - **Kano** — When understanding customer delight vs. expectation is key.
3. **Score each item** — Apply the framework consistently. Document scoring rationale.
4. **Rank the results** — Sort by composite score. Identify natural groupings.
5. **Sensitivity check** — How do rankings change if key assumptions shift? Which items are sensitive?
6. **Apply judgment** — Frameworks inform; they don't decide. Flag where judgment overrides the score and why.
7. **Present the recommendation** — Ranked list with rationale, trade-off notes, and framework explanation.
8. **Quality-check** — Scoring is consistent, rationale is documented, overrides are justified.

## Output Format
```
## Prioritization: [Context]
**Framework:** [Selected framework] | **Rationale for framework:** [Why this one]

### Scored Items
| Rank | Item | [Score Components] | Total Score | Notes |
|------|------|--------------------|-------------|-------|

### RICE Example (if applicable)
| Rank | Item | Reach | Impact | Confidence | Effort | RICE Score |
|------|------|-------|--------|-----------|--------|------------|

### Sensitivity Analysis
| Item | Base Rank | If [assumption changes] | Sensitive? |
|------|-----------|------------------------|------------|

### Judgment Overrides
| Item | Framework Rank | Actual Rank | Reason |
|------|---------------|-------------|--------|

### Recommended Sequence
1. [Item] — [One-line rationale]
2. ...

### Trade-offs Acknowledged
[What you're NOT doing by choosing this order, and why that's acceptable]
```

## Quality Standards
- Framework selection is justified, not arbitrary.
- All items are scored on the same criteria with consistent definitions.
- Sensitivity analysis tests the robustness of rankings.
- Judgment overrides are explicit and justified — not hidden.
- Trade-offs of the chosen order are acknowledged.

**Anti-patterns:** Picking a framework to justify a predetermined answer, inconsistent scoring, no sensitivity check, pretending the framework "decided" (humans decide).

## Framework References
- **RICE** — Reach × Impact × Confidence ÷ Effort.
- **ICE** — Impact × Confidence × Ease.
- **WSJF** — Weighted Shortest Job First (cost of delay ÷ job size).
- **Kano Model** — Must-be, One-dimensional, Attractive, Indifferent, Reverse.
- **Value-Effort Matrix** — 2×2 quadrant for quick visual prioritization.

## Formatting Guidelines
- Include the framework explanation so readers understand the scoring.
- Use tables for scored items, sorted by rank.
- Include a sensitivity analysis section.
- Document judgment overrides transparently.

## Example
**Framework choice:** "Using RICE because we have Mixpanel data for reach, survey data for impact, and eng estimates for effort. Confidence scores reflect data quality."

**Override:** "Item #4 (SSO) ranks #7 by RICE but moved to #4 because it's blocking 3 specific enterprise deals worth $450K combined ARR — the cost of delay is acute and not captured in RICE's reach metric."
