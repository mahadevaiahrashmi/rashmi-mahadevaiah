# Data Question

## Purpose
Answer a specific data question with analytical rigor — clarifying the question, identifying data sources, performing the analysis, presenting findings clearly, noting limitations and confidence levels, and suggesting follow-up analysis. Turns vague "what does the data say about X?" into a structured, defensible answer.

## Auto-Trigger Patterns
- "what does our data say about [topic]"
- "how many users [do X]"
- "analyze [data question]"
- "pull data on [metric/behavior]"
- "data analysis for [question]"
- "what percentage of [users/events] [criteria]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Data question | Yes | User prompt |
| Available data sources | Recommended | User prompt |
| Time period | Optional | User prompt |
| Segment definitions | Optional | User prompt |
| Context for the question | Optional | User prompt |

## Process
1. **Clarify the question** — Restate the question precisely. What exactly do we need to know? What decision will the answer inform? Ambiguous questions get ambiguous answers.
2. **Identify data sources** — Where does the relevant data live? What tables, events, APIs, or tools contain the answer? Assess data quality and completeness.
3. **Define methodology** — How will you analyze the data? What calculations, aggregations, or statistical methods are needed? What filters and time windows apply?
4. **Perform the analysis** — Execute the analysis. Show intermediate steps for complex analyses to ensure transparency.
5. **Present findings** — Lead with the answer, then show the supporting evidence. Use visualizations where they add clarity.
6. **Assess confidence** — How reliable is this answer? Data quality issues, sample size concerns, methodology limitations, confounding factors.
7. **Note caveats** — What could make this answer wrong? Data gaps, survivorship bias, correlation vs. causation, time-period sensitivity.
8. **Suggest follow-ups** — What additional analysis would strengthen this answer or explore related questions?

## Output Format
```
## Data Analysis: [Question]
**Date:** [date]  |  **Analyst:** [name]

### Question (Clarified)
[Precise restatement of the question]
**Decision this informs:** [What will be decided based on this answer]

### Answer (Bottom Line)
[1-2 sentence clear answer — lead with the headline]

### Methodology
- **Data source(s):** [Where the data comes from]
- **Time period:** [Date range analyzed]
- **Filters:** [What's included/excluded]
- **Calculation:** [How the metric is computed]

### Findings
| Dimension | Value | Context |
|-----------|-------|---------|
| [Overall] | [Answer] | [Benchmark/comparison] |
| [By segment A] | [Value] | [Notable?] |
| [By segment B] | [Value] | [Notable?] |

### Supporting Evidence
[Charts, tables, or detailed data supporting the answer]

### Confidence & Limitations
| Factor | Assessment | Impact on Answer |
|--------|-----------|-----------------|
| Data quality | [High/Med/Low] | [How it could affect results] |
| Sample size | [N observations] | [Sufficient / marginal] |
| Confounders | [Identified factors] | [Could bias results by X] |
| Time sensitivity | [Stable / volatile] | [Answer may change if period shifts] |

### Caveats
- [What could make this answer wrong or misleading]

### Suggested Follow-Up
1. [Additional analysis that would deepen understanding]
```

## Quality Standards
- Question is clarified before analysis begins — solving the wrong question is worse than no answer.
- Answer leads with the bottom line — don't make the reader hunt for it.
- Confidence level is honestly assessed — overconfident answers are dangerous.
- Methodology is transparent enough for someone to reproduce the analysis.

**Anti-patterns:** Answering a vague question vaguely, burying the answer in methodology, presenting data without interpretation, hiding limitations, overconfidence in noisy data.

## Framework References
- **BLUF (Bottom Line Up Front)** — Leading with the answer, not the process.
- **Data quality assessment** — Evaluating reliability of data sources.

## Formatting Guidelines
- Answer in bold at the top (BLUF principle).
- Methodology section for reproducibility.
- Findings table with context (benchmarks, comparisons).
- Confidence table for transparency.

## Example
**Answer:** "23% of users who complete onboarding never return after Day 1. This is concentrated in the 'solo user' segment (31% never return) vs. team users (12%). The data is high confidence — based on 14,000 users over 90 days with consistent event tracking. Caveat: we can't distinguish 'never return' from 'return but don't trigger tracked events' for users who only use the API."
