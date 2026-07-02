# Canva Brief

## Purpose
Creates a comprehensive brief for Canva designs — specifying layout, copy, images, brand colors, dimensions, and use case — giving designers or non-designers enough direction to produce on-brand visual content.

## Auto-Trigger Patterns
- "Create a Canva brief"
- "Design brief for Canva"
- "I need a social media graphic"
- "Brief for a presentation/poster/infographic"
- "Canva design for…"

## Tool Configuration
Requires `context/integrations/canva.md` with: Canva team account (optional), brand kit details. Auth: Canva API token for programmatic access, or manual for template-based work.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Design purpose, content/copy, target platform
- **Optional:** Brand guidelines, reference images, Canva template preference, dimensions, audience, tone

## Process
1. Define the design format and dimensions for the target platform.
2. Specify the layout: sections, hierarchy, visual flow.
3. Write all copy: headlines, body text, CTAs, fine print.
4. Describe image/visual needs: photos, illustrations, icons, backgrounds.
5. Set brand parameters: colors (hex codes), fonts, logo placement.
6. Specify the design tone: professional, playful, bold, minimal.
7. Note any Canva-specific features: templates, elements, effects.
8. Define file export format and sizes needed.

## Output Format
```
# Canva Design Brief: [Project Name]

## Design Overview
- **Type:** [Social post | Presentation | Poster | Infographic | Email header | Ad]
- **Platform:** [Instagram | LinkedIn | Twitter | Print | Web]
- **Dimensions:** [W x H px or standard size]
- **Quantity:** [Number of variations]
- **Deadline:** [Date]

## Content

### Headline
"[Primary headline text]"
- Max characters: [XX]
- Style: [Bold, large, attention-grabbing]

### Body Copy
"[Supporting text]"
- Max characters: [XX]
- Style: [Clean, readable]

### CTA
"[Call to action text]"
- Style: [Button or text link]

### Fine Print (if applicable)
"[Legal, dates, disclaimers]"

## Visual Direction
- **Style:** [Minimal | Bold | Corporate | Playful | Elegant]
- **Mood:** [Description of the feeling the design should evoke]
- **Photography:** [Type of imagery: lifestyle, product, abstract, none]
- **Icons/Illustrations:** [Style and subjects needed]
- **Background:** [Solid color | Gradient | Image | Pattern]

## Brand Guidelines
- **Primary Color:** [#hexcode] — Use for headlines and CTA
- **Secondary Color:** [#hexcode] — Use for accents
- **Background Color:** [#hexcode]
- **Font - Headlines:** [Font name, weight, size]
- **Font - Body:** [Font name, weight, size]
- **Logo:** [Placement: top-left | bottom-right | center]
- **Logo clear space:** [Minimum padding]

## Layout Specification
```
┌─────────────────────────┐
│ [Logo]        [Tagline] │
│                         │
│    [HEADLINE]           │
│    [Large, centered]    │
│                         │
│    [Supporting image]   │
│                         │
│    [Body copy]          │
│    [CTA Button]         │
│                         │
│ [Footer / Fine print]   │
└─────────────────────────┘
```

## Variations Needed
| Variation | Dimension | Platform | Copy Change |
|---|---|---|---|
| Square | 1080x1080 | Instagram | Same |
| Story | 1080x1920 | Instagram | Shortened |
| Banner | 1200x628 | LinkedIn | Same |

## Export
- Format: [PNG | JPG | PDF | MP4]
- Resolution: [72dpi web | 300dpi print]
- Color space: [RGB | CMYK]

## References
- [Link to similar designs or inspiration]
- [Link to brand guide]
```

## Quality Standards
- Dimensions match the target platform's current specifications.
- Copy fits within character limits for the layout — verified visually.
- Brand colors are specified as hex codes, not descriptive words.
- Layout sketch gives clear spatial hierarchy.
- Variations maintain design consistency while adapting to format constraints.
- Export format matches the distribution channel requirements.

## Permissions Required
Canva Free/Pro account for design creation. Canva for Teams for brand kit and template access.

## Example
A product launch social media brief: Instagram square (1080x1080), headline "Introducing Smart Search", body copy with 3 feature bullets, product screenshot as hero image, CTA "Try it free", brand colors (#1A73E8 primary, #FFFFFF background), 3 variations (square, story, LinkedIn banner), exported as PNG at 72dpi.
