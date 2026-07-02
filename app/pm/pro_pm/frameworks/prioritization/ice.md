# ICE Scoring

## What It Is
ICE is a lightweight prioritization framework scoring ideas on three dimensions: Impact, Confidence, and Ease. Each factor is rated 1-10, and the score is their product. Popularized by Sean Ellis in the growth hacking community as a fast-cycle scoring method.

## When to Use
- Quick prioritization of growth experiments or a manageable feature list (<30 items)
- When you don't have reliable Reach data (making RICE impractical)
- Sprint-level or weekly experiment prioritization

## When NOT to Use
- Large roadmap prioritization across many teams -- use RICE for more rigor
- When stakeholders demand data-backed justification -- ICE is more subjective
- Strategic decisions where business impact needs decomposition beyond a 1-10 scale

## How to Apply
1. **List** candidates (features, experiments, ideas)
2. **Score Impact** (1-10): How much will this move the target metric if it works?
3. **Score Confidence** (1-10): How confident are you it will work? 10 = strong evidence, 1 = wild guess
4. **Score Ease** (1-10): How easy is it to implement? 10 = trivial, 1 = massive effort
5. **Calculate**: I x C x E
6. **Sort** descending. Pick the top items for the next cycle
7. **Review** scores as a team to calibrate and catch bias

## Template
| Idea | Impact (1-10) | Confidence (1-10) | Ease (1-10) | ICE Score |
|------|--------------|-------------------|-------------|-----------|
|      |              |                   |             |           |

## Example
**Experiment**: Add social proof ("1,200 teams use this") to signup page
- Impact: 7 (could meaningfully lift conversion)
- Confidence: 6 (similar tests worked elsewhere, no internal data)
- Ease: 9 (copy change, one deploy)
- **Score**: 7 x 6 x 9 = **378**

## Key Pitfalls
- Score inflation -- everyone rates their pet idea 8+ on all dimensions. Require brief justifications
- No calibration across scorers -- run a calibration round on 2-3 items before full scoring
- Confusing Ease with "size of team available" instead of actual implementation complexity
- Using ICE for strategic decisions that need deeper analysis

## Related Frameworks
- **RICE** -- more rigorous version with explicit Reach factor
- **Value-Effort Matrix** -- visual 2x2 for stakeholder conversations
- **Stack Ranking** -- when you need a strict ordered list with no ties
