"use strict";

// Served under a path prefix (/funded-companies); use it for fetch() calls.
const ROOT = window.APP_ROOT || "";
const $ = (id) => document.getElementById(id);

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

function card(p) {
  const investors = Array.isArray(p.investors) ? p.investors.join(", ") : (p.investors || "");
  const url = safeUrl(p.source);
  return `
    <article class="card">
      <div class="head">
        <h3 class="company">${esc(p.company)}</h3>
        <span class="round">${esc(p.round || "")}${p.amount ? " · " + esc(p.amount) : ""}${p.date ? " · " + esc(p.date) : ""}</span>
      </div>
      ${p.description ? `<p class="desc">${esc(p.description)}</p>` : ""}
      ${investors ? `<div class="row"><span class="k">Investors</span><span class="v">${esc(investors)}</span></div>` : ""}
      ${p.fit ? `<div class="row"><span class="k">Why a fit</span><span class="v">${esc(p.fit)}</span></div>` : ""}
      ${p.angle ? `<div class="angle"><span class="k">Outreach angle</span>${esc(p.angle)}</div>` : ""}
      ${url ? `<a class="src" href="${esc(url)}" target="_blank" rel="noopener noreferrer">Source ↗</a>` : ""}
    </article>`;
}

async function run() {
  const profile = $("profile").value.trim();
  const btn = $("find-btn");
  $("results").innerHTML = "";
  $("sourced-note").classList.add("hidden");
  btn.disabled = true;
  setStatus("working", "Searching the web for recently funded companies…");

  try {
    const data = new FormData();
    data.set("profile", profile);
    const res = await fetch(ROOT + "/find", { method: "POST", body: data });
    const payload = await res.json();
    if (!payload.ok) {
      setStatus("error", payload.error || "Something went wrong.");
      return;
    }
    setStatus("", "");
    const note = $("sourced-note");
    if (payload.sourced) {
      note.className = "sourced-note live";
      note.textContent = "✓ Grounded in live web search results.";
    } else {
      note.className = "sourced-note notlive";
      note.textContent = "⚠ Live web search was unavailable — these come from the model's training data and may be outdated. Verify carefully.";
    }
    note.classList.remove("hidden");
    $("results").innerHTML = payload.prospects.map(card).join("");
    if (!payload.prospects.length) setStatus("", "No strong matches found — try broadening your criteria.");
  } catch (err) {
    setStatus("error", "Network error — try again.");
  } finally {
    btn.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  $("find-btn").addEventListener("click", run);
  document.querySelectorAll(".chip").forEach((c) =>
    c.addEventListener("click", () => { $("profile").value = c.textContent.trim(); })
  );
});
