# PowerPoint Builder

## Purpose
Creates PowerPoint presentations with slide master guidance, layout selection, animation planning, and presenter view setup — optimized for the Microsoft 365 ecosystem with enterprise formatting standards.

## Auto-Trigger Patterns
- "Create a PowerPoint deck"
- "Build a PPT presentation"
- "PowerPoint for…"
- "Slide deck in PowerPoint"
- "Microsoft presentation for…"

## Tool Configuration
Requires `context/integrations/microsoft365.md` with: Microsoft 365 account, PowerPoint access. Auth: OAuth 2.0 with Files.ReadWrite scope for OneDrive/SharePoint-hosted files.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Presentation topic, audience, key message
- **Optional:** Corporate template (.potx), slide master, SmartArt needs, chart data, animation plan

## Process
1. Select or apply the corporate slide master template.
2. Define the presentation structure and slide sequence.
3. Choose appropriate slide layouts from the master.
4. Plan content for each slide with layout-specific formatting.
5. Recommend SmartArt and chart types for data visualization.
6. Configure animations and transitions purposefully.
7. Set up presenter view with notes and timings.
8. Export and sharing considerations (PDF, read-only, co-authoring).

## Output Format
```
# PowerPoint: [Title]

## Template & Master
- **Template:** [Corporate template name or default]
- **Slide Master:** [Master name]
- **Color Theme:** [Theme name]
- **Font Theme:** [Heading / Body fonts]

## Slide Sequence

### Slide 1: Title Layout
- **Title:** "[Presentation title]"
- **Subtitle:** "[Presenter | Date | Event]"
- **Notes:** "[Opening remarks — 30 seconds]"

### Slide 2: Section Header Layout
- **Title:** "[Section name]"
- **Notes:** "[Transition into first content section]"

### Slide 3: Two Content Layout
- **Left:** [Bullet points — 3 max]
- **Right:** [SmartArt: Process diagram]
- **Animation:** Appear on click, left column first
- **Notes:** "[Talking points for each bullet]"

### Slide 4: Chart Layout
- **Chart Type:** [Clustered Bar | Line | Pie]
- **Data:** [Source and key data points]
- **Animation:** Chart elements by series
- **Notes:** "[Key data narrative]"

### Slide N: Closing Layout
- **Title:** "[Summary or CTA]"
- **Content:** [Key takeaways — 3 bullets]
- **Notes:** "[Closing statement and next steps]"

## SmartArt Recommendations
| Slide | SmartArt Type | Content |
|---|---|---|
| 3 | Basic Process | [Step 1 → Step 2 → Step 3] |
| 5 | Hierarchy | [Org structure or taxonomy] |
| 7 | Matrix | [2x2 comparison] |

## Animation Plan
| Slide | Element | Animation | Trigger |
|---|---|---|---|
| 3 | Left bullets | Fade | On Click |
| 3 | Right SmartArt | Wipe | After Previous |
| 4 | Chart | Appear by Series | On Click |
- **Transitions:** Fade between all slides, 0.5s

## Presenter View
- Enable speaker notes display
- Rehearse Timings: [Target time per slide]
- Slide Show: From beginning, windowed for Teams sharing
- Laser pointer: Ctrl+L during presentation

## Sharing
- Co-authoring: [OneDrive/SharePoint link]
- Export: PDF for distribution, PPTX for editing
- Permissions: [Edit / View only]
```

## Quality Standards
- Slide layouts are from the master — no manual formatting overrides.
- Animations serve comprehension, not decoration — max 2 per slide.
- SmartArt is used for structured content, not for styling plain text.
- Presenter notes include timing guidance for pacing.
- File is co-authoring ready if collaborative editing is needed.

## Permissions Required
Microsoft 365 license with PowerPoint access. SharePoint/OneDrive access for shared files.

## Example
A quarterly business review deck with 15 slides: corporate template applied, 4 section headers, 2 SmartArt diagrams (process flow and matrix), 3 Excel-linked charts (revenue trend, regional comparison, pipeline), purposeful click-to-appear animations on data slides, rehearsed at 2 minutes per slide (30 min total), published to SharePoint with view-only access for the extended team.
