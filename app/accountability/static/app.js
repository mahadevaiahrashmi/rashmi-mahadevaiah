// agent-notes: { ctx: "accountability: submit passkey, reveal empty page on success", deps: [], state: active, last: "claude@2026-08-11" }
const ROOT = window.APP_ROOT || "";
const $ = (id) => document.getElementById(id);

$("lock-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  const err = $("err");
  err.textContent = "";
  const passcode = $("passcode").value;
  if (!passcode) { err.textContent = "Enter the passkey."; return; }

  btn.disabled = true;
  try {
    const fd = new FormData();
    fd.set("passcode", passcode);
    const res = await fetch(ROOT + "/unlock", { method: "POST", body: fd });
    if (res.ok) {
      $("lock").hidden = true;
      $("page").hidden = false;
    } else {
      err.textContent = "Wrong passkey.";
      $("passcode").value = "";
      $("passcode").focus();
    }
  } catch {
    err.textContent = "Network error — try again.";
  } finally {
    btn.disabled = false;
  }
});
