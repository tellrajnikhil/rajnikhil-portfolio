# Nikhil Raj — Portfolio

Personal portfolio site for Nikhil Raj, Technical Project Manager (AI · Data · Digital Transformation).

## Stack

React + Vite + TypeScript, plain CSS. No backend, no database, no environment variables. Fully static.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Output is written to `dist/`.

## Deploy to Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- No environment variables required.

This project is deployed by Cloudflare as a **Workers + Static Assets** project (the current default when connecting a Vite app), not classic Pages. `wrangler.jsonc` configures SPA fallback for that path via `not_found_handling: "single-page-application"`, so deep links like `/work/vituosica` resolve correctly.

A `public/404.html` (identical to `index.html`) is also included as a fallback in case the project ever runs on classic Pages instead, which uses `404.html` for unmatched routes.

Do **not** add a `public/_redirects` file with a `/* /index.html 200` rule — Cloudflare's newer platform detects that pattern as an infinite redirect loop (since `/index.html` itself matches `/*` again) and will fail the build.

## Editing content

All copy — projects, career history, expertise, contact details — lives in `src/data/content.ts`. Replace the `YOUR_EMAIL_HERE` and `YOUR_LINKEDIN_URL_HERE` placeholders in that file with real details before publishing.
