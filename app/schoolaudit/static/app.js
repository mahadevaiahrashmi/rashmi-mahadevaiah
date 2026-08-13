// agent-notes: { ctx: "school audit: checklist + photo + GPS + score + officer routing + days-pending feed", deps: [], state: active, last: "claude@2026-08-13" }
"use strict";

const $ = (id) => document.getElementById(id);
const STORE_KEY = "school-audits-v1";

// ---- The audit model: four areas, each with concrete checklist items ----
// Each item is graded: good (1) / poor (0.5) / missing (0). "officer" = who is
// answerable for that whole area (the accountability layer the pothole app lacks).
const CATEGORIES = [
  {
    key: "water_toilets",
    icon: "🚰",
    title: "Drinking water & toilets",
    officer: "Block Education Officer (with the local Panchayat/Engineer)",
    items: [
      { key: "water", label: "Safe drinking water available" },
      { key: "toilets_work", label: "Toilets functional & usable" },
      { key: "toilets_girls", label: "Separate, working toilets for girls" },
      { key: "handwash", label: "Water for handwashing / in toilets" },
    ],
  },
  {
    key: "electricity_classrooms",
    icon: "💡",
    title: "Electricity & classrooms",
    officer: "District Engineer (PWD) & Block Education Officer",
    items: [
      { key: "power", label: "Electricity connection working" },
      { key: "fans_lights", label: "Fans & lights functional" },
      { key: "rooms_safe", label: "Classrooms safe & weatherproof (roof/floor)" },
      { key: "rooms_enough", label: "Enough classrooms & seating" },
    ],
  },
  {
    key: "boundary_safety",
    icon: "🧱",
    title: "Boundary wall & campus safety",
    officer: "District Education Officer & District Engineer",
    items: [
      { key: "wall", label: "Boundary wall present & intact" },
      { key: "gate", label: "Secure gate / controlled entry" },
      { key: "grounds", label: "Safe grounds / play area" },
      { key: "hazards", label: "No open hazards (wiring, debris, collapse risk)" },
    ],
  },
  {
    key: "meals_attendance",
    icon: "🍛",
    title: "Mid-day meals & teacher attendance",
    officer: "Block Education Officer (MDM) & District Education Officer",
    items: [
      { key: "meal_served", label: "Mid-day meal served today" },
      { key: "meal_quality", label: "Meal looked adequate & hygienic" },
      { key: "teachers", label: "Teachers present (vs. sanctioned posts)" },
      { key: "classes", label: "Classes actually running" },
    ],
  },
];

const STATUS = {
  good: { label: "Working", cls: "good", val: 1, icon: "✅" },
  poor: { label: "Poor", cls: "poor", val: 0.5, icon: "⚠️" },
  missing: { label: "Missing", cls: "missing", val: 0, icon: "❌" },
};

// ---- Storage ----
function loadAudits() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
  catch { return []; }
}
function saveAudits(list) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    alert("Couldn't save — this device's storage is full (photos take space). " +
          "Try fewer/again without photos.");
    return false;
  }
}

// ---- Scoring ----
function scoreAudit(a) {
  let sum = 0, answered = 0;
  for (const cat of CATEGORIES) {
    for (const item of cat.items) {
      const st = a.answers?.[cat.key]?.[item.key]?.status;
      if (st && STATUS[st]) { sum += STATUS[st].val; answered += 1; }
    }
  }
  return answered ? Math.round((sum / answered) * 100) : null;
}
function scoreBand(score) {
  if (score === null) return { label: "Not enough data", cls: "none" };
  if (score >= 80) return { label: "Good shape", cls: "good" };
  if (score >= 50) return { label: "Needs work", cls: "poor" };
  return { label: "Critical", cls: "missing" };
}
function daysPending(a) {
  return Math.floor((Date.now() - a.createdAt) / 86400000);
}
function escalationStage(days) {
  if (days >= 30) return { label: `PUBLIC FLAG · ${days}d`, cls: "missing" };
  if (days >= 14) return { label: `Escalated to District · ${days}d`, cls: "poor" };
  if (days >= 7) return { label: `Escalated to Block · ${days}d`, cls: "poor" };
  return { label: `Open · ${days}d`, cls: "good" };
}
function issuesOf(a) {
  const out = [];
  for (const cat of CATEGORIES) {
    for (const item of cat.items) {
      const st = a.answers?.[cat.key]?.[item.key]?.status;
      if (st === "poor" || st === "missing") out.push({ cat, item, status: st });
    }
  }
  return out;
}

