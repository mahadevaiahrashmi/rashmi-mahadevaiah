# Product Datasheet

## Purpose
Creates a one-page product overview covering headline value proposition, key benefits (3-4), feature highlights, architecture diagram description, integration information, customer logos, and call to action. Designed to be print-ready and scannable in under 60 seconds.

## Auto-Trigger Patterns
- "Create a product datasheet for [product]"
- "Build a one-pager for [product/feature]"
- "I need a product overview sheet"
- "Help me create a leave-behind for sales meetings"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product name, value proposition, top 3-4 benefits, key features, target audience
- **Optional:** Architecture diagram, integration list, customer logos, compliance certifications, pricing tier names
- **Reference files:** product-brief.md, solution-brief.md, landing-page-copy.md

## Process
1. **Lead with value** — Write a headline that states the outcome, not the product name.
2. **Select top benefits** — Choose 3-4 benefits that matter most to the primary buyer persona.
3. **Map features to benefits** — Every feature listed should connect to a stated benefit.
4. **Design for scan** — Structure so someone can grasp value in 10 seconds (headline + benefits) or 60 seconds (full read).
5. **Include proof** — Customer logos, metrics, or certification badges build credibility.
6. **Clear CTA** — One specific next step (demo, trial, contact).

## Output Format
```
# [Product Name]
## [Headline: Outcome-oriented value proposition]

### The Challenge
[2-3 sentences: the problem your buyers face]

### Key Benefits
🔹 **[Benefit 1]:** [One sentence with quantified impact]
🔹 **[Benefit 2]:** [One sentence with quantified impact]
🔹 **[Benefit 3]:** [One sentence with quantified impact]
🔹 **[Benefit 4]:** [One sentence with quantified impact]

### Feature Highlights
| Feature | Description |
|---------|-------------|
| [Feature 1] | [One-line description] |
| [Feature 2] | [One-line description] |
| [Feature 3] | [One-line description] |

### Architecture / How It Works
[Simple description of architecture or workflow. Reference diagram.]

### Integrations
[List of key integrations or "Connects with 50+ tools including..."]

### Trusted By
[Customer logos row. "500+ teams trust [Product]"]

### [CTA: "Start your free trial" / "Request a demo" / "Contact us"]
[URL or contact information]
```

## Quality Standards
- Readable in 60 seconds. Every word earns its place.
- Benefits are quantified where possible ("reduce X by 40%," not "improve X").
- Design is clean enough for print; content works without color.
- **Anti-patterns:** Feature dumps without benefit framing, generic claims, cluttered layout, multiple CTAs competing.

## Audience
Prospects evaluating your product, sales reps leaving behind after meetings, partners who need a quick overview. The buyer champion uses this to socialize internally. Make it easy to share and self-explanatory without a presenter.

## Formatting Guidelines
- Strictly one page (US Letter or A4). Two columns if needed.
- Clear visual hierarchy: headline → benefits → features → proof → CTA.
- Brand-consistent fonts and colors. Print-friendly (no light gray text).
- Include version date and product URL in footer.

## Example
**Headline:** "Cut compliance review time by 80% with automated policy checks"
**Benefit 1:** "🔹 **Real-time monitoring:** Continuous compliance checks across 200+ controls, replacing quarterly manual audits."
