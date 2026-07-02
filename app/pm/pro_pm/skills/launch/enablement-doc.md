# Enablement Document

## Purpose
Create sales and CS enablement materials that equip customer-facing teams to sell, demo, and support a new feature or product — covering what's launching, why it matters, who to target, key messages, demo talking points, competitive positioning, FAQ, and objection handling. Formatted for quick consumption during a busy sales day.

## Auto-Trigger Patterns
- "sales enablement for [feature]"
- "CS enablement doc"
- "enable the team on [feature/product]"
- "sales training materials for [launch]"
- "objection handling for [feature]"
- "competitive battle card for [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / product description | Yes | User prompt |
| Target customer segments | Recommended | GTM brief or user prompt |
| Competitive landscape | Recommended | `context/products/*/competitors.md` |
| Pricing / packaging | Optional | User prompt |
| Common objections | Optional | User prompt or sales feedback |

## Process
1. **Write the elevator pitch** — 30-second explanation of what's launching and why it matters. This is what reps say when a customer asks "what's new?"
2. **Define target customers** — Who should reps proactively bring this up with? Qualification criteria and ideal customer profile.
3. **Craft key messages** — 3-5 messages that resonate with buyers. Focus on outcomes, not features.
4. **Build demo talking points** — Key moments in the demo to highlight, questions to ask, and transitions between value points.
5. **Competitive positioning** — How to handle "why not [competitor]?" for top 3 competitors. Honest about trade-offs.
6. **Create FAQ** — Top 10 questions customers will ask, with approved answers.
7. **Build objection handling** — Common objections mapped to responses with supporting evidence.
8. **Pricing/packaging guidance** — How to discuss pricing, which tier includes this, and how to handle upgrade conversations.

## Output Format
```
## Sales/CS Enablement: [Feature/Product]
**Launch Date:** [date]  |  **Enablement Owner:** [name]

### Elevator Pitch (30 seconds)
[Copy-paste ready pitch for customer conversations]

### Target Customers
| Criteria | Detail |
|----------|--------|
| Ideal company | [Size, industry, stage] |
| Ideal buyer | [Role, priorities] |
| Trigger signals | [Events that indicate readiness] |
| Disqualifiers | [When NOT to pitch this] |

### Key Messages
1. **[Message 1]** — [Supporting evidence/data point]
2. **[Message 2]** — [Supporting evidence]
3. **[Message 3]** — [Supporting evidence]

### Demo Talking Points
| Moment | What to Show | What to Say | Question to Ask |
|--------|-------------|-------------|-----------------|
| Hook | [Screen/feature] | [Value message] | [Discovery question] |
| Core value | [Key workflow] | [Benefit statement] | [Validation question] |
| Differentiator | [Unique capability] | [Why us, not them] | [Competitive question] |

### Competitive Positioning
| Competitor | Their Strength | Our Advantage | Talk Track |
|-----------|---------------|--------------|-----------|
| [Comp A] | [What they do well] | [Where we win] | [What to say] |

### FAQ
| Question | Answer |
|----------|--------|
| [Common question 1] | [Approved answer] |

### Objection Handling
| Objection | Response | Evidence |
|-----------|----------|----------|
| "It's too expensive" | [Value-based response] | [ROI data] |
| "We already use [competitor]" | [Differentiation response] | [Comparison point] |

### Pricing & Packaging
- **Included in:** [Tier/plan]
- **Upgrade path:** [How existing customers access it]
- **Talk track:** [How to discuss pricing naturally]
```

## Quality Standards
- Elevator pitch is under 30 seconds when spoken aloud — actually time it.
- Objection handling is honest — acknowledge competitor strengths before differentiating.
- FAQ answers are approved and consistent across the organization.
- Demo talking points include discovery questions, not just features to show.

**Anti-patterns:** Feature-dump pitches, dishonest competitive positioning, untested objection responses, enablement docs that nobody reads because they're too long.

## Framework References
- **MEDDIC/MEDDPICC** — Qualification framework alignment.
- **Challenger Sale** — Teaching, tailoring, taking control in sales conversations.

## Formatting Guidelines
- Elevator pitch in a standalone block (copy-paste ready).
- Tables for competitive positioning and objection handling (quick reference during calls).
- FAQ in Q&A format (searchable).
- Entire doc should be consumable in 10 minutes.

## Example
**Elevator pitch:** "We just launched Smart Filters — it remembers how your team searches and suggests filter combinations automatically. Customers using it in beta cut their search time by 40%. It's included in Pro and Enterprise plans, and it's the kind of thing that makes your team's daily workflow noticeably faster."
