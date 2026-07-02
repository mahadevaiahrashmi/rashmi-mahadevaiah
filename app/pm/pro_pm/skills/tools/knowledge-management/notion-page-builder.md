# Notion Page Builder

## Purpose
Creates Notion pages using native formatting — toggle blocks, callouts, databases, views, linked databases, and synced blocks — producing documentation that leverages Notion's unique capabilities for rich, interactive content.

## Auto-Trigger Patterns
- "Create a Notion page for…"
- "Write this in Notion format"
- "Build a Notion doc"
- "Draft this for Notion"
- Any request specifying Notion as the target platform

## Tool Configuration
Requires `context/integrations/notion.md` with: Notion workspace ID, integration token (internal integration). Auth: Internal integration token with page/database access capabilities.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Content topic, target workspace or parent page
- **Optional:** Database properties, view types, template type, icon/cover preferences, sharing settings

## Process
1. Set page metadata: icon (emoji or custom), cover image, title.
2. Structure content using Notion's block types: headings, text, toggles, callouts, dividers.
3. Use toggle blocks to hide detailed content, keeping pages scannable.
4. Add callout blocks for key information (tip, warning, info, question).
5. Create inline databases where structured data is needed.
6. Configure database views: Table, Board, Gallery, List, Calendar, Timeline.
7. Add linked databases to reference data from other pages.
8. Use synced blocks for content that appears across multiple pages.
9. Apply page-level formatting: column layouts, bookmarks, embeds.

## Output Format
```
# 📋 [Page Title]

> 💡 **Callout:** [Key context or TL;DR for this page]

## Overview
[Summary paragraph]

---

## [Section with Toggle Details]

▶ **[Toggle: Detailed Background]**
  [Expanded content hidden by default]

▶ **[Toggle: Technical Details]**
  [Expanded content hidden by default]

## [Database Section]
**Inline Database: [Name]**
| Property | Type | Options |
|---|---|---|
| Name | Title | — |
| Status | Select | Not Started, In Progress, Done |
| Owner | Person | — |
| Due Date | Date | — |

**Views:**
- Table: All items, sorted by due date
- Board: Grouped by status
- Calendar: By due date

## [Section]
| | Column 1 | Column 2 |
|---|---|---|
| Row content in column layout | Content A | Content B |

---

> ⚠️ **Warning:** [Important caveat or risk to highlight]

## Related Pages
- 🔗 [Linked page 1]
- 🔗 [Linked page 2]
```

## Quality Standards
- Toggle blocks are used for detail — the page reads well with all toggles collapsed.
- Callout blocks use consistent emoji conventions (💡 tip, ⚠️ warning, ℹ️ info, ❓ question).
- Databases have appropriate views for different use cases.
- Page is visually clean — not every block type needs to appear on every page.
- Linked databases connect to canonical data sources, not duplicated content.

## Permissions Required
Workspace member with page creation access. Integration must be connected to the target page/database.

## Example
A project kickoff page with: overview callout, 3 toggle sections (context, goals, constraints), an inline task database with Board and Calendar views, a linked database pulling team members from a People database, and synced blocks for the project charter that also appears on the team homepage.
