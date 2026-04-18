import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Database,
  Globe2,
  LockKeyhole,
  Mail,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

import { siteConfig } from "@/data/site";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

const LAST_UPDATED = "March 27, 2026";

const overviewCards = [
  {
    title: "What we collect",
    text: "Contact details you submit, consent choices, theme preferences, and site usage data from Google Analytics only when you accept analytics.",
    icon: Database,
  },
  {
    title: "Why we use it",
    text: "To respond to inquiries, operate the website, improve performance, and understand which pages help visitors move toward contact.",
    icon: ShieldCheck,
  },
  {
    title: "Who receives it",
    text: "EziLab and the service providers used to deliver this site, including Web3Forms for inquiries and Google Analytics for optional measurement.",
    icon: Globe2,
  },
] as const;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how EziLab collects, uses, stores, and protects information submitted through ezilab.io, including analytics and contact-form data.",
  alternates: {
    canonical: "https://ezilab.io/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <span className="inline-flex rounded-full border border-cyan-300/50 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              Privacy Policy
            </span>
            <h1 className="mt-4 max-w-4xl text-balance font-heading text-4xl font-semibold text-white sm:text-5xl">
              How EziLab handles visitor, inquiry, and analytics data on ezilab.io.
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              This policy explains what information is collected through the website, why it is
              collected, how it is used, and the choices available to visitors. It applies to
              activity on <span className="text-slate-100">ezilab.io</span> and to information
              submitted through the contact form.
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
                    Privacy contact
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-cyan-100"
                  >
                    <Mail size={15} />
                    {siteConfig.email}
                  </a>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 sm:col-span-2 lg:col-span-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Applies to
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Website visitors, contact-form submissions, and analytics activity associated
                    with ezilab.io.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {overviewCards.map((card, index) => (
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

        <div className="mt-10 space-y-5">
          <FadeIn>
            <section className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-white">
                1. Information EziLab collects
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <MessageSquareText size={16} className="text-cyan-200" />
                    Information you submit directly
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    <li className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>Name, email address, and project details submitted through the contact form.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>Any follow-up information you choose to send by email or WhatsApp.</span>
                    </li>
                  </ul>
                </article>

                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <BarChart3 size={16} className="text-cyan-200" />
                    Information collected automatically
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    <li className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>Basic device, browser, and page-interaction data through Google Analytics if you accept analytics cookies.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>Local browser storage used to remember your theme selection and cookie preference.</span>
                    </li>
                  </ul>
                </article>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.04}>
            <section className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-white">
                2. How that information is used
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "To respond to project inquiries and continue conversations you initiate.",
                  "To keep the site working properly, including theme preference and privacy choice storage.",
                  "To understand which pages and flows are useful so the website can be improved.",
                  "To monitor site reliability, prevent misuse, and protect the website and its visitors.",
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

          <FadeIn delay={0.08}>
            <section className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-white">
                3. Services and processors used on the site
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <h3 className="font-heading text-xl font-semibold text-white">Web3Forms</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Used to route and deliver contact-form submissions so EziLab can receive and
                    respond to inquiries.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <h3 className="font-heading text-xl font-semibold text-white">Google Analytics</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Used only after analytics consent to measure visits, page engagement, and
                    overall website performance.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <h3 className="font-heading text-xl font-semibold text-white">Infrastructure providers</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Hosting, delivery, and security providers may process technical data needed to
                    serve the website safely and reliably.
                  </p>
                </article>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.12}>
            <section className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-white">
                4. Retention, security, and visitor choices
              </h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-12">
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 lg:col-span-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <LockKeyhole size={16} className="text-cyan-200" />
                    Retention
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Inquiry records are kept only as long as needed to handle business discussions,
                    maintain project history, or meet legal and operational requirements.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 lg:col-span-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <ShieldCheck size={16} className="text-cyan-200" />
                    Security
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Reasonable technical and organizational measures are used to protect data, but
                    no internet transmission or storage method can be guaranteed as perfectly
                    secure.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 lg:col-span-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Mail size={16} className="text-cyan-200" />
                    Your choices
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    You can avoid optional analytics, change your cookie preference, clear browser
                    storage, or request access or deletion by contacting EziLab.
                  </p>
                </article>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.16}>
            <section className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-white">
                5. International use and contact
              </h2>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
                EziLab serves organizations in multiple regions, so information submitted through
                the website may be processed in countries other than your own. If you have a
                privacy request or need clarification about this policy, contact{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-cyan-200 transition hover:text-cyan-100"
                >
                  {siteConfig.email}
                </a>
                . Please do not send sensitive confidential information through the public contact
                form.
              </p>
            </section>
          </FadeIn>
        </div>

        <FadeIn delay={0.18} className="mt-12">
          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-white">
              Want to review tracking details too?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              The cookies page explains the essential storage used on the site, the optional
              analytics cookies tied to Google Analytics, and how to update your choice later.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/cookies"
                className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-[#030712] transition hover:brightness-110"
              >
                Review Cookies
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full border border-white/[0.08] px-5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
              >
                Contact EziLab
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
