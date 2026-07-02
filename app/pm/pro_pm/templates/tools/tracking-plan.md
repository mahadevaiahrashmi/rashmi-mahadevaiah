# Tracking Plan: [Feature/Product Area]

<!-- Define analytics events and properties to implement. -->

## Tracking Plan Info
| Field | Value |
|-------|-------|
| **Feature** | [Feature name] |
| **Author** | [PM name] |
| **Engineering Contact** | [Name] |
| **Analytics Tool** | [Amplitude / Mixpanel / Segment / Custom] |
| **Status** | Draft / Implemented / Verified |

## Events

### [event_name_1]
| Field | Value |
|-------|-------|
| **Description** | [What this event tracks] |
| **Trigger** | [When this event fires] |
| **Category** | [User action / System / Page view] |

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| [property_1] | string | Yes | [Description] | [Example value] |
| [property_2] | number | No | [Description] | [Example value] |

### [event_name_2]
| Field | Value |
|-------|-------|
| **Description** | [What this event tracks] |
| **Trigger** | [When this event fires] |

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| [property_1] | string | Yes | [Description] | [Example] |

## User Properties (Updated)
| Property | Type | Description | Updated When |
|----------|------|-------------|-------------|
| [user_property] | string | [Description] | [When updated] |

## Naming Conventions
- Events: `snake_case`, verb_noun format (e.g., `clicked_button`, `viewed_page`)
- Properties: `snake_case` (e.g., `source_page`, `item_count`)
- No PII in event properties

## Verification Checklist
- [ ] Events firing correctly in dev/staging
- [ ] Properties populated with expected values
- [ ] No duplicate events
- [ ] No PII in event data
- [ ] Dashboard updated with new events
