# Partner Communication

## Purpose
Draft partner-facing communications including joint product updates, integration changes, co-marketing opportunities, and partnership status reports. Balances transparency with competitive sensitivity, maintaining trust while protecting strategic information.

## Auto-Trigger Patterns
- "Write a partner communication" / "partner update"
- "Draft a message for [partner name]"
- "Integration change notice for partners"
- "Co-marketing communication with [partner]"
- "Partner status report"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Partner name/context, communication type, key message, desired partner action
- **Optional:** Partnership agreement context, competitive sensitivities, prior partner communications
- **Reference:** `context/people/` for partner contact personas, partnership agreements for contractual context

## Process
1. **Assess the communication type** — Product update, integration change, co-marketing, escalation, or status report. Each has different tone and guardrails.
2. **Review competitive sensitivity** — What can be shared? Roadmap details, customer numbers, and strategic direction need scrutiny. Default to sharing less with more context.
3. **Frame for mutual value** — Partners care about: How does this affect our integration? Our mutual customers? Our revenue? Lead with shared benefit.
4. **Be specific on technical impact** — Integration changes need: what's changing, migration path, timeline, breaking vs non-breaking, support during transition.
5. **Maintain professional warmth** — Partner relationships are business relationships with personal trust layers. Be professional but not corporate.
6. **Include clear next steps** — Who does what, by when. Don't leave the partner guessing.
7. **Review for information leakage** — Before sending, check: Would we be comfortable if a competitor saw this? If not, trim.

## Output Format
```
## Partner Communication: [Topic]
**Partner:** [Name] | **Type:** [Update/Change/Opportunity/Status]
**Sensitivity:** [Low/Medium/High] | **Date:** [Date]

### Summary
[2-3 sentences — what this communication is about and why it matters to the partnership]

### Details
[Specifics of the update, change, or opportunity — tailored to what the partner needs to know]

### Impact on Partnership
- **For mutual customers:** [How this affects shared customers]
- **For integration:** [Technical impact, if any]
- **For revenue:** [Revenue implications, if appropriate to share]

### Next Steps
| Action | Owner | Deadline |
|--------|-------|----------|
| [Action 1] | [Us/Them] | [Date] |
| [Action 2] | [Us/Them] | [Date] |

### Information Boundary Notes
[Internal only — what NOT to share and why]
```

## Quality Standards
- Mutual value is explicit — partners should see benefit, not just be informed of your changes.
- Technical details for integration changes are precise enough for their engineering team to act on.
- Competitive sensitivities are considered — roadmap details, customer counts, and strategic pivots are shared only when contractually required or strategically beneficial.
- Next steps have clear owners and deadlines on both sides.
- **Anti-patterns:** Over-sharing roadmap details, being so vague the partner can't act, treating partners as vendors, no clear next steps, one-sided communication that only serves your needs.

## Framework References
- Partnership value exchange — what each party gives and gets
- RACI for joint initiatives — clear ownership across organizations
- Information classification — what's shareable vs confidential

## Formatting Guidelines
- Professional tone — warm but not overly casual.
- Use a table for joint action items.
- Include an internal-only "information boundary" section that doesn't go to the partner.
- Keep communications concise — partners are busy too.

## Example
> **Summary:** We're upgrading our webhook infrastructure on July 15. This will improve reliability (99.95% → 99.99% SLA) and add support for event filtering, which your team has requested.
>
> **Impact:** Your existing webhook integration will continue working without changes. The new event filtering capability will be available via a new API parameter — documentation draft attached for your review.
>
> **Next Steps:** We'll send you API docs by June 1. Your team reviews and flags any concerns by June 15. We do a joint integration test the week of June 22.
