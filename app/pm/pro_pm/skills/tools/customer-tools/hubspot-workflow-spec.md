# HubSpot Workflow Spec

## Purpose
Designs HubSpot workflow automations — email sequences, deal pipeline stages, contact properties, and lifecycle stage management — to automate customer engagement and sales processes relevant to product-led growth.

## Auto-Trigger Patterns
- "Set up a HubSpot workflow"
- "HubSpot automation for…"
- "Email sequence in HubSpot"
- "Configure HubSpot pipeline"
- "HubSpot lifecycle automation"

## Tool Configuration
Requires `context/integrations/hubspot.md` with: HubSpot portal ID, private app access token or OAuth. Auth: Private app token with contacts, automation, and CRM scopes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Workflow purpose, trigger criteria, desired outcome
- **Optional:** Email templates, pipeline stages, contact properties, enrollment criteria, suppression rules

## Process
1. Define the workflow type: contact-based, company-based, deal-based, or ticket-based.
2. Set enrollment triggers and re-enrollment rules.
3. Design the action sequence: emails, property updates, task creation, delays.
4. Add branching logic for conditional paths.
5. Define suppression lists and unenrollment criteria.
6. Configure goal criteria for measuring success.
7. Test the workflow with sample records.

## Output Format
```
# HubSpot Workflow: [Name]

## Workflow Settings
- **Type:** [Contact | Company | Deal | Ticket]
- **Trigger:** [Property change | Form submission | List membership | Event]
- **Re-enrollment:** [Yes/No — conditions]
- **Goal:** [When to unenroll as "completed"]
- **Suppression:** [Lists or criteria to exclude]

## Enrollment Criteria
| Property/Condition | Operator | Value |
|---|---|---|
| Lifecycle Stage | = | Marketing Qualified Lead |
| Lead Score | ≥ | 50 |
| Email | Is not in list | Unsubscribed |

## Workflow Steps

### Step 1: [Action] — Immediate
- **Action:** Set property
- **Property:** Lifecycle Stage = Sales Qualified Lead
- **Details:** [Context]

### Step 2: [Action] — Delay 1 day
- **Action:** Send email
- **Email:** "[Template name]"
- **Details:** [Personalization tokens used]

### Step 3: [Branch] — If/Then
- **Condition:** Opened email in Step 2?
  - **Yes →** Step 4a: Send follow-up email
  - **No →** Step 4b: Wait 3 days, send different email

### Step 4a: Send follow-up — Delay 2 days
- **Action:** Send email "[Follow-up template]"

### Step 4b: Re-engage — Delay 3 days
- **Action:** Send email "[Re-engagement template]"

### Step 5: Create task
- **Action:** Create task for sales rep
- **Task:** "Follow up with {{contact.firstname}}"
- **Due:** 2 days from now
- **Assigned to:** Contact owner

## Pipeline Configuration (if applicable)
| Stage | Probability | Actions on Enter |
|---|---|---|
| Appointment Scheduled | 20% | Send prep email |
| Demo Completed | 40% | Create follow-up task |
| Proposal Sent | 60% | Notify PM of feature interest |
| Closed Won | 100% | Trigger onboarding workflow |
| Closed Lost | 0% | Send feedback survey |

## Properties Used
| Property | Type | Values | Set By |
|---|---|---|---|
| Lead Score | Number | 0-100 | Workflow/behavior |
| Product Interest | Dropdown | [Product areas] | Form/workflow |
| Last Engagement | Date | Auto-set | Workflow |

## Success Metrics
| Metric | Target | Measurement |
|---|---|---|
| Email open rate | > 30% | HubSpot analytics |
| Conversion to SQL | > 15% | Pipeline stage change |
| Workflow completion | > 60% | Goal achievement |
```

## Quality Standards
- Enrollment criteria are specific enough to avoid false enrollments.
- Delays between emails respect recipient attention (not too frequent).
- Branching logic covers all paths — no dead ends.
- Suppression prevents sending to unsubscribed or inappropriate contacts.
- Goals measure actual business outcomes, not just email metrics.

## Permissions Required
HubSpot Marketing Hub Professional+ for workflows. Sales Hub for pipeline automation. Super Admin for property creation.

## Example
A product-qualified lead (PQL) workflow: triggered when a free user hits 3+ feature usage events, enrolls in a 5-email sequence over 14 days with branching based on engagement, creates a sales task on day 7 if no response, sets lifecycle stage progressively, and unenrolls when the contact starts a paid trial (goal). Suppresses existing customers and unsubscribed contacts.
