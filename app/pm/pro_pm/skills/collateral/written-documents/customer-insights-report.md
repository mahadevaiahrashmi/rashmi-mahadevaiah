# Customer Insights Report

## Purpose
Documents research findings with methodology, participant demographics, key themes, insights with evidence, persona updates, and actionable recommendations. Transforms raw customer data into structured, evidence-based intelligence that drives product and strategy decisions.

## Auto-Trigger Patterns
- "Write a customer insights report from [research]"
- "Create a research findings document"
- "I need to synthesize our customer interview findings"
- "Help me document insights from user research"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Research data (interview transcripts, survey results, usage data), research questions, participant information
- **Optional:** Prior research for comparison, existing personas, product usage analytics, NPS/CSAT data
- **Reference files:** product-brief.md, customer-case-study.md, market-research-report.md

## Process
1. **Document methodology** — How was data collected? Sample size and composition? Limitations?
2. **Code and cluster** — Organize raw findings into themes. Count frequency and intensity of themes.
3. **Extract insights** — Move from observations ("customers said X") to insights ("customers need Y because Z").
4. **Support with evidence** — Every insight has 3+ supporting data points (quotes, behaviors, metrics).
5. **Update personas** — Revise or validate existing personas based on new data.
6. **Formulate recommendations** — What should we do differently based on these insights?
7. **Peer review** — Check for confirmation bias and alternative interpretations.

## Output Format
```
# Customer Insights: [Research Topic/Project Name]

## Executive Summary (0.5 page)
Top 5 insights. Key persona updates. Priority recommendations.

## 1. Methodology (0.5 page)
Approach, sample (n=), recruitment, duration, analysis method, limitations.

## 2. Participant Demographics (0.5 page)
Breakdown by role, company size, industry, tenure, usage level.

## 3. Key Themes (3-5 pages)
### Theme 1: [Name]
Insight statement. Frequency (X of Y participants).
Supporting evidence: [Quote 1], [Quote 2], [Behavioral observation].
Implications for product.

### Theme 2-5: [Same structure]

## 4. Persona Updates (1 page)
What changed. New pain points discovered. Validated assumptions.
Invalidated assumptions.

## 5. Recommendations (1 page)
Action | Evidence Strength | Impact | Effort | Priority

## Appendix
Interview guide. Raw theme coding. Additional quotes.
```

## Quality Standards
- Insights are distinct from observations—they explain the "why" behind behavior.
- Every insight is supported by 3+ data points from different participants.
- Limitations and biases are acknowledged transparently.
- **Anti-patterns:** Cherry-picking quotes, confirming existing beliefs, insights without evidence, no actionable recommendations.

## Audience
Product team, design, engineering leadership, and executives who make product decisions. They need confidence in the research rigor, clarity on what customers need, and specific actions to take. Different audiences will weight different sections—PMs want recommendations, designers want behaviors, execs want themes.

## Formatting Guidelines
- 5-10 pages plus appendix. Structured with clear theme sections.
- Quotes formatted as callout blocks with participant identifiers (anonymized).
- Use frequency counts: "7 of 12 participants mentioned..."
- Recommendations table with evidence strength rating.

## Example
**Theme 2: "Trust requires transparency, not just security"**
Insight: Customers distinguish between "being secure" (table stakes) and "feeling secure" (differentiator). They trust products that proactively show what's happening with their data, not just products that claim to be secure.
Evidence: 9 of 12 participants. "I don't want to just trust you—I want to see for myself" (P3, Enterprise). "Your competitor sends me a monthly security report. You don't" (P7, Mid-Market). Behavioral: participants spent 3x longer on settings pages that showed audit logs.
