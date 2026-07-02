# Change Management Communications

## Purpose
Create a phased communication plan for process, product, or organizational changes. Covers why the change is happening, what's changing, what stays the same, impact per audience, timeline, FAQ, and support resources. Designed to reduce anxiety, build understanding, and drive adoption.

## Auto-Trigger Patterns
- "Write change management comms" / "communication plan for [change]"
- "How do I communicate this org/process/product change?"
- "Draft comms for [migration/restructure/process change]"
- "Change announcement for [topic]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Nature of the change, reason for the change, affected audiences, timeline
- **Optional:** Change severity, prior change attempts, resistance signals, executive sponsor
- **Reference:** `context/people/` for audience personas, `context/team/` for team structure

## Process
1. **Classify the change** — Scope (team/org/company), severity (minor/significant/transformational), reversibility (easy/hard/permanent). This determines communication intensity.
2. **Map affected audiences** — List every group impacted, from most to least affected. Each group gets tailored messaging.
3. **Craft the "why"** — Honest, specific reasoning. Not "to better serve our customers" but the actual strategic/operational reason.
4. **Name what stays the same** — Change creates fear. Explicitly calling out continuity reduces anxiety.
5. **Define the timeline** — Phase the communication: pre-announcement (to leaders), announcement (to all), follow-up (support), and reinforcement (post-change).
6. **Build per-audience impact** — Each group hears: what changes for you, what doesn't, what you need to do, where to get help.
7. **Write the FAQ** — Anticipate real concerns, not just easy questions. Include the hard ones.
8. **Plan the cascade** — Leaders hear first so they can support their teams. Don't let anyone be surprised.

## Output Format
```
## Change Communication Plan: [Change Name]
**Type:** [Process/Product/Org] | **Severity:** [Minor/Significant/Transformational]
**Sponsor:** [Executive sponsor] | **Effective:** [Date]

### Why This Change
[Honest, specific reasoning — 2-3 sentences]

### What's Changing
- [Change 1 — specific and concrete]
- [Change 2]

### What Stays the Same
- [Continuity point 1 — explicitly named]
- [Continuity point 2]

### Communication Phases
| Phase | Audience | Channel | Timing | Owner |
|-------|----------|---------|--------|-------|
| Pre-announce | Leadership | 1:1s | [Date] | [Name] |
| Announce | All affected | Email + meeting | [Date] | [Name] |
| Follow-up | Teams | Team meetings | [Date+1w] | Managers |
| Reinforce | All | Check-in survey | [Date+1m] | [Name] |

### Impact by Audience
#### [Audience 1]
- What changes: [Specific impact]
- What you need to do: [Actions]
- Support: [Resources]

### FAQ
**Q: [Hard question]**
A: [Honest answer]

### Support Resources
- [Resource 1 with link]
- [Point of contact]
```

## Quality Standards
- "Why" is honest and specific — not corporate euphemisms. People detect spin.
- "What stays the same" is included — this is the most often skipped and most anxiety-reducing section.
- Communication cascade ensures leaders hear first so they can support their teams.
- FAQ includes at least 2-3 uncomfortable questions with honest, empathetic answers.
- **Anti-patterns:** Announcing to everyone simultaneously (leaders feel blindsided), vague "why" messaging, no mention of what stays the same, no support plan, treating communication as a one-time event rather than a phased campaign.

## Framework References
- ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement) — Prosci change management
- Kotter's 8-Step Change Model — creating urgency, building coalition
- Communication cascade model — leaders first, then teams

## Formatting Guidelines
- Timeline table for communication phases — makes the cascade visible.
- Separate sections per audience for impact.
- Bold questions in FAQ for scannability.
- Keep each phase's communication under 500 words — people don't read walls of text during change.

## Example
> **Why:** Our support ticketing system is moving from Zendesk to Intercom. Zendesk's enterprise pricing increased 40% at renewal and doesn't support the in-app messaging strategy we're building toward.
>
> **What Stays the Same:** Your existing macros and saved replies will be migrated. SLAs stay identical. Your team structure and routing rules carry over.
>
> **FAQ — "Will I lose my ticket history?"** No. All tickets from the last 24 months will be migrated with full conversation history. Older tickets will be archived and searchable.
