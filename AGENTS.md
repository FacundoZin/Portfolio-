# AGENTS.md — PortfolioZinFacundo

Single-page Next.js 15 portfolio (App Router, Tailwind CSS 4, pnpm).

## Commands

```bash
pnpm dev        # dev server (http://localhost:3000)
pnpm build      # next build (typecheck/lint NOT run during build)
pnpm lint       # next lint
pnpm typecheck  # tsc --noEmit
pnpm start      # next start
```

## Non-obvious config

- `@/*` path alias maps to repo root (e.g. `@/components/...`).
- Tailwind CSS v4 with `@tailwindcss/postcss` (NOT v3 PostCSS plugin). CSS variables use `oklch()`.
- pnpm, not npm. Lockfile is `pnpm-lock.yaml`.
- `next.config.mjs` has `images.unoptimized: true` — all images use native `<img>` not `<Image>`.

## Architecture

- **`app/`** — Next.js App Router entry (layout.tsx, page.tsx, globals.css)
- **`components/`** — LanguageToggle, TechTicker, Terminal, HtmlLang
- **`lib/`** — i18n, language context

### i18n

Simple context-based (no next-intl). Dictionaries in `lib/i18n.ts` with `es` and `en` locales. `LanguageProvider` wraps in `app/layout.tsx`. Toggle via `LanguageToggle` component using `useLanguage()` hook. Locale persists in `localStorage`.

### Theme

Manual `isDark` state + class toggle in `app/page.tsx`. No theme library.

### Content

All copy lives in `lib/i18n.ts` dictionaries — not in page.tsx. To update text (experience, education, posts), edit the dictionaries there.

CV files: `public/cv/cv-facundozin-es.pdf` and `cv-facundozin-en.pdf`.

### Terminal

Interactive command-based widget. Commands: about, projects, skills, cv, clear, help. Uses i18n for welcome messages and labels.

### HtmlLang

Client component that syncs `<html lang>` attribute with the current locale. Renders nothing.

## Key gotchas

- `TechTicker` loads icon SVGs from external CDN (`skillicons.dev`) and `ghchart.rshah.org` / `github-readme-stats` for contribution images.
- Animation keyframes (marquee, fade-in-up) are in `app/globals.css`.
- No error boundaries or loading fallbacks for external CDN images.
