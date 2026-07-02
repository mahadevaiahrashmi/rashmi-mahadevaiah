# Teams Channel Setup

## Purpose
Designs Microsoft Teams channel structures — defining standard and private channels, tabs, connectors, and moderation settings — to organize team communication and collaboration effectively within the Microsoft 365 ecosystem.

## Auto-Trigger Patterns
- "Set up Teams channels"
- "Organize our Microsoft Teams"
- "Create Teams channel structure"
- "Configure Teams for [project/team]"
- "Teams channel plan for…"

## Tool Configuration
Requires `context/integrations/microsoft365.md` with: Teams tenant ID, team ID, Graph API admin credentials. Auth: OAuth 2.0 with Team.Create, Channel.Create, and TeamsTab.Create scopes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Team purpose, communication needs
- **Optional:** Channel list, tab requirements, connector integrations, moderation rules, member roles

## Process
1. Define the team scope and membership model.
2. Design channel structure: General + topic/project channels.
3. Determine standard vs private channels based on access needs.
4. Configure tabs for each channel: Planner, Wiki, SharePoint, OneNote.
5. Set up connectors: incoming webhooks, RSS feeds, third-party notifications.
6. Configure moderation settings per channel.
7. Define posting guidelines and conventions.
8. Document the channel purpose and usage expectations.

## Output Format
```
# Teams Structure: [Team Name]

## Team Settings
- Visibility: [Public | Private]
- Owner(s): [Names]
- Member policy: [Open join | Owner approval]

## Channels
| Channel | Type | Purpose | Moderation |
|---|---|---|---|
| General | Standard | Team-wide announcements | Owners only post |
| #proj-[name] | Standard | Project discussion | Open |
| #design | Standard | Design reviews | Open |
| #leadership | Private | Sensitive discussions | Owners only post |
| #incidents | Standard | Live incident response | Open |

## Tabs per Channel
### General
- Wiki: Team handbook and conventions
- Planner: Team task board
- SharePoint: Document library

### #proj-[name]
- Planner: Project tasks
- OneNote: Meeting notes
- SharePoint: Project files
- Website: External dashboard link

## Connectors
| Channel | Connector | Purpose |
|---|---|---|
| #incidents | PagerDuty | Alert notifications |
| General | RSS | Industry news feed |
| #proj-[name] | Incoming Webhook | CI/CD build status |

## Moderation Rules
| Channel | Who Can Post | Reply Permissions |
|---|---|---|
| General | Owners + moderators | Everyone |
| #leadership | Members only | Members only |
| All others | Everyone | Everyone |

## Channel Conventions
- Use threads for discussions — keep main channel scannable
- @mention channel only for action items affecting the whole channel
- Pin important messages (decisions, links, announcements)
- Use the appropriate channel — avoid cross-posting
```

## Quality Standards
- Channel count is manageable — fewer focused channels beat many sparse ones.
- Private channels are used sparingly — only for genuinely sensitive content.
- Tabs provide quick access to relevant tools without cluttering.
- Moderation prevents noise in announcement channels without stifling discussion.
- Conventions are documented and accessible to new team members.

## Permissions Required
Team Owner for channel creation and moderation settings. Teams Admin for organization-wide policies.

## Example
A product team with: General (announcements, moderated), 3 project channels with Planner/SharePoint tabs, 1 private leadership channel, 1 social channel, PagerDuty connector on incidents, and documented posting conventions. Total: 6 channels, each with purpose-specific tabs.
