# AI UX Patterns

## Purpose
Design user experiences for AI-powered features using proven UX patterns. Address the unique challenges of AI interfaces: handling uncertainty, building user trust, providing transparency, enabling human control, recovering from errors gracefully, and collecting feedback. Ensure AI features feel helpful rather than unpredictable or opaque.

## Auto-Trigger Patterns
- "How to design UX for AI feature"
- "AI UX patterns"
- "How should AI appear to users"
- "Design AI interaction"
- "AI transparency in UI"
- "User trust for AI feature"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **AI feature description** (required) — what the AI does and how users interact with it
- **AI output type** (required) — text generation, classification, recommendation, prediction, automation
- **Confidence characteristics** (required) — does the model produce confidence scores, how variable is quality
- **User context** (required) — technical sophistication, task criticality, frequency of use
- **Error characteristics** (optional) — how the AI fails, frequency, severity

## Process
1. **Classify the AI interaction model** — is the AI generating, assisting, recommending, automating, or deciding?
2. **Select disclosure pattern** — how to communicate that AI is involved
3. **Design confidence communication** — how to show the user how sure the AI is
4. **Design human-in-the-loop flow** — where and how humans review, override, or approve
5. **Design error recovery** — what happens when AI is wrong, how users correct course
6. **Design progressive disclosure** — reveal AI complexity gradually based on user need
7. **Design feedback collection** — how users signal quality (thumbs, corrections, natural interaction)
8. **Design personalization controls** — how users tune AI behavior to their preferences

## Output Format
```markdown
# AI UX Pattern Guide: [Feature Name]
**AI Output Type**: … | **Criticality**: [Low / Medium / High]

## Interaction Model
**Pattern**: [Generation / Assistance / Recommendation / Automation / Decision Support]
**User mental model**: "[How user thinks about what the AI does]"

## Disclosure & Transparency

### AI Involvement Disclosure
- **Pattern**: [Badge / Label / Explanation / None]
- **Rationale**: …
- **Implementation**: …

### Explainability
- **Pattern**: [Why this result / Contributing factors / Confidence]
- **Detail level**: [Summary / Detailed / On-demand]
- **Implementation**: …

## Confidence Communication
| Confidence Level | Visual Treatment | User Action Expected |
|-----------------|-----------------|---------------------|
| High (>90%) | Default presentation | Use directly |
| Medium (70-90%) | Subtle indicator | Review before using |
| Low (<70%) | Warning + alternatives | Manual fallback |

## Human-in-the-Loop
### Review Points
- When to pause for human review: …
- How to present for review: …
- Approval / rejection flow: …

### Override Mechanism
- **Pattern**: [Edit in place / Replace / Regenerate / Manual mode]
- Always accessible: [Yes — never hide the manual path]

## Error Recovery
| Error Type | User Experience | Recovery Path |
|-----------|----------------|--------------|
| Wrong output | [How user notices] | [Edit / Regenerate / Report] |
| No output | [Loading → timeout → fallback] | [Manual path available] |
| Offensive output | [Filter catches → alternative shown] | [Report mechanism] |

## Feedback Collection
### Implicit Feedback
- [User accepts / modifies / rejects AI output → logged as signal]

### Explicit Feedback
- **Pattern**: [Thumbs up/down / Rating / Correction / Report]
- **Timing**: [After use / Contextual / Periodic]
- **Friction level**: [Minimal — 1 click for basic, expandable for detail]

## Progressive Disclosure
| Level | What User Sees | When |
|-------|---------------|------|
| Default | AI output + basic controls | Always |
| On hover/tap | Confidence + brief explanation | On interaction |
| Expanded | Full reasoning + data sources | On request |

## Personalization Controls
- **AI intensity**: [How much AI involvement user wants]
- **Style preferences**: [Tone, format, detail level]
- **Learning toggle**: [Whether AI learns from this user's behavior]

## Loading & Waiting States
- **Pattern**: [Skeleton / Progress bar / Streaming / Background]
- **Expectation setting**: [Estimated time / "AI is thinking"]

## Design Principles for This Feature
1. [AI suggests, user decides]
2. [Always show the manual path]
3. [Be honest about uncertainty]
4. [Make feedback effortless]
```

## Quality Standards
- Manual fallback path always available — AI never blocks the user
- Confidence communication is calibrated (don't show confidence the model can't deliver)
- Error recovery is designed proactively, not as an afterthought
- Feedback collection is low-friction and feeds into improvement
- **Anti-patterns**: Hiding AI involvement; showing false confidence; no manual override; blocking user on AI failure; over-explaining (trust fatigue); no feedback mechanism

## Framework References
- Google PAIR (People + AI Research) guidelines
- Apple Human Interface Guidelines for ML
- Microsoft HAX Toolkit
- Nielsen Norman Group AI UX research

## Formatting Guidelines
- Pattern name for each design decision
- Confidence table with visual treatment per level
- Error recovery table for comprehensive failure handling
- Progressive disclosure levels for layered transparency

## Example
AI email drafting: "Disclosure: 'AI Draft' badge on generated content. Confidence: no explicit score (generative AI), but offer 3 tone variants. Human control: always show text editor with AI draft pre-filled, user edits freely. Error recovery: 'Regenerate' button + 'Write from scratch' option always visible. Feedback: thumbs up/down after send, plus implicit signal of how much user edited the draft. Progressive disclosure: hover over a sentence to see 'Why this phrasing' with alternative options."
