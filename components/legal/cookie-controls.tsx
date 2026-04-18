"use client";

import Link from "next/link";
import Script from "next/script";
import { startTransition, useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Check, Cookie, ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/cn";

type CookiePreference = "accepted" | "essential";

const STORAGE_KEY = "ezilab-cookie-consent";
const CHANGE_EVENT = "ezilab-cookie-consent-change";

/* ── Storage helpers ── */

function readStored(): CookiePreference | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "accepted" || v === "essential" ? v : null;
}

function expireCookie(name: string, domain?: string) {
  const d = domain ? `; domain=${domain}` : "";
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}; SameSite=Lax`;
}

function clearGACookies() {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const parts = host.split(".");
  const root = parts.length > 1 ? `.${parts.slice(-2).join(".")}` : undefined;

  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0]?.trim();
    if (!name || !name.startsWith("_ga")) continue;
    expireCookie(name);
    expireCookie(name, host);
    if (root) expireCookie(name, root);
  }
}

function disableGA(measurementId: string) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)[`ga-disable-${measurementId}`] = true;
  }
  clearGACookies();
}

function broadcast(value: CookiePreference | null) {
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: value }));
}

function store(value: CookiePreference | null, measurementId?: string) {
  if (value) {
    window.localStorage.setItem(STORAGE_KEY, value);
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }

  if (value !== "accepted" && measurementId) {
    disableGA(measurementId);
  }

  broadcast(value);
}

/* ── Hook ── */

function subscribe(cb: () => void) {
  const onStorage = (e: StorageEvent) => { if (e.key === STORAGE_KEY) cb(); };
  const onChange = () => cb();
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function useCookiePreference() {
  const preference = useSyncExternalStore(subscribe, readStored, () => null);
  const hydrated = useSyncExternalStore(() => () => {}, () => true, () => false);
  return { preference, hydrated };
}

/* ── Banner component ── */

export function CookieConsent({ measurementId }: { measurementId: string }) {
  const { preference, hydrated } = useCookiePreference();
  const [justSaved, setJustSaved] = useState<CookiePreference | null>(null);

  function save(value: CookiePreference) {
    startTransition(() => {
      store(value, measurementId);
      setJustSaved(value);
    });
  }

  // Clear the confirmation after 3 seconds
  useEffect(() => {
    if (!justSaved) return;
    const t = setTimeout(() => setJustSaved(null), 3000);
    return () => clearTimeout(t);
  }, [justSaved]);

  const gaInitScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { anonymize_ip: true });
`;

  return (
    <>
      {/* Load GA only when accepted */}
      {preference === "accepted" ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">{gaInitScript}</Script>
        </>
      ) : null}

      <AnimatePresence mode="wait">
        {/* Show banner when no preference saved yet */}
        {hydrated && preference === null && !justSaved ? (
          <motion.div
            key="banner"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-x-0 bottom-[4.5rem] z-50 px-3 sm:bottom-4 sm:px-6 md:bottom-4"
          >
            <div className="card card-lg mx-auto max-w-2xl p-4 backdrop-blur-xl sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 sm:h-10 sm:w-10">
                  <Cookie size={17} />
                </span>
                <div className="flex-1">
                  <h2 className="font-heading text-[15px] font-semibold text-white sm:text-base">Cookie preferences</h2>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted sm:mt-1.5 sm:text-sm">
                    We use essential storage for theme and preferences. Analytics cookies are optional and help us improve the site.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <Link href="/privacy-policy" className="inline-flex items-center gap-1 text-sky-400 transition hover:text-sky-300">
                      <ShieldCheck size={12} /> Privacy Policy
                    </Link>
                    <Link href="/cookies" className="inline-flex items-center gap-1 text-sky-400 transition hover:text-sky-300">
                      <BarChart3 size={12} /> Cookie Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => save("accepted")}
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-400 active:scale-[0.98] sm:flex-none"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={() => save("essential")}
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] px-5 text-sm font-semibold text-foreground transition hover:bg-[var(--card-hover)] active:scale-[0.98] sm:flex-none"
                >
                  Essential only
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Confirmation toast after saving */}
        {justSaved ? (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-x-0 bottom-[4.5rem] z-50 px-3 sm:bottom-4 sm:px-6 md:bottom-4"
          >
            <div className="card mx-auto flex max-w-md items-center gap-3 p-3 sm:p-4">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                <Check size={16} />
              </span>
              <p className="flex-1 text-sm text-foreground">
                {justSaved === "accepted"
                  ? "Analytics enabled. Thanks for helping us improve."
                  : "Essential only. No analytics cookies will be used."}
              </p>
              <button
                type="button"
                onClick={() => setJustSaved(null)}
                className="shrink-0 text-muted transition hover:text-foreground"
                aria-label="Dismiss"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/* ── Preferences panel (used on /cookies page) ── */

export function CookiePreferences({ className }: { className?: string }) {
  const { preference, hydrated } = useCookiePreference();
  const [saved, setSaved] = useState(false);

  const setPreference = useCallback((next: CookiePreference | null) => {
    startTransition(() => {
      store(next);
      setSaved(true);
    });
  }, []);

  useEffect(() => {
    if (!saved) return;
    const t = setTimeout(() => setSaved(false), 2500);
    return () => clearTimeout(t);
  }, [saved]);

  return (
    <div className={cn("card p-6", className)}>
      <span className="inline-block text-sm font-semibold uppercase tracking-[0.08em] text-sky-400">
        Cookie Preferences
      </span>
      <h3 className="mt-3 font-heading text-xl font-semibold text-white">
        Manage your consent
      </h3>

      {/* Current status */}
      <div className="mt-4 rounded-xl bg-foreground/[0.04] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Current status</p>
        <p className="mt-1.5 text-sm text-foreground">
          {!hydrated
            ? "Loading..."
            : preference === "accepted"
              ? "✓ Analytics cookies are enabled"
              : preference === "essential"
                ? "✓ Essential only — no analytics"
                : "No preference saved yet"}
        </p>
      </div>

      {/* What each option does */}
      <div className="mt-4 space-y-3">
        <div className="rounded-xl bg-foreground/[0.04] p-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-green-400" />
            <p className="text-sm font-semibold text-foreground">Essential storage</p>
            <span className="ml-auto rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-400">Always on</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Theme preference and cookie consent choice. These never leave your browser and are required for the site to work properly.
          </p>
        </div>

        <div className="rounded-xl bg-foreground/[0.04] p-4">
          <div className="flex items-center gap-2">
            <BarChart3 size={16} className="text-sky-400" />
            <p className="text-sm font-semibold text-foreground">Analytics cookies</p>
            <span className={cn(
              "ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold",
              preference === "accepted" ? "bg-sky-500/10 text-sky-400" : "bg-foreground/[0.06] text-muted"
            )}>
              {preference === "accepted" ? "Enabled" : "Disabled"}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Google Analytics (_ga, _ga_*) — measures page visits and engagement. Only loaded after you accept. IP addresses are anonymized.
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setPreference("accepted")}
          className={cn(
            "inline-flex h-10 items-center rounded-full px-5 text-sm font-semibold transition active:scale-[0.98]",
            preference === "accepted"
              ? "bg-sky-500/10 text-sky-400"
              : "bg-sky-500 text-white hover:bg-sky-400"
          )}
        >
          {preference === "accepted" ? "✓ Analytics enabled" : "Accept analytics"}
        </button>
        <button
          type="button"
          onClick={() => setPreference("essential")}
          className={cn(
            "inline-flex h-10 items-center rounded-full border px-5 text-sm font-semibold transition active:scale-[0.98]",
            preference === "essential"
              ? "border-green-500/20 bg-green-500/10 text-green-400"
              : "border-[var(--card-border)] text-foreground hover:bg-[var(--card-hover)]"
          )}
        >
          {preference === "essential" ? "✓ Essential only" : "Essential only"}
        </button>
        {preference !== null ? (
          <button
            type="button"
            onClick={() => setPreference(null)}
            className="inline-flex h-10 items-center rounded-full border border-[var(--card-border)] px-5 text-sm font-semibold text-muted transition hover:text-foreground active:scale-[0.98]"
          >
            Reset
          </button>
        ) : null}
      </div>

      {/* Save confirmation */}
      <AnimatePresence>
        {saved ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 flex items-center gap-1.5 text-sm text-green-400"
          >
            <Check size={14} /> Preference saved
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
