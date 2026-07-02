# GitHub Issue Writer

## Purpose
Creates well-structured GitHub issues — with descriptive titles, labeled descriptions, and proper metadata — using bug report and feature request templates that follow open-source and engineering team conventions.

## Auto-Trigger Patterns
- "Write a GitHub issue"
- "Create a GitHub bug report"
- "File an issue on GitHub"
- "GitHub feature request for…"
- "Draft a GitHub issue for…"

## Tool Configuration
Requires `context/integrations/github.md` with: GitHub organization/repo, personal access token or GitHub App. Auth: Personal access token with repo scope or GitHub App installation token.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Issue description, issue type (bug/feature/task), target repository
- **Optional:** Labels, milestone, assignee, project, template type, related issues

## Process
1. Select the issue template: bug report, feature request, or task.
2. Write a concise, descriptive title (imperative for features, descriptive for bugs).
3. Fill in the template sections with complete, actionable information.
4. Add labels matching the repository's label taxonomy.
5. Assign to milestone and project if applicable.
6. Link related issues (fixes, relates-to, blocked-by).
7. Add assignees if ownership is known.

## Output Format

### Bug Report
```
**Title:** [Component]: [Brief description of the bug]

**Labels:** bug, [severity], [component]
**Milestone:** [Version]
**Assignee:** [Username]

---

## Description
[1-2 sentence summary of the bug]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- OS: [e.g., macOS 14.5]
- Browser: [e.g., Chrome 125]
- Version: [e.g., v2.3.1]

## Screenshots / Logs
[Attach or paste relevant evidence]

## Additional Context
[Any other relevant information]
```

### Feature Request
```
**Title:** [Action verb]: [Feature description]

**Labels:** enhancement, [area], [priority]
**Milestone:** [Version]
**Project:** [Project name]

---

## Problem Statement
[What problem does this solve? Who has this problem?]

## Proposed Solution
[How should this work from a user perspective?]

## Alternatives Considered
[Other approaches and why they were rejected]

## Acceptance Criteria
- [ ] [Testable criterion]
- [ ] [Testable criterion]
- [ ] [Testable criterion]

## Additional Context
[Mockups, research, related issues]
```

## Quality Standards
- Titles are scannable in issue lists — include the component/area prefix.
- Bug reports include reliable reproduction steps — "it doesn't work" is insufficient.
- Feature requests explain the problem before the solution.
- Labels are from the repository's existing label set — no ad hoc labels.
- Acceptance criteria are testable by QA or the developer.
- Related issues are cross-referenced for context.

## Permissions Required
Repository write access for issue creation. Triage permission for label and milestone assignment.

## Example
```
Title: API: Rate limiting returns 500 instead of 429

Labels: bug, severity:high, api
Milestone: v2.4.0

## Description
When a client exceeds the rate limit, the API returns HTTP 500
instead of the expected 429 Too Many Requests response.

## Steps to Reproduce
1. Authenticate with a valid API key
2. Send 101 requests to `/api/v2/users` within 60 seconds
3. Observe the response on request 101

## Expected Behavior
HTTP 429 with Retry-After header and rate limit error body.

## Actual Behavior
HTTP 500 with generic server error. No Retry-After header.

## Environment
- API version: v2.3.1
- Endpoint: /api/v2/users
- Rate limit config: 100 req/min
```
