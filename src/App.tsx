/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  MapPin,
  BookOpen,
  Cpu,
  Heart,
  Instagram,
  Twitter,
  FileText,
  Brain,
  Rocket,
  Target
} from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import ThemeToggle from "./components/ThemeToggle";

// Apps embedded in this same site (Vercel Python functions). Cards open these.
const RESUME_TAILOR_URL = "/resume-tailor";
const DISCOVERY_GUIDE_URL = "/product-discovery";
const VOICE_SKILL_URL = "/personal-voice";
const FUNDED_AGENT_URL = "/funded-companies";
const LEARN_AI_URL = "/learn-ai";
const GTM_URL = "/gtm-videos";
const PM_AGENT_URL = "/pm-agent";
const OPENCLAW_FORK_URL = "https://github.com/mahadevaiahrashmi/openclaw";
const EXPLAINER_URL = "/explainer-bot";
const EXPLAINER_BOT_URL = "https://github.com/mahadevaiahrashmi/explainer-bot";
const GLASSCHAT_URL = "/glass-chat";
const TIME_TRACKER_URL = "/time-tracker";

// The projects. `live` = a clickable card that opens the running app in a new
// tab; `repo` links to source on GitHub; a card with neither renders "Coming soon".
const projects = [
  {
    title: "Product Discovery Interactive Guide",
    description:
      "An interactive, step-by-step guide that teaches product discovery — framing problems, learning from real user behavior, testing your riskiest assumption, and deciding on evidence. Includes an AI coach that gives feedback on your practice answers.",
    tags: ["Product", "LLMs", "Interactive"],
    live: DISCOVERY_GUIDE_URL,
  },
  {
    title: "Personal Voice Skill",
    description:
      "Paste a few things you've written and it learns your voice, then drafts replies, posts, and messages that actually sound like you — with one-tap tweaks (shorter, warmer, more formal) — not like a generic model.",
    tags: ["LLMs", "Personalization", "Agents"],
    live: VOICE_SKILL_URL,
  },
  {
    title: "JD-to-Resume Customizer",
    description:
      "Paste a job description and your resume, pick an AI engine, and get a tailored one-page resume and matching cover letter as Word and PDF. Re-emphasises real experience — never invents it.",
    tags: ["Python", "FastAPI", "LLMs"],
    live: RESUME_TAILOR_URL,
  },
  {
    title: "Funded Companies Agent",
    description:
      "A weekly agent that scrapes the web for startups that raised funding this week — the moment they're hiring — and proposes your way in: for each, a target role, why you fit, who to contact, a tailored pitch, and an application path, mapped to your background.",
    tags: ["Agentic AI", "RAG", "Web Search"],
    live: FUNDED_AGENT_URL,
  },
  {
    title: "Duolingo-Style AI Learning App",
    description:
      "Learn AI concepts the Duolingo way — a gamified lesson path with XP, hearts, streaks, and instant feedback across 8 bite-sized lessons (tokens, embeddings, RAG, agents, and more). Product usage is tracked with PostHog analytics.",
    tags: ["EdTech", "Gamification", "PostHog"],
    live: LEARN_AI_URL,
  },
  {
    title: "GTM with AI-Generated Videos",
    description:
      "Turn what you're launching into a full go-to-market plan built on short-form AI video — 3–5 concepts with paste-ready Higgsfield / Google Veo prompts, scripts, captions, a 2-week posting schedule, and an Instagram-or-LinkedIn playbook to land your first 10 users.",
    tags: ["Generative AI", "GTM", "Video"],
    live: GTM_URL,
  },
  {
    title: "Your Own PM AI Agent",
    description:
      "A conversational Product Manager co-pilot — chat to draft PRDs, break features into user stories, prioritize a backlog with RICE, sketch a roadmap, and pressure-test ideas. Shipped two ways: a live web agent, and a Product-Manager skill in a fork of OpenClaw (the open-source personal AI assistant).",
    tags: ["Agentic AI", "Product", "OpenClaw"],
    live: PM_AGENT_URL,
    repo: OPENCLAW_FORK_URL,
    repoLabel: "OpenClaw fork",
  },
  {
    title: "Narrated Explainer Video Bot",
    description:
      "Turn rough bullet points into a 3Blue1Brown-style explainer video. The studio picks an aesthetic, writes and critiques a script broken into slide segments, and designs a self-contained HTML slide for each — previewed live, ready to download. You then record the narration in your own voice and stitch the final MP4 locally (see the repo).",
    tags: ["Python", "Generative AI", "Video"],
    live: EXPLAINER_URL,
    repo: EXPLAINER_BOT_URL,
    repoLabel: "GitHub repo",
  },
  {
    title: "GlassChat — See How an LLM Works",
    description:
      "A see-through LLM chat built for learning. Toggle memory on/off and watch the context grow or shrink; click the 👁 on any reply to see exactly what was sent, the real token counts, and the tentative cost. Compare up to 4 models side by side — one prompt, four windows — to feel how price and quality differ. Password-gated for cost control.",
    tags: ["LLMs", "Tokens & Cost", "Interactive"],
    live: GLASSCHAT_URL,
  },
  {
    title: "Modern Time Tracker",
    description:
      "A clean, fast time tracker: one-tap start/stop with a live ticking clock, color-coded projects, and manual entries. See today's and this week's totals at a glance, plus a per-project breakdown. Everything is saved locally in your browser — no account, no server, instant.",
    tags: ["Productivity", "Vanilla JS", "localStorage"],
    live: TIME_TRACKER_URL,
  },
];

