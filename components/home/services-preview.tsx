"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Brush, CheckCircle2, Globe, Headset, LayoutDashboard, ShoppingBag, Smartphone } from "lucide-react";
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

const serviceAccents: Record<string, { color: string; bg: string; border: string; glow: string }> = {
  "web-development": { color: "text-brand-cyan", bg: "bg-brand-cyan/10", border: "border-brand-cyan/25", glow: "shadow-brand-cyan/10" },
  "mobile-app-development": { color: "text-brand-blue", bg: "bg-brand-blue/10", border: "border-brand-blue/25", glow: "shadow-brand-blue/10" },
  "dashboard-admin-panels": { color: "text-brand-purple", bg: "bg-brand-purple/10", border: "border-brand-purple/25", glow: "shadow-brand-purple/10" },
  "ecommerce-solutions": { color: "text-brand-cyan", bg: "bg-brand-cyan/10", border: "border-brand-cyan/25", glow: "shadow-brand-cyan/10" },
  "branding-ui-design": { color: "text-brand-blue", bg: "bg-brand-blue/10", border: "border-brand-blue/25", glow: "shadow-brand-blue/10" },
  "maintenance-support": { color: "text-brand-purple", bg: "bg-brand-purple/10", border: "border-brand-purple/25", glow: "shadow-brand-purple/10" },
};

const defaultAccent = { color: "text-brand-cyan", bg: "bg-brand-cyan/10", border: "border-brand-cyan/25", glow: "shadow-brand-cyan/10" };

export function ServicesPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const activeAccent = serviceAccents[activeService.slug] ?? defaultAccent;
  const ActiveIcon = serviceIcons[activeService.slug] ?? Globe;

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-brand-purple/[0.03] blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-cyan/[0.03] blur-[100px]" />
      </div>

      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-gradient-brand">
              What We Do
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Everything you need to go digital
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              From websites to mobile apps — we handle design, development, and deployment so you can focus on growing your business.
            </p>
          </div>
        </FadeIn>

        {/* Two-panel layout: sidebar tabs + content */}
        <div className="mt-12 sm:mt-16 lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Left: Service tabs */}
          <FadeIn delay={0.1} className="lg:col-span-4">
            <div className="flex gap-2 overflow-x-auto pb-4 lg:flex-col lg:overflow-visible lg:pb-0">
              {services.map((service, i) => {
                const Icon = serviceIcons[service.slug] ?? Globe;
                const accent = serviceAccents[service.slug] ?? defaultAccent;
                const isActive = i === activeIndex;

                return (
                  <button
                    key={service.slug}
                    onClick={() => setActiveIndex(i)}
                    className={`group relative flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all duration-300 lg:w-full lg:px-5 lg:py-4 ${
                      isActive
                        ? `border ${accent.border} ${accent.bg} shadow-lg ${accent.glow}`
                        : "border border-transparent hover:border-white/[0.06] hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                      isActive ? `${accent.bg} border ${accent.border}` : "bg-white/[0.04] border border-white/[0.06]"
                    }`}>
                      <Icon size={18} className={isActive ? accent.color : "text-slate-400"} />
                    </span>
                    <div className="min-w-0">
                      <p className={`truncate text-sm font-semibold transition ${isActive ? "text-white" : "text-slate-300"}`}>
                        {service.title}
                      </p>
                      <p className="hidden truncate text-xs text-muted lg:block">
                        {service.forWho}
                      </p>
                    </div>
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceIndicator"
                        className={`absolute right-3 hidden h-2 w-2 rounded-full lg:block ${accent.color.replace("text-", "bg-")}`}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Right: Active service content */}
          <FadeIn delay={0.15} className="mt-6 lg:col-span-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.slug}
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden rounded-[1.75rem] border border-white/[0.06] bg-white/[0.02]"
              >
                {/* Top gradient accent */}
                <div className={`h-1 bg-gradient-to-r from-transparent ${activeAccent.color.replace("text-", "via-")} to-transparent opacity-40`} />

                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <span className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${activeAccent.border} ${activeAccent.bg}`}>
                      <ActiveIcon size={26} className={activeAccent.color} />
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white">
                        {activeService.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{activeService.forWho}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-[15px] leading-relaxed text-slate-300">
                    {activeService.summary}
                  </p>

                  {/* Value prop */}
                  <div className="mt-4 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3">
                    <p className="text-sm leading-relaxed text-slate-400">
                      <span className="font-semibold text-slate-200">Value: </span>
                      {activeService.value}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="mt-6">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-muted">
                      What We Deliver
                    </p>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {activeService.deliverables.map((deliverable, i) => (
                        <motion.div
                          key={deliverable}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: i * 0.05 }}
                          className="flex items-center gap-2.5 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 transition hover:border-white/[0.08] hover:bg-white/[0.04]"
                        >
                          <CheckCircle2 size={15} className={`shrink-0 ${activeAccent.color}`} />
                          <span className="text-[13px] font-medium text-slate-200">
                            {deliverable}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple px-5 text-[13px] font-semibold text-white transition hover:shadow-lg hover:shadow-brand-blue/20"
                    >
                      Get Started <ArrowRight size={13} />
                    </Link>
                    <Link
                      href="/services"
                      className={`inline-flex items-center gap-1 text-[13px] font-semibold ${activeAccent.color} transition hover:underline`}
                    >
                      Learn more <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </FadeIn>
        </div>
      </Container>

      <div className="section-divider mt-14 sm:mt-20" />
    </section>
  );
}
