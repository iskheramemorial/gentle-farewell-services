// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = process.env.NITRO_PRESET === "vercel" || process.env.VERCEL === "1";

export default defineConfig({
  tanstackStart: {
    // Vercel: use TanStack Start's default server entry (nitro handles the format).
    // Cloudflare / Lovable: use our custom SSR error wrapper.
    server: isVercel ? undefined : { entry: "server" },
  },
  // Vercel: enable nitro with the vercel preset.
  // Lovable sandbox: the package auto-enables cloudflare-module, so `true` is fine.
  nitro: isVercel ? { preset: "vercel" } : true,
});
