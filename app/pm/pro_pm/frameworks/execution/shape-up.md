# Shape Up

## What It Is
Shape Up is Basecamp's product development methodology, documented by Ryan Singer (2019). It replaces sprints with 6-week build cycles, preceded by a "shaping" phase where problems are defined with the right level of abstraction. Key concepts: appetite (time budget, not estimate), betting table (choosing what to build), and circuit breakers (if it's not done in 6 weeks, it doesn't automatically continue).

## When to Use
- Teams frustrated with 2-week sprints that feel too short for meaningful work
- When you want to give teams more autonomy in how they solve problems
- Products where scope flexibility is more valuable than detailed specifications
- When the PM/leadership wants to define problems (not solutions) and let teams figure out how

## When NOT to Use
- Large organizations that need coordination across many teams — Shape Up is designed for small teams
- Highly regulated environments requiring detailed upfront specifications
- Teams that need daily standup accountability — Shape Up assumes high trust and autonomy
- Emergency/on-call work that can't wait for a 6-week cycle

## How to Apply
1. **Shaping** (before the cycle, by senior PM/designer):
   - Define the problem and appetite (how much time it's worth — 2 weeks or 6 weeks)
   - Shape the solution at the right level: specific enough to be actionable, rough enough to leave room for creativity
   - Write a "pitch" with Problem, Appetite, Solution sketch, Rabbit holes (risks), No-gos (explicit scope limits)
2. **Betting Table** (between cycles):
   - Stakeholders review pitches and "bet" on which to pursue
   - Commitment: once bet, the team gets the full cycle uninterrupted
   - Not everything gets bet — unselected pitches go back to the pile
3. **Building** (6-week cycle):
   - Small team (1 designer + 1–2 devs) gets the shaped pitch
   - Team has full autonomy on how to implement — no daily standups, no detailed tickets
   - Use hill charts to track progress (climbing = figuring it out, descending = executing)
4. **Cooldown** (2 weeks between cycles): Fix bugs, do maintenance, explore ideas

## Template
**Pitch**:
| Element | Content |
|---------|---------|
| Problem | |
| Appetite | 2 weeks / 6 weeks |
| Solution (sketched) | |
| Rabbit Holes | |
| No-gos | |

**Betting Table**: Cycle #___ — Bets: ___

## Example
**Pitch**: "Notification overload"
- **Problem**: Users get 50+ notifications/day, ignore most, and miss important ones
- **Appetite**: 6 weeks
- **Solution sketch**: Notification digest (batch low-priority), priority channels (high-priority always push), mute controls
- **Rabbit holes**: Don't build a full notification preference center (too complex). Don't touch email notifications (separate project)
- **No-gos**: No ML-based smart prioritization (too risky for 6 weeks)
- **Bet**: Accepted for Cycle 7

## Key Pitfalls
- Shaping too abstractly (team doesn't know where to start) or too concretely (no room for creativity)
- Not honoring the circuit breaker — if it's not done in 6 weeks, resist extending automatically
- Skipping cooldown — teams need breathing room for quality and morale
- Applying Shape Up to large organizations without adaptation — it was designed for small, autonomous teams

## Related Frameworks
- **Scrum** — sprint-based alternative with more ceremony and shorter cycles
- **Kanban** — flow-based alternative without fixed cycles
- **Dual-Track Agile** — shaping is similar to the discovery track
- **Working Backwards** — Amazon's approach to defining problems before solutions
