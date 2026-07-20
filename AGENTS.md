# AGENTS.md — PortfolioZinFacundo

Single-page Next.js 15 portfolio (App Router, Tailwind CSS 4, pnpm).

## Commands

```bash
pnpm dev        # dev server (http://localhost:3000)
pnpm build      # next build
pnpm lint       # next lint
pnpm start      # next start
```

No tests, no typecheck script (run `npx tsc --noEmit` for type check).

## Non-obvious config

- `next.config.mjs`: `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true` — `next lint` and `next build` will NOT catch all errors. Run `npx tsc --noEmit` separately for type checking.
- `@/*` path alias maps to repo root (e.g. `@/components/...`).
- Tailwind CSS v4 with `@tailwindcss/postcss` (NOT v3 PostCSS plugin). CSS variables use `oklch()`.
- pnpm, not npm. Lockfile is `pnpm-lock.yaml`.

## Architecture

- **`app/`** — Next.js App Router entry (layout.tsx, page.tsx, globals.css)
- **`components/`** — 4 custom components; no shadcn/ui components despite `components.json` being configured
- **`lib/`** — i18n, language context, `cn()` utility

### i18n

Simple context-based (no next-intl). Dictionaries in `lib/i18n.ts` with `es` and `en` locales. `LanguageProvider` wraps in `app/layout.tsx`. Toggle via `LanguageToggle` component using `useLanguage()` hook.

### Theme

Manual `isDark` state + class toggle in `app/page.tsx`. `components/theme-provider.tsx` exists but is **unused**.

### Content

All copy lives in `lib/i18n.ts` dictionaries — not in page.tsx. To update text (experience, education, posts), edit the dictionaries there.

CV files: `public/cv/cv-facundozin-es.pdf` and `cv-facundozin-en.pdf`.

## Key gotchas

- `theme-provider.tsx` is dead code — don't add to layout unless switching to next-themes.
- `styles/globals.css` appears unused; `app/globals.css` is what Tailwind reads.
- `TechTicker` loads icon SVGs from external CDN (`skillicons.dev`) and `ghchart.rshah.org` / `github-readme-stats` for contribution images.
