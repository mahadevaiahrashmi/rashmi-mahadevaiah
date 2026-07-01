"use strict";

// Served under a path prefix (/personal-voice); use it for fetch() calls.
const ROOT = window.APP_ROOT || "";
const SAMPLES_KEY = "voice-samples";

const $ = (id) => document.getElementById(id);
let kind = "reply";
let lastDraft = "";

function setStatus(cls, msg) {
  const s = $("status");
  s.className = "status " + cls;
  s.innerHTML = msg;
}

// Persist the voice samples on-device so they aren't re-pasted each visit.
function restoreSamples() {
  const saved = localStorage.getItem(SAMPLES_KEY);
  if (saved) {
    $("samples").value = saved;
    $("saved-note").textContent = "Loaded your saved voice samples.";
  }
}
function saveSamples() {
  const v = $("samples").value.trim();
  if (v) { localStorage.setItem(SAMPLES_KEY, v); $("saved-note").textContent = "Saved on this device."; }
  else { localStorage.removeItem(SAMPLES_KEY); $("saved-note").textContent = ""; }
}

async function generate(refine) {
  const samples = $("samples").value.trim();
  const data = new FormData();
  data.set("samples", samples);
  data.set("kind", kind);
  data.set("context", $("context").value.trim());
  data.set("instruction", $("instruction").value.trim());
  if (refine) {
    data.set("refine", refine);
    data.set("previous", lastDraft);
  }

  const btn = $("draft-btn");
  btn.disabled = true;
  setStatus("working", refine ? "Revising in your voice…" : "Drafting in your voice…");

  try {
    const res = await fetch(ROOT + "/draft", { method: "POST", body: data });
    const payload = await res.json();
    if (!payload.ok) {
      setStatus("error", payload.error || "Something went wrong.");
      return;
    }
    lastDraft = payload.draft;
    const d = $("draft");
    d.textContent = payload.draft;
    d.classList.remove("hidden");
    $("tweaks").classList.remove("hidden");
    $("copy-btn").classList.remove("hidden");
    setStatus("idle", "Draft ready — edit inline, tweak below, or copy.");
  } catch (err) {
    setStatus("error", "Network error — try again.");
  } finally {
    btn.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  restoreSamples();
  $("samples").addEventListener("blur", saveSamples);

  $("kinds").addEventListener("click", (e) => {
    const b = e.target.closest(".kind");
    if (!b) return;
    kind = b.dataset.kind;
    document.querySelectorAll(".kind").forEach((k) => k.classList.toggle("active", k === b));
  });

  $("draft-btn").addEventListener("click", () => generate(null));

  $("tweaks").addEventListener("click", (e) => {
    const b = e.target.closest("[data-refine]");
    if (b) generate(b.dataset.refine);
  });

  $("copy-btn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText($("draft").innerText);
      $("copy-btn").textContent = "Copied!";
      setTimeout(() => ($("copy-btn").textContent = "Copy"), 1500);
    } catch (_) { /* clipboard blocked */ }
  });
});
