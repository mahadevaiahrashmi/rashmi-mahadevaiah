# Product Launch Deck

## Purpose
Creates a launch announcement presentation covering what's launching, why it matters, who it's for, key differentiators, demo flow, timeline, and success metrics. Supports both internal alignment and external announcement variants from a single source of truth.

## Auto-Trigger Patterns
- "Create a launch deck for [feature/product]"
- "Build a product launch presentation"
- "I need to announce [feature] to the team/customers"
- "Help me structure a launch readiness review deck"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Feature/product name, target launch date, value proposition, target users, key capabilities, demo-ready flows
- **Optional:** Beta/early access results, competitive differentiation, pricing, GTM plan, press/analyst strategy
- **Reference files:** product-brief.md, prd.md, go-to-market-plan.md

## Process
1. **Define the story** — Articulate the "before and after" for the target user. What changes and why it matters.
2. **Build internal variant first** — Include full context: strategy rationale, technical details, GTM plan, risk mitigations.
3. **Draft external variant** — Strip internal context. Lead with customer value. Add social proof and CTA.
4. **Script the demo** — Outline the demo flow: setup, key moments, "aha" moment, closing.
5. **Validate readiness** — Cross-check against launch criteria: docs ready, support trained, metrics instrumented.

## Output Format
```
# [Product/Feature] Launch — [Date]

## Internal Variant
### Slide 1: Launch Headline (what + one-sentence impact)
### Slide 2: Why Now (market timing, customer demand signals)
### Slide 3: What's Launching (capabilities overview, visual)
### Slide 4-5: Key Differentiators (vs alternatives/competitors)
### Slide 6: Target Users & Use Cases
### Slide 7-8: Demo Flow (annotated walkthrough)
### Slide 9: GTM Plan (channels, enablement, timeline)
### Slide 10: Success Metrics (leading + lagging indicators)
### Slide 11: Launch Timeline & Readiness Checklist
### Slide 12: Risks & Mitigations
### Slide 13: FAQ / Anticipated Questions

## External Variant
### Slide 1: Headline + Hero Visual
### Slide 2: The Problem (customer pain, quantified)
### Slide 3-4: The Solution (capabilities, screenshots)
### Slide 5: Customer Evidence / Early Results
### Slide 6: Getting Started / CTA
```

## Quality Standards
- The launch story passes the "so what?" test—a skeptical stakeholder should understand impact in 30 seconds.
- Demo flow has a clear "aha" moment within the first 90 seconds.
- Internal deck includes realistic risk assessment, not just hype.
- **Anti-patterns:** Feature lists without value framing, no demo, missing success metrics, identical internal/external decks.

## Audience
**Internal:** Product, engineering, design, GTM, support, leadership—need full context to execute the launch. **External:** Customers, prospects, press—need to understand value and how to get started. Adapt tone and detail accordingly.

## Formatting Guidelines
- Lead with impact, not features. Headlines state the benefit.
- Demo slides: annotated screenshots or flow diagrams, numbered steps.
- Internal: 12-15 slides. External: 6-8 slides.
- Include a one-page launch brief summary as a handout companion.

## Example
**Slide 3 (External): "Find answers in seconds, not hours"**
Visual: Side-by-side before/after. Left: user searching through 5 tools. Right: single search bar with instant results.
Caption: "AI-powered search across all your connected tools. Average query time: 1.2 seconds."