// ---- Navigation ----
function show(view) {
  for (const v of ["home", "audit", "report"]) {
    $("view-" + v).classList.toggle("hidden", v !== view);
  }
  window.scrollTo(0, 0);
}

// ---- Home / feed ----
function renderHome() {
  const audits = loadAudits();

  // category preview
  $("cat-grid").innerHTML = CATEGORIES.map(c => `
    <div class="cat-card">
      <span class="cat-icon">${c.icon}</span>
      <div>
        <div class="cat-title">${c.title}</div>
        <div class="cat-items muted">${c.items.map(i => i.label).join(" · ")}</div>
      </div>
    </div>`).join("");

  // hero stats
  const scored = audits.map(a => ({ a, s: scoreAudit(a) })).filter(x => x.s !== null);
  const avg = scored.length ? Math.round(scored.reduce((n, x) => n + x.s, 0) / scored.length) : null;
  const openIssues = audits.reduce((n, a) => n + issuesOf(a).length, 0);
  $("hero-stats").innerHTML = `
    <div class="stat"><div class="stat-v">${audits.length}</div><div class="stat-l">schools audited</div></div>
    <div class="stat"><div class="stat-v">${avg === null ? "—" : avg}</div><div class="stat-l">avg health score</div></div>
    <div class="stat"><div class="stat-v">${openIssues}</div><div class="stat-l">open issues</div></div>`;

  // feed
  $("feed-count").textContent = audits.length ? `(${audits.length})` : "";
  const sort = $("feed-sort").value;
  const sorted = [...audits];
  if (sort === "worst") sorted.sort((x, y) => (scoreAudit(x) ?? 999) - (scoreAudit(y) ?? 999));
  else if (sort === "recent") sorted.sort((x, y) => y.createdAt - x.createdAt);
  else if (sort === "pending") sorted.sort((x, y) => x.createdAt - y.createdAt);

  if (!audits.length) {
    $("feed-list").innerHTML = `<div class="empty">No schools audited yet. Be the first — hit “Start a school audit”.</div>`;
    return;
  }
  $("feed-list").innerHTML = sorted.map(a => {
    const s = scoreAudit(a), band = scoreBand(s);
    const days = daysPending(a), esc = escalationStage(days);
    const issues = issuesOf(a);
    return `
      <button class="feed-item" data-report="${a.id}">
        <div class="fi-score ${band.cls}">${s === null ? "—" : s}</div>
        <div class="fi-main">
          <div class="fi-name">${esc0(a.school.name)}</div>
          <div class="fi-sub muted">${esc0(a.school.area || "Location not set")} · ${new Date(a.createdAt).toLocaleDateString()}</div>
          <div class="fi-tags">
            <span class="pill ${band.cls}">${band.label}</span>
            <span class="pill ${esc.cls}">${esc.label}</span>
            ${issues.length ? `<span class="pill missing">${issues.length} issue${issues.length > 1 ? "s" : ""}</span>` : `<span class="pill good">No issues</span>`}
          </div>
        </div>
        <span class="fi-arrow">›</span>
      </button>`;
  }).join("");

  // keep the map in sync if the user is currently on the Map tab
  if ($("tab-map").classList.contains("on")) plotMap();
}

// ---- Map view ----
let map = null, markerLayer = null;
const BAND_COLOR = { good: "#008a05", poor: "#b45309", missing: "#c13515", none: "#717171" };

function ensureMap() {
  if (map || typeof L === "undefined") return;
  map = L.map("feed-map", { scrollWheelZoom: true }).setView([22.5, 79], 4); // India
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
}

