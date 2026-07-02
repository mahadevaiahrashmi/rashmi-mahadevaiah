# Salesforce Dashboard Spec

## Purpose
Specifies Salesforce report and dashboard configurations — defining report types, dashboard components, filters, scheduled reports, and sharing rules — for PMs who need sales and customer data visibility.

## Auto-Trigger Patterns
- "Create a Salesforce dashboard"
- "Salesforce report for…"
- "Sales data dashboard spec"
- "Salesforce analytics for product"
- "CRM dashboard design"

## Tool Configuration
Requires `context/integrations/salesforce.md` with: Salesforce org URL, API credentials (connected app or user token). Auth: OAuth 2.0 connected app with Reports and Dashboards API access.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Dashboard purpose, key metrics, target audience
- **Optional:** Report types, filter criteria, scheduling, folder/sharing, custom objects

## Process
1. Define dashboard purpose and target audience.
2. Identify the report types needed (Tabular, Summary, Matrix, Joined).
3. Design dashboard components: charts, gauges, tables, metrics.
4. Configure filters for interactive exploration.
5. Set up scheduled reports for automated delivery.
6. Define sharing rules and folder permissions.
7. Consider custom report types if standard objects don't suffice.

## Output Format
```
# Salesforce Dashboard: [Name]

## Dashboard Overview
- **Purpose:** [What decisions this supports]
- **Audience:** [Sales team, PM, Executive]
- **Folder:** [Dashboard folder]
- **Running User:** [Specific user or "Logged-in User"]

## Reports

### Report 1: [Name]
- **Type:** [Tabular | Summary | Matrix]
- **Object:** [Opportunity | Account | Case | Custom]
- **Filters:**
  | Field | Operator | Value |
  |---|---|---|
  | Close Date | = THIS QUARTER | — |
  | Stage | ≠ | Closed Lost |
- **Groupings:** [Row groups, Column groups]
- **Summary Fields:** [SUM, AVG, COUNT of fields]
- **Schedule:** [Daily/Weekly — recipients]

## Dashboard Components
| # | Title | Type | Source Report | Size |
|---|---|---|---|---|
| 1 | Pipeline Value | Metric | Pipeline Report | Small |
| 2 | Stage Distribution | Funnel | Opportunity by Stage | Medium |
| 3 | Win Rate Trend | Line Chart | Closed Opps by Month | Large |
| 4 | Top Accounts | Table | Account Revenue | Medium |
| 5 | Regional Breakdown | Donut | Opps by Region | Medium |

## Dashboard Filters
| Filter | Field | Scope |
|---|---|---|
| Date Range | Close Date | All components |
| Region | Account Region | Components 2,3,5 |
| Owner | Opportunity Owner | All components |

## Sharing & Access
| Group/Role | Access Level |
|---|---|
| Sales Team | View |
| Sales Managers | View + Edit |
| Product Team | View |

## Scheduled Reports
| Report | Recipients | Frequency | Format |
|---|---|---|---|
| Weekly Pipeline | Sales VP | Monday 8am | Excel |
| Monthly Win Rate | PM Team | 1st of month | Dashboard link |
```

## Quality Standards
- Reports use the most efficient report type for the data shape.
- Dashboard running user is set appropriately for data visibility.
- Filters are meaningful and scoped to relevant components.
- Scheduled reports target the right audience at the right cadence.
- Sharing rules respect Salesforce's role hierarchy and data visibility model.

## Permissions Required
Salesforce user with Report Builder access. Dashboard folder editor for dashboard creation. Admin for custom report types.

## Example
A Product-Sales alignment dashboard with: 5 components (pipeline metric, stage funnel, win rate trend, lost reason breakdown, feature request count from Cases), 3 interactive filters (date, region, product line), weekly pipeline report emailed to Sales VP, monthly win/loss analysis shared with PM team, running as logged-in user for proper data visibility.
