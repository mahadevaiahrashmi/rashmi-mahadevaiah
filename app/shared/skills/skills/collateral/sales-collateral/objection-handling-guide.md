# Objection Handling Guide

## Purpose
Creates a comprehensive guide of common sales objections with structured responses: the objection stated, why it comes up, how to respond, supporting evidence, and a follow-up question to advance the conversation. Organized by category for quick reference during sales calls.

## Auto-Trigger Patterns
- "Create an objection handling guide for [product]"
- "Build a sales objection response library"
- "I need to document responses to common objections"
- "Help me prepare reps for tough sales questions"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Common objections (10-20), product value proposition, competitive positioning, customer proof points
- **Optional:** Win/loss analysis data, sales call recordings, competitor-specific objections, pricing model details
- **Reference files:** product-brief.md, competitive-battlecard.md, customer-case-study.md, sales-pitch-deck.md

## Process
1. **Collect objections** — Gather from win/loss analysis, sales team interviews, and call recordings.
2. **Categorize** — Group by type: price, competition, timing, trust, technical, organizational.
3. **Diagnose the root cause** — Why does this objection really come up? What's the underlying concern?
4. **Build responses** — Acknowledge → reframe → provide evidence → follow up with a question.
5. **Validate with top reps** — Have your best salespeople review and refine responses.
6. **Role-play test** — Practice each objection/response pair to ensure naturalness.

## Output Format
```
# Objection Handling Guide: [Product Name]

## Pricing Objections

### "It's too expensive"
**Why it comes up:** [Real concern beneath the surface]
**Response framework:**
1. Acknowledge: "I understand budget is a consideration."
2. Reframe: "[Reframe from cost to value/ROI]"
3. Evidence: "[Specific customer savings or ROI data]"
4. Follow-up: "[Question to understand their budget constraint]"

### "Competitor X is cheaper"
[Same structure]

## Competitive Objections

### "We're already using [Competitor]"
**Why it comes up:** [Switching cost concern, relationship, inertia]
**Response framework:**
1. Acknowledge: "Many of our best customers came from [Competitor]."
2. Reframe: "[What they're missing or overpaying for]"
3. Evidence: "[Migration success story with outcomes]"
4. Follow-up: "[Question about their satisfaction with current solution]"

## Timing Objections

### "We're not ready right now"
[Same structure]

## Trust/Risk Objections

### "We haven't heard of you"
[Same structure]

## Technical Objections

### "Does it integrate with [system]?"
[Same structure]

## Organizational Objections

### "I need to get buy-in from [stakeholder]"
[Same structure]

## Response Principles
1. Never dismiss the objection. Acknowledge first.
2. Ask questions before answering—understand the real concern.
3. Use evidence, not assertions. Stories beat statistics.
4. Always end with a question that advances the conversation.
```

## Quality Standards
- Every response follows the Acknowledge → Reframe → Evidence → Follow-up pattern.
- Evidence is specific (named customers, real numbers), not generic claims.
- Responses feel natural, not scripted—reps should adapt language to their style.
- **Anti-patterns:** Dismissive responses, making competitors look bad, no evidence backing, closing-question only (feels pushy).

## Audience
Sales reps at all levels. Junior reps will use responses more literally; senior reps will adapt the framework. Include enough context for juniors to understand the "why" behind each response.

## Formatting Guidelines
- Organized by objection category. Alphabetical within categories.
- Consistent format per objection. Scannable during live calls.
- Include a "cheat sheet" summary: one-line response per objection.
- Update based on win/loss data quarterly.

## Example
**"We need to see ROI before we commit"**
Why: They've been burned by products that didn't deliver. Or their CFO requires it.
Response: "That's exactly the right question. Let me share what [Customer X] measured. They tracked three metrics from day one: time saved on [task], error reduction in [process], and team satisfaction. Within 90 days, they measured a 4.2x ROI. Would it help if I connected you with their team to hear it directly?"
Follow-up: "What metrics would your team need to see to feel confident?"
