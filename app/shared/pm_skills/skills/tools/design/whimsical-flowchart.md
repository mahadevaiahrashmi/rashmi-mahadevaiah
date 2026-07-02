# Whimsical Flowchart

## Purpose
Creates structured diagrams in Whimsical — flowcharts, wireframes, mind maps, and sticky notes — outputting the diagram structure and content for clear visual communication of processes, decisions, and information architecture.

## Auto-Trigger Patterns
- "Create a flowchart in Whimsical"
- "Build a Whimsical diagram"
- "Map this process in Whimsical"
- "Whimsical wireframe for…"
- "Mind map this in Whimsical"

## Tool Configuration
Requires `context/integrations/whimsical.md` with: Whimsical workspace URL, API token. Auth: API token with workspace write access.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Process, workflow, or concept to diagram; diagram type
- **Optional:** Decision points, branching logic, swimlanes, wireframe screens, mind map topics

## Process
1. Select diagram type: Flowchart, Wireframe, Mind Map, Sticky Notes, Docs.
2. For flowcharts: map the process steps, decision points, and outcomes.
3. For wireframes: define screens, components, and navigation flow.
4. For mind maps: organize topics hierarchically from central concept.
5. Define connections and flow direction.
6. Add labels, annotations, and notes.
7. Organize layout for visual clarity and readability.
8. Add color coding for categorization if applicable.

## Output Format

### Flowchart
```
# Flowchart: [Process Name]

## Start
→ [Start event/trigger]

## Steps
1. [Action step] (Rectangle)
   → Decision: [Question?] (Diamond)
     - Yes → [Step 2a]
     - No → [Step 2b]

2a. [Action step]
   → [Step 3]

2b. [Action step]
   → Decision: [Question?] (Diamond)
     - [Option A] → [Step 3]
     - [Option B] → End: [Outcome B]

3. [Action step]
   → [Step 4]

4. [Final action]
   → End: [Success outcome]

## Swimlanes (if applicable)
| Lane | Actor | Steps |
|---|---|---|
| User | Customer | Steps 1, 2a |
| System | Backend | Steps 2b, 3 |
| Admin | PM | Step 4 |

## Color Coding
- Blue: Happy path
- Yellow: Decision points
- Red: Error/exception paths
- Green: Success endpoints
```

### Wireframe
```
# Wireframe: [Screen Name]

## Screen Layout
┌─────────────────────────┐
│ [Header / Navigation]   │
├─────────────────────────┤
│ [Hero / Main Content]   │
│                         │
│ [Component 1]           │
│ [Component 2]           │
│                         │
├─────────────────────────┤
│ [Footer / Actions]      │
└─────────────────────────┘

## Components
1. [Component]: [Description and behavior]
2. [Component]: [Description and behavior]

## Navigation
- [Action] → [Destination screen]
- [Action] → [Destination screen]
```

### Mind Map
```
# Mind Map: [Central Topic]

## [Branch 1]
- [Sub-topic 1a]
  - [Detail]
  - [Detail]
- [Sub-topic 1b]

## [Branch 2]
- [Sub-topic 2a]
- [Sub-topic 2b]
  - [Detail]
```

## Quality Standards
- Flowcharts have clear start and end points — no orphaned nodes.
- Decision diamonds have exactly 2-3 labeled outgoing paths.
- Wireframes show layout structure, not visual design.
- Mind maps maintain logical hierarchy — no more than 4 levels deep.
- Color coding is consistent and documented.
- Diagrams are readable at a glance — not overcrowded.

## Permissions Required
Whimsical workspace member with file creation access.

## Example
A user signup flowchart with: start trigger (user clicks "Sign Up"), 4 action steps (enter email, verify email, set password, complete profile), 2 decision diamonds (email exists? verification expired?), error paths for each failure, and success endpoint with color-coded happy path (blue) and error paths (red). Total: 8 nodes, 10 connections.
