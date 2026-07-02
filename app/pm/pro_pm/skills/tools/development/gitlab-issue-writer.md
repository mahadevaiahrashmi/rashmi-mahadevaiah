# GitLab Issue Writer

## Purpose
Creates well-structured GitLab issues — with descriptive titles, labeled descriptions, weights, epic linking, and milestone assignment — following GitLab's conventions and leveraging its CI/CD integration context.

## Auto-Trigger Patterns
- "Write a GitLab issue"
- "Create a GitLab ticket"
- "File a GitLab bug"
- "GitLab issue for…"
- "Draft issues for GitLab"

## Tool Configuration
Requires `context/integrations/gitlab.md` with: GitLab instance URL, project path, personal access token or OAuth token. Auth: Personal access token with api scope or OAuth with read_api + write access.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Issue description, target project, issue type (issue/incident/task)
- **Optional:** Labels, milestone, weight, epic, assignee, due date, related issues, merge request context

## Process
1. Select the issue type: Issue (default), Incident, Task, or Test Case.
2. Write a concise title with conventional prefix if used by the team.
3. Build the description using GitLab-flavored markdown.
4. Set weight (1-10 scale or team convention) for effort estimation.
5. Add scoped labels (e.g., `workflow::`, `priority::`, `type::`).
6. Link to parent epic for initiative tracking.
7. Set milestone for release targeting.
8. Add related issues and merge request references.
9. Include CI/CD context if relevant (pipeline, environment).

## Output Format
```
**Title:** [Descriptive title with optional prefix]

**Type:** [Issue | Incident | Task]
**Labels:** workflow::ready, priority::high, type::feature, team::backend
**Weight:** [1-10]
**Milestone:** [Milestone name]
**Epic:** [Epic title or &epic-id]
**Assignee:** @[username]
**Due Date:** [YYYY-MM-DD]

---

## Summary
[1-2 sentence overview of what this issue covers]

## Problem / Motivation
[Why this work is needed — user impact, business case]

## Proposal
[Detailed description of the solution or work to be done]

### Requirements
- [ ] [Specific requirement]
- [ ] [Specific requirement]
- [ ] [Specific requirement]

## Technical Considerations
- [Architecture impact]
- [API changes]
- [Database migrations]
- [CI/CD pipeline impact]

## Acceptance Criteria
- [ ] [Testable criterion]
- [ ] [Testable criterion]

## Testing Plan
- [ ] Unit tests for [component]
- [ ] Integration test for [flow]
- [ ] Manual verification of [scenario]

## Related Issues
- Blocks: #[issue-number]
- Related: #[issue-number]
- Part of: &[epic-id]

/label ~"workflow::ready" ~"priority::high" ~"type::feature"
/milestone %"[milestone-name]"
/weight [N]
/assign @[username]
```

## Quality Standards
- Scoped labels follow the project's label taxonomy (`category::value`).
- Weight is calibrated to the team's scale — not ad hoc per issue.
- Quick actions (slash commands) are used for metadata assignment.
- CI/CD context is included when the issue affects pipelines or deployments.
- Epic linking ensures initiative-level tracking and reporting.
- Testing plan is explicit, not assumed.

## Permissions Required
Project Reporter for issue creation. Developer for label creation and milestone assignment.

## Example
```
Title: Implement rate limiting for public API endpoints

Type: Issue
Labels: workflow::ready, priority::high, type::feature, team::platform
Weight: 5
Milestone: v3.1
Epic: &12 API Security Hardening

## Summary
Add configurable rate limiting to all public API endpoints to
prevent abuse and ensure fair usage across tenants.

## Proposal
Implement token bucket rate limiting at the API gateway level
with per-tenant configurable limits.

### Requirements
- [ ] Default limit: 100 req/min per API key
- [ ] Tenant-level override via admin config
- [ ] Return 429 with Retry-After header when exceeded
- [ ] Rate limit headers on all responses (X-RateLimit-*)

## Technical Considerations
- Use Redis for distributed rate limit counters
- Gateway middleware approach (not per-endpoint)
- Pipeline: add rate limit integration tests to CI

/label ~"workflow::ready" ~"priority::high" ~"type::feature"
/milestone %"v3.1"
/weight 5
```
