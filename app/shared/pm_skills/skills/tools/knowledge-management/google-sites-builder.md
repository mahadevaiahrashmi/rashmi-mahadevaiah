# Google Sites Builder

## Purpose
Designs Google Sites pages with proper structure, navigation, embedded content, and permissions — creating internal team sites or project hubs that centralize information within the Google Workspace ecosystem.

## Auto-Trigger Patterns
- "Build a Google Site for…"
- "Create a team site"
- "Set up a project hub site"
- "Design an internal site in Google Sites"
- "Google Sites page structure for…"

## Tool Configuration
Requires `context/integrations/google-workspace.md` with: Google Workspace domain, OAuth credentials with Sites API access. Auth: OAuth 2.0 or domain admin for organization-wide publishing.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Site purpose, target audience, content inventory
- **Optional:** Navigation structure, embedded resources (Sheets, Docs, Slides), branding, permissions

## Process
1. Define the site purpose and information architecture.
2. Design the navigation: top-level pages and subpages (max 2 levels).
3. Plan each page layout: sections, columns, text, images, embeds.
4. Identify embedded content: Google Sheets charts, Docs, Slides, Calendar, YouTube.
5. Apply branding: header image, logo, color theme, fonts.
6. Configure permissions: site editors, viewers, published scope.
7. Set up the homepage as a navigation hub with key links and updates.
8. Test responsiveness for mobile viewing.

## Output Format
```
# Google Site: [Site Name]

## Site Purpose
[1-2 sentences on what this site is for]

## Navigation Structure
- **Home** — Overview, quick links, recent updates
- **[Page 1]** — [Description]
  - [Subpage 1a]
  - [Subpage 1b]
- **[Page 2]** — [Description]
- **[Page 3]** — [Description]
- **Resources** — Links, templates, tools

## Page Layouts

### Home Page
- Hero banner: [Site title + tagline]
- Section 1: Quick Links (button grid)
- Section 2: Embedded Google Calendar
- Section 3: Recent updates (linked Docs)
- Section 4: Team contacts

### [Page 1]
- Section 1: Overview text
- Section 2: Embedded Google Sheet chart
- Section 3: Two-column layout (text + image)
- Section 4: Collapsible FAQ

## Embedded Content
| Embed | Source | Page |
|---|---|---|
| Metrics Dashboard | Google Sheets | Home |
| Project Timeline | Google Sheets | [Page 1] |
| Team Calendar | Google Calendar | Resources |
| Onboarding Deck | Google Slides | Resources |

## Permissions
- Editors: [Team leads]
- Published to: [Organization / specific group]
- Custom domain: [Optional internal URL]

## Branding
- Header: [Logo + site name]
- Theme: [Color scheme]
- Footer: [Contact info, last updated]
```

## Quality Standards
- Navigation is flat — no more than 2 levels of page hierarchy.
- Embedded content is from canonical sources (not copied data).
- Pages load quickly — avoid excessive embeds per page.
- Site works on mobile for field team access.
- Permissions are scoped appropriately — not published wider than intended.

## Permissions Required
Google Workspace user with Sites creation access. Domain admin for custom URL or organization-wide publishing.

## Example
A product team hub site with 5 pages (Home, Roadmap, Metrics, Resources, Team), embedded Sheets dashboard on Home, Slides deck on Resources, Calendar widget, and published to the engineering organization with 3 editors and view-only access for the broader company.
