# Teams Meeting Prep

## Purpose
Prepares Microsoft Teams meetings with structured agendas, collaborative notes, whiteboard setups, task assignments, and recording/transcript configurations — leveraging Teams' native features for productive meetings within the Microsoft 365 ecosystem.

## Auto-Trigger Patterns
- "Prepare a Teams meeting"
- "Set up a Microsoft Teams call"
- "Plan a Teams meeting for…"
- "Teams meeting agenda and notes"
- "Configure Teams meeting for…"

## Tool Configuration
Requires `context/integrations/microsoft365.md` with: Teams tenant, calendar API access, Graph API credentials. Auth: OAuth 2.0 with Calendars.ReadWrite and OnlineMeetings.ReadWrite scopes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Meeting purpose, attendees, duration
- **Optional:** Collaborative notes template, whiteboard needs, breakout room plan, recording preferences, Planner task integration

## Process
1. Create the meeting with agenda in the calendar invite body.
2. Set up collaborative Meeting Notes (Loop component or OneNote).
3. Prepare the Teams Whiteboard if visual collaboration is needed.
4. Configure breakout rooms for small-group work.
5. Set recording and transcription preferences.
6. Pre-assign tasks in connected Planner board.
7. Configure meeting options (lobby, presenters, reactions).
8. Prepare follow-up task creation workflow.

## Output Format
```
# Teams Meeting: [Title]

## Meeting Settings
- **Date/Time:** [Date, Time, Timezone]
- **Duration:** [X minutes]
- **Organizer:** [Name]
- **Channel:** [Team > Channel] (if channel meeting)
- **Recording:** [Enabled | Disabled]
- **Transcription:** [Enabled | Disabled]
- **Lobby:** [Everyone | Organization | Invited only]

## Agenda (in Calendar Invite)
[Meeting Title] — [Date]

**Objective:** [What we're deciding/accomplishing]

| Time | Topic | Lead |
|---|---|---|
| 0:00-0:05 | Opening & context | [Name] |
| 0:05-0:25 | [Discussion topic 1] | [Name] |
| 0:25-0:45 | [Discussion topic 2] | [Name] |
| 0:45-0:55 | Action items | [Name] |
| 0:55-1:00 | Wrap-up | [Organizer] |

**Pre-read:** [Link to SharePoint/OneNote doc]

## Meeting Notes Template (Loop/OneNote)
### Attendees
- [ ] [Name 1]
- [ ] [Name 2]

### Decisions
1. [Space for decisions]

### Discussion Notes
**[Topic 1]:**
- [Notes]

**[Topic 2]:**
- [Notes]

### Action Items
| Task | Assigned To | Due Date |
|---|---|---|
| | | |

### Parking Lot
- [Items for future discussion]

## Whiteboard Setup
- Frame 1: [Topic] — Sticky note brainstorm
- Frame 2: [Topic] — 2x2 matrix
- Frame 3: Parking lot

## Post-Meeting Workflow
1. Review and finalize Meeting Notes
2. Create Planner tasks from Action Items
3. Share recording link in channel
4. Post summary to channel with @mentions for action owners
```

## Quality Standards
- Meeting Notes are created before the meeting so attendees can contribute.
- Agendas include pre-read links so meetings start informed.
- Recording and transcription are set before the meeting starts.
- Channel meetings automatically make notes and recordings available to the channel.
- Post-meeting tasks are created in Planner/To Do for trackability.

## Permissions Required
Calendar access for meeting creation. Teams channel member for channel meetings. Meeting organizer for recording and lobby settings.

## Example
A 1-hour design review Teams meeting with: 5-item timed agenda in the invite, Loop component Meeting Notes with pre-filled sections, Teams Whiteboard with 2 prepared frames, recording enabled with transcription, and a post-meeting workflow that creates 3 Planner tasks from action items and posts the summary to the #design channel.
