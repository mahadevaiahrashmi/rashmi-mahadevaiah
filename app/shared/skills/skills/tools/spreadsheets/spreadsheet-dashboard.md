# Spreadsheet Dashboard

## Purpose
Designs spreadsheet-based dashboards — with KPI layouts, sparklines, conditional formatting, data source connections, and auto-refresh configurations — creating lightweight, shareable dashboards that don't require a BI tool.

## Auto-Trigger Patterns
- "Build a spreadsheet dashboard"
- "KPI dashboard in Sheets/Excel"
- "Create a metrics dashboard"
- "Spreadsheet-based reporting"
- "Simple dashboard without a BI tool"

## Tool Configuration
Requires `context/integrations/google-workspace.md` or `context/integrations/microsoft365.md` with: Sheets/Excel access, data source connections. Auth: Depends on platform and data sources.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** KPIs to track, data sources, update frequency
- **Optional:** Comparison periods, thresholds/targets, chart preferences, distribution method

## Process
1. Define the KPIs and their data sources.
2. Design the dashboard layout: KPI cards, charts, tables.
3. Set up data connection tabs (hidden from viewers).
4. Build formulas for KPI calculations and comparisons.
5. Add sparklines for trend visualization.
6. Apply conditional formatting for status indicators.
7. Configure auto-refresh or manual update workflow.
8. Protect dashboard structure while allowing data refresh.

## Output Format
```
# Spreadsheet Dashboard: [Name]

## Dashboard Layout
```
┌──────────┬──────────┬──────────┬──────────┐
│  KPI 1   │  KPI 2   │  KPI 3   │  KPI 4   │
│  [Value] │  [Value] │  [Value] │  [Value] │
│  [Trend] │  [Trend] │  [Trend] │  [Trend] │
├──────────┴──────────┼──────────┴──────────┤
│                     │                     │
│  [Chart 1]          │  [Chart 2]          │
│  Trend Line         │  Category Bar       │
│                     │                     │
├─────────────────────┴─────────────────────┤
│                                           │
│  [Data Table — Top Items]                 │
│                                           │
└───────────────────────────────────────────┘
```

## KPI Cards
| KPI | Formula | Source | Target | Format |
|---|---|---|---|---|
| [Metric 1] | [Formula] | [Tab!Range] | [Target value] | Number + sparkline |
| [Metric 2] | [Formula] | [Tab!Range] | [Target value] | % + delta |
| [Metric 3] | [Formula] | [Tab!Range] | [Target value] | Currency |
| [Metric 4] | [Formula] | [Tab!Range] | [Target value] | Count + trend |

## Conditional Formatting Rules
| Element | Green | Yellow | Red |
|---|---|---|---|
| KPI 1 | ≥ Target | 80-99% of target | < 80% of target |
| KPI 2 | Trending up | Flat | Trending down |
| Table rows | On track | At risk | Overdue |

## Sparklines
| Cell | Type | Data Range | Color |
|---|---|---|---|
| KPI 1 trend | Line | Data!B2:B14 | Blue |
| KPI 2 trend | Bar | Data!C2:C14 | Green/Red |

## Data Tabs (Hidden)
| Tab | Source | Refresh Method | Frequency |
|---|---|---|---|
| Raw Data | [API/Import/Query] | [IMPORTRANGE/Power Query/Script] | [Daily/Weekly] |
| Calculations | Formulas referencing Raw Data | Automatic | On data change |
| Reference | Targets, thresholds, labels | Manual | Quarterly |

## Auto-Refresh Setup
- **Google Sheets:** IMPORTRANGE or Apps Script on timer trigger
- **Excel:** Power Query refresh on open, or scheduled refresh (Excel Online)
- **Manual fallback:** "Refresh Data" button linked to script

## Distribution
- **Auto-email:** [Schedule and recipient list]
- **Shared link:** [View-only access]
- **PDF export:** [Weekly snapshot for exec team]
- **Embed:** [In Confluence/Notion/internal portal]
```

## Quality Standards
- Dashboard fits on one screen without scrolling (12-16 key data points max).
- KPIs show current value, trend, and status in one glance.
- Data source tabs are hidden but documented for maintenance.
- Conditional formatting thresholds are meaningful and aligned with targets.
- Auto-refresh is reliable — stale data is worse than no dashboard.
- Dashboard is protected against accidental edits.

## Permissions Required
Spreadsheet owner for dashboard creation. Data source access for connections. Viewer access for distribution.

## Example
A weekly product metrics dashboard with: 4 KPI cards (DAU with sparkline, activation rate with delta vs last week, NPS with color-coded status, revenue with target comparison), line chart (12-week DAU trend), stacked bar (feature usage breakdown), top-10 table (issues by priority), data pulled via IMPORTRANGE from the analytics export sheet, auto-refreshing daily, shared as view-only with the product team and emailed as PDF to leadership every Monday.
