# Release Notes

## Purpose
Write release notes for both internal and external audiences — capturing full technical details and migration steps for internal teams while communicating user-facing benefits and changes for customers. Ensures every audience gets the information they need in the format they can consume.

## Auto-Trigger Patterns
- "write release notes for [feature/version]"
- "changelog for [release]"
- "what's new for [version]"
- "internal release notes"
- "customer-facing release notes"
- "document what shipped in [release]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Features / changes shipped | Yes | User prompt |
| Technical details | Recommended | User prompt or eng docs |
| User impact description | Recommended | User prompt |
| Known issues | Optional | User prompt |
| Migration requirements | Optional | User prompt |

## Process
1. **Catalog all changes** — List every change: new features, improvements, bug fixes, deprecations, breaking changes. Categorize by type.
2. **Write internal release notes** — Full detail: technical changes, API updates, database migrations, configuration changes, deployment notes, known issues, workarounds.
3. **Write external release notes** — User-facing: what's new (benefits, not features), how to use it, what's changed, what's fixed. Language should be benefit-oriented.
4. **Identify breaking changes** — Any changes that require customer action. Highlight prominently with migration instructions.
5. **Document known issues** — Issues shipping with the release, planned fixes, and workarounds.
6. **Add visual aids** — Screenshots, GIFs, or video links for significant UX changes.
7. **Version and date** — Clear versioning and release date for traceability.

## Output Format
```
## Release Notes: [Version / Feature Name]
**Release Date:** [date]  |  **Version:** [X.Y.Z]

---
### External Release Notes (Customer-Facing)

#### What's New
**[Feature Name]** — [One-sentence benefit statement]
[2-3 sentence description of what it does and why it matters to the user]

#### Improvements
- **[Improvement]:** [What's better and how it helps]

#### Bug Fixes
- Fixed an issue where [user-visible symptom] — [now what happens instead]

#### Breaking Changes
⚠️ **[Change]** — [What customers need to do. Step-by-step migration.]

#### Known Issues
- [Issue description] — Workaround: [how to work around it]. Fix expected: [date].

---
### Internal Release Notes

#### Technical Changes
| Change | Type | Impact | Details |
|--------|------|--------|---------|
| [Change] | Feature / Fix / Refactor | [Scope] | [Technical detail] |

#### API Changes
- **New endpoint:** `POST /api/v2/[resource]` — [Purpose]
- **Deprecated:** `GET /api/v1/[resource]` — Sunset date: [date]

#### Database Migrations
- [Migration description and rollback procedure]

#### Configuration Changes
- [New env vars, feature flags, config changes]

#### Deployment Notes
- [Special deployment procedures, ordering requirements]

#### Known Issues (Internal)
- [Issue with internal context and planned fix]
```

## Quality Standards
- External notes lead with benefits, not technical implementation details.
- Breaking changes are impossible to miss — visually highlighted with clear migration steps.
- Bug fixes describe the symptom (what user saw), not the cause (what code changed).
- Internal notes are comprehensive enough for support and CS to handle questions.

**Anti-patterns:** Technical jargon in customer-facing notes, burying breaking changes, listing features without explaining benefits, incomplete migration instructions.

## Framework References
- **User-centric writing** — Benefits over features in external communication.
- **Semantic versioning** — Version numbering conventions for change significance.

## Formatting Guidelines
- Clear separation between internal and external sections.
- Warning emoji (⚠️) for breaking changes.
- Tables for internal technical changes (structured reference).
- External notes in natural language paragraphs (approachable tone).

## Example
**External:** "**Smart Filters** — Find exactly what you need, faster. Filters now remember your preferences and suggest combinations based on your most common searches. No more rebuilding the same filter every Monday morning."

**Internal:** "Smart Filters: Added filter persistence via localStorage with server-side backup to user_preferences table. New cron job syncs preferences daily. Feature flag: `smart_filters_v2`. Migration: `20240315_add_filter_preferences_column.sql` (reversible, no downtime)."