function plotMap() {
  ensureMap();
  if (!map) return;
  markerLayer.clearLayers();
  const geo = loadAudits().filter(a => a.school && a.school.lat != null);
  const pts = [];
  for (const a of geo) {
    const s = scoreAudit(a), band = scoreBand(s);
    const m = L.circleMarker([a.school.lat, a.school.lng], {
      radius: 11, color: "#fff", weight: 2, fillColor: BAND_COLOR[band.cls] || "#717171", fillOpacity: 0.92,
    }).addTo(markerLayer);
    m.bindPopup(
      `<b>${esc0(a.school.name)}</b><br>Score: ${s === null ? "—" : s}/100 · ${band.label}` +
      `<br>${issuesOf(a).length} open issue(s)` +
      `<br><a href="#" class="popup-link" data-report="${a.id}">View report ›</a>`
    );
    pts.push([a.school.lat, a.school.lng]);
  }
  $("map-empty").classList.toggle("hidden", geo.length > 0);
  if (pts.length) map.fitBounds(pts, { padding: [40, 40], maxZoom: 15 });
  setTimeout(() => map.invalidateSize(), 60); // container was hidden -> recompute size
}

function setFeedView(v) {
  const list = v === "list";
  $("feed-list").classList.toggle("hidden", !list);
  $("feed-map").classList.toggle("hidden", list);
  $("tab-list").classList.toggle("on", list);
  $("tab-map").classList.toggle("on", !list);
  $("feed-sort").classList.toggle("hidden", !list); // sort only applies to the list
  if (list) $("map-empty").classList.add("hidden");
  else plotMap();
}

// ---- Audit form ----
let draft = null;

function newDraft() {
  draft = { id: "a" + Date.now(), createdAt: Date.now(), school: {}, auditor: {}, answers: {} };
  for (const c of CATEGORIES) draft.answers[c.key] = {};
}

function renderChecklist() {
  $("checklist").innerHTML = CATEGORIES.map(cat => `
    <div class="cat-block">
      <div class="cat-block-head">
        <span class="cat-icon">${cat.icon}</span>
        <div>
          <h4>${cat.title}</h4>
          <div class="officer muted">Answerable: ${cat.officer}</div>
        </div>
      </div>
      ${cat.items.map(item => {
        const cur = draft.answers[cat.key][item.key] || {};
        return `
        <div class="item" data-cat="${cat.key}" data-item="${item.key}">
          <div class="item-label">${item.label}</div>
          <div class="item-controls">
            <div class="status-btns">
              ${Object.entries(STATUS).map(([k, v]) => `
                <button class="sbtn ${v.cls} ${cur.status === k ? "on" : ""}" data-status="${k}">${v.icon} ${v.label}</button>`).join("")}
            </div>
            <div class="item-extras">
              <label class="photo-btn">📷<input type="file" accept="image/*" capture="environment" class="photo-input" hidden /></label>
              <input type="text" class="item-note" placeholder="Note (optional)" value="${cur.note ? esc0(cur.note) : ""}" />
            </div>
          </div>
          <div class="thumb-wrap">${cur.photo ? `<img class="thumb" src="${cur.photo}" alt="" />` : ""}</div>
        </div>`;
      }).join("")}
    </div>`).join("");
  updateScore();
}

function setStatus(catKey, itemKey, status) {
  const slot = draft.answers[catKey][itemKey] || (draft.answers[catKey][itemKey] = {});
  slot.status = slot.status === status ? "" : status; // toggle off if same
}

function updateScore() {
  const s = scoreAudit(draft), band = scoreBand(s);
  $("score-val").textContent = s === null ? "—" : s;
  $("live-score").className = "score-bar " + band.cls;
  $("score-label").textContent = s === null ? "School health score" : `${band.label} — ${s}/100`;
  const issues = issuesOf(draft).length;
  $("score-sub").textContent = s === null
    ? "Answer items to build the score."
    : `${issues} issue${issues === 1 ? "" : "s"} flagged so far.`;
}

// downscale a picked image to a small JPEG data URL so localStorage survives
function compressImage(file, cb) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const max = 480;
      let { width, height } = img;
      if (width > height && width > max) { height = height * max / width; width = max; }
      else if (height > max) { width = width * max / height; height = max; }
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      cb(canvas.toDataURL("image/jpeg", 0.55));
    };
    img.onerror = () => cb(null);
    img.src = e.target.result;
  };
  reader.onerror = () => cb(null);
  reader.readAsDataURL(file);
}

