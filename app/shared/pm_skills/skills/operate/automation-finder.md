# Automation Finder

## Purpose
Audit current PM workflows to identify tasks suitable for AI automation. Assess each candidate for feasibility, impact, and implementation effort. Produce a prioritized automation roadmap with expected time savings, helping the PM reclaim hours for high-impact strategic work.

## Auto-Trigger Patterns
- "What can I automate"
- "Automation opportunities"
- "Use AI to save time on…"
- "Which tasks can AI handle"
- "Automate my workflows"
- "Where should I use AI"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Workflow inventory** (required) — PM's recurring tasks, processes, and responsibilities
- **Time audit** (optional) — `operate/time-audit` output for time-per-task data
- **Tools in use** (optional) — current toolstack and integrations available
- **Pain points** (optional) — tasks that feel repetitive or low-value
- **AI tools available** (optional) — what the PM has access to (Cursor, ChatGPT, Copilot, etc.)

## Process
1. **Inventory recurring tasks** — list all tasks the PM does regularly with frequency and time spent
2. **Assess automation potential** for each task:
   - **Fully automatable**: requires no human judgment (e.g., status report generation from data)
   - **AI-assisted**: human does the thinking, AI does the drafting/formatting (e.g., PRD first draft)
   - **Human-required**: requires judgment, relationships, or creativity AI can't replace
3. **Evaluate feasibility** — tool availability, data access, quality requirements, integration complexity
4. **Estimate impact** — time saved, quality improvement, consistency gain
5. **Prioritize** — impact/effort matrix for sequencing
6. **Design implementation plan** — how to set up each automation
7. **Define quality gates** — how to ensure automated outputs meet standards

## Output Format
```markdown
# Automation Audit — [PM Name] — [Date]

## Task Inventory & Assessment
| Task | Frequency | Time/Instance | Automation Level | Priority |
|------|-----------|--------------|-----------------|---------|
| Status reports | Weekly | 2h | Full | P0 |
| PRD drafts | Monthly | 8h | AI-assisted | P1 |
| Competitive analysis | Quarterly | 6h | AI-assisted | P2 |
| Stakeholder alignment | Ongoing | N/A | Human-required | — |

## Automation Opportunities (Prioritized)

### P0: Quick Wins (< 1 hour setup)
#### [Task Name]
- **Current**: [How it's done today]
- **Automated**: [How it would work]
- **Tool**: [What to use]
- **Time saved**: Xh/week
- **Quality impact**: [Same / Better / Risk]
- **Setup steps**: …

### P1: High Impact (1-4 hours setup)
#### [Task Name]
…

### P2: Strategic (4+ hours setup)
#### [Task Name]
…

## Impact Summary
| Priority | Tasks | Weekly Time Saved | Monthly Time Saved |
|----------|-------|------------------|-------------------|
| P0 | X | Xh | Xh |
| P1 | X | Xh | Xh |
| **Total** | | **Xh/week** | **Xh/month** |

## What NOT to Automate
| Task | Why Human-Required |
|------|-------------------|

## Implementation Roadmap
### Week 1: P0 Quick Wins
### Week 2-3: P1 Setup
### Month 2: P2 Implementation

## Quality Gates
- [How to review automated outputs before using]
- [Feedback loop for improving automation quality]
```

## Quality Standards
- Assessment distinguishes truly automatable from AI-assisted from human-required
- Time savings estimates are realistic, not optimistic
- "What NOT to automate" section prevents over-automation of relationship-dependent tasks
- Quality gates ensure automation doesn't degrade output quality
- **Anti-patterns**: Trying to automate everything; ignoring setup time in ROI; automating without quality checks; automating tasks that build relationships

## Framework References
- Task automation assessment matrix (repetitiveness, structure, judgment required)
- Impact/effort prioritization framework
- Time audit output for baseline data

## Formatting Guidelines
- Inventory table at top for complete picture
- Prioritized sections (P0/P1/P2) for actionable sequencing
- Impact summary with concrete time savings
- "What NOT to automate" for balance

## Example
"Status reports: Currently 2h/week manually compiling metrics and writing updates. Automate: use AI to pull metrics from dashboard, generate narrative from template, PM reviews and edits (15 min). Saves 1.75h/week. PRD drafts: Currently 8h for first draft. AI-assist: provide brief, AI generates structured first draft, PM iterates. Saves 4-5h per PRD. NOT automatable: 1:1 conversations, stakeholder relationship building, strategic judgment calls."
