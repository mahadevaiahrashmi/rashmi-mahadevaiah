"use strict";
// agent-notes: { ctx: "interview-prep UI: JD -> free-course table + MD/CSV/HTML downloads", deps: [style.css], state: active, last: "claude@2026-07-03" }

const ROOT = window.APP_ROOT || "";
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let plan = null; // { role, guidance, rows:[{requirement, timebox, courses:[{title,platform,url}]}] }

function setStatus(msg) { const el = $("status"); if (!msg) { el.hidden = true; el.textContent = ""; return; } el.hidden = false; el.textContent = msg; }

$("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const jd = $("jd").value.trim();
  if (jd.length < 40) { $("jd").focus(); setStatus("⚠️ Paste a fuller job description first."); return; }
  $("go").disabled = true;
  $("result").hidden = true;
  setStatus("🧭 Mapping requirements to free courses…");
  try {
    const fd = new FormData();
    fd.set("jd", jd); fd.set("timeframe", $("timeframe").value);
    const data = await (await fetch(ROOT + "/generate", { method: "POST", body: fd })).json();
    if (!data.ok) { setStatus("⚠️ " + data.error); return; }
    plan = data;
    setStatus("");
    renderPlan();
    $("result").hidden = false;
  } catch {
    setStatus("⚠️ Network error — please try again.");
  } finally {
    $("go").disabled = false;
  }
});

function renderPlan() {
  const hasTime = plan.rows.some((r) => r.timebox);
  $("role").textContent = plan.role ? `Study plan — ${plan.role}` : "Your study plan";
  $("guidance").textContent = plan.guidance || "";
  $("guidance").hidden = !plan.guidance;

  const head = `<thead><tr>
    <th class="c-req">Requirement</th>
    ${hasTime ? '<th class="c-time">Study window</th>' : ""}
    <th class="c-courses">Free courses</th>
  </tr></thead>`;
  const body = plan.rows.map((r) => {
    const courses = r.courses.map((c) =>
      `<li><a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.title)}</a>${c.platform ? ` <span class="plat">· ${esc(c.platform)}</span>` : ""}</li>`).join("");
    return `<tr>
      <td class="c-req">${esc(r.requirement)}</td>
      ${hasTime ? `<td class="c-time">${esc(r.timebox || "—")}</td>` : ""}
      <td class="c-courses"><ul>${courses}</ul></td>
    </tr>`;
  }).join("");
  $("plan").innerHTML = head + `<tbody>${body}</tbody>`;
}

// ─────────────────────────── Downloads ───────────────────────────
function download(name, text, type) {
  const blob = new Blob([text], { type: type || "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
function slug() { return (plan.role || "interview-prep").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "interview-prep"; }
const hasTime = () => plan.rows.some((r) => r.timebox);

function toMarkdown() {
  const t = hasTime();
  let out = `# Study plan${plan.role ? " — " + plan.role : ""}\n\n`;
  if (plan.guidance) out += `> ${plan.guidance}\n\n`;
  out += `| Requirement |${t ? " Study window |" : ""} Free courses |\n|---|${t ? "---|" : ""}---|\n`;
  plan.rows.forEach((r) => {
    const courses = r.courses.map((c) => `[${c.title}](${c.url})${c.platform ? ` (${c.platform})` : ""}`).join("<br>");
    out += `| ${r.requirement.replace(/\|/g, "\\|")} |${t ? ` ${r.timebox || "—"} |` : ""} ${courses} |\n`;
  });
  return out;
}
function toCSV() {
  const t = hasTime();
  const q = (s) => `"${String(s).replace(/"/g, '""')}"`;
  const header = ["Requirement", ...(t ? ["Study window"] : []), "Free courses"];
  const lines = [header.map(q).join(",")];
  plan.rows.forEach((r) => {
    const courses = r.courses.map((c) => `${c.title} (${c.url})`).join(" ; ");
    lines.push([q(r.requirement), ...(t ? [q(r.timebox || "")] : []), q(courses)].join(","));
  });
  return lines.join("\n");
}
function toHTML() {
  const t = hasTime();
  const rows = plan.rows.map((r) => {
    const courses = r.courses.map((c) => `<li><a href="${esc(c.url)}">${esc(c.title)}</a>${c.platform ? " · " + esc(c.platform) : ""}</li>`).join("");
    return `<tr><td>${esc(r.requirement)}</td>${t ? `<td>${esc(r.timebox || "—")}</td>` : ""}<td><ul>${courses}</ul></td></tr>`;
  }).join("");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Study plan</title>
<style>body{font-family:system-ui,sans-serif;max-width:900px;margin:40px auto;padding:0 20px;color:#222}
h1{color:#ff385c}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:10px 12px;text-align:left;vertical-align:top}
th{background:#fff5f7}a{color:#ff385c}ul{margin:0;padding-left:18px}</style></head><body>
<h1>Study plan${plan.role ? " — " + esc(plan.role) : ""}</h1>${plan.guidance ? `<p><em>${esc(plan.guidance)}</em></p>` : ""}
<table><thead><tr><th>Requirement</th>${t ? "<th>Study window</th>" : ""}<th>Free courses</th></tr></thead><tbody>${rows}</tbody></table>
</body></html>`;
}

document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-dl]");
  if (!b || !plan) return;
  const kind = b.dataset.dl;
  if (kind === "md") download(`${slug()}.md`, toMarkdown(), "text/markdown");
  else if (kind === "csv") download(`${slug()}.csv`, toCSV(), "text/csv");
  else if (kind === "html") download(`${slug()}.html`, toHTML(), "text/html");
});
