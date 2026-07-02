# Teams Announcement

## Purpose
Crafts Microsoft Teams messages and announcements — using proper channel conventions, adaptive card formatting, @mentions, and tab references — optimized for Teams' communication patterns within the Microsoft 365 ecosystem.

## Auto-Trigger Patterns
- "Write a Teams message"
- "Post an announcement in Teams"
- "Draft a Teams update"
- "Communicate this via Microsoft Teams"
- Any request targeting Teams channels

## Tool Configuration
Requires `context/integrations/microsoft365.md` with: Teams tenant ID, team/channel IDs, Graph API credentials. Auth: OAuth 2.0 with ChannelMessage.Send or Teamwork.Migrate.All scope.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Message content, message type (announcement, update, discussion, decision)
- **Optional:** Target team/channel, @mentions, priority (standard/important/urgent), adaptive card format, tab references

## Process
1. Select the communication type and format.
2. Choose the team and channel based on audience scope.
3. Format using Teams markdown: bold, italic, lists, headers, code blocks.
4. Set message importance: Standard, Important (red banner), or Urgent (repeated notification).
5. Add @mentions for specific people or tags.
6. Include adaptive card for structured, interactive content if appropriate.
7. Reference relevant tabs (Planner, Wiki, Files) for context.
8. Consider cross-posting rules if multiple channels need the message.

## Output Format

### Standard Announcement
```
📢 **[Announcement Title]**

**Summary:** [1-2 sentence overview]

**Details:**
- [Key point 1]
- [Key point 2]
- [Key point 3]

**Action Required:** [What recipients should do]
**Deadline:** [Date if applicable]

**Resources:**
- [Link to document in SharePoint]
- [Link to Planner board]

@[mention person/tag] for questions
```

### Adaptive Card (JSON spec)
```json
{
  "type": "AdaptiveCard",
  "body": [
    {"type": "TextBlock", "text": "[Title]", "weight": "Bolder", "size": "Large"},
    {"type": "TextBlock", "text": "[Summary]", "wrap": true},
    {"type": "FactSet", "facts": [
      {"title": "Status", "value": "[On Track]"},
      {"title": "Owner", "value": "[Name]"},
      {"title": "Due", "value": "[Date]"}
    ]}
  ],
  "actions": [
    {"type": "Action.OpenUrl", "title": "View Details", "url": "[URL]"}
  ]
}
```

## Quality Standards
- Urgent priority is reserved for truly time-sensitive items — overuse causes fatigue.
- Adaptive cards are used for structured data, not for simple text messages.
- @mentions target the right scope — team tag vs individual vs @channel.
- Messages reference Teams-native resources (tabs, files) rather than external links when possible.
- Announcements include clear action items with owners and deadlines.

## Permissions Required
Team member with message posting rights. Owner for announcement-type posts in moderated channels.

## Example
```
📢 **Q3 Planning Kickoff — Action Required**

**Summary:** Q3 planning begins next week. All PMs need to submit
priority proposals by June 1.

**What's Needed:**
- Review the strategy doc (linked in Files tab)
- Draft your team's top 5 priorities in the shared Planner board
- Schedule 1:1 with @VP Product by May 30

**Timeline:**
- May 26: Priority drafts due
- May 28-29: Review sessions (see Calendar)
- Jun 1: Final priorities locked

@Product Team — please acknowledge with 👍
```
