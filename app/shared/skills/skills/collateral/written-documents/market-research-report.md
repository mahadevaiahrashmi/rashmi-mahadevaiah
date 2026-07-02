# Market Research Report

## Purpose
Produces a comprehensive 10-20 page market research document covering methodology, market sizing, segmentation, trends, competitive landscape, customer insights, whitespace opportunities, and actionable recommendations. Serves as the evidence base for strategic and product decisions.

## Auto-Trigger Patterns
- "Write a market research report for [market/segment]"
- "Create a comprehensive market analysis"
- "I need market sizing and segmentation for [area]"
- "Help me build a data-backed market assessment"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Market or segment to analyze, research questions, available data sources
- **Optional:** Existing research, customer interview transcripts, analyst reports, competitive data, internal usage data
- **Reference files:** product-brief.md, competitive-landscape-report.md, customer-insights-report.md

## Process
1. **Define scope and methodology** — What questions are we answering? What data sources? What's in and out of scope?
2. **Size the market** — TAM/SAM/SOM using bottom-up and top-down approaches. Cross-validate.
3. **Segment the market** — Identify meaningful segments by size, needs, buying behavior, and accessibility.
4. **Analyze trends** — Macro trends, technology shifts, regulatory changes, buyer behavior evolution.
5. **Map the competitive landscape** — Who serves this market today, how well, and where are the gaps.
6. **Synthesize customer insights** — What are buyers saying? Unmet needs, decision criteria, willingness to pay.
7. **Identify opportunities** — Where do market gaps align with our capabilities?
8. **Formulate recommendations** — Specific, actionable next steps tied to findings.

## Output Format
```
# Market Research: [Market/Segment Name]

## Executive Summary (1 page)
Key findings. Market size. Top opportunities. Recommended actions.

## 1. Methodology (0.5 page)
Research approach, data sources, sample sizes, limitations.

## 2. Market Overview & Sizing (2-3 pages)
TAM/SAM/SOM with methodology. Market growth rate.
Geographic and vertical breakdowns.

## 3. Market Segmentation (2-3 pages)
Segment profiles: size, needs, buying behavior, growth rate.
Segment attractiveness matrix.

## 4. Trends & Forces (1-2 pages)
Macro trends. Technology shifts. Regulatory. Buyer behavior changes.

## 5. Competitive Landscape (2-3 pages)
Market map. Key players. Positioning. Pricing. Gaps.

## 6. Customer Insights (2-3 pages)
Key themes from research. Decision criteria. Unmet needs.
Willingness to pay. Switching triggers.

## 7. Opportunities (1-2 pages)
Whitespace opportunities. Alignment with our capabilities.
Prioritization framework.

## 8. Recommendations (1 page)
Specific actions. Prioritized. With expected impact and timing.

## Appendix
Data tables. Interview summaries. Source list.
```

## Quality Standards
- Market sizing uses multiple methodologies and cross-validates; sources are cited.
- Segments are actionable (you can target them), not just descriptive.
- Insights distinguish between "what customers say" and "what they do."
- **Anti-patterns:** Single-source sizing, segments that aren't targetable, trend analysis without implications, recommendations disconnected from findings.

## Audience
Product leadership, strategy teams, and executives making market entry, expansion, or investment decisions. They need confidence in the data quality, clarity on implications, and specific recommended actions.

## Formatting Guidelines
- 10-20 pages plus appendix. Mix of prose, charts, and tables.
- Executive summary is standalone. Each section has a key takeaway callout.
- Cite all data sources inline. Include a methodology section that enables challenge.
- Use visualizations for market maps, sizing, and segmentation.

## Example
**Section 3 excerpt:** "Segment B (Mid-Market Financial Services, $2.1B) is the most attractive near-term opportunity. These firms have acute compliance pain (87% cite it as top-3 challenge), budget allocated for solutions ($150K-500K annual spend), and shorter sales cycles (avg 45 days) than Enterprise. Current solutions underserve this segment—incumbent tools are priced for enterprise while point solutions lack the breadth these buyers need."
