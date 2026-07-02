# Google Docs Builder

## Purpose
Produces well-structured Google Docs with proper heading hierarchy, table of contents, commenting conventions, and sharing guidance — creating documents optimized for collaborative editing and review workflows.

## Auto-Trigger Patterns
- "Write this in Google Docs format"
- "Create a Google Doc for…"
- "Draft a document for Google Docs"
- "Build a shared doc for…"
- Any request targeting Google Docs as the output

## Tool Configuration
Requires `context/integrations/google-workspace.md` with: Google Workspace domain, service account or OAuth credentials. Auth: OAuth 2.0 with Drive and Docs API scopes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Document content or topic, document type (spec, proposal, report, memo)
- **Optional:** Template, collaborators, sharing permissions, folder destination, review workflow

## Process
1. Apply the correct heading structure: Title, H1 (sections), H2 (subsections), H3 (details).
2. Insert table of contents at the top (auto-generated from headings).
3. Structure content for collaborative editing — clear section ownership.
4. Add tables for structured data with consistent formatting.
5. Include comment anchors and suggested edit guidance for reviewers.
6. Set up sharing permissions: Editor, Commenter, Viewer.
7. Configure notification and versioning expectations.
8. Add document metadata: owner, status, date, version.

## Output Format
```
[Document Title]

Document Owner: [Name]
Status: [Draft | In Review | Final]
Last Updated: [Date]

---
Table of Contents
[Auto-generated from headings]
---

# [Section 1]
## [Subsection 1.1]
[Content]

## [Subsection 1.2]
[Content with table]

| Header 1 | Header 2 | Header 3 |
|---|---|---|
| Data | Data | Data |

# [Section 2]
[Content]

> 💡 Note: [Important callout using blockquote]

# Appendix
[Supporting material]

---
## Review Instructions
- Use **Suggesting Mode** for proposed changes
- Add comments with @mention for questions
- Resolve comments after addressing feedback
- Final approval: [Approver name] changes doc status to Final

## Sharing Settings
- [Team] — Editor
- [Stakeholders] — Commenter
- [Executives] — Viewer
- Link sharing: [Organization] with Viewer access
```

## Quality Standards
- Heading hierarchy is consistent — never skip levels.
- Table of contents is present for documents with 3+ sections.
- Document is scannable — key takeaways are visible from headings alone.
- Review workflow is explicit — who approves, how to comment, when done.
- Sharing permissions follow least-privilege principle.

## Permissions Required
Google Drive access for file creation. Shared drive contributor for team drive placement.

## Example
A product requirements doc with: title block (owner, status, date), auto-TOC, 6 sections (Overview, Problem, Solution, Requirements, Timeline, Risks), 2 tables, blockquote callouts for key decisions, review instructions for 3 reviewer roles, and sharing configured for the product team (editors) and leadership (commenters).
