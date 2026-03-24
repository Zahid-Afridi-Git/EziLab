"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, LayoutDashboard, Smartphone, Sparkles } from "lucide-react";

import { siteConfig } from "@/data/site";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

export function Hero() {
  const items = [
    {
      title: "Web & landing pages",
      detail: "Conversion-first experiences",
      icon: Globe2,
    },
    {
      title: "Dashboards & admin",
      detail: "Operational visibility tools",
      icon: LayoutDashboard,
    },
    {
      title: "Mobile products",
      detail: "Cross-platform experiences",
      icon: Smartphone,
    },
    {
      title: "AI prototypes",
      detail: "Fast validation for new ideas",
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative overflow-hidden pb-24 pt-[4.5rem] sm:pb-28 sm:pt-24 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-20%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/18 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-blue-500/18 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-slate-950/90" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">
              Organization Portfolio
            </span>
            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building modern web, mobile, and digital solutions through EziLab.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              {siteConfig.description} We partner with startups and organizations to launch
              products that are fast, clear, and built for long-term scale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
              >
                Start Your Project
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-700 px-6 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-200 sm:w-auto"
              >
                Our Services
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 0.75, 0.4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl bg-gradient-to-br from-cyan-300/70 via-blue-500/35 to-cyan-200/65 p-[1px]"
            >
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/75 p-4 shadow-[0_28px_50px_-28px_rgba(34,211,238,0.6)] backdrop-blur-xl sm:p-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  <Sparkles size={14} />
                  What we build
                </p>
                <div className="mt-4 grid gap-3 sm:hidden">
                  <div className="grid grid-cols-2 gap-3">
                    {items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="rounded-xl border border-slate-800 bg-slate-950/80 p-3"
                        >
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                            <Icon size={16} />
                          </span>
                          <p className="mt-3 text-sm font-semibold text-white">{item.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-400">
                            {item.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="rounded-xl border border-cyan-300/25 bg-slate-950/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                      2025-2026 Focus
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Case-study delivery with measurable business outcomes.
                    </p>
                  </div>
                </div>

                <motion.ul
                  className="mt-5 hidden space-y-4 sm:block"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
                  }}
                >
                  {items.map((item) => (
                    <motion.li
                      key={item.title}
                      className="flex gap-3 text-sm text-slate-300"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>
                        <span className="font-medium text-white">{item.title}</span>
                        <span className="text-slate-400"> - {item.detail}</span>
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-6 hidden rounded-xl border border-cyan-300/25 bg-slate-950/80 p-4 sm:block">
                  <p className="text-sm font-medium text-white">
                    2025-2026 Focus: Case-study quality delivery with measurable business outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
