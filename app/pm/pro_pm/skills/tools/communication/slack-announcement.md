# Slack Announcement

## Purpose
Crafts Slack messages tailored to different communication needs — updates, decisions, celebrations, and asks — with proper channel selection, formatting, threading conventions, and urgency calibration to maximize signal and minimize noise.

## Auto-Trigger Patterns
- "Write a Slack message for…"
- "Draft a Slack announcement"
- "Post an update to Slack"
- "Communicate this in Slack"
- "Slack message for [channel/audience]"

## Tool Configuration
Requires `context/integrations/slack.md` with: Slack workspace URL, bot token or user token, channel IDs. Auth: Bot token (xoxb-) with chat:write scope or user OAuth token.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Message content, message type (update, decision, celebration, ask)
- **Optional:** Target channel, urgency level, @mentions, thread context, emoji preference, follow-up actions

## Process
1. Determine the message type and select the template.
2. Choose the channel based on audience and urgency.
3. Format using Slack conventions: bold for emphasis, bullets for lists, minimal emoji.
4. Set urgency level to calibrate tone and @mention scope.
5. Structure for scannability — key information in the first 2 lines.
6. Include a clear CTA or next step where applicable.
7. Add threading guidance for follow-up discussion.
8. Consider timing — avoid posting important updates during off-hours.

## Output Format

### Update Template
```
📋 *[Project/Feature] Update — [Date]*

*Status:* [On Track | At Risk | Blocked]
*Summary:* [1-2 sentence update]

*Key Progress:*
• [Achievement 1]
• [Achievement 2]

*Next Steps:*
• [Action] — [Owner] — [Date]

_Thread for questions_ 🧵
```

### Decision Template
```
✅ *Decision: [Decision Title]*

*Context:* [1-2 sentences of background]
*Decision:* [Clear statement of what was decided]
*Rationale:* [Why this option was chosen]
*Impact:* [Who/what is affected]
*Effective:* [When this takes effect]

_Decided by: [Names] on [Date]_
```

### Celebration Template
```
🎉 *[Achievement Title]*

[1-2 sentences on what happened and why it matters]

Shoutouts: @[person1] @[person2] for [specific contribution]

[Brief metric or impact if available]
```

### Ask Template
```
🙋 *[Request Title]* — Need by [Date]

*Context:* [Why you need this]
*Ask:* [Specific, actionable request]
*Who:* [Who should respond — @mention or role]

*Details:* [Link to doc/ticket for full context]
```

## Quality Standards
- First 2 lines convey the essential message — Slack previews are short.
- Bold is used for structure, not for emphasis on every other word.
- Emoji usage is purposeful (status indicators, section markers), not decorative.
- @mentions are scoped appropriately — @channel only for urgent, time-sensitive items.
- Threading is encouraged for discussion to keep channels scannable.
- Urgency levels: 🔴 Blocking (immediate), 🟡 Important (today), 🟢 FYI (when convenient).

## Permissions Required
Channel membership for posting. Bot token with chat:write and chat:write.public for cross-channel posting.

## Example
```
📋 *Payments v2 Update — May 21*

*Status:* 🟢 On Track
*Summary:* Stripe integration testing complete. Moving to staged rollout next week.

*Key Progress:*
• All 14 payment edge cases passing in staging
• Load tested to 2x projected peak volume
• Compliance review approved by Legal

*Next Steps:*
• Begin 5% canary rollout — @sarah — May 26
• Monitor error rates for 48hrs — @ops-team — May 26-28
• Full rollout decision — @pm-name — May 29

_Thread for questions_ 🧵
```
