# NPS/CSAT Analysis

## Purpose
Analyze Net Promoter Score and Customer Satisfaction data with depth — examining score trends, promoter/detractor breakdown, theme analysis from verbatim responses, segment comparisons, correlation with product usage, and developing improvement recommendations. Extracts actionable insights from satisfaction data rather than just tracking a number.

## Auto-Trigger Patterns
- "NPS analysis"
- "CSAT review for [product/feature]"
- "customer satisfaction trends"
- "why is NPS [up/down]"
- "analyze NPS verbatims"
- "promoter/detractor breakdown"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| NPS/CSAT scores | Yes | User prompt |
| Verbatim responses | Recommended | User prompt |
| Segment data | Recommended | User prompt |
| Time period | Optional | User prompt |
| Product usage data | Optional | User prompt |

## Process
1. **Calculate headline metrics** — NPS score (% Promoters − % Detractors), CSAT score (% satisfied), response rate. Track against historical and benchmarks.
2. **Trend analysis** — Score trajectory over time. Identify inflection points and correlate with product changes, incidents, or market events.
3. **Segment breakdown** — NPS/CSAT by: plan tier, company size, tenure, geography, acquisition channel, primary use case. Where are you beloved vs. at risk?
4. **Promoter/passive/detractor analysis** — What distinguishes each group? Usage patterns, feature adoption, support history, tenure.
5. **Verbatim theme analysis** — Categorize open-text responses by theme. Quantify: how often each theme appears, sentiment by theme, actionability.
6. **Correlation with usage** — Do happier customers use the product differently? Which features correlate with satisfaction? Which pain points correlate with detractor scores?
7. **Competitive context** — How does our score compare to industry benchmarks and known competitor scores?
8. **Improvement recommendations** — Based on detractor themes and satisfaction drivers: what specific changes would improve the score?

## Output Format
```
## NPS/CSAT Analysis: [Product]
**Period:** [Date range]  |  **Responses:** [N] (Response rate: [X%])

### Headline Metrics
| Metric | Current | Prior Period | Trend | Benchmark |
|--------|---------|-------------|-------|-----------|
| NPS | [Score] | [Prior] | ↑/↓/→ | [Industry: X] |
| CSAT | [X%] | [Prior] | ↑/↓/→ | [Industry: X%] |
| Response rate | [X%] | [Prior] | ↑/↓/→ | [Target: Y%] |

### NPS Distribution
| Category | % | Count | vs. Prior |
|----------|---|-------|-----------|
| Promoters (9-10) | [X%] | [N] | [+/-] |
| Passives (7-8) | [X%] | [N] | [+/-] |
| Detractors (0-6) | [X%] | [N] | [+/-] |

### Segment Analysis
| Segment | NPS | Promoter % | Detractor % | Notable |
|---------|-----|-----------|-------------|---------|
| [Enterprise] | [Score] | [X%] | [Y%] | [Insight] |
| [SMB] | [Score] | [X%] | [Y%] | [Insight] |

### Verbatim Theme Analysis
#### Promoter Themes (Why They Love Us)
| Theme | Mentions | Example Quote |
|-------|---------|---------------|
| [Ease of use] | [N (X%)] | "[Quote]" |

#### Detractor Themes (Why They're Unhappy)
| Theme | Mentions | Example Quote | Addressable? |
|-------|---------|---------------|-------------|
| [Missing feature X] | [N (X%)] | "[Quote]" | Yes — roadmap |
| [Performance] | [N (X%)] | "[Quote]" | Yes — engineering |

### Usage Correlation
| Factor | Promoter Avg | Detractor Avg | Insight |
|--------|-------------|-------------|---------|
| [DAU/MAU ratio] | [X] | [Y] | [Engaged users happier] |
| [Features used] | [X] | [Y] | [Breadth drives satisfaction] |
| [Support tickets] | [X] | [Y] | [High support = low NPS] |

### Improvement Recommendations
| Priority | Action | Target Theme | Expected NPS Impact |
|----------|--------|-------------|-------------------|
| 1 | [Specific improvement] | [Detractor theme] | [+X points estimate] |
| 2 | [Specific improvement] | [Detractor theme] | [+X points] |

### Next Steps
- [Survey improvements for better data]
- [Follow-up analysis to dig deeper]
```

## Quality Standards
- Theme analysis is quantified — not just "customers mentioned performance" but "23% of detractors cite performance, up from 15% last quarter."
- Segments are compared to identify where to focus improvement efforts.
- Usage correlation reveals actionable product levers (increase feature adoption → higher NPS).
- Recommendations are specific and tied to detractor themes, not generic improvements.

**Anti-patterns:** Tracking NPS without reading verbatims, celebrating promoters without understanding detractors, no segment analysis, survey fatigue from over-surveying.

## Framework References
- **Net Promoter System** — NPS calculation and closed-loop follow-up methodology.
- **Voice of Customer (VoC)** — Systematic analysis of customer feedback.

## Formatting Guidelines
- NPS distribution as category table (instant composition view).
- Theme analysis with mention counts and quotes (quantified qualitative).
- Usage correlation table (connecting satisfaction to behavior).
- Recommendations tied to specific themes and expected impact.

## Example
**Theme insight:** "The #1 detractor theme is 'export functionality' (mentioned by 31% of detractors). Drilling deeper: users aren't unhappy that export exists — they're frustrated that exported reports lose formatting and require manual cleanup. This is a quality issue, not a feature gap. Fix: improve export fidelity for PDF and CSV formats. Expected impact: converting even 30% of these detractors to passives would improve NPS by 6 points."
