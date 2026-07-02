# Google Sheets Model

## Purpose
Builds structured Google Sheets models — with organized tabs, formulas, named ranges, data validation, conditional formatting, and charts — creating maintainable, shareable spreadsheet tools for PMs.

## Auto-Trigger Patterns
- "Build a Google Sheets model"
- "Create a spreadsheet for…"
- "Google Sheets tracker"
- "Spreadsheet model for [analysis]"
- "Set up a Google Sheet for…"

## Tool Configuration
Requires `context/integrations/google-workspace.md` with: Google Workspace account, Sheets API access. Auth: OAuth 2.0 with spreadsheets and drive scopes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Model purpose, key data and calculations needed
- **Optional:** Data sources, formula complexity, chart needs, sharing permissions, template preference

## Process
1. Design the tab structure: inputs, calculations, outputs, reference data.
2. Set up named ranges for key variables and ranges.
3. Build formulas referencing named ranges for readability.
4. Add data validation for input cells (dropdowns, number ranges).
5. Apply conditional formatting for visual status indicators.
6. Create charts for data visualization.
7. Configure sharing and protection (lock formula cells).
8. Document assumptions and usage instructions.

## Output Format
```
# Google Sheets: [Model Name]

## Tab Structure
| Tab | Purpose | Color |
|---|---|---|
| Dashboard | Summary charts and KPIs | Blue |
| Data Entry | Input data | Green |
| Calculations | Formulas and logic | Yellow |
| Reference | Lookup tables, constants | Gray |
| Instructions | How to use this model | White |

## Named Ranges
| Name | Range | Description |
|---|---|---|
| revenue_monthly | Data Entry!B2:B13 | Monthly revenue inputs |
| growth_rate | Reference!B2 | Assumed growth rate |
| target_arr | Reference!B3 | Annual target |

## Key Formulas
| Cell | Formula | Purpose |
|---|---|---|
| Calc!B2 | `=SUMPRODUCT(revenue_monthly)` | Total annual revenue |
| Calc!B3 | `=B2/target_arr` | % of target achieved |
| Calc!C2:C13 | `=B2*(1+growth_rate)^(ROW()-1)` | Projected monthly |

## Data Validation
| Cell/Range | Type | Values | Error Message |
|---|---|---|---|
| Data!C2:C100 | Dropdown | High, Medium, Low | "Select priority" |
| Data!D2:D100 | Number | 1-13 | "Enter story points 1-13" |
| Data!E2:E100 | Date | After today | "Enter future date" |

## Conditional Formatting
| Range | Rule | Format |
|---|---|---|
| Dashboard!B2 | ≥ 100% of target | Green background |
| Dashboard!B2 | 80-99% of target | Yellow background |
| Dashboard!B2 | < 80% of target | Red background |
| Data!C2:C100 | = "High" | Red bold text |

## Charts
| Chart | Type | Data Source | Location |
|---|---|---|---|
| Revenue Trend | Line | Calc!A1:B13 | Dashboard |
| Category Split | Pie | Calc!D1:E5 | Dashboard |
| Actuals vs Target | Combo (bar+line) | Calc!A1:C13 | Dashboard |

## Protection
- Formula cells: Protected (editors: owner only)
- Input cells: Unprotected (editors: team)
- Reference tab: Protected (editors: owner only)

## Sharing
- Editors: [Team members]
- Commenters: [Stakeholders]
- Viewers: [Broader audience]
```

## Quality Standards
- Inputs are separated from calculations — never mix data entry and formulas in the same cell.
- Named ranges make formulas readable without tracing cell references.
- Data validation prevents invalid entries at the point of input.
- Conditional formatting provides instant visual status without reading numbers.
- Formula cells are protected to prevent accidental overwrites.
- Instructions tab explains how to use the model and what assumptions are baked in.

## Permissions Required
Google Workspace account with Sheets access. Owner permissions for protection rules.

## Example
A quarterly planning model with: Dashboard tab (3 KPI cards, revenue trend line, category pie chart), Data Entry tab (project list with validated priority/effort/date fields), Calculations tab (weighted scoring, projected timelines, resource allocation), Reference tab (team capacity, cost rates, targets), all with named ranges, protected formulas, and shared with the planning team as editors.
