# Dropbox Paper Builder

## Purpose
Creates Dropbox Paper documents using the platform's rich formatting features — task lists, timelines, code blocks, media embeds, and collaborative editing — producing clean, collaborative docs for team communication.

## Auto-Trigger Patterns
- "Create a Dropbox Paper doc"
- "Write this in Paper format"
- "Build a Paper document for…"
- "Draft in Dropbox Paper"
- Any request targeting Dropbox Paper

## Tool Configuration
Requires `context/integrations/dropbox.md` with: Dropbox account, Paper API access. Auth: OAuth 2.0 with files.content.write and sharing.write scopes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Document content and purpose
- **Optional:** Collaborators, folder destination, task assignments, media embeds, presentation mode settings

## Process
1. Structure the document with clear headings (H1, H2, H3).
2. Use Paper's native features: task lists with assignees and due dates, timelines, code blocks.
3. Add media: images, YouTube embeds, SoundCloud, file attachments from Dropbox.
4. Create task lists with @mentions for assignment and due dates.
5. Build timelines for project milestones and key dates.
6. Use code blocks with syntax highlighting for technical content.
7. Add comments and annotations for collaborative review.
8. Configure sharing and folder organization.

## Output Format
```
# [Document Title]

*Created by [Name] — [Date]*

## Overview
[Summary paragraph with context]

---

## [Section 1]
[Content using rich formatting]

### Task List
- [ ] [Task description] @[assignee] — Due: [date]
- [ ] [Task description] @[assignee] — Due: [date]
- [x] [Completed task] @[assignee] ✓

### Timeline
| Date | Milestone | Owner |
|---|---|---|
| Jun 1 | Kickoff | Team |
| Jun 15 | Design review | Design |
| Jul 1 | Development start | Engineering |
| Aug 1 | Beta launch | Product |

## [Section 2]

### Code Example
```python
def calculate_metric(data):
    return sum(data) / len(data)
```

## [Section 3]
[Embedded media: image, video, or Dropbox file link]

---

## Notes & Comments
[Space for collaborative additions]

## Sharing
- Editors: [Team members]
- Viewers: [Stakeholders]
- Folder: [Dropbox folder path]
```

## Quality Standards
- Task lists use @mentions for clear ownership — no unassigned tasks.
- Timelines are used for sequential milestones, not arbitrary date lists.
- Code blocks specify the language for proper syntax highlighting.
- Documents are concise — Paper favors shorter, focused docs over long wikis.
- Folder organization mirrors team structure for discoverability.

## Permissions Required
Dropbox account with Paper access. Folder owner for organizing docs within shared folders.

## Example
A sprint planning doc with: overview section, 8-item task list with 4 assignees and due dates, 4-milestone timeline, code snippet for a key API endpoint, embedded mockup image from Dropbox, and shared with the engineering team as editors and PM as viewer.
