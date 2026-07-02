# Calendar Audit

## Purpose
Reviews and analyzes a PM's calendar — categorizing meetings, calculating time allocation, identifying optimization opportunities, and recommending changes to protect deep work time and reduce meeting overhead.

## Auto-Trigger Patterns
- "Audit my calendar"
- "Review my meeting schedule"
- "How am I spending my time?"
- "Optimize my calendar"
- "Too many meetings — help me fix this"

## Tool Configuration
Requires `context/integrations/google-workspace.md` or `context/integrations/microsoft365.md` with: Calendar API read access. Auth: OAuth 2.0 with calendar.readonly scope.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Calendar data (1-2 week snapshot minimum)
- **Optional:** Role context (IC PM, lead, VP), team size, priority areas, protected time preferences

## Process
1. Pull calendar events for the analysis period.
2. Categorize each meeting: Decision, Status, Creative/Brainstorm, 1:1, Ceremony, External, Other.
3. Calculate time allocation by category, day, and week.
4. Identify optimization candidates: meetings to cancel, shorten, make async, or combine.
5. Assess deep work time: blocks of 2+ uninterrupted hours.
6. Evaluate meeting distribution across the week.
7. Generate recommendations with specific actions.
8. Suggest a protected time strategy.

## Output Format
```
# Calendar Audit: [Name] — [Date Range]

## Summary
- **Total meeting hours:** [X hours/week]
- **Meeting-free hours:** [X hours/week]
- **Longest uninterrupted block:** [X hours on Day]
- **Meeting density:** [X% of working hours]

## Time Allocation by Category
| Category | Hours/Week | % of Meetings | Assessment |
|---|---|---|---|
| Decision Meetings | X | XX% | [Appropriate | Too high | Too low] |
| Status/Updates | X | XX% | [Appropriate | Too high] |
| 1:1s | X | XX% | [Appropriate | Too many] |
| Creative/Brainstorm | X | XX% | [Appropriate | Too low] |
| Ceremonies | X | XX% | [Appropriate | Optimize] |
| External | X | XX% | [Appropriate] |

## Daily Distribution
| Day | Meeting Hours | Free Blocks (2h+) |
|---|---|---|
| Monday | X | X |
| Tuesday | X | X |
| Wednesday | X | X |
| Thursday | X | X |
| Friday | X | X |

## Optimization Recommendations

### Cancel (save ~Xh/week)
| Meeting | Current | Recommendation | Rationale |
|---|---|---|---|
| [Meeting] | 30min weekly | Cancel | No decisions made in 4+ weeks |
| [Meeting] | 60min weekly | Cancel | Duplicates [other meeting] |

### Shorten (save ~Xh/week)
| Meeting | Current | Proposed | Rationale |
|---|---|---|---|
| [Meeting] | 60min | 30min | Consistently ends early |

### Make Async (save ~Xh/week)
| Meeting | Current | Async Alternative |
|---|---|---|
| [Status update] | 30min weekly | Slack post + thread |

### Combine
| Meetings | Combined Format |
|---|---|
| [Meeting A] + [Meeting B] | Single 45min session |

## Deep Work Protection
**Current:** [X] uninterrupted 2h+ blocks per week
**Target:** [Y] blocks per week

**Recommendations:**
- Block [Day] [Time-Time] as Focus Time (no meetings)
- Move 1:1s to [Day] to consolidate
- Set "Speedy Meetings" (25/50 min defaults) for buffer time
- Decline optional meetings on [protected days]

## Estimated Impact
- Hours saved per week: [X]
- Additional deep work blocks: [X]
- Meetings reduced from [X] to [Y]
```

## Quality Standards
- Categories are applied consistently — every meeting fits exactly one category.
- Recommendations are specific — name the meeting, the change, and the rationale.
- Deep work assessment counts only 2+ hour uninterrupted blocks.
- Savings estimates are realistic, not aspirational.
- Recommendations respect the PM's role — don't suggest canceling essential 1:1s or stakeholder meetings.

## Permissions Required
Calendar read access for the audit period. No write access needed for analysis-only.

## Example
A PM with 28 hours/week in meetings: audit reveals 6 hours of status meetings (convert 4 to async), 3 meetings that consistently end early (shorten from 60 to 30 min), 2 duplicate syncs (combine). Recommendations save 7 hours/week, creating 3 additional 2-hour deep work blocks. Meeting density drops from 70% to 52%.
