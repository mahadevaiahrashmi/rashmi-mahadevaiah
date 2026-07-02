# Relationship Health Check

## Purpose
Conduct a periodic review of all stakeholder relationships to identify which need attention, which are healthy, and where upcoming decisions require proactive alignment. Flag stale relationships, declining trust, and gaps in the PM's stakeholder network before they become problems.

## Auto-Trigger Patterns
- "How are my stakeholder relationships"
- "Relationship health check"
- "Which relationships need attention"
- "Stakeholder review"
- "Who haven't I talked to recently"
- "Am I missing anyone"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Stakeholder personas** (required) — all files in `context/people/`
- **Interaction logs** (required) — `context/people/[name]/interaction-log.md` for each stakeholder
- **Upcoming decisions** (optional) — `context/products/decisions/` or roadmap items
- **Organizational changes** (optional) — recent reorgs, new hires, departures

## Process
1. **Inventory all relationships** — scan `context/people/` for all personas
2. **Assess recency** — when was last meaningful interaction for each stakeholder
3. **Evaluate health signals** per relationship:
   - Interaction frequency vs expected cadence
   - Quality of recent interactions (collaborative vs transactional vs tense)
   - Open asks or commitments (delivered or pending)
   - Trust trajectory (building, stable, eroding)
4. **Flag concerns**:
   - **Stale**: No interaction in 30+ days for Manage Closely, 60+ for Keep Satisfied
   - **At risk**: Recent negative interaction without follow-up
   - **Missing**: Key stakeholders without personas
   - **Orphaned**: Personas for people no longer relevant
5. **Cross-reference upcoming decisions** — identify stakeholders needed for upcoming decisions who haven't been engaged
6. **Generate health dashboard and action plan**

## Output Format
```markdown
# Relationship Health Check — [Date]

## Dashboard
| Stakeholder | Quadrant | Last Contact | Health | Action Needed |
|------------|----------|-------------|--------|---------------|
| [Name]     | Manage Closely | 5 days ago | 🟢 | None |
| [Name]     | Keep Satisfied | 45 days ago | 🔴 | Re-engage |

## 🔴 Needs Immediate Attention
### [Name] — [Issue]
- Last interaction: …
- Concern: …
- Recommended action: …

## 🟡 Watch List
### [Name] — [Concern]

## 🟢 Healthy Relationships
- [Brief summary of well-maintained relationships]

## Upcoming Decision Alignment Gaps
| Decision | Needed Stakeholders | Current Status |
|----------|-------------------|----------------|

## Missing Personas
- [People who should have personas but don't]

## Recommended Actions (prioritized)
1. …
2. …
3. …

## Relationship Trends
- Improving: …
- Stable: …
- Declining: …
```

## Quality Standards
- Health assessment uses objective signals (recency, frequency) plus qualitative indicators
- Prioritization distinguishes urgent (at risk) from important (stale)
- Upcoming decisions are linked to specific stakeholder engagement needs
- Missing personas prompt is proactive, not reactive
- **Anti-patterns**: Treating all relationships equally; measuring health only by frequency without quality; ignoring organizational changes

## Framework References
- Stakeholder Mapping quadrants for expected engagement levels
- Relationship lifecycle management
- CRM-style health scoring adapted for stakeholder management

## Formatting Guidelines
- Traffic light (emoji) health indicators for instant scanability
- Dashboard table at top for executive summary
- Detailed sections only for relationships needing action
- Prioritized action list at bottom

## Example
Health check reveals: "VP of Sales (Manage Closely) hasn't been contacted in 38 days and a pricing decision is in 2 weeks — URGENT re-engage. Platform team lead (Keep Informed) relationship is healthy with weekly standups. New Director of Customer Success joined 3 weeks ago — no persona exists yet, recommend coffee chat and persona creation."
