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
const EXPLAINER_URL = "/explainer-bot";
const GLASSCHAT_URL = "/glass-chat";
const TIME_TRACKER_URL = "/time-tracker";
const PROCTORED_URL = "/proctored-ai";
const INTERVIEW_URL = "/interview-prep";

// The projects. `live` = a clickable card that opens the running app in a new
// tab; `repo` links to source on GitHub; a card with neither renders "Coming soon".
// Ordered most-complex first (moving parts + AI sophistication).
const projects = [
  {
    title: "AI Exam Proctor",
    description:
      "AI-generated, AI-graded exams with opt-in webcam proctoring (vision-model checks + integrity signals), an explicit consent flow, and a post-exam voice tutor. FastAPI + OpenRouter.",
    tags: ["LLM", "Computer Vision", "Proctoring"],
    live: PROCTORED_URL,
  },
  {
    title: "AI Product Manager",
    description:
      "Conversational PM co-pilot for PRDs, user stories, RICE prioritization, and roadmaps — grounded in a 500+ skill library via retrieval. Also shipped as an OpenClaw skill.",
    tags: ["Agentic AI", "RAG", "Product"],
    live: PM_AGENT_URL,
  },
  {
    title: "Make Explainer Videos",
    description:
      "Turns rough notes into a 3Blue1Brown-style explainer: AI writes and critiques the script and designs self-contained HTML slides to narrate. Python + multi-provider generative AI.",
    tags: ["Python", "Generative AI", "Video"],
    live: EXPLAINER_URL,
  },
  {
    title: "AI Video Marketing",
    description:
      "Turns a launch into a short-form-video go-to-market plan — concepts, paste-ready Veo/Higgsfield prompts, scripts, and a 2-week posting schedule. Generative-AI GTM tooling.",
    tags: ["Generative AI", "GTM", "Video"],
    live: GTM_URL,
  },
  {
    title: "Find Job Leads",
    description:
      "Weekly agent that finds newly-funded startups and drafts a tailored way in — target role, why you fit, who to contact, and a pitch. Agentic AI with live web search.",
    tags: ["Agentic AI", "RAG", "Web Search"],
    live: FUNDED_AGENT_URL,
  },
  {
    title: "How AI Works",
    description:
      "A teaching tool that exposes how LLMs work — a per-message token/cost inspector, memory on/off toggle, and 4-model side-by-side comparison on real OpenRouter usage.",
    tags: ["LLM", "OpenRouter", "Tokens & Cost"],
    live: GLASSCHAT_URL,
  },
  {
    title: "Interview Study Plan",
    description:
      "Maps every requirement in a job description to free courses to study for the interview, with an optional day-by-day prep schedule. Drops degree/experience requirements; exports Markdown/CSV/HTML. FastAPI + OpenRouter.",
    tags: ["Python", "FastAPI", "LLM"],
    live: INTERVIEW_URL,
  },
  {
    title: "Resume Tailor",
    description:
      "Tailors a resume + cover letter to any job description and exports Word/PDF. Python/FastAPI with a multi-provider LLM — re-emphasizes real experience, never fabricates it.",
    tags: ["Python", "FastAPI", "LLM"],
    live: RESUME_TAILOR_URL,
  },
  {
    title: "Learn Product Discovery",
    description:
      "Interactive product-discovery course with an LLM coach that critiques your practice answers — problem framing, user research, riskiest-assumption tests, and evidence-based decisions.",
    tags: ["LLM", "FastAPI", "Product"],
    live: DISCOVERY_GUIDE_URL,
  },
  {
    title: "AI Learning Game",
    description:
      "Gamified course teaching core AI concepts (tokens, embeddings, RAG, agents) with XP, streaks, and instant feedback — instrumented with PostHog product analytics.",
    tags: ["EdTech", "Gamification", "PostHog"],
    live: LEARN_AI_URL,
  },
  {
    title: "Write Like You",
    description:
      "Learns your writing voice from a few samples, then drafts messages that sound like you — with one-tap tone controls. An LLM personalization skill (prompting + voice profile).",
    tags: ["LLM", "Prompt Engineering", "Personalization"],
    live: VOICE_SKILL_URL,
  },
  {
    title: "Time Tracker",
    description:
      "Fast, client-side time tracker with live start/stop timers, color-coded projects, and daily/weekly summaries. Vanilla JS + localStorage — no backend, no account.",
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
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
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

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
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
              // The whole card is a launch anchor; "Coming soon" if there's no live URL.
              const isAnchorCard = Boolean(project.live);
              const actions = project.live ? (
                <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-anthropic-accent opacity-80 group-hover:opacity-100 transition-opacity">
                  Launch <ExternalLink size={14} />
                </span>
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
                      className={`${cardClass} ${project.live ? "hover:border-anthropic-accent/40" : "opacity-70"}`}
                      aria-disabled={project.live ? undefined : "true"}
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

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-anthropic-text/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-xs font-sans uppercase tracking-[0.2em]">
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
