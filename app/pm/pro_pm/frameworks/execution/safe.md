# SAFe (Scaled Agile Framework)

## What It Is
SAFe (Scaled Agile Framework), created by Dean Leffingwell, is a framework for scaling agile practices across large enterprises. It organizes teams into Agile Release Trains (ARTs) of 50–125 people, synchronized through Program Increment (PI) Planning events. SAFe defines four configurations: Essential, Large Solution, Portfolio, and Full.

## When to Use
- Large organizations (100+ engineers) needing coordination across many teams
- When multiple teams contribute to a single product or value stream
- Regulated industries requiring traceability and governance at scale
- Organizations transitioning from waterfall that need structured agile guidance

## When NOT to Use
- Small companies or single-team products — SAFe's overhead isn't justified
- Organizations with high trust and team autonomy — lighter frameworks (Scrum, Shape Up) are better
- When the organization isn't committed to the cultural change SAFe requires — it becomes bureaucratic theater
- Startups — SAFe is designed for scale, not speed

## How to Apply
1. **Identify Value Streams**: End-to-end flow of value to the customer
2. **Form Agile Release Trains (ARTs)**: Cross-functional teams of teams (50–125 people) aligned to a value stream
3. **PI Planning** (every 8–12 weeks):
   - 2-day event with all ART members
   - Teams plan their work for the next Program Increment (4–6 sprints)
   - Identify dependencies, risks, and shared objectives
   - Commit to PI Objectives
4. **Execute**: Teams run Scrum or Kanban within the PI cadence
5. **Inspect and Adapt**: At PI end, demo results, retrospect, and plan improvements
6. **Key roles**: Release Train Engineer (RTE), Product Manager (PM), System Architect

## Template
| Element | Description |
|---------|-----------|
| Value Stream | |
| ART Name | |
| PI Duration | ___ sprints × ___ weeks |
| PI Objectives | |
| Dependencies (cross-team) | |
| Risks | |

## Example
**Context**: E-commerce platform with 15 teams across 3 ARTs
- **ART 1 (Buyer Experience)**: 5 teams — search, browse, cart, checkout, payments
- **ART 2 (Seller Platform)**: 5 teams — listing, inventory, fulfillment, analytics, tools
- **ART 3 (Platform)**: 5 teams — infra, data, security, shared services, DevOps
- **PI Planning**: All 15 teams plan together quarterly. Cross-ART dependencies identified (e.g., checkout team needs payment API update from platform team)
- **PI Objective**: "Enable same-day delivery for top 10 metro areas"

## Key Pitfalls
- "SAFe theater" — adopting the ceremonies without the mindset; becomes heavyweight waterfall
- Too many ARTs — each ART adds coordination overhead; merge small ones
- PI Planning without empowered teams — if plans are dictated top-down, the planning event is wasted
- Ignoring continuous improvement — SAFe requires constant tuning, not a one-time rollout
- Not adapting SAFe to your context — Essential SAFe is often sufficient; don't adopt Full SAFe by default

## Related Frameworks
- **Scrum** — the team-level methodology that SAFe scales
- **WSJF** — SAFe's built-in prioritization method
- **Team Topologies** — complementary approach to organizing teams within ARTs
- **Spotify Model** — alternative scaling model with less ceremony
