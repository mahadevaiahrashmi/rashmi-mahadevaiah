# Ecosystem Strategy

## Purpose
Develop a strategy for building and growing an API, marketplace, or integration ecosystem. Covers the ecosystem value proposition, developer segments, platform capabilities, governance, monetization, competitive positioning, and growth playbook.

## Auto-Trigger Patterns
- "Build an ecosystem strategy" / "integration strategy"
- "API marketplace plan" / "developer ecosystem"
- "How do we grow our integration ecosystem?"
- "Partner/developer platform strategy"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Core product capabilities, current integrations, developer/partner interest signals, competitive ecosystem landscape
- **Optional:** API usage data, partner revenue data, developer community metrics, marketplace benchmarks
- **Reference:** Platform economics, `context/products/` for ecosystem competitive analysis

## Process
1. **Define ecosystem value proposition** — Why would developers/partners build on your platform? What value do they get? What value do your mutual customers get?
2. **Segment developers/partners** — ISVs, agencies, internal teams, independent developers. Each has different motivations, capabilities, and support needs.
3. **Map platform capabilities** — What APIs, SDKs, webhooks, and extensibility points exist or need to be built? Prioritize by demand and strategic value.
4. **Design governance** — API policies, quality standards, review process, partner tiers, data access rules. Balance openness with quality.
5. **Plan monetization** — Revenue share, listing fees, premium placement, API pricing, partner programs. Balance extraction with ecosystem growth.
6. **Analyze competitive ecosystems** — What do competitors' ecosystems look like? Where are the gaps? What's your differentiation?
7. **Build growth playbook** — How do you attract the first 10 partners? The first 100? Community building, incentives, co-marketing.
8. **Define success metrics** — Active integrations, developer adoption, ecosystem revenue, customer impact.

## Output Format
```
## Ecosystem Strategy: [Product/Platform]
**Ecosystem Type:** [API / Marketplace / Integration Platform]
**Stage:** [Nascent / Growing / Mature]

### Ecosystem Value Proposition
**For developers/partners:** [What they gain]
**For customers:** [What they gain from the ecosystem]
**For us:** [Strategic value — network effects, retention, revenue]

### Developer/Partner Segments
| Segment | Motivation | Size | Priority |
|---------|-----------|------|----------|
| ISVs | Distribution, revenue | [Est.] | [P1/P2] |
| Agencies | Client solutions | [Est.] | [P1/P2] |
| Internal teams | Workflow automation | [Est.] | [P1/P2] |

### Platform Capabilities
| Capability | Status | Priority | Developer Impact |
|-----------|--------|----------|------------------|
| REST API | Live | — | Core access |
| Webhooks | Beta | P1 | Real-time events |
| SDK (JS/Python) | Planned | P1 | Developer velocity |
| Marketplace | Planned | P2 | Discovery + distribution |

### Governance Model
[API policies, rate limits, review process, quality standards, partner tiers]

### Monetization
[Revenue model — rev share, API pricing, partner programs]

### Growth Playbook
**Phase 1 (0-10 partners):** [Hands-on, co-build, design partners]
**Phase 2 (10-50):** [Self-serve tools, documentation, community]
**Phase 3 (50+):** [Marketplace, discovery, ecosystem marketing]

### Success Metrics
| Metric | Current | 6-Month Target | 12-Month Target |
|--------|---------|----------------|-----------------|
| Active integrations | [X] | [Y] | [Z] |
| Developer signups | [X] | [Y] | [Z] |
| Ecosystem revenue | $[X] | $[Y] | $[Z] |
```

## Quality Standards
- Value proposition is clear for all three sides: developers, customers, and you. If any side doesn't see value, the ecosystem won't work.
- Growth is phased — you can't jump to "marketplace" without first having enough partners to make it useful.
- Governance is defined early — retrofitting governance to a growing ecosystem is painful.
- Competitive analysis shows differentiation — "we also have an ecosystem" isn't a strategy.
- **Anti-patterns:** Building a marketplace before having partners, no governance until quality problems emerge, monetizing too early and stifling growth, treating ecosystem as a feature instead of a strategy.

## Framework References
- Platform economics — multi-sided markets
- Developer relations (DevRel) — community and adoption strategies
- Marketplace dynamics — liquidity, quality, discovery

## Formatting Guidelines
- Tables for segments, capabilities, and metrics.
- Phase the growth playbook clearly.
- Include governance details — these drive trust.
- Keep to 4-5 pages.

## Example
> **Value Prop for Developers:** Access to 10K+ active customers through our marketplace. Average partner earns $4K/mo in marketplace revenue within 6 months. Free development sandbox, co-marketing support, and dedicated partner engineering team.
>
> **Phase 1 — First 10 Partners:** We've identified 15 high-value integration opportunities based on customer requests. Approach the top 5 with: free API access, dedicated engineering support, co-marketing at launch, and featured marketplace placement for 90 days.
