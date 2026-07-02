# Competitive Battlecard

## Purpose
Creates a per-competitor one-page battlecard for sales teams, covering our strengths, their weaknesses, head-to-head feature comparison, win themes, landmines to set, objection handling, and proof points. Designed to be scannable during a live call and referenced during deal preparation.

## Auto-Trigger Patterns
- "Create a battlecard for [competitor]"
- "Build a competitive battlecard against [company]"
- "I need a sales battlecard vs [competitor]"
- "Help me arm sales against [competitor]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Competitor name, their product capabilities, our advantages, common objections, win/loss themes
- **Optional:** Pricing intelligence, customer quotes comparing products, analyst positioning, recent competitor moves
- **Reference files:** product-brief.md, competitive-landscape-report.md, objection-handling-guide.md

## Process
1. **Research current state** — Verify competitor capabilities through recent product trials, reviews, and customer feedback.
2. **Identify win themes** — What narratives consistently win against this competitor? Validate with sales.
3. **Map landmines** — Questions that expose competitor weaknesses when asked by the prospect.
4. **Build objection responses** — Turn competitor strengths into "yes, but" responses with evidence.
5. **Select proof points** — Customer quotes and data from wins against this specific competitor.
6. **Validate with sales** — Get feedback from reps who have won and lost against this competitor.

## Output Format
```
# Battlecard: [Your Product] vs [Competitor]
**Last updated:** [Date] | **Win rate:** [X%]

## Quick Overview
| | [Your Product] | [Competitor] |
|---|---|---|
| Best for | [Segment] | [Segment] |
| Pricing | [Model] | [Model] |
| Key strength | [Ours] | [Theirs] |
| Key weakness | [Ours] | [Theirs] |

## Why We Win 🏆
1. **[Win theme 1]:** [One-sentence explanation + proof point]
2. **[Win theme 2]:** [One-sentence explanation + proof point]
3. **[Win theme 3]:** [One-sentence explanation + proof point]

## Their Weaknesses 🎯
- [Weakness 1: What it means for the customer]
- [Weakness 2: What it means for the customer]
- [Weakness 3: What it means for the customer]

## Landmine Questions 💣
Ask the prospect to ask the competitor:
1. "[Question that exposes weakness 1]"
2. "[Question that exposes weakness 2]"
3. "[Question that exposes weakness 3]"

## Objection Handling
**"[Competitor] has [strength X]"**
→ Response: "[Acknowledge, pivot, differentiate]"
→ Evidence: "[Customer quote or data point]"

**"[Competitor] is cheaper"**
→ Response: "[Total cost of ownership argument]"
→ Evidence: "[ROI comparison data]"

## Feature Comparison
| Capability | Us | Them | Notes |
|------------|-----|------|-------|

## Proof Points
- "[Customer quote from competitive win]" — [Name, Company]
- [Metric from competitive displacement]

## Watch Out For
[Recent competitor moves. New features. Pricing changes. Partnerships.]
```

## Quality Standards
- Every claim is verifiable—no FUD (fear, uncertainty, doubt).
- Win themes are validated against actual deal data, not PM opinion.
- Objection responses acknowledge competitor strengths before pivoting.
- **Anti-patterns:** Making things up about competitors, ignoring their real strengths, outdated information, not validated by sales.

## Audience
Sales reps and sales engineers in active competitive deals. They need quick-reference information during calls and thorough preparation before meetings. Format for both use cases: scannable header section + detailed body.

## Formatting Guidelines
- Strictly one page (front). Second page for detailed feature comparison if needed.
- Section emojis for quick visual scanning.
- Bold key phrases for skimming during live calls.
- Update quarterly or when significant competitor changes occur.

## Example
**Landmine Question:** "Ask them to show you their real-time collaboration on a document with 5 concurrent editors. Then ask what happens when two people edit the same paragraph simultaneously. Their conflict resolution creates duplicate content that users have to manually merge—we handle it seamlessly."
