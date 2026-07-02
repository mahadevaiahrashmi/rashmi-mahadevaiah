# UserTesting Plan

## Purpose
Creates UserTesting.com test plans — defining test structures, task designs, screening questions, success metrics, and analysis frameworks — to gather usability insights from real users completing structured tasks with your product.

## Auto-Trigger Patterns
- "Plan a usability test"
- "UserTesting.com test for…"
- "Set up user testing"
- "Usability study plan"
- "Test design with real users"

## Tool Configuration
Requires `context/integrations/usertesting.md` with: UserTesting account, test templates. Auth: UserTesting platform login with test creation access. Appropriate plan tier for participant count and features.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product/prototype to test, research questions, target user profile
- **Optional:** Competitor testing, test type (moderated vs unmoderated), device requirements, success metrics

## Process
1. Define research objectives and key questions.
2. Design the screener to recruit the right participants.
3. Create tasks that test specific interactions without leading.
4. Write follow-up questions for each task.
5. Define success metrics: task completion, time, satisfaction, errors.
6. Set up the test configuration: device, duration, participant count.
7. Plan the analysis framework for processing results.
8. Define how findings will be shared and actioned.

## Output Format
```
# UserTesting Plan: [Test Name]

## Test Overview
- **Product:** [What's being tested — live product, prototype, competitor]
- **Type:** [Unmoderated | Moderated]
- **Device:** [Desktop | Mobile | Both]
- **Duration:** [X minutes]
- **Participants:** [N]
- **Target Completion:** [Date]

## Research Questions
1. [Can users complete [key task] without assistance?]
2. [Do users understand the [navigation/concept]?]
3. [What friction points exist in [flow]?]

## Screener Questions
| Question | Type | Qualifying Answer | Purpose |
|---|---|---|---|
| [Q1] | Multiple Choice | [Answer(s)] | [Ensure target persona] |
| [Q2] | Rating Scale | [Range] | [Verify experience level] |
| [Q3] | Yes/No | [Answer] | [Check tool familiarity] |

**Demographics:**
- Age: [Range]
- Gender: [Mix]
- Tech proficiency: [Level]
- Industry/Role: [If relevant]

## Tasks

### Task 1: [Task Name] — [Estimated time]
**Scenario:** "[You are a [persona] who needs to [goal]. Starting from [starting point]…]"
**Task:** "[Specific instruction — what to do, not how to do it]"
**Success Criteria:**
- [ ] User reaches [target screen/state]
- [ ] User completes action within [X minutes]
- [ ] User does not require backtracking

**Follow-up Questions:**
1. How easy was that task? (1-7 scale)
2. What, if anything, was confusing?
3. [Task-specific question]

### Task 2: [Task Name] — [Estimated time]
**Scenario:** "[Context setting]"
**Task:** "[Action to complete]"
**Success Criteria:**
- [ ] [Measurable criterion]

**Follow-up Questions:**
1. [Question]
2. [Question]

### Task 3: [Comparison Task] (optional)
**Scenario:** "Now try the same task on [competitor product]"
**Task:** "[Same goal, different product]"
**Comparison Questions:**
1. Which experience did you prefer and why?
2. What did [competitor] do better?

## Post-Test Questions
1. Overall, how would you rate your experience? (1-7)
2. What was the most frustrating part?
3. What did you enjoy most?
4. How likely would you be to use this product? (1-7)
5. Any other feedback?

## Success Metrics
| Metric | Task 1 | Task 2 | Task 3 | Target |
|---|---|---|---|---|
| Completion Rate | — | — | — | ≥ 80% |
| Avg. Time on Task | — | — | — | < Xm |
| Ease Rating (1-7) | — | — | — | ≥ 5.5 |
| Error Rate | — | — | — | < 20% |
| SUS Score | — | — | — | ≥ 68 |

## Analysis Framework
1. **Quantitative:** Completion rates, times, ratings per task
2. **Qualitative:** Affinity diagram of pain points from think-aloud
3. **Severity Rating:** Critical (blocks task), Major (causes confusion), Minor (suboptimal)
4. **Highlight Reel:** Key clips for stakeholder presentation

## Deliverables
- [ ] Summary report with findings and recommendations
- [ ] Highlight reel (3-5 min video of key moments)
- [ ] Severity-ranked issue list with screenshots
- [ ] Comparison matrix (if competitor testing included)
```

## Quality Standards
- Tasks describe goals, not steps — "find a product under $50" not "click the Filter button."
- Screener questions don't reveal the test purpose or desired answers.
- Success criteria are measurable and defined before testing begins.
- Follow-up questions are open-ended to capture qualitative insight.
- Analysis framework distinguishes severity levels for prioritized action.
- Comparison tasks use the same scenario for fair evaluation.

## Permissions Required
UserTesting account with test creation access. Appropriate participant panel access.

## Example
An unmoderated desktop test with 8 participants: 3 screening questions (ensuring target persona), 4 tasks testing the signup → onboarding → first value flow (8 minutes total), each with ease ratings and open-ended follow-ups, plus a competitor comparison task. Analysis produces: completion rates per task, affinity-diagrammed pain points, 12 issues severity-ranked (2 critical, 4 major, 6 minor), and a 4-minute highlight reel for the product team.
