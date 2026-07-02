# Blog Post — Product Announcement

## Purpose
Creates an 800-1200 word blog post for product launches or feature updates, structured as hook → problem → solution → key benefits → how to use → what's next → CTA. SEO-optimized to drive organic traffic and serve as the canonical announcement.

## Auto-Trigger Patterns
- "Write a blog post announcing [feature/product]"
- "Create a launch blog post for [release]"
- "I need to write about our new [feature]"
- "Help me announce [update] on the blog"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** What's launching, why it matters, key benefits (3-4), target audience, CTA
- **Optional:** SEO keywords, customer quotes, demo link, related blog posts, launch date
- **Reference files:** product-brief.md, product-launch-deck.md, landing-page-copy.md

## Process
1. **Hook the reader** — First sentence creates curiosity or states impact. No "We're excited to announce..."
2. **Frame the problem** — Why does this launch matter? What was painful before?
3. **Present the solution** — What's new. How it works. What changes for the user.
4. **Show benefits** — 3-4 specific, quantified benefits with use case context.
5. **Guide action** — How to get started. Link to docs, demo, or trial.
6. **Optimize for SEO** — Target keyword in title, first paragraph, headers, and meta description.

## Output Format
```
# [SEO-Optimized Title — Benefit-Focused]

**Meta description:** [155 chars, includes target keyword and value prop]

[Hook paragraph — surprising stat, bold claim, or user story]

## The Problem: [Pain point framed]
[2-3 paragraphs on the problem. Why existing approaches fall short.]

## Introducing [Feature/Product]
[What it is. How it works. Key screenshot or diagram description.]

## Key Benefits

### [Benefit 1: Outcome-focused headline]
[Explanation with specific use case. Quantified impact if possible.]

### [Benefit 2-3: Same structure]

## How to Get Started
[Step-by-step or link to quickstart. Make it easy.]

## What's Next
[Upcoming related developments. Roadmap tease.]

## [CTA: Try it today / Learn more / Join the beta]
[Link and friction reducer]
```

## Quality Standards
- The first sentence earns the second sentence. No corporate preamble.
- Benefits are specific and quantified, not generic marketing claims.
- Includes at least one real use case or customer scenario.
- **Anti-patterns:** Starting with "We're excited to announce," feature lists without context, no CTA, no SEO consideration.

## Audience
Existing users (learn about new capabilities), prospects (discover the product through search), and industry observers (understand your direction). Write primarily for the user who will benefit from this feature.

## Formatting Guidelines
- 800-1200 words. Scannable with headers every 150-200 words.
- Include 1-2 images (screenshot, diagram, or before/after).
- Internal links to related content. External links to sources.
- Publish timing: align with product availability.

## Example
**Hook:** "Last month, a customer told us they spent more time finding the right report than reading it. Today, that changes. We're launching AI-powered search that finds answers across all your connected tools in under two seconds—because your team's time is worth more than scrolling through dashboards."
