# Customer Presentation

## Purpose
Builds a customer-facing product overview that flows from their pain points through our solution to value delivered, supported by case studies and a roadmap preview. Designed to be adapted per customer segment, industry, or specific account for maximum relevance.

## Auto-Trigger Patterns
- "Create a customer presentation for [segment/account]"
- "Build a product overview deck for a customer meeting"
- "I need to present our product to [customer name]"
- "Help me customize a customer-facing deck"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Customer segment or specific account, their known pain points, product capabilities relevant to them, available case studies
- **Optional:** Customer's current tech stack, prior interactions, competitive alternatives they're evaluating, specific use cases
- **Reference files:** product-brief.md, customer-case-study.md, solution-brief.md

## Process
1. **Research the customer** — Understand their industry, role, current tools, and stated challenges.
2. **Mirror their language** — Frame problems using their terminology, not ours.
3. **Map capabilities to pain** — Only show features that address their specific needs. Cut everything else.
4. **Select relevant proof** — Choose case studies from similar industry, size, or use case.
5. **Calibrate roadmap preview** — Share only committed items relevant to them. Flag anything under NDA if needed.
6. **End with clear next steps** — Proposal, pilot, technical deep-dive, or reference call.

## Output Format
```
# [Product Name] — Solving [Their Problem] for [Customer/Segment]

## Slide 1: Title (personalized to customer/segment)
## Slide 2: We Understand Your Challenge
  Pain points framed in their words. Industry-specific data.
## Slide 3-4: How [Product] Addresses This
  Capabilities mapped to their pain points. Visuals of relevant workflows.
## Slide 5: Value Delivered
  Quantified outcomes: time saved, revenue impact, risk reduced.
## Slide 6-7: Customer Stories
  Case studies from similar companies. Quotes and metrics.
## Slide 8: How It Works (simplified architecture/integration view)
## Slide 9: Roadmap Preview
  Relevant upcoming capabilities. "Built with customers like you."
## Slide 10: Next Steps
  Clear CTA: pilot, demo, proposal, reference call.
```

## Quality Standards
- The customer should feel "they understand our business" within the first 2 slides.
- Every feature mentioned connects to a stated pain point—no feature dumping.
- Case studies match the customer's profile (industry, size, use case).
- **Anti-patterns:** Generic pitch, leading with features, irrelevant case studies, overpromising on roadmap.

## Audience
Customer stakeholders—buyers, evaluators, champions, and economic decision-makers. They care about whether we understand their problem, whether our solution works for their context, and whether we have proof. Adapt: technical depth for practitioners, business impact for executives.

## Formatting Guidelines
- 10-12 slides. Personalized title slide with their logo (if appropriate).
- Problem slides use their industry language and data.
- Solution slides: screenshots or diagrams relevant to their use case.
- End with a single, clear next step—not a menu of options.

## Example
**Slide 2: "Manual compliance checks cost mid-market banks $2.1M annually"**
Visual: Workflow diagram showing current manual process (7 steps, 3 tools, 2 handoffs).
Data point: "Source: [Industry Report]. Your peer banks report 40+ hours/week on compliance workflows."
