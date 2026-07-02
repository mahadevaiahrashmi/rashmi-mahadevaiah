# Problem Framing

## Purpose
Structure an ambiguous problem space into a clear, well-defined problem statement with identified root causes, boundaries, and testable hypotheses. Good problem framing prevents teams from solving the wrong problem and ensures solutions address causes rather than symptoms.

## Auto-Trigger Patterns
- "help me frame this problem"
- "what's the real problem here"
- "root cause analysis"
- "5 whys analysis"
- "define the problem for [topic]"
- "separate symptoms from causes"
- "problem statement for [area]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Problem description or symptoms | Yes | User prompt |
| Customer evidence | Recommended | Research outputs, `context/products/*/customers.md` |
| Business context | Optional | `context/strategy/goals.md` |
| Prior solution attempts | Optional | User prompt |
| Metrics or data | Optional | User prompt |

## Process
1. **Capture the presenting problem** — Document how the problem was initially described. Note who raised it and what triggered the concern.
2. **Separate symptoms from causes** — List observable symptoms (what we see) separately from hypothesized causes (why it happens). Most initial problem descriptions are symptoms.
3. **Apply 5 Whys** — Starting from the most prominent symptom, ask "why" iteratively to drill toward root causes. Branch when multiple causes emerge.
4. **Map the problem structure** — Use an Ishikawa (fishbone) diagram approach: categorize contributing factors into People, Process, Product, Technology, Data, and Environment.
5. **Define problem boundaries:**
   - What's in scope vs. out of scope.
   - Who is affected (and who isn't).
   - When does the problem occur (triggers, frequency, context).
   - What's the magnitude (how bad, measured how).
6. **Craft the problem statement** — Use the format: "[Who] struggles to [achieve what outcome] when [context/trigger] because [root cause], resulting in [measurable impact]."
7. **Generate hypotheses** — For each root cause, draft a testable hypothesis: "We believe [cause] because [evidence]. We can test this by [method]."
8. **Assess using JTBD lens** — Frame the problem in terms of the job the customer is trying to get done. What functional, emotional, and social jobs are failing?
9. **Define success criteria** — How will we know the problem is solved? What metric moves? By how much?

## Output Format
```
## Problem Framing: [Topic]

### Presenting Problem
[How the problem was initially described]

### Symptoms vs. Root Causes
| Symptoms (Observable) | Hypothesized Root Causes |
|----------------------|-------------------------|
| ... | ... |

### 5 Whys Analysis
1. Why? → [Answer]
2. Why? → [Answer]
3. Why? → [Answer]
4. Why? → [Answer]
5. Why? → **[Root cause]**

### Contributing Factors (Ishikawa)
| Category | Factors |
|----------|---------|
| People | ... |
| Process | ... |
| Product | ... |
| Technology | ... |

### Problem Boundaries
| Dimension | In Scope | Out of Scope |
|-----------|----------|-------------|
| Users | ... | ... |
| Scenarios | ... | ... |
| Systems | ... | ... |

### Problem Statement
> [Who] struggles to [outcome] when [context] because [root cause], resulting in [impact].

### JTBD Lens
| Job Type | Job Statement | Current Failure |
|----------|--------------|-----------------|
| Functional | ... | ... |
| Emotional | ... | ... |

### Hypotheses
| # | Hypothesis | Evidence | Test Method |
|---|-----------|----------|-------------|
| H1 | ... | ... | ... |

### Success Criteria
| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| ... | ... | ... | ... |
```

## Quality Standards
- Problem statement is specific, measurable, and free of embedded solutions.
- Root causes are supported by evidence, not just logic chains.
- Boundaries are explicit — what's in and out of scope is clear.
- Hypotheses are falsifiable and have a defined test method.
- The problem is framed from the customer's perspective, not the team's.

**Anti-patterns:** Stating a solution as the problem ("We need to build X"), accepting the first explanation as root cause, framing too broadly ("users are unhappy"), skipping the boundary definition, confirmation bias in 5 Whys.

## Framework References
- **5 Whys** — Iterative root-cause drill-down.
- **Ishikawa / Fishbone Diagram** — Multi-factor cause categorization.
- **JTBD** — Problem framing around customer jobs.
- **Problem Tree** — Visual decomposition of problem causes and effects.

## Formatting Guidelines
- Use the `>` blockquote for the final problem statement to make it visually prominent.
- Tables for structured comparisons.
- Number the 5 Whys as a sequential list.
- Bold the identified root cause(s).

## Example
**Scenario:** Framing "customer onboarding takes too long."

**5 Whys:**
1. Why does onboarding take too long? → Users can't complete setup without help.
2. Why can't they complete setup? → The data connection step has 12 configuration fields.
3. Why are there 12 fields? → We support every edge case in the initial flow.
4. Why do we include edge cases upfront? → No progressive disclosure; all options shown at once.
5. Why? → **Setup was designed for power users, not first-time users.**

**Problem statement:** "New users (< 30 days) struggle to complete initial data source setup within their first session because the configuration flow exposes all options simultaneously without guidance, resulting in a 62% drop-off at the connection step."
