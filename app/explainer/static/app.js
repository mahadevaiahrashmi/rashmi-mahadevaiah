"use strict";
// agent-notes: { ctx: "explainer studio UI: script gen, slide iframes, downloads", deps: [style.css], state: active, last: "claude@2026-07-02" }

// Served under a path prefix (/explainer-bot); use it for fetch() calls.
const ROOT = window.APP_ROOT || "";
const $ = (id) => document.getElementById(id);

let state = { topic: "", aesthetic: null, segments: [] };
let busy = false;

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function setStatus(msg) {
  const el = $("status");
  if (!msg) { el.hidden = true; el.textContent = ""; return; }
  el.hidden = false;
  el.textContent = msg;
}

// ---- Generate script + aesthetic + critique ----
async function generate(e) {
  e.preventDefault();
  if (busy) return;
  const topic = $("topic").value.trim();
  if (!topic) return;
  busy = true;
  $("go").disabled = true;
  $("result").hidden = true;
  setStatus("✍️  Picking an aesthetic and writing your script…");

  try {
    const fd = new FormData();
    fd.set("topic", topic);
    fd.set("points", $("points").value);
    const res = await fetch(ROOT + "/script", { method: "POST", body: fd });
    const data = await res.json();
    if (!data.ok) { setStatus("⚠️  " + (data.error || "Something went wrong.")); return; }

    state = { topic: data.topic, aesthetic: data.aesthetic, segments: data.segments };
    renderAesthetic(data.aesthetic);
    renderCritique(data.critique);
    renderSegments(data.segments);
    setStatus("");
    $("result").hidden = false;
    generateSlides(); // fill in each slide preview
  } catch (err) {
    setStatus("⚠️  Network error — please try again.");
  } finally {
    busy = false;
    $("go").disabled = false;
  }
}

function renderAesthetic(a) {
  if (!a) { $("aesthetic").hidden = true; return; }
  const swatches = (a.palette || []).map((c) =>
    `<span class="swatch" style="background:${esc(c)}" title="${esc(c)}"></span>`).join("");
  $("aesthetic").hidden = false;
  $("aesthetic").innerHTML =
    `<h3>🎨 Aesthetic — ${esc(a.name || "")}</h3>
     <div class="palette">${swatches}</div>
     <p>${esc(a.description || "")}</p>`;
}

function renderCritique(c) {
  const el = $("critique");
  if (!c || !c.scores) { el.hidden = true; return; }
  const s = c.scores;
  const badge = (label, v) => {
    const cls = v >= 4 ? "good" : v >= 3 ? "ok" : "bad";
    return `<span class="score ${cls}">${esc(label)} ${esc(String(v))}/5</span>`;
  };
  const notes = (c.notes || []).map((n) => `<li>${esc(n)}</li>`).join("");
  const verdict = c.verdict === "approve"
    ? `<span class="verdict good">✓ Approved</span>`
    : `<span class="verdict warn">↻ Suggested revisions</span>`;
  el.hidden = false;
  el.innerHTML =
    `<h3>🔍 Script critique ${verdict}</h3>
     <div class="scores">
       ${badge("Understandable", s.understandability)}
       ${badge("Analogies", s.analogies)}
       ${badge("Wonder", s.wonder)}
     </div>
     ${notes ? `<ul class="notes">${notes}</ul>` : ""}`;
}

function renderSegments(segs) {
  const wrap = $("segments");
  wrap.innerHTML = "";
  segs.forEach((seg, i) => {
    const card = document.createElement("div");
    card.className = "card seg";
    card.innerHTML =
      `<div class="seg-top">
         <span class="seg-num">Slide ${i + 1}</span>
         <h3>${esc(seg.title)}</h3>
       </div>
       <div class="preview" id="prev-${i}">
         <div class="preview-loading">Designing slide…</div>
       </div>
       <p class="key-visual"><b>Visual:</b> ${esc(seg.key_visual)}</p>
       <div class="narration">
         <div class="narr-head">
           <b>🎙 Narration — read this aloud</b>
           <button class="ghost sm" data-copy="${i}" type="button">Copy</button>
         </div>
         <p id="narr-${i}">${esc(seg.narration)}</p>
       </div>
       <div class="seg-actions">
         <button class="ghost sm" data-dl="${i}" type="button" disabled>⬇ Slide HTML</button>
         <button class="ghost sm" data-open="${i}" type="button" disabled>↗ Open full size</button>
         <button class="ghost sm" data-redo="${i}" type="button" disabled>↻ Redesign</button>
       </div>`;
    wrap.appendChild(card);
  });
}

