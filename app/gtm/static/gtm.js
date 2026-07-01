"use strict";

// Served under a path prefix (/gtm-videos); use it for fetch() calls.
const ROOT = window.APP_ROOT || "";
const $ = (id) => document.getElementById(id);
let channel = "Instagram";

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function setStatus(cls, msg) {
  const s = $("status");
  s.className = "status " + cls;
  s.textContent = msg;
  s.classList.toggle("hidden", !msg);
}

function videoCard(v, i) {
  const tags = Array.isArray(v.hashtags) ? v.hashtags : [];
  const genBtn = window.VEO_ON
    ? `<button class="btn tiny gen" data-gen="${i}" title="Generate this clip with Google Veo (costs a few $)">🎥 Generate video</button>`
    : `<button class="btn tiny" disabled title="Add a Gemini API key to enable Veo generation">🎥 Generate (needs Veo key)</button>`;
  return `
    <div class="vid">
      <div class="vtitle">🎬 ${esc(v.title || "Video " + (i + 1))}</div>
      <div class="prompt-box">
        <span class="plabel">Higgsfield / Veo prompt</span>
        <button class="btn tiny copy" data-copy="v${i}">Copy</button>
        <div id="v${i}">${esc(v.gen_prompt || "")}</div>
      </div>
      ${v.script ? `<div class="line"><span class="k">Script:</span> ${esc(v.script)}</div>` : ""}
      ${v.caption ? `<div class="line"><span class="k">Caption:</span> ${esc(v.caption)}</div>` : ""}
      ${v.cta ? `<div class="line"><span class="k">CTA:</span> ${esc(v.cta)}</div>` : ""}
      ${tags.length ? `<div class="tags">${tags.map((t) => `<span class="tag">${esc(t.replace(/^#/, "#"))}</span>`).join("")}</div>` : ""}
      <div class="vid-gen">${genBtn}<span class="gen-status" id="gs${i}"></span></div>
      <div class="vid-out" id="vo${i}"></div>
    </div>`;
}

// Kick off Veo generation for concept i, poll, then embed the MP4.
async function generateVideo(i) {
  const promptEl = document.getElementById("v" + i);
  const status = document.getElementById("gs" + i);
  const out = document.getElementById("vo" + i);
  const btn = document.querySelector(`[data-gen="${i}"]`);
  if (!promptEl) return;
  btn.disabled = true;
  out.innerHTML = "";
  status.textContent = "Starting Veo… (a clip takes ~1–3 min)";

  try {
    const fd = new FormData();
    fd.set("prompt", promptEl.innerText);
    fd.set("aspect", "9:16");
    const startRes = await fetch(ROOT + "/video/start", { method: "POST", body: fd });
    const start = await startRes.json();
    if (!start.ok) { status.textContent = "⚠ " + (start.error || "Could not start."); btn.disabled = false; return; }

    const op = start.op;
    const t0 = Date.now();
    // Poll every 8s, up to ~4 minutes.
    for (let n = 0; n < 30; n++) {
      await new Promise((r) => setTimeout(r, 8000));
      const secs = Math.round((Date.now() - t0) / 1000);
      status.textContent = `Generating… ${secs}s elapsed`;
      const st = await (await fetch(`${ROOT}/video/status?op=${encodeURIComponent(op)}`)).json();
      if (st.done && st.ok) {
        status.textContent = "✓ Done — loading video…";
        out.innerHTML = `<video controls playsinline preload="metadata" src="${ROOT}/video/file?op=${encodeURIComponent(op)}"></video>
          <a class="dl" href="${ROOT}/video/file?op=${encodeURIComponent(op)}" download="veo-clip-${i + 1}.mp4">Download MP4</a>`;
        status.textContent = "";
        btn.disabled = false;
        return;
      }
      if (st.done && !st.ok) { status.textContent = "⚠ " + (st.error || "Generation failed."); btn.disabled = false; return; }
    }
    status.textContent = "⚠ Timed out waiting for the video. It may still finish in Google AI Studio.";
    btn.disabled = false;
  } catch (err) {
    status.textContent = "⚠ Network error — try again.";
    btn.disabled = false;
  }
}

function render(plan) {
  const posting = Array.isArray(plan.posting_plan) ? plan.posting_plan : [];
  const tactics = Array.isArray(plan.channel_tactics) ? plan.channel_tactics : [];
  const first10 = Array.isArray(plan.first10) ? plan.first10 : [];
  const videos = Array.isArray(plan.videos) ? plan.videos : [];

  $("result").innerHTML = `
    ${plan.positioning ? `<div class="block"><h2>Positioning</h2><div class="positioning">${esc(plan.positioning)}</div></div>` : ""}
    ${plan.hook ? `<div class="block"><h2>Your hook (${esc(channel)})</h2><div class="hook">${esc(plan.hook)}</div></div>` : ""}
    ${videos.length ? `<div class="block"><h2>AI video concepts</h2>${videos.map(videoCard).join("")}</div>` : ""}
    ${posting.length ? `<div class="block"><h2>2-week posting plan</h2><ul class="timeline">${posting.map((p) => `<li><span class="day">${esc(p.day || "")}</span><span class="act">${esc(p.action || "")}</span></li>`).join("")}</ul></div>` : ""}
    ${tactics.length ? `<div class="block"><h2>${esc(channel)} tactics</h2><ul class="list">${tactics.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>` : ""}
    ${first10.length ? `<div class="block"><h2>Landing your first 10 users</h2><ul class="list">${first10.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>` : ""}
    ${plan.metric ? `<div class="block"><h2>The one metric to watch</h2><div class="metric">${esc(plan.metric)}</div></div>` : ""}
  `;

  $("result").querySelectorAll("[data-copy]").forEach((b) =>
    b.addEventListener("click", async () => {
      const el = document.getElementById(b.dataset.copy);
      try {
        await navigator.clipboard.writeText(el.innerText);
        b.textContent = "Copied!";
        setTimeout(() => (b.textContent = "Copy"), 1500);
      } catch (_) { /* clipboard blocked */ }
    })
  );
  $("result").querySelectorAll("[data-gen]").forEach((b) =>
    b.addEventListener("click", () => generateVideo(Number(b.dataset.gen)))
  );
}

async function run() {
  const product = $("product").value.trim();
  const btn = $("plan-btn");
  $("result").innerHTML = "";
  btn.disabled = true;
  setStatus("working", "Building your go-to-market plan and video prompts…");

  try {
    const data = new FormData();
    data.set("product", product);
    data.set("audience", $("audience").value.trim());
    data.set("channel", channel);
    data.set("angle", $("angle").value.trim());
    const res = await fetch(ROOT + "/plan", { method: "POST", body: data });
    const payload = await res.json();
    if (!payload.ok) { setStatus("error", payload.error || "Something went wrong."); return; }
    setStatus("", "");
    render(payload.plan);
  } catch (err) {
    setStatus("error", "Network error — try again.");
  } finally {
    btn.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  $("channels").addEventListener("click", (e) => {
    const b = e.target.closest(".channel");
    if (!b) return;
    channel = b.dataset.channel;
    document.querySelectorAll(".channel").forEach((c) => c.classList.toggle("active", c === b));
  });
  $("plan-btn").addEventListener("click", run);
});
