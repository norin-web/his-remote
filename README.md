# Hisense · TV Remote Control — promo site

React 18 + TS + Vite 6 + React Router 7. Design source: Paper file "Hisense TV", page Promo.

```bash
pnpm install
pnpm dev        # http://localhost:5183 via .claude/launch.json "hisense-site"
pnpm build
```

## Data
All brand/app facts live in `src/app/content/site.ts`. PLACEHOLDER values to replace:
- (email + App ID set: tomislav@vikskendapa.store, 6797527517 — app not live yet)
- `app` specs (size, iOS, languages, age, price) — refresh from `https://itunes.apple.com/lookup?id=<ID>`
- Legal texts: `src/app/content/legal.ts` — paste the owner's text verbatim

## Assets
`public/images` — compressed copies; originals in `../File/materials`.
card-1..3.jpg are AI-generated (Paper, nano-banana-2).

## Motion
Lenis smooth scroll · split-character headlines · scroll reveals · ticker marquee ·
hero phone scale-on-scroll · phone parallax in feature cards · App reel fan-in ·
count-up stats · magnetic buttons · pointer-following hero glow · route fade.
All of it is disabled under `prefers-reduced-motion`.

## Deploy
Not deployed yet. No domain: set `base: "/<repo>/"` in vite.config.ts for GitHub Pages.
