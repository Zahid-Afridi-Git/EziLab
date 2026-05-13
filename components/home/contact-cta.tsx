"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

export function ContactCta() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn scale>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02]"
          >
            {/* Multi-layer gradient background */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-brand-cyan/[0.07] blur-[80px]" />
              <div className="absolute -right-20 -bottom-20 h-[300px] w-[300px] rounded-full bg-brand-purple/[0.07] blur-[80px]" />
              <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/[0.05] blur-[60px]" />
            </div>

            {/* Grid pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05]"
              >
                <Zap size={24} className="text-brand-cyan" />
              </motion.div>

              <h2 className="mx-auto max-w-2xl font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Ready to build your next{" "}
                <span className="text-gradient-brand">digital product</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                Tell us what you need and we&apos;ll get back within 24 hours with a plan, timeline, and transparent pricing.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple px-7 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:shadow-brand-blue/40 active:scale-[0.97]"
                >
                  Get a Free Quote <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] px-7 text-sm font-semibold text-foreground transition hover:border-brand-cyan/30 hover:bg-[var(--card-hover)] active:scale-[0.97]"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Free consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  No commitment
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  24h response
                </span>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </Container>
    </section>
  );
}
