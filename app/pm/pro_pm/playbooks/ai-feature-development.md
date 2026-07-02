# AI Feature Development

## Overview
Specialized playbook for developing AI/ML-powered features, covering the unique requirements of data assessment, model selection, evaluation design, and iterative improvement. Use whenever building features that rely on machine learning, LLMs, or intelligent automation.

## Prerequisites
- Product opportunity identified where AI adds meaningful user value
- Data science/ML engineering capacity available
- Data infrastructure for training, evaluation, and serving in place (or planned)
- Understanding of responsible AI principles and company AI policy

## Phases

### Phase 1: Opportunity Assessment
**Objective:** Validate that AI is the right approach and define the user value
**Skills/Agents Used:** `strategy-advisor`, `research-analyst`
**Activities:**
- Articulate the user problem and why AI is better than a deterministic approach
- Identify the value proposition: automation, personalization, prediction, generation, or insight
- Research existing solutions (APIs, open-source models, vendor offerings)
- Evaluate build vs. buy vs. fine-tune decision
- Assess competitive landscape for AI features in this space
- Define success from the user perspective (not model accuracy alone)
- Identify ethical considerations, bias risks, and responsible AI requirements
- Assess data availability and quality for the use case
**Human Checkpoint:** Leadership approves AI feature investment
**Output:** AI opportunity brief with approach recommendation and ethical assessment
**Duration:** 1–2 weeks

### Phase 2: Data Assessment
**Objective:** Ensure the data foundation supports the AI feature
**Skills/Agents Used:** `codebase-navigator`, `data-storyteller`
**Activities:**
- Inventory available data: type, volume, quality, freshness, and access
- Identify data gaps and collection strategies
- Assess data bias: representativeness, label quality, demographic coverage
- Define data pipeline requirements: ingestion, transformation, and storage
- Establish data governance: privacy, consent, retention, and compliance
- Create data quality metrics and monitoring
- Plan annotation or labeling if supervised learning is needed
- Estimate data costs (storage, labeling, third-party data)
**Human Checkpoint:** Data readiness review with ML engineering
**Output:** Data assessment document with readiness plan and governance framework
**Duration:** 1–2 weeks

### Phase 3: Specification & Design
**Objective:** Define the AI feature behavior, UX, and technical architecture
**Skills/Agents Used:** `spec-writer`, `codebase-navigator`
**Activities:**
- Write AI-specific PRD: define expected behavior, edge cases, and failure modes
- Design the UX: how AI output is presented, user controls, and feedback mechanisms
- Specify confidence thresholds and fallback behavior
- Design human-in-the-loop patterns where appropriate
- Define model requirements: latency, throughput, accuracy targets
- Architect the serving infrastructure
- Plan for A/B testing and gradual rollout
- Address transparency: explain AI decisions to users where possible
**Human Checkpoint:** PRD and design review with engineering, design, and ML
**Output:** AI feature PRD with UX design, technical architecture, and evaluation plan
**Duration:** 1–2 weeks

### Phase 4: Build & Train
**Objective:** Implement the AI feature with appropriate model development
**Skills/Agents Used:** `quarterly-planner`, `codebase-navigator`
**Activities:**
- Set up ML development environment and experiment tracking
- Implement data pipelines and feature engineering
- Train, fine-tune, or integrate models (depending on build/buy/fine-tune decision)
- Build serving infrastructure with monitoring
- Implement the product UX layer
- Add user feedback collection mechanisms
- Build fallback paths for model failures or low-confidence results
- Implement safety guardrails: content filtering, output validation, rate limiting
**Human Checkpoint:** Model performance review against accuracy/latency targets
**Output:** AI feature implemented with model serving and safety guardrails
**Duration:** 4–12 weeks

### Phase 5: Evaluate
**Objective:** Rigorously test the AI feature before broad release
**Skills/Agents Used:** `data-storyteller`, `research-analyst`
**Activities:**
- Run offline evaluation: accuracy, precision, recall, F1, or task-specific metrics
- Conduct bias and fairness testing across demographic segments
- Run red-team testing: adversarial inputs, edge cases, misuse scenarios
- Perform user acceptance testing with diverse user panel
- Run A/B test with small user cohort
- Measure latency, reliability, and cost in production conditions
- Test fallback behavior when model confidence is low
- Review with responsible AI or ethics team
**Human Checkpoint:** Evaluation results review—go/no-go for broader rollout
**Output:** Evaluation report with performance data, bias assessment, and rollout recommendation
**Duration:** 2–4 weeks

### Phase 6: Iterate & Scale
**Objective:** Improve the AI feature based on real-world usage and scale confidently
**Skills/Agents Used:** `data-storyteller`, `research-analyst`
**Activities:**
- Expand rollout gradually: 10% → 25% → 50% → 100%
- Monitor real-world performance metrics continuously
- Collect and analyze user feedback (explicit ratings and implicit behavior)
- Identify failure modes and edge cases from production usage
- Iterate on model (retrain, fine-tune, or adjust prompts)
- Optimize for cost and latency at scale
- Build data flywheel: use production data to improve the model
- Plan feature expansion based on usage patterns
**Human Checkpoint:** Full rollout approval; ongoing quarterly AI feature review
**Output:** AI feature at full scale with continuous improvement pipeline
**Duration:** 2–6 months

## Success Criteria
- AI feature delivers measurable user value (not just model accuracy)
- User satisfaction with AI feature meets or exceeds target NPS/CSAT
- No significant bias or safety incidents
- Cost per inference is within budget at scale
- Continuous improvement pipeline is operational
- User feedback mechanism is active and informing iterations

## Common Pitfalls
- **AI for AI's sake:** The feature should solve a real user problem, not showcase technology
- **Ignoring failure modes:** AI features must degrade gracefully; users need fallbacks
- **Launching without evaluation:** AI features need more testing than deterministic features
- **No feedback loop:** Without user feedback, the model can't improve
- **Bias blind spots:** Test across demographics and use cases, not just the happy path
- **Cost surprises:** Model serving costs can scale nonlinearly; monitor and optimize early

## Adaptation Guide
- **LLM-based features:** Focus on prompt engineering, guardrails, and output validation
- **Prediction/recommendation:** Focus on offline evaluation and A/B testing rigor
- **Computer vision:** Add image quality requirements and edge case handling
- **Regulated industry:** Add explainability requirements and audit trail for AI decisions
