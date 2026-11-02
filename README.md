# Aamantran — amntrn.in

Marketing site + (soon) admin & orders for Aamantran digital wedding invitations.
Built with **Next.js (App Router) + React + TypeScript**, inline styles + CSS variables, lucide-react icons. Deploys on Vercel.

> This is the **frontend-first** build. The template gallery (video previews) and the
> Supabase backend (admin, analytics, orders) come in the next phases — the UI here is
> structured so they slot in underneath without a rewrite.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

## Edit your details in ONE place
Everything business-specific lives in **`src/lib/site.ts`**: contact details, legal name (Ray Ventures),
designs, prices, add-ons and FAQ.

## Pages
- `/` — landing: hero, designs gallery (tap a design to watch its preview), how it works, pricing teaser
- `/pricing`, `/faq`, `/contact`
- `/privacy`, `/terms`, `/refund` — legal (content reads from `site.ts`)
- `robots.txt` + `sitemap.xml` generated automatically

## Designs gallery
Each design has a preview video and cover in `public/designs/<slug>.mp4` and `<slug>.webp`, and an entry in
`DESIGNS` in `src/lib/site.ts`. To add a design: drop its two files in `public/designs/` and add one line to `DESIGNS`.

## Client invitations
Private couple invitations live in `public/i/<slug>/index.html` and are served at `amntrn.in/i/<slug>`.
They are hidden from search engines (`X-Robots-Tag: noindex` + `robots.txt`).

## Analytics
Vercel Web Analytics is built in. Switch it on in the Vercel project → Analytics → Enable.

## Next phase
- Supabase backend — admin (add/remove designs), orders, online payments.
