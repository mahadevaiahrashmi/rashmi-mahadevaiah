# Google Slides Builder

## Purpose
Creates Google Slides presentations with structured outlines, speaker notes, visual layout suggestions, and sharing configurations — producing clear, compelling decks optimized for collaborative editing in Google Workspace.

## Auto-Trigger Patterns
- "Create a Google Slides deck"
- "Build a presentation in Slides"
- "Draft slides for…"
- "Google Slides for [topic]"
- "Presentation outline for Google Slides"

## Tool Configuration
Requires `context/integrations/google-workspace.md` with: Google Workspace account, Slides and Drive API access. Auth: OAuth 2.0 with presentations and drive.file scopes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Presentation topic, audience, key message
- **Optional:** Slide count target, brand template, data/charts, speaker notes depth, sharing settings

## Process
1. Define the presentation narrative arc and key takeaway.
2. Outline slides with titles and key content per slide.
3. Suggest visual layouts for each slide type (title, content, data, comparison).
4. Write speaker notes with talking points and transitions.
5. Recommend data visualizations and chart types.
6. Add animation/transition suggestions where they aid comprehension.
7. Configure sharing and collaboration settings.
8. Include presenter view setup guidance.

## Output Format
```
# Google Slides: [Presentation Title]

## Presentation Metadata
- **Audience:** [Who]
- **Duration:** [X minutes]
- **Key Takeaway:** [1 sentence — what the audience should remember]
- **Slide Count:** [N slides]
- **Template:** [Brand template name or blank]

## Slide Outline

### Slide 1: Title Slide
- **Title:** "[Presentation title]"
- **Subtitle:** "[Date | Presenter | Context]"
- **Layout:** Title slide template
- **Visual:** [Background image or brand graphic]
- **Speaker Notes:** "[Opening — hook the audience with a question or stat]"

### Slide 2: Context / Problem
- **Title:** "[Problem statement]"
- **Content:**
  - [Key point 1 with supporting data]
  - [Key point 2]
  - [Visual: relevant chart or image]
- **Layout:** Two-column (text left, visual right)
- **Speaker Notes:** "[Context setting — why this matters now]"

### Slide 3: Solution / Proposal
- **Title:** "[What we're proposing]"
- **Content:**
  - [Solution element 1]
  - [Solution element 2]
  - [Solution element 3]
- **Layout:** Three-column icon grid
- **Speaker Notes:** "[Walk through each element]"

### Slide N: Key Takeaway / CTA
- **Title:** "[Core message restated]"
- **Content:** [Single powerful statement or 3 bullets max]
- **Layout:** Centered text, large font
- **Speaker Notes:** "[Close with call to action and next steps]"

## Visual Guidelines
- Max 6 words per bullet point
- One idea per slide
- Data charts: use brand colors, label clearly
- Images: high-resolution, relevant, not decorative
- Animations: fade only, no flying objects

## Sharing Settings
- **Editors:** [Collaborators]
- **Commenters:** [Reviewers]
- **Viewers:** [Audience after presentation]
- **Link Sharing:** [Organization | Anyone with link]

## Presenter View Setup
- Use Presenter View for speaker notes
- Set auto-advance: [Off | Timed for X seconds]
- Include slide numbers
- Test with video conferencing screen share
```

## Quality Standards
- Every slide has exactly one key point — no slide tries to say two things.
- Speaker notes guide the presenter without being a script.
- Visual suggestions match the content type (data → chart, process → diagram).
- Deck follows the narrative arc: hook → problem → solution → evidence → CTA.
- Total word count per slide stays under 30 words (excluding speaker notes).

## Permissions Required
Google Workspace account with Slides access. Shared drive contributor for team presentations.

## Example
A 12-slide product strategy deck: Title, Agenda, Market Context (with market size chart), Customer Problem (with user quote), Solution Overview, 3 Feature Deep Dives (each with mockup), Competitive Landscape (2x2 matrix), Roadmap Timeline, Success Metrics, Next Steps/Ask. Speaker notes average 4-5 talking points per slide, total presentation time 25 minutes.
