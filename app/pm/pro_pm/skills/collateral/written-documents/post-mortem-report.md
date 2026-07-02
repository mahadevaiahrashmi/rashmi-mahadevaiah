# Post-Mortem Report

## Purpose
Creates a structured incident or failure post-mortem document covering timeline, impact assessment, root cause analysis using 5 Whys, lessons learned, corrective actions, and preventive measures with clear ownership. Designed to promote blameless learning and prevent recurrence.

## Auto-Trigger Patterns
- "Write a post-mortem for [incident]"
- "Create a post-mortem report"
- "I need to document what went wrong with [event]"
- "Help me structure an incident review"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Incident description, timeline of events, impact data, people involved, resolution steps taken
- **Optional:** Monitoring data, alert history, prior related incidents, customer communications sent
- **Reference files:** process-documentation.md, product-brief.md

## Process
1. **Establish the timeline** — Minute-by-minute (or hour-by-hour) account of what happened. Facts only.
2. **Assess impact** — Quantify: users affected, revenue impact, duration, severity, SLA implications.
3. **Perform root cause analysis** — Apply 5 Whys. Identify contributing factors, not just the proximate cause.
4. **Extract learnings** — What did we learn about our systems, processes, and assumptions?
5. **Define actions** — Corrective (fix the immediate issue) and preventive (prevent recurrence). Assign owners and dates.
6. **Review blamelesslessly** — Focus on systems and processes, not individuals. Humans make errors; systems should prevent harm.

## Output Format
```
# Post-Mortem: [Incident Title]
**Date:** [Incident date] | **Severity:** [S1-S4] | **Author:** [Name] | **Status:** [Draft/Final]

## Executive Summary
What happened. Impact. Root cause (one sentence). Status of remediation.

## Timeline
| Time (UTC) | Event |
| HH:MM | [First detection/trigger] |
| HH:MM | [Escalation/response] |
| HH:MM | [Mitigation applied] |
| HH:MM | [Resolution confirmed] |

## Impact
- Users affected: [number, segments]
- Duration: [total time]
- Revenue impact: [estimate]
- SLA impact: [any breaches]
- Customer communications: [what was sent, when]

## Root Cause Analysis (5 Whys)
1. Why did [symptom] happen? → Because [cause 1]
2. Why did [cause 1] happen? → Because [cause 2]
3. Why did [cause 2] happen? → Because [cause 3]
4. Why did [cause 3] happen? → Because [cause 4]
5. Why did [cause 4] happen? → Because [root cause]

## Contributing Factors
- [Factor 1: e.g., missing monitoring]
- [Factor 2: e.g., process gap]
- [Factor 3: e.g., assumption proved wrong]

## What We Learned
1. [Learning about our systems]
2. [Learning about our processes]
3. [Learning about our assumptions]

## Action Items
| Action | Type | Owner | Due Date | Status |
| [Fix X] | Corrective | [Name] | [Date] | [Open/Done] |
| [Add monitoring for Y] | Preventive | [Name] | [Date] | [Open/Done] |
| [Update runbook Z] | Preventive | [Name] | [Date] | [Open/Done] |

## Review & Follow-Up
Review date for action item completion. Scheduled follow-up.
```

## Quality Standards
- Timeline is factual and precise—no editorializing about who should have done what.
- 5 Whys reaches a systemic root cause, not "human error."
- Every action item has an owner and due date—no orphaned tasks.
- **Anti-patterns:** Blame-focused language, stopping at the proximate cause, action items without owners, no follow-up plan.

## Audience
Engineering, product, and leadership involved in the incident and responsible for prevention. The immediate team needs detailed analysis; leadership needs impact summary and confidence in remediation. The broader org can learn from anonymized versions.

## Formatting Guidelines
- 2-4 pages. Structured with clear sections. Table for timeline and action items.
- Blameless language throughout: "The system" not "Person X."
- Bold the root cause and highest-priority action items.
- Include follow-up review date prominently.

## Example
**5 Whys excerpt:** "1. Why did users see errors? → The API returned 500s. 2. Why did the API return 500s? → Database connections were exhausted. 3. Why were connections exhausted? → A new feature opened connections without closing them properly. 4. Why wasn't this caught? → Load testing didn't simulate concurrent users at production scale. 5. Why didn't load testing match production? → Our test environment config caps at 100 concurrent users while production handles 5,000. **Root cause: Test environment does not reflect production scale, allowing resource leaks to pass QA.**"
