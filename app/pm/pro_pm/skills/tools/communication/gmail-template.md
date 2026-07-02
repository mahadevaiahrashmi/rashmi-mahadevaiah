# Gmail Template

## Purpose
Creates Gmail-specific email templates and configurations — leveraging labels, filters, canned responses, scheduling, and Google Workspace features — to streamline recurring email workflows for product managers.

## Auto-Trigger Patterns
- "Create a Gmail template"
- "Set up Gmail filters for…"
- "Build a Gmail canned response"
- "Gmail workflow for…"
- "Email template for Gmail"

## Tool Configuration
Requires `context/integrations/google-workspace.md` with: Gmail API access, OAuth credentials with gmail.send and gmail.settings.basic scopes. Auth: OAuth 2.0 with Google Workspace account.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Template purpose, email type
- **Optional:** Label structure, filter criteria, schedule preferences, signature variations, audience

## Process
1. Design the email template using Gmail's template (canned response) format.
2. Define labels for organizational workflow (project, status, priority).
3. Create filter rules for automatic labeling, archiving, or forwarding.
4. Set scheduling preferences for send-later patterns.
5. Configure multiple signatures for different contexts.
6. Build template variables for personalization points.
7. Document the workflow for team adoption.

## Output Format
```
# Gmail Configuration: [Workflow Name]

## Templates (Canned Responses)

### Template: [Name]
**Use Case:** [When to use this template]
**Subject:** [Pre-filled subject line]
**Body:**
Hi {{Name}},

[Template body with personalization placeholders marked as {{variable}}]

[Standard closing]
[Signature]

---

## Labels
| Label | Color | Purpose |
|---|---|---|
| [Project]/Active | Green | Active project emails |
| [Project]/Waiting | Yellow | Awaiting response |
| Action Required | Red | Needs your action |
| FYI | Blue | Informational only |

## Filters
| Criteria | Action |
|---|---|
| From: [stakeholder@co.com] | Label: [Project], Star |
| Subject contains: "[Sprint]" | Label: Sprint Updates, Skip Inbox |
| To: [team-alias] + has:attachment | Label: Team/Attachments |

## Scheduling Guidelines
| Email Type | Best Send Time | Reason |
|---|---|---|
| Decision requests | Tue-Thu 9-11am | Peak attention hours |
| Weekly updates | Friday 2pm | End-of-week wrap |
| External outreach | Tue 10am | Highest open rates |

## Signatures
### Internal
[Name] | [Title]
[Team] | [Company]

### External
[Full Name] | [Title]
[Company] | [Phone]
[LinkedIn] | [Calendar booking link]

## Workflow
1. Select template from Gmail Templates menu
2. Replace {{variables}} with actual values
3. Apply appropriate label before sending
4. Use Schedule Send for optimal timing
5. Set follow-up reminder if no response in 48h
```

## Quality Standards
- Templates have clear personalization points — not generic copy-paste blocks.
- Labels follow a consistent hierarchy (Project/Status pattern).
- Filters reduce inbox noise without hiding important messages.
- Scheduling aligns with recipient time zones and attention patterns.
- Signatures match the context — internal brevity vs external professionalism.

## Permissions Required
Gmail account access. Google Workspace admin for organization-wide template distribution.

## Example
A PM's weekly workflow: 5 templates (stakeholder update, sprint report, meeting follow-up, feature request response, escalation), 8 labels organized by project and status, 4 filters auto-labeling team communications, and a scheduling guide matching email types to optimal send times.
