# Beta Program

## Purpose
Design and plan a beta program that generates actionable product feedback — defining participant criteria, recruitment strategy, feedback collection methods, success metrics, timeline, communication plan, and graduation criteria from beta to GA. Ensures betas are structured learning exercises, not indefinite soft launches.

## Auto-Trigger Patterns
- "plan a beta for [feature]"
- "beta program design"
- "how to run a beta for [product]"
- "beta participant criteria"
- "beta feedback plan"
- "beta to GA criteria"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / product for beta | Yes | User prompt |
| Target users / segments | Recommended | User prompt |
| Learning objectives | Recommended | User prompt |
| Timeline constraints | Optional | User prompt |
| Technical limitations | Optional | User prompt |

## Process
1. **Define beta objectives** — What are you trying to learn? Validate usability, test scalability, gather pricing signal, build customer evidence? Each objective shapes the program design.
2. **Set participant criteria** — Who should be in the beta? Segment, size, sophistication, willingness to provide feedback. Balance: early adopters (forgiving) vs. mainstream users (representative).
3. **Design recruitment strategy** — How to find and invite participants. Internal nominations, application form, existing customer outreach, community call.
4. **Plan feedback collection** — Methods matched to objectives: surveys (quantitative), interviews (qualitative), usage analytics (behavioral), support tickets (issues), NPS (satisfaction).
5. **Define success metrics** — What makes the beta a success? Activation rate, task completion, bug severity/count, NPS score, willingness to pay.
6. **Build the timeline** — Phases: recruitment, onboarding, active beta, mid-beta check-in, wrap-up, evaluation, GA decision.
7. **Create communication plan** — Beta participant communication: welcome, onboarding, check-ins, feature updates, feedback requests, graduation/sunset notice.
8. **Set graduation criteria** — What must be true to move from beta to GA? Quality bar, feedback incorporation, performance benchmarks.

## Output Format
```
## Beta Program: [Feature/Product]
**Duration:** [X weeks]  |  **Target participants:** [N]
**Beta Owner:** [name]

### Objectives
1. [What we're trying to learn — specific, measurable]
2. [Second learning objective]

### Participant Criteria
| Criteria | Requirement | Rationale |
|----------|------------|-----------|
| Segment | [Target segment] | [Why this segment] |
| Size | [Company size range] | [Why this size] |
| Engagement | [Minimum activity level] | [Ensures meaningful feedback] |
| Willingness | [Feedback commitment] | [Active participation needed] |

### Recruitment Plan
| Channel | Target # | Approach | Timeline |
|---------|---------|---------|----------|
| [Customer success] | [N] | [Nomination from CSMs] | [Week 1] |
| [Application form] | [N] | [Public/private call] | [Week 1-2] |

### Feedback Collection
| Method | Frequency | Objective Served | Owner |
|--------|-----------|-----------------|-------|
| In-app survey | Weekly | Usability, satisfaction | PM |
| User interviews | Bi-weekly | Deep qualitative | UXR |
| Usage analytics | Continuous | Behavioral patterns | Data |
| NPS survey | Start + end | Satisfaction trend | PM |

### Success Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Activation rate | [>X%] | [% who complete core task] |
| Task completion | [>X%] | [% successful completions] |
| NPS | [>X] | [End-of-beta survey] |
| Critical bugs | [<N] | [P0/P1 count at beta end] |

### Timeline
| Phase | Duration | Activities |
|-------|----------|-----------|
| Recruitment | Week 1-2 | [Identify and onboard participants] |
| Active beta | Week 3-6 | [Core usage and feedback period] |
| Evaluation | Week 7 | [Analyze data, make GA decision] |

### Communication Plan
| Touchpoint | Timing | Channel | Content |
|-----------|--------|---------|---------|
| Welcome | Day 1 | Email | [Onboarding, expectations, access] |
| Check-in | Weekly | Email/Slack | [Progress, feedback prompt] |
| Wrap-up | End of beta | Email | [Results, next steps, gratitude] |

### Graduation Criteria (Beta → GA)
- [ ] [Quality threshold met]
- [ ] [Feedback incorporated — top issues addressed]
- [ ] [Performance benchmarks met]
- [ ] [Documentation and enablement complete]
```

## Quality Standards
- Objectives drive program design — don't run a beta without knowing what you're testing.
- Participant criteria ensure representative feedback, not just enthusiastic early adopters.
- Feedback collection uses multiple methods — triangulate quantitative and qualitative.
- Graduation criteria are defined before beta starts, not after seeing results.

**Anti-patterns:** Permanent betas (no end date), no feedback structure, vanity metric success criteria, beta as a substitute for QA, too many participants for qualitative learning.

## Framework References
- **Lean validation** — Structured hypothesis testing with real users.
- **Customer development** — Continuous learning from user interactions.

## Formatting Guidelines
- Tables for criteria, feedback methods, and timeline (structured planning).
- Checklist for graduation criteria (binary pass/fail).
- Communication plan in chronological order.
- Success metrics with specific targets (not "good feedback").

## Example
**Graduation criteria:** "Beta graduates to GA when: (1) Activation rate exceeds 70% (currently 62% — need onboarding improvements), (2) No open P0 bugs and fewer than 3 P1s, (3) NPS score ≥40, and (4) support team has completed training and KB articles are published."
