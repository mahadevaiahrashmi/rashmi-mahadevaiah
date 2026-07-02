# Google Meet Prep

## Purpose
Prepares Google Meet sessions with agendas embedded in Calendar events, collaborative notes in Google Docs, and post-meeting action item workflows — using Google Workspace's integrated toolset for seamless meeting management.

## Auto-Trigger Patterns
- "Prepare a Google Meet"
- "Set up a meeting with Google Meet"
- "Plan a video call"
- "Google Meet agenda and notes"
- "Prepare for our meeting" (when Google Workspace is the primary tool)

## Tool Configuration
Requires `context/integrations/google-workspace.md` with: Google Workspace domain, Calendar and Docs API access. Auth: OAuth 2.0 with calendar.events and docs scopes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Meeting purpose, attendees, duration
- **Optional:** Notes doc template, pre-read materials, recording preferences, follow-up workflow

## Process
1. Create Calendar event with embedded agenda and Google Meet link.
2. Create or link a Google Doc for collaborative meeting notes.
3. Add the notes doc link to the calendar event description.
4. Share pre-read materials in the calendar event or notes doc.
5. Configure recording settings (requires Workspace plan).
6. Prepare the notes doc with structure: attendees, agenda, discussion, actions.
7. Plan the post-meeting follow-up: action items, recording share, summary.

## Output Format
```
# Google Meet: [Meeting Title]

## Calendar Event
- **Title:** [Meeting Title]
- **Date/Time:** [Date, Time, Timezone]
- **Duration:** [X minutes]
- **Google Meet:** [Auto-generated link]
- **Guests:** [Attendee list]
- **Rooms:** [Conference room if hybrid]

## Calendar Description
[Meeting Title] — [Date]

**Objective:** [1 sentence goal]

**Agenda:**
1. [0:00-0:05] Welcome & context — [Name]
2. [0:05-0:20] [Topic 1] — [Name]
3. [0:20-0:40] [Topic 2] — [Name]
4. [0:40-0:55] [Topic 3] — [Name]
5. [0:55-1:00] Action items & close — [Name]

**Pre-read:** [Google Doc/Slides link]
**Meeting Notes:** [Google Doc link]

## Meeting Notes Doc Structure
# [Meeting Title] — [Date]

## Attendees
- [Name] (present/absent)

## Agenda & Discussion
### 1. [Topic]
**Presenter:** [Name]
**Notes:**
- [Discussion points]
**Decision:** [If any]

### 2. [Topic]
...

## Decisions Made
| # | Decision | Owner |
|---|---|---|
| 1 | [Decision] | [Name] |

## Action Items
| # | Action | Owner | Due Date |
|---|---|---|---|
| 1 | [Action] | [Name] | [Date] |

## Follow-Up
- Next meeting: [Date]
- Parking lot items: [List]

## Post-Meeting Checklist
- [ ] Finalize notes within 2 hours
- [ ] Share notes doc with all attendees
- [ ] Create Google Tasks/Calendar reminders for action items
- [ ] Share recording link (if recorded)
- [ ] Schedule follow-up meeting if needed
```

## Quality Standards
- Agenda is visible in the calendar event — no separate doc required to know the plan.
- Notes doc is linked in the event so all attendees can find it.
- Pre-reads are shared 24+ hours before the meeting.
- Action items are specific with owners and due dates.
- Notes are finalized and shared within 2 hours post-meeting.

## Permissions Required
Google Calendar access for event creation. Google Docs access for notes. Google Workspace Business/Enterprise for recording.

## Example
A 1-hour product review with: Calendar event containing a 5-item timed agenda and Meet link, shared Google Doc for notes with pre-filled structure, pre-read strategy doc linked in the invite, and a post-meeting workflow that produces 5 action items in Google Tasks and a summary shared to the team's Google Chat space.
