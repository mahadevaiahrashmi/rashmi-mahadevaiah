# Email Campaign

## Purpose
Creates a drip or announcement email sequence with subject lines, preview text, body copy, and CTA per email. Includes segmentation guidance and A/B test suggestions. Designed to nurture leads, onboard users, or drive feature adoption through a multi-touch sequence.

## Auto-Trigger Patterns
- "Create an email campaign for [launch/initiative]"
- "Write a drip sequence for [use case]"
- "I need an email nurture sequence"
- "Help me build an email series for [audience]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Campaign goal, target audience, key messages (one per email), CTAs, sequence timing
- **Optional:** Segmentation criteria, personalization variables, existing email performance data, brand voice guide
- **Reference files:** product-brief.md, newsletter-content.md, landing-page-copy.md, customer-onboarding-guide.md

## Process
1. **Define the journey** — What does the recipient know/feel at the start? What should they know/feel at the end?
2. **Map the sequence** — Each email has one job. What's the logical progression?
3. **Write subject lines** — 3 options per email for A/B testing. Short, specific, curiosity-driving.
4. **Draft body copy** — One message per email. Short paragraphs. Clear CTA.
5. **Plan segmentation** — Different messages for different segments. Personalization tokens.
6. **Design A/B tests** — Test one variable at a time: subject line, CTA, send time, content length.

## Output Format
```
# Email Campaign: [Campaign Name]

## Campaign Overview
- **Goal:** [What success looks like]
- **Audience:** [Who receives this]
- **Sequence:** [Number of emails over what timeframe]
- **Segmentation:** [How audience is segmented]

## Email 1: [Purpose — e.g., "Welcome"]
**Send:** [Trigger or timing]
**Subject lines (A/B):** A: [Option] | B: [Option]
**Preview text:** [40-90 chars]
**Body:**
[Greeting with personalization]
[Key message — one paragraph]
[Value statement or social proof]
[CTA button text + link]
[Sign-off]

## Email 2: [Purpose — e.g., "Key Feature Intro"]
[Same structure]

## Email 3-N: [Same structure]

## Segmentation Guide
| Segment | Variation | Rationale |
|---------|-----------|-----------|

## A/B Test Plan
| Email | Variable Tested | Hypothesis |
|-------|----------------|------------|

## Measurement
| Metric | Target | Benchmark |
|--------|--------|-----------|
| Open rate | [X%] | Industry: [Y%] |
| Click rate | [X%] | Industry: [Y%] |
| Conversion | [X%] | [baseline] |
```

## Quality Standards
- Each email has one message and one CTA. No competing actions.
- Subject lines are specific and testable, not generic.
- The sequence tells a cohesive story—not just repeated pitches at different times.
- **Anti-patterns:** Multiple CTAs per email, generic subject lines, no segmentation, sequence that's just "Hey, still interested?" repeated.

## Audience
Varies by campaign: prospects (nurture), new users (onboard), existing users (adoption/expansion), churned users (win-back). Each requires different tone, content, and urgency. Always respect unsubscribe preferences.

## Formatting Guidelines
- Body: 100-200 words per email. Short paragraphs (2-3 sentences).
- One CTA per email, visually prominent as a button.
- Mobile-optimized: single column, 14px+ font, tappable buttons.
- Preview text complements (doesn't repeat) the subject line.

## Example
**Email 2 — Key Feature:** "Subject: You're leaving time on the table. Preview: Here's the feature 80% of power users swear by. Body: Hi [Name], Most new users discover our search feature in week 2. But the ones who find it in week 1? They're 3x more likely to become daily users. Here's why: [One paragraph on the feature benefit]. Try it now → [CTA button]. Takes 30 seconds. No setup needed."
