# Award Submission

## Purpose
Creates industry award submissions covering nomination category selection, executive summary, innovation description, quantified impact evidence, customer quotes, and supporting materials. Designed to position your product or team for recognition that builds credibility and drives marketing leverage.

## Auto-Trigger Patterns
- "Write an award submission for [award/organization]"
- "Create an industry award nomination"
- "I need to submit for [award name]"
- "Help me prepare an award application"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Award name and category, innovation or achievement to highlight, quantified impact, customer evidence
- **Optional:** Prior award wins, judging criteria, competitor submissions (public), supporting media assets
- **Reference files:** product-brief.md, customer-case-study.md, product-launch-deck.md

## Process
1. **Select the right category** — Match your strongest story to the category criteria. Don't force a fit.
2. **Understand the judges** — Who evaluates? What do they value? Review past winners.
3. **Lead with impact** — Judges see hundreds of submissions. Impact in the first sentence.
4. **Tell the story** — Problem → innovation → impact. Narrative arc, not feature list.
5. **Provide evidence** — Quantified results, customer quotes, third-party validation.
6. **Polish and proofread** — Awards are competitive. Quality of writing matters.

## Output Format
```
# Award Submission: [Award Name]
**Category:** [Selected category]
**Submitted by:** [Company] | **Date:** [Date]

## Nomination Summary (100-200 words)
[Compelling overview: what was achieved, why it matters,
quantified impact. This may be the only part some judges read.]

## The Challenge (200-300 words)
[What problem existed? Why was it significant?
Market context. Customer pain. Scale of the challenge.]

## The Innovation (300-500 words)
[What was built or achieved? What makes it innovative?
How is this different from existing approaches?
Technical or strategic novelty.]

## Impact & Results (200-300 words)
### Quantified Outcomes
| Metric | Result |
|--------|--------|
| [Impact metric 1] | [Specific number] |
| [Impact metric 2] | [Specific number] |

### Customer Evidence
"[Customer quote about impact]" — [Name, Title, Company]
"[Second customer quote]" — [Name, Title, Company]

### Industry Recognition
[Analyst mentions. Press coverage. Community response.]

## Supporting Materials
- [Link to product demo/video]
- [Link to case study]
- [Link to press coverage]
- [Screenshots or visuals]

## About [Company] (100 words)
[Company description. Relevant credentials. Team size.]
```

## Quality Standards
- Impact is quantified with specific numbers, not vague improvements.
- Customer quotes are genuine and attributable (with permission).
- Innovation is clearly articulated—what's new that didn't exist before.
- **Anti-patterns:** Nominating in the wrong category, leading with features not impact, no quantified results, generic customer quotes.

## Audience
Award judges who evaluate many submissions in a short time. They value clear impact evidence, genuine innovation, and compelling narrative. Past winners often serve as judges—they know what excellence looks like.

## Formatting Guidelines
- Follow the award's word count and format requirements exactly.
- Lead every section with the strongest point.
- Use bullet points and bold text for scannability.
- Include high-quality supporting visuals and links.

## Example
**Nomination Summary:** "In 2025, [Company] launched an AI-powered compliance engine that reduced enterprise audit preparation time by 83% while improving accuracy from 72% to 99.1%. Deployed across 140+ financial institutions within 6 months of launch, the system processes 2.3 million compliance checks daily, replacing a workflow that previously required 12 FTEs per customer. The innovation combines proprietary regulatory knowledge graphs with real-time policy matching, a technical approach not attempted by any competitor in the market."
