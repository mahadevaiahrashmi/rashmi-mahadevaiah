# Opportunity Scoring

## What It Is
Opportunity Scoring (also called Opportunity Analysis) comes from Tony Ulwick's Outcome-Driven Innovation (ODI). It identifies underserved customer needs by measuring the gap between how important an outcome is and how satisfied customers are with current solutions. The formula: **Opportunity = Importance + max(Importance − Satisfaction, 0)**.

## When to Use
- Identifying which customer needs are underserved and worth investing in
- Validating whether a feature addresses a real gap or an already-satisfied need
- Prioritizing outcomes (not features) in a JTBD framework
- Market analysis to find whitespace opportunities

## When NOT to Use
- Prioritizing a known feature backlog — use RICE or ICE
- When you can't survey customers to get Importance/Satisfaction data
- Internal tooling where "customer satisfaction" isn't the governing metric

## How to Apply
1. **Define desired outcomes** from the customer's perspective (use JTBD framework)
2. **Survey customers**: For each outcome, ask:
   - "How important is this outcome to you?" (1–10)
   - "How satisfied are you with current solutions for this?" (1–10)
3. **Calculate Opportunity Score**: Importance + max(Importance − Satisfaction, 0)
   - Max score = 20 (very important, zero satisfaction)
   - Scores >12 = underserved opportunities
   - Scores <10 = overserved or low-priority
4. **Plot** on Importance vs. Satisfaction chart
5. **Focus** on the upper-left quadrant (high importance, low satisfaction)

## Template
| Desired Outcome | Importance (1–10) | Satisfaction (1–10) | Opportunity Score |
|-----------------|-------------------|--------------------|--------------------|
|                 |                   |                    |                    |

**Threshold**: Scores >12 → pursue. Scores 10–12 → investigate. Scores <10 → deprioritize.

## Example
**Product**: Expense reporting software
| Outcome | Imp. | Sat. | Opp. Score |
|---------|------|------|------------|
| Submit expenses quickly | 9 | 4 | 9 + 5 = **14** ← underserved |
| Track approval status | 7 | 7 | 7 + 0 = **7** ← appropriately served |
| Categorize expenses accurately | 8 | 3 | 8 + 5 = **13** ← underserved |
| Generate tax reports | 5 | 6 | 5 + 0 = **5** ← overserved |

→ Focus on submission speed and categorization accuracy.

## Key Pitfalls
- Surveying too few people — need 50+ per segment for reliable scores
- Confusing features with outcomes — outcomes are what the customer wants to achieve, not your solution
- Ignoring overserved areas — they signal where you can reduce investment
- Not segmenting — different customer segments have different importance/satisfaction profiles

## Related Frameworks
- **Outcome-Driven Innovation** — the parent methodology
- **Jobs to Be Done** — defines the outcomes to score
- **Kano Model** — complementary view on satisfaction drivers
- **Value Proposition Canvas** — maps gains/pains alongside opportunities
