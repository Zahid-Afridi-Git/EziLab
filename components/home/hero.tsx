"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Container } from "@/components/shared/container";

const showcaseImages = [
  { src: "/images/projects/StarRental/starrental website.png", alt: "StarRental Car Hire" },
  { src: "/images/projects/sukoon/hero-sectin.png", alt: "Sukoon App" },
  { src: "/images/projects/eziwalk/eziwalk-hero.png", alt: "EziWalk Store" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pb-8 pt-[4.5rem] sm:pb-16 sm:pt-28 lg:pb-20">
      {/* ═══ Immersive 3D Background ═══ */}

      {/* Futuristic grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient mesh background */}
      <div className="gradient-mesh" />

      {/* Large animated gradient orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[-5%] top-[5%] h-[500px] w-[500px] rounded-full bg-brand-cyan/[0.06] blur-[130px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -25, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute right-[-5%] top-[10%] h-[450px] w-[450px] rounded-full bg-brand-purple/[0.06] blur-[130px]"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="pointer-events-none absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-brand-blue/[0.04] blur-[120px]"
      />

      {/* Animated light beams */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.1, 0.35, 0.1], y: ["-100%", "200%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute left-[18%] top-0 w-[1px] h-[45%] bg-gradient-to-b from-transparent via-brand-cyan/30 to-transparent"
        />
        <motion.div
          animate={{ opacity: [0.08, 0.25, 0.08], y: ["-100%", "200%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute right-[28%] top-0 w-[1px] h-[35%] bg-gradient-to-b from-transparent via-brand-purple/25 to-transparent"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.18, 0.05], y: ["-100%", "200%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute left-[60%] top-0 w-[1px] h-[50%] bg-gradient-to-b from-transparent via-brand-blue/20 to-transparent"
        />
        <motion.div
          animate={{ opacity: [0.04, 0.12, 0.04], y: ["-100%", "200%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1.5 }}
          className="absolute left-[82%] top-0 w-[1px] h-[30%] bg-gradient-to-b from-transparent via-brand-cyan/15 to-transparent"
        />
      </div>

      {/* Radial vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,7,18,0.5)_100%)]" />

      <Container>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10">
          {/* Two-column layout: text + visual */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: Content */}
            <div className="max-w-2xl lg:max-w-none">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-cyan backdrop-blur-sm sm:text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
                  </span>
                  Web & App Development Studio
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-6 font-heading text-[2.25rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
              >
                We turn ideas into{" "}
                <span className="text-gradient-brand">digital products</span>{" "}
                people love
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted sm:text-lg"
              >
                Websites, mobile apps, dashboards, and e-commerce — designed for conversion, built with modern tech, shipped fast.
              </motion.p>

              {/* Stats inline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 flex flex-wrap gap-6 sm:gap-8"
              >
                {[
                  { value: "28+", label: "Projects" },
                  { value: "92%", label: "Retention" },
                  { value: "6-10", label: "Weeks Avg" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                    <p className="text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="btn-glow inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple px-7 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:shadow-brand-blue/40 active:scale-[0.97]"
                >
                  Start Your Project
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-6 text-sm font-semibold text-foreground transition hover:border-brand-cyan/30 hover:bg-[var(--card-hover)] active:scale-[0.97]"
                >
                  <Play size={14} className="text-brand-cyan" />
                  See Our Work
                </Link>
              </motion.div>
            </div>

            {/* Right: Visual showcase */}
            <motion.div
              style={{ scale: imageScale }}
              className="relative hidden lg:block"
            >
              <motion.div
                initial={{ opacity: 0, y: 40, rotateY: -5 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                {/* Main project image */}
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-slate-900/80 shadow-2xl shadow-black/40">
                  <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-black/30 px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-[11px] text-muted">starrental.com.au</span>
                  </div>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={showcaseImages[0].src}
                      alt={showcaseImages[0].alt}
                      fill
                      sizes="600px"
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                </div>

                {/* Floating mobile app */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute -bottom-6 -right-6 w-[120px]"
                >
                  <div className="overflow-hidden rounded-[1.25rem] border-[2.5px] border-[#3a3a3c] bg-black shadow-xl shadow-brand-purple/20">
                    <div className="mx-auto mb-0.5 h-1 w-6 rounded-full bg-[#3a3a3c]" />
                    <div className="relative aspect-[9/19] overflow-hidden rounded-[0.9rem]">
                      <Image
                        src={showcaseImages[1].src}
                        alt={showcaseImages[1].alt}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-2xl border border-white/[0.1] bg-[var(--card)] px-4 py-3 shadow-lg backdrop-blur-sm"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted">Delivered</p>
                  <p className="mt-0.5 font-heading text-lg font-bold text-white">28+ Projects</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile: showcase strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 lg:hidden"
          >
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {showcaseImages.map((img) => (
                <div key={img.alt} className="relative h-[160px] w-[260px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/50 shadow-lg">
                  <Image src={img.src} alt={img.alt} fill sizes="260px" className="object-contain p-2" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <div className="section-divider mt-14 sm:mt-20" />
    </section>
  );
}
