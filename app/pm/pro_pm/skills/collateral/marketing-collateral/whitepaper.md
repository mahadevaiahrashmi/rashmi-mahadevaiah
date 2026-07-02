# Whitepaper

## Purpose
Creates an 8-15 page authoritative document—either thought leadership or technical deep-dive—with executive summary, problem analysis, methodology, findings, recommendations, and company positioning. Educational in tone, designed to establish credibility and generate leads.

## Auto-Trigger Patterns
- "Write a whitepaper on [topic]"
- "Create a thought leadership document"
- "I need a technical whitepaper for [subject]"
- "Help me write an authoritative paper on [topic]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Topic and thesis, target audience, key arguments or findings, supporting data
- **Optional:** Research data, expert interviews, industry reports, product tie-in points, competitive context
- **Reference files:** product-brief.md, market-research-report.md, blog-post-thought-leadership.md

## Process
1. **Define the thesis** — What argument are you making? What will the reader believe after reading?
2. **Research thoroughly** — Gather data from credible sources: analyst reports, academic research, customer data.
3. **Structure the argument** — Build logically: context → problem → analysis → approach → evidence → recommendations.
4. **Write educationally** — The reader should learn something valuable even if they never buy your product.
5. **Integrate product naturally** — Position your product as an example of the approach, not the focus.
6. **Edit for authority** — Remove marketing language. Add citations. Ensure tone is expert, not salesy.

## Output Format
```
# [Title: Declarative or Question-Based]

## Executive Summary (1 page)
[Thesis. Key findings. Core recommendations. Who should read this.]

## 1. Introduction (1 page)
[Why this topic matters now. What's at stake. Scope of the paper.]

## 2. The Problem (2-3 pages)
[Deep analysis of the challenge. Data-backed. Multiple dimensions.
Industry trends exacerbating the problem.]

## 3. Current Approaches & Their Limitations (1-2 pages)
[How organizations address this today. Why those approaches fall short.]

## 4. A Better Approach (2-3 pages)
[Methodology, framework, or approach recommended.
Principles and architecture. Why this works better.]

## 5. Evidence & Case Studies (2-3 pages)
[Data supporting the approach. Real-world examples.
Quantified outcomes.]

## 6. Recommendations (1 page)
[Actionable steps for the reader. Prioritized by impact.
Implementation considerations.]

## 7. Conclusion (0.5 page)
[Thesis restated with evidence summary. Forward look.]

## About [Company] (0.5 page)
[Brief company description. How product relates to this topic.]

## References
[Numbered citations]
```

## Quality Standards
- The paper teaches something valuable—it's not a dressed-up sales pitch.
- Claims are cited from credible sources (analyst firms, academic research, verifiable data).
- Product mention is limited to 10-15% of content and positioned as an example, not the point.
- **Anti-patterns:** Thinly veiled product pitch, unsourced claims, no original insight, poor production quality.

## Audience
Senior practitioners, technical leaders, and executives researching a topic. They're typically in early-to-mid funnel—problem-aware but not yet solution-committed. They value depth, originality, and practical applicability. They'll judge your brand by the quality of your thinking.

## Formatting Guidelines
- 8-15 pages. Professional layout with clear section headers.
- Include charts, diagrams, and data visualizations to break up prose.
- Footnotes or endnotes for citations. Numbered references.
- Gate behind a form for lead generation, but provide genuine value.

## Example
**Section 4 excerpt:** "The shift from perimeter-based to identity-centric security isn't just a technology change—it's a philosophical one. Organizations that succeed treat identity as their new security perimeter and design their architecture around three principles: (1) Never trust, always verify—every access request is authenticated regardless of network location; (2) Least-privilege by default—access is scoped to the minimum required and continuously re-evaluated; (3) Assume breach—systems are designed to limit blast radius when (not if) a credential is compromised."
