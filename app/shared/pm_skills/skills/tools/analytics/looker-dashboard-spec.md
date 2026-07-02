# Looker Dashboard Spec

## Purpose
Specifies Looker dashboard designs — tile layout, visualizations, filters, drill-downs, and scheduling — with LookML context for PMs who need to request or configure analytics dashboards.

## Auto-Trigger Patterns
- "Design a Looker dashboard"
- "Spec out a Looker dashboard"
- "Create dashboard tiles in Looker"
- "Looker dashboard for…"
- "What should our Looker dashboard show?"

## Tool Configuration
Requires `context/integrations/looker.md` with: Looker instance URL, API credentials (client ID + secret). Auth: API3 credentials or SSO with dashboard edit permissions.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Dashboard purpose, key metrics, target audience
- **Optional:** Existing Explores/Models, filter needs, drill-down paths, scheduling, embed requirements

## Process
1. Define dashboard purpose and primary audience.
2. Select key metrics and KPIs for the dashboard.
3. Design tile layout: placement, sizing, visualization types.
4. Specify filters for interactive data exploration.
5. Configure drill-downs linking tiles to detailed Looks.
6. Set up scheduling for automated delivery.
7. Note LookML requirements if new dimensions/measures are needed.
8. Define permissions and embedding needs.

## Output Format
```
# Looker Dashboard: [Dashboard Name]

## Overview
- **Purpose:** [What decisions this dashboard supports]
- **Audience:** [Who uses this and how often]
- **Refresh:** [Datagroup / schedule]
- **Model:** [LookML model name]

## Layout
Row 1: [Single number tiles — KPI summary]
Row 2: [Time series charts — trends]
Row 3: [Table + bar chart — breakdowns]
Row 4: [Detailed table — drill-down data]

## Tiles
| # | Title | Type | Explore | Measures/Dimensions | Filters |
|---|---|---|---|---|---|
| 1 | Total Users | Single Value | users | count | period |
| 2 | Revenue | Single Value | orders | total_revenue | period |
| 3 | User Trend | Line Chart | users | count by created_week | — |
| 4 | Top Features | Bar Chart | events | count by feature_name | top 10 |
| 5 | User Table | Table | users | name, email, last_active, plan | active only |

## Filters
| Filter | Type | Default | Applies To |
|---|---|---|---|
| Date Range | Date | Last 30 days | All tiles |
| Plan Type | Dropdown | All | Tiles 1,2,3,5 |
| Region | Dropdown | All | All tiles |

## Drill-Downs
| From Tile | Click Target | Destination |
|---|---|---|
| User Trend | Data point | User list for that week |
| Top Features | Bar segment | Feature usage detail |

## Scheduling
| Schedule | Recipients | Format | Frequency |
|---|---|---|---|
| Executive Summary | [DL] | PDF | Weekly Monday 8am |
| Alerts | [PM] | Conditional | Daily if KPI < threshold |

## LookML Requirements
- [ ] New measure: `rolling_7day_average` in users explore
- [ ] New dimension: `user_segment` based on behavior clustering
```

## Quality Standards
- Dashboard answers specific questions — not a data dump.
- Single-value tiles show comparisons (vs previous period, vs target).
- Filters are meaningful — don't add filters that no one will use.
- Drill-downs follow the natural analytical flow from summary to detail.
- Scheduling matches the decision cadence of the audience.

## Permissions Required
Looker Viewer for dashboard access. Developer for LookML changes. Admin for scheduling.

## Example
A product health dashboard with: 4 KPI tiles (DAU, retention, NPS, revenue), 2 trend lines (DAU and retention over 12 weeks), feature adoption bar chart (top 10), cohort retention table, 3 filters (date, plan, region), drill from retention chart to user-level detail, weekly PDF to leadership, daily alert if DAU drops below threshold.
