# Outlook Template

## Purpose
Creates Outlook-specific email templates and configurations — using categories, quick steps, templates, scheduling, and voting buttons — to optimize email workflows within the Microsoft 365 ecosystem.

## Auto-Trigger Patterns
- "Create an Outlook template"
- "Set up Outlook quick steps"
- "Build Outlook email templates"
- "Outlook workflow for…"
- "Microsoft Outlook automation"

## Tool Configuration
Requires `context/integrations/microsoft365.md` with: Microsoft 365 account, Graph API credentials with Mail.ReadWrite and Mail.Send scopes. Auth: OAuth 2.0 with delegated or application permissions.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Template purpose, email workflow type
- **Optional:** Categories, quick step definitions, voting button options, rules, scheduling preferences

## Process
1. Design email templates using Outlook's .oft format or Quick Parts.
2. Configure categories with colors for email organization.
3. Build Quick Steps for multi-action email processing.
4. Set up rules for automatic filing, flagging, and forwarding.
5. Add voting buttons for decision-gathering emails.
6. Configure scheduling options for delayed send.
7. Design signatures for different contexts.

## Output Format
```
# Outlook Configuration: [Workflow Name]

## Templates

### Template: [Name]
**Format:** [.oft file | Quick Parts | My Templates]
**Subject:** [Pre-filled subject]
**Body:**
[Template content with merge field placeholders]

**Attachments:** [Standard attachments if any]
**Voting Buttons:** [Approve/Reject | Yes/No | Custom options]

---

## Categories
| Category | Color | Purpose |
|---|---|---|
| Action Required | Red | Needs response/action |
| Waiting | Yellow | Sent, awaiting reply |
| [Project Name] | Blue | Project-specific |
| FYI | Green | No action needed |
| Delegated | Purple | Forwarded to team |

## Quick Steps
| Name | Actions | Shortcut |
|---|---|---|
| Acknowledge | Reply "Thanks, reviewing" + Flag 2 days | Ctrl+Shift+1 |
| Delegate | Forward to [team] + Categorize "Delegated" | Ctrl+Shift+2 |
| Archive Project | Move to [folder] + Mark read | Ctrl+Shift+3 |
| Weekly Update | New from template + Add recipient list | Ctrl+Shift+4 |

## Rules
| Condition | Action |
|---|---|
| From [manager] + flagged | Category: Action Required |
| Subject "[DECISION]" | Category: Action Required, Desktop alert |
| CC only (not To) | Category: FYI |
| From [team DL] | Move to [Team] folder |

## Voting Buttons Usage
| Template | Buttons | Use Case |
|---|---|---|
| Feature Approval | Approve; Reject; Needs Discussion | Feature sign-off |
| Date Poll | Option A; Option B; Option C | Meeting scheduling |
| Priority Check | P1; P2; P3 | Backlog prioritization |

## Scheduling Guide
| Type | Schedule | Notes |
|---|---|---|
| Manager updates | Monday 8am | Start-of-week visibility |
| Team digests | Friday 3pm | End-of-week summary |
| External | Tue/Wed 10am | Business hours, mid-week |

## Signatures
### Standard
[Name] | [Title] | [Company]
📞 [Phone] | 📅 [Booking link]

### Reply
[Name] | [Title]
```

## Quality Standards
- Categories are limited to 8-10 — enough for organization without decision fatigue.
- Quick Steps save at least 3 clicks per use — otherwise they're not worth the setup.
- Rules don't over-file — important emails should stay visible.
- Voting buttons have clear, mutually exclusive options.
- Templates are maintained — outdated templates cause more harm than no templates.

## Permissions Required
Outlook desktop or web access for template creation. Exchange admin for organization-wide rules and templates.

## Example
A PM workflow with: 4 templates (status update with voting buttons, escalation, meeting follow-up, stakeholder brief), 6 categories, 4 Quick Steps with keyboard shortcuts, 5 rules for auto-categorization, and voting button configurations for feature approvals (Approve/Reject/Discuss).
