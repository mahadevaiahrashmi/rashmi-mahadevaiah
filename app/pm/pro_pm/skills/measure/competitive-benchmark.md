# Competitive Benchmark

## Purpose
Benchmark product and business metrics against industry standards and competitors — identifying relevant benchmarks, gathering comparable data, analyzing gaps, and recommending actions to close competitive disadvantages. Provides objective context for whether metrics are strong, average, or concerning.

## Auto-Trigger Patterns
- "benchmark our metrics against industry"
- "how do we compare to competitors"
- "competitive benchmarking"
- "industry benchmarks for [metric]"
- "are our metrics good"
- "where do we stand vs. [competitor/industry]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Metrics to benchmark | Yes | User prompt |
| Current metric values | Yes | User prompt |
| Industry / category | Recommended | User prompt |
| Competitor data (if available) | Optional | User prompt |
| Company stage / size | Optional | User prompt |

## Process
1. **Identify relevant benchmarks** — Select benchmarks appropriate to your stage, category, and business model. A Series A PLG company shouldn't benchmark against enterprise incumbents.
2. **Gather benchmark data** — Sources: industry reports (OpenView, Bessemer, KeyBanc), public company data, peer networks, analyst reports. Note data freshness and methodology.
3. **Normalize for comparison** — Ensure apples-to-apples: same definitions, same time periods, same calculation methods. Document any adjustments.
4. **Compare and analyze gaps** — Where are you above, at, or below benchmark? How significant are the gaps? Are gaps narrowing or widening?
5. **Contextualize differences** — Not all gaps are problems. Some reflect strategic choices (e.g., lower NRR because you serve SMB, which has higher structural churn).
6. **Prioritize gaps** — Which gaps matter most for your strategy? Which are actionable? Which would have the biggest impact if closed?
7. **Recommend actions** — For priority gaps: what specifically would close them? Reference internal improvement opportunities.
8. **Set targets** — Based on benchmarks and current trajectory, set realistic improvement targets with timeframes.

## Output Format
```
## Competitive Benchmark: [Product/Company]
**Date:** [date]  |  **Category:** [SaaS / PLG / Enterprise / etc.]
**Stage:** [Seed / Series A / B / Growth]

### Benchmark Sources
| Source | Coverage | Date | Reliability |
|--------|---------|------|------------|
| [Report name] | [What metrics] | [Year] | High/Med/Low |

### Benchmark Comparison
| Metric | Our Value | Median | Top Quartile | Our Percentile | Gap |
|--------|----------|--------|-------------|---------------|-----|
| [NRR] | [X%] | [Y%] | [Z%] | [Xth] | [+/-Ypp] |
| [Logo retention] | [X%] | [Y%] | [Z%] | [Xth] | [+/-Ypp] |
| [Gross margin] | [X%] | [Y%] | [Z%] | [Xth] | [+/-Ypp] |
| [CAC payback] | [X mo] | [Y mo] | [Z mo] | [Xth] | [+/-Y mo] |
| [Growth rate] | [X%] | [Y%] | [Z%] | [Xth] | [+/-Ypp] |

### Gap Analysis
| Metric | Our vs. Median | Significance | Root Cause | Actionable? |
|--------|---------------|-------------|-----------|-------------|
| [NRR below median] | [-Xpp] | High | [Expansion weakness] | Yes |
| [Margin above median] | [+Xpp] | Positive | [Efficient ops] | N/A — strength |

### Competitive Comparison (Where Available)
| Metric | Us | Competitor A | Competitor B | Industry Avg |
|--------|-----|-------------|-------------|-------------|
| [Metric] | [Value] | [Value] | [Value] | [Value] |

### Context & Caveats
- [Why certain gaps exist by strategic choice]
- [Benchmark limitations / methodology differences]
- [Stage-specific context that affects comparison]

### Priority Gaps & Recommendations
| Priority | Gap | Target | Action | Timeline |
|----------|-----|--------|--------|----------|
| 1 | [NRR gap] | [Move from X% to Y%] | [Improve expansion playbook] | [2 quarters] |
| 2 | [CAC gap] | [Reduce from X to Y mo] | [Optimize paid channels] | [1 quarter] |

### Target Setting
| Metric | Current | 6-Month Target | 12-Month Target | Benchmark Target |
|--------|---------|---------------|----------------|-----------------|
| [Metric] | [Value] | [Target] | [Target] | [Median / Top Q] |
```

## Quality Standards
- Benchmarks are stage- and category-appropriate — don't compare a startup to Salesforce.
- Gaps are contextualized — some reflect strategic choices, not problems.
- Benchmark sources are cited with freshness and reliability assessed.
- Recommendations focus on the highest-impact, most actionable gaps.

**Anti-patterns:** Cherry-picking favorable benchmarks, comparing across different business models, using outdated data, treating all gaps as problems.

## Framework References
- **SaaS benchmarking** — Standard metrics and percentile targets by stage.
- **Competitive analysis** — Market positioning based on performance metrics.

## Formatting Guidelines
- Benchmark comparison table with percentile ranking (where do we stand).
- Gap analysis with significance and actionability (prioritized focus).
- Target setting with time-bound milestones.
- Sources cited with reliability assessment.

## Example
**Contextualized gap:** "Our NRR (108%) is 7pp below the median for our stage (115%). However, this is partly structural — 60% of our customer base is SMB (<$5K ACV) which has industry NRR of 100-105%. When we segment by enterprise accounts only, our NRR is 125% (above median). The gap is addressable: improving SMB expansion by implementing usage-based upsell triggers could add 3-5pp to blended NRR."
