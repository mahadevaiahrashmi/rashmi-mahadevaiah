# Confluence Page Builder

## Purpose
Generates complete Confluence pages using proper heading hierarchy, macros, panels, tables, and page properties — producing well-structured documentation that is navigable, searchable, and follows team wiki conventions.

## Auto-Trigger Patterns
- "Create a Confluence page for…"
- "Write this up in Confluence format"
- "Draft a wiki page for…"
- "Build a Confluence doc"
- Any request targeting Confluence as the output format

## Tool Configuration
Requires `context/integrations/confluence.md` with: Confluence Cloud/Server URL, space key, API token (email + token pair). Auth: API token for Cloud, personal access token for Data Center.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Topic/content, target Confluence space
- **Optional:** Parent page, template, labels, page restrictions, content type (decision doc, spec, runbook, how-to)

## Process
1. Select the appropriate page structure based on content type.
2. Build heading hierarchy: H1 (page title), H2 (major sections), H3 (subsections).
3. Add a Table of Contents macro at the top for pages with 4+ sections.
4. Use Info, Note, Warning, and Tip panels to highlight key information.
5. Structure data in tables with clear headers and consistent formatting.
6. Add Expand sections for detailed/optional content that shouldn't dominate the page.
7. Include Status macros for state indicators (Green/Yellow/Red, Draft/Final).
8. Set page properties for structured metadata (owner, status, last review date).
9. Add labels for discoverability and space organization.
10. Set page restrictions if content is sensitive.

## Output Format
```
Page Title: [Title]
Space: [Space Key]
Parent Page: [Parent title]
Labels: [label1, label2]
Status: [Draft | In Review | Final]

---

{toc:minLevel=2|maxLevel=3}

## Overview
[1-2 paragraph summary of the page purpose]

{info}
**Owner:** [Name] | **Last Updated:** [Date] | **Status:** {status:colour=Green|title=Final}
{info}

## [Section Heading]
[Content with proper formatting]

| Column 1 | Column 2 | Column 3 |
|---|---|---|
| Data | Data | Data |

{note}
[Important callout that readers should be aware of]
{note}

## [Section Heading]

{expand:Detailed technical specification}
[Detailed content hidden by default]
{expand}

## Decision Log
| Date | Decision | Rationale | Owner |
|---|---|---|---|
| [Date] | [What was decided] | [Why] | [Who] |

## Related Pages
- [Link to related page 1]
- [Link to related page 2]

{page-properties}
| Owner | [Name] |
| Status | Final |
| Review Date | [Date] |
{page-properties}
```

## Quality Standards
- Heading hierarchy is strict — no skipping levels (H2 → H4).
- Info panels are used for context, Warning panels for risks, Note panels for caveats.
- Tables have clear headers and consistent data formatting.
- Page properties enable structured queries across the space.
- Labels follow the space's taxonomy for cross-page navigation.
- Pages are scannable — a reader can grasp the key points from headings and panels alone.

## Permissions Required
Space contributor for page creation. Space admin for restriction management and template creation.

## Example
A product spec page with: TOC macro, overview with status panel, 5 major sections (Problem, Solution, Requirements, Technical Design, Timeline), 2 expand sections for API details, a decision log table, page properties (Owner, Status, Review Date), and 3 labels (product-spec, q3, payments).
