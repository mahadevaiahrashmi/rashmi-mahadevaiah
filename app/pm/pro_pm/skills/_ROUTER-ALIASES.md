# Router Aliases — Legacy Path → Canonical Skill File

When `router.md` or a playbook uses a short path, resolve to `skills/{canonical}.md`.

| Legacy / short path | Canonical skill path |
|---------------------|----------------------|
| `define/user-stories` | `define/write-user-stories` |
| `define/acceptance-criteria` | `define/acceptance-criteria-writer` |
| `define/problem-framing` | `discover/problem-framing` |
| `define/feature-spec` | `define/write-prd` |
| `define/technical-requirements` | `define/write-technical-brief` |
| `define/scope-definition` | `define/scope-negotiation` |
| `define/success-metrics` | `define/define-success-metrics` |
| `discover/interview-guide` | `discover/customer-interview-prep` |
| `discover/research-synthesis` | `discover/user-research-synthesis` |
| `discover/jtbd-analysis` | `discover/jobs-to-be-done-analysis` |
| `discover/persona-builder` | `people/persona-builder` |
| `discover/journey-mapping` | `discover/customer-journey-mapping` |
| `plan/roadmap` | `plan/roadmap-planning` |
| `plan/okr-drafting` | `plan/quarterly-okrs` |
| `plan/estimation` | `plan/resource-estimation` |
| `execute/trade-off-analysis` | `execute/decision-doc` |
| `execute/status-update` | `execute/initiative-status-update` |
| `execute/retrospective` | `measure/retrospective` |
| `execute/scope-negotiation` | `define/scope-negotiation` |
| `execute/escalation` | `execute/escalation-doc` |
| `launch/checklist` | `launch/launch-readiness-checklist` |
| `launch/beta-plan` | `launch/beta-program` |
| `launch/rollout-strategy` | `define/feature-flag-strategy` |
| `launch/announcement` | `launch/feature-announcement` |
| `launch/post-launch-review` | `measure/post-launch-review` |
| `measure/metric-definition` | `define/define-success-metrics` |
| `measure/dashboard-design` | `tools/analytics/looker-dashboard-spec` |
| `measure/impact-analysis` | `measure/revenue-impact-analysis` |
| `communicate/email` | `communicate/stakeholder-email` |
| `communicate/slack-message` | `tools/communication/slack-announcement` |
| `communicate/presentation-narrative` | `communicate/presentation-outline` |
| `communicate/difficult-conversation` | `communicate/difficult-conversation-prep` |
| `communicate/change-comms` | `communicate/change-management-comms` |
| `communicate/meeting-recap` | `execute/meeting-notes-to-actions` |
| `people/stakeholder-map` | `people/stakeholder-mapping` |
| `people/raci` | `people/cross-functional-workshop` |
| `people/feedback` | `people/feedback-prep` |
| `people/team-health` | `people/team-health-check` |
| `strategy/swot` | `frameworks/strategy/swot` |
| `strategy/porters-five-forces` | `frameworks/strategy/porters-five-forces` |
| `strategy/vision-statement` | `strategy/vision-narrative` |
| `strategy/positioning` | `strategy/product-strategy-doc` |
| `strategy/build-vs-buy` | `strategy/build-vs-buy-vs-partner` |
| `strategy/strategic-narrative` | `strategy/vision-narrative` |
| `tools/project-management` | `tools/project-management/jira-ticket-writer` |
| `tools/knowledge-management` | `operate/knowledge-base-builder` |
| `tools/research` | `discover/survey-design` |
| `ai-pm/ai-product-strategy` | `ai-pm/ai-opportunity-scanner` |
| `ai-pm/prompt-engineering` | `ai-pm/prompt-engineering-review` |
| `ai-pm/ai-ethics` | `ai-pm/ai-ethics-review` |
| `ai-pm/ai-evaluation` | `ai-pm/llm-evaluation-plan` |
| `operate/process-design` | `operate/process-improvement` |
| `operate/incident-response` | `execute/incident-response-pm` |
| `operate/operational-readiness` | `launch/launch-readiness-checklist` |
| `operate/team-rituals` | `operate/team-charter` |
| `operate/knowledge-management` | `operate/knowledge-base-builder` |

## Playbook agent aliases (historical names)

| Legacy agent name | Canonical agent file |
|-------------------|----------------------|
| `prd-author` | `agents/spec-writer.md` |
| `customer-insight-analyst` | `agents/research-analyst.md` |
| `comms-drafter` | `agents/comms-chameleon.md` |
| `metrics-designer` | `agents/data-storyteller.md` |
| `exec-advisor` | `agents/document-builder.md` |
| `technical-advisor` | `agents/codebase-navigator.md` |
| `market-analyst` | `agents/competitive-intel.md` |
| `sprint-planner` | `agents/quarterly-planner.md` |
| `status-reporter` | `agents/comms-chameleon.md` |

## Collateral umbrella hints

When router lists `collateral/presentations` (category only), pick the best match under `skills/collateral/presentations/` from the user query. Same for `collateral/digital-content`, `collateral/sales-collateral`, etc.
