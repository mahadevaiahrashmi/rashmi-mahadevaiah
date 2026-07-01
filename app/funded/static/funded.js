"use strict";

// Served under a path prefix (/funded-companies); use it for fetch() calls.
const ROOT = window.APP_ROOT || "";
const BG_KEY = "funded-background";
const $ = (id) => document.getElementById(id);

// Sensible default so the demo works out of the box on the owner's portfolio.
const DEFAULT_BG =
  "AI/ML Engineer, 8+ years. IIT Madras (B.Tech). Built production multi-agent " +
  "LLM systems at KOGO.ai (RAG, OCR, NL2SQL, MCP; processed thousands of sales " +
  "leads). Founded RichFeyn — shipped computer-vision, IoT, and mobile AI products " +
  "0→1. Senior Data Science at Axis Bank (predictive attrition/acquisition models, " +
  "NLP). Algorithm Engineer at KLA (computer vision for semiconductor wafer " +
  "inspection). Strengths: LLMs, RAG, agentic AI, computer vision, Python, taking " +
  "AI products from research to production. Open to AI/ML engineer, founding " +
  "engineer, or applied-AI lead roles.";

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

function setStatus(cls, msg) {
  const s = $("status");
  s.className = "status " + cls;
  s.textContent = msg;
  s.classList.toggle("hidden", !msg);
}

function safeUrl(u) {
  try {
    const url = new URL(u);
    if (url.protocol === "http:" || url.protocol === "https:") return url.href;
  } catch (_) { /* not a URL */ }
  return null;
}

function card(o) {
  const investors = Array.isArray(o.investors) ? o.investors.join(", ") : (o.investors || "");
  const steps = Array.isArray(o.steps) ? o.steps : (o.steps ? [o.steps] : []);
  const url = safeUrl(o.source);
  const fund = [o.round, o.amount, o.date].filter(Boolean).map(esc).join(" · ");
  return `
    <article class="card">
      <div class="head">
        <h3 class="company">${esc(o.company)}</h3>
        ${fund ? `<span class="round">${fund}</span>` : ""}
      </div>
      ${o.what ? `<p class="desc">${esc(o.what)}</p>` : ""}
      ${investors ? `<div class="row"><span class="k">Investors</span><span class="v">${esc(investors)}</span></div>` : ""}
      ${o.role ? `<div class="role-badge">🎯 Target role: ${esc(o.role)}</div>` : ""}
      ${o.why_fit ? `<div class="row"><span class="k">Why you fit</span><span class="v">${esc(o.why_fit)}</span></div>` : ""}
      ${o.who ? `<div class="row"><span class="k">Who to reach</span><span class="v">${esc(o.who)}</span></div>` : ""}
      ${o.pitch ? `<div class="pitch"><span class="k">Your pitch</span>${esc(o.pitch)}</div>` : ""}
      ${steps.length ? `<div class="steps"><span class="k">Application path</span><ol>${steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol></div>` : ""}
      ${url ? `<a class="src" href="${esc(url)}" target="_blank" rel="noopener noreferrer">Funding source ↗</a>` : ""}
    </article>`;
}

async function run() {
  const background = $("background").value.trim();
  const btn = $("scan-btn");
  $("results").innerHTML = "";
  $("sourced-note").classList.add("hidden");
  btn.disabled = true;
  setStatus("working", "Scanning the web for this week's funded startups and mapping your way in…");

  try {
    const data = new FormData();
    data.set("background", background);
    data.set("prefs", $("prefs").value.trim());
    const res = await fetch(ROOT + "/scan", { method: "POST", body: data });
    const payload = await res.json();
    if (!payload.ok) {
      setStatus("error", payload.error || "Something went wrong.");
      return;
    }
    setStatus("", "");
    const note = $("sourced-note");
    if (payload.sourced) {
      note.className = "sourced-note live";
      note.textContent = "✓ Grounded in live web search of recent funding news.";
    } else {
      note.className = "sourced-note notlive";
      note.textContent = "⚠ Live web search was unavailable — these come from the model's training data and may be outdated. Verify carefully.";
    }
    note.classList.remove("hidden");
    $("results").innerHTML = payload.openings.map(card).join("");
    if (!payload.openings.length) setStatus("", "No strong matches this week — try broadening your preferences.");
  } catch (err) {
    setStatus("error", "Network error — try again.");
  } finally {
    btn.disabled = false;
  }
}

function saveBg() {
  const v = $("background").value.trim();
  if (v) localStorage.setItem(BG_KEY, v);
}

document.addEventListener("DOMContentLoaded", () => {
  $("background").value = localStorage.getItem(BG_KEY) || DEFAULT_BG;
  $("background").addEventListener("blur", saveBg);
  $("scan-btn").addEventListener("click", run);
});
