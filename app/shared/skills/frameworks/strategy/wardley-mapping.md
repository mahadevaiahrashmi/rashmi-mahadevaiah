# Wardley Mapping

## What It Is
Wardley Mapping, created by Simon Wardley, is a strategic planning technique that maps value chains by their evolution stage. Components are plotted on two axes: visibility to the user (Y-axis) and evolution from Genesis → Custom-Built → Product → Commodity (X-axis). It reveals strategic positioning, build-vs-buy decisions, and competitive movements.

## When to Use
- Understanding your competitive landscape and where to invest
- Build vs. buy vs. partner decisions based on component evolution
- Identifying when to commoditize vs. innovate
- Communicating strategy visually to technical and business stakeholders

## When NOT to Use
- Quick feature prioritization — use RICE or value-effort matrix
- When you lack understanding of your value chain components — do discovery first
- Simple products with few components — the overhead isn't justified

## How to Apply
1. **Start with the user need** at the top of the map
2. **Map the value chain**: What components are needed to serve that need? Draw dependencies downward
3. **Position each component on the evolution axis**:
   - **Genesis**: Novel, uncertain, requires exploration (R&D)
   - **Custom-Built**: Understood but requires bespoke solutions
   - **Product (+rental)**: Increasingly standardized, multiple providers
   - **Commodity (+utility)**: Standardized, pay-per-use, invisible
4. **Identify movement**: Components naturally evolve left to right over time
5. **Apply strategic patterns**: Identify where to innovate (left side), where to leverage commodity (right side), and where competitors are positioned
6. **Make decisions**: Build (Genesis/Custom), Buy (Product), Use utility (Commodity)

## Template
```
[User Need]
    │
    ▼
[Visible Components] ──────────────────────────────►
    │              Genesis | Custom | Product | Commodity
    ▼
[Invisible Components] ────────────────────────────►
```

| Component | Evolution Stage | Build/Buy/Utility | Strategic Move |
|-----------|----------------|-------------------|----------------|
|           |                |                   |                |

## Example
**Product**: AI-powered customer support platform
- User Need: "Resolve customer issues quickly"
- Chat Interface → Product stage (buy existing widget)
- Ticket Routing → Product stage (use existing helpdesk)
- AI Intent Classification → Custom-Built (competitive differentiator — build)
- LLM API → Commodity (use OpenAI/Anthropic API)
- Cloud Infrastructure → Commodity (use AWS/GCP)

→ Invest in AI Intent Classification (custom differentiator). Commoditize everything else.

## Key Pitfalls
- Debating exact positions on the evolution axis — directional accuracy matters more than precision
- Mapping once and never updating — value chains evolve; remap quarterly
- Ignoring inertia — organizations resist movement even when the map shows the need
- Creating maps without involving people who understand the components

## Related Frameworks
- **Porter's Value Chain** — a simpler, non-evolutionary view of activities
- **Three Horizons** — time-based portfolio view that complements evolution stages
- **Blue Ocean** — Wardley maps can reveal blue ocean opportunities in evolving spaces
- **Technology Adoption Lifecycle** — tracks adoption, while Wardley tracks evolution
