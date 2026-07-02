# Productboard Feature Sync

## Purpose
Organizes features in Productboard with driver/outcome linking, prioritization scores, roadmap timeline positioning, and insight connections — keeping product strategy and customer feedback aligned with execution.

## Auto-Trigger Patterns
- "Sync features to Productboard"
- "Organize Productboard features"
- "Set up prioritization in Productboard"
- "Link insights to features"
- "Build Productboard roadmap"

## Tool Configuration
Requires `context/integrations/productboard.md` with: Productboard workspace URL, API token (v2). Auth: API token with feature management scope. CRM integration tokens for customer linking.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Feature list with descriptions, product hierarchy
- **Optional:** Customer insights/feedback, prioritization drivers, release timeline, objective links, segment data

## Process
1. Organize the feature hierarchy: Product → Component → Feature → Sub-feature.
2. Write feature descriptions with customer-facing value and business rationale.
3. Link features to Objectives (strategic goals the feature serves).
4. Configure Drivers for prioritization: value, effort, reach, strategic alignment.
5. Score features against drivers to generate prioritization ranking.
6. Connect customer Insights (feedback, requests, pain points) to features.
7. Place features on the roadmap timeline: Now, Next, Later or specific dates.
8. Set feature status: New Idea → Candidate → Planned → In Progress → Released.
9. Tag with segments and personas for portfolio analysis.

## Output Format
```
# Productboard Feature Organization: [Product]

## Product Hierarchy
- **Product:** [Name]
  - **Component:** [Area 1]
    - Feature: [Feature A]
    - Feature: [Feature B]
  - **Component:** [Area 2]
    - Feature: [Feature C]

## Feature Details
### [Feature Name]
- **Status:** [Candidate | Planned | In Progress]
- **Objective:** [Strategic goal]
- **Timeline:** [Now | Next | Later]
- **Description:** [User-facing value proposition]
- **Drivers:**
  | Driver | Score (1-5) |
  |---|---|
  | User Value | 4 |
  | Strategic Fit | 5 |
  | Reach | 3 |
  | Effort (inverse) | 3 |
  | **Weighted Total** | **3.8** |
- **Linked Insights:** [X insights from Y customers]
- **Segments:** [Enterprise, Mid-Market]

## Prioritization Matrix
| Feature | Score | Insights | Timeline | Status |
|---|---|---|---|---|
| Feature A | 4.2 | 12 | Now | Planned |
| Feature B | 3.8 | 8 | Next | Candidate |

## Insight Summary
| Feature | Insight Count | Top Request | Segment |
|---|---|---|---|
| Feature A | 12 | "Need bulk edit" | Enterprise |
```

## Quality Standards
- Feature hierarchy mirrors how customers think about the product, not internal architecture.
- Every feature links to at least one Objective for strategic traceability.
- Driver weights are reviewed quarterly and reflect current strategy.
- Insights are linked to features (not orphaned) to enable data-driven prioritization.
- Timeline positions (Now/Next/Later) are honest — "Now" means actively in development.

## Permissions Required
Editor role for feature management. Admin for driver configuration and hierarchy changes.

## Example
A collaboration product with 3 components, 18 features organized and scored. Top feature "Real-time co-editing" scores 4.5 with 23 linked insights from 15 customers, placed in "Now" timeline, linked to the "Increase collaboration engagement" objective. Prioritization matrix shows clear ranking with evidence-backed sequencing.
