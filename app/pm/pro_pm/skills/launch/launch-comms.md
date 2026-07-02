# Launch Communications

## Purpose
Create the full suite of launch communications — internal announcement, customer email, blog post, social media posts, press release outline, and partner notifications — all tailored to their specific audience. Ensures consistent messaging across channels while adapting tone, depth, and CTA for each medium.

## Auto-Trigger Patterns
- "write launch communications for [feature]"
- "launch announcement for [product]"
- "internal launch email"
- "customer announcement for [feature]"
- "launch blog post"
- "social media posts for [launch]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / product details | Yes | User prompt |
| Positioning / messaging | Recommended | GTM brief |
| Key personas / recipients | Recommended | `context/people/` |
| Launch date | Optional | User prompt |
| Customer evidence / data | Optional | User prompt |

## Process
1. **Define the core narrative** — One consistent story adapted across channels. Problem → solution → impact. All communications should trace back to this narrative.
2. **Write internal announcement** — Full detail for the company: what's launching, why it matters strategically, what each team needs to know, how to demo, key talking points.
3. **Draft customer email** — Direct, benefit-focused communication: what's new, how it helps them, how to try it, where to learn more.
4. **Create blog post outline** — Thought leadership angle: problem framing, solution narrative, customer story, technical depth, CTA.
5. **Write social media posts** — Platform-adapted: LinkedIn (professional, data-driven), Twitter/X (concise, punchy), others as needed. Multiple variants for testing.
6. **Outline press release** — If warranted: headline, subhead, quote from leadership, customer quote, boilerplate. Standard press release structure.
7. **Draft partner notification** — What partners need to know: feature details, integration impact, co-marketing opportunities, support resources.
8. **Coordinate timing** — Sequence communications: internal first, then customers, then public. Define embargo windows.

## Output Format
```
## Launch Communications: [Feature/Product]
**Launch Date:** [date]  |  **Comms Owner:** [name]

### Core Narrative
[3-4 sentence story that underpins all communications]

### Communication Sequence
| Order | Channel | Audience | Timing | Owner |
|-------|---------|----------|--------|-------|
| 1 | Internal Slack/email | Company | T-1 day | PM |
| 2 | Customer email | Users | T+0h | Marketing |
| 3 | Blog post | Public | T+0h | Content |
| 4 | Social media | Public | T+0h | Social |

---
### Internal Announcement
[Full draft — what, why, key talking points, demo access]

---
### Customer Email
**Subject:** [Subject line — benefit focused]
[Full email draft with personalization tokens]

---
### Blog Post Outline
- **Headline:** [Options]
- **Hook:** [Opening that captures attention]
- **Problem:** [Frame the pain]
- **Solution:** [How we solve it]
- **Evidence:** [Customer story / data]
- **CTA:** [What to do next]

---
### Social Media Posts
**LinkedIn:** [Professional, data-driven post]
**Twitter/X:** [Concise, punchy version]

---
### Partner Notification
[What partners need to know — impact, opportunities, resources]
```

## Quality Standards
- Core narrative is consistent across all channels — messaging doesn't contradict itself.
- Each channel's content is adapted for its format and audience, not just copy-pasted.
- Customer email leads with benefit, not feature announcement.
- Internal announcement includes enough detail for anyone in the company to answer customer questions.

**Anti-patterns:** Identical copy across channels, feature-first messaging, internal announcement after external launch, missing CTA, jargon in customer communications.

## Framework References
- **Message house** — Consistent narrative with channel-adapted execution.
- **AIDA** — Attention, Interest, Desire, Action structure for marketing copy.

## Formatting Guidelines
- Clear section separators between communication pieces (each is standalone).
- Communication sequence table at top (coordination view).
- Subject lines for emails and headlines for posts (testable options).
- Bold CTAs in each piece.

## Example
**Customer email subject:** "Your team just got faster: Smart Filters is here"

**Opening:** "You told us searching for the right data takes too long. We listened. Starting today, Smart Filters remembers how your team works and suggests the right filters automatically — cutting search time by 40% for beta customers."
