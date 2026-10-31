import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "../components/ui/sonner";

function SplashScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [barWidth, setBarWidth] = useState("0%");

  useEffect(() => {
    // Paint hidden state first, then trigger entrance on next frame
    const raf = requestAnimationFrame(() => {
      setVisible(true);
      setTimeout(() => setBarWidth("75%"), 50);
      setTimeout(() => setBarWidth("100%"), 1600);
      setTimeout(() => setExiting(true), 1900);
      setTimeout(() => onDone(), 2500);
    });
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#faf8f5",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1)",
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? "none" : "all",
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: "absolute", width: 340, height: 340, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
        filter: "blur(40px)",
        transition: "opacity 1s ease",
        opacity: visible ? 1 : 0,
      }} />

      {/* Logo */}
      <div style={{
        position: "relative", zIndex: 1,
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1) translateY(0)" : "scale(0.78) translateY(12px)",
      }}>
        <img src="/logo.png" alt="Buildicy" style={{ width: 76, height: 76, objectFit: "contain", display: "block" }} />
      </div>

      {/* Wordmark + tagline */}
      <div style={{
        position: "relative", zIndex: 1,
        marginTop: 18,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: "0.15s",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
            fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", color: "#0f172a",
          }}>Buildicy</span>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#9333ea",
            boxShadow: "0 0 10px #9333ea",
            display: "inline-block",
            animation: "pulse 1.5s ease-in-out infinite",
          }} />
        </div>
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#9333ea", fontWeight: 700,
        }}>AI Growth Systems Studio</span>
      </div>

      {/* Progress bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: "#e2e8f0",
      }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg, #9333ea, #6366f1)",
          transition: "width 1.5s cubic-bezier(0.16,1,0.3,1)",
          width: barWidth,
        }} />
      </div>
    </div>
  );
}

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

function ErrorComponent({ error, reset }: ErrorComponentProps) {
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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
      { rel: "icon", href: "/logo.png", type: "image/png" },
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
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <Outlet />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
