# Incident Response (PM)

## Purpose
Define the PM's role during production incidents — managing customer communication, internal stakeholder updates, severity assessment, business impact quantification, post-incident review coordination, and follow-up actions. Ensures PM adds value during incidents without stepping on engineering's toes.

## Auto-Trigger Patterns
- "we have an incident"
- "production is down"
- "customer-facing issue"
- "incident response for [outage]"
- "post-incident review for [incident]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Incident description | Yes | User prompt |
| Severity / scope | Yes | User prompt |
| Affected customers | Recommended | User prompt |
| SLA obligations | Optional | `context/products/` |

## Process
1. **Assess severity** — Map technical severity to business impact: revenue, SLAs, customer segments, reputation.
2. **Draft customer communication** — Acknowledge, provide status, set expectations. Empathetic, transparent, non-technical.
3. **Manage internal stakeholders** — Notify leadership, sales, CS, support with talking points.
4. **Quantify business impact** — Duration, affected users, revenue, SLA violations, support tickets.
5. **Support engineering** — Context on customer impact, affected workflows, business rationale for trade-offs.
6. **Coordinate post-incident review** — Schedule blameless retro. Prepare timeline, impact, contributing factors.
7. **Customer recovery** — All-clear communication, personal outreach to most-affected, credits if warranted.
8. **Drive follow-ups** — Track action items, prioritize in roadmap.

## Output Format
```
## Incident Response: [Title]
**Severity:** SEV-[1-4]  |  **Status:** Active / Resolved

### Business Impact
| Dimension | Impact |
|-----------|--------|
| Users affected | [Number] |
| Revenue at risk | [Amount] |
| SLA status | [Within / Violated] |

### Customer Communication
> [Copy-paste ready status update]

### Internal Update
**For Leadership:** [2-sentence summary]
**For Support:** [Customer-facing FAQ]

### PM Actions
- [ ] Business impact quantified
- [ ] Customer communication sent
- [ ] Stakeholders notified
- [ ] Post-incident review scheduled
```

## Quality Standards
- Customer communication is empathetic without over-promising timelines.
- Business impact uses real numbers when available.
- Post-incident review is blameless and systems-focused.
- Follow-up actions have owners and deadlines.

**Anti-patterns:** Technical jargon in customer comms, blame-oriented post-mortems, over-promising resolution, ignoring recovery after fix.

## Framework References
- **Incident management** — Severity classification, communication cadence.
- **Blameless post-mortem** — Learning-focused review.

## Formatting Guidelines
- Status banner at top.
- Customer communication in blockquote (copy-paste ready).
- Checklist for PM actions (trackable during chaos).

## Example
**Customer communication:** "We're currently experiencing an issue affecting dashboard loading for some users. Our team is actively investigating. We'll update within 30 minutes. Your data is safe and background processing continues normally."
