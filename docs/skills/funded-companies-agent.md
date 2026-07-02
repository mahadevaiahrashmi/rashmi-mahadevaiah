---
name: funded-companies-agent
description: Find startups that raised funding this week and propose a tailored way in for a job seeker.
metadata:
  type: reference
  surface: https://rashmi-mahadevaiah.vercel.app/funded-companies
---

# Funded Companies Agent

Find startups that raised funding this week and propose a tailored way in for a job seeker.

## When to use
Use when the user wants fresh, timely job leads at companies that just raised money (and are about to hire).

## Inputs
- The user's background / target role.
- (Automatic) a web search for recent funding announcements.

## How it works
Scrapes the web for the week's funding rounds, then for each company proposes: a target role, why the user fits, who to contact, a tailored pitch, and an application path — mapped to the user's background. Uses OpenRouter's web plugin for grounding.

## Try it
Live: https://rashmi-mahadevaiah.vercel.app/funded-companies
