# Kano Model

## What It Is
The Kano Model, developed by Professor Noriaki Kano in 1984, classifies features by their relationship to customer satisfaction. It reveals that not all features contribute equally — some are expected (Must-haves), some scale linearly with investment (Performance), and some disproportionately delight (Delighters). Two additional categories exist: Indifferent (no impact) and Reverse (actively unwanted).

## When to Use
- Understanding which features drive satisfaction vs. which prevent dissatisfaction
- Making build/cut decisions when resources are limited
- Validating whether a proposed feature is table-stakes or a differentiator
- Customer research to uncover hidden expectations and delight opportunities

## When NOT to Use
- Quick prioritization of a known backlog — use RICE or ICE
- When you can't survey or interview customers (Kano requires primary research)
- Highly technical or internal-facing features where "customer satisfaction" isn't the right lens

## How to Apply
1. **Identify** candidate features to evaluate
2. **Design Kano survey**: For each feature, ask two questions:
   - Functional: "How would you feel if this feature existed?" (Like, Expect, Neutral, Tolerate, Dislike)
   - Dysfunctional: "How would you feel if this feature did NOT exist?" (same scale)
3. **Classify** each response pair using the Kano evaluation table
4. **Aggregate** across respondents — majority classification wins
5. **Plot** features on the Kano diagram (satisfaction vs. implementation)
6. **Prioritize**: Must-haves first → Performance features next → Delighters for differentiation

## Template
| Feature | Functional Response | Dysfunctional Response | Classification |
|---------|-------------------|----------------------|----------------|
|         |                   |                      |                |

**Kano Evaluation Table**:
|                    | Like    | Expect  | Neutral | Tolerate | Dislike |
|--------------------|---------|---------|---------|----------|---------|
| **Like (func.)**   | Quest.  | Delight | Delight | Delight  | Perf.   |
| **Expect**         | Reverse | Indiff. | Indiff. | Indiff.  | Must    |
| **Neutral**        | Reverse | Indiff. | Indiff. | Indiff.  | Must    |
| **Tolerate**       | Reverse | Indiff. | Indiff. | Indiff.  | Must    |
| **Dislike**        | Reverse | Reverse | Reverse | Reverse  | Quest.  |

## Example
**Feature**: Real-time collaboration in a document editor
- Users surveyed: 150
- Functional: 68% "Like it", 20% "Expect it", 12% "Neutral"
- Dysfunctional: 45% "Tolerate", 30% "Neutral", 25% "Dislike"
- **Classification**: Performance feature — satisfaction increases with quality of implementation

## Key Pitfalls
- Categories shift over time — yesterday's Delighter becomes today's Must-have (e.g., mobile support)
- Small sample sizes lead to noisy classification — aim for 50+ respondents per segment
- Ignoring "Reverse" features — building something users actively dislike wastes resources
- Treating Kano as a one-time exercise — reassess annually as market expectations evolve

## Related Frameworks
- **Opportunity Scoring** — quantitative companion for identifying underserved needs
- **MoSCoW** — simpler categorical prioritization for scope negotiation
- **Value Proposition Canvas** — maps customer jobs/pains/gains alongside features
- **RICE** — for scoring features after Kano has classified their type
