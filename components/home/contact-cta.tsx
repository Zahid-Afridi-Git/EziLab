"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Magnetic } from "@/components/shared/magnetic";
import { RevealHeading } from "@/components/shared/reveal-heading";
import { trackPointer } from "@/lib/pointer";

export function ContactCta() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn scale>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            onPointerMove={trackPointer}
            onPointerDown={trackPointer}
            className="orbit-border relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] [--orbit-duration:8s] [--orbit-inset:0px]"
          >
            {/* Multi-layer gradient background */}
            <div className="pointer-events-none absolute inset-0">
              <div className="drift absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-brand-cyan/[0.07] blur-[80px] [--drift-duration:14s] [--drift-x:70px] [--drift-y:50px]" />
              <div className="drift absolute -right-20 -bottom-20 h-[300px] w-[300px] rounded-full bg-brand-purple/[0.07] blur-[80px] [--drift-duration:17s] [--drift-x:-60px] [--drift-y:-45px]" />
              <div className="drift absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/[0.05] blur-[60px] [--drift-duration:11s] [--drift-x:40px] [--drift-y:-30px]" />
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
            <div className="cursor-grid absolute inset-0 [--grid-size:50px]" aria-hidden="true" />
            <div className="cursor-glow absolute inset-0" aria-hidden="true" />

            <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="relative mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05]"
              >
                <span className="ping-soft absolute inset-0 rounded-2xl border border-brand-cyan/40" aria-hidden="true" />
                <Zap size={24} className="text-brand-cyan" />
              </motion.div>

              <RevealHeading
                text="Ready to build your next digital product?"
                highlight="digital product"
                className="mx-auto max-w-2xl font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
              />
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                Tell us what you need and we&apos;ll get back within 24 hours with a plan, timeline, and transparent pricing.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Magnetic className="flex-col">
                  <Link
                    href="/contact"
                    className="btn-glow btn-shine group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple px-7 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:shadow-brand-blue/40 active:scale-[0.97]"
                  >
                    Get a Free Quote <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Magnetic>
                <Magnetic className="flex-col">
                  <Link
                    href="/services"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] px-7 text-sm font-semibold text-foreground transition hover:border-brand-cyan/30 hover:bg-[var(--card-hover)] active:scale-[0.97]"
                  >
                    Explore Services
                  </Link>
                </Magnetic>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="ping-soft absolute inset-0 rounded-full bg-emerald-400 [--ping-delay:0.0s] [--ping-scale:2.8]" aria-hidden="true" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Free consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="ping-soft absolute inset-0 rounded-full bg-emerald-400 [--ping-delay:0.6s] [--ping-scale:2.8]" aria-hidden="true" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  No commitment
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="ping-soft absolute inset-0 rounded-full bg-emerald-400 [--ping-delay:1.2s] [--ping-scale:2.8]" aria-hidden="true" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
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
