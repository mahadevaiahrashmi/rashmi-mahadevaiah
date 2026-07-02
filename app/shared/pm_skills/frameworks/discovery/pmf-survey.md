# PMF Survey (Sean Ellis Test)

## What It Is
The PMF Survey, created by Sean Ellis, is a simple, quantitative method for measuring product-market fit. The core question: "How would you feel if you could no longer use this product?" with options: Very Disappointed, Somewhat Disappointed, Not Disappointed, and N/A. If 40%+ of respondents say "Very Disappointed," you have a strong PMF signal.

## When to Use
- Measuring whether you've achieved product-market fit
- Tracking PMF strength over time as you iterate
- Segmenting users to understand who finds the most value
- Benchmarking before and after major product changes

## When NOT to Use
- Pre-launch products with no active users
- Products with fewer than 30 active users (sample too small)
- As the sole measure of PMF — combine with retention and engagement data
- For feature-level decisions — the survey measures overall product fit

## How to Apply
1. **Target audience**: Survey users who have used the core product at least twice in the last 2 weeks (engaged users, not signups)
2. **Ask the core question**: "How would you feel if you could no longer use [Product]?"
   - Very disappointed
   - Somewhat disappointed
   - Not disappointed
   - N/A (I no longer use it)
3. **Add follow-up questions**:
   - "What type of people do you think would most benefit from [Product]?"
   - "What is the main benefit you receive from [Product]?"
   - "How can we improve [Product] for you?"
4. **Calculate**: % who answered "Very Disappointed"
5. **Interpret**: 40%+ = PMF signal. <40% = keep iterating
6. **Segment**: Analyze the "Very Disappointed" users — who are they? What do they value? Build for them

## Template
| Question | Response Options |
|----------|-----------------|
| How would you feel if you could no longer use [Product]? | Very / Somewhat / Not disappointed / N/A |
| What type of people would benefit most? | [Open text] |
| What is the main benefit you receive? | [Open text] |
| How can we improve? | [Open text] |

**Results**:
| Response | Count | % |
|----------|-------|---|
| Very Disappointed | | |
| Somewhat Disappointed | | |
| Not Disappointed | | |

**PMF Score**: ___% (target: ≥40%)

## Example
**Product**: Team standup tool (surveyed 200 active users)
- Very Disappointed: 72 (36%) — below 40% threshold
- Somewhat Disappointed: 88 (44%)
- Not Disappointed: 40 (20%)
- **PMF Score**: 36% — close but not there yet
- **Segment analysis**: Among engineering teams >10 people, PMF score = 52%. Among small teams (<5), PMF score = 18%
- **Action**: Double down on the engineering teams >10 segment. Understand why small teams are "Not Disappointed"

## Key Pitfalls
- Surveying all signups instead of engaged users — results will be artificially low
- Small sample sizes (<30) — results aren't reliable
- Chasing 40% across all users instead of segmenting to find where PMF exists
- Treating the number as absolute truth — it's a signal, not a certification

## Related Frameworks
- **Superhuman Framework** — Rahul Vohra's expanded approach using this survey as the foundation
- **Sean Ellis Test** — deeper analysis methodology using the survey data
- **Retention Curves** — complementary quantitative PMF measure
- **PMF Pyramid** — Dan Olsen's framework for systematically building toward PMF
