# Team Topologies

## What It Is
Team Topologies, by Matthew Skelton and Manuel Pais (2019), defines four fundamental team types and three interaction modes for organizing technology teams. It applies Conway's Law intentionally — designing team structures to produce the software architecture you want. It emphasizes cognitive load as the primary constraint on team effectiveness.

## When to Use
- Reorganizing engineering teams for better flow and ownership
- When teams are blocked on each other or have unclear boundaries
- Scaling from a few teams to many and needing a design principle
- When the software architecture doesn't match the team structure (Conway's Law friction)

## When NOT to Use
- Tiny organizations (1–3 teams) where the model is obvious
- Temporary project teams that disband after delivery
- As a rigid prescription — it's a thinking tool, not an org chart template

## How to Apply
1. **Classify teams into four types**:
   - **Stream-aligned**: Aligned to a flow of work (product area, user journey, business domain). Primary type — most teams should be this
   - **Enabling**: Helps stream-aligned teams adopt new capabilities (DevOps, SRE, design systems). Temporary engagement
   - **Complicated-subsystem**: Owns a subsystem requiring deep specialist knowledge (ML, video codec, financial calculation engine)
   - **Platform**: Provides internal services to reduce cognitive load on stream-aligned teams (CI/CD, infrastructure, data platform)
2. **Define interaction modes**:
   - **Collaboration**: Two teams working closely together (temporary, for discovery)
   - **X-as-a-Service**: One team provides a service, the other consumes it (clear API boundary)
   - **Facilitating**: One team helps another build a capability (enabling team's primary mode)
3. **Manage cognitive load**: Each team should be able to own, build, test, and deploy their software independently
4. **Evolve over time**: Team types and interactions should change as the system matures

## Template
| Team | Type | Interaction Mode | With Team | Duration |
|------|------|-----------------|-----------|----------|
|      | Stream-aligned / Enabling / Complicated-subsystem / Platform | Collaboration / X-as-a-Service / Facilitating | | |

## Example
**Organization**: SaaS analytics company (12 teams)
- **Stream-aligned** (8 teams): Dashboard, Data Pipeline, Integrations, Onboarding, Billing, Mobile, Enterprise, Growth
- **Platform** (2 teams): Developer Platform (CI/CD, infra), Data Platform (storage, query engine)
- **Enabling** (1 team): Developer Experience (helps teams adopt new testing practices, observability)
- **Complicated-subsystem** (1 team): Query Optimizer (deep expertise in query planning)

Interactions:
- Dashboard ↔ Query Optimizer: X-as-a-Service (Dashboard calls the Query API)
- Developer Experience → Onboarding: Facilitating (helping adopt feature flags — 6-week engagement)
- Data Pipeline ↔ Integrations: Collaboration (building new connector framework — temporary)

## Key Pitfalls
- Making too many teams "Platform" — platform teams should serve multiple stream-aligned teams
- Enabling teams that never disengage — they should build capability and leave, not become permanent dependencies
- Ignoring cognitive load — teams owning too many services can't move fast regardless of type
- Treating Team Topologies as a one-time reorg instead of an evolving design

## Related Frameworks
- **Spotify Model** — an alternative organizational model with different terminology
- **Conway's Law** — the underlying principle Team Topologies leverages
- **SAFe** — how teams organize at scale (Team Topologies can inform ART structure)
- **McKinsey 7-S** — broader organizational alignment including structure
