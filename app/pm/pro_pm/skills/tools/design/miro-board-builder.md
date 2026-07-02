# Miro Board Builder

## Purpose
Creates structured Miro boards with frames, sticky notes, connections, and voting setups — providing templates for brainstorms, retrospectives, journey maps, and affinity diagrams with facilitation-ready layouts.

## Auto-Trigger Patterns
- "Build a Miro board for…"
- "Create a Miro template"
- "Set up a Miro brainstorm"
- "Miro board for retro/workshop"
- "Design a Miro collaboration board"

## Tool Configuration
Requires `context/integrations/miro.md` with: Miro team ID, board ID or create permissions, OAuth token. Auth: OAuth 2.0 with board:write scope.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Board purpose, activity type (brainstorm, retro, journey map, affinity diagram, workshop)
- **Optional:** Participant count, time allocation, facilitation notes, voting configuration, template base

## Process
1. Select the board template type and overall layout.
2. Create frames for each activity section.
3. Populate with starter content: prompts, categories, instructions.
4. Set up voting if prioritization is needed.
5. Add timer widgets for time-boxed activities.
6. Configure connection lines or grouping zones.
7. Write facilitation instructions on the board.
8. Set permissions for participants.

## Output Format
```
# Miro Board: [Board Title]

## Board Setup
- **Template:** [Custom / Start from blank]
- **Participants:** [Count]
- **Duration:** [Estimated time]
- **Facilitation Mode:** [Guided | Self-serve]

## Frame Layout

### Frame 1: [Activity Name] — [Time allocation]
**Purpose:** [What this activity accomplishes]
**Layout:** [Grid | Freeform | Columns | Matrix]
**Content:**
- Prompt: "[Facilitation question or instruction]"
- Sticky note colors: [Color = meaning mapping]
  - Yellow: Ideas
  - Blue: Questions
  - Pink: Concerns
  - Green: Opportunities
- Pre-populated stickies: [Any starter content]

### Frame 2: [Activity Name] — [Time allocation]
**Purpose:** [What this activity accomplishes]
**Layout:** [2x2 matrix / Columns / Timeline]
**Axes or Headers:**
- [Column/Axis 1]: [Label]
- [Column/Axis 2]: [Label]

### Frame 3: Voting & Prioritization — [Time allocation]
**Method:** [Dot voting | Effort-Impact matrix | MoSCoW]
**Votes per person:** [Number]
**Instructions:** "[How to vote]"

### Frame 4: Action Items — [Time allocation]
**Format:** [Table or sticky notes]
**Columns:** What | Who | When | Status

## Facilitation Guide
1. [Step 1]: [Instruction] — [X minutes]
2. [Step 2]: [Instruction] — [X minutes]
3. [Step 3]: [Instruction] — [X minutes]
4. [Step 4]: [Instruction] — [X minutes]

## Board Settings
- **Access:** [Team members | Anyone with link]
- **Editing:** [Can edit | Can comment | Can view]
- **Voting:** [Enabled — X votes per person]
```

## Quality Standards
- Frames are ordered left-to-right following the activity flow.
- Instructions are on the board, not just in a separate doc.
- Sticky note color meanings are documented on the board.
- Voting rules are clear before voting begins.
- Action items frame ensures outputs are captured, not just discussed.
- Board isn't overcrowded — white space aids visual clarity.

## Permissions Required
Miro team member with board creation access. Team admin for template saving.

## Example
A retrospective board with 4 frames: (1) "What went well" green stickies + "What didn't" pink stickies in two columns, (2) "Root causes" affinity grouping zone, (3) Dot voting on grouped themes (3 votes each), (4) Action items table with Owner/Due/Status. Facilitation guide for 60-minute session with timing per frame.
