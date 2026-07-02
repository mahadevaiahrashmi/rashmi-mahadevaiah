# Bug Triage

## Purpose
Prioritize and write up bugs with rigor — assessing severity, quantifying impact, documenting reproduction steps, and formatting for engineering consumption. Ensures bugs are actionable, properly prioritized, and don't languish without context.

## Auto-Trigger Patterns
- "triage this bug"
- "write up a bug report for [issue]"
- "prioritize this bug"
- "how severe is [issue]"
- "bug report for [problem]"
- "P0/P1/P2 assessment"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Bug description | Yes | User prompt |
| User reports / evidence | Recommended | User prompt |
| Product area context | Optional | `context/products/` |
| User segment affected | Optional | User prompt |

## Process
1. **Reproduce and verify** — Confirm the bug. Document exact steps, environment, and frequency.
2. **Assess severity** — P0 (system down, data loss), P1 (major feature broken, no workaround), P2 (degraded, workaround exists), P3 (minor), P4 (cosmetic).
3. **Quantify impact** — Users affected, revenue impact, workaround availability, reputational risk.
4. **Determine root cause hypothesis** — Based on behavior, hypothesize likely cause area.
5. **Check for related issues** — Regression? Related to recent deployments? Part of a pattern?
6. **Define expected vs. actual** — Crystal clear statement of correct vs. observed behavior.
7. **Assess urgency** — Getting worse? Time-sensitive (launch, demo, contract)?
8. **Format for tracker** — Structure for Jira/Linear with all fields populated.

## Output Format
```
## Bug Report: [Descriptive Title]

### Severity & Priority
- **Severity:** P[0-4] — [Justification]
- **Component:** [Product area]

### Impact Assessment
| Dimension | Detail |
|-----------|--------|
| Users affected | [Number/percentage] |
| Revenue impact | [Direct/indirect] |
| Workaround | [Available? Cost?] |

### Description
**Expected:** [What should happen]
**Actual:** [What actually happens]

### Reproduction Steps
1. [Step 1]
2. [Step 2]
**Environment:** [Browser, OS, account type]
**Frequency:** [Always / Intermittent / Edge case]

### Root Cause Hypothesis
[Best guess for engineering investigation]
```

## Quality Standards
- Reproduction steps enable first-attempt reproduction by any engineer.
- Severity justified with impact data, not gut feel.
- Expected vs. actual is unambiguous.

**Anti-patterns:** Vague descriptions, missing repro steps, severity inflation, mixing multiple bugs in one report.

## Framework References
- **Severity classification** — P0-P4 standard framework.
- **Impact/effort prioritization** — Balancing fix cost against user impact.

## Formatting Guidelines
- Structured fields matching common tracker formats.
- Tables for impact (scannable).
- Numbered reproduction steps.

## Example
**Severity justification:** "P1 — Checkout flow fails silently for users with multiple payment methods (est. 18% of paying users). No error shown; users assume purchase completed. Workaround: remove all but one payment method. Revenue impact: ~$12K/day."
