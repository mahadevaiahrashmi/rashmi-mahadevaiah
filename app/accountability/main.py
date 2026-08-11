# agent-notes: { ctx: "FastAPI sub-app: passkey-gated empty page", deps: [], state: active, last: "claude@2026-08-11" }
"""FastAPI sub-app: Accountability.

Mounted under /accountability. A passkey-gated, intentionally empty page —
enter the passkey to view. The passkey is checked server-side against the
ACCOUNTABILITY_PASSCODE env var (falls back to a default for local dev).
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
def unlock(passcode: str = Form(...)):
    if passcode.strip() == PASSCODE:
        return {"ok": True}
    return JSONResponse({"ok": False, "error": "Wrong passkey."}, status_code=401)
