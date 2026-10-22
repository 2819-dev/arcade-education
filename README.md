# Arcade Education

School game center for Guide classrooms — Roblox-inspired browse shell with real game covers, detail pages, and a Guide launch bridge stub.

**Canonical URL:** https://arcade-edu.guidelearning.org  
**Env:** `NEXT_PUBLIC_ARCADE_URL` (see `.env.example`)

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Home catalog (sidebar + bottom bar) |
| `/discover` | Full catalog browse |
| `/games/[id]` | Game detail (cover, 2D/3D, Play stub) |
| `/admin` | Light stub — teacher view / block-access via Guide |
| `/launch?token=` | Guide launch bridge stub (exchange TO BUILD) |

## Auth / entitlements

Do not assume Guide cookies on the Arcade subdomain. Guide will mint a short-lived token → `/launch?token=…` → Arcade exchanges at Guide `POST /api/apps/launch/exchange` (TO BUILD). Entitlement gating is stubbed for UI work.

Guide catalog / My apps changes belong in the Guide repo — not here.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` / `pages:build` | Static export → `out/` (Cloudflare Pages) |
| `npm run pages:deploy` | `wrangler pages deploy out --project-name=arcade-edu` |
| `npm run start` | Run production build (Node; not used on Pages) |
| `npm run lint` | ESLint |

## Cloudflare Pages

Production host: **https://arcade-edu.guidelearning.org** · Pages project **`arcade-edu`** (Hillel CF account).

Stack is Next 16 static export (`output: "export"` → `out/`), not `@cloudflare/next-on-pages` (peer max Next 15.5.2). Deploy with `wrangler pages deploy` only — not `wrangler deploy`.
