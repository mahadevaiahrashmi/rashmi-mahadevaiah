# Backlog Grooming

## Purpose
Groom a product backlog by reviewing items for clarity, estimating effort, updating priorities, splitting oversized stories, removing stale items, and ensuring the top of the backlog is sprint-ready. A well-groomed backlog is the difference between productive sprint planning and chaotic scrambling.

## Auto-Trigger Patterns
- "groom the backlog"
- "review the backlog"
- "backlog refinement for [team]"
- "prepare the backlog for planning"
- "clean up the backlog"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Current backlog items | Yes | User prompt |
| Strategic priorities | No | `context/company/overview.md` |
| Team capacity | Optional | `context/me/working-agreements.md` |
| Sprint feedback / velocity | Optional | User prompt |
| Customer feedback | Optional | `artifacts/research/` |

## Process
1. **Review top items** — Do the top 10-15 items have clear descriptions, acceptance criteria, and estimates?
2. **Check sprint-readiness** — For items in the next 2 sprints: AC defined? Dependencies resolved? Sized?
3. **Split large items** — Any story estimated >8 points or >1 sprint gets split into smaller, independently deliverable pieces.
4. **Update priorities** — Re-rank based on current strategy, customer feedback, and dependencies.
5. **Identify items to combine** — Related small items that should be one story.
6. **Remove stale items** — Items untouched for >3 months with no strategic relevance. Archive, don't delete.
7. **Add missing items** — New requirements, bugs, or tech debt that should be tracked.
8. **Validate estimates** — Challenge estimates that seem off based on historical data.
9. **Quality-check** — Top of backlog is sprint-ready, priorities reflect current strategy, no zombie items.

## Output Format
```
## Backlog Grooming: [Team/Sprint]
**Date:** [Date] | **Items Reviewed:** [Count]

### Grooming Summary
| Action | Count | Items |
|--------|-------|-------|
| Ready for sprint | ... | [List] |
| Needs more detail | ... | [List] |
| Split | ... | [Original → New items] |
| Combined | ... | [Items → Combined item] |
| Re-prioritized | ... | [Items and new position] |
| Archived/Removed | ... | [Items and reason] |
| Added | ... | [New items] |

### Sprint-Ready Items (Top of Backlog)
| # | Story | Points | AC? | Dependencies | Owner |
|---|-------|--------|-----|-------------|-------|

### Items Needing Attention
| # | Story | Issue | Action Needed | Owner |
|---|-------|-------|--------------|-------|

### Items Split
| Original | New Items | Rationale |
|----------|-----------|-----------|

### Items Archived
| Item | Age | Reason | Revisit? |
|------|-----|--------|----------|

### Backlog Health Metrics
| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Total items | ... | <100 | ... |
| Sprint-ready (top 15) | ... | 100% | ... |
| Items >3 months old | ... | <10% | ... |
| Items without estimates | ... | <20% | ... |
```

## Quality Standards
- Top 15 items are fully sprint-ready: described, estimated, AC defined.
- No item larger than one sprint remains unsplit.
- Stale items are archived with documented rationale.
- Backlog health metrics are tracked over time.

**Anti-patterns:** Never removing items (infinite backlog), grooming only the top 3 items, splitting without making stories independently valuable, re-prioritizing based on recency bias.

## Framework References
- **Definition of Ready** — Checklist for sprint-ready items.
- **INVEST** — Criteria for well-formed stories.
- **Scrum Backlog Refinement** — Ongoing process of keeping the backlog current.

## Formatting Guidelines
- Use a summary table showing all grooming actions taken.
- Separate sprint-ready items from those needing attention.
- Include backlog health metrics for trend tracking.
- Note archived items with rationale for transparency.

## Example
**Split:** "Original: 'Implement reporting module' (13 points) → Split into: 'Report data aggregation' (5 pts), 'Report visualization' (5 pts), 'Report export to PDF' (3 pts). Rationale: Original was too large to complete in one sprint and had distinct, independently testable deliverables."
