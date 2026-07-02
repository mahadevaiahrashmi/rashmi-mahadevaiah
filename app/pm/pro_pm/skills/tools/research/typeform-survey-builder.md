# Typeform / Survey Builder

## Purpose
Designs surveys in Typeform or SurveyMonkey format — structuring question flows, logic jumps, completion optimization, and analysis plans — to gather quantitative and qualitative user feedback with high completion rates.

## Auto-Trigger Patterns
- "Build a survey"
- "Create a Typeform"
- "Design a user survey"
- "SurveyMonkey questionnaire for…"
- "Customer feedback survey"

## Tool Configuration
Requires `context/integrations/typeform.md` or `context/integrations/surveymonkey.md` with: account credentials, workspace ID. Auth: OAuth 2.0 or API key with survey creation scope.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Survey objective, target audience, key questions
- **Optional:** Logic jump conditions, branding, completion incentive, distribution channel, analysis plan

## Process
1. Define the survey objective and what decisions the results will inform.
2. Select question types matching data needs: multiple choice, scale, open-ended, NPS.
3. Structure the flow: screening → core questions → demographics → thank you.
4. Add logic jumps for branching paths based on responses.
5. Optimize for completion: keep under 5 minutes, use progress indicators.
6. Design the thank you screen with next steps or incentive.
7. Plan distribution: email, in-app, link, embed.
8. Define the analysis plan before launching.

## Output Format
```
# Survey: [Title]

## Survey Metadata
- **Objective:** [What decision this survey informs]
- **Target Audience:** [Who should take this]
- **Estimated Time:** [X minutes]
- **Target Responses:** [N]
- **Distribution:** [Email | In-app | Link | Social]
- **Incentive:** [None | Raffle | Discount]

## Questions

### Screening (if applicable)
**Q1.** [Screening question to qualify respondent]
- Type: [Multiple Choice]
- Options: [A, B, C]
- Logic: If [disqualifying answer] → End screen: "Thanks, this survey isn't for you"

### Core Questions
**Q2.** [Question text]
- Type: [Rating Scale 1-5]
- Required: Yes
- Labels: 1 = Very Dissatisfied, 5 = Very Satisfied

**Q3.** [Question text]
- Type: [Multiple Choice — select multiple]
- Options:
  - [Option A]
  - [Option B]
  - [Option C]
  - Other (free text)
- Required: Yes

**Q4.** [Question text]
- Type: [Open-ended — short text]
- Required: No
- Placeholder: "[Hint text]"
- Logic: Only show if Q2 ≤ 2

**Q5.** [NPS question: "How likely are you to recommend…"]
- Type: [NPS (0-10)]
- Required: Yes
- Follow-up: Open text "What's the main reason for your score?"

### Demographics
**Q6.** [Role/segment question]
- Type: [Dropdown]
- Options: [Role list]
- Required: Yes

## Logic Jumps
| From | Condition | Jump To |
|---|---|---|
| Q1 | Answer = [disqualifying] | End Screen |
| Q2 | Score ≤ 2 | Q4 (detractor follow-up) |
| Q2 | Score ≥ 4 | Q5 (skip Q4) |

## Thank You Screen
- **Message:** "[Thank you message with next steps]"
- **CTA:** [Button: "Join our beta" | "View results" | None]
- **Redirect:** [URL if applicable]

## Analysis Plan
| Question | Analysis Method | Metric |
|---|---|---|
| Q2 | Distribution + mean | Satisfaction score |
| Q3 | Frequency count | Feature priority ranking |
| Q4 | Thematic coding | Detractor pain points |
| Q5 | NPS calculation | Net Promoter Score |
| Q2 × Q6 | Cross-tabulation | Satisfaction by role |

## Quality Checks Before Launch
- [ ] Survey takes < 5 minutes to complete
- [ ] No leading or biased question phrasing
- [ ] Logic jumps tested for all paths
- [ ] Mobile-responsive layout verified
- [ ] Thank you screen confirms submission
- [ ] Analysis plan covers all questions
```

## Quality Standards
- Questions are neutral — no leading language or assumption of satisfaction.
- Required questions are limited to essentials — optional reduces abandonment.
- Logic jumps create relevant paths without dead ends.
- Open-ended questions appear after quantitative ones (anchoring).
- Survey length is under 5 minutes — every question must justify its inclusion.
- Analysis plan is defined before launch, not after data collection.

## Permissions Required
Typeform/SurveyMonkey account with survey creation access. Premium for logic jumps and branching.

## Example
A product satisfaction survey with 8 questions: 1 screener (active user check), NPS question with follow-up, 3 rating scales (ease of use, feature satisfaction, support quality), 1 multi-select (most-used features), 1 open-ended (biggest improvement request, shown only to detractors), 1 role demographic. Logic branches detractors to a follow-up question. Analysis plan includes NPS calculation, satisfaction cross-tabbed by role, and thematic coding of open responses. Target: 200 responses over 2 weeks via in-app prompt.
