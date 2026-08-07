"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Play, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const heroVideoSrc = "/videos/ezilab-hero-background.mp4?v=3";

function SeamlessHeroVideo({ disabled }: { disabled: boolean }) {
  if (disabled) return null;

  return (
    <div className="absolute inset-0 -z-30 overflow-hidden" aria-hidden="true">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        tabIndex={-1}
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 70]);
  const contentScale = useTransform(scrollYProgress, [0, 0.8], [1, reduceMotion ? 1 : 0.96]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.18]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden py-20 sm:min-h-[calc(100svh-4.75rem)] sm:py-24"
    >
      <SeamlessHeroVideo disabled={Boolean(reduceMotion)} />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#05030d]/24" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,rgba(7,5,18,0.04)_0%,rgba(7,5,18,0.2)_72%,rgba(7,5,18,0.44)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(7,5,18,0.3)_0%,transparent_30%,transparent_68%,rgba(7,5,18,0.58)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at center, black, transparent 76%)",
        }}
      />

      <Container className="relative z-10 w-full lg:-top-5">
        <motion.div
          style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0b0718]/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-cyan shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl sm:text-xs">
              <Sparkles size={13} />
              Web &amp; App Development Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
            className="mt-7 max-w-5xl text-balance font-heading text-[2.65rem] font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[clamp(3.9rem,5.5vw,5.9rem)]"
          >
            We turn ideas into{" "}
            <span className="text-gradient-brand -mr-[0.08em] inline-block pr-[0.08em]">digital products</span>{" "}
            people love
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-white/70 sm:text-lg"
          >
            Websites, mobile apps, dashboards, and e-commerce—designed for conversion, built with modern technology, and shipped fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          >
            {[
              { value: "28+", label: "Projects delivered" },
              { value: "92%", label: "Client retention" },
              { value: "6–10", label: "Weeks average" },
            ].map((stat) => (
              <div key={stat.label} className="relative min-w-24 px-2">
                <p className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] text-white/55 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/contact"
              className="btn-glow inline-flex h-12 items-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[0.98]"
            >
              Start Your Project <ArrowUpRight size={16} />
            </Link>
            <Link
              href="#featured-projects"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-[#0b0718]/48 px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:bg-[#0b0718]/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60 active:scale-[0.98]"
            >
              <Play size={14} className="text-brand-cyan" /> See Our Work
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#services-preview"
        aria-label="Scroll to services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: reduceMotion ? 0 : [0, 5, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.5 }, y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0b0718]/45 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/55 backdrop-blur-xl transition hover:text-brand-cyan lg:inline-flex"
      >
        Explore <ArrowDown size={12} />
      </motion.a>

    </section>
  );
}
