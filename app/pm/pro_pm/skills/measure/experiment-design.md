# Experiment Design

## Purpose
Design rigorous A/B tests and experiments — formulating clear hypotheses, defining variants, selecting primary and guardrail metrics, calculating sample size, estimating duration, planning segmentation, and specifying the analysis methodology. Ensures experiments produce statistically valid, actionable results.

## Auto-Trigger Patterns
- "design an A/B test for [feature]"
- "experiment plan for [change]"
- "how to test [hypothesis]"
- "A/B test setup for [feature]"
- "experiment design for [metric improvement]"
- "test whether [change] improves [metric]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Change / feature to test | Yes | User prompt |
| Target metric | Recommended | User prompt |
| Baseline metrics | Recommended | User prompt |
| Traffic / user volume | Recommended | User prompt |
| Business context | Optional | `context/products/` |

## Process
1. **Formulate hypothesis** — Clear H0 (null) and H1 (alternative). The hypothesis should be specific and falsifiable: "[Change] will [increase/decrease] [metric] by [amount] for [segment]."
2. **Define variants** — Control (current experience) and treatment(s). Describe exactly what differs. Keep changes minimal to isolate the effect.
3. **Select metrics** — Primary metric (the one that decides), secondary metrics (additional insight), guardrail metrics (must not regress — revenue, errors, engagement).
4. **Calculate sample size** — Based on: baseline conversion rate, minimum detectable effect (MDE), statistical power (80%+), significance level (5%). Use standard calculators.
5. **Estimate duration** — Sample size ÷ daily eligible traffic = minimum days. Add buffer for weekly patterns. Plan for full business cycles.
6. **Plan segmentation** — Will you analyze by plan tier, geography, device, new vs. returning? Define segments upfront to avoid p-hacking.
7. **Define analysis plan** — Statistical test (z-test, t-test, chi-square), one-tailed vs. two-tailed, sequential vs. fixed-horizon, correction for multiple comparisons.
8. **Set decision criteria** — What constitutes: ship (clear winner), iterate (promising but inconclusive), kill (no effect or negative).

## Output Format
```
## Experiment Design: [Experiment Name]
**Owner:** [name]  |  **Status:** Draft / Running / Complete

### Hypothesis
- **H0 (Null):** [Change] has no effect on [metric].
- **H1 (Alternative):** [Change] will [increase/decrease] [metric] by [MDE].
- **Rationale:** [Why we believe this — data, research, intuition]

### Variants
| Variant | Description | Traffic % |
|---------|------------|-----------|
| Control | [Current experience] | 50% |
| Treatment | [Changed experience — specific details] | 50% |

### Metrics
| Type | Metric | Baseline | MDE | Direction |
|------|--------|----------|-----|-----------|
| Primary | [Conversion rate] | [X%] | [+Y%] | Increase |
| Secondary | [Engagement metric] | [X] | — | Monitor |
| Guardrail | [Revenue per user] | [$X] | [-Y% max] | Must not decrease |

### Sample Size & Duration
- **Significance level (α):** 0.05
- **Statistical power (1-β):** 0.80
- **Required sample per variant:** [N]
- **Daily eligible traffic:** [N]
- **Estimated duration:** [X days / weeks]
- **Start date:** [date]  |  **End date:** [date]

### Segmentation Plan
| Segment | Definition | Expected N | Analysis |
|---------|-----------|-----------|----------|
| [All users] | Default | [N] | Primary |
| [New users] | First 30 days | [N] | Sub-group |
| [Power users] | >X actions/week | [N] | Sub-group |

### Analysis Plan
- **Statistical test:** [Z-test for proportions / t-test / etc.]
- **Tails:** [One / Two-tailed]
- **Multiple comparisons:** [Bonferroni / none if single test]
- **Peeking policy:** [Fixed horizon / sequential with alpha spending]

### Decision Criteria
| Outcome | Condition | Action |
|---------|----------|--------|
| Ship | Primary metric ↑ [MDE], guardrails hold | Ship to 100% |
| Iterate | Directionally positive, not significant | Extend or refine |
| Kill | No effect or negative | Revert, document learnings |
```

## Quality Standards
- Hypothesis is specific and falsifiable — not "we think this will be better."
- Sample size is calculated, not guessed — underpowered experiments waste time.
- Guardrail metrics are defined upfront — winning on primary while destroying revenue is not winning.
- Peeking policy is explicit — prevents premature decisions based on noisy data.

**Anti-patterns:** No null hypothesis, insufficient sample size, peeking at results daily, no guardrail metrics, post-hoc segmentation (p-hacking), running experiments on metrics that don't matter.

## Framework References
- **Frequentist hypothesis testing** — Standard A/B testing statistical framework.
- **Minimum detectable effect** — Smallest meaningful change worth detecting.
- **Guardrail metrics** — Metrics that must not regress during experimentation.

## Formatting Guidelines
- Hypothesis in bold formal notation (clear testable statement).
- Metrics table with baseline and MDE (experiment parameters).
- Sample size calculation shown (transparency).
- Decision criteria as explicit conditions (pre-committed rules).

## Example
**Hypothesis:** "Adding a progress indicator to the onboarding flow (Treatment) will increase Day-7 activation rate from 45% to 50% (H1, MDE = +5 percentage points). Required sample: 1,570 users per variant. At 200 new users/day with 50/50 split, experiment runs for 16 days. Guardrail: time-to-first-value must not increase by more than 10%."
