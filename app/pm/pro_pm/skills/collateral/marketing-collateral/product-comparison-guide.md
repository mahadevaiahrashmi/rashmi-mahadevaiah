# Product Comparison Guide

## Purpose
Creates a customer-facing comparison document positioning your product against competitors with evaluation criteria, a comparison matrix, highlighted advantages, a consideration guide, and migration support information. Designed to be fair enough to be credible while clearly demonstrating your strengths.

## Auto-Trigger Patterns
- "Create a product comparison guide vs [competitor]"
- "Build a comparison page for our product"
- "I need a customer-facing competitor comparison"
- "Help me create an evaluation guide for buyers"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Your product capabilities, competitor capabilities (verified), target evaluation criteria, your key advantages
- **Optional:** Third-party review data, customer testimonials comparing products, pricing information, analyst positioning
- **Reference files:** product-brief.md, competitive-landscape-report.md, competitive-battlecard.md

## Process
1. **Define evaluation criteria** — Choose criteria that matter to buyers, not just criteria where you win.
2. **Research honestly** — Verify competitor capabilities through product trials, documentation, and reviews.
3. **Build the matrix** — Fair, verifiable ratings. Acknowledge competitor strengths.
4. **Highlight differentiation** — Where you genuinely excel, explain why it matters to the buyer.
5. **Provide guidance** — Help the buyer make the right decision for their needs—even if it's not you.
6. **Include migration path** — If they're switching, make it easy.

## Output Format
```
# [Your Product] vs [Competitor(s)]: Evaluation Guide

## How to Use This Guide
[Context on comparison methodology. Date of last verification.]

## Evaluation Criteria
[Why these criteria matter. How to weight based on your priorities.]

## Comparison Matrix
| Criteria | [Your Product] | [Competitor A] | [Competitor B] |
|----------|---------------|----------------|----------------|
| [Criteria 1] | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| [Criteria 2] | ⭐⭐⭐ | ⭐⭐⭐ | ⭐ |
Rating methodology: [How ratings were determined]

## Where [Your Product] Excels
### [Advantage 1]
[Why this matters. Evidence. Customer quote.]
### [Advantage 2]
[Why this matters. Evidence. Customer quote.]

## Where to Consider Alternatives
[Honest guidance on scenarios where competitors may be better fits.]

## Making Your Decision
[Framework for evaluating based on buyer's specific priorities.]

## Switching to [Your Product]
[Migration support. Data transfer. Onboarding help. Timeline.]
```

## Quality Standards
- Comparison is accurate and verifiable—competitor capabilities are current and fairly represented.
- You acknowledge areas where competitors are strong; credibility builds trust.
- "Where to consider alternatives" section is genuine, not a strawman.
- **Anti-patterns:** Rigging criteria to win everything, outdated competitor info, dismissing legitimate competitor strengths, no migration support.

## Audience
Buyers actively evaluating solutions who want an objective framework for decision-making. They'll cross-reference with competitor materials and third-party reviews. Credibility matters more than persuasion—unfair comparisons backfire.

## Formatting Guidelines
- 2-4 pages. Clean matrix layout.
- Include "last updated" date and verification methodology.
- Rating scale defined and consistent.
- Available as web page and downloadable PDF.

## Example
**Advantage section excerpt:** "**Real-time collaboration:** Unlike [Competitor A]'s save-and-sync model, [Your Product] enables simultaneous multi-user editing with conflict resolution in under 200ms. For teams with 10+ concurrent editors, this eliminates the version conflict pain that causes an estimated 2.3 hours/week of rework per team (based on customer survey data, n=340)."
