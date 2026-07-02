# Outcome-Driven Innovation (ODI)

## What It Is
Outcome-Driven Innovation, developed by Tony Ulwick at Strategyn, is a systematic innovation process built on Jobs to Be Done theory. It uses quantitative research to identify underserved customer outcomes and directs innovation toward the biggest opportunities. ODI defines innovation as helping customers get a job done better and/or more cheaply.

## When to Use
- When you want a data-driven approach to finding innovation opportunities
- Identifying which customer outcomes are underserved (high importance, low satisfaction)
- Deciding between sustaining innovation (better) and disruptive innovation (cheaper)
- When qualitative discovery needs quantitative validation at scale

## When NOT to Use
- Quick feature prioritization — ODI is a deep research methodology
- When you can't invest in quantitative customer surveys (50+ respondents per segment)
- Purely technical innovations where customer outcomes aren't the primary driver

## How to Apply
1. **Define the job**: State the core functional job the customer is trying to get done
2. **Map the job**: Break the job into its process steps using the Universal Job Map (Define → Locate → Prepare → Confirm → Execute → Monitor → Modify → Conclude)
3. **Identify desired outcomes**: At each step, define outcomes using the format: "[Direction of improvement] + [metric] + [context]" (e.g., "Minimize the time it takes to identify the root cause of a system outage")
4. **Survey customers**: For each outcome, measure Importance (1–10) and Satisfaction (1–10) across a representative sample
5. **Calculate Opportunity Score**: Importance + max(Importance − Satisfaction, 0). Scores >12 = underserved
6. **Segment**: Cluster customers by outcome profiles to find underserved segments
7. **Innovate**: Target underserved outcomes with your solution. Overserved outcomes signal disruptive opportunity (simpler/cheaper)

## Template
**Core Job**: ___

| Job Step | Desired Outcome | Importance | Satisfaction | Opp. Score | Strategy |
|----------|----------------|------------|-------------|------------|----------|
|          |                |            |             |            |          |

**Segments identified**: ___
**Top underserved outcomes**: ___
**Overserved outcomes (disruption opportunity)**: ___

## Example
**Job**: Manage a software deployment to production
| Outcome | Imp. | Sat. | Opp. |
|---------|------|------|------|
| Minimize time to identify which services are affected by a change | 9 | 3 | **15** |
| Minimize likelihood of undetected breaking changes | 10 | 5 | **15** |
| Minimize time to roll back a failed deployment | 8 | 6 | **10** |
| Minimize effort to notify stakeholders of deployment status | 6 | 7 | **5** |

→ Focus: Impact analysis and breaking change detection are highly underserved.

## Key Pitfalls
- Writing outcomes as solutions instead of desired results — "Use an automated tool" is not an outcome
- Small sample sizes — ODI requires statistical significance (100+ per segment ideal)
- Ignoring overserved outcomes — they reveal where disruptive innovation is possible
- Not segmenting — different customer types have different outcome profiles

## Related Frameworks
- **Jobs to Be Done** — the theoretical foundation of ODI
- **Opportunity Scoring** — the simplified calculation ODI uses
- **Kano Model** — complementary satisfaction analysis
- **Blue Ocean Strategy** — overserved outcomes point to blue ocean opportunities
