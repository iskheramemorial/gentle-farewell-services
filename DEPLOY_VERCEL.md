# Deploying to Vercel

This project uses **TanStack Start** with SSR, which means it is NOT a plain static HTML site. It includes server-side rendering, a dynamic `/sitemap.xml` route, and server functions.

## How Vercel deployment works

- `vite.config.ts` detects Vercel builds via `NITRO_PRESET=vercel` and switches Nitro to the **`vercel`** preset.
- The custom `src/server.ts` SSR wrapper (designed for Cloudflare Workers) is **disabled** on Vercel so Nitro can generate the proper Vercel serverless entry.
- The build outputs to `.vercel/output/` which Vercel serves as a serverless Node.js app.

## Vercel Settings

Import your GitHub repo into Vercel and use these settings (already configured in `vercel.json`):

| Setting | Value |
|---------|-------|
| Framework Preset | **Other** (null) |
| Build Command | `NITRO_PRESET=vercel bun run build` |
| Install Command | `bun install` |
| Output Directory | `.vercel/output` |

No changes are needed in the Vercel UI — `vercel.json` handles everything.

## Environment Variables (if needed)

If you add Supabase or other secrets later, set them in:
**Vercel Dashboard → Project Settings → Environment Variables**

Do NOT commit `.env` files.

## Custom Domain

After deploying, add your custom domain in:
**Vercel Dashboard → Project Settings → Domains**

## Troubleshooting

### "No Output Directory named 'output' found"
This means the build did not switch to the `vercel` preset. Make sure `NITRO_PRESET=vercel` is set in the build command and `vercel.json` is committed to the repo.

### 404 on deployed site
The SSR server handles all routing. Do NOT add SPA rewrites in `vercel.json` — they will conflict with the serverless function.

## Note

The Lovable sandbox preview still uses **Cloudflare Workers** (via `src/server.ts`). The Vercel build uses a separate serverless target. Both are maintained from the same codebase.
