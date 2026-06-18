import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0B1F3A" },
      { name: "format-detection", content: "telephone=yes" },
      { httpEquiv: "content-language", content: "en-IN" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      {
        title:
          "I.S. Khera Memorial Trust | Dead Dog & Cat Pickup, Cremation & Burial Services Delhi NCR",
      },
      {
        name: "description",
        content:
          "24×7 dead dog and cat pickup services in Delhi NCR. Professional animal cremation, burial and memorial services. Call 8882650591.",
      },
      {
        name: "keywords",
        content:
          "dead dog pickup Delhi, dead animal pickup Delhi, dog cremation Delhi, cat cremation Delhi, animal burial Delhi, pet cremation Delhi, dead dog removal Delhi, animal memorial services Delhi, pet funeral services Delhi NCR, dead cat pickup Delhi, stray animal disposal Delhi, animal final rites Delhi, pet cremation near me, dead dog pickup near me, dead animal removal Shahdara, animal cremation Seelampur, pet burial Yamuna Vihar, dead dog pickup Bhajanpura, animal memorial Kardampuri",
      },
      { name: "author", content: "I.S. Khera Memorial Trust" },
      { name: "publisher", content: "I.S. Khera Memorial Trust" },
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Delhi" },
      { name: "geo.position", content: "28.6914;77.2890" },
      { name: "ICBM", content: "28.6914, 77.2890" },
      {
        property: "og:title",
        content:
          "I.S. Khera Memorial Trust | Dead Dog & Cat Pickup, Cremation & Burial Services Delhi NCR",
      },
      {
        property: "og:description",
        content:
          "24×7 dead dog and cat pickup services in Delhi NCR. Professional animal cremation, burial and memorial services. Call 8882650591.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "I.S. Khera Memorial Trust" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "I.S. Khera Memorial Trust | Dead Dog & Cat Pickup, Cremation Delhi NCR",
      },
      {
        name: "twitter:description",
        content:
          "24×7 dead dog & cat pickup, cremation, burial and memorial services in Delhi NCR. Call 8882650591.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
