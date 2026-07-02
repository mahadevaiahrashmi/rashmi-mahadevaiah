# Slack Workflow Builder

## Purpose
Designs Slack Workflow Builder automations — specifying triggers, form steps, message actions, and channel operations — to automate recurring team processes directly within Slack.

## Auto-Trigger Patterns
- "Create a Slack workflow"
- "Build a Slack automation"
- "Set up a Slack form"
- "Automate this process in Slack"
- "Slack Workflow Builder for…"

## Tool Configuration
Requires `context/integrations/slack.md` with: Slack workspace URL, Workflow Builder access (paid plan). Auth: Workspace member with Workflow Builder permissions. Admin approval may be needed for org-wide workflows.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Process to automate, trigger type, desired outcome
- **Optional:** Form fields, message templates, channel targets, conditional logic, external connections

## Process
1. Define the trigger: shortcut, new channel member, emoji reaction, scheduled, webhook.
2. Design form steps with field types: short text, long text, select menu, date, person, channel.
3. Create message steps with variable insertions from form data.
4. Add channel actions: send to channel, create channel, set topic.
5. Configure conditional logic for branching workflows.
6. Connect external services via webhook steps if needed.
7. Set permissions for who can run the workflow.
8. Test the workflow end-to-end before publishing.

## Output Format
```
# Slack Workflow: [Workflow Name]

## Trigger
- Type: [Shortcut | New member | Emoji | Schedule | Webhook]
- Location: [Channel / DM / Global]

## Steps

### Step 1: Form — [Form Title]
| Field | Type | Required | Options |
|---|---|---|---|
| [Field name] | Short text | Yes | — |
| [Field name] | Select menu | Yes | Option 1, Option 2 |
| [Field name] | Person | No | — |
| [Field name] | Date | Yes | — |

### Step 2: Send Message
- Channel: #[channel-name]
- Message:
  ```
  📝 *New [Item Type]*
  *Submitted by:* {{Person who triggered}}
  *[Field 1]:* {{Step 1: Field 1}}
  *[Field 2]:* {{Step 1: Field 2}}
  *Assigned to:* {{Step 1: Person field}}
  *Due:* {{Step 1: Date field}}
  ```

### Step 3: Send DM
- To: {{Step 1: Person field}}
- Message: "You've been assigned: {{Step 1: Field 1}}"

## Permissions
- Who can run: [Everyone in channel | Specific people | Channel managers]
- Published by: [Name]

## Testing Notes
- Test with each form option to verify variable substitution
- Confirm DM delivery to assigned person
- Verify message formatting in target channel
```

## Quality Standards
- Forms collect only necessary data — no optional fields unless genuinely useful.
- Variable references use correct step/field notation.
- Messages are formatted for Slack readability (bold, bullets, not walls of text).
- Workflows are named clearly so users understand their purpose from the shortcut menu.
- Error handling: consider what happens if a person field is empty.

## Permissions Required
Workflow Builder access (Slack paid plan). Channel posting permissions for target channels.

## Example
A standup workflow triggered daily at 9am: 3-field form (Yesterday, Today, Blockers), posts formatted summary to #team-standups with @mentions for blockers, sends DM to PM if any blocker is reported. Published for all team channel members.
