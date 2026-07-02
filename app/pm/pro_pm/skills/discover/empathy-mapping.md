# Empathy Mapping

## Purpose
Build empathy maps for target customer personas by capturing what they Think, Feel, Say, and Do. Empathy maps humanize data-driven personas, help cross-functional teams develop genuine customer understanding, and surface emotional and social dimensions that quantitative research misses.

## Auto-Trigger Patterns
- "create an empathy map"
- "empathy map for [persona]"
- "what does our customer think and feel"
- "understand [persona]'s perspective"
- "build a persona empathy map"
- "humanize our customer data"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Target persona or customer segment | No | `context/products/*/customers.md` |
| Customer research (interviews, quotes) | Recommended | Prior research outputs |
| Behavioral data | Optional | User prompt |
| Specific scenario or context | Optional | User prompt |

## Process
1. **Select the persona** — Choose one specific persona or segment. Empathy maps work best when focused on a single archetype.
2. **Set the scenario** — Define the context: what is this persona trying to accomplish? When and where are they doing it?
3. **Map the four quadrants:**
   - **Think:** Internal thoughts, beliefs, assumptions, mental models. What occupies their mind? What worries them? What do they believe about the problem space?
   - **Feel:** Emotions, anxieties, aspirations. What frustrates them? What excites them? What do they fear?
   - **Say:** What they express to others — in interviews, in meetings, on social media. How they describe their challenges.
   - **Do:** Observable behaviors, actions, workarounds, habits. How do they currently solve (or not solve) the problem?
4. **Identify pains** — Synthesize the pain points that emerge across all four quadrants: fears, frustrations, obstacles, blockers.
5. **Identify gains** — What does success look like? What outcomes do they want? What would delight them?
6. **Map influences** — Who and what shapes their decisions? Peers, bosses, vendors, industry media, community.
7. **Cross-reference** — Validate the empathy map against customer research data and `context/products/*/customers.md`. Flag any gaps between what research shows and what the empathy map reveals.
8. **Extract design implications** — Identify specific product, messaging, or experience design insights that emerge from the empathy map.

## Output Format
```
## Empathy Map: [Persona Name]

### Persona Snapshot
| Attribute | Detail |
|-----------|--------|
| Role | ... |
| Company type | ... |
| Experience level | ... |
| Scenario | ... |

### Empathy Map

#### 🧠 Think
- [Internal thought or belief]
- [Mental model or assumption]
- [Worry or preoccupation]

#### ❤️ Feel
- [Emotion or aspiration]
- [Frustration or anxiety]
- [Hope or excitement]

#### 💬 Say
> "[Verbatim quote or paraphrase]"
> "[What they tell their boss/team]"

#### 🏃 Do
- [Observable behavior]
- [Workaround or habit]
- [Decision or action]

### Pains
| Pain | Source Quadrant | Severity |
|------|---------------|----------|
| ... | Think + Feel | High |

### Gains
| Desired Outcome | Importance |
|----------------|------------|
| ... | High |

### Influences
| Influence | Type | Impact |
|-----------|------|--------|
| ... | Peer / Boss / Media / Vendor | ... |

### Design Implications
1. **Product:** ...
2. **Messaging:** ...
3. **Experience:** ...
```

## Quality Standards
- Based on actual research data, not team projections about customers.
- Includes direct customer quotes (Say quadrant) — not paraphrased internal language.
- Think and Feel quadrants go beyond the obvious — surface non-obvious anxieties and beliefs.
- Pains and gains are connected to specific quadrant evidence.
- The map is specific to a scenario, not a generic character sketch.

**Anti-patterns:** Filling quadrants with what we wish customers thought, projecting the team's language onto the customer, creating empathy maps without customer research, making it too generic to be actionable, ignoring emotional and social dimensions.

## Framework References
- **Empathy Mapping** — Dave Gray's four-quadrant empathy map framework.
- **JTBD** — Functional, emotional, and social job dimensions align with the four quadrants.
- **Persona Development** — Empathy maps complement data-driven persona profiles.

## Formatting Guidelines
- Four quadrants clearly labeled with emoji icons for quick identification.
- Use bullet points in Think, Feel, Do quadrants; blockquotes in Say quadrant.
- Separate pains and gains sections below the map.
- Keep each quadrant to 3-5 items — depth over breadth.

## Example
**Scenario:** Empathy map for "Dana the Data Analyst" when she needs to present weekly metrics to her VP.

**Think:** "I'm spending more time making the report than analyzing the data. There has to be a better way."
**Feel:** Anxious about data accuracy; embarrassed when asked questions she can't answer in real-time.
**Say:** "It takes me half of Monday just to pull numbers from three tools into a deck."
**Do:** Manually copies data from 3 dashboards into Google Slides every Monday morning. Screenshots charts because she can't export them cleanly.
