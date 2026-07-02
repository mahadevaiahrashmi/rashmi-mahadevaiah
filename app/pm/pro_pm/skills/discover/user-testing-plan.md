# User Testing Plan

## Purpose
Plan a rigorous usability test — objectives, tasks, participant criteria, metrics, facilitation guide, and analysis framework — that yields actionable design insights. A structured test plan ensures consistency across sessions, reduces facilitator bias, and produces reliable evidence for design decisions.

## Auto-Trigger Patterns
- "plan a usability test"
- "user testing plan for [feature]"
- "create a usability study"
- "how should we test [design/prototype]"
- "set up user testing"
- "moderated / unmoderated test plan"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature or prototype to test | Yes | User prompt |
| Research questions | Yes | User prompt |
| Target user profile | Recommended | `context/products/*/customers.md` |
| Prototype or design link | Optional | User prompt |
| Test format (moderated/unmoderated) | Optional | User prompt (default: moderated) |

## Process
1. **Define objectives** — State 2-4 specific research questions this test will answer. Focus on usability, not preference.
2. **Choose test format:**
   - *Moderated* — Facilitator observes and probes in real-time. Best for exploratory research and complex flows.
   - *Unmoderated* — Participants complete tasks independently. Best for scale and benchmarking.
3. **Design tasks** — Create 4-6 realistic task scenarios. Each task should:
   - Be goal-oriented, not instruction-oriented ("Find the best hotel for your trip" not "Click the filter button").
   - Avoid giving away the answer through wording.
   - Have a clear completion criteria.
4. **Define participant criteria** — Demographics, behaviors, experience level. Specify recruit/screen criteria and sample size (typically 5-8 for moderated, 15-30 for unmoderated).
5. **Select metrics:**
   - *Effectiveness:* Task success rate (complete, partial, fail).
   - *Efficiency:* Time on task, number of errors.
   - *Satisfaction:* Post-task ratings (SEQ), post-test questionnaire (SUS).
   - *Qualitative:* Think-aloud observations, confusion points, workarounds.
6. **Build the facilitation guide** — Script for intro, consent, warm-up, task delivery, probing, and closing.
7. **Plan analysis** — How data will be captured (notes, video, screen recording), analyzed (affinity clustering of observations), and reported.
8. **Set logistics** — Tools, scheduling, incentives, recording permissions, observer roles.

## Output Format
```
## User Testing Plan: [Feature/Prototype]

### Objectives
1. [Research question]
2. [Research question]

### Test Format
| Detail | Value |
|--------|-------|
| Format | Moderated / Unmoderated |
| Duration | X minutes per session |
| Participants | N |
| Tool | ... |

### Participant Criteria
**Must have:** ...
**Nice to have:** ...
**Exclude:** ...
**Recruitment source:** ...

### Task Scenarios
| # | Scenario | Completion Criteria | Estimated Time |
|---|---------|-------------------|----------------|
| T1 | "You want to..." | [Participant reaches X] | 5 min |

### Metrics
| Category | Metric | How Measured |
|----------|--------|-------------|
| Effectiveness | Task success rate | Pass/partial/fail per task |
| Efficiency | Time on task | Timer per task |
| Satisfaction | SEQ (1-7) | Post-task rating |
| Satisfaction | SUS score | Post-test questionnaire |

### Facilitation Guide

#### Introduction (3 min)
- Welcome, explain the session
- "We're testing the design, not you"
- Consent for recording

#### Warm-Up (2 min)
- [Background questions]

#### Tasks (30 min)
- Deliver each task verbally and on card/screen
- Probing: "What are you thinking?" / "What did you expect?"

#### Closing (5 min)
- Overall impressions
- Anything else to share

### Analysis Framework
- Capture: [tool and method]
- Organize: affinity clustering of observations by task
- Report: issue severity matrix (Critical / Major / Minor / Cosmetic)

### Logistics
| Item | Detail |
|------|--------|
| Incentive | ... |
| Recording tool | ... |
| Observer roles | ... |
| Scheduling | ... |
```

## Quality Standards
- Tasks are scenario-based, not instruction-based.
- 5+ participants for moderated testing (sufficient to find ~85% of usability issues).
- Metrics include both quantitative (success rate, time) and qualitative (observations).
- Facilitation guide prevents leading the participant.
- Analysis framework is defined before testing begins.

**Anti-patterns:** Asking "Do you like this?" instead of observing behavior, tasks that reveal the answer, too many tasks for the session length, skipping the pilot session, testing with internal employees instead of real users.

## Framework References
- **Usability Testing Methodology** — Task-based testing with think-aloud protocol.
- **System Usability Scale (SUS)** — Standardized post-test satisfaction questionnaire.
- **Single Ease Question (SEQ)** — 7-point post-task difficulty rating.

## Formatting Guidelines
- Table for tasks with scenario text and completion criteria.
- Separate facilitation guide section formatted as a script.
- Metrics table with measurement method.
- Logistics at the end for administrative reference.

## Example
**Scenario:** Testing a new dashboard builder prototype.

**Task T2:** "Your VP has asked you to create a weekly summary showing revenue by region. Using the prototype, set up this dashboard. Start from the home screen."
**Completion criteria:** Participant creates a dashboard with at least one chart showing revenue broken down by region.
**Probes:** "What did you expect to happen there?" / "Is that what you were looking for?"
