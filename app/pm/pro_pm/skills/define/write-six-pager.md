# Write Six-Pager

## Purpose
Produce an Amazon-style narrative memo — a prose-driven, data-rich document that forces rigorous thinking by eliminating bullet-point shortcuts. The six-pager is designed for senior leadership decisions where context, nuance, and trade-offs matter more than summaries.

## Auto-Trigger Patterns
- "write a six-pager"
- "create a narrative memo for [topic]"
- "Amazon-style memo for [initiative]"
- "write a long-form brief for leadership"
- "prepare a narrative document"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Topic or initiative | Yes | User prompt |
| Strategic context | No | `context/company/overview.md` |
| Market data | Optional | `context/products/` |
| Customer research | Optional | `artifacts/research/` |
| Financial data | Optional | User prompt |
| Competitive landscape | Optional | `context/products/*/competitors.md` |

## Process
1. **Define tenets** — State the principles guiding this analysis. Tenets help the reader understand *how* you're thinking.
2. **Set the context** — Background the reader needs. Market conditions, history, prior decisions. All prose.
3. **Present findings** — Data, research, evidence. Cite sources. Use appendix for detailed data tables.
4. **Explore options** — Present 2-4 genuine alternatives. Steelman each.
5. **Make the recommendation** — Clear, specific, with rationale tied to tenets and evidence.
6. **Address risks and mitigations** — What could go wrong. How you'd handle it.
7. **Quality-check** — Read aloud. Is it clear? Does every paragraph earn its place?

## Output Format
```
## [Title]: [Descriptive Subtitle]
**Author:** [Name] | **Date:** [Date]

### 1. Introduction
[One paragraph framing the decision this memo addresses.]

### 2. Tenets
[Numbered principles guiding this analysis.]

### 3. Context and Background
[2-3 paragraphs. All prose, no bullets.]

### 4. Findings
[2-4 paragraphs. Evidence, data, research.]

### 5. Options Considered
#### Option A: [Name]
[Full paragraph making the case.]

#### Option B: [Name]
[Same treatment.]

### 6. Recommendation
[1-2 paragraphs with rationale tied to tenets and evidence.]

### 7. Risks and Mitigations
[Prose discussion of key risks.]

### Appendix
[Data tables, detailed analysis]
```

## Quality Standards
- **All prose, no bullet points** in the main body.
- Every claim has evidence or reasoning.
- Options are genuinely considered — not one obvious winner and two straw men.
- Tenets are specific enough to meaningfully guide decisions.
- Six pages maximum when printed (~3,000-3,500 words).

**Anti-patterns:** Bullet points in the body, straw-man options, tenets that are platitudes, assertion without evidence, exceeding six pages.

## Framework References
- **Amazon Six-Pager** — Narrative memo format for deep-think decisions.
- **Minto Pyramid Principle** — Structure arguments: conclusion first, then supporting logic.

## Formatting Guidelines
- Full prose paragraphs throughout the body.
- Data tables go in the appendix, not inline.
- Tenets are numbered for reference in later sections.
- Footnotes for detailed citations.

## Example
**Tenet:** "We prioritize long-term customer retention over short-term acquisition. When growth and retention conflict, we choose retention."

**Finding:** "Our analysis of 12 months of cohort data shows that customers who activate three or more integrations within their first 14 days retain at 92% at month six, compared to 41% for customers who activate fewer."
