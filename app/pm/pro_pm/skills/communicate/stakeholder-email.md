# Stakeholder Email

## Purpose
Craft a tailored email to a specific stakeholder, adapting tone, depth, framing, and call-to-action based on the recipient's persona, role, and communication preferences. Uses BLUF format with short paragraphs optimized for inbox scanning.

## Auto-Trigger Patterns
- "Write an email to [person]" / "draft a message for [stakeholder]"
- "How should I communicate this to [person]?"
- "Email [person] about [topic]"
- "Send an update to [stakeholder name]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Recipient name/role, topic or message to communicate, desired action/outcome
- **Optional:** Urgency level, relationship context, prior communications on this topic
- **Reference:** `context/people/` for recipient persona and preferences

## Process
1. **Load persona** — Pull recipient profile from `context/people/`. Identify: communication style preference, what they care about, decision-making pattern, detail appetite.
2. **Define the ask** — What do you need from this person? Decision? Awareness? Action? Approval?
3. **Choose framing** — Adapt the message angle to what resonates with this person:
   - Execs: business impact, strategic alignment, decisions needed
   - Eng leaders: technical approach, trade-offs, timeline impact
   - Sales/CS: customer impact, deal implications, enablement needs
   - Design: user experience impact, research insights, design implications
4. **Write BLUF subject line** — Subject line states the ask or key message. No "Quick update" or "FYI."
5. **Draft body** — BLUF first paragraph (2-3 sentences max). Supporting context in short paragraphs. Close with specific CTA.
6. **Calibrate tone** — Match recipient's preference: direct vs diplomatic, data-heavy vs narrative, formal vs casual.
7. **Edit for brevity** — Every paragraph earns its place. If it can be cut, cut it.
8. **Add formatting aids** — Bold key points, use bullets for options, highlight deadlines.

## Output Format
```
**Subject:** [Action-oriented subject with key message]

[Name],

[BLUF: 2-3 sentences — what happened, why it matters to them, what you need]

[Supporting context paragraph — adapted to their detail appetite]

[Options or details if decision-oriented, formatted as bullets]

**Ask:** [Specific CTA with deadline]

[Appropriate sign-off based on relationship]
```

## Quality Standards
- Subject line previews the core message — recipient knows the gist before opening.
- BLUF paragraph works standalone — if they read nothing else, they get the message.
- Tone matches the relationship and recipient's style. Not one-size-fits-all.
- CTA is specific: who does what by when. Not "let me know your thoughts."
- **Anti-patterns:** Generic tone ignoring persona, burying the ask, passive-aggressive framing, over-explaining to execs, under-explaining to detail-oriented stakeholders, "per my last email."

## Framework References
- BLUF (Bottom Line Up Front) — military-origin communication clarity
- SBI (Situation-Behavior-Impact) for feedback-related emails
- Recipient persona mapping from `context/people/`

## Formatting Guidelines
- Short paragraphs (2-4 sentences). No walls of text.
- Bold the ask and any deadlines. Use bullets for options or lists.
- Match the recipient's typical email length — don't send an essay to a one-liner.
- Subject lines: max 8-10 words, action-oriented.

## Example
> **Subject:** Need your sign-off on API pricing tier by Friday
>
> Sarah,
>
> The API pricing proposal is ready for your review. We're recommending a usage-based model at $0.002/call with a 10K free tier — this balances developer adoption (our #1 growth lever) with monetization of high-volume enterprise users.
>
> Key trade-off: a higher free tier slows revenue but our modeling shows it 3x's developer activation, which drives enterprise pipeline.
>
> **Ask:** Can you approve or flag concerns by Friday EOD? Eng needs to start metering work Monday to hit the Q3 launch.
