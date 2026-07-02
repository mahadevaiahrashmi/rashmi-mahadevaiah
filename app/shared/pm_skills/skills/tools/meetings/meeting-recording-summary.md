# Meeting Recording Summary

## Purpose
Summarizes meeting recordings or transcripts into structured notes — extracting key decisions, action items with owners and deadlines, discussion topics, unresolved questions, and follow-up needs — turning hour-long meetings into actionable 2-minute reads.

## Auto-Trigger Patterns
- "Summarize this meeting recording"
- "Extract action items from the transcript"
- "Meeting notes from recording"
- "What was decided in this meeting?"
- "Create notes from this meeting transcript"

## Tool Configuration
Requires `context/integrations/meeting-tools.md` with: Access to recording/transcript source (Zoom, Teams, Google Meet, Otter.ai, Fireflies.ai). Auth: API access to the transcription service with read permissions.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Meeting transcript or recording URL
- **Optional:** Meeting agenda (for structure alignment), attendee roles, context on topics discussed, priority areas to focus on

## Process
1. Parse the transcript chronologically, identifying speakers and topics.
2. Extract decisions — statements where a choice was made or direction was set.
3. Identify action items — commitments with who, what, and when.
4. Summarize each discussion topic — the key points and positions.
5. Flag unresolved questions — items raised but not answered.
6. Note follow-up needs — items requiring future meetings or offline work.
7. Capture any notable quotes or important context.
8. Format into a scannable summary document.

## Output Format
```
# Meeting Summary: [Meeting Title]
**Date:** [Date] | **Duration:** [X min] | **Attendees:** [Names]

## TL;DR
[2-3 sentence executive summary of the most important outcomes]

## Decisions Made
| # | Decision | Context | Owner |
|---|---|---|---|
| D1 | [What was decided] | [Brief rationale] | [Who owns it] |
| D2 | [What was decided] | [Brief rationale] | [Who owns it] |

## Action Items
| # | Action | Owner | Due Date | Status |
|---|---|---|---|---|
| A1 | [Specific action] | [Name] | [Date] | Open |
| A2 | [Specific action] | [Name] | [Date] | Open |
| A3 | [Specific action] | [Name] | [Date] | Open |

## Discussion Summary

### [Topic 1] (MM:SS - MM:SS)
**Key Points:**
- [Point raised by Name]
- [Counterpoint by Name]
- [Resolution or next step]

### [Topic 2] (MM:SS - MM:SS)
**Key Points:**
- [Point]
- [Point]

## Unresolved Questions
- [Question raised but not answered] — Needs input from [Name/Team]
- [Question] — To be discussed at [next meeting]

## Follow-Up Needed
- [ ] [Follow-up item] — [Owner]
- [ ] [Follow-up item] — [Owner]

## Parking Lot
- [Item deferred to future discussion]

## Recording
[Link to recording]
```

## Quality Standards
- Decisions are captured as clear statements, not discussion summaries.
- Action items are specific, assigned, and dated — no vague "we should…" items.
- Discussion summaries capture the substance without transcribing the conversation.
- Unresolved questions are explicitly called out, not buried in discussion notes.
- TL;DR enables someone who missed the meeting to get the essentials in 30 seconds.
- Timestamps reference the recording for context when available.

## Permissions Required
Access to meeting recording/transcript. Sharing permissions for the summary document.

## Example
A 45-minute product planning meeting summarized into: 3-sentence TL;DR, 4 decisions (feature priorities for Q3), 6 action items with owners and due dates, 3 discussion topics with key points, 2 unresolved questions flagged for the next meeting, and a recording link.
