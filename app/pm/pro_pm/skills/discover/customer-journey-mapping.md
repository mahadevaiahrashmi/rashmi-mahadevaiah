# Customer Journey Mapping

## Purpose
Map the end-to-end customer experience across all touchpoints — from first awareness through advocacy — to identify pain points, moments of truth, and opportunities for improvement. Journey maps align cross-functional teams around a shared understanding of the customer experience and reveal where investments will have the highest impact.

## Auto-Trigger Patterns
- "map the customer journey"
- "create a journey map"
- "customer experience map"
- "touchpoint analysis"
- "where do customers struggle in our funnel"
- "onboarding journey"
- "end-to-end customer experience"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Journey scope (full lifecycle or specific phase) | Yes | User prompt |
| Customer persona or segment | No | `context/products/*/customers.md` |
| Known touchpoints and channels | Recommended | User prompt |
| Customer research findings | Optional | Prior research outputs |
| Behavioral/analytics data | Optional | User prompt |

## Process
1. **Define the scope** — Specify which journey: full lifecycle or a specific phase (e.g., onboarding, renewal). Identify the persona this journey represents.
2. **Identify journey stages** — Map the major phases: Awareness → Consideration → Purchase → Onboarding → Adoption → Expansion → Advocacy (or a subset).
3. **List touchpoints per stage** — For each stage, catalog every customer interaction: website, sales call, email, in-app, support, community, documentation.
4. **Map customer actions** — What is the customer doing at each touchpoint? What decisions are they making?
5. **Capture emotions** — For each touchpoint, rate the emotional state: positive (delight, confidence), neutral, or negative (frustration, confusion, anxiety). Use evidence from research.
6. **Identify pain points** — Flag every point of friction, confusion, delay, or failure. Rate severity.
7. **Find moments of truth** — Identify critical moments where the experience makes or breaks the relationship (e.g., first value realization, support during a crisis, renewal decision).
8. **Spot opportunities** — For each pain point or gap, identify improvement opportunities. Categorize as quick win, medium effort, or strategic investment.
9. **Map the emotional curve** — Create a high-level emotional arc showing how the customer's sentiment changes across the journey.

## Output Format
```
## Customer Journey Map: [Persona] — [Scope]

### Persona Summary
[Brief description of who this journey represents]

### Journey Overview
| Stage | Goal | Duration | Key Metric |
|-------|------|----------|------------|
| Awareness | Discover solutions | ... | ... |
| Consideration | Evaluate fit | ... | ... |

### Detailed Journey

#### Stage: [Awareness]
| Touchpoint | Channel | Customer Action | Emotion | Pain Point | Opportunity |
|-----------|---------|----------------|---------|------------|-------------|
| ... | Website | ... | 😊 / 😐 / 😟 | ... | ... |

#### Stage: [Onboarding]
...

### Moments of Truth
| Moment | Stage | Why It Matters | Current Experience |
|--------|-------|----------------|-------------------|
| First value realization | Onboarding | Determines long-term retention | ... |

### Emotional Arc
```
Awareness  →  Consideration  →  Purchase  →  Onboarding  →  Adoption
   😊            😐              😊            😟            😊
  [excited]   [overwhelmed]   [hopeful]    [frustrated]  [productive]
```

### Pain Point Summary (Prioritized)
| # | Pain Point | Stage | Severity | Frequency | Opportunity |
|---|-----------|-------|----------|-----------|-------------|
| 1 | ... | ... | High | ... | ... |

### Opportunity Roadmap
| Quick Wins | Medium Effort | Strategic |
|-----------|--------------|-----------|
| ... | ... | ... |
```

## Quality Standards
- Journey is based on research evidence, not internal assumptions about what customers experience.
- Emotions are grounded in customer quotes or behavioral data, not guesses.
- Pain points include severity and frequency, not just existence.
- Moments of truth are identified and explicitly called out.
- The map tells a story — not just a spreadsheet of touchpoints.

**Anti-patterns:** Inside-out mapping (our process, not their experience), ignoring emotional dimension, mapping only the happy path, creating a journey map and never updating it, skipping post-purchase stages.

## Framework References
- **Service Design** — End-to-end experience mapping across front-stage and back-stage.
- **Customer Journey Mapping** — Touchpoint identification and emotional arc visualization.
- **Moments of Truth** — Critical interactions that disproportionately impact the relationship.

## Formatting Guidelines
- Visual flow from left to right across stages.
- Use emoji or simple indicators for emotional state.
- Pain points highlighted in red/bold for visual prominence.
- Separate section for moments of truth — these deserve executive attention.
- Opportunity roadmap organized by effort level.

## Example
**Scenario:** Mapping the onboarding journey for a new enterprise customer.

**Moment of Truth:** "First dashboard with real data" — This is where the customer either says "this is going to work" or "this was a mistake." Currently, average time to first real dashboard is 14 days. Reducing this to 3 days would dramatically improve expansion likelihood.
