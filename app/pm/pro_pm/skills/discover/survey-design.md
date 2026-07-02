# Survey Design

## Purpose
Design rigorous quantitative surveys that yield statistically meaningful, bias-minimized data. A well-designed survey validates qualitative hypotheses at scale, measures sentiment and behavior, and provides the numerical evidence needed for confident product decisions.

## Auto-Trigger Patterns
- "design a survey"
- "create a questionnaire"
- "help me write survey questions"
- "measure customer satisfaction"
- "quantify [finding] across our user base"
- "NPS / CSAT / CES survey"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Survey objective and decisions it will inform | Yes | User prompt |
| Target audience / segment | No | `context/products/*/customers.md` |
| Hypotheses or qualitative findings to validate | Recommended | Prior research synthesis |
| Existing survey instruments (if iterating) | Optional | User prompt |
| Distribution channel constraints | Optional | User prompt |

## Process
1. **Define the objective** — State the single decision this survey will inform. Avoid "learn more about customers" — be specific.
2. **Identify target audience** — Define who should and should not respond. Plan for segmentation in analysis.
3. **Select question types** — Match question types to data needs:
   - Likert scales for attitudes (5 or 7 point).
   - Multiple choice for categorical data.
   - Ranking for relative priority.
   - Open-ended sparingly (1-2 max) for qualitative color.
4. **Draft questions** — Write clear, neutral questions. One concept per question. Provide balanced response options.
5. **Structure the flow** — Start easy (screening, demographics), move to core questions, end with open-ended. Group by topic. Add logic branching where relevant.
6. **Bias-check every question** — Review for: leading language, double-barreled questions, acquiescence bias, social desirability bias, order effects.
7. **Calculate sample size** — Determine minimum responses needed for statistical significance given expected population size, confidence level (typically 95%), and margin of error (typically ±5%).
8. **Plan distribution** — Channel, timing, incentive, follow-up cadence, expected response rate.
9. **Pilot test** — Run with 5-10 respondents. Check for confusion, drop-off points, and completion time.

## Output Format
```
## Survey Design: [Title]

### Objective
[Decision this survey informs]

### Target Audience
**Include:** ...
**Exclude:** ...
**Estimated population:** ...

### Sample Size Calculation
| Parameter | Value |
|-----------|-------|
| Population | ... |
| Confidence level | 95% |
| Margin of error | ±5% |
| Required responses | ... |

### Survey Flow
| # | Question | Type | Logic |
|---|----------|------|-------|
| Q1 | ... | Screening | If no → end |
| Q2 | ... | Likert 5pt | — |

### Full Question Text
**Q1:** [Exact wording]
[Response options]

### Distribution Plan
| Channel | Expected response rate | Timeline |
|---------|----------------------|----------|
| ... | ... | ... |

### Analysis Plan
- Segmentation variables: ...
- Key cross-tabulations: ...
- Statistical tests: ...
```

## Quality Standards
- Every question maps to the stated objective.
- No double-barreled questions (asking two things at once).
- Response scales are balanced and include a neutral option.
- Survey takes < 5 minutes for core respondents (< 15 questions).
- Demographic questions are placed last (except screening).

**Anti-patterns:** Leading questions ("How much do you love…"), vague scales ("sometimes/often"), asking about hypothetical future behavior, excessive length, no analysis plan.

## Framework References
- **Survey Methodology** — Question wording, response scale design, sampling theory.
- **NPS/CSAT/CES** — Standard instruments for satisfaction and loyalty measurement.

## Formatting Guidelines
- Table for survey flow overview (question # + type + logic).
- Full question text in a numbered list below the flow.
- Separate section for distribution and analysis plans.
- Flag any branching logic clearly.

## Example
**Scenario:** Validating that "manual data consolidation" is the top pain point for mid-market analysts.

**Q3:** "In a typical week, approximately how many hours do you spend manually combining data from multiple sources?"
- Less than 1 hour
- 1–3 hours
- 4–6 hours
- 7–10 hours
- More than 10 hours