const experience = [
  {
    title: "Product Owner / AI-ML Engineer",
    company: "KOGO.ai",
    period: "Jan 2025 – Jul 2025",
    description: [
      "Owned an agentic AI product (LLM, OCR, RAG, MCP) that automated CRM lead processing and company-hierarchy mapping, which cut lead turnaround from ~2 days to minutes and turned more follow-ups into deals.",
      "Drove product definition for Asimov, a multi-agent NL2SQL analytics platform with pluggable LLM/data-source integrations, which 6 teams adopted to turn ~2-day data questions into self-serve answers in seconds.",
      "Shipped an LLM solution mining call-center logs to surface top recurring issues and auto-recommend a curated knowledge base, which cut handling time 30% and repeat calls 40%.",
    ],
  },
  {
    title: "Co-Founder",
    company: "RichFeyn.com",
    period: "Aug 2021 – Jul 2024",
    description: [
      "Owned strategy, roadmap, and go-to-market for an AI imaging product (transformers) that turns phone photos into catalogue images, which cut production cost ~90% vs. a studio shoot for 5 early SME customers.",
      "Defined and validated an IoT auto-reorder concept (hardware + LLM prompt-to-cart): ran discovery with ~20 shop owners, secured 4 B2B pre-orders, and prioritized the roadmap across engineering and supply partners before scaling.",
      "Owned iOS and Android companion apps for quantity tracking and automated ordering, which 4 retailers adopted for real-time inventory visibility and on-time delivery.",
    ],
  },
  {
    title: "Senior Manager, Data Science (Wholesale Banking)",
    company: "Axis Bank",
    period: "Apr 2017 – Dec 2020",
    description: [
      "Drove sector-wise campaigns via web-scraping and N-gram NLP, lifting new-customer acquisition 25%.",
      "Built an NLP attrition model on transaction and interaction logs, lifting retention 18% and balances 10%.",
      "Converted competitor-bank customers via NER on supply-chain position (+17% balances) and raised products-per-customer from 2.3 to 3.1, leading cross-functional delivery for senior stakeholders.",
    ],
  },
  {
    title: "Senior Business Analyst",
    company: "Tata Consultancy Services",
    period: "Jul 2015 – Mar 2017",
    description: [
      "Built a web-crawler + data-science product for lead and market intelligence by geography and client that cut lead-activation time 50% (POS tagging, topic mining).",
      "Delivered predictive solutions for industrial clients: plant-safety near-miss detection for a specialty-chemicals firm and a battery-degradation model that cut warranty cost 40% for a Japanese EV manufacturer.",
    ],
  },
  {
    title: "Associate, Fashion Business Analytics",
    company: "Snapdeal",
    period: "Oct 2014 – Feb 2015",
    description: [
      "Built the promo-code and cashback rule engine for Fashion, taking 50% of categories to $6M/month.",
    ],
  },
  {
    title: "Algorithm Engineer, Semiconductor Wafer Inspection",
    company: "KLA Corporation",
    period: "Mar 2011 – Mar 2013",
    description: [
      "Built image-processing and computer-vision products that raised rare-defect capture rate from 80% to 90% and eliminated manual inspection across semiconductor fabs in Korea, Taiwan, and the USA.",
    ],
  },
];

