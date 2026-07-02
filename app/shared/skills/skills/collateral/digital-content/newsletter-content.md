# Newsletter Content

## Purpose
Creates product newsletter content covering updates, tips, customer spotlights, upcoming events, and calls to action. Designed to be scannable, valuable, and relationship-building—not salesy. Keeps subscribers engaged and informed.

## Auto-Trigger Patterns
- "Write newsletter content for [month/topic]"
- "Create a product newsletter"
- "I need content for our email newsletter"
- "Help me put together a product update email"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product updates, 1-2 valuable tips, CTA, audience segment
- **Optional:** Customer story, upcoming events, community highlights, team news, industry insights
- **Reference files:** product-brief.md, blog-post-announcement.md, customer-case-study.md

## Process
1. **Curate content** — Select 4-6 items that balance news, value, and engagement.
2. **Write for scanners** — Headlines, bold text, and CTAs carry the message for people who skim.
3. **Lead with value** — The first section should be the most useful thing for the reader, not company news.
4. **Include variety** — Mix of product updates, tips, stories, and forward-looking content.
5. **Single primary CTA** — One main action per newsletter. Secondary CTAs are subtle.
6. **Test subject lines** — Write 3 options. A/B test the top 2.

## Output Format
```
# Newsletter: [Month/Edition]

## Subject Line Options (pick 2 for A/B test)
A: [Curiosity-driven]
B: [Value-driven]
C: [Urgency-driven]

## Preview Text
[40-90 chars that complement the subject line]

## Content

### 🎯 Tip of the Month
[Most valuable, actionable content first. 100-150 words.
Specific tip the reader can use today.]

### 🚀 Product Updates
[New features or improvements. 2-3 items, 50-75 words each.
Benefit-framed, with link to learn more.]

### 💡 Customer Spotlight
[Short customer story or quote. 75-100 words.
How they're using the product to achieve results.]

### 📅 Upcoming
[Events, webinars, releases. Bullet list with dates and links.]

### 💬 From the Team
[Personal note, insight, or behind-the-scenes. 50-75 words.]

## Primary CTA
[Single, clear action with button text and link]

## Footer
[Preference center. Social links. Unsubscribe.]
```

## Quality Standards
- Reader should feel smarter or more productive after reading—even if they do nothing else.
- Scannable in 30 seconds. Full read in 3 minutes.
- Subject line earns the open; first section earns the read-through.
- **Anti-patterns:** All company news (no value for reader), walls of text, multiple competing CTAs, daily or excessive frequency.

## Audience
Existing users and subscribers who opted in for updates. They want value, not noise. Respect their inbox. Every newsletter should pass the "would I forward this to a colleague?" test.

## Formatting Guidelines
- 400-600 words total. 5-6 sections with clear headers.
- Mobile-first: single column, large text, tappable CTAs.
- Emojis as section markers for visual scanning.
- Consistent cadence (monthly or bi-weekly). Same day/time.

## Example
**Tip of the Month:** "🎯 **Speed up your workflow with keyboard shortcuts.** Most users don't know that pressing `Cmd+K` opens the command palette, where you can search, navigate, and execute actions without touching your mouse. Power users report saving 15 minutes/day. Here are the 5 shortcuts worth memorizing: [list with descriptions]."
