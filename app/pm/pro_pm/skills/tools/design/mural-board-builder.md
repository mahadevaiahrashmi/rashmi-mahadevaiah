# MURAL Board Builder

## Purpose
Creates MURAL boards with structured areas, sticky notes, frameworks, facilitation guides, and timer settings — designed for collaborative workshops, design thinking sessions, and strategic planning exercises.

## Auto-Trigger Patterns
- "Build a MURAL board"
- "Create a MURAL template for…"
- "Set up a MURAL workshop"
- "MURAL board for [activity type]"
- "Design a collaborative board in MURAL"

## Tool Configuration
Requires `context/integrations/mural.md` with: MURAL workspace URL, API key or OAuth token. Auth: OAuth 2.0 with mural:write scope. Workspace membership required.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Workshop/activity purpose, participant count, activity type
- **Optional:** Framework choice, time allocation, facilitation script, template base, integration needs

## Process
1. Define the workshop flow and select appropriate frameworks.
2. Create areas (MURAL's organizational unit) for each activity.
3. Design layouts with sticky note zones, text boxes, and shapes.
4. Add framework templates: empathy maps, business model canvas, SWOT, etc.
5. Configure facilitation features: timers, voting, summoning, private mode.
6. Write facilitation instructions within each area.
7. Set up warm-up/icebreaker area.
8. Configure permissions and sharing.

## Output Format
```
# MURAL Board: [Title]

## Workshop Overview
- **Purpose:** [Goal of the session]
- **Duration:** [Total time]
- **Participants:** [Count and roles]
- **Facilitator:** [Name]

## Areas

### Area 1: Welcome & Icebreaker — [5-10 min]
**Content:**
- Workshop agenda and objectives
- Icebreaker prompt: "[Question]"
- Parking lot zone for off-topic items

### Area 2: [Framework/Activity] — [X min]
**Framework:** [Empathy Map | SWOT | Journey Map | etc.]
**Layout:**
- [Section 1]: [Label and purpose]
- [Section 2]: [Label and purpose]
- [Section 3]: [Label and purpose]
- [Section 4]: [Label and purpose]

**Facilitation Notes:**
- Start with individual brainstorming (private mode: 5 min)
- Share out and discuss (10 min)
- Group and theme (5 min)

### Area 3: [Prioritization Activity] — [X min]
**Method:** [Voting | Effort-Impact Matrix | Priority Poker]
**Setup:**
- Voting: [X dots per person]
- Timer: [X minutes for voting]

### Area 4: Action Planning — [X min]
**Format:** Action item cards
**Fields:** Action | Owner | Timeline | Resources Needed

## Facilitation Script
| Time | Activity | Facilitator Action | Participant Action |
|---|---|---|---|
| 0:00 | Welcome | Present objectives | Listen |
| 0:05 | Icebreaker | Launch timer | Add stickies |
| 0:10 | [Activity] | Enable private mode | Individual brainstorm |
| 0:15 | Share out | Summon to area | Present stickies |
| 0:25 | Grouping | Guide theming | Cluster stickies |
| 0:35 | Voting | Start vote | Place dots |
| 0:40 | Actions | Facilitate | Create action cards |
| 0:50 | Close | Summarize | Confirm actions |

## Board Settings
- **Private mode:** Available for individual brainstorming
- **Timer:** Pre-set for each activity
- **Voting:** Configured with [X] votes
- **Summoning:** Enabled for facilitator
- **Outline:** Matches area sequence
```

## Quality Standards
- Areas flow logically from divergent to convergent thinking.
- Facilitation script includes both facilitator and participant actions.
- Private mode is used for individual ideation before group sharing.
- Timers are pre-configured to maintain workshop pace.
- Frameworks are complete with all required sections labeled.
- Action planning area ensures workshop outputs are captured.

## Permissions Required
MURAL workspace member with room creation access. Facilitator role for timer and summoning controls.

## Example
A design thinking workshop board with 5 areas: (1) Icebreaker with "How Might We" prompt, (2) Empathy Map with 4 quadrants, (3) Ideation wall with sticky note zones, (4) Effort-Impact matrix for prioritization with dot voting, (5) Action plan cards. Full facilitation script for a 90-minute session with timed transitions.
