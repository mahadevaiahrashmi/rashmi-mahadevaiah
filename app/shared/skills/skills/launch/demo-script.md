# Demo Script

## Purpose
Write a compelling product demo script with a strong narrative arc — from hook to close. Includes the problem statement, solution walkthrough with specific flows, key value moments to highlight, competitive differentiation points, audience adaptation notes, and objection handling. Turns a feature walkthrough into a persuasive story.

## Auto-Trigger Patterns
- "write a demo script for [feature]"
- "demo walkthrough for [product]"
- "how to demo [feature]"
- "product demo for [audience]"
- "sales demo script"
- "demo talking points for [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / product to demo | Yes | User prompt |
| Target audience | Recommended | User prompt |
| Key value propositions | Recommended | GTM brief or user prompt |
| Competitive differentiators | Optional | `context/products/*/competitors.md` |
| Demo environment details | Optional | User prompt |

## Process
1. **Design the hook** — First 30 seconds must capture attention. Use: a provocative question, a relatable pain point, or a surprising data point. No "today I'll show you..."
2. **Frame the problem** — Before showing the product, ensure the audience feels the pain. Make the problem vivid and specific to their context.
3. **Structure the solution walkthrough** — Map the demo flow to the user journey. Show: setup → first value moment → core workflow → advanced capability → result.
4. **Identify key value moments** — 2-3 "aha moments" where the product's value is unmistakable. Pause here. Let it land.
5. **Weave in differentiation** — Naturally contrast with alternatives at relevant points. "You might be thinking, can't I do this with [tool]? Here's the difference..."
6. **Prepare audience adaptations** — Different audiences need different emphasis: exec (ROI, strategic), technical (how it works, integration), end user (daily workflow, time saved).
7. **Build objection handling** — Anticipate questions and have demo-ready responses — ideally, show the answer in the product.
8. **Close with impact** — End with the transformation: before vs. after. Make the next step clear and easy.

## Output Format
```
## Demo Script: [Feature/Product]
**Duration:** [X minutes]  |  **Target Audience:** [Primary persona]

### Pre-Demo Setup
- [Environment configuration needed]
- [Data/accounts to have ready]
- [Backup plan if something breaks]

### Hook (0:00 - 0:30)
[Opening — question, stat, or pain point. Script the exact words.]

### Problem Statement (0:30 - 2:00)
[Frame the problem. Make the audience feel it.]

### Solution Walkthrough
#### Act 1: First Value (2:00 - 5:00)
- **Show:** [Specific screen/action]
- **Say:** [Talking point — benefit, not feature]
- **⭐ Value moment:** [The "aha" to pause on]

#### Act 2: Core Workflow (5:00 - 10:00)
- **Show:** [Key workflow steps]
- **Say:** [Benefit narrative]
- **⭐ Value moment:** [Differentiation point]

#### Act 3: Advanced / Differentiator (10:00 - 13:00)
- **Show:** [Unique capability]
- **Say:** [Why this matters vs. alternatives]

### Close (13:00 - 15:00)
[Before vs. after transformation. Clear CTA.]

### Audience Adaptations
| Audience | Emphasize | De-emphasize | Key Message |
|----------|-----------|-------------|-------------|
| Executive | ROI, strategic value | Technical details | [Message] |
| Technical | Architecture, APIs | Pricing | [Message] |
| End User | Daily workflow, time saved | Strategy | [Message] |

### Objection Handling (During Demo)
| Objection | Demo Response | Show |
|-----------|-------------|------|
| "Looks complex" | [Response] | [Simplicity proof point in product] |
| "We already have [X]" | [Differentiation] | [Feature comparison in product] |

### Recovery Playbook
| If This Happens | Do This |
|----------------|---------|
| Feature doesn't load | [Backup: screenshot/video] |
| Unexpected data | [Transition to prepared environment] |
```

## Quality Standards
- Script reads naturally when spoken — test by reading aloud.
- Value moments are clearly marked — the presenter knows where to pause and let impact land.
- Audience adaptations are genuinely different, not minor wording changes.
- Recovery playbook ensures the demo survives technical hiccups.

**Anti-patterns:** Starting with "let me show you our product," feature tours without narrative, no problem framing, ignoring the audience's context, no backup plan.

## Framework References
- **Story arc** — Hook, tension, resolution structure for compelling narrative.
- **Show, don't tell** — Demonstrating value in the product, not describing it verbally.

## Formatting Guidelines
- Time stamps for pacing (keeps demo on track).
- "Show" / "Say" format for each section (dual-track script).
- Star emoji (⭐) for value moments (visual cue to pause).
- Recovery playbook at the end (preparedness).

## Example
**Hook:** "How much time does your team spend searching for the right data before they can actually start working? Our customers told us it was 45 minutes a day. That's almost 4 hours a week per person just... searching. What if I showed you how to get that time back?"
