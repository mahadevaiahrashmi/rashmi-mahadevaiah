# Dashboard Spec: [Dashboard Name]

<!-- Specification for building a metrics dashboard. -->

## Dashboard Overview
| Field | Value |
|-------|-------|
| **Name** | [Dashboard name] |
| **Purpose** | [What questions does this dashboard answer?] |
| **Audience** | [Who will use this — PM, exec, team, CS] |
| **Tool** | [Amplitude / Mixpanel / Looker / Tableau / Custom] |
| **Owner** | [PM name] |
| **Refresh Frequency** | [Real-time / Hourly / Daily / Weekly] |

## Key Metrics
| # | Metric | Definition | Source | Visualization |
|---|--------|-----------|--------|---------------|
| 1 | [Metric name] | [Exact calculation] | [Data source/table] | [Line / Bar / Number] |
| 2 | [Metric name] | [Exact calculation] | [Data source] | [Type] |
| 3 | [Metric name] | [Exact calculation] | [Data source] | [Type] |

## Layout
### Section 1: [Overview / KPIs]
- [Metric tiles with current value, trend, and target]

### Section 2: [Trends]
- [Time-series charts showing key metrics over time]

### Section 3: [Breakdown]
- [Segmentation by plan, geography, cohort, or user type]

### Section 4: [Detail]
- [Drill-down tables or lists]

## Filters
| Filter | Options | Default |
|--------|---------|---------|
| Date range | [Last 7/30/90 days, custom] | [Last 30 days] |
| Segment | [Plan tier, geography, cohort] | [All] |

## Alerts
| Condition | Threshold | Notification |
|-----------|-----------|-------------|
| [Metric drops below X] | [Value] | [Slack channel / Email] |

## Data Requirements
<!-- Any new events, tables, or ETL needed to power this dashboard. -->

## Access
| Role | Access Level |
|------|-------------|
| [PM] | Edit |
| [Team] | View |
| [Exec] | View |
