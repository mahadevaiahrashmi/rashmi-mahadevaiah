"""FastAPI sub-app: Duolingo-style AI concepts learning app.

Mounted under /learn-ai. Fully client-side gamified quiz engine over curated
content — no LLM calls. PostHog analytics are wired in and configured from the
environment (POSTHOG_KEY / POSTHOG_HOST); if no key is set, analytics is simply
disabled and the app still works.
"""
from __future__ import annotations

import json
import os
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .content import UNITS

BASE = Path(__file__).resolve().parent

app = FastAPI(title="Learn AI — Duolingo style")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

POSTHOG_KEY = os.environ.get("POSTHOG_KEY", "")
POSTHOG_HOST = os.environ.get("POSTHOG_HOST", "https://us.i.posthog.com")


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request,
        "index.html",
        {
            "root_path": request.scope.get("root_path", ""),
            "units_json": json.dumps(UNITS),
            "posthog_key": POSTHOG_KEY,
            "posthog_host": POSTHOG_HOST,
        },
    )
