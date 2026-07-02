# Voice of Customer Report

## Purpose
Produce a comprehensive Voice of Customer (VoC) report that combines all customer signals — interviews, surveys, feedback channels, usage data, and sales intelligence — into a unified narrative. The VoC report is the single source of truth for what customers need, think, and feel, designed for executive and cross-functional consumption.

## Auto-Trigger Patterns
- "create a voice of customer report"
- "VoC report"
- "comprehensive customer insights report"
- "what do our customers need"
- "customer signal report"
- "executive customer insights summary"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Customer research findings | Yes | Prior research synthesis, interview debriefs |
| Feedback data | Recommended | Customer feedback synthesis output |
| Survey results | Optional | Prior survey outputs |
| Usage/behavioral data | Optional | User prompt |
| NPS/CSAT scores | Optional | User prompt |
| Customer segments | Optional | `context/products/*/customers.md` |

## Process
1. **Define scope and methodology** — State the time period, data sources, sample sizes, and any methodological notes. Be transparent about what's included and what's not.
2. **Write the executive summary** — Synthesize the 3-5 most important findings in 1 paragraph. Lead with the insight that should change behavior.
3. **Organize by theme** — Structure the body around 5-8 customer-centric themes (not product features). Each theme should tell a story: what we heard → what it means → what to do.
4. **Integrate quantitative and qualitative** — Pair metrics (NPS, usage data, survey percentages) with customer quotes and interview insights for each theme.
5. **Segment analysis** — Show how themes vary by customer segment, size, maturity, or use case. Highlight segments with divergent needs.
6. **Customer journey view** — Map findings to the customer journey stage where they're most relevant (acquisition, onboarding, adoption, expansion, retention).
7. **Trend analysis** — Compare current findings to previous VoC reports (if available). What's improving? What's getting worse? What's new?
8. **Recommendations** — Prioritize 5-7 actions. For each: what, why, expected impact, and urgency.
9. **Appendix** — Raw data summaries, methodology details, participant lists (anonymized), and data tables for reference.

## Output Format
```
## Voice of Customer Report: [Period]

### Executive Summary
[3-5 sentences: top findings and their strategic implications]

### Methodology
| Source | Sample | Period | Method |
|--------|--------|--------|--------|
| Interviews | N | ... | 1:1 sessions |
| NPS survey | N | ... | In-app |
| Support tickets | N | ... | Categorization |

### Key Metrics
| Metric | Current | Previous | Trend |
|--------|---------|----------|-------|
| NPS | ... | ... | ↑/↓ |
| CSAT | ... | ... | ... |

### Findings by Theme

#### Theme 1: [Name]
**What we heard:** [Summary of the finding]
**Quantitative signal:** [Metric or data point]
**Qualitative signal:**
> "[Customer quote]" — [Segment]
**Segment variation:** [How this differs by segment]
**Journey stage:** [Where in the journey this matters]
**Recommendation:** [What to do about it]

### Segment Analysis
| Theme | Segment A | Segment B | Segment C |
|-------|----------|----------|----------|
| ... | ... | ... | ... |

### Customer Journey Map
| Stage | Key Findings | Priority |
|-------|-------------|----------|
| Onboarding | ... | High |
| Adoption | ... | Medium |

### Trend Analysis
| Theme | vs. Last Period | Direction |
|-------|----------------|-----------|
| ... | ... | Improving / Worsening / New |

### Prioritized Recommendations
| # | Action | Theme | Impact | Urgency |
|---|--------|-------|--------|---------|
| 1 | ... | ... | High | Now |

### Appendix
- Methodology details
- Anonymized participant list
- Raw data tables
```

## Quality Standards
- Report integrates at least 3 different data sources — no single-channel VoC reports.
- Every finding pairs quantitative and qualitative evidence.
- Segment differences are surfaced — the "average customer" rarely exists.
- Trends over time are included (even if it's the first report, note the baseline).
- Recommendations are specific, prioritized, and tied to evidence.

**Anti-patterns:** Feature request lists disguised as VoC, ignoring positive signals, overwhelming executives with data instead of insights, missing segment nuance, one-time report without trend tracking.

## Framework References
- **Voice of Customer Methodology** — Multi-channel customer signal integration.
- **Customer Journey Mapping** — Organize insights by lifecycle stage.
- **Kano Model** — Categorize needs as basic, performance, or delight.

## Formatting Guidelines
- Executive summary on page 1 — must stand alone.
- Consistent theme sections with parallel structure.
- Use trend arrows (↑ ↓ →) for quick visual scanning.
- Segment analysis in table format for cross-comparison.
- Appendix for detail; main body for insight.

## Example
**Scenario:** Quarterly VoC report for a B2B collaboration platform.

**Executive summary excerpt:** "This quarter's VoC reveals a widening gap between what enterprise customers need (governance and compliance controls) and our current capabilities. NPS among enterprise accounts dropped 12 points to +18, driven primarily by the 'admin control' theme. Meanwhile, mid-market NPS rose 8 points to +52, validating our recent onboarding improvements. The #1 recommendation: fast-track enterprise admin controls before renewal season in Q4."
