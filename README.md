# Connectea Website

The marketing website for **Connectea**, built with [Astro](https://astro.build/) and deployed on Vercel. Multilingual (English, Spanish, Chinese).

> ℹ️ Connectea has been **open-sourced**. The hosted product is being wound down and the `connectea.net` domain is **for sale** — the live site shows a contact popup for interested buyers. This repository contains the website source only; **no secrets are included** (analytics IDs that ship to the browser are public by design).

## Tech stack

| Area       | Technology              |
|------------|-------------------------|
| Framework  | Astro 5                 |
| Hosting    | Vercel (`@astrojs/vercel`) |
| Analytics  | Vercel Analytics        |
| i18n       | `src/i18n/translations.ts` (en / es / zh) |

## Structure

```
src/
├── i18n/translations.ts     # all UI copy, per language
├── layouts/                 # page layouts (Landing, About, Privacy, Terms)
└── pages/
    ├── index.astro          # root: redirects to the visitor's language
    └── [lang]/              # localized routes (/en/, /es/, /zh/)
```

The landing page (`layouts/LandingPage.astro`) includes:
- The open-source announcement section with links to all Connectea repositories.
- A "domain for sale" popup shown once per session that links to `contact@connectea.net`.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # output for Vercel in .vercel/output
npm run preview    # preview the production build locally
```

## Related repositories

- [connectea](https://github.com/ivannavas/connectea) — desktop app (Electron)
- [connectea-backend](https://github.com/ivannavas/connectea-backend) — backend API
- [connectea-velocity](https://github.com/ivannavas/connectea-velocity) — Minecraft Velocity proxy

## License

This project is released as open source. If a `LICENSE` file is not yet present in the repository, please contact the maintainer before redistribution.