const skillGroups = [
  {
    label: "Product",
    items: "Product vision & roadmapping · Discovery, user research & feedback · Prioritization & backlog management · MVP & demand validation · A/B testing & experimentation · Go-to-market · Agile/Scrum · KPI/metrics definition · Requirements & stakeholder management",
  },
  {
    label: "AI/ML",
    items: "LLMs · Agents & agentic workflows · RAG · MCP · NL2SQL · OCR/document extraction · Recommendation & multi-objective optimization · Predictive modeling",
  },
  {
    label: "NLP & Vision",
    items: "NER · Topic modeling (LDA) · Sentiment analysis · Text mining · Image processing · Captioning · Transformers · Automated inspection",
  },
  {
    label: "Tools & Data",
    items: "Jira/Linear · Figma · Amplitude/Mixpanel · Python · SQL · Data visualization · Web scraping · CRM integration · iOS/Android · IoT",
  },
  {
    label: "Leadership",
    items: "Cross-functional teams (DS, engineering, design, IT) · Senior-stakeholder & offshore management · SQDC outcome ownership",
  },
];

const certifications = [
  "How Diffusion Models Work",
  "Getting Started with Mistral",
  "Understanding and Applying Text Embeddings",
  "Attention in Transformers (PyTorch)",
  "Building Generative AI Applications with Gradio",
  "Building Live Voice Agents with Google’s ADK",
  "Event-Driven Agentic Document Workflows",
  "Building AI Voice Agents for Production",
  "Build AI Apps with MCP Server (Box Files)",
  "MCP: Build Rich-Context AI Apps with Anthropic",
];

const ExperienceItem = ({ title, company, companyUrl, period, impact, description, links }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border-l border-anthropic-text/10 pl-8 pb-12 relative last:pb-0"
  >
    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-anthropic-text/20" />
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
      <h3 className="text-2xl font-serif font-medium">{title}</h3>
      <span className="text-sm font-sans uppercase tracking-widest opacity-60">{period}</span>
    </div>
    <div className="text-lg font-serif italic mb-4 opacity-80">
      {companyUrl ? (
        <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-anthropic-accent transition-colors">{company}</a>
      ) : company}
    </div>
    {impact && (
      <div className="mb-4 text-anthropic-accent font-sans text-sm uppercase tracking-widest">
        {impact}
      </div>
    )}
    <div className="space-y-3">
      {description.map((item: string, idx: number) => (
        <p key={idx} className="text-lg leading-relaxed opacity-90">
          {item}
        </p>
      ))}
    </div>
    {links && (
      <div className="mt-4 flex gap-4">
        {links.map((link: any, idx: number) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-sans hover:text-anthropic-accent transition-colors"
          >
            {link.label} <ExternalLink size={14} />
          </a>
        ))}
      </div>
    )}
  </motion.div>
);

