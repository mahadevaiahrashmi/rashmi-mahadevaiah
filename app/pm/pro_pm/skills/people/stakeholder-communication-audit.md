# Stakeholder Communication Audit

## Purpose
Review the PM's recent communications against stakeholder persona preferences and recommended approaches. Identify mismatches between how the PM is communicating and how each stakeholder prefers to receive information. Surface patterns, flag ineffective approaches, and recommend specific improvements to increase communication effectiveness.

## Auto-Trigger Patterns
- "Review my communications"
- "Communication audit"
- "Am I communicating effectively with…"
- "Why isn't my message landing with…"
- "Communication effectiveness review"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Recent communications** (required) — emails, Slack messages, meeting notes, status updates sent by the PM
- **Stakeholder personas** (required) — `context/people/[name]/communication-guide.md`
- **Interaction logs** (optional) — `context/people/[name]/interaction-log.md`
- **Communication outcomes** (optional) — response times, action taken, feedback received

## Process
1. **Catalog recent communications** — list all significant communications in review period by stakeholder, channel, and type
2. **Compare against persona preferences** — for each communication, check:
   - Channel match (email vs Slack vs in-person vs document)
   - Detail level match (executive summary vs deep dive)
   - Framing match (data-led vs narrative vs action-oriented)
   - Timing match (async vs sync, day/time preferences)
   - Tone match (formal vs casual, direct vs diplomatic)
3. **Assess outcomes** — did the communication achieve its goal? Response time, engagement, action taken
4. **Identify patterns**:
   - Consistent mismatches across stakeholders
   - PM default style vs stakeholder needs
   - Channels being over/under-used
5. **Score communication effectiveness** per stakeholder
6. **Generate specific improvement recommendations**

## Output Format
```markdown
# Communication Audit — [Review Period]

## Summary Scorecard
| Stakeholder | Channel | Detail Level | Framing | Effectiveness |
|------------|---------|-------------|---------|---------------|
| [Name] | ✅ Match | ⚠️ Too detailed | ❌ Mismatch | 6/10 |

## Detailed Findings

### [Name] — [Overall Score]
**Preferred**: [From communication-guide.md]
**Actual**: [What PM has been doing]
**Mismatches**:
- [Specific mismatch with evidence]
**Impact**: [Observable effect on outcomes]
**Recommendation**: [Specific change]

## Pattern Analysis
### PM Default Tendencies
- [Patterns in PM's communication style across all stakeholders]

### Common Mismatches
- [Recurring gaps between PM style and stakeholder preferences]

## Improvement Plan
| Priority | Stakeholder | Change | Expected Impact |
|----------|------------|--------|----------------|

## Communication Effectiveness Trends
- Improving: …
- Stable: …
- Declining: …
```

## Quality Standards
- Audit compares specific communications against specific persona preferences
- Mismatches are illustrated with concrete examples, not vague observations
- Recommendations are actionable ("Send VP weekly bullet-point emails instead of detailed Slack threads")
- PM's default tendencies are surfaced as a pattern worth examining
- **Anti-patterns**: Grading without constructive alternatives; ignoring that communication is context-dependent; treating all mismatches as equal

## Framework References
- Communication-guide.md from persona files
- Communication accommodation theory
- Channel richness theory (matching channel to message type)

## Formatting Guidelines
- Scorecard table at top for executive summary
- Use match/mismatch emoji indicators for instant pattern recognition
- Detailed findings per stakeholder with evidence
- Prioritized improvement plan at bottom

## Example
Audit reveals: "PM sends long-form Slack messages to VP of Eng who prefers brief emails with bullet points. Response time from VP has been 2-3 days vs their usual same-day. Recommendation: switch to email, lead with 3 bullet points, add detail as optional attachment. PM sends data-light updates to Data Science Lead who prefers metrics-first communication — add a metrics table to weekly updates."
