# The Group®

Luxury editorial site for The Group® — frontend pages and a Vercel-ready API in one Next.js app.

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Frontend

- `/` — navigation, hero, Our Houses, and digital membership
- `/membership/demo` — QR destination for the demonstration card

## Backend

All routes deploy with the same Vercel project:

| Route | Purpose |
| --- | --- |
| `GET /api/health` | Deploy health check |
| `GET /api/brands` | House brand marks |
| `GET /api/membership/card` | Loyalty card payload |
| `GET /api/membership/verify?id=18720004` | Demo card verification |
| `GET /api/membership/enroll` | Redirects to the Clicks Loyalty card |

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new). Vercel will detect Next.js.
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` — your production URL, for example `https://the-group.vercel.app`
   - `LOYALTY_CARD_URL` — `https://www.clicksloyalty.com/card/258`
4. Deploy.

Local production check:

```bash
npm run build
npm start
```
