# Tableau Dashboard Spec

## Purpose
Specifies Tableau dashboard designs — workbook structure, sheet layouts, filter actions, parameters, and calculated fields — for PMs collaborating with data teams to build interactive analytics dashboards.

## Auto-Trigger Patterns
- "Design a Tableau dashboard"
- "Spec a Tableau workbook"
- "Tableau visualization for…"
- "Create a Tableau report"
- "Dashboard spec for Tableau"

## Tool Configuration
Requires `context/integrations/tableau.md` with: Tableau Server/Cloud URL, site name, API credentials. Auth: Personal access token or SSO with Creator/Explorer license.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Dashboard purpose, data sources, key metrics
- **Optional:** Calculated fields, parameters, filter actions, formatting preferences, mobile layout

## Process
1. Define the analytical questions the dashboard answers.
2. Identify data sources and joins/blends needed.
3. Design individual sheets (visualizations) with mark types and encodings.
4. Create calculated fields and parameters.
5. Assemble sheets into dashboard layout with containers.
6. Configure filter actions, highlight actions, and URL actions.
7. Design mobile-optimized layout if needed.
8. Set up extract refresh schedule and permissions.

## Output Format
```
# Tableau Dashboard: [Name]

## Data Sources
| Source | Type | Refresh | Joins |
|---|---|---|---|
| [Source 1] | [Live | Extract] | [Schedule] | [Join keys] |

## Sheets
### Sheet 1: [Name]
- **Mark Type:** [Bar | Line | Map | Scatter | Text]
- **Columns:** [Dimension/Measure]
- **Rows:** [Dimension/Measure]
- **Color:** [Field]
- **Size:** [Field]
- **Filters:** [Field = condition]
- **Calculated Fields:** `[Field Name] = [Formula]`

### Sheet 2: [Name]
...

## Dashboard Layout
```
┌──────────────────────────────┐
│ [Title + Filter Bar]         │
├────────────────┬─────────────┤
│ [Sheet 1]      │ [Sheet 2]   │
│ KPI Summary    │ Trend Line  │
├────────────────┴─────────────┤
│ [Sheet 3 — Full Width]       │
│ Detail Table                 │
└──────────────────────────────┘
```

## Filter Actions
| Source | Target | Action | Fields |
|---|---|---|---|
| Sheet 1 click | Sheet 3 | Filter | [dimension] |
| Sheet 2 hover | Sheet 1 | Highlight | [dimension] |

## Parameters
| Parameter | Type | Default | Values | Purpose |
|---|---|---|---|---|
| Date Grain | String | Week | Day, Week, Month | Toggle time granularity |
| Metric Selector | String | Revenue | Revenue, Users, Orders | Switch measures |

## Formatting
- Color palette: [Specific colors]
- Font: [Font family and sizes]
- Dashboard size: [Fixed | Automatic | Range]

## Publishing
- Server: [Tableau Server/Cloud URL]
- Project: [Project folder]
- Permissions: [Groups and access levels]
- Subscriptions: [Schedule and recipients]
```

## Quality Standards
- Each sheet answers one clear question — no multi-purpose charts.
- Filter actions create a cohesive interactive experience.
- Parameters allow exploration without creating separate dashboards.
- Calculated fields are documented with business logic.
- Dashboard loads in under 10 seconds — optimize extracts and filters.

## Permissions Required
Tableau Creator license for workbook authoring. Explorer for editing existing. Viewer for consumption.

## Example
A sales pipeline dashboard with: 4 sheets (KPI bar, monthly trend, regional map, deal table), 2 parameters (date granularity, metric selector), 3 filter actions (map click filters deal table, trend click filters all), fixed-width layout with mobile alternative, daily extract refresh, published to Sales project with viewer access for the sales team.
