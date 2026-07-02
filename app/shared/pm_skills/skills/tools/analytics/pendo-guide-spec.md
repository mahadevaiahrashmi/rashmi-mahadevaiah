# Pendo Guide Spec

## Purpose
Specifies Pendo in-app guides — targeting rules, content, analytics tracking, and feature adoption measurement — to drive user engagement, onboarding, and feature discovery through contextual in-product guidance.

## Auto-Trigger Patterns
- "Create a Pendo guide"
- "In-app guide for…"
- "Pendo walkthrough for [feature]"
- "Feature adoption guide in Pendo"
- "Measure feature adoption with Pendo"

## Tool Configuration
Requires `context/integrations/pendo.md` with: Pendo subscription key, app ID, API integration key. Auth: Integration key for API access, admin login for guide builder.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Guide purpose, target feature/page, audience
- **Optional:** Guide type (tooltip, lightbox, banner, walkthrough), targeting rules, activation triggers, analytics goals

## Process
1. Define the guide objective and success metric.
2. Select guide type matching the communication need.
3. Design guide content: headline, body, CTA, dismiss option.
4. Configure targeting: user segments, page rules, feature tags.
5. Set activation triggers: page load, click, time delay, event.
6. Define frequency and dismissal rules.
7. Set up analytics: view rate, completion rate, feature adoption lift.
8. Plan A/B testing if measuring effectiveness.

## Output Format
```
# Pendo Guide: [Guide Name]

## Guide Details
- **Type:** [Tooltip | Lightbox | Banner | Walkthrough | Poll]
- **Objective:** [What behavior change this drives]
- **Success Metric:** [Feature adoption %, guide completion %, etc.]

## Content
### Step 1 [of N]
- **Anchor Element:** [CSS selector or visual tag]
- **Headline:** "[Guide headline]"
- **Body:** "[Guide body text — max 2-3 sentences]"
- **CTA Button:** "[Button text]" → [Action: next step | dismiss | link]
- **Dismiss:** [X button | "Skip" link | Click outside]
- **Media:** [Screenshot | GIF | Video embed]

### Step 2 (if multi-step)
...

## Targeting
| Rule | Value |
|---|---|
| Segment | [User segment — e.g., "New users, signed up < 7 days"] |
| Page | [URL pattern — e.g., "/dashboard*"] |
| Feature | [Feature tag — e.g., "analytics-tab"] |
| Account | [Account property filter] |
| Exclude | [Users who already completed X] |

## Activation
- **Trigger:** [Page load | Element click | Event | Manual]
- **Delay:** [X seconds after trigger]
- **Frequency:** [Once | Every visit | Until dismissed | X times]
- **Priority:** [Relative to other active guides]

## Analytics & Measurement
| Metric | Definition | Target |
|---|---|---|
| Guide Views | Users who saw step 1 | [N] |
| Completion Rate | Users who finished all steps | [X%] |
| Feature Adoption | Users of feature post-guide vs pre | [+X%] |
| Dismiss Rate | Users who dismissed early | [<X%] |

## A/B Test (if applicable)
- **Control:** [No guide / different guide]
- **Variant:** [This guide]
- **Sample:** [% of eligible users]
- **Duration:** [X weeks]
- **Primary metric:** [Feature adoption rate]
```

## Quality Standards
- Guide copy is concise — under 3 sentences per step.
- Targeting excludes users who already adopted the feature.
- Frequency prevents guide fatigue — don't show repeatedly after dismissal.
- Success is measured by behavior change, not just guide views.
- A/B testing is used for high-visibility guides to validate impact.

## Permissions Required
Pendo Admin for guide creation and targeting. Viewer for analytics access.

## Example
A 3-step tooltip walkthrough for a new reporting feature: Step 1 highlights the "Reports" tab with value proposition, Step 2 points to the template gallery with "Try a template" CTA, Step 3 highlights the export button. Targeted to users who haven't used Reports in 30 days, triggered on dashboard page load with 5-second delay, shown once per user. Success metric: 25% increase in Reports feature usage within 2 weeks.
