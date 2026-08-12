# React version — setup notes

## Run it
```
npm install
npm run dev
```

## What changed
- Rebuilt with Vite + React + `react-router-dom`. Same HTML structure, same `style.css` (untouched), same `script.js` behavior — just re-implemented as React components/hooks so nothing looks or behaves differently.
- Everything still lives on one page. As you scroll, a scroll-spy hook (`src/hooks/useScrollSpy.js`) updates the URL to `/about`, `/services`, `/experience`, `/projects`, `/contact` (and back to `/` for the hero) without ever triggering a page reload or a jump — it only calls `history.replace`.
- Loading `/projects` directly (or refreshing on it) scrolls straight to that section on load.
- The Flask To-Do App project image was regenerated (`public/images/to-do.png`) to actually look like the to‑do app itself instead of a plain "GitHub repository" text card, using the same neon-on-dark styling as the rest of the site.

## Images you'll need to add
Only `to-do.png`, `menu.png`, and `menu.svg` were in your upload, so those are already in `public/images/`. These files were referenced in the original `index.html` but weren't in your upload — drop them into `public/images/` with these exact names and everything will pick them up automatically:
- `unnamed.jpg` (hero avatar)
- `ecommerce.jpeg`
- `sgc.png`
- `bankist.jpg`
- `bank.jpg`
- `dice.jpg`
- `portfolio.jpeg`

## Deploying to Vercel
`vercel.json` is already set up with a rewrite so that direct loads/refreshes of `/about`, `/projects`, etc. don't 404 — Vercel serves `index.html` for any path and React Router takes it from there:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
Vercel auto-detects Vite. Build command `npm run build`, output directory `dist` — no extra config needed beyond the `vercel.json` above.
