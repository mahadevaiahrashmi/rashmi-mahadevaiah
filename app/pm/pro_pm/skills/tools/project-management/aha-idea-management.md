# Aha! Idea Management

## Purpose
Structures the Aha! Ideas portal workflow — defining idea categorization, scoring criteria, status workflows, customer linking, and prioritization processes to systematically capture and evaluate product feedback.

## Auto-Trigger Patterns
- "Set up Aha! Ideas portal"
- "Organize product ideas in Aha!"
- "Create idea scoring criteria"
- "Prioritize ideas from customers"
- "Build an idea management workflow"

## Tool Configuration
Requires `context/integrations/aha.md` with: Aha! subdomain, product key, Ideas portal config, API key. Auth: API key with Ideas management permissions.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product area, idea categories, scoring framework preferences
- **Optional:** Customer segments, existing ideas, SLA for review, portal branding

## Process
1. Define idea categories aligned with product areas and strategic themes.
2. Build the scoring model: impact, reach, strategic alignment, effort, confidence.
3. Configure status workflow: New → Under Review → Planned → In Progress → Shipped → Won't Do.
4. Set up customer linking — connect ideas to accounts for pattern analysis.
5. Define prioritization cadence and review process.
6. Create portal submission form with required and optional fields.
7. Establish promotion criteria for moving ideas to roadmap features.
8. Configure notifications and SLAs for submitter communication.

## Output Format
```
# Aha! Ideas Configuration: [Product]

## Categories
| Category | Description | Product Area |
|---|---|---|
| Usability | UX improvements | Core Product |
| Integration | Third-party connections | Platform |

## Scoring Model
| Criterion | Weight | Scale | Description |
|---|---|---|---|
| Strategic Fit | 30% | 1-5 | Alignment with current goals |
| Customer Impact | 25% | 1-5 | Breadth and depth of impact |
| Revenue Signal | 20% | 1-5 | Tied to expansion or retention |
| Feasibility | 15% | 1-5 | Technical complexity inverse |
| Confidence | 10% | 1-5 | Evidence quality |

## Promotion Criteria
Ideas scoring ≥ 3.5 with ≥ 3 customer votes advance to feature consideration.

## Review Process
- Weekly: PM triages new ideas, assigns categories, merges duplicates
- Monthly: Scoring review of Under Review ideas
- Quarterly: Promotion batch — qualifying ideas become roadmap features
```

## Quality Standards
- Scoring model weights sum to 100% and reflect current strategic priorities.
- Categories are mutually exclusive and collectively exhaustive.
- Promotion criteria are transparent and consistently applied.
- Customer linking enables data-driven prioritization.
- Every idea gets a response within the defined SLA.

## Permissions Required
Aha! Product Owner for Ideas configuration. Portal admin for public-facing settings.

## Example
A B2B SaaS product with 5 categories, 5-criterion weighted scoring, and a 3.5 promotion threshold. After one quarter: 47 ideas submitted, 12 promoted to features, 8 marked Won't Do with explanations, and customer linking reveals 3 enterprise accounts share the top-scored idea.
