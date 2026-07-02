# Email Composer

## Purpose
Composes professional emails using the BLUF (Bottom Line Up Front) method — with clear subject lines, structured body content, and audience-adapted tone — for effective asynchronous communication across organizational contexts.

## Auto-Trigger Patterns
- "Write an email to…"
- "Draft an email about…"
- "Compose an email for…"
- "Email template for…"
- Any request involving professional email communication

## Tool Configuration
Requires `context/integrations/email.md` with: SMTP server or email API (Gmail API, Outlook Graph API). Auth: OAuth 2.0 with email send scope. For templates: access to shared template library if applicable.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Topic/purpose, recipient type (executive, peer, external partner, customer, team)
- **Optional:** Tone (formal, collaborative, urgent), CTA, attachments, CC/BCC guidance, reply context

## Process
1. Identify the recipient persona and adapt tone accordingly.
2. Write a subject line: specific, actionable, under 60 characters.
3. Open with BLUF — the key message or ask in the first sentence.
4. Structure the body: context, details, supporting data.
5. Include a clear CTA (Call to Action) with a deadline if applicable.
6. Close with appropriate sign-off matching the relationship.
7. Add CC/BCC guidance based on organizational norms.
8. Review for length — aim for under 200 words for action emails.

## Output Format

### Standard Professional Email
```
Subject: [Action verb] [Specific topic] — [Context/deadline]

Hi [Name],

[BLUF: The key message or request in 1-2 sentences.]

[Context paragraph: Background needed to understand the ask — keep brief.]

[Details/options if applicable:]
• [Point 1]
• [Point 2]
• [Point 3]

[CTA: Specific action + deadline]
Could you [specific action] by [date]?

[Closing line — offer, thanks, or next step]

Best,
[Your name]
```

### Executive Summary Email
```
Subject: [Decision needed]: [Topic] by [date]

[Name],

**Ask:** [One sentence — what you need from them.]

**Context:** [2-3 sentences max.]

**Options:**
1. [Option A] — [Pro/con in 5 words]
2. [Option B] — [Pro/con in 5 words]

**Recommendation:** Option [X] because [reason].

**Timeline:** Decision needed by [date] to meet [milestone].

[Name]
```

### Stakeholder Update Email
```
Subject: [Project] Update — [Status: On Track/At Risk] — [Date]

Hi [Team/Name],

**Status:** [On Track | At Risk | Blocked]
**Summary:** [1 sentence]

**Progress since last update:**
• [Achievement 1]
• [Achievement 2]

**Upcoming:**
• [Next milestone] — [Date]

**Risks/Blockers:**
• [Risk] — Mitigation: [plan]

**Action needed:** [If any, with owner and deadline]

[Name]
```

## Quality Standards
- Subject lines enable inbox triage — recipients know the topic and urgency from subject alone.
- BLUF is always first — busy readers may only read the first sentence.
- Emails requesting action include a specific ask with a deadline.
- Length matches importance — routine updates: under 150 words; complex decisions: under 300.
- Tone adapts to the relationship — formal for external/executive, conversational for peers.
- No passive-aggressive language, unnecessary CCs, or reply-all traps.

## Permissions Required
Email account access. Distribution list management for broadcast emails.

## Example
```
Subject: Approve Q3 budget increase ($40K) by May 28

Hi Jordan,

We need an additional $40K in Q3 budget to support the analytics
infrastructure migration, which unblocks the data platform team.

The original estimate missed the cost of the new Snowflake tier
($25K) and contractor support for migration ($15K). Without this,
the data platform launch slips from August to October.

Could you approve the budget adjustment by May 28 so we can
lock in the contractor?

Happy to walk through the breakdown — I have time Thursday 2-3pm.

Thanks,
Alex
```
