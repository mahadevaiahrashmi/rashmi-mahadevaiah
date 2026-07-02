# Confluence Space Organizer

## Purpose
Designs and organizes a Confluence space structure — defining the page tree, label taxonomy, templates, permissions, and homepage layout to make knowledge discoverable and maintainable.

## Auto-Trigger Patterns
- "Organize our Confluence space"
- "Set up a Confluence space for…"
- "Restructure the wiki"
- "Design a Confluence information architecture"
- "Clean up our Confluence space"

## Tool Configuration
Requires `context/integrations/confluence.md` with: Confluence Cloud/Server URL, space key, admin API token. Auth: Space admin permissions required for structure changes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Space purpose, team/audience, content types to be stored
- **Optional:** Existing page inventory, governance policies, template needs, permission model

## Process
1. Define the space purpose and primary audience.
2. Design the page tree hierarchy (max 3-4 levels deep).
3. Create a label taxonomy with namespaced labels (type:, status:, team:).
4. Build page templates for recurring content types.
5. Configure permissions: space-level groups, page-level restrictions.
6. Design the homepage with navigation panels, recent updates, and key links.
7. Set up a page lifecycle policy (review cadence, archival rules, ownership).
8. Document space conventions for contributors.

## Output Format
```
# Confluence Space: [Space Name]

## Space Purpose
[1-2 sentences describing what this space is for and who uses it]

## Page Tree
- Home
  - Getting Started
  - [Category 1]
    - [Subcategory A]
    - [Subcategory B]
  - [Category 2]
  - Templates
  - Archive

## Label Taxonomy
| Namespace | Labels | Purpose |
|---|---|---|
| type: | spec, decision, runbook, how-to | Content type |
| status: | draft, review, final, archived | Lifecycle |
| team: | platform, mobile, growth | Ownership |
| quarter: | q1, q2, q3, q4 | Time period |

## Templates
| Template | Use Case | Required Fields |
|---|---|---|
| Product Spec | Feature specifications | Owner, Status, Problem, Solution |
| Decision Record | Architecture decisions | Context, Options, Decision, Consequences |
| Runbook | Operational procedures | Prerequisites, Steps, Rollback |

## Permissions
| Group | Access Level |
|---|---|
| Engineering | View + Edit |
| Product | View + Edit |
| Stakeholders | View Only |
| Space Admins | Full Admin |

## Homepage Layout
- Welcome banner with space description
- Quick links panel (key pages, templates)
- Recently updated pages macro
- Page tree navigation macro
- Space activity feed

## Governance
- Page review: Every 6 months, owner receives reminder
- Archival: Pages unchanged for 12 months flagged for review
- Ownership: Every page must have an Owner in page properties
```

## Quality Standards
- Page tree is no more than 4 levels deep — flat is better than nested.
- Labels are namespaced to avoid collision and enable structured queries.
- Templates enforce consistency without over-constraining contributors.
- Homepage serves as a navigational hub, not a content dump.
- Governance policy prevents wiki rot and orphaned pages.

## Permissions Required
Space administrator for structure changes, template creation, and permission management.

## Example
An Engineering space with 5 top-level categories (Architecture, Services, Runbooks, RFCs, Archive), 12 labels across 4 namespaces, 4 templates (RFC, ADR, Runbook, Service Doc), role-based permissions for 3 groups, and a homepage with quick links, recent updates, and a search-friendly layout.
