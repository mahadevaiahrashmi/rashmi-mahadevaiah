# Business Model Canvas

## Purpose
Complete a full Business Model Canvas covering all nine building blocks: Value Propositions, Customer Segments, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, and Cost Structure. Provides a holistic, one-page view of how the business creates, delivers, and captures value.

## Auto-Trigger Patterns
- "Create a Business Model Canvas" / "BMC for [product]"
- "Map our business model"
- "Business model analysis for [product/company]"
- "Osterwalder canvas for [idea]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product/company description, target customers, value proposition, revenue model
- **Optional:** Competitive context, existing BMC to iterate on, financial data, channel strategy
- **Reference:** Osterwalder's Business Model Generation, `context/products/` for market context

## Process
1. **Start with Customer Segments** — Who are you creating value for? Define 1-3 primary segments with their characteristics.
2. **Define Value Propositions** — What value do you deliver to each segment? What problem do you solve? What need do you satisfy? Be specific per segment.
3. **Map Channels** — How do you reach each segment? Awareness, evaluation, purchase, delivery, after-sales. Map the full customer journey.
4. **Design Customer Relationships** — What type of relationship does each segment expect? Self-service, personal assistance, automated, community?
5. **Identify Revenue Streams** — How does each segment pay? Subscription, usage, licensing, advertising, transaction fees?
6. **List Key Resources** — What assets are essential? Technology, data, people, IP, brand, capital.
7. **Define Key Activities** — What must you do to make the model work? Product development, marketing, operations, partner management.
8. **Map Key Partnerships** — Who are critical partners? Suppliers, strategic alliances, joint ventures. What do they provide?
9. **Estimate Cost Structure** — What are the major costs? Fixed vs variable. Cost-driven vs value-driven model.
10. **Validate coherence** — Does each block reinforce the others? Do segments match propositions? Do channels match relationships? Do revenue streams cover costs?

## Output Format
```
## Business Model Canvas: [Product/Company]

### Customer Segments
- **[Segment 1]:** [Description, size, characteristics]
- **[Segment 2]:** [Description, size, characteristics]

### Value Propositions
| Segment | Value Proposition | Key Differentiator |
|---------|------------------|-------------------|
| [Seg 1] | [What value you deliver] | [Why you, not competitors] |
| [Seg 2] | [What value you deliver] | [Why you, not competitors] |

### Channels
| Stage | Channel | Segment |
|-------|---------|---------|
| Awareness | [Channel] | [Which segments] |
| Evaluation | [Channel] | [Which segments] |
| Purchase | [Channel] | [Which segments] |
| Delivery | [Channel] | [Which segments] |
| After-sales | [Channel] | [Which segments] |

### Customer Relationships
| Segment | Relationship Type | Key Touchpoints |
|---------|------------------|-----------------|
| [Seg 1] | [Type] | [Touchpoints] |

### Revenue Streams
| Stream | Model | Segment | Estimated Size |
|--------|-------|---------|---------------|
| [Stream 1] | [Sub/Usage/etc.] | [Segment] | $[X] |

### Key Resources
- [Resource 1 — why it's essential]
- [Resource 2 — why it's essential]

### Key Activities
- [Activity 1 — what you must do]
- [Activity 2 — what you must do]

### Key Partnerships
| Partner | What They Provide | What We Provide |
|---------|------------------|-----------------|
| [Partner] | [Value to us] | [Value to them] |

### Cost Structure
| Cost Category | Type | Estimated Size |
|--------------|------|---------------|
| [Category] | Fixed/Variable | $[X] |

### Model Coherence Check
[Does everything fit together? Are there misalignments?]
```

## Quality Standards
- Value propositions are specific per segment, not one generic statement for all.
- Revenue streams are realistic and connected to value propositions — customers pay for the value they receive.
- Key resources and activities are truly essential — if removing one wouldn't break the model, it's not "key."
- Coherence check identifies misalignments — this is the most valuable part of the exercise.
- **Anti-patterns:** Generic value propositions, listing every activity as "key," ignoring cost structure, no per-segment differentiation, treating the canvas as a one-time exercise instead of a living tool.

## Framework References
- Business Model Canvas (Alexander Osterwalder) — Business Model Generation
- Value Proposition Canvas — deep dive on segments × propositions
- Lean Canvas (Ash Maurya) — for early-stage variation

## Formatting Guidelines
- Use tables for structured blocks (channels, revenue, costs).
- Bullet lists for resources, activities, and segments.
- Include a coherence check section — the canvas is only useful if blocks reinforce each other.
- Keep to 2-3 pages — the canvas is meant to be a one-page view, even in document form.

## Example
> **Customer Segment:** Mid-market SaaS companies (500-5000 employees) with complex user onboarding flows and at least one dedicated growth/product team.
>
> **Value Proposition for this segment:** Reduce new-user time-to-value from weeks to hours with guided, no-code onboarding flows — saving 20+ engineering hours per onboarding change.
>
> **Revenue Stream:** Usage-based SaaS ($0.02 per onboarding session) with a Pro tier at $499/mo (unlimited sessions, advanced analytics).
