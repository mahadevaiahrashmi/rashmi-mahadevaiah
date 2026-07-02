# Segment Event Spec

## Purpose
Creates Segment tracking plans — event naming conventions, property schemas, source/destination configuration — establishing the analytics foundation that feeds data to downstream tools like Amplitude, Mixpanel, and warehouses.

## Auto-Trigger Patterns
- "Create a Segment tracking plan"
- "Define analytics events"
- "Segment event schema for…"
- "Set up tracking for [feature]"
- "Event naming conventions"

## Tool Configuration
Requires `context/integrations/segment.md` with: Segment workspace slug, source IDs, API write key. Auth: Access token with workspace owner or tracking plan editor scope.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Features/flows to track, business questions to answer
- **Optional:** Existing tracking plan, naming conventions, destination tools, PII handling policy

## Process
1. Define the tracking philosophy: what to track and why.
2. Establish naming conventions: Object-Action pattern, casing, namespacing.
3. Identify events for each feature/flow aligned to business questions.
4. Define property schemas with types, required/optional, and allowed values.
5. Create identify traits for user-level properties.
6. Specify group traits for account-level properties.
7. Map events to business questions for traceability.
8. Configure source and destination routing.
9. Document PII handling and data governance rules.

## Output Format
```
# Segment Tracking Plan: [Product/Feature]

## Naming Conventions
- **Pattern:** [Object] [Action] (e.g., "Product Viewed", "Checkout Started")
- **Casing:** Title Case for events, snake_case for properties
- **Namespace:** [prefix if multi-product]

## Events

### [Event Name]
- **Trigger:** [When this event fires]
- **Business Question:** [What question this answers]

| Property | Type | Required | Description | Example |
|---|---|---|---|---|
| [property_name] | String | Yes | [What this is] | "premium" |
| [property_name] | Number | Yes | [What this is] | 29.99 |
| [property_name] | Boolean | No | [What this is] | true |
| [property_name] | Array | No | [What this is] | ["tag1","tag2"] |

### [Event Name]
...

## Identify Traits
| Trait | Type | Description | PII |
|---|---|---|---|
| email | String | User email | Yes |
| plan | String | Subscription plan | No |
| created_at | DateTime | Account creation | No |
| company_name | String | Organization | No |

## Group Traits (Account-Level)
| Trait | Type | Description |
|---|---|---|
| name | String | Account name |
| plan | String | Account plan |
| employee_count | Number | Company size |
| industry | String | Industry vertical |

## Event-to-Question Mapping
| Business Question | Events Used |
|---|---|
| What's our activation rate? | Sign Up Completed, Onboarding Step Completed |
| Where do users drop off in checkout? | Checkout Started, Payment Entered, Order Completed |

## Source Configuration
| Source | Type | Events |
|---|---|---|
| Web App | JavaScript | All events |
| Mobile App | iOS/Android SDK | All events |
| Backend | Node.js | Server-side events |

## Destination Routing
| Destination | Events | Purpose |
|---|---|---|
| Amplitude | All | Product analytics |
| BigQuery | All | Data warehouse |
| Braze | Identify + key events | Marketing automation |

## Data Governance
- PII fields: hashed before warehouse delivery
- Consent: track only after consent confirmed
- Retention: 13 months in Segment, warehouse policy applies downstream
```

## Quality Standards
- Event names follow the established convention consistently — no ad hoc naming.
- Every event has a clear business question it helps answer.
- Properties have defined types, required/optional status, and example values.
- PII is identified and handling rules are explicit.
- Source-destination routing is intentional — not all events to all destinations.

## Permissions Required
Segment Workspace Owner or Tracking Plan Editor for plan management. Source admin for implementation.

## Example
A SaaS onboarding tracking plan with: 8 events (Sign Up Started through Onboarding Completed), 4-6 properties per event following Object-Action naming, identify call with 8 traits (3 PII-flagged), group call with 5 account traits, mapped to 3 business questions (activation, onboarding completion, time-to-value), routed to Amplitude (analytics), BigQuery (warehouse), and Braze (lifecycle messaging).
