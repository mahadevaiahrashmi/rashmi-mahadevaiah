# Maze Test Plan

## Purpose
Structures Maze usability tests — defining test flows, prototype linking, mission design, success metrics, and heatmap analysis — to gather quantitative usability data from prototype interactions at scale.

## Auto-Trigger Patterns
- "Create a Maze test"
- "Set up a Maze usability test"
- "Prototype testing in Maze"
- "Maze test plan for…"
- "Unmoderated prototype test"

## Tool Configuration
Requires `context/integrations/maze.md` with: Maze workspace URL, account access. Auth: Maze account login. Integration with Figma, Sketch, or InVision for prototype import.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Prototype (Figma/Sketch/InVision), key flows to test, research questions
- **Optional:** Target audience panel, screening criteria, success path definitions, survey questions

## Process
1. Define research objectives and the flows to validate.
2. Import the prototype from Figma/Sketch/InVision.
3. Design missions (tasks) with clear objectives and expected paths.
4. Define the success path — the intended navigation sequence.
5. Add survey blocks between or after missions.
6. Configure the test: welcome screen, thank you screen, branding.
7. Set up recruitment: Maze panel, link sharing, or embed.
8. Define the analysis plan for interpreting results.

## Output Format
```
# Maze Test: [Test Name]

## Test Overview
- **Prototype:** [Figma file name and link]
- **Platform:** [Desktop | Mobile | Responsive]
- **Missions:** [N missions]
- **Estimated Duration:** [X minutes]
- **Target Testers:** [N]
- **Recruitment:** [Maze panel | Link | Embed]

## Research Questions
1. [Can users navigate to [feature] without assistance?]
2. [Is the [workflow] intuitive for first-time users?]
3. [Which of two design options performs better?]

## Missions

### Mission 1: [Mission Name]
**Instruction:** "[Clear task description — what to accomplish]"
**Starting Screen:** [Screen name in prototype]
**Success Screen:** [Target screen that indicates completion]

**Expected Path (Happy Path):**
1. [Screen A] → Click [element]
2. [Screen B] → Click [element]
3. [Screen C] → Success ✓

**Path Length:** [N clicks]

**Metrics to Capture:**
| Metric | Target | What It Tells Us |
|---|---|---|
| Direct Success | ≥ 70% | Users find the path intuitively |
| Indirect Success | ≤ 20% | Users find it with exploration |
| Misclick Rate | ≤ 15% | UI elements are clear |
| Avg. Duration | < Xs | Task isn't overly complex |
| Give Up Rate | ≤ 10% | Task is completable |

### Mission 2: [Mission Name]
**Instruction:** "[Task description]"
**Starting Screen:** [Screen]
**Success Screen:** [Screen]
**Expected Path:** [Steps]
...

## Survey Blocks

### Post-Mission 1 Survey
**Q1.** How easy was it to [complete mission 1]?
- Type: Opinion Scale (1-5)
- Labels: Very Difficult → Very Easy

**Q2.** What, if anything, was confusing?
- Type: Open-ended

### Post-Test Survey
**Q3.** Overall, how would you rate this experience?
- Type: Opinion Scale (1-5)

**Q4.** Would you use this feature?
- Type: Yes/No/Maybe

**Q5.** Any additional feedback?
- Type: Open-ended

## Heatmap Analysis Plan
| Screen | Focus Area | What to Look For |
|---|---|---|
| [Screen A] | Navigation bar | Are users clicking expected menu items? |
| [Screen B] | CTA button | Is the primary action discoverable? |
| [Screen C] | Form fields | Where do users click first? |

## Analysis Framework

### Quantitative Metrics
| Mission | Direct % | Indirect % | Misclick % | Avg Time | Give Up % |
|---|---|---|---|---|---|
| Mission 1 | — | — | — | — | — |
| Mission 2 | — | — | — | — | — |

### Qualitative Analysis
- Theme open-ended responses by mission
- Identify common confusion points from indirect paths
- Note unexpected navigation patterns from heatmaps

### Usability Score
- **Excellent:** Direct success ≥ 80%, Misclick ≤ 10%
- **Good:** Direct success 60-79%, Misclick 11-20%
- **Needs Work:** Direct success < 60% or Misclick > 20%

## Deliverables
- [ ] Maze results dashboard (auto-generated)
- [ ] Summary report with findings per mission
- [ ] Heatmap screenshots with annotations
- [ ] Issue list prioritized by frequency and severity
- [ ] Design recommendations with evidence
```

## Quality Standards
- Missions test one thing each — don't combine multiple goals in one mission.
- Instructions describe the goal without revealing the path.
- Success screens are definitive — the user clearly completed the task.
- Expected paths are realistic — if the happy path has > 5 clicks, reconsider the design.
- Survey questions appear at natural breaks, not interrupting flow.
- Heatmap analysis focuses on key decision points, not every screen.

## Permissions Required
Maze account with test creation access. Figma/Sketch integration for prototype import.

## Example
A checkout flow test with 3 missions: (1) Add item to cart (expected: 2 clicks), (2) Apply discount code (expected: 3 clicks), (3) Complete purchase (expected: 4 clicks). 50 testers via Maze panel. Results show Mission 2 has 45% direct success (below 70% threshold) with high misclick rate on the coupon field — heatmap reveals users clicking the order summary expecting an input field there. Recommendation: relocate coupon input above the order summary. Post-test survey shows 4.2/5 overall satisfaction despite the coupon friction.
