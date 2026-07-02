# Metrics Review

## Purpose
Analyze current product metrics with depth — performing trend analysis, anomaly detection, cohort comparison, segment breakdown, and distinguishing leading vs. lagging indicators. Produces a metrics narrative that connects numbers to insights and recommends actions, not just a data dump.

## Auto-Trigger Patterns
- "review our metrics"
- "what do our numbers say"
- "metrics analysis for [product/feature]"
- "analyze [metric name] trends"
- "why is [metric] up/down"
- "weekly/monthly metrics review"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Metrics data / dashboard | Yes | User prompt |
| Time period | Recommended | User prompt |
| Comparison baseline | Optional | User prompt |
| Segment definitions | Optional | User prompt |
| Product context | Optional | `context/products/` |

## Process
1. **Assess top-line metrics** — Start with the North Star and key business metrics. What moved? What didn't? Set the overall context.
2. **Trend analysis** — Look beyond the snapshot: week-over-week, month-over-month, quarter-over-quarter. Is the trend improving, declining, or flat? At what rate?
3. **Anomaly detection** — Identify unusual data points. Are spikes/dips real (product changes, seasonality) or noise (data issues, one-off events)?
4. **Cohort comparison** — How do different user cohorts (by signup date, plan, segment) compare? Are newer cohorts performing better or worse?
5. **Segment breakdown** — Break metrics by meaningful segments: plan tier, geography, company size, acquisition channel. Where are you winning vs. losing?
6. **Leading vs. lagging** — Distinguish leading indicators (predict future) from lagging (confirm past). Are leading indicators signaling upcoming changes?
7. **Root cause hypotheses** — For significant movements: what caused it? Product change, marketing campaign, seasonality, competitive pressure, data issue?
8. **Recommended actions** — Based on the analysis: what should the team do? Double down, investigate, experiment, fix.

## Output Format
```
## Metrics Review: [Period]

### Executive Summary
[3-4 sentences: overall health, key movements, one big insight]

### Top-Line Metrics
| Metric | Current | Prior Period | Change | Trend |
|--------|---------|-------------|--------|-------|
| [North Star] | [Value] | [Value] | [+/-X%] | ↑/↓/→ |
| [Revenue metric] | [Value] | [Value] | [+/-X%] | ↑/↓/→ |
| [Engagement metric] | [Value] | [Value] | [+/-X%] | ↑/↓/→ |

### Trend Analysis
[Key trends with context — what's improving, declining, or stagnating]

### Anomalies Detected
| Metric | Anomaly | Likely Cause | Action Needed |
|--------|---------|-------------|---------------|
| [Metric] | [Spike/dip on date] | [Hypothesis] | [Investigate / No action] |

### Segment Breakdown
| Segment | Metric A | Metric B | Notable |
|---------|---------|---------|---------|
| [Segment 1] | [Value] | [Value] | [Insight] |
| [Segment 2] | [Value] | [Value] | [Insight] |

### Leading Indicators
| Indicator | Current | Signal | Implication |
|-----------|---------|--------|-------------|
| [Leading metric] | [Value] | 🟢/🟡/🔴 | [What it predicts] |

### Insights & Recommendations
1. **[Insight]** → Recommended action: [Specific action]
2. **[Insight]** → Recommended action: [Specific action]

### Follow-Up Analysis Needed
- [Deep-dive topic for next review]
```

## Quality Standards
- Analysis explains "why," not just "what" — numbers without context are noise.
- Anomalies are investigated and explained, not just flagged.
- Recommendations are specific and actionable — "run an experiment on X" not "look into it."
- Leading indicators are distinguished from lagging — forward-looking insight is the goal.

**Anti-patterns:** Reporting numbers without interpretation, cherry-picking favorable metrics, ignoring negative trends, no recommendations, treating correlation as causation.

## Framework References
- **North Star metric** — Anchoring analysis to the most important metric.
- **Leading/lagging indicators** — Forward vs. backward-looking metric classification.
- **Cohort analysis** — Comparing user groups over time.

## Formatting Guidelines
- Top-line table with trend arrows (instant health check).
- Anomaly table with cause and action (structured response).
- Segment breakdown in table (comparison view).
- Recommendations numbered with specific actions.

## Example
**Insight:** "Activation rate dropped 8% this month but only in the self-serve segment. Enterprise activation is up 12%. Root cause: the new onboarding flow A/B test is underperforming in variant B (37% activation vs. 52% in control). Recommendation: kill variant B immediately and investigate why — the simplified flow may have removed a critical 'aha moment' step."
