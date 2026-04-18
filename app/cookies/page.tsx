import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Cookie,
  Globe2,
  MonitorCog,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { CookiePreferences } from "@/components/legal/cookie-controls";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

const LAST_UPDATED = "March 27, 2026";

const technologyCards = [
  {
    title: "Essential storage",
    text: "Local browser storage keeps theme preference and cookie choices consistent across visits.",
    icon: ShieldCheck,
  },
  {
    title: "Optional analytics",
    text: "Google Analytics is loaded only after you accept analytics cookies through the site banner or the controls below.",
    icon: BarChart3,
  },
  {
    title: "Browser-level control",
    text: "You can also block or delete cookies in your browser settings at any time.",
    icon: MonitorCog,
  },
] as const;

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Understand the cookies, local storage, and analytics technologies used on ezilab.io and manage your consent preferences.",
  alternates: {
    canonical: "https://ezilab.io/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <span className="inline-flex rounded-full border border-cyan-300/50 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              Cookies & Tracking
            </span>
            <h1 className="mt-4 max-w-4xl text-balance font-heading text-4xl font-semibold text-white sm:text-5xl">
              How cookies, local storage, and analytics controls work on ezilab.io.
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              This page explains the technologies used to remember site preferences, measure
              traffic, and honor your privacy choices. Optional analytics are disabled by default
              until you actively accept them.
            </p>
          </FadeIn>

          <FadeIn delay={0.06} className="lg:col-span-5">
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 shadow-[0_20px_60px_-32px_rgba(34,211,238,0.45)] sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Last updated
                  </p>
                  <p className="mt-2 font-heading text-xl font-semibold text-white">{LAST_UPDATED}</p>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Current setup
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Theme and consent storage are essential. Analytics cookies are optional.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 sm:col-span-2 lg:col-span-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Related policy
                  </p>
                  <Link
                    href="/privacy-policy"
                    className="mt-2 inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-cyan-100"
                  >
                    <Globe2 size={15} />
                    Read the Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {technologyCards.map((card, index) => (
            <FadeIn key={card.title} delay={0.04 * index}>
              <article className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-cyan-200">
                  <card.icon size={18} />
                </span>
                <h2 className="mt-4 font-heading text-2xl font-semibold text-white">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {card.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <section className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-white">
                1. Technologies used on this site
              </h2>
              <div className="mt-5 space-y-4">
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Cookie size={16} className="text-cyan-200" />
                    Essential local storage
                  </p>
                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                    <dt className="font-mono text-cyan-200">ezilab-theme</dt>
                    <dd className="text-slate-300">
                      Remembers whether you selected the light or dark theme.
                    </dd>
                    <dt className="font-mono text-cyan-200">ezilab-cookie-consent</dt>
                    <dd className="text-slate-300">
                      Stores whether you accepted analytics or chose essential-only browsing.
                    </dd>
                  </dl>
                </article>

                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <BarChart3 size={16} className="text-cyan-200" />
                    Google Analytics cookies after consent
                  </p>
                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                    <dt className="font-mono text-cyan-200">_ga</dt>
                    <dd className="text-slate-300">
                      Used by Google Analytics to distinguish visitors across visits.
                    </dd>
                    <dt className="font-mono text-cyan-200">_ga_*</dt>
                    <dd className="text-slate-300">
                      Used by Google Analytics to persist session state and related measurement
                      details for the property.
                    </dd>
                  </dl>
                </article>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.06} className="lg:col-span-5">
            <CookiePreferences className="h-full" />
          </FadeIn>
        </div>

        <div className="mt-5 space-y-5">
          <FadeIn delay={0.08}>
            <section className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-white">
                2. How consent works on EziLab
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  "On your first visit, a banner asks whether you want optional analytics enabled.",
                  "If you choose Essential only, Google Analytics stays off and analytics cookies are cleared from this browser when possible.",
                  "If you choose Accept analytics, the site loads Google Analytics so EziLab can review traffic and engagement trends.",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 text-sm leading-relaxed text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={0.12}>
            <section className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-white">
                3. Browser controls and third-party settings
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <MonitorCog size={16} className="text-cyan-200" />
                    Browser settings
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Most browsers let you delete saved cookies, block future cookies, or limit
                    site storage by domain. Those settings apply in addition to the controls on
                    this page.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <SlidersHorizontal size={16} className="text-cyan-200" />
                    Google Analytics opt-out
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Google also provides a browser add-on that can disable Google Analytics across
                    websites if you prefer broader control beyond this site.
                  </p>
                </article>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.16}>
            <section className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-white">
                4. Updates and contact
              </h2>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Cookie technologies and measurement setup can evolve as the website grows. Material
                updates will be reflected on this page with a new revision date. If you have
                questions about tracking or privacy, use the contact page or email EziLab directly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/privacy-policy"
                  className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-[#030712] transition hover:brightness-110"
                >
                  View Privacy Policy
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center rounded-full border border-white/[0.08] px-5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
                >
                  Contact EziLab
                </Link>
              </div>
            </section>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
