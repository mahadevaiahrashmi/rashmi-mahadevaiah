# Delegation Framework

## Purpose
Determine what to delegate, to whom, and how. Assess each task against criteria like skill required, learning value, time cost, and quality risk. Build a delegation matrix, define the right level of delegation per task type, set follow-up cadence, and help the PM scale their impact beyond their individual capacity.

## Auto-Trigger Patterns
- "What should I delegate"
- "Help me delegate"
- "I'm doing too much"
- "Delegation framework"
- "Who should handle [task]"
- "How to delegate effectively"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Task list** (required) — PM's current responsibilities and recurring tasks
- **Team members** (required) — who is available, their skills, development goals, capacity
- **PM's priorities** (required) — what only the PM should do
- **Time audit** (optional) — where time is currently spent
- **Quality requirements** (optional) — acceptable quality level for each task

## Process
1. **Categorize each task** on four dimensions:
   - **Skill required**: Does it need PM's specific expertise?
   - **Learning value**: Would delegating help someone grow?
   - **Time cost**: How long does it take the PM vs someone else?
   - **Quality risk**: What happens if it's done imperfectly?
2. **Apply delegation decision matrix**:
   - High skill + High risk → PM does it (strategic decisions, stakeholder management)
   - High skill + Low risk → PM does it but document for future delegation
   - Low skill + Low risk → Delegate immediately (admin, data pulls, formatting)
   - Low skill + High risk → Delegate with guardrails (process-dependent tasks)
   - Development opportunity → Delegate with coaching (stretch assignments)
3. **Match tasks to people** — based on skills, development goals, and capacity
4. **Set delegation level** per task:
   - Level 1: Do exactly as instructed
   - Level 2: Research and recommend, PM decides
   - Level 3: Decide and inform PM
   - Level 4: Full ownership, PM out of loop
5. **Define follow-up cadence** — check-in frequency based on delegation level and task criticality
6. **Create delegation plan**

## Output Format
```markdown
# Delegation Plan — [PM Name] — [Date]

## Task Assessment
| Task | Skill Req | Learning Value | Time Cost | Quality Risk | Decision |
|------|----------|---------------|----------|-------------|---------|
| [Task] | Low | High | 3h/wk | Low | Delegate |
| [Task] | High | Low | 2h/wk | High | Keep |

## Delegation Matrix
### Delegate Immediately
| Task | To Whom | Delegation Level | Follow-Up |
|------|---------|-----------------|-----------|
| [Task] | [Person] | Level 3 | Weekly check-in |

### Delegate with Coaching
| Task | To Whom | Coaching Plan | Graduation Criteria |
|------|---------|-------------|-------------------|

### Keep (PM Only)
| Task | Why PM Must Do It | Can It Be Documented? |
|------|------------------|---------------------|

### Document for Future Delegation
| Task | Documentation Needed | Target Date |
|------|---------------------|------------|

## Delegation Levels Explained
| Level | Description | PM Involvement | Best For |
|-------|-----------|---------------|---------|
| 1 | Do as instructed | High | New tasks, new people |
| 2 | Research & recommend | Medium | Building judgment |
| 3 | Decide & inform | Low | Trusted competence |
| 4 | Full ownership | None | Mastered tasks |

## People Development View
### [Person Name]
- **Current skills**: …
- **Growth goals**: …
- **Delegated tasks**: …
- **Development through delegation**: …

## Follow-Up Cadence
| Task | Person | Check-In | Escalation Trigger |
|------|--------|---------|-------------------|

## Time Freed
| Category | Hours Freed | Reinvest In |
|----------|-----------|------------|

## Common Delegation Mistakes to Avoid
- Delegating without context (set them up for success)
- Hovering after delegating (trust the process)
- Delegating only boring tasks (delegate growth opportunities too)
- Not following up at all (accountability matters)
```

## Quality Standards
- Assessment criteria are applied consistently across all tasks
- Delegation matches are based on skills and growth goals, not just availability
- Follow-up cadence is calibrated — not too tight (micromanagement) or too loose (abandonment)
- Development view shows how delegation serves team growth, not just PM convenience
- **Anti-patterns**: Delegating without sufficient context; dumping low-value work; keeping all interesting work; no follow-up system; expecting perfection on first attempt

## Framework References
- Eisenhower Matrix adapted for delegation decisions
- Situational Leadership (delegation levels tied to competence and commitment)
- Management leverage (high-leverage activities for PM vs delegatable work)
- 70-20-10 development model (delegation as learning opportunity)

## Formatting Guidelines
- Assessment table for initial categorization
- Delegation matrix grouped by action type
- People development view for team growth perspective
- Time freed summary for ROI clarity

## Example
"Sprint ticket writing (3h/week, low skill, high learning value for junior PM): Delegate to associate PM at Level 2 (they draft, PM reviews). Coaching plan: review first 2 sprints together, then graduate to Level 3. Stakeholder executive updates (2h/week, high skill, high risk): Keep — requires PM's relationship context and strategic framing. Data pulls for weekly metrics (1h/week, low skill, low risk): Delegate to analyst at Level 4 — full ownership with automated dashboard."