function HomePage() {
  return (
    <div className="min-h-screen selection:bg-anthropic-accent/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-anthropic-bg/80 backdrop-blur-sm border-b border-anthropic-text/5 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif text-xl font-medium tracking-tight">Rashmi Mahadevaiah</span>
          <div className="flex items-center gap-4 sm:gap-8 text-[11px] sm:text-sm font-sans uppercase tracking-[0.14em] sm:tracking-widest opacity-60 whitespace-nowrap">
            <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
            <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
            <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start gap-12 md:gap-16"
          >
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src="/photo.jpg"
                alt="Rashmi Mahadevaiah"
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Hero Content */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight mb-4 leading-[1.15]">
                AI/ML Engineer <br />
                <span className="italic">& Product Leader.</span>
              </h1>
              <p className="text-xl font-serif leading-relaxed opacity-60 mb-8 max-w-xl">
                8 years. Production AI systems shipped — from statistical models at KLA to multi-agent orchestration at KOGO.ai.
              </p>

              {/* CTA Hierarchy */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-anthropic-accent text-white rounded-full font-sans text-sm uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm"
                >
                  <FileText size={16} /> View Resume
                </a>
                <a
                  href="mailto:mahadevaiah.rashmi@gmail.com"
                  className="px-6 py-3.5 border border-anthropic-text/20 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-anthropic-text/5 transition-colors flex items-center gap-2"
                >
                  <Mail size={16} /> Get in touch
                </a>
                <a
                  href="https://www.linkedin.com/in/rashmimahadevaiah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-sans opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="about-me" className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-serif italic">About Me</h2>
            <div className="h-[1px] flex-1 bg-anthropic-text/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-6 text-lg font-serif leading-relaxed opacity-80 mb-16"
          >
            <p>
              IIT Madras alumnus with 8+ years in AI/ML. Expertise in building LLMs and multi-agent systems that reason, plan, and act autonomously.
            </p>
            <p>
              Background: computer vision for semiconductor defect detection, statistical modeling at Axis Bank &amp; TCS, founded RichFeyn (shipped CV/IoT/mobile AI products), and led multi-agent orchestration at KOGO.ai processing thousands of sales leads.
            </p>
            <p>
              Proven in delivering scalable production AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-anthropic-text/10 rounded-2xl bg-anthropic-text/5"
            >
              <Brain className="mb-4 text-anthropic-accent" size={28} />
              <h3 className="text-xl font-serif font-medium mb-3">End-to-End ML Delivery</h3>
              <p className="opacity-80 leading-relaxed">
                From research and statistical models to deploying multi-agent LLM systems in production. I build robust architectures that scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border border-anthropic-text/10 rounded-2xl bg-anthropic-text/5"
            >
              <Target className="mb-4 text-anthropic-accent" size={28} />
              <h3 className="text-xl font-serif font-medium mb-3">Product & Business Acumen</h3>
              <p className="opacity-80 leading-relaxed">
                Founded an AI startup with deep empathy for user needs. I bridge the gap between technical metrics and real business impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 border border-anthropic-text/10 rounded-2xl bg-anthropic-text/5"
            >
              <Rocket className="mb-4 text-anthropic-accent" size={28} />
              <h3 className="text-xl font-serif font-medium mb-3">Cross-Domain Adaptability</h3>
              <p className="opacity-80 leading-relaxed">
                Experience spanning computer vision, predictive analytics in banking, and agentic AI in SaaS. I adapt to solve the right problems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-serif italic">Projects</h2>
            <div className="h-[1px] flex-1 bg-anthropic-text/10" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => {
              const cardClass =
                "group flex flex-col h-full border border-anthropic-text/10 rounded-2xl p-8 transition-colors";
              // Cards that carry a `repo` link render explicit anchors instead of
              // one big card-anchor, so the links don't nest illegally.
              const hasRepo = Boolean(project.repo);
              const isAnchorCard = Boolean(project.live) && !hasRepo;
              const repoLink = project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={project.repoLabel || "Source"}
                  className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-anthropic-accent transition-opacity"
                >
                  <Github size={14} /> {project.repoLabel || "Source"}
                </a>
              ) : null;
              const actions = project.live ? (
                hasRepo ? (
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-anthropic-accent opacity-80 hover:opacity-100 transition-opacity"
                    >
                      Launch <ExternalLink size={14} />
                    </a>
                    {repoLink}
                  </div>
                ) : (
                  <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-anthropic-accent opacity-80 group-hover:opacity-100 transition-opacity">
                    Launch <ExternalLink size={14} />
                  </span>
                )
              ) : hasRepo ? (
                <div className="flex-shrink-0 flex items-center gap-4">{repoLink}</div>
              ) : (
                <span className="flex-shrink-0 text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded-full border border-anthropic-text/15 opacity-50">
                  Coming soon
                </span>
              );
              const inner = (
                <>
                  <div className="flex justify-between items-start mb-6 gap-4">
                    <h3 className="text-2xl font-serif font-medium group-hover:text-anthropic-accent transition-colors">
                      {project.title}
                    </h3>
                    {actions}
                  </div>
                  <p className="text-lg leading-relaxed opacity-80 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-anthropic-text/5 rounded-md text-xs font-sans uppercase tracking-wider opacity-70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              );

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 2) * 0.1 }}
                >
                  {isAnchorCard ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardClass} hover:border-anthropic-accent/40 cursor-pointer`}
                      title={`Launch ${project.title}`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      className={`${cardClass} ${project.live || hasRepo ? "hover:border-anthropic-accent/40" : "opacity-70"}`}
                      aria-disabled={project.live || hasRepo ? undefined : "true"}
                    >
                      {inner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-serif italic">Experience</h2>
            <div className="h-[1px] flex-1 bg-anthropic-text/10" />
          </div>
          <div className="space-y-4">
            {experience.map((e, idx) => (
              <ExperienceItem key={idx} {...e} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-serif italic">Skills</h2>
            <div className="h-[1px] flex-1 bg-anthropic-text/10" />
          </div>
          <div className="space-y-6 max-w-4xl">
            {skillGroups.map((g) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-sans uppercase tracking-widest text-anthropic-accent mb-2">{g.label}</h3>
                <p className="text-lg leading-relaxed opacity-85">{g.items}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-serif italic">Certifications</h2>
            <div className="h-[1px] flex-1 bg-anthropic-text/10" />
          </div>
          <p className="text-sm font-sans uppercase tracking-widest opacity-60 mb-5">DeepLearning.AI · 2025–2026</p>
          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span key={c} className="px-4 py-2 bg-anthropic-text/5 border border-anthropic-text/10 rounded-lg text-sm">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-serif italic">Education</h2>
            <div className="h-[1px] flex-1 bg-anthropic-text/10" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 border border-anthropic-text/10 rounded-2xl"
          >
            <div>
              <h3 className="text-2xl font-serif font-medium mb-1">B.Tech, Electrical Engineering</h3>
              <p className="text-lg opacity-80">Indian Institute of Technology Madras</p>
            </div>
            <span className="text-sm font-sans uppercase tracking-widest opacity-60 mt-4 md:mt-0">2011</span>
          </motion.div>
        </section>

        {/* Interests */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-serif italic">Interests</h2>
            <div className="h-[1px] flex-1 bg-anthropic-text/10" />
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <Heart size={18} />, label: "Yoga" },
              { icon: <Cpu size={18} />, label: "Running" },
              { icon: <BookOpen size={18} />, label: "Meditation" },
              { icon: <MapPin size={18} />, label: "Trekking" }
            ].map(interest => (
              <div key={interest.label} className="flex items-center gap-2 opacity-80">
                {interest.icon}
                <span className="font-serif text-lg">{interest.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-anthropic-text/10 text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-12">Let's connect.</h2>
          <div className="flex flex-col items-center gap-6">
            <a 
              href="mailto:mahadevaiah.rashmi@gmail.com" 
              className="text-2xl md:text-4xl font-serif italic hover:text-anthropic-accent transition-colors underline underline-offset-8 decoration-anthropic-text/10"
            >
              mahadevaiah.rashmi@gmail.com
            </a>
            <div className="flex gap-8 mt-8">
              <a href="https://www.linkedin.com/in/rashmimahadevaiah/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/mahadevaiahrashmi" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/rashmi_richfeyn" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com/rashmi_mahadevaiah" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-anthropic-text/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-xs font-sans uppercase tracking-[0.2em]">
        <span>© 2026 Rashmi Mahadevaiah</span>
        <span>Built with precision and care</span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/draft" element={<BlogList mode="draft" />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
