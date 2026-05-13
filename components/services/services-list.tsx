"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Brush,
  Globe,
  Headset,
  LayoutDashboard,
  ShoppingBag,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { services } from "@/data/services";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

const serviceIcons: Record<string, LucideIcon> = {
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "dashboard-admin-panels": LayoutDashboard,
  "ecommerce-solutions": ShoppingBag,
  "branding-ui-design": Brush,
  "maintenance-support": Headset,
};

const serviceGradients: Record<string, { from: string; to: string; accent: string }> = {
  "web-development": { from: "from-cyan-500/20", to: "to-blue-500/5", accent: "text-brand-cyan" },
  "mobile-app-development": { from: "from-blue-500/20", to: "to-purple-500/5", accent: "text-brand-blue" },
  "dashboard-admin-panels": { from: "from-purple-500/20", to: "to-pink-500/5", accent: "text-brand-purple" },
  "ecommerce-solutions": { from: "from-emerald-500/20", to: "to-cyan-500/5", accent: "text-brand-cyan" },
  "branding-ui-design": { from: "from-pink-500/20", to: "to-purple-500/5", accent: "text-brand-blue" },
  "maintenance-support": { from: "from-violet-500/20", to: "to-blue-500/5", accent: "text-brand-purple" },
};

/* Tech stacks per service */
const serviceTech: Record<string, string[]> = {
  "web-development": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  "mobile-app-development": ["React Native", "Expo", "TypeScript", "Firebase"],
  "dashboard-admin-panels": ["Next.js", "Prisma", "PostgreSQL", "Chart.js"],
  "ecommerce-solutions": ["Shopify", "Next.js", "Stripe", "Sanity CMS"],
  "branding-ui-design": ["Figma", "Adobe Suite", "Framer", "Storybook"],
  "maintenance-support": ["GitHub Actions", "Sentry", "Vercel Analytics", "Uptime Robot"],
};

export function ServicesList() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-gradient-brand">
              What We Offer
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Services built for growth
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              We don&apos;t just build — we craft digital experiences that convert visitors into customers.
            </p>
          </div>
        </FadeIn>

        {/* Bento-style layout */}
        <div className="mt-14 space-y-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug] ?? Globe;
            const gradient = serviceGradients[service.slug] ?? serviceGradients["web-development"];
            const techs = serviceTech[service.slug] ?? [];
            const isExpanded = expandedService === service.slug;
            const isEven = index % 2 === 0;

            return (
              <FadeIn key={service.slug} delay={index * 0.05}>
                <motion.article
                  layout
                  onClick={() => setExpandedService(isExpanded ? null : service.slug)}
                  className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.14]"
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background that shifts on hover */}
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  {/* Floating accent orb */}
                  <div className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-60 group-hover:right-[-10%] group-hover:top-[-10%]`} />

                  <div className={`relative flex flex-col gap-6 p-6 sm:p-8 lg:p-10 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    {/* Left/Right: Main content */}
                    <div className="flex-1 space-y-4">
                      {/* Service number + icon */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <span className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent blur-sm" />
                          <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05] backdrop-blur-sm">
                            <Icon size={24} className={gradient.accent} />
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                            0{index + 1}
                          </span>
                          <h3 className="font-heading text-xl font-bold text-white sm:text-2xl lg:text-[1.65rem]">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
                        {service.summary}
                      </p>

                      {/* Who it's for - pill */}
                      <div className="flex items-center gap-2">
                        <Sparkles size={12} className={gradient.accent} />
                        <span className="text-xs font-medium text-slate-400">
                          Built for: <span className="text-slate-200">{service.forWho}</span>
                        </span>
                      </div>
                    </div>

                    {/* Right/Left: Deliverables + Tech */}
                    <div className="flex flex-1 flex-col justify-center gap-5 lg:max-w-md">
                      {/* Deliverables as a visual checklist */}
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.deliverables.map((deliverable, i) => (
                          <motion.div
                            key={deliverable}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2.5 rounded-xl border border-white/[0.04] bg-white/[0.03] px-3.5 py-2.5 transition group-hover:border-white/[0.08] group-hover:bg-white/[0.05]"
                          >
                            <CheckCircle2 size={14} className={`shrink-0 ${gradient.accent}`} />
                            <span className="text-[13px] font-medium text-slate-200">
                              {deliverable}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-slate-400 transition group-hover:border-white/[0.1] group-hover:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expanded section with value + CTA */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/[0.06] px-6 py-6 sm:px-8 lg:px-10">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="max-w-lg">
                              <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
                                Why this matters
                              </p>
                              <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
                                {service.value}
                              </p>
                            </div>
                            <Link
                              href="/contact"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple px-6 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:shadow-xl hover:shadow-brand-blue/30"
                            >
                              Get Started <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom expand indicator */}
                  <div className="flex items-center justify-center pb-4">
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04]"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-slate-400">
                        <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </Container>

      <div className="section-divider mt-16 sm:mt-24" />
    </section>
  );
}
