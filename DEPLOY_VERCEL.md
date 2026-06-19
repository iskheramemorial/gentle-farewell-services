# Deploying to Vercel

This is a TanStack Start app (SSR). It is NOT a plain static HTML site —
it server-renders pages and exposes a dynamic `/sitemap.xml`. Vercel will
run it as a Node serverless app via nitro's `vercel` preset.

## One-time setup

1. Push the project to GitHub (use Lovable → GitHub integration, or
   download the code and push manually).
2. In Vercel: **Add New → Project → Import** that repo.
3. Vercel will read `vercel.json` automatically. You do **not** need to
   change Framework Preset, Build Command, or Output Directory in the
   Vercel UI — `vercel.json` already sets them:
   - Build Command: `bun run build`
   - Install Command: `bun install`
   - Output: `.vercel/output` (Vercel Build Output API, produced by
     nitro's `vercel` preset)
   - Env: `NITRO_PRESET=vercel`
4. Click **Deploy**.

That's it. The same routes, SEO, sitemap, and contact form work identically
to the Lovable preview.

## Custom domain
Vercel → Project → Settings → Domains → add your domain.

## Why not "just HTML files"?
The site uses TanStack Start server rendering. A pure static export would
drop the dynamic sitemap route and any future server functions. The
Vercel preset above keeps everything working with zero code changes.
