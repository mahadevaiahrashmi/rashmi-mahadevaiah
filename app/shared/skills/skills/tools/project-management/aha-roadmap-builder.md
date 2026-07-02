# Aha! Roadmap Builder

## Purpose
Builds strategic product roadmaps in Aha! format — organizing features into releases and initiatives, linking them to goals, and structuring the roadmap for executive and stakeholder communication.

## Auto-Trigger Patterns
- "Build a roadmap in Aha!"
- "Create Aha! features and releases"
- "Set up the roadmap for [product]"
- "Map initiatives to goals in Aha!"
- "Structure our strategic roadmap"

## Tool Configuration
Requires `context/integrations/aha.md` with: Aha! subdomain, product key, API key. Auth: API key with product owner permissions. Configure custom scorecard fields for weighted scoring.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product strategy or roadmap vision, key features/initiatives
- **Optional:** Goals/OKRs, release schedule, initiative themes, scoring criteria, stakeholder audience

## Process
1. Define Strategic Goals linking product work to business outcomes.
2. Create Initiatives grouping related features under strategic themes.
3. Set up Releases with dates, themes, and development phases.
4. Create Features with descriptions, scores, and release assignments.
5. Link features → initiatives → goals for strategic traceability.
6. Apply the product value scorecard (reach, impact, confidence, effort).
7. Set feature status workflow: Under Consideration → Planned → In Progress → Shipped.
8. Configure roadmap views: timeline, list, portfolio.

## Output Format
```
# Aha! Roadmap: [Product Name]

## Goals
| Goal | Metric | Target | Timeframe |
|---|---|---|---|
| Increase activation | Day-7 retention | 40% → 55% | H2 2026 |

## Initiatives
| Initiative | Goal | Features | Status |
|---|---|---|---|
| Onboarding Redesign | Increase activation | 4 | Planned |

## Releases
| Release | Date | Theme | Features |
|---|---|---|---|
| v3.2 | Aug 2026 | Activation | 6 |

## Scorecard
| Feature | Reach | Impact | Confidence | Effort | Score |
|---|---|---|---|---|---|
| Interactive tutorial | 8 | 9 | 7 | 5 | 85 |
```

## Quality Standards
- Every feature traces to a goal through an initiative — no orphaned work.
- Scores are applied consistently using the same scorecard.
- Release dates are realistic and aligned with engineering capacity.
- Status reflects actual progress, not aspirational state.

## Permissions Required
Product Owner role in Aha! for feature and release management.

## Example
A SaaS roadmap with 2 goals, 4 initiatives, 3 releases spanning H2 2026, and 14 features scored and prioritized. Top initiative "Onboarding Redesign" has 4 features totaling score 320, assigned to v3.2, with traceability to the "Increase activation" goal.
