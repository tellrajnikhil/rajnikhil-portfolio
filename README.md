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

`public/_redirects` is included so client-side routes (the case-study pages) resolve correctly on Cloudflare Pages.

## Editing content

All copy — projects, career history, expertise, contact details — lives in `src/data/content.ts`. Replace the `YOUR_EMAIL_HERE` and `YOUR_LINKEDIN_URL_HERE` placeholders in that file with real details before publishing.
