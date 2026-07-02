# Jira Roadmap Sync

## Purpose
Aligns a product roadmap with Jira by mapping roadmap items to epics, setting fix versions, updating timelines, and applying labels for roadmap themes — ensuring the source-of-truth roadmap is reflected accurately in execution tooling.

## Auto-Trigger Patterns
- "Sync the roadmap to Jira"
- "Map roadmap items to epics"
- "Update Jira timeline from roadmap"
- "Set fix versions for Q3 roadmap"
- "Align Jira epics with our roadmap"

## Tool Configuration
Requires `context/integrations/jira.md` with: Jira Cloud URL, project key, API token, Advanced Roadmap access if applicable. Auth: API token with admin-level project permissions for version management.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Roadmap document or structured roadmap data (themes, items, timelines)
- **Optional:** Existing Jira epic list, fix version scheme, label taxonomy, team assignments

## Process
1. Parse the roadmap — extract themes, initiatives, items, owners, target dates.
2. Audit existing Jira epics — identify already-mapped items, gaps, and orphaned epics.
3. Create or update fix versions matching roadmap milestones and releases.
4. Map each roadmap item to a Jira epic (create new or link existing).
5. Set epic start/due dates to match roadmap timelines.
6. Apply theme labels using a consistent taxonomy (e.g., `roadmap:growth`).
7. Update epic descriptions with roadmap context.
8. Generate a sync report showing mappings, gaps, and conflicts.

## Output Format
```
# Roadmap-to-Jira Sync Report

## Fix Versions Created/Updated
| Version | Start | Release | Status |
|---|---|---|---|
| 2026-Q3-R1 | Jul 1 | Aug 15 | Created |

## Epic Mappings
| Roadmap Item | Jira Epic | Fix Version | Theme Label | Status |
|---|---|---|---|---|
| Smart Search | PROJ-200 | 2026-Q3-R1 | roadmap:discovery | Updated |
| Bulk Actions | — | 2026-Q3-R2 | roadmap:productivity | NEW |

## Gaps & Conflicts
- PROJ-180 exists in Jira but not on roadmap — archive or add?
- "AI Recommendations" on roadmap has no epic — needs decomposition.

## Suggested Actions
1. Create epic for "Bulk Actions" and decompose into stories.
2. Review PROJ-180 with stakeholders for inclusion or archival.
```

## Quality Standards
- Every roadmap item maps to exactly one epic (no duplicates, no orphans).
- Fix versions follow a consistent naming scheme.
- Theme labels are from a controlled vocabulary.
- Timeline conflicts are surfaced explicitly.
- Sync report is actionable — every gap has a recommended resolution.

## Permissions Required
Project Admin for fix version management. Issue edit permissions for epic updates.

## Example
Syncing a Q3 roadmap with 8 items: 3 existing epics updated, 2 new epics created, 2 fix versions established, 1 conflict flagged, and 1 orphaned epic identified for stakeholder review.
