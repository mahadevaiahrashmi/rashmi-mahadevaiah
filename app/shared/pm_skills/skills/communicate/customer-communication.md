# Customer Communication

## Purpose
Draft customer-facing communications — changelogs, incident apologies, migration notices, feature announcements, and deprecation alerts. Every communication is empathetic, clear, and action-oriented: what changed, why, what it means for the customer, and exactly what they need to do.

## Auto-Trigger Patterns
- "Write a customer communication" / "customer email"
- "Draft a changelog entry" / "release notes"
- "Write an apology for [incident]" / "incident communication"
- "Migration notice for [change]" / "deprecation announcement"
- "Feature announcement for [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Communication type (changelog/apology/migration/announcement), the change or event, customer impact
- **Optional:** Customer segment targeting, severity/urgency, prior related communications, support resources
- **Reference:** `context/initiatives/` for feature context, product documentation for technical details

## Process
1. **Classify the communication type** — Changelog, feature announcement, incident/apology, migration/deprecation, or breaking change. Each has a different tone and structure.
2. **Assess customer impact** — Who is affected? How severely? What breaks, changes, or improves for them?
3. **Lead with empathy** — Acknowledge the customer's experience first. For incidents: own it. For changes: acknowledge the disruption. For features: celebrate the value.
4. **Be transparent on "why"** — Customers trust companies that explain reasoning, not just announce decisions.
5. **Make actions crystal clear** — Numbered steps for what the customer needs to do. Links to docs/support.
6. **Provide timeline** — When does this take effect? Any grace period? Migration deadlines?
7. **Offer help** — Support channels, office hours, migration guides, dedicated contacts for enterprise.
8. **Review for tone** — Read it as a frustrated customer would. Does it feel human? Does it help?

## Output Format
```
## [Communication Type]: [Title]

**Affected:** [Who is impacted] | **Action Required:** Yes/No | **Effective:** [Date]

### What Changed
[Clear, plain-language description of the change or event]

### Why
[Honest explanation of the reasoning — don't hide behind "to serve you better"]

### What This Means for You
[Specific impact on the customer's workflow, data, or experience]

### What You Need to Do
1. [Step 1 with link if applicable]
2. [Step 2]
3. [Step 3]

**Deadline:** [If applicable]

### Need Help?
- [Support channel with hours]
- [Documentation link]
- [Dedicated contact for enterprise/high-impact customers]
```

## Quality Standards
- "What you need to do" section is numbered steps, not prose. A customer should be able to follow it without re-reading.
- "Why" section is honest and specific — not corporate-speak. "We're consolidating two systems to improve reliability" beats "to enhance your experience."
- Tone matches the situation — apologetic for incidents, celebratory for features, respectful for deprecations.
- No blame-shifting. For incidents: "We experienced X" not "Due to circumstances beyond our control."
- **Anti-patterns:** Burying breaking changes in feature announcements, "we apologize for any inconvenience" (vague, dismissive), no action steps, no timeline, passive voice to avoid accountability.

## Framework References
- Empathy-first communication — acknowledge before informing
- Plain language principles — write at the customer's level, not your internal level

## Formatting Guidelines
- Headers in plain language, not internal jargon.
- Bold deadlines and required actions.
- Include direct links — don't make customers search.
- Keep under 300 words for routine updates; up to 500 for complex migrations/incidents.

## Example
> **What Changed:** On June 15, we experienced a 47-minute outage affecting dashboard loading for users in the EU region.
>
> **Why:** A database migration triggered an unexpected lock on a key table. Our monitoring caught it at minute 12, but the rollback procedure took longer than our target.
>
> **What This Means for You:** If you accessed your dashboard between 2:14 PM and 3:01 PM UTC on June 15, you may have seen errors or stale data. No data was lost.
>
> **What You Need to Do:** Nothing — service is fully restored. If you notice any data discrepancies, contact support@example.com.
>
> **What We're Doing:** We've added automated lock detection and reduced our rollback time from 35 to under 5 minutes.
