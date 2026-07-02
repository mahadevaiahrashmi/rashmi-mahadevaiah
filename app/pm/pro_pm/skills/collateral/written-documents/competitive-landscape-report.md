# Competitive Landscape Report

## Purpose
Produces a comprehensive competitive analysis covering market mapping, competitor profiles, feature comparison, positioning, pricing intelligence, GTM strategies, and strategic implications. Serves as the competitive intelligence foundation for strategy, sales, and product decisions.

## Auto-Trigger Patterns
- "Write a competitive landscape report for [market]"
- "Create a competitive analysis document"
- "I need a comprehensive competitor assessment"
- "Help me map and analyze our competitive environment"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Market/category definition, key competitors (4-8), our product positioning
- **Optional:** Win/loss data, analyst reports, competitor product access, pricing intelligence, customer feedback on competitors
- **Reference files:** product-brief.md, market-research-report.md, competitive-battlecard.md

## Process
1. **Define the competitive frame** — Who competes for the same budget and decision? Include direct, indirect, and status quo alternatives.
2. **Profile each competitor** — Company background, product capabilities, strengths, weaknesses, recent moves.
3. **Build comparison matrices** — Feature-by-feature, pricing, segment focus, and GTM approach.
4. **Analyze positioning** — How each competitor positions themselves. Where they're winning and why.
5. **Identify patterns** — Market convergence, differentiation gaps, pricing trends, acquisition signals.
6. **Draw strategic implications** — What this means for our strategy, product, and GTM.

## Output Format
```
# Competitive Landscape: [Market/Category]

## Executive Summary (0.5 page)
Market structure. Our position. Key threats and opportunities.

## 1. Market Map (1-2 pages)
Visual map: quadrant or landscape view.
Category taxonomy. Direct vs indirect competitors.

## 2. Competitor Profiles (3-5 pages)
Per competitor:
- Company overview (size, funding, focus)
- Product capabilities (strengths, gaps)
- Target segments and ideal customer profile
- Pricing model and estimated pricing
- GTM strategy and recent moves
- Threat level assessment

## 3. Feature Comparison (1-2 pages)
Detailed comparison matrix across key capabilities.
Our advantages and gaps clearly marked.

## 4. Positioning Analysis (1 page)
How each competitor positions. Messaging themes.
Positioning opportunities and whitespace for us.

## 5. Pricing Intelligence (1 page)
Pricing models. Estimated ranges. Packaging strategies.
Our pricing position relative to market.

## 6. Strategic Implications (1-2 pages)
Threats to address. Opportunities to pursue.
Recommended competitive response.
Product gaps to close. Differentiation to amplify.
```

## Quality Standards
- Analysis is evidence-based (product trials, customer feedback, public data), not speculation.
- Competitor assessments are fair—acknowledge their strengths honestly.
- Strategic implications are specific and actionable, not generic "we need to differentiate."
- **Anti-patterns:** Dismissing competitors, outdated information, feature comparison without context, no strategic implications.

## Audience
Product leadership, strategy teams, sales leadership, and marketing. Product needs gap analysis and differentiation direction. Sales needs talk tracks and positioning. Marketing needs messaging angles. Executives need strategic threat assessment.

## Formatting Guidelines
- 8-15 pages plus appendix. Mix of visual maps, tables, and analysis.
- Update quarterly at minimum. Date-stamp all competitive intelligence.
- Use consistent rating scales across competitors.
- Include a "What to Watch" section for emerging threats.

## Example
**Competitor Profile excerpt:** "**Competitor X** ($45M ARR, 200 employees, Series C). Strengths: strongest enterprise integration suite, SOC2 + HIPAA certified, established brand in financial services. Weaknesses: aging UI (NPS 32 vs our 58), no API-first architecture (limits developer adoption), slow release cadence (quarterly vs our bi-weekly). Recent moves: acquired analytics startup; hired new CMO from Salesforce. Threat level: **High** — well-positioned to move upmarket but vulnerable in mid-market and developer segments."
