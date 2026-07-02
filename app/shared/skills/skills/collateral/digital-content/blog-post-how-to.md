# Blog Post — How-To Guide

## Purpose
Creates an 800-1500 word tutorial-style blog post that walks readers through solving a specific problem, with prerequisites, step-by-step instructions, screenshots or code, tips, common mistakes, and additional resources. Drives organic traffic through SEO and demonstrates product expertise.

## Auto-Trigger Patterns
- "Write a how-to blog post about [topic]"
- "Create a tutorial post for [task]"
- "I need a step-by-step guide blog post"
- "Help me write a practical guide about [subject]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Problem to solve, step-by-step process, target reader skill level, expected outcome
- **Optional:** Code samples, screenshots, common pitfalls, related tutorials, SEO keywords
- **Reference files:** product-brief.md, technical-documentation.md, integration-guide.md

## Process
1. **Define the outcome** — What will the reader be able to do after reading this?
2. **List prerequisites** — What must they have or know before starting?
3. **Write each step** — Action → expected result → verification. Numbered, clear, testable.
4. **Add visual aids** — Screenshots, code blocks, diagrams at each key step.
5. **Include pro tips** — Insider knowledge that makes the difference between okay and great.
6. **Warn about pitfalls** — Common mistakes and how to avoid them.

## Output Format
```
# How to [Accomplish Specific Goal]

**Meta description:** [155 chars, includes target keyword]
**Reading time:** [X minutes]

[Opening: Why this matters. What you'll learn. End state.]

## Prerequisites
- [What you need before starting]

## Step 1: [Action Verb + Object]
[Instructions. Expected outcome.]
[Screenshot or code block]

## Step 2-N: [Same structure]

## Pro Tips
💡 [Tip 1: Insider knowledge]
💡 [Tip 2: Optimization trick]

## Common Mistakes to Avoid
❌ [Mistake 1: What people do wrong and why]
❌ [Mistake 2: Common pitfall and how to avoid]

## Summary
[Recap what was accomplished. Link to next-level guide.]

## Additional Resources
- [Related tutorial]
- [Documentation link]
- [Community discussion]
```

## Quality Standards
- A reader at the stated skill level can follow the guide and achieve the stated outcome.
- Every step has a verification point—the reader knows they succeeded before moving on.
- Pro tips add genuine value, not obvious advice.
- **Anti-patterns:** Steps that skip details, assuming too much knowledge, no visuals, tips that are obvious.

## Audience
Practitioners at a specific skill level who need to accomplish a specific task. They arrived via search, want to solve their problem, and will leave if the content doesn't deliver. Write for their skill level—not too basic, not too advanced.

## Formatting Guidelines
- 800-1500 words. Numbered steps. Heavy use of code blocks and screenshots.
- "What you'll learn" and "Prerequisites" at the top.
- Scannable structure: someone should be able to skim headers and get the gist.
- SEO: target a specific how-to query, include in H1 and first paragraph.

## Example
**Step 2 excerpt:** "Step 2: Configure your webhook endpoint. Navigate to Settings → Integrations → Webhooks. Click 'Add Webhook.' Enter your endpoint URL (e.g., `https://yourapp.com/webhooks/events`). Select the events you want to receive (start with 'analysis.completed'). Click 'Test'—you should see a `200 OK` response in the test panel. If you see a timeout, verify your endpoint is publicly accessible and responds within 5 seconds."
