# Dual-Track Agile

## What It Is
Dual-Track Agile runs two parallel tracks — Discovery and Delivery — operating simultaneously. The Discovery track validates what to build (through research, experiments, and prototyping), while the Delivery track builds validated solutions (through sprints and engineering). Ideas flow from Discovery to Delivery only after validation, ensuring teams build the right thing efficiently.

## When to Use
- Product teams that need to balance research with shipping
- When teams keep building features that don't move metrics — discovery is missing
- Transitioning from a "feature factory" to an outcome-oriented team
- Organizations adopting continuous discovery practices

## When NOT to Use
- Very early-stage products where the team is the discovery and delivery team simultaneously
- Purely technical projects (migrations, infrastructure) with no user-facing discovery needs
- Teams too small to sustain two tracks — adapt to "discovery time" within sprints instead

## How to Apply
1. **Discovery Track** (PM + Designer, with eng support):
   - Weekly customer interviews (at least 1/week)
   - Opportunity identification and mapping (Opportunity Solution Trees)
   - Rapid prototyping and assumption testing
   - Outputs: Validated opportunities, tested solutions, refined requirements
2. **Delivery Track** (Engineering, with PM + Designer support):
   - Sprint-based or Kanban-based development
   - Building validated solutions with clear acceptance criteria
   - Shipping, measuring, and iterating
3. **The handoff**: Discovery outputs feed the delivery backlog. Only validated items enter delivery
4. **Cadence**: Discovery runs 1–2 sprints ahead of delivery. Not too far ahead (waste) or too close (bottleneck)
5. **Shared rituals**: Joint standups, shared retros, synchronized planning

## Template
| Track | Activities This Sprint | Outputs | Next Sprint Feed |
|-------|----------------------|---------|------------------|
| Discovery | Interviews: ___, Prototypes: ___, Experiments: ___ | Validated: ___ | → Delivery backlog |
| Delivery | Stories: ___, Ship: ___ | Released: ___ | → Metrics to inform discovery |

**Discovery-Delivery Ratio**: ___% discovery / ___% delivery time

## Example
**Sprint 5 Discovery**: Interviewed 4 users about search frustration → Identified "can't find past conversations" as top pain → Prototyped 3 search concepts → Validated "semantic search" concept with 8 users
**Sprint 6 Delivery**: Building semantic search feature (validated in Sprint 5 discovery). Refined scope based on prototype feedback
**Sprint 6 Discovery**: Testing pricing sensitivity for premium search features, exploring next opportunity (notification overload)

## Key Pitfalls
- Treating discovery as a phase before delivery (waterfall thinking) — they run in parallel
- Discovery running too far ahead of delivery — leads to stale research and wasted prototypes
- Engineers not participating in discovery — they bring feasibility insights and creative solutions
- No feedback loop — delivery outcomes must inform what discovery explores next

## Related Frameworks
- **Continuous Discovery** — Teresa Torres' habits that power the discovery track
- **Scrum** — common delivery track methodology
- **Opportunity Solution Tree** — the artifact connecting discovery to delivery
- **Shape Up** — alternative to dual-track with integrated shaping + building cycles
