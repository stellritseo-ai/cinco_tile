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
import { EstimateModalProvider, useEstimateModal } from "@/context/EstimateModalContext";
import { SettingsProvider } from "@/context/settings-context";
import { TranslationProvider } from "@/context/translation-context";
import { ChatWidget } from "@/components/ChatWidget";
import { EstimateModal } from "@/components/EstimateModal";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import faviconImg from "../assets/cincologo.png";

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
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
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
  const resetApp = () => {
    router.invalidate();
    reset();
  };
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={resetApp} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground">Go home</a>
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
      { title: "Cinco Services | Houston, TX" },
      { name: "description", content: "Houston's trusted tile installation specialists. 15+ years experience, expert installation, and free estimates." },
    ],
    links: [
      { rel: "icon", href: faviconImg, type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" },
      { rel: "stylesheet", href: appCss },
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
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <TranslationProvider>
      <SettingsProvider>
        <EstimateModalProvider>
          <RootContent />
        </EstimateModalProvider>
      </SettingsProvider>
    </TranslationProvider>
  );
}

function RootContent() {
  const { queryClient } = Route.useRouteContext();
  const { isOpen, closeModal, openModal } = useEstimateModal();

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const text = anchor.textContent || "";

      // Intercept clicks on non-landing pages pointing to #contact or #estimate
      if (
        window.location.pathname !== "/" &&
        href &&
        (href === "#contact" ||
          href === "#estimate" ||
          href.endsWith("#contact") ||
          href.endsWith("#estimate"))
      ) {
        e.preventDefault();
        openModal();
      }
    };

    document.addEventListener("click", handleGlobalClick, { capture: true });
    return () => document.removeEventListener("click", handleGlobalClick, { capture: true });
  }, [openModal]);

  const isDashboard = typeof window !== "undefined" && 
    (window.location.pathname.startsWith("/dashboard") || window.location.pathname === "/login");

  useEffect(() => {
    if (!isDashboard) {
      import("@/lib/leads-store").then(({ incrementVisits }) => {
        incrementVisits().catch(() => {});
      });
    }
  }, [isDashboard]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <EstimateModal isOpen={isOpen} onClose={closeModal} />
      {!isDashboard && <ChatWidget />}
    </QueryClientProvider>
  );
}
