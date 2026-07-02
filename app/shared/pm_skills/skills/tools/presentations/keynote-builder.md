# Keynote Builder

## Purpose
Creates Apple Keynote presentations with slide outlines, Magic Move transitions, build animations, and presenter display setup — leveraging Keynote's visual strengths for high-impact, design-forward presentations.

## Auto-Trigger Patterns
- "Create a Keynote presentation"
- "Build a deck in Keynote"
- "Keynote slides for…"
- "Apple presentation for…"
- "Design a Keynote deck"

## Tool Configuration
Requires `context/integrations/keynote.md` with: macOS/iCloud account. Auth: iCloud account for collaboration features. Keynote app on macOS, iPadOS, or iCloud.com.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Presentation topic, audience, visual style preference
- **Optional:** Keynote theme, Magic Move opportunities, build animations, presenter notes depth

## Process
1. Select a Keynote theme matching the presentation tone.
2. Design the slide sequence with a clear narrative arc.
3. Plan Magic Move transitions for visual storytelling.
4. Configure build animations (in/out) for progressive disclosure.
5. Write presenter notes with delivery guidance.
6. Set up presenter display: current slide, next slide, notes, timer.
7. Consider rehearsal mode for timing.
8. Plan export formats (Keynote, PDF, QuickTime movie).

## Output Format
```
# Keynote: [Title]

## Theme & Style
- **Theme:** [Theme name — e.g., Gradient, Modern Type, Showcase]
- **Aspect Ratio:** [16:9 | 4:3]
- **Color Palette:** [Primary, secondary, accent]
- **Typography:** [Headline font / Body font]

## Slide Outline

### Slide 1: Title — Photo Background
- **Title:** "[Presentation title]"
- **Subtitle:** "[Context]"
- **Build:** Title fades in, subtitle follows (0.5s delay)
- **Notes:** "[Opening hook — grab attention in 10 seconds]"

### Slide 2: Big Idea — Centered Statement
- **Content:** "[One powerful sentence — large type]"
- **Build:** Scale up from center
- **Transition to Slide 3:** Magic Move
- **Notes:** "[Pause for impact. Then transition.]"

### Slide 3: Detail — Magic Move Target
- **Content:** [Same text element repositioned + supporting details appear]
- **Build:** Supporting bullets appear on click
- **Notes:** "[Walk through each supporting point]"

### Slide 4: Data — Chart
- **Chart Type:** [Donut | Bar | Line]
- **Build:** Chart grows/appears by data series
- **Notes:** "[Narrate the data story — what's the insight?]"

### Slide N: Closing — Black Slide
- **Content:** "[Final statement or question]"
- **Build:** Fade in, hold
- **Notes:** "[Close strong. Pause. Take questions.]"

## Magic Move Sequences
| From | To | Elements That Move | Effect |
|---|---|---|---|
| Slide 2 | Slide 3 | Title text block | Repositions to top-left |
| Slide 5 | Slide 6 | Icon grid | Expands into detailed cards |

## Build Animations
| Slide | Element | Build Type | Trigger | Duration |
|---|---|---|---|---|
| 1 | Title | Fade In | Auto | 0.5s |
| 3 | Bullets | Appear | On Click | 0.3s each |
| 4 | Chart | Grow | Auto | 1.0s |

## Presenter Display
- Current Slide: Large
- Next Slide: Visible
- Presenter Notes: Scrollable
- Timer: Elapsed time, visible
- Use iPhone/iPad as remote control

## Export Options
- Keynote (.key): For editing and presenting
- PDF: For distribution (without animations)
- QuickTime (.mov): For async viewing with animations
```

## Quality Standards
- Magic Move is used to create visual narrative continuity, not as a gimmick.
- Builds reveal content progressively to match the verbal narrative.
- Slides favor visuals over text — Keynote's strength is visual impact.
- No more than one transition type between slides (consistency).
- Presenter display is configured for comfortable delivery.

## Permissions Required
Apple ID for iCloud collaboration. Keynote app access on any Apple platform.

## Example
A 10-slide product launch keynote: dramatic photo title, big statement slide, Magic Move into 3-point value proposition, 2 demo screenshot slides with build-in annotations, customer quote slide, data chart with animated growth, competitive positioning matrix, roadmap timeline, and closing CTA. Total runtime 15 minutes with Magic Move connecting the value proposition sequence.
