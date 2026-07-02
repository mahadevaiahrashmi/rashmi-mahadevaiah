# Board Deck (Product Section)

## Purpose
Creates a concise, high-density 5-10 slide product section for board meetings. Covers strategic context, key metrics with benchmarks, market positioning, risks, investment asks, and forward view. Every word earns its place—boards value precision and pattern recognition over polish.

## Auto-Trigger Patterns
- "Create the product section for our board deck"
- "Build board-level product slides"
- "I need to present product to the board"
- "Help me prepare board materials for [quarter]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Key metrics (actual vs plan vs benchmark), strategic progress update, top risks, investment proposals
- **Optional:** Prior board deck for continuity, industry benchmarks, competitive developments, customer pipeline data
- **Reference files:** product-brief.md, strategy-document.md, quarterly-business-review.md

## Process
1. **Start from the board's perspective** — What do they need to know to govern effectively? Focus on trajectory, not activity.
2. **Benchmark everything** — Compare metrics to plan, prior period, and industry benchmarks.
3. **Surface decisions** — Identify what needs board input, approval, or awareness.
4. **Name risks honestly** — Include probability, impact, and mitigation status.
5. **Pre-read format** — Design for async consumption first, live discussion second.

## Output Format
```
# Product Update — Board of Directors, [Quarter Year]

## Slide 1: Product Scorecard
  Key metrics table: Metric | Plan | Actual | Benchmark | Trend

## Slide 2: Strategic Progress
  Status against strategic pillars. What advanced, what stalled, why.

## Slide 3: Market Position
  Competitive dynamics. Win rates. Market share movement.

## Slide 4-5: Key Developments
  Top 2-3 developments with impact assessment.

## Slide 6: Risks & Mitigations
  Risk | Probability | Impact | Mitigation | Status

## Slide 7: Investment Decisions Needed
  Specific asks with rationale and expected ROI.

## Slide 8: Forward View (Next Quarter/Half)

## Appendix: Detailed Metrics (reference only)
```

## Quality Standards
- Board members can assess product health in the first slide alone.
- Every metric includes context (plan, prior period, benchmark).
- Risks are real, not performative—include at least one uncomfortable truth.
- **Anti-patterns:** Activity reporting ("we shipped 47 features"), burying risks, metrics without benchmarks.

## Audience
Board of directors: experienced operators and investors who oversee company strategy. They have limited time, broad context, and high pattern-recognition.

## Formatting Guidelines
- 5-10 slides maximum. Pre-read format with detailed appendix.
- Information density is high but structured—tables, scorecards, risk matrices.
- Use status indicators (🟢🟡🔴) consistently.
- No slide should require more than 60 seconds to absorb.

## Example
**Slide 1: Product Scorecard**
| Metric | Plan | Actual | Benchmark | Trend |
|--------|------|--------|-----------|-------|
| ARR | $4.2M | $4.5M | Top quartile | 🟢 ↑ |
| Net Retention | 115% | 108% | Median 110% | 🟡 ↓ |
Overall: **Watch** — Growth strong but retention needs focus.