// ---- Report ----
function renderReport(id) {
  const a = loadAudits().find(x => x.id === id);
  if (!a) { show("home"); return; }
  const s = scoreAudit(a), band = scoreBand(s);
  const days = daysPending(a), esc = escalationStage(days);
  const issues = issuesOf(a);

  const catBlocks = CATEGORIES.map(cat => {
    const rows = cat.items.map(item => {
      const slot = a.answers?.[cat.key]?.[item.key] || {};
      const st = slot.status ? STATUS[slot.status] : null;
      return `
        <div class="r-item">
          <div class="r-status ${st ? st.cls : "none"}">${st ? st.icon : "—"}</div>
          <div class="r-item-body">
            <div>${item.label}</div>
            ${slot.note ? `<div class="r-note muted">“${esc0(slot.note)}”</div>` : ""}
            ${slot.photo ? `<img class="thumb" src="${slot.photo}" alt="" />` : ""}
          </div>
        </div>`;
    }).join("");
    const catIssues = cat.items.filter(i => {
      const st = a.answers?.[cat.key]?.[i.key]?.status; return st === "poor" || st === "missing";
    }).length;
    return `
      <div class="r-cat">
        <div class="r-cat-head">
          <span class="cat-icon">${cat.icon}</span>
          <h4>${cat.title}</h4>
          ${catIssues ? `<span class="pill missing">${catIssues} to fix</span>` : `<span class="pill good">OK</span>`}
        </div>
        <div class="r-cat-officer muted">➜ Answerable: <strong>${cat.officer}</strong></div>
        ${rows}
      </div>`;
  }).join("");

  $("report-body").innerHTML = `
    <div class="report-head">
      <div class="rh-score ${band.cls}">${s === null ? "—" : s}<span>/100</span></div>
      <div class="rh-main">
        <h2>${esc0(a.school.name)}</h2>
        <div class="muted">${esc0(a.school.area || "Location not set")}${a.school.code ? " · UDISE " + esc0(a.school.code) : ""}</div>
        <div class="rh-pills">
          <span class="pill ${band.cls}">${band.label}</span>
          <span class="pill ${esc.cls}">${esc.label}</span>
          <span class="pill">${issues.length} open issue${issues.length === 1 ? "" : "s"}</span>
        </div>
        <div class="muted small">Audited ${new Date(a.createdAt).toLocaleString()} by ${esc0(a.auditor?.name || "Anonymous")}</div>
      </div>
    </div>

    ${a.school.lat != null ? `<div class="map-line">📍 ${a.school.lat.toFixed(5)}, ${a.school.lng.toFixed(5)} &nbsp;·&nbsp;
      <a href="https://www.openstreetmap.org/?mlat=${a.school.lat}&mlon=${a.school.lng}#map=18/${a.school.lat}/${a.school.lng}" target="_blank" rel="noopener noreferrer">View on map</a></div>` : ""}

    ${issues.length ? `
    <div class="accountability">
      <h3>Who has to fix this — and by when</h3>
      <p class="muted small">Every open issue below is “on the clock”. The days-pending counter and escalation
      ladder (Block → District → public flag at 7 / 14 / 30 days) are the accountability layer a plain photo map lacks.</p>
      <div class="acc-clock ${esc.cls}">⏱ ${esc.label} — this report has been public for ${days} day${days === 1 ? "" : "s"}.</div>
    </div>` : `<div class="all-good">✅ No issues flagged — this school passed every checked item.</div>`}

    <div class="r-cats">${catBlocks}</div>

    <div class="report-actions">
      <button class="btn ghost" id="copy-summary">📋 Copy summary</button>
      <button class="btn ghost" id="download-report">⬇ Download report (JSON)</button>
      <button class="btn danger-ghost" id="delete-report">🗑 Delete</button>
    </div>
  `;

  $("copy-summary").onclick = () => {
    const lines = [
      `School Audit — ${a.school.name}`,
      `${a.school.area || ""}${a.school.code ? " · UDISE " + a.school.code : ""}`,
      `Health score: ${s === null ? "N/A" : s + "/100"} (${band.label})`,
      `Open ${days} day(s) — ${esc.label}`,
      issues.length ? `\nIssues to fix:` : `\nNo issues flagged.`,
      ...issues.map(i => `• [${STATUS[i.status].label}] ${i.item.label} — ${i.cat.officer}`),
    ];
    navigator.clipboard.writeText(lines.join("\n")).then(
      () => flash("copy-summary", "✓ Copied"),
      () => alert("Copy failed — select and copy manually.")
    );
  };
  $("download-report").onclick = () => downloadJSON(`school-audit-${a.school.name || "report"}.json`, a);
  $("delete-report").onclick = () => {
    if (!confirm("Delete this audit from this device?")) return;
    saveAudits(loadAudits().filter(x => x.id !== a.id));
    show("home"); renderHome();
  };

  show("report");
}

