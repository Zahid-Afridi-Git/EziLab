"use client";

import Link from "next/link";
import Script from "next/script";
import { startTransition, useSyncExternalStore } from "react";
import { BarChart3, Cookie, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/cn";

type CookiePreference = "accepted" | "essential";

const COOKIE_CONSENT_STORAGE_KEY = "ezilab-cookie-consent";
const COOKIE_CONSENT_EVENT = "ezilab-cookie-consent-change";

function readStoredPreference(): CookiePreference | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "essential" ? value : null;
}

function expireCookie(name: string, domain?: string) {
  const domainPart = domain ? `; domain=${domain}` : "";
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}; SameSite=Lax`;
}

function clearAnalyticsCookies() {
  if (typeof document === "undefined") {
    return;
  }

  const host = window.location.hostname;
  const hostSegments = host.split(".");
  const rootDomain =
    hostSegments.length > 1 ? `.${hostSegments.slice(-2).join(".")}` : undefined;

  for (const cookie of document.cookie.split(";")) {
    const [rawName] = cookie.split("=");
    const name = rawName?.trim();

    if (!name || !name.startsWith("_ga")) {
      continue;
    }

    expireCookie(name);
    expireCookie(name, host);

    if (rootDomain) {
      expireCookie(name, rootDomain);
    }
  }
}

function broadcastPreference(value: CookiePreference | null) {
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, {
      detail: value,
    }),
  );
}

function storePreference(value: CookiePreference | null) {
  if (value) {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } else {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  }

  if (value !== "accepted") {
    clearAnalyticsCookies();
  }

  broadcastPreference(value);
}

function subscribeToPreference(callback: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === COOKIE_CONSENT_STORAGE_KEY) {
      callback();
    }
  }

  function handlePreferenceChange() {
    callback();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(COOKIE_CONSENT_EVENT, handlePreferenceChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(COOKIE_CONSENT_EVENT, handlePreferenceChange);
  };
}

function subscribeToHydration() {
  return () => {};
}

function useCookiePreference() {
  const preference = useSyncExternalStore(
    subscribeToPreference,
    readStoredPreference,
    () => null,
  );
  const hydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);

  return { preference, hydrated };
}

function getPreferenceCopy(preference: CookiePreference | null) {
  if (preference === "accepted") {
    return "Analytics cookies are enabled on this browser.";
  }

  if (preference === "essential") {
    return "Only essential site storage is enabled on this browser.";
  }

  return "You have not saved a cookie preference for this browser yet.";
}

export function CookieConsent({ measurementId }: { measurementId: string }) {
  const { preference, hydrated } = useCookiePreference();

  function savePreference(value: CookiePreference) {
    startTransition(() => {
      storePreference(value);
    });
  }

  const googleAnalyticsInitScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}');
`;

  return (
    <>
      {preference === "accepted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {googleAnalyticsInitScript}
          </Script>
        </>
      ) : null}

      {hydrated && preference === null ? (
        <div className="fixed inset-x-0 bottom-4 z-50 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-white/[0.08] bg-background/95 p-5 shadow-[0_28px_80px_-34px_rgba(2,132,199,0.55)] backdrop-blur-xl sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_auto] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  <Cookie size={14} />
                  Privacy Controls
                </span>
                <h2 className="mt-4 font-heading text-2xl font-semibold text-white sm:text-3xl">
                  Analytics cookies are optional on EziLab.
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  Essential storage keeps your theme and privacy choices in place. Optional
                  analytics help us understand site usage only if you allow them.
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center gap-2 text-cyan-200 transition hover:text-cyan-100"
                  >
                    <ShieldCheck size={14} />
                    Privacy Policy
                  </Link>
                  <Link
                    href="/cookies"
                    className="inline-flex items-center gap-2 text-cyan-200 transition hover:text-cyan-100"
                  >
                    <BarChart3 size={14} />
                    Cookies & Controls
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <button
                  type="button"
                  onClick={() => savePreference("accepted")}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-[#030712] transition hover:brightness-110"
                >
                  Accept analytics
                </button>
                <button
                  type="button"
                  onClick={() => savePreference("essential")}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.08] px-5 text-sm font-semibold text-slate-100 transition hover:border-slate-600 hover:text-sky-400"
                >
                  Essential only
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function CookiePreferences({ className }: { className?: string }) {
  const { preference, hydrated } = useCookiePreference();

  function setPreference(nextPreference: CookiePreference | null) {
    startTransition(() => {
      storePreference(nextPreference);
    });
  }

  return (
    <div className={cn("rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6", className)}>
      <span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
        Cookie Choice
      </span>
      <h3 className="mt-4 font-heading text-2xl font-semibold text-white">
        Manage analytics consent
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
        {hydrated ? getPreferenceCopy(preference) : "Loading your saved preference..."}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setPreference("accepted")}
          className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-[#030712] transition hover:brightness-110"
        >
          Accept analytics
        </button>
        <button
          type="button"
          onClick={() => setPreference("essential")}
          className="inline-flex h-11 items-center rounded-full border border-white/[0.08] px-5 text-sm font-semibold text-slate-100 transition hover:border-slate-600 hover:text-sky-400"
        >
          Essential only
        </button>
        <button
          type="button"
          onClick={() => setPreference(null)}
          className="inline-flex h-11 items-center rounded-full border border-white/[0.06] bg-background/70 px-5 text-sm font-semibold text-slate-300 transition hover:border-white/[0.12] hover:text-white"
        >
          Reset choice
        </button>
      </div>
    </div>
  );
}
