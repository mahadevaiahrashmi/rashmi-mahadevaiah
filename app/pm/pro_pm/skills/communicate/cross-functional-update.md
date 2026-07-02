# Cross-Functional Update

## Purpose
Generate the same core update tailored per function — engineering, design, sales, customer success, and executive versions. Each version leads with what that audience cares about, uses their vocabulary, and frames impact through their lens. Same information, different packaging.

## Auto-Trigger Patterns
- "Write a cross-functional update" / "update for each team"
- "How should I communicate this to eng vs sales?"
- "Tailor this update for different audiences"
- "Send updates to all stakeholder groups"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Core update content (what happened, what changed, what's coming), affected teams
- **Optional:** Team-specific context, prior cross-functional updates, sensitive angles to navigate
- **Reference:** `context/people/` for team lead personas, `context/initiatives/` for initiative context

## Process
1. **Extract the core facts** — Strip the update to its essential elements: what, why, impact, timeline, action needed.
2. **Map per-function priorities:**
   - **Engineering:** Technical implications, architecture impact, timeline/sprint effects, dependencies
   - **Design:** User experience impact, research implications, design system changes, user journey effects
   - **Sales:** Deal impact, competitive positioning, talk track changes, customer objection handling
   - **Customer Success:** Customer impact, support volume prediction, migration needs, communication timing
   - **Executive:** Strategic significance, metrics impact, resource implications, risk/opportunity
3. **Adapt vocabulary** — Use each team's language. Don't make engineers read sales-speak or sales read technical jargon.
4. **Lead with their concern** — Each version opens with why this matters *to them specifically*.
5. **Tailor the ask** — What do you need from each team? Be specific per function.
6. **Calibrate detail level** — Eng wants specifics. Execs want the headline. Sales wants the talk track. CS wants the customer impact.

## Output Format
```
## Cross-Functional Update: [Topic]
**Date:** [Date] | **Core Change:** [One-sentence summary]

---

### 🔧 Engineering Version
**Lead:** [Why this matters to eng]
**Details:** [Technical specifics, architecture impact, dependencies]
**Ask:** [What you need from eng, with timeline]

### 🎨 Design Version
**Lead:** [Why this matters to design]
**Details:** [UX impact, user journey changes, research implications]
**Ask:** [What you need from design, with timeline]

### 💰 Sales Version
**Lead:** [Why this matters to sales — deal/revenue impact]
**Details:** [Talk track changes, competitive angle, objection handling]
**Ask:** [What you need from sales, with timeline]

### 🎧 Customer Success Version
**Lead:** [Why this matters to CS — customer impact]
**Details:** [Support implications, migration needs, customer communication]
**Ask:** [What you need from CS, with timeline]

### 📊 Executive Version
**Lead:** [Why this matters strategically]
**Details:** [Metrics impact, resource implications, risk/opportunity]
**Ask:** [Decisions or support needed from leadership]
```

## Quality Standards
- Each version could stand alone — no version requires reading another version for context.
- Lead sentences are genuinely different, not just reworded. Each reflects that team's actual concern.
- Vocabulary matches the audience — technical terms for eng, business terms for sales, user terms for design.
- Asks are specific per team — not a generic "please review."
- **Anti-patterns:** Sending the same email to everyone, leading with your perspective instead of theirs, using PM jargon with non-PM audiences, forgetting the ask, information asymmetry that creates distrust.

## Framework References
- Audience-first communication — adapt message to receiver's mental model
- BLUF per audience — each version has its own bottom line

## Formatting Guidelines
- Clear section headers with emoji for quick identification.
- Each version is 3-6 bullets — concise and scannable.
- Bold the lead sentence and the ask in each version.
- Use horizontal rules to separate versions.

## Example
> **Core Change:** We're deprecating the legacy webhook API on August 1.
>
> **Eng Version Lead:** "The legacy webhook infrastructure is our #1 reliability risk — 3 of last 5 incidents traced to it. New event system is 4x more reliable and already handles 60% of traffic."
>
> **Sales Version Lead:** "Starting August 1, new customers get our modern event system — faster, more reliable, and it unlocks real-time integrations that competitors can't match. Updated talk track attached."
>
> **CS Version Lead:** "~340 customers still use legacy webhooks. We need to migrate them by August 1. Here's the tiered migration plan and draft customer communication."
