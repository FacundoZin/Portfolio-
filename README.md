# Portfolio — Facundo Zin

Single-page portfolio built with Next.js 15, Tailwind CSS v4, and TypeScript.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 + tw-animate-css
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Font:** Geist

## Commands

```bash
pnpm dev        # dev server (http://localhost:3000)
pnpm build      # production build
pnpm start      # start production server
pnpm lint       # next lint
pnpm typecheck  # tsc --noEmit
```

## Features

- Dark/light theme toggle (manual state, CSS variables with oklch)
- Spanish/English i18n (context-based, no next-intl)
- Interactive terminal widget (command-based easter egg)
- Infinite marquee tech ticker (skillicons.dev + custom SVGs)
- GitHub contributions calendar + stats
- Multi-section layout with scroll-triggered animations

## Project structure

- `app/` — Next.js App Router (layout, pages, globals.css)
- `components/` — LanguageToggle, TechTicker, Terminal, HtmlLang
- `lib/` — i18n dictionaries, language context
- `public/` — static assets (profile image, CV PDFs)
