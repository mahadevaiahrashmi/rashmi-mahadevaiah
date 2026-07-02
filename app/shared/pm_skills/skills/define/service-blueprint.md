# Service Blueprint

## Purpose
Map the full service delivery system — from customer-visible interactions through backstage processes and support infrastructure — to identify pain points, failure points, and improvement opportunities that aren't visible from a feature-level view.

## Auto-Trigger Patterns
- "create a service blueprint"
- "map the service delivery for [flow]"
- "blueprint the [process] experience"
- "show backstage processes for [feature]"
- "map frontend and backend interactions"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Service or user flow to map | Yes | User prompt |
| Customer journey | Optional | `context/products/*/customers.md` |
| Technical architecture | Optional | `context/products/*/tech-context.md` |
| Support/ops processes | Optional | `context/company/processes.md` |
| Known pain points | Optional | User prompt |

## Process
1. **Define the scope** — Which service, segment, and scenario (happy path first, then failure modes).
2. **Map customer actions** — Every step the customer takes, in sequence.
3. **Map frontstage interactions** — Touchpoints the customer directly interacts with.
4. **Map backstage processes** — Internal actions invisible to the customer.
5. **Map support processes** — Systems, tools, teams enabling backstage processes.
6. **Identify physical evidence** — Tangible artifacts the customer encounters.
7. **Mark the lines** — Line of interaction, line of visibility, line of internal interaction.
8. **Annotate** — Pain points, failure points, wait times, ownership gaps.
9. **Quality-check** — Blueprint is complete end-to-end, not just the happy path.

## Output Format
```
## Service Blueprint: [Service/Flow Name]
**Scope:** [Scenario] | **Segment:** [Customer type]

### Blueprint Grid
| Layer | Step 1 | Step 2 | Step 3 | Step 4 |
|-------|--------|--------|--------|--------|
| **Physical Evidence** | ... | ... | ... | ... |
| **Customer Actions** | ... | ... | ... | ... |
| ── Line of Interaction ── |
| **Frontstage** | ... | ... | ... | ... |
| ── Line of Visibility ── |
| **Backstage** | ... | ... | ... | ... |
| ── Line of Internal Interaction ── |
| **Support Processes** | ... | ... | ... | ... |

### Pain Points
| # | Location | Description | Severity | Owner |
|---|----------|-------------|----------|-------|

### Failure Points
| # | Location | Failure Mode | Impact | Current Handling |
|---|----------|-------------|--------|-----------------|

### Improvement Opportunities
| # | Opportunity | Expected Impact | Effort | Priority |
|---|-----------|----------------|--------|----------|
```

## Quality Standards
- Blueprint covers the full journey, not just the product interaction.
- Backstage and support processes are specific, not generic.
- Pain points identified at every layer, not just the customer layer.
- Failure modes have current handling documented.

**Anti-patterns:** Mapping only the happy path, treating backstage as a black box, confusing a feature map with a service blueprint.

## Framework References
- **Service Design (Shostack)** — Original service blueprint methodology.
- **Customer Journey Mapping** — Complementary view from the customer's perspective.

## Formatting Guidelines
- Use a wide table or suggest Mermaid diagram for visualization.
- Clearly mark the three lines (interaction, visibility, internal interaction).
- Number pain points and opportunities for cross-referencing.

## Example
**Step:** "Customer submits support ticket" → **Frontstage:** Confirmation email sent → **Backstage:** Ticket routed by ML classifier → **Pain Point:** "Misclassification rate is 23%, causing 40% of tickets to be re-routed, adding 6hr average to resolution time."