// ---- Generate each slide's HTML (one request each, 2 at a time) ----
async function generateSlides() {
  const q = state.segments.map((_, i) => i);
  const worker = async () => {
    while (q.length) {
      const i = q.shift();
      await generateSlide(i);
    }
  };
  await Promise.all([worker(), worker()]);
}

async function generateSlide(i) {
  const seg = state.segments[i];
  const prev = $("prev-" + i);
  try {
    const fd = new FormData();
    fd.set("topic", state.topic);
    fd.set("aesthetic", JSON.stringify(state.aesthetic || {}));
    fd.set("title", seg.title);
    fd.set("key_visual", seg.key_visual);
    const res = await fetch(ROOT + "/slide", { method: "POST", body: fd });
    const data = await res.json();
    if (!data.ok || !data.html) {
      prev.innerHTML = `<div class="preview-loading">⚠️ ${esc((data && data.error) || "Slide failed")}</div>`;
      return;
    }
    seg.html = data.html;
    showSlide(i);
  } catch (err) {
    prev.innerHTML = `<div class="preview-loading">⚠️ Network error</div>`;
  }
}

// Render the 1920x1080 slide in an iframe scaled to fit the card.
function showSlide(i) {
  const seg = state.segments[i];
  const prev = $("prev-" + i);
  prev.innerHTML = "";
  const frame = document.createElement("iframe");
  frame.className = "slide-frame";
  frame.setAttribute("sandbox", "allow-same-origin");
  frame.setAttribute("scrolling", "no");
  frame.srcdoc = seg.html;
  prev.appendChild(frame);
  // Enable the per-slide buttons.
  document.querySelector(`[data-dl="${i}"]`).disabled = false;
  document.querySelector(`[data-open="${i}"]`).disabled = false;
  document.querySelector(`[data-redo="${i}"]`).disabled = false;
}

function download(name, text, type) {
  const blob = new Blob([text], { type: type || "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function slug(s) {
  return (s || "explainer").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "explainer";
}

// ---- Click handling (delegated) ----
document.addEventListener("click", async (e) => {
  const t = e.target.closest("button");
  if (!t) return;

  if (t.dataset.copy !== undefined) {
    const txt = $("narr-" + t.dataset.copy).textContent;
    navigator.clipboard?.writeText(txt);
    t.textContent = "Copied ✓";
    setTimeout(() => (t.textContent = "Copy"), 1200);
    return;
  }
  if (t.dataset.dl !== undefined) {
    const i = +t.dataset.dl;
    download(`slide-${i + 1}-${slug(state.segments[i].title)}.html`, state.segments[i].html, "text/html");
    return;
  }
  if (t.dataset.open !== undefined) {
    const i = +t.dataset.open;
    const w = window.open();
    if (w) { w.document.write(state.segments[i].html); w.document.close(); }
    return;
  }
  if (t.dataset.redo !== undefined) {
    const i = +t.dataset.redo;
    t.disabled = true;
    $("prev-" + i).innerHTML = `<div class="preview-loading">Redesigning slide…</div>`;
    await generateSlide(i);
    return;
  }
  if (t.id === "dl-script") {
    const lines = state.segments.map((s, i) =>
      `# Slide ${i + 1}: ${s.title}\n[Visual: ${s.key_visual}]\n\n${s.narration}\n`);
    download(`${slug(state.topic)}-script.txt`, `${state.topic}\n\n${lines.join("\n")}`, "text/plain");
    return;
  }
});

$("form").addEventListener("submit", generate);
