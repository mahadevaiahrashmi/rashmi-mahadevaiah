# Data Requirements

## Purpose
Define instrumentation, analytics, and data pipeline requirements — specifying events to track, properties to capture, dashboard needs, and data quality checks. Without a data plan, you ship blind. With a good one, you know what's working from day one.

## Auto-Trigger Patterns
- "define data requirements for [feature]"
- "what should we track for [initiative]"
- "analytics plan for [feature]"
- "instrumentation requirements"
- "create a tracking plan"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature description | Yes | User prompt |
| Success metrics | Yes | User prompt or metrics definition |
| User flows | Optional | User prompt |
| Data infrastructure | Optional | `context/products/*/tech-context.md` |
| Privacy requirements | Optional | `context/company/processes.md` |

## Process
1. **Map the user flow** — Identify every step, decision point, and outcome.
2. **Define events** — For each meaningful step: event name, trigger, and why it matters.
3. **Define event properties** — Context captured with each event.
4. **Define schemas** — Data types, required vs. optional, enumerated values, naming conventions.
5. **Specify dashboards** — Visualizations needed, for whom, drill-down capabilities.
6. **Set data quality checks** — Detect missing events, duplicates, schema violations.
7. **Address privacy** — PII classification, consent, anonymization.
8. **Quality-check** — Every success metric computable from defined events.

## Output Format
```
## Data Requirements: [Feature Name]

### Event Taxonomy
| Event Name | Trigger | Properties | Priority |
|------------|---------|-----------|----------|

### Event Properties
| Property | Type | Required | Values | Description |
|----------|------|----------|--------|-------------|

### Dashboard Specifications
| Dashboard | Audience | Key Visualizations | Refresh |
|-----------|----------|-------------------|---------|

### Data Quality Checks
| Check | Method | Alert Threshold |
|-------|--------|----------------|

### Privacy & Compliance
| Data Element | Classification | Handling |
|-------------|---------------|----------|
```

## Quality Standards
- Every success metric maps to trackable events.
- Event naming follows consistent taxonomy (object.action).
- Properties have defined types and valid values.
- Privacy classification explicit for every data element.

**Anti-patterns:** Tracking everything without purpose, inconsistent naming, missing properties metrics need, collecting PII without classification.

## Framework References
- **Tracking Plan** — Structured event definition methodology.
- **Avo / Amplitude Taxonomy** — Best practices for event naming.

## Formatting Guidelines
- Use `code formatting` for event and property names.
- Tables for event listings and properties.
- Group events by user flow step.

## Example
**Event:** `report.exported` — Properties: `format` (enum: pdf, csv, xlsx), `row_count` (integer), `duration_ms` (integer). Priority: P0 (needed for adoption metric).
