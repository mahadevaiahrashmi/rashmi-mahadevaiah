# Excel Model

## Purpose
Builds structured Excel workbooks — with organized sheets, formulas, pivot tables, Power Query connections, and chart visualizations — creating robust analytical models leveraging Excel's advanced capabilities for enterprise PM workflows.

## Auto-Trigger Patterns
- "Build an Excel model"
- "Create an Excel workbook for…"
- "Excel spreadsheet for [analysis]"
- "Set up an Excel tracker"
- "Financial model in Excel"

## Tool Configuration
Requires `context/integrations/microsoft365.md` with: Microsoft 365 account, Excel desktop or web access. Auth: OneDrive/SharePoint for cloud-hosted workbooks. Power Query for external data connections.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Model purpose, data and calculations needed
- **Optional:** Data connections, pivot table requirements, Power Query sources, macro needs, chart preferences

## Process
1. Design workbook structure: input, calculation, output, and reference sheets.
2. Create named ranges and structured tables.
3. Build formulas using structured references for maintainability.
4. Set up pivot tables for dynamic analysis.
5. Configure Power Query for external data refresh.
6. Create charts and sparklines for visualization.
7. Add data validation and conditional formatting.
8. Protect formula cells and document assumptions.

## Output Format
```
# Excel Workbook: [Name]

## Sheet Structure
| Sheet | Purpose | Tab Color |
|---|---|---|
| Summary | Dashboard with KPIs and charts | Blue |
| Data | Structured table with input data | Green |
| Analysis | Pivot tables and calculations | Yellow |
| Model | Financial or planning model | Orange |
| Reference | Lookups, constants, assumptions | Gray |

## Structured Tables
| Table Name | Sheet | Columns | Purpose |
|---|---|---|---|
| tbl_Projects | Data | ID, Name, Status, Owner, Points, Date | Project tracking |
| tbl_Budget | Model | Category, Planned, Actual, Variance | Budget tracking |

## Key Formulas
| Cell | Formula | Purpose |
|---|---|---|
| Model!F2 | `=[@Actual]-[@Planned]` | Variance calculation |
| Summary!B2 | `=SUMIFS(tbl_Projects[Points],tbl_Projects[Status],"Done")` | Completed points |
| Model!G2 | `=XLOOKUP([@Category],tbl_Reference[Category],tbl_Reference[Rate])` | Rate lookup |

## Pivot Tables
### PivotTable 1: Project Status Summary
- **Rows:** Status
- **Columns:** Quarter
- **Values:** Count of Projects, Sum of Points
- **Filters:** Team, Priority
- **Slicer:** Status, Team

## Power Query Connections
| Query | Source | Refresh | Transform |
|---|---|---|---|
| [Query Name] | [SharePoint/SQL/API] | [On open / hourly] | [Steps summary] |

## Charts
| Chart | Type | Data | Sheet |
|---|---|---|---|
| Budget Variance | Waterfall | tbl_Budget | Summary |
| Status Distribution | Donut | PivotTable 1 | Summary |
| Trend | Sparkline (line) | tbl_Projects[Points] | Data |

## Data Validation & Formatting
| Range | Validation | Conditional Format |
|---|---|---|
| tbl_Projects[Status] | List: New, Active, Done, Blocked | Icon set (traffic light) |
| tbl_Budget[Variance] | — | Data bars, red for negative |

## Protection
- Formula cells: Locked, sheet protected
- Input ranges: Unlocked
- Workbook structure: Protected (prevent sheet deletion)
```

## Quality Standards
- Structured tables (Ctrl+T) are used instead of raw ranges.
- Formulas use structured references (`[@Column]`) for readability.
- Pivot tables are backed by named tables for reliable refresh.
- Power Query handles data transformation, not formulas.
- No circular references or volatile functions unless absolutely necessary.
- Assumptions are documented and modifiable in a reference sheet.

## Permissions Required
Microsoft 365 license for Excel. SharePoint/OneDrive access for shared workbooks. Database credentials for Power Query connections.

## Example
A product planning workbook with: Summary dashboard (3 KPI cards, waterfall budget chart, status donut), Data sheet (structured project table with 12 columns), Analysis sheet (2 pivot tables with slicers for status and team), Model sheet (capacity planning with XLOOKUP rates), Reference sheet (team capacity, sprint dates, cost assumptions), Power Query connection to Jira export refreshing on open.
