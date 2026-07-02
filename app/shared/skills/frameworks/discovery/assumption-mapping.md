# Assumption Mapping

## What It Is
Assumption Mapping is a technique for identifying and prioritizing the assumptions underlying your product decisions. Assumptions are plotted on two axes: importance (how critical it is to success) and evidence (how much evidence supports it). The riskiest assumptions — high importance, low evidence — are tested first. This prevents building on unvalidated foundations.

## When to Use
- Before committing significant resources to a new feature or product
- During discovery when you have multiple hypotheses to test
- At the start of any new initiative to surface hidden assumptions
- When team members disagree about what's true — make assumptions explicit

## When NOT to Use
- Well-understood problems with strong data — just build it
- Minor improvements where the risk of being wrong is low
- When you need prioritization (use RICE) rather than risk assessment

## How to Apply
1. **Generate assumptions**: Brainstorm all assumptions behind your initiative. Cover:
   - Desirability: "Customers want this" / "This solves a real problem"
   - Viability: "Customers will pay for this" / "This is financially sustainable"
   - Feasibility: "We can build this" / "The technology exists"
   - Usability: "Users can figure out how to use this"
2. **Plot on the map**: X-axis = Evidence (low to high), Y-axis = Importance (low to high)
3. **Focus on the upper-left quadrant**: High importance + low evidence = riskiest assumptions
4. **Design experiments** to test the riskiest assumptions first
5. **Update the map** as you gather evidence — assumptions move right as they're validated

## Template
```
HIGH IMPORTANCE
    │
    │  TEST THESE      WATCH THESE
    │  FIRST           (validated)
    │
    ├─────────────────────────────
    │
    │  SKIP THESE      SAFE TO
    │  (low risk)      IGNORE
    │
LOW IMPORTANCE
    LOW EVIDENCE ──── HIGH EVIDENCE
```

| Assumption | Type (D/V/F/U) | Importance | Evidence | Priority | Test Method |
|-----------|----------------|------------|----------|----------|-------------|
|           |                |            |          |          |             |

## Example
**Initiative**: Launch a freemium tier
| Assumption | Importance | Evidence | Action |
|-----------|-----------|----------|--------|
| Free users will convert to paid within 6 months | High | Low | Test: analyze comparable freemium products' conversion rates |
| Free tier won't cannibalize existing paid users | High | Low | Test: survey current paid users about feature usage |
| Infrastructure can handle 10x user load | High | Medium | Test: load testing |
| Users understand the free/paid boundary | Medium | Low | Test: prototype test with 5 users |

## Key Pitfalls
- Not surfacing assumptions in the first place — this requires deliberate facilitation
- Testing only desirability assumptions and ignoring feasibility/viability
- Over-investing in testing low-importance assumptions
- Treating assumption testing as a one-time gate rather than a continuous practice

## Related Frameworks
- **Lean Experimentation** — how to design tests for your riskiest assumptions
- **Opportunity Solution Tree** — structures assumptions within solution options
- **Pre-mortem** — another way to surface hidden assumptions (via imagined failure)
- **Lean Startup** — the build-measure-learn loop for validating assumptions
