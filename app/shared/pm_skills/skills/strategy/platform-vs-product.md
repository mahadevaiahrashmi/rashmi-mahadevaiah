# Platform vs Product Strategy

## Purpose
Analyze when and how to evolve from a product to a platform. Covers the platformization decision, API strategy, ecosystem development, developer adoption, governance model, and platform monetization. Helps determine if the platform play is right and how to execute it.

## Auto-Trigger Patterns
- "Should we become a platform?" / "platform strategy"
- "API strategy for [product]" / "developer ecosystem"
- "Platform vs product analysis"
- "How do we build an ecosystem?"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Current product capabilities, customer integration needs, competitive landscape, developer interest signals
- **Optional:** API usage data, partner requests, ecosystem benchmarks, platform economics data
- **Reference:** Platform economics literature, `context/products/` for ecosystem analysis

## Process
1. **Assess platform readiness** — Do you have: core value that others want to build on? Sufficient user base? Repeatable integration patterns? Without these, platformization is premature.
2. **Evaluate the strategic case** — Platform creates: network effects, switching costs, ecosystem lock-in, new revenue streams. But also: governance complexity, support burden, security surface area.
3. **Define API strategy** — What capabilities to expose? Read-only vs read-write? Public vs partner vs internal? Versioning and deprecation approach.
4. **Design developer experience** — Documentation, SDKs, sandbox, onboarding, support. Developers are your new "customers" — apply PM thinking to their experience.
5. **Plan ecosystem development** — Who are the first developers/partners? What integrations create the most value? How do you seed the ecosystem?
6. **Establish governance** — API policies, rate limits, data access rules, partner tiers, quality standards, review processes.
7. **Design monetization** — Revenue share, API pricing, marketplace fees, premium partner programs. Balance monetization with ecosystem growth.
8. **Sequence the rollout** — Internal APIs → partner APIs → public APIs. Each stage validates and de-risks the next.

## Output Format
```
## Platform Strategy: [Product]
**Current State:** Product | **Target:** Platform
**Timeline:** [Phased rollout timeline]

### Platform Readiness Assessment
| Criterion | Status | Evidence |
|-----------|--------|----------|
| Core value others want to build on | 🟢/🟡/🔴 | [Evidence] |
| Sufficient user base | 🟢/🟡/🔴 | [Evidence] |
| Repeatable integration patterns | 🟢/🟡/🔴 | [Evidence] |
| Developer interest signals | 🟢/🟡/🔴 | [Evidence] |

### Strategic Case
**Value of platformization:** [Network effects, switching costs, new revenue]
**Risks:** [Governance complexity, support burden, competitive concerns]

### API Strategy
| Capability | Access Level | Priority | Rationale |
|-----------|-------------|----------|-----------|
| [Capability] | Public/Partner/Internal | P1/P2 | [Why] |

### Developer Experience Plan
[Documentation, SDKs, onboarding, support approach]

### Ecosystem Development
**Phase 1:** [Internal/partner APIs — validate demand]
**Phase 2:** [Public APIs — developer adoption]
**Phase 3:** [Marketplace — ecosystem monetization]

### Governance Model
[API policies, rate limits, partner tiers, quality standards]

### Monetization
[Revenue model for the platform — API pricing, marketplace fees, partner programs]
```

## Quality Standards
- Readiness assessment is honest — premature platformization is worse than staying a product.
- API strategy is selective — not every capability should be an API. Start narrow.
- Developer experience is treated as a product — with user research, iteration, and quality standards.
- Governance balances openness with control — too open creates quality problems, too closed stifles adoption.
- **Anti-patterns:** "Build it and they will come" platform strategy, exposing APIs without developer experience investment, no governance model, platformizing before product-market fit, ignoring the support cost of a platform.

## Framework References
- Platform economics — multi-sided market dynamics
- API-first design — treat APIs as products
- Developer experience (DX) as product management
- Network effects — direct, indirect, data

## Formatting Guidelines
- Readiness assessment in table format with RAG status.
- Phase the rollout visually — internal → partner → public.
- Include governance details — these are often the hardest decisions.
- Keep to 4-6 pages.

## Example
> **Readiness Assessment:** Three of four criteria are green — 40+ customers have asked for API access, we see 12 repeating integration patterns, and our user base is 10K+ active. Developer interest is yellow — we have anecdotal demand but no structured research yet.
>
> **Phase 1 recommendation:** Launch partner API with 5 design partners. Validate: Do partners actually build? What support do they need? What's the integration completion rate? Graduate to public API only after 3+ partners are live in production.
