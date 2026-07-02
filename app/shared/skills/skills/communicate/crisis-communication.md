# Crisis Communication

## Purpose
Draft crisis and incident communications across all phases — acknowledgment, investigation updates, resolution, and post-mortem. Covers internal updates (tiered by audience), customer communication (impacted vs all), and public statements. Provides templates for each phase to enable rapid, consistent, trust-preserving communication.

## Auto-Trigger Patterns
- "Write a crisis communication" / "incident comms"
- "Help me communicate this outage/breach/incident"
- "Draft a customer apology for [incident]"
- "Post-mortem communication for [incident]"
- "Internal incident update template"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Incident type and severity, current status (ongoing/resolved), impact scope, audience(s)
- **Optional:** Root cause (if known), timeline of events, prior incident communications
- **Reference:** Incident response playbook, `context/people/` for communication chain

## Process
1. **Assess severity and scope** — Who's affected? How badly? Is it ongoing? This determines communication urgency and breadth.
2. **Identify audiences** — Internal tiers: exec team, engineering, all-company. External: impacted customers, all customers, public/media.
3. **Phase the communication:**
   - **Phase 1 — Acknowledgment (ASAP):** We know. We're on it. Here's what we know so far.
   - **Phase 2 — Updates (every 30-60 min during active incident):** Here's what we've learned. Here's what we're doing. ETA if possible.
   - **Phase 3 — Resolution:** It's fixed. Here's what happened. Here's what to check.
   - **Phase 4 — Post-mortem:** Root cause, timeline, what we're doing to prevent recurrence.
4. **Write with accountability** — Own it. No passive voice, no blame-shifting, no minimizing.
5. **Match detail to audience** — Execs need impact and business risk. Eng needs technical detail. Customers need action steps. Public needs accountability and forward commitment.
6. **Prepare escalation triggers** — Define when to escalate communication (e.g., >1hr outage → CEO aware, >4hr → board notified, data breach → legal involved).

## Output Format
```
## Crisis Communication Plan: [Incident Name]
**Severity:** [P1/P2/P3] | **Status:** [Active/Mitigated/Resolved]
**Impact:** [Who and how many affected] | **Started:** [Time]

---

### Phase 1: Acknowledgment (send within 15 min)

**Internal (Exec):**
[Incident summary, business impact, current response, next update timing]

**Internal (All-Company):**
[Brief incident acknowledgment, who's handling it, next update timing]

**Customer (Impacted):**
"We're aware of [issue description]. Our team is actively investigating. We'll update you within [timeframe]. [Status page link]"

**Customer (All):**
[Only if broad awareness needed — brief note with status page link]

---

### Phase 2: Update (every 30-60 min)
**Template:**
"Update [#]: As of [time], [what we know]. [What we're doing]. Next update by [time]. [Status page link]"

---

### Phase 3: Resolution
**Customer:**
"[Issue] has been resolved as of [time]. [What happened in plain language]. [What to check or do]. [Apology]. [What we're doing to prevent recurrence]."

---

### Phase 4: Post-Mortem
[Root cause, full timeline, impact metrics, remediation actions with owners and deadlines, lessons learned]

### Escalation Triggers
| Duration/Severity | Action |
|-------------------|--------|
| >15 min P1 | Exec notified |
| >1 hr P1 | CEO briefed |
| Data breach | Legal + compliance engaged |
```

## Quality Standards
- First acknowledgment goes out within 15 minutes of incident detection — speed matters more than completeness.
- Updates are on a committed cadence — even "no new information" is better than silence.
- Language takes ownership: "We experienced" not "Issues were encountered." Never "due to circumstances beyond our control."
- Post-mortem includes specific remediation with owners and deadlines, not vague "we'll do better."
- **Anti-patterns:** Delayed acknowledgment, going silent during investigation, blaming third parties, minimizing impact, over-promising remediation, skipping the post-mortem.

## Framework References
- Incident communication best practices — PagerDuty, Atlassian, Google SRE
- Crisis communication theory — speed, transparency, accountability, empathy
- NIST incident response framework

## Formatting Guidelines
- Templates per phase — teams should be able to fill in blanks, not write from scratch under pressure.
- Bold timestamps and status updates. Use UTC for technical audiences.
- Keep customer communications under 200 words per update — clarity under stress.
- Separate internal and external communications clearly.

## Example
> **Phase 1 (Customer):** "We're currently experiencing degraded performance on our dashboard service. Our engineering team was alerted at 2:14 PM UTC and is actively investigating. We'll provide an update within 30 minutes. Track status: status.example.com"
>
> **Phase 3 (Customer):** "The dashboard service issue has been resolved as of 3:01 PM UTC. A database migration triggered an unexpected lock, causing 47 minutes of degraded performance for EU users. No data was lost. We've implemented automated lock detection to prevent recurrence. We're sorry for the disruption."
