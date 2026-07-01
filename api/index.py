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
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from fastapi import FastAPI  # noqa: E402
from app.main import app as tailor_app  # noqa: E402
from app.discovery.guide import app as discovery_app  # noqa: E402
from app.voice.main import app as voice_app  # noqa: E402
from app.funded.main import app as funded_app  # noqa: E402
from app.learn.main import app as learn_app  # noqa: E402
from app.gtm.main import app as gtm_app  # noqa: E402

app = FastAPI()
app.mount("/resume-tailor", tailor_app)
app.mount("/product-discovery", discovery_app)
app.mount("/personal-voice", voice_app)
app.mount("/funded-companies", funded_app)
app.mount("/learn-ai", learn_app)
app.mount("/gtm-videos", gtm_app)

__all__ = ["app"]