// ---- Helpers ----
function esc0(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function flash(id, text) {
  const el = $(id), old = el.textContent;
  el.textContent = text;
  setTimeout(() => { el.textContent = old; }, 1400);
}
function downloadJSON(name, obj) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ---- Events ----
$("start-audit").onclick = () => { newDraft(); renderChecklist(); show("audit"); };
$("feed-sort").onchange = renderHome;
$("tab-list").onclick = () => setFeedView("list");
$("tab-map").onclick = () => setFeedView("map");

// popup "View report" link (Leaflet renders popups into the DOM)
document.addEventListener("click", (e) => {
  const link = e.target.closest(".popup-link");
  if (link) { e.preventDefault(); renderReport(link.dataset.report); }
});
$("export-all").onclick = () => {
  const all = loadAudits();
  if (!all.length) return alert("No audits to export yet.");
  downloadJSON("school-audits.json", all);
};

document.querySelectorAll('[data-goto="home"]').forEach(b => b.onclick = () => { show("home"); renderHome(); });

// feed item -> report (event delegation)
$("feed-list").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-report]");
  if (btn) renderReport(btn.dataset.report);
});

// GPS
$("get-gps").onclick = () => {
  if (!navigator.geolocation) { $("geo-status").textContent = "Geolocation not supported on this device."; return; }
  $("geo-status").textContent = "Locating…";
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      draft.school.lat = pos.coords.latitude;
      draft.school.lng = pos.coords.longitude;
      $("geo-status").textContent = `📍 ${draft.school.lat.toFixed(5)}, ${draft.school.lng.toFixed(5)} captured.`;
      $("geo-status").classList.remove("muted");
    },
    (err) => { $("geo-status").textContent = "Couldn't get location (" + err.message + ")."; },
    { enableHighAccuracy: true, timeout: 10000 }
  );
};

// checklist interactions (delegation)
$("checklist").addEventListener("click", (e) => {
  const sbtn = e.target.closest(".sbtn");
  if (!sbtn) return;
  const item = sbtn.closest(".item");
  setStatus(item.dataset.cat, item.dataset.item, sbtn.dataset.status);
  // repaint just this item's buttons
  item.querySelectorAll(".sbtn").forEach(b => b.classList.remove("on"));
  const cur = draft.answers[item.dataset.cat][item.dataset.item].status;
  if (cur) item.querySelector(`.sbtn[data-status="${cur}"]`).classList.add("on");
  updateScore();
});
$("checklist").addEventListener("input", (e) => {
  if (e.target.classList.contains("item-note")) {
    const item = e.target.closest(".item");
    const slot = draft.answers[item.dataset.cat][item.dataset.item] || (draft.answers[item.dataset.cat][item.dataset.item] = {});
    slot.note = e.target.value.slice(0, 240);
  }
});
$("checklist").addEventListener("change", (e) => {
  if (e.target.classList.contains("photo-input") && e.target.files[0]) {
    const item = e.target.closest(".item");
    compressImage(e.target.files[0], (dataUrl) => {
      if (!dataUrl) return alert("Couldn't read that image.");
      const slot = draft.answers[item.dataset.cat][item.dataset.item] || (draft.answers[item.dataset.cat][item.dataset.item] = {});
      slot.photo = dataUrl;
      const wrap = item.querySelector(".thumb-wrap");
      wrap.innerHTML = `<img class="thumb" src="${dataUrl}" alt="" />`;
    });
  }
});

// submit
$("submit-audit").onclick = () => {
  draft.school.name = $("s-name").value.trim();
  draft.school.code = $("s-code").value.trim();
  draft.school.area = $("s-area").value.trim();
  draft.auditor.name = $("a-name").value.trim();
  if (!draft.school.name) { alert("Please enter the school name."); $("s-name").focus(); return; }
  if (scoreAudit(draft) === null) { alert("Mark at least one checklist item before submitting."); return; }
  draft.createdAt = Date.now();
  const list = loadAudits();
  list.push(draft);
  if (saveAudits(list)) { renderReport(draft.id); renderHome(); }
};

// ---- Boot ----
renderHome();
