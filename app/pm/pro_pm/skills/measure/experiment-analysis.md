# Experiment Analysis

## Purpose
Analyze A/B test results with statistical rigor — assessing significance, evaluating practical importance, examining segment effects, checking guardrails, and making a clear recommendation to ship, iterate, or kill. Transforms experiment data into a confident product decision.

## Auto-Trigger Patterns
- "analyze this experiment"
- "A/B test results for [experiment]"
- "did [experiment] win"
- "experiment results analysis"
- "should we ship [variant]"
- "interpret these test results"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Experiment results data | Yes | User prompt |
| Original experiment design | Recommended | Experiment design doc |
| Sample sizes per variant | Recommended | User prompt |
| Duration and dates | Optional | User prompt |
| Segment-level results | Optional | User prompt |

## Process
1. **Verify experiment integrity** — Check: was the sample size reached? Was there sample ratio mismatch (SRM)? Were there any external events during the test period?
2. **Assess statistical significance** — Calculate p-value and confidence interval. Is the result statistically significant at the pre-defined alpha level?
3. **Evaluate practical significance** — Is the effect size meaningful for the business? A statistically significant 0.1% lift may not be worth shipping complexity.
4. **Check guardrail metrics** — Did any guardrail metrics regress? If so, the win on the primary metric may come at an unacceptable cost.
5. **Analyze segment effects** — Does the treatment effect vary by segment? Look for: new vs. returning, plan tier, device, geography. Are there segments where it helps vs. hurts?
6. **Check for interaction effects** — Are there other experiments running simultaneously that could interfere? Is there novelty effect that might fade?
7. **Assess confidence level** — Synthesize: statistical significance + practical significance + guardrails + segment consistency = overall confidence.
8. **Make recommendation** — Ship (confident winner), iterate (promising but needs refinement), or kill (no effect or harmful). Justify with evidence.

## Output Format
```
## Experiment Analysis: [Experiment Name]
**Duration:** [Start] to [End]  |  **Status:** Complete

### Results Summary
| Metric | Control | Treatment | Δ (Absolute) | Δ (Relative) | p-value | Significant? |
|--------|---------|-----------|-------------|-------------|---------|-------------|
| Primary: [metric] | [Value] | [Value] | [+/-X] | [+/-X%] | [p] | Yes/No |
| Secondary: [metric] | [Value] | [Value] | [+/-X] | [+/-X%] | [p] | Yes/No |

### Experiment Integrity
- **Sample size:** Control: [N] / Treatment: [N]
- **Sample ratio mismatch:** [None detected / SRM detected — investigate]
- **Duration:** [X days — sufficient for weekly patterns?]
- **External events:** [Any confounding events during test period]

### Statistical Assessment
- **Primary metric p-value:** [X]
- **95% Confidence interval:** [[lower, upper]]
- **Effect size:** [X — is this practically meaningful?]
- **Power achieved:** [Was the experiment adequately powered?]

### Guardrail Check
| Guardrail | Control | Treatment | Δ | Status |
|-----------|---------|-----------|---|--------|
| [Revenue/user] | [Value] | [Value] | [Change] | ✅ Held / ❌ Regressed |
| [Error rate] | [Value] | [Value] | [Change] | ✅ Held / ❌ Regressed |

### Segment Analysis
| Segment | Control | Treatment | Δ | Notable? |
|---------|---------|-----------|---|---------|
| [New users] | [Value] | [Value] | [Change] | [Insight] |
| [Power users] | [Value] | [Value] | [Change] | [Insight] |

### Confidence Assessment
| Factor | Assessment | Impact on Decision |
|--------|-----------|-------------------|
| Statistical significance | [Met / Not met] | [Weight] |
| Practical significance | [Meaningful / Marginal] | [Weight] |
| Guardrails | [All held / Some regressed] | [Weight] |
| Segment consistency | [Consistent / Mixed] | [Weight] |

### Recommendation
**[SHIP / ITERATE / KILL]**
[2-3 sentence justification with key evidence]

### Learnings
- [What we learned regardless of the outcome]

### Follow-Up
- [Next experiment or action based on results]
```

## Quality Standards
- Experiment integrity is verified before interpreting results — SRM invalidates conclusions.
- Statistical and practical significance are both assessed — a tiny statistically significant effect may not matter.
- Guardrail checks are pass/fail — no rationalizing guardrail regressions away.
- Recommendation is clear and justified — not "it depends."

**Anti-patterns:** Declaring winners without reaching sample size, ignoring guardrail regressions, cherry-picking favorable segments, attributing correlation to causation, post-hoc hypothesis changes.

## Framework References
- **Frequentist hypothesis testing** — P-values, confidence intervals, statistical power.
- **Practical significance** — Business-meaningful effect sizes.
- **Sample ratio mismatch** — Experiment validity check.

## Formatting Guidelines
- Results summary table with significance flags (clear outcome).
- Guardrail table with pass/fail status (binary assessment).
- Confidence assessment table (multi-factor decision).
- Recommendation in bold with ship/iterate/kill label.

## Example
**Recommendation:** "SHIP — Treatment increased Day-7 activation from 45.2% to 49.8% (+4.6pp, p=0.003). Effect is consistent across all segments (new users: +5.1pp, returning: +3.9pp). All guardrails held — time-to-first-value actually decreased by 8%. The lift translates to approximately 230 additional activated users per month at current traffic."
