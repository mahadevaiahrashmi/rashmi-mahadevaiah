# Tools Audit

## Purpose
Audit and optimize the PM toolstack: inventory current tools, analyze cost and usage, identify overlap and gaps, find consolidation opportunities, plan migrations, and calculate ROI. Ensure the PM and team are using the right tools effectively without paying for redundancy or missing critical capabilities.

## Auto-Trigger Patterns
- "Audit our tools"
- "Tool stack review"
- "Are we using too many tools"
- "Tools audit"
- "Optimize our tooling"
- "Tool consolidation"
- "Do we need [tool]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Current tools list** (required) — tools in use, who uses them, what for
- **Cost data** (optional) — subscription costs, per-seat pricing
- **Usage data** (optional) — active users, frequency, feature utilization
- **Pain points** (optional) — what's not working with current tools
- **Team size** (required) — for per-seat cost calculations

## Process
1. **Inventory all tools** — name, purpose, category, owner, cost, users
2. **Categorize by function** — planning, communication, analytics, design, development, documentation
3. **Assess utilization** — for each tool: active users vs licenses, features used vs available
4. **Identify overlap** — tools serving the same function, data duplication
5. **Identify gaps** — capabilities needed but not covered
6. **Evaluate consolidation opportunities** — which overlapping tools can be replaced
7. **Calculate savings** — direct cost + time savings from reduced tool switching
8. **Plan migrations** — for tools to be retired or consolidated

## Output Format
```markdown
# Tools Audit — [Team/Org] — [Date]

## Current Toolstack
| Tool | Category | Monthly Cost | Users | Utilization | Verdict |
|------|----------|-------------|-------|-------------|---------|
| [Tool] | Planning | $X/mo | X/Y seats | High | Keep |
| [Tool] | Analytics | $X/mo | X/Y seats | Low | Review |

## Cost Summary
- **Total monthly**: $X
- **Total annual**: $X
- **Per-PM cost**: $X
- **Potential savings**: $X (XX%)

## Overlap Analysis
| Function | Tools | Recommendation |
|----------|-------|---------------|
| Project tracking | Jira + Asana + Linear | Consolidate to one |

## Gap Analysis
| Need | Current Solution | Ideal Solution |
|------|-----------------|---------------|
| [Capability] | Manual / none | [Tool or process] |

## Utilization Deep Dive
### Underutilized Tools
| Tool | Cost | Active Users | Features Used | Recommendation |
|------|------|-------------|---------------|---------------|

### Well-Utilized Tools
| Tool | Value Assessment |
|------|-----------------|

## Consolidation Plan
| Retire | Replace With | Migration Effort | Savings |
|--------|-------------|-----------------|---------|

## ROI Analysis
| Change | Annual Savings | Implementation Cost | Net ROI |
|--------|---------------|-------------------|---------|

## Migration Plan
### Phase 1: Quick Wins (Month 1)
### Phase 2: Consolidation (Month 2-3)
### Phase 3: Optimization (Month 4+)
```

## Quality Standards
- Inventory is comprehensive — includes shadow IT and free tools
- Utilization assessment uses data where available, honest estimates where not
- Consolidation recommendations consider switching costs, not just license savings
- Migration plan includes change management, not just tool swaps
- **Anti-patterns**: Auditing only paid tools; measuring only cost without value; forcing consolidation when overlap serves different needs; no migration plan

## Framework References
- Total Cost of Ownership (TCO) analysis
- Tool rationalization methodology
- Technology adoption lifecycle for migration planning

## Formatting Guidelines
- Summary table at top with verdict column
- Cost summary as executive-level numbers
- Overlap and gap analysis as comparison tables
- Migration plan as phased timeline

## Example
Audit reveals: "$850/month on 12 tools. Jira ($200) and Asana ($150) both used for project tracking — consolidate to Jira (team already proficient), save $1,800/year. Analytics tool has 3/10 seats active — downgrade plan, save $600/year. Gap: no user research repository — consider Dovetail or structured Notion setup. Total potential savings: $4,200/year (41%)."
