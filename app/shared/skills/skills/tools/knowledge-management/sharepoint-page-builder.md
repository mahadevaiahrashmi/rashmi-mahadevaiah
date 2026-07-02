# SharePoint Page Builder

## Purpose
Creates SharePoint modern pages using web parts, sections, news posts, and document libraries — producing content formatted for the Microsoft 365 ecosystem with proper metadata, navigation, and permissions.

## Auto-Trigger Patterns
- "Create a SharePoint page for…"
- "Build a SharePoint site page"
- "Write content for SharePoint"
- "Set up a SharePoint document library"
- Any request targeting SharePoint or Microsoft 365 intranet

## Tool Configuration
Requires `context/integrations/microsoft365.md` with: SharePoint site URL, Azure AD app registration (client ID, tenant ID), Graph API permissions. Auth: OAuth 2.0 with Sites.ReadWrite.All scope.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Page content, target SharePoint site
- **Optional:** Page template, web parts needed, metadata columns, audience targeting, document library structure

## Process
1. Select page layout: Full-width, One column, Two column, Three column.
2. Design sections with appropriate column configurations.
3. Add web parts: Text, Image, Hero, Quick Links, Document Library, List, Events, News.
4. Structure document libraries with metadata columns and views.
5. Configure page properties and metadata for search and filtering.
6. Set audience targeting for personalized content delivery.
7. Create as news post if intended for organizational communication.
8. Set permissions aligned with Microsoft 365 group membership.

## Output Format
```
# SharePoint Page: [Title]

## Page Settings
- Site: [Site name and URL]
- Type: [Site Page | News Post]
- Layout: [Full-width | Columns]
- Audience: [Everyone | Specific groups]

## Page Sections

### Section 1: Hero (Full-width)
- Web Part: Hero
- Layout: Tiles (4 items)
- Content: [Key navigation links with images]

### Section 2: Two Columns
**Left Column:**
- Web Part: Text
- Content: [Overview paragraph]

**Right Column:**
- Web Part: Quick Links
- Links: [Key resource links]

### Section 3: One Column
- Web Part: Document Library
- Library: [Library name]
- View: [View name]
- Columns shown: Name, Modified, Modified By, Category

## Document Library Structure
| Column | Type | Options |
|---|---|---|
| Category | Choice | Spec, Report, Template, Guide |
| Status | Choice | Draft, Published, Archived |
| Owner | Person | — |
| Review Date | Date | — |

## Views
| View | Filter | Sort | Columns |
|---|---|---|---|
| Active Docs | Status ≠ Archived | Modified desc | Name, Category, Owner |
| My Documents | Owner = [me] | Modified desc | Name, Status, Review Date |

## News Post Settings (if applicable)
- Thumbnail: [Image]
- Summary: [First 2 sentences]
- News source: [Site]
- Boost: [Yes/No]

## Permissions
- Site Owners: [Group] — Full Control
- Site Members: [Group] — Edit
- Site Visitors: [Group] — Read
```

## Quality Standards
- Web parts are chosen for their purpose — not every page needs every web part type.
- Document library metadata enables useful filtering and sorting.
- Pages follow the organization's SharePoint governance guidelines.
- News posts have compelling thumbnails and summaries for digest emails.
- Permissions inherit from the site group unless page-level restriction is needed.

## Permissions Required
Site Member for page creation. Site Owner for document library configuration and permissions.

## Example
A project portal page with: Hero web part (4 key links), two-column overview section, embedded document library (specs and reports with Category/Status metadata), team calendar web part, and quick links to related Teams channel and Planner board. Published as a news post to the project stakeholder group.
