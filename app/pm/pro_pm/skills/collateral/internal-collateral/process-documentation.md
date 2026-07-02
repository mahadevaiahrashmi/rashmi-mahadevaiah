# Process Documentation

## Purpose
Creates clear internal process documentation covering the process name, purpose, step-by-step procedure, RACI matrix, tools used, templates referenced, exception handling, and review cadence. Ensures consistent execution and provides a reference for onboarding and process improvement.

## Auto-Trigger Patterns
- "Document our [process name] process"
- "Create process documentation for [workflow]"
- "I need to write down how we do [activity]"
- "Help me standardize our [process] workflow"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Process name, purpose, steps, people involved, tools used
- **Optional:** Current pain points, exception scenarios, related processes, metrics for process health
- **Reference files:** product-charter.md, knowledge-base-article.md, team-onboarding-guide.md

## Process
1. **Observe the current process** — Document what actually happens, not what should happen.
2. **Identify the purpose** — Why does this process exist? What outcome does it produce?
3. **Map the steps** — Sequential, with decision points, inputs, and outputs at each step.
4. **Define RACI** — Who is Responsible, Accountable, Consulted, and Informed?
5. **Document exceptions** — What happens when the normal flow breaks? Escalation paths.
6. **Set review cadence** — Processes should be reviewed and updated regularly.

## Output Format
```
# Process: [Process Name]
**Owner:** [Name] | **Last Updated:** [Date] | **Review Cadence:** [Quarterly]

## Purpose
[One paragraph: Why this process exists. What outcome it produces.
When it should be followed.]

## When to Use
[Trigger conditions. What initiates this process.]

## RACI Matrix
| Step | Responsible | Accountable | Consulted | Informed |
|------|------------|-------------|-----------|----------|

## Process Steps

### Step 1: [Action]
**Input:** [What's needed to start]
**Action:** [What to do, with specific instructions]
**Output:** [What this step produces]
**Tool:** [What tool/system to use]
**Time:** [Expected duration]

### Step 2: [Action]
[Same structure]

### Decision Point: [Decision]
- If [condition A] → Go to Step 3
- If [condition B] → Go to Step 5
- If [unclear] → Escalate to [person/role]

### Step 3-N: [Same structure]

## Templates & Tools
| Template/Tool | Purpose | Location |
|--------------|---------|----------|

## Exceptions
| Exception | How to Handle | Escalation |
|-----------|--------------|------------|

## Process Health Metrics
| Metric | Target | Current | Measurement |
|--------|--------|---------|-------------|

## Related Processes
[Links to upstream and downstream processes]

## Changelog
| Date | Change | Reason | Author |
|------|--------|--------|--------|
```

## Quality Standards
- A new team member can follow the process without asking for help.
- Steps are specific enough to execute but flexible enough for judgment.
- RACI is clear—no ambiguity about who does what.
- **Anti-patterns:** Documenting the ideal process instead of the real one, steps that require tribal knowledge, no exception handling, never reviewed or updated.

## Audience
Team members who execute the process, new hires learning it, and managers who need to understand and improve it. Write for someone doing this for the first time.

## Formatting Guidelines
- Numbered steps with clear inputs/outputs.
- Decision points as flowchart-style branches.
- RACI table at the top for quick reference.
- Include a changelog to track process evolution.

## Example
**Step 3:** "Submit the PRD for review. Input: Completed PRD draft. Action: Share the PRD in the #product-reviews Slack channel with the template: 'PRD Review Request: [Feature Name] — Please review by [date, min 3 business days]. Key questions: [2-3 specific questions].' Add reviewers in the doc: Engineering Lead, Design Lead, and one peer PM. Output: Review comments received. Tool: Google Docs + Slack. Time: 3-5 business days for review."
