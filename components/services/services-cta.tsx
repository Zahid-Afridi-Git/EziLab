"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Container } from "@/components/shared/container";

export function ServicesCTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08]"
        >
          {/* Multi-layer gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/[0.06] via-brand-blue/[0.04] to-brand-purple/[0.06]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-brand-cyan/[0.08] blur-[80px]" />
            <div className="absolute -left-20 -bottom-20 h-[250px] w-[250px] rounded-full bg-brand-purple/[0.08] blur-[80px]" />
            <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/[0.06] blur-[60px]" />
          </div>

          {/* Grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative px-8 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-white/[0.1] bg-white/[0.05] backdrop-blur-sm"
              >
                <Zap size={28} className="text-brand-cyan" />
              </motion.div>

              <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to build something{" "}
                <span className="text-gradient-brand">extraordinary</span>?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                Every project is unique. Tell us about your vision and we&apos;ll craft a tailored plan — no cookie-cutter packages, just exactly what your business needs to grow.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="btn-glow group inline-flex h-13 items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple px-8 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-brand-blue/30"
                >
                  Let&apos;s Talk
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex h-13 items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/[0.2] hover:bg-white/[0.08]"
                >
                  See Our Work
                </Link>
              </div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500"
              >
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Free consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  No commitment required
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Response within 24h
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
