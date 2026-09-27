"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Gauge, Layers3, LifeBuoy, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";
import { Container } from "@/components/shared/container";
import { CountUp } from "@/components/shared/count-up";
import { FadeIn } from "@/components/shared/fade-in";
import { RevealHeading } from "@/components/shared/reveal-heading";

const stats = [
  { value: "28+", label: "Products delivered" },
  { value: "9", label: "Industries understood" },
  { value: "6–10", label: "Weeks average delivery" },
  { value: "92%", label: "Clients who return" },
];

const reasons: Array<{ title: string; eyebrow: string; desc: string; icon: LucideIcon }> = [
  {
    title: "The right technology, not the trendy one",
    eyebrow: "Foundation",
    desc: "We choose a maintainable stack around your users, roadmap, and operating reality—then build it for long-term ownership.",
    icon: Sparkles,
  },
  {
    title: "One connected delivery team",
    eyebrow: "Momentum",
    desc: "Strategy, interface design, engineering, and deployment move through one process, removing handoff gaps and duplicated decisions.",
    icon: Layers3,
  },
  {
    title: "Performance is part of the product",
    eyebrow: "Quality",
    desc: "Speed, accessibility, search visibility, and conversion are built into the experience from the first production decision.",
    icon: Gauge,
  },
  {
    title: "Launch is the start of the relationship",
    eyebrow: "Partnership",
    desc: "We stay available for monitoring, improvements, new features, and the practical decisions that appear as your product grows.",
    icon: LifeBuoy,
  },
];

export function TrustSection() {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({ target: timelineRef, offset: ["start 70%", "end 55%"] });
  const timelineHead = useTransform(timelineProgress, (value) => `${value * 100}%`);

  return (
    <section className="section-flow relative isolate overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -left-52 top-1/4 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-blue/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute -right-52 bottom-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-purple/[0.07] blur-[140px]" />

      <Container>
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="gradient-glint text-sm font-semibold uppercase tracking-[0.1em]">Why EziLab</span>
              <RevealHeading
                text="A clearer path from idea to impact"
                className="text-heading mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
              />
            </div>
            <p className="text-body max-w-2xl text-base leading-7 lg:justify-self-end lg:text-lg">
              Strong products come from connected decisions. Our process keeps business context, design quality, and engineering discipline moving in the same direction.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 border-y border-[var(--card-border)] sm:mt-16 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="relative px-3 py-6 sm:px-6 sm:py-8 lg:px-8"
            >
              {index > 0 && <span className="absolute bottom-[18%] left-0 top-[18%] w-px bg-[var(--card-border)] max-lg:hidden" />}
              {index === 1 || index === 3 ? <span className="absolute bottom-[18%] left-0 top-[18%] w-px bg-[var(--card-border)] lg:hidden" /> : null}
              <p className="text-heading font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                <CountUp value={stat.value} delay={0.15 + index * 0.1} />
              </p>
              <p className="mt-2 max-w-32 text-[11px] font-medium leading-4 text-muted sm:text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div ref={timelineRef} className="relative mt-16 sm:mt-20">
          <div className="absolute bottom-8 left-[1.45rem] top-8 w-px md:left-1/2 md:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/10 via-brand-purple/55 to-brand-cyan/10" />
            <motion.div
              className="absolute inset-0 origin-top bg-gradient-to-b from-brand-cyan via-brand-blue to-brand-purple shadow-[0_0_14px_rgba(99,102,241,.7)]"
              style={{ scaleY: timelineProgress }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan shadow-[0_0_16px_4px_rgba(34,211,238,.6)]"
              style={{ top: timelineHead }}
            />
          </div>

          <div className="space-y-6 md:space-y-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const left = index % 2 === 0;
              return (
                <motion.article
                  key={reason.title}
                  initial={reduceMotion ? false : { opacity: 0, x: left ? -28 : 28, y: 12 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid md:grid-cols-[1fr_5rem_1fr] md:items-center"
                >
                  <div className={`ml-16 py-5 md:ml-0 md:py-9 ${left ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-3 md:pl-10"}`}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan">{reason.eyebrow}</p>
                    <h3 className="text-heading mt-2 font-heading text-xl font-semibold leading-snug sm:text-2xl">{reason.title}</h3>
                    <p className="text-body mt-3 text-sm leading-6">{reason.desc}</p>
                  </div>

                  <motion.div
                    whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 4 }}
                    className="surface-glass absolute left-0 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-2xl text-brand-purple md:static md:col-start-2 md:row-start-1 md:mx-auto md:h-14 md:w-14"
                    style={{ boxShadow: "0 18px 42px -20px rgba(168,85,247,.75)" }}
                  >
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl border border-brand-purple/70"
                      initial={{ opacity: 0, scale: 1 }}
                      whileInView={reduceMotion ? undefined : { opacity: [0, 0.9, 0], scale: [1, 1.05, 1.75] }}
                      viewport={{ once: true, amount: 1 }}
                      transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
                    />
                    <Icon size={20} />
                    <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border border-[var(--card-border)] bg-background px-1 font-heading text-[9px] font-bold text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.12} className="mt-12 text-center sm:mt-16">
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition hover:gap-3 hover:text-brand-purple">
            See how we work <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
