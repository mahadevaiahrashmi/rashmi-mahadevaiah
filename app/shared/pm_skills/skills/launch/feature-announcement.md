# Feature Announcement

## Purpose
Craft compelling feature announcements across multiple formats — blog post, email, and social media — leading with the problem, telling a benefit-first story, including social proof, and driving clear next actions. Produces ready-to-publish content that resonates with users, not just describes functionality.

## Auto-Trigger Patterns
- "announce [feature]"
- "feature announcement for [product update]"
- "write a blog post about [new feature]"
- "social media announcement for [feature]"
- "email announcement for [launch]"
- "what's new post for [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature description | Yes | User prompt |
| User benefit / problem solved | Recommended | User prompt or PRD |
| Customer evidence / data | Optional | User prompt |
| Target audience | Optional | User prompt |
| Product positioning | Optional | `context/products/*/overview.md` |

## Process
1. **Identify the narrative angle** — Not "we built X" but "you can now do Y." Lead with the transformation, not the feature.
2. **Craft the headline** — Test multiple options. Best headlines: promise a specific benefit, create curiosity, or address a known pain.
3. **Write the hook** — First 2 sentences must earn the reader's attention. Start with the problem or the outcome, never the feature.
4. **Build the benefit narrative** — Problem → solution → proof → CTA. Show how the feature changes the user's world.
5. **Include social proof** — Customer quotes, beta results, data points. Third-party validation is more convincing than self-promotion.
6. **Adapt for each format** — Blog (depth, SEO), email (concise, personal), social (punchy, visual). Same story, different execution.
7. **Define CTAs** — What should the reader do next? Try the feature, read docs, book a demo? One primary CTA per format.

## Output Format
```
## Feature Announcement: [Feature Name]

### Headline Options
1. [Benefit-focused headline]
2. [Curiosity-driven headline]
3. [Problem-solution headline]

---
### Blog Post
**Headline:** [Selected headline]

**Hook:** [2-3 sentences that earn attention — problem or outcome focused]

**The Problem:** [1 paragraph making the pain vivid]

**The Solution:** [2-3 paragraphs describing the feature through the lens of user benefit]

**Proof:** [Customer quote, beta data, or before/after metrics]

**How to Get Started:** [Quick start instructions]

**CTA:** [Primary call to action]

---
### Email Version
**Subject line options:**
1. [Option A]
2. [Option B]

**Body:**
[Concise email — 150 words max. Benefit, proof, CTA.]

---
### Social Media
**LinkedIn:**
[Professional post — data-driven, thought leadership angle]

**Twitter/X:**
[Punchy, 280 characters. Hook + link.]

**Thread version (Twitter):**
1/ [Hook]
2/ [Problem]
3/ [Solution]
4/ [Proof]
5/ [CTA]
```

## Quality Standards
- Headline passes the "would I click this?" test.
- Opening line does not start with "We're excited to announce..." — lead with value.
- Benefits are specific and quantified where possible ("40% faster" not "much faster").
- Each format is independently compelling — not a truncated version of the blog.

**Anti-patterns:** Feature-first announcements, "we're excited" openings, no social proof, identical copy across channels, missing CTA, internal jargon.

## Framework References
- **AIDA** — Attention, Interest, Desire, Action structure.
- **Problem-Agitation-Solution** — Marketing copywriting framework.

## Formatting Guidelines
- Multiple headline options for A/B testing consideration.
- Clear separation between formats (each standalone).
- Subject line options for email (testable).
- Social posts within platform character/style conventions.

## Example
**Hook (not this):** "We're excited to announce Smart Filters, a new feature that..."

**Hook (this):** "Your team spends 45 minutes a day searching for the right data. Starting today, that number drops to 10. Here's how."
