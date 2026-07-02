"""Vercel Python entrypoint for the embedded apps.

The portfolio (static Vite site) is served at `/`. This function serves the
FastAPI apps under path prefixes — we mount each on a tiny parent ASGI app so
Starlette strips the prefix and the child routes stay unchanged.

  /resume-tailor      -> Resume Tailor
  /product-discovery  -> Product Discovery interactive guide
  /personal-voice     -> Personal Voice Skill
  /funded-companies   -> Funded Companies Agent
  /learn-ai           -> Duolingo-style AI learning app
  /gtm-videos         -> GTM with AI-generated videos
  /pm-agent           -> PM AI Agent
"""
import os
import sys
from pathlib import Path

_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(_ROOT))

# Local dev: load a .env from the repo root so the apps see keys via os.environ.
# Must run BEFORE the app modules import (they read env at import time). On Vercel
# there's no .env — env vars are injected by the platform — so this is a no-op.
try:
    from dotenv import load_dotenv

    load_dotenv(_ROOT / ".env")
except ImportError:
    pass

from fastapi import FastAPI  # noqa: E402
from app.main import app as tailor_app  # noqa: E402
from app.discovery.guide import app as discovery_app  # noqa: E402
from app.voice.main import app as voice_app  # noqa: E402
from app.funded.main import app as funded_app  # noqa: E402
from app.learn.main import app as learn_app  # noqa: E402
from app.gtm.main import app as gtm_app  # noqa: E402
from app.pm.main import app as pm_app  # noqa: E402

app = FastAPI()
app.mount("/resume-tailor", tailor_app)
app.mount("/product-discovery", discovery_app)
app.mount("/personal-voice", voice_app)
app.mount("/funded-companies", funded_app)
app.mount("/learn-ai", learn_app)
app.mount("/gtm-videos", gtm_app)
app.mount("/pm-agent", pm_app)

# Local single-server mode: also serve the built portfolio (dist/) at `/`, so one
# `uvicorn api.index:app` serves the whole site like Vercel — the app paths above
# plus the SPA and its assets. Skipped on Vercel (the platform serves dist/ there,
# and this function only ever receives the /app paths), and skipped if not built.
_DIST = _ROOT / "dist"
if not os.environ.get("VERCEL") and _DIST.is_dir():
    from fastapi.responses import FileResponse  # noqa: E402
    from fastapi.staticfiles import StaticFiles  # noqa: E402

    if (_DIST / "assets").is_dir():
        app.mount("/assets", StaticFiles(directory=str(_DIST / "assets")), name="assets")

    @app.get("/{full_path:path}")
    def _spa(full_path: str):
        # Serve a real dist file if it exists (favicon, images, resume.pdf, …),
        # otherwise fall back to index.html so client-side routes work.
        candidate = (_DIST / full_path).resolve()
        if full_path and str(candidate).startswith(str(_DIST.resolve())) and candidate.is_file():
            return FileResponse(str(candidate))
        return FileResponse(str(_DIST / "index.html"))

__all__ = ["app"]
