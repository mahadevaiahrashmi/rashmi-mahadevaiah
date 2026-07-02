# In-App Messaging

## Purpose
Creates copy and specifications for in-app announcements—modals, banners, tooltips, and slideouts—with copy per format, targeting rules, dismissal behavior, and measurement criteria. Drives feature awareness and adoption without disrupting the user experience.

## Auto-Trigger Patterns
- "Write in-app messaging for [feature/announcement]"
- "Create in-app notification copy"
- "I need in-product announcements for [launch]"
- "Help me design in-app prompts for [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Message purpose, target users, format preference, key message, CTA
- **Optional:** User segmentation data, feature adoption metrics, prior in-app message performance, UX constraints
- **Reference files:** product-brief.md, product-launch-deck.md, email-campaign.md

## Process
1. **Choose the format** — Match urgency and importance to format: modal (high), banner (medium), tooltip (contextual), slideout (informational).
2. **Write concise copy** — In-app messaging has the shortest attention span. Every word counts.
3. **Define targeting** — Who sees this, when, and under what conditions.
4. **Set dismissal rules** — How many times shown, what "dismiss" means, snooze options.
5. **Plan measurement** — Impressions, clicks, dismissals, and downstream feature adoption.

## Output Format
```
# In-App Messaging: [Feature/Announcement]

## Modal
**Trigger:** [When this appears — user action, segment, date]
**Audience:** [Who sees it]
**Frequency:** [Once / until dismissed / X times]

**Headline:** [5-8 words, benefit-focused]
**Body:** [1-2 sentences max. What + why they should care.]
**Primary CTA:** [Button text — action verb, 2-4 words]
**Secondary CTA:** [Dismiss text — "Maybe later" / "Don't show again"]
**Visual:** [Screenshot, illustration, or animation description]

## Banner (persistent/dismissible)
**Placement:** [Top/bottom of page or section]
**Copy:** [Single line, under 80 characters]
**CTA:** [Link text]
**Dismiss:** [X button behavior]

## Tooltip
**Trigger:** [First visit to feature / hover / contextual]
**Copy:** [1-2 sentences explaining the feature]
**Pointer:** [Which UI element it points to]
**Dismiss:** [Click anywhere / explicit close]

## Slideout
**Trigger:** [User action or time-based]
**Headline:** [Short, value-focused]
**Body:** [2-3 sentences with key info]
**CTA:** [Button or link]

## Targeting Rules
| Condition | Value |
|-----------|-------|
| User segment | [e.g., Free tier users] |
| Feature usage | [e.g., Haven't used search yet] |
| Account age | [e.g., > 7 days] |
| Prior messages | [e.g., Haven't seen onboarding modal] |

## Measurement
| Metric | Target |
|--------|--------|
| Impression rate | [X%] |
| CTA click rate | [X%] |
| Feature adoption (7-day) | [X%] |
| Dismissal rate | [< X%] |
```

## Quality Standards
- Messaging enhances the experience, not interrupts it. Users should feel helped, not annoyed.
- Copy is ruthlessly short—if it can't fit in a glance, it's too long.
- Targeting is precise—no blasting all users with irrelevant messages.
- **Anti-patterns:** Modals on every login, vague copy, no dismissal option, untargeted messaging, no measurement.

## Audience
Active product users who should learn about new features, be nudged toward valuable behaviors, or be informed about changes. They're in the middle of their workflow—respect their attention.

## Formatting Guidelines
- Modal: 15-word headline, 30-word body max. One visual.
- Banner: Single line under 80 characters.
- Tooltip: 1-2 sentences. Points to specific UI element.
- All formats: clear dismiss option. Mobile-responsive.

## Example
**Modal:** Headline: "Your reports just got smarter." Body: "We've added AI-powered insights to every report. Key trends and anomalies are highlighted automatically." Primary CTA: "See my insights" | Secondary: "Maybe later." Targeting: Users who created a report in the last 30 days but haven't viewed the insights tab.
