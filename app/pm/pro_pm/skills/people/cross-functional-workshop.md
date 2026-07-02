# Cross-Functional Workshop

## Purpose
Plan and facilitate collaborative workshops that bring cross-functional groups together for productive outcomes. Support multiple formats — design sprints, brainstorming sessions, strategy sessions, problem-solving workshops — with detailed objectives, agendas, exercises, facilitation guides, and follow-up plans. Turn meetings into working sessions that produce actionable output.

## Auto-Trigger Patterns
- "Plan a workshop for…"
- "Design sprint for…"
- "Brainstorming session about…"
- "Facilitate a working session on…"
- "Cross-functional workshop"
- "Strategy session planning"
- "Offsite agenda for…"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Workshop objective** (required) — what specific outcome or decision should the workshop produce
- **Participants** (required) — who should attend, their roles, why they're needed
- **Personas** (optional) — `context/people/[name]/persona.md` for key participants
- **Format preference** (optional) — design sprint, brainstorm, strategy, retrospective, problem-solving
- **Duration** (required) — time available (2 hours, half-day, full-day, multi-day)
- **Constraints** (optional) — remote/in-person/hybrid, tools available, preparation time

## Process
1. **Define sharp objectives** — SMART outcome statement for the workshop (not "discuss X" but "decide on X" or "generate 10 solutions for X")
2. **Select format** based on objective:
   - **Design Sprint**: rapid prototyping and validation (multi-day)
   - **Brainstorm**: divergent idea generation (2-4 hours)
   - **Strategy Session**: alignment on direction (half-day+)
   - **Problem-Solving**: root cause analysis and solution design (2-4 hours)
   - **Retrospective**: learn and improve (1-2 hours)
3. **Design agenda** with time-boxed exercises, clear transitions, and energy management
4. **Select exercises** appropriate to format and participants:
   - Divergent: brainwriting, crazy 8s, How Might We, SCAMPER
   - Convergent: dot voting, 2x2 matrix, impact/effort, affinity mapping
   - Evaluative: pros/cons/risks, pre-mortem, decision matrix
5. **Write facilitation guide** — instructions for each segment, key questions, how to handle common dynamics
6. **Prepare materials** list — templates, tools, pre-reads, room setup
7. **Design follow-up plan** — how outputs become actions

## Output Format
```markdown
# Workshop Plan: [Title]
**Objective**: [SMART outcome statement]
**Date**: … | **Duration**: … | **Format**: [type]
**Location**: [in-person / remote / hybrid]

## Participants
| Name | Role | Why Needed | Prep Required |
|------|------|-----------|---------------|

## Pre-Work
- [What participants should read/prepare before arriving]
- Deadline: [date]

## Agenda

### Opening (X min)
- Welcome and objective framing
- Ground rules: [specific to this group]
- Icebreaker: [exercise]

### Block 1: [Phase Name] (X min)
**Objective**: [What this block achieves]
**Exercise**: [Name and instructions]
**Facilitation notes**: [How to run it, what to watch for]
**Output**: [What this produces]

### Break (X min)

### Block 2: [Phase Name] (X min)
…

### Closing (X min)
- Synthesize outputs
- Assign owners to action items
- Feedback on the session
- Next steps with timeline

## Facilitation Guide

### Energy Management
- [When to take breaks, when to shift from solo to group work]

### Common Dynamics to Watch
- [Dominant voices — use round-robin or silent writing]
- [Scope creep — parking lot visible]
- [Analysis paralysis — time-box and force decisions]

### If Things Go Off Track
| Situation | Intervention |
|-----------|-------------|

## Materials Needed
- [ ] [Templates, sticky notes, timer, whiteboard, Miro board, etc.]

## Output Capture Template
[Structure for documenting workshop outputs]

## Follow-Up Plan
- Within 24 hours: [Send summary and action items]
- Within 1 week: [Owners report progress]
- Within 2 weeks: [Check-in on implementation]
```

## Quality Standards
- Objectives are SMART and outcome-oriented, not activity-oriented
- Agenda balances divergent and convergent thinking
- Exercises are appropriate for group size and participant personalities
- Facilitation guide handles real dynamics (dominant voices, tangents, energy dips)
- Follow-up plan ensures workshop outputs don't die after the session
- **Anti-patterns**: Workshop without clear deliverable; all-discussion no-exercise format; skipping pre-work; no follow-up plan; too many participants

## Framework References
- Google Design Sprint methodology
- Liberating Structures for participatory exercises
- Double Diamond (diverge → converge, diverge → converge)
- Facilitation frameworks (Technology of Participation)

## Formatting Guidelines
- Agenda as time-boxed blocks with clear objectives per block
- Facilitation notes inline with exercises
- Materials checklist for preparation
- Follow-up plan with owners and deadlines

## Example
Half-day workshop to align on Q4 priorities: "Opening (15m): context setting with Q3 results. Block 1 — Diverge (45m): each person writes top 3 opportunities on cards silently, then share and cluster. Block 2 — Evaluate (45m): dot voting on clusters, then impact/effort matrix for top 5. Block 3 — Converge (45m): assign owners, define success metrics, agree on resource allocation. Closing (15m): commitments read-back, next steps. Pre-work: review Q3 metrics dashboard and customer feedback summary."
