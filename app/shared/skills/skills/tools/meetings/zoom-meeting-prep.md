# Zoom Meeting Prep

## Purpose
Prepares comprehensive Zoom meeting setups — agenda, breakout room plans, polling questions, whiteboard preparation, recording settings, and post-meeting follow-up templates — ensuring productive, well-structured virtual meetings.

## Auto-Trigger Patterns
- "Prepare a Zoom meeting"
- "Set up a Zoom call for…"
- "Plan breakout rooms for Zoom"
- "Zoom meeting agenda and setup"
- "Prepare for our Zoom [meeting type]"

## Tool Configuration
Requires `context/integrations/zoom.md` with: Zoom account, meeting API access, OAuth or JWT credentials. Auth: OAuth 2.0 with meeting:write scope. Licensed account for breakout rooms and polling.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Meeting purpose, attendee list, duration
- **Optional:** Breakout room needs, polling questions, whiteboard template, recording preferences, pre-read materials

## Process
1. Define the meeting objective and desired outcomes.
2. Build a timed agenda with owner per section.
3. Plan breakout rooms if small-group work is needed.
4. Draft polling questions for real-time input gathering.
5. Prepare whiteboard templates or Miro/FigJam boards.
6. Configure recording settings (cloud/local, auto-transcript).
7. Create the pre-meeting communication (calendar invite, pre-reads).
8. Prepare the follow-up template (decisions, action items, recording link).

## Output Format
```
# Zoom Meeting: [Meeting Title]

## Logistics
- **Date/Time:** [Date, Time, Timezone]
- **Duration:** [X minutes]
- **Host:** [Name]
- **Attendees:** [List or count]
- **Meeting Link:** [Zoom URL]
- **Recording:** [Cloud | Local | None]
- **Passcode:** [If applicable]

## Objective
[1 sentence: what success looks like at the end of this meeting]

## Agenda
| Time | Topic | Owner | Format |
|---|---|---|---|
| 0:00-0:05 | Welcome & context | [Host] | Presentation |
| 0:05-0:20 | [Topic 1] | [Name] | Discussion |
| 0:20-0:35 | [Topic 2] | [Name] | Breakout rooms |
| 0:35-0:50 | [Topic 3] | [Name] | Whiteboard |
| 0:50-0:55 | Decisions & actions | [Host] | Wrap-up |
| 0:55-1:00 | Parking lot & close | [Host] | — |

## Breakout Rooms
| Room | Participants | Topic | Duration |
|---|---|---|---|
| Room 1 | [Names] | [Discussion topic] | 10 min |
| Room 2 | [Names] | [Discussion topic] | 10 min |
**Debrief:** 5 min full group — each room shares top insight

## Polling Questions
1. [Question] — Options: [A, B, C]
2. [Question] — Options: [Scale 1-5]
3. [Question] — Options: [Yes, No, Need more info]

## Pre-Meeting
- [ ] Send agenda 24h before
- [ ] Share pre-read: [Document link]
- [ ] Test screen share and whiteboard
- [ ] Assign note-taker: [Name]

## Follow-Up Template
**Subject:** [Meeting Title] — Decisions & Action Items

**Decisions Made:**
1. [Decision]

**Action Items:**
| Action | Owner | Due |
|---|---|---|
| [Action] | [Name] | [Date] |

**Recording:** [Link]
**Next Meeting:** [Date/Time]
```

## Quality Standards
- Every agenda item has a time box and an owner — no open-ended discussions.
- Breakout rooms have clear prompts and report-back expectations.
- Polling questions are concise with mutually exclusive options.
- Pre-meeting communication gives attendees time to prepare.
- Follow-up is sent within 24 hours with actionable items.

## Permissions Required
Zoom Licensed account for breakout rooms, polling, and cloud recording. Meeting host role.

## Example
A 60-minute quarterly planning Zoom with: 6-item timed agenda, 3 breakout rooms for team-specific prioritization, 2 polls (confidence vote and priority ranking), pre-shared strategy doc, designated note-taker, and a follow-up template capturing 4 decisions and 8 action items.
