# Power BI Dashboard Spec

## Purpose
Specifies Power BI report designs — report pages, visuals, slicers, drillthrough, and DAX measures — for PMs working within the Microsoft ecosystem to build and request analytics dashboards.

## Auto-Trigger Patterns
- "Design a Power BI dashboard"
- "Spec a Power BI report"
- "Power BI visualization for…"
- "Create a Power BI report"
- "Dashboard spec for Power BI"

## Tool Configuration
Requires `context/integrations/microsoft365.md` with: Power BI workspace URL, service principal or user credentials. Auth: Azure AD app registration with Power BI API permissions.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Report purpose, data sources, key metrics
- **Optional:** DAX measures, slicers, drillthrough pages, row-level security, mobile layout

## Process
1. Define report pages and their analytical purpose.
2. Identify data model requirements (tables, relationships).
3. Design visuals for each page with appropriate chart types.
4. Create DAX measures for calculated business metrics.
5. Configure slicers for interactive filtering.
6. Set up drillthrough pages for detailed analysis.
7. Define row-level security for data access control.
8. Design the report for both desktop and mobile views.

## Output Format
```
# Power BI Report: [Name]

## Data Model
| Table | Source | Key Relationships |
|---|---|---|
| [Table] | [Source] | [FK → PK] |

## DAX Measures
| Measure | Formula | Format |
|---|---|---|
| [Name] | `[DAX expression]` | [Number | % | Currency] |

## Report Pages

### Page 1: [Executive Summary]
**Visuals:**
| Visual | Type | Data | Conditional Format |
|---|---|---|---|
| [Title] | Card | [Measure] | [Color by threshold] |
| [Title] | Line Chart | [Measure by Date] | — |
| [Title] | Bar Chart | [Measure by Category] | [Data bars] |
| [Title] | Table | [Dimensions + Measures] | [Conditional] |

**Slicers:**
- Date range (relative: Last 30/60/90 days)
- Region (dropdown, multi-select)
- Product (dropdown, multi-select)

### Page 2: [Drillthrough — Detail]
**Triggered by:** Right-click on [dimension] in Page 1
**Visuals:** [Detailed analysis for selected item]

## Interactions
| Source Visual | Target Visual | Interaction |
|---|---|---|
| Bar Chart | Table | Filter |
| Line Chart | Bar Chart | Highlight |

## Row-Level Security
| Role | Filter | DAX Expression |
|---|---|---|
| Regional Manager | Region table | `[Region] = USERPRINCIPALNAME()` |

## Publishing
- Workspace: [Name]
- App: [App name for distribution]
- Refresh: [Schedule — time and frequency]
- Gateway: [If on-premises data]

## Mobile Layout
- Optimized for phone view with stacked visuals
- Key KPI cards at top, trend chart, detail table
```

## Quality Standards
- DAX measures use appropriate context (CALCULATE, FILTER) without unnecessary complexity.
- Slicers are synced across pages for consistent filtering.
- Drillthrough provides additional detail without duplicating visuals.
- Row-level security is tested with different user contexts.
- Report refresh schedule aligns with data freshness requirements.

## Permissions Required
Power BI Pro license for report creation and sharing. Premium capacity for large datasets and paginated reports.

## Example
A product metrics report with: 3 pages (Executive Summary, Feature Deep Dive, User Cohorts), 5 DAX measures (DAU, WAU, retention rate, feature adoption, revenue per user), 3 slicers synced across pages, drillthrough from feature chart to user-level detail, row-level security for regional PMs, daily refresh, published as a Power BI app to the product team workspace.
