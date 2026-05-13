"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description: "We dive deep into your goals, audience, and market to define a clear product strategy.",
    gradient: "from-brand-cyan to-brand-blue",
    accent: "text-brand-cyan",
    bg: "bg-brand-cyan/10",
    border: "border-brand-cyan/25",
    number: "01",
  },
  {
    icon: PenTool,
    title: "Design & Prototype",
    description: "Interactive wireframes and polished UI designs that bring your vision to life before a single line of code.",
    gradient: "from-brand-blue to-brand-purple",
    accent: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/25",
    number: "02",
  },
  {
    icon: Code2,
    title: "Build & Iterate",
    description: "Clean, scalable code with modern frameworks. We ship fast and iterate based on real feedback.",
    gradient: "from-brand-purple to-brand-cyan",
    accent: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/25",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Launch & Optimize",
    description: "Production deployment with performance tuning, SEO, and analytics — ready for real users.",
    gradient: "from-brand-cyan to-brand-blue",
    accent: "text-brand-cyan",
    bg: "bg-brand-cyan/10",
    border: "border-brand-cyan/25",
    number: "04",
  },
  {
    icon: HeartHandshake,
    title: "Grow & Support",
    description: "Ongoing maintenance, feature updates, and scaling support to keep your product ahead.",
    gradient: "from-brand-blue to-brand-purple",
    accent: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/25",
    number: "05",
  },
];

export function ServicesProcess() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-gradient-brand">
              Our Process
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              From idea to impact
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              A battle-tested workflow that turns your vision into a product users love.
            </p>
          </div>
        </FadeIn>

        {/* Horizontal scrollable cards on mobile, grid on desktop */}
        <div className="mt-14">
          {/* Desktop: staggered grid */}
          <div className="hidden gap-4 md:grid md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`group relative flex h-full flex-col rounded-[1.5rem] border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] ${
                      index % 2 === 0 ? "mt-0" : "mt-8"
                    }`}
                  >
                    {/* Top gradient line */}
                    <div className={`absolute inset-x-4 top-0 h-[2px] rounded-full bg-gradient-to-r ${step.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-80`} />

                    {/* Number */}
                    <span className="font-heading text-[2.5rem] font-bold leading-none text-white/[0.04] transition-colors group-hover:text-white/[0.08]">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <span className={`mt-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${step.border} ${step.bg} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={18} className={step.accent} />
                    </span>

                    {/* Content */}
                    <h3 className="mt-4 font-heading text-[15px] font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-400">
                      {step.description}
                    </p>

                    {/* Connector arrow (not on last) */}
                    {index < steps.length - 1 && (
                      <div className="pointer-events-none absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-white/[0.15] xl:block">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>

          {/* Mobile: vertical stack with connecting line */}
          <div className="relative space-y-4 md:hidden">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-7 top-0 w-px bg-gradient-to-b from-brand-cyan via-brand-blue to-brand-purple opacity-20" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={index * 0.06}>
                  <div className="relative flex gap-4 pl-4">
                    {/* Dot on the line */}
                    <div className="relative z-10 mt-6 flex h-7 w-7 shrink-0 items-center justify-center">
                      <span className={`h-3 w-3 rounded-full ${step.bg} ring-[3px] ring-[var(--background)]`}>
                        <span className={`block h-full w-full rounded-full ${step.accent.replace("text-", "bg-")} opacity-70`} />
                      </span>
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border ${step.border} ${step.bg}`}>
                          <Icon size={16} className={step.accent} />
                        </span>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                            Step {step.number}
                          </span>
                          <h3 className="font-heading text-sm font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-3 text-[13px] leading-relaxed text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="section-divider mt-16 sm:mt-24" />
    </section>
  );
}
