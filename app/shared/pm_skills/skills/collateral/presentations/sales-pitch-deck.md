# Sales Pitch Deck

## Purpose
Creates a sales-ready presentation following the problem → solution → differentiation → social proof → pricing → next steps arc. Designed to be customized by persona and segment, with objection handling notes embedded in speaker notes to equip sales reps for live conversations.

## Auto-Trigger Patterns
- "Create a sales deck for [product/segment]"
- "Build a pitch deck for the sales team"
- "I need a sales presentation for [persona]"
- "Help me build a deck that closes deals"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product value proposition, target persona(s), competitive differentiators, pricing model, customer proof points
- **Optional:** Segment-specific pain points, objection bank, demo environment details, win/loss data
- **Reference files:** product-brief.md, competitive-battlecard.md, objection-handling-guide.md, customer-case-study.md

## Process
1. **Define the persona** — Identify the primary buyer persona, their goals, fears, and decision criteria.
2. **Build the problem narrative** — Start with their world, not ours. Quantify the cost of the status quo.
3. **Present solution as transformation** — Show the "before and after," not a feature list.
4. **Stack proof** — Layer social proof: logos, metrics, quotes, awards, analyst recognition.
5. **Handle objections proactively** — Address the top 3 objections in speaker notes before they're raised.
6. **Create customization zones** — Mark slides that reps should personalize per deal.

## Output Format
```
# [Product] — [Value Proposition Headline]

## Slide 1: Title (customizable per prospect)
## Slide 2: The Problem (quantified cost of status quo)
  Speaker Notes: [Discovery question bridge: "Is this what you're seeing?"]
## Slide 3: Why It's Getting Worse (market trends amplifying the pain)
## Slide 4: The Solution (transformation, not features)
  Speaker Notes: [Objection: "We already have X" — Response: ...]
## Slide 5-6: Key Differentiators (vs specific alternatives)
## Slide 7: How It Works (simplified demo flow or architecture)
## Slide 8: Social Proof (logos, metrics, quotes)
## Slide 9: Customer Story (one detailed case study)
## Slide 10: Pricing & Packaging (or "Let's discuss what fits")
  Speaker Notes: [Objection: "Too expensive" — Response: ...]
## Slide 11: Next Steps (specific, time-bound CTA)

## Customization Guide
[CUSTOMIZE] slides marked for per-deal personalization.
Persona variants: [Technical Buyer], [Business Buyer], [Executive Sponsor]
```

## Quality Standards
- Reps can present without reading slides—headlines carry the story alone.
- Every differentiator is backed by proof (data, customer quote, or demo moment).
- Objection handling notes are specific and evidence-based, not dismissive.
- **Anti-patterns:** Feature dumps, generic social proof, pricing without value anchoring, no clear next step.

## Audience
Sales reps presenting to prospects. The end audience varies by persona—tailor depth and language. Technical buyers want how; business buyers want ROI; executives want strategic fit.

## Formatting Guidelines
- 10-12 slides. Clean, brand-consistent design.
- Headlines state the benefit or insight, not the topic.
- Speaker notes: talking points + objection handling + transition phrases.
- Mark customizable sections clearly for rep personalization.

## Example
**Slide 2: "Your team spends 15 hours/week on work that should take 15 minutes"**
Visual: Clock graphic showing time breakdown—manual data entry (6h), reconciliation (4h), reporting (3h), error correction (2h).
Speaker Notes: "Pause here and ask: 'Does this match what your team experiences?' This is your discovery bridge."
