# agent-notes: { ctx: "FastAPI sub-app: passkey-gated democracy-proposals page", deps: [], state: active, last: "claude@2026-08-11" }
"""FastAPI sub-app: Accountability.

Mounted under /accountability. A passkey-gated page of citizen proposals for a
more effective democracy in India. The passkey is checked server-side against
the ACCOUNTABILITY_PASSCODE env var (falls back to a default for local dev), and
the page content itself is ONLY rendered and sent after a correct passkey — so
it never ships in the page source to un-authed visitors.
"""
from __future__ import annotations

import os
from pathlib import Path

from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

BASE = Path(__file__).resolve().parent

app = FastAPI(title="Accountability")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

PASSCODE = os.environ.get("ACCOUNTABILITY_PASSCODE", "42jaibhim")


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/unlock")
def unlock(request: Request, passcode: str = Form(...)):
    if passcode.strip() == PASSCODE:
        # Render the gated content to a string only now — it is never sent to
        # visitors who haven't entered the correct passkey.
        html = templates.env.get_template("content.html").render(
            root_path=request.scope.get("root_path", "")
        )
        return {"ok": True, "html": html}
    return JSONResponse({"ok": False, "error": "Wrong passkey."}, status_code=401)
