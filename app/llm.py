"""Unified LLM text client — one interface over OpenRouter, OpenAI, Anthropic, Gemini.

Which provider is used is decided by the environment, so the same apps can run on
whichever key you have:

  LLM_PROVIDER = openrouter | openai | anthropic | gemini   (explicit choice)

If LLM_PROVIDER is unset, the first provider with a key present is used, in this
priority order: openrouter, anthropic, openai, gemini.

Per-provider model overrides (all optional):
  OPENROUTER_MODELS   comma list (first = primary, rest = fallback)  [free-model resilient]
  ANTHROPIC_MODEL     default: claude-haiku-4-5-20251001
  OPENAI_MODEL        default: gpt-4o-mini
  GEMINI_TEXT_MODEL   default: gemini-2.5-flash   (separate from GEMINI_VEO_MODEL)

Public API:
  active_provider() -> str | None
  available()       -> bool
  label()           -> str            (e.g. "anthropic:claude-haiku-4-5-20251001")
  chat(messages, system=None) -> str | None
  complete(prompt, system=None) -> str | None
"""
from __future__ import annotations

import os

import httpx

PRIORITY = ["openrouter", "anthropic", "openai", "gemini"]

_KEYS = {
    "openrouter": "OPENROUTER_API_KEY",
    "anthropic": "ANTHROPIC_API_KEY",
    "openai": "OPENAI_API_KEY",
    "gemini": "GEMINI_API_KEY",
}


def _has(provider: str) -> bool:
    return bool(os.environ.get(_KEYS[provider], "").strip())


def active_provider():
    forced = os.environ.get("LLM_PROVIDER", "").strip().lower()
    if forced in _KEYS and _has(forced):
        return forced
    for p in PRIORITY:
        if _has(p):
            return p
    return None


def available() -> bool:
    return active_provider() is not None


def _openrouter_models():
    raw = os.environ.get("OPENROUTER_MODELS", "deepseek/deepseek-chat,meta-llama/llama-3.3-70b-instruct:free")
    return [m.strip() for m in raw.split(",") if m.strip()]


def _model_for(provider: str) -> str:
    if provider == "openrouter":
        return _openrouter_models()[0]
    if provider == "anthropic":
        return os.environ.get("ANTHROPIC_MODEL") or "claude-haiku-4-5-20251001"
    if provider == "openai":
        return os.environ.get("OPENAI_MODEL") or "gpt-4o-mini"
    if provider == "gemini":
        return os.environ.get("GEMINI_TEXT_MODEL") or "gemini-2.5-flash"
    return "?"


def label() -> str:
    p = active_provider()
    return f"{p}:{_model_for(p)}" if p else "none"


# ── Per-provider calls (each returns text or raises httpx.HTTPError / ValueError) ──
def _call_openai_style(url, key, model, messages, system, max_tokens):
    msgs = ([{"role": "system", "content": system}] if system else []) + messages
    r = httpx.post(
        url,
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
        json={"model": model, "messages": msgs, "max_tokens": max_tokens},
        timeout=55,
    )
    r.raise_for_status()
    return (r.json()["choices"][0]["message"]["content"] or "").strip()


def _call_anthropic(key, model, messages, system, max_tokens):
    body = {"model": model, "max_tokens": max_tokens, "messages": messages}
    if system:
        body["system"] = system
    r = httpx.post(
        "https://api.anthropic.com/v1/messages",
        headers={"x-api-key": key, "anthropic-version": "2023-06-01", "Content-Type": "application/json"},
        json=body,
        timeout=55,
    )
    r.raise_for_status()
    parts = r.json().get("content", [])
    return "".join(p.get("text", "") for p in parts if p.get("type") == "text").strip()


def _call_gemini(key, model, messages, system, max_tokens):
    contents = [
        {"role": "model" if m["role"] == "assistant" else "user", "parts": [{"text": m["content"]}]}
        for m in messages
    ]
    body = {"contents": contents, "generationConfig": {"maxOutputTokens": max_tokens}}
    if system:
        body["system_instruction"] = {"parts": [{"text": system}]}
    r = httpx.post(
        f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}",
        headers={"Content-Type": "application/json"},
        json=body,
        timeout=55,
    )
    r.raise_for_status()
    cand = r.json()["candidates"][0]["content"]["parts"]
    return "".join(p.get("text", "") for p in cand).strip()


def chat(messages, system=None, max_tokens: int = 1600):
    """messages: [{role: 'user'|'assistant', content: str}, ...]. Returns text or None."""
    provider = active_provider()
    if not provider:
        return None
    key = os.environ[_KEYS[provider]]
    try:
        if provider == "openrouter":
            # Try the configured model list in order (free-model resilience).
            last = None
            for model in _openrouter_models():
                try:
                    text = _call_openai_style("https://openrouter.ai/api/v1/chat/completions", key, model, messages, system, max_tokens)
                    if text:
                        return text
                except httpx.HTTPError as exc:
                    last = exc
            if last:
                return None
            return None
        if provider == "openai":
            return _call_openai_style("https://api.openai.com/v1/chat/completions", key, _model_for("openai"), messages, system, max_tokens) or None
        if provider == "anthropic":
            return _call_anthropic(key, _model_for("anthropic"), messages, system, max_tokens) or None
        if provider == "gemini":
            return _call_gemini(key, _model_for("gemini"), messages, system, max_tokens) or None
    except (httpx.HTTPError, KeyError, IndexError, ValueError, TypeError):
        return None
    return None


def complete(prompt: str, system=None, max_tokens: int = 1600):
    return chat([{"role": "user", "content": prompt}], system=system, max_tokens=max_tokens)
