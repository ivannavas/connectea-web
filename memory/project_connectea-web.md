---
name: connectea-web project context
description: Context for the Connectea landing page Astro project at C:\connectea-web
type: project
---

Landing page for the Connectea desktop Electron app (at C:\connectea).

**Why:** Marketing one-page site to announce and distribute the app.

**How to apply:** When working on this project, remember these architectural decisions.

### Stack
- Astro 5 (static site generator)
- Pure CSS (no Tailwind) — CSS variables in LandingPage.astro `<style is:global>`
- TypeScript for translations
- No JS framework — vanilla JS for scroll reveal + mobile menu

### Architecture
- `src/i18n/translations.ts` — all strings for EN/ES/ZH as a typed `Translation` object
- `src/layouts/LandingPage.astro` — single layout with all HTML + CSS + JS
- `src/pages/[lang]/index.astro` — generates `/en/`, `/es/`, `/zh/` via `getStaticPaths()`
- `src/pages/index.astro` — redirects `/` → `/en/`
- Download link: `/downloads/connectea-setup.exe` (placeholder)

### Claude Agents (post-commit)
- `.claude/agents/visual-reviewer.md` — reviews and improves visual design
- `.claude/agents/seo-reviewer.md` — reviews and optimizes SEO
- `.githooks/post-commit` — calls both agents after each commit (git config core.hooksPath = .githooks)
- On Windows, `claude` must be in git-bash PATH or set `CLAUDE_CODE_GIT_BASH_PATH`

### Design tokens
- Background: `#09090f`, surface: `#0f0f1a`, cards: `rgba(255,255,255,0.035)`
- Primary gradient: `#6366f1 → #8b5cf6` (indigo → violet)
- Text: `#f1f5f9`, secondary: `#94a3b8`, muted: `#475569`
- Font: Inter (Google Fonts)

### Dev server
- `npm run dev` → http://localhost:4321
- `npm run build` → generates `dist/` with 4 HTML files
