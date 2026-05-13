"use client";

import { motion } from "framer-motion";
import { Award, Clock, Repeat, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

const stats = [
  { icon: Target, value: "28+", label: "Projects Delivered", color: "text-brand-cyan", bg: "bg-brand-cyan/10", border: "border-brand-cyan/25" },
  { icon: Award, value: "9", label: "Industries Served", color: "text-brand-blue", bg: "bg-brand-blue/10", border: "border-brand-blue/25" },
  { icon: Clock, value: "6–10 wks", label: "Avg. Delivery", color: "text-brand-purple", bg: "bg-brand-purple/10", border: "border-brand-purple/25" },
  { icon: Repeat, value: "92%", label: "Client Retention", color: "text-brand-cyan", bg: "bg-brand-cyan/10", border: "border-brand-cyan/25" },
];

const reasons = [
  { title: "Modern Tech Stack", desc: "React, Next.js, TypeScript, React Native — we use what works best for your product." },
  { title: "End-to-End Delivery", desc: "From strategy and design to development and deployment — one team, one process." },
  { title: "Performance First", desc: "Every product is optimized for speed, SEO, and conversion from day one." },
  { title: "Ongoing Support", desc: "We don't disappear after launch. Maintenance, updates, and scaling support included." },
];

export function TrustSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-brand-blue/[0.03] blur-[130px]" />
        <div className="absolute right-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-purple/[0.03] blur-[100px]" />
      </div>

      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-gradient-brand">
              Why EziLab
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built different, delivered better
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              We combine technical excellence with business understanding to ship products that actually move the needle.
            </p>
          </div>
        </FadeIn>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center transition hover:border-white/[0.12] hover:bg-white/[0.04] sm:p-6"
              >
                {/* Hover gradient */}
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent ${stat.bg.replace("bg-", "to-")} opacity-0 transition-opacity group-hover:opacity-100`} />

                <div className="relative">
                  <span className={`mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl border ${stat.border} ${stat.bg}`}>
                    <Icon size={18} className={stat.color} />
                  </span>
                  <p className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reasons grid */}
        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-2">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 0.06}>
              <div className="group flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-white/[0.12] hover:bg-white/[0.04] sm:p-6">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20">
                  <span className="font-heading text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white sm:text-lg">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan transition hover:text-brand-blue"
          >
            Learn more about our team <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </Container>

      <div className="section-divider mt-14 sm:mt-20" />
    </section>
  );
}
