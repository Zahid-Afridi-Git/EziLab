"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, CheckCircle2, Globe2, LayoutDashboard, Smartphone, ShoppingBag, Terminal, Code2 } from "lucide-react";
import { Container } from "@/components/shared/container";

const capabilities = [
  { icon: Globe2, label: "Websites", desc: "Landing pages, portfolios, business sites" },
  { icon: Smartphone, label: "Mobile Apps", desc: "iOS & Android with React Native" },
  { icon: LayoutDashboard, label: "Dashboards", desc: "Admin panels & internal tools" },
  { icon: ShoppingBag, label: "E-commerce", desc: "Online stores & checkout flows" },
];

const highlights = ["28+ projects delivered", "6–10 week average delivery", "92% client retention"];

const codeLines = [
  { text: "const", kw: true, rest: " app = createProject({" },
  { text: "  name:", kw: false, rest: ' "your-next-product",' },
  { text: "  stack:", kw: false, rest: " [React, Next.js, TypeScript]," },
  { text: "  platforms:", kw: false, rest: " [web, mobile, dashboard]," },
  { text: "  status:", kw: false, rest: ' "launching-soon" 🚀' },
  { text: "});", kw: false, rest: "" },
];

const floatingScreens = [
  { src: "/images/projects/tak8/tak8-hero.png", alt: "TAK8", pos: "left-[-6%] top-[20%] w-[240px] -rotate-6", d: 0.3 },
  { src: "/images/projects/sukoon/hero-sectin.png", alt: "Sukoon", pos: "right-[-5%] top-[14%] w-[200px] rotate-6", d: 0.5 },
  { src: "/images/projects/eziwalk/eziwalk-hero.png", alt: "EziWalk", pos: "left-[-3%] bottom-[10%] w-[220px] rotate-3", d: 0.7 },
  { src: "/images/projects/tak8/tak8-booking.png", alt: "TAK8 booking", pos: "right-[-3%] bottom-[14%] w-[220px] -rotate-3", d: 0.6 },
];

function CodeTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative mx-auto mt-14 max-w-2xl"
    >
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-sky-500/[0.05] blur-3xl" />
      <div className="card card-lg overflow-hidden">
        <div className="flex items-center gap-2 border-b border-[var(--card-border)] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex items-center gap-1.5 text-[11px] text-muted">
            <Terminal size={11} />
            project.config.ts
          </span>
        </div>
        <div className="p-5 font-mono text-[13px] leading-7">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.1, ease: "easeOut" }}
            >
              {line.kw ? (
                <><span className="text-[#bf5af2]">{line.text}</span><span className="text-[#98989d]">{line.rest}</span></>
              ) : (
                <span className="text-[#98989d]">{line.text}<span className="text-[#64d2ff]">{line.rest}</span></span>
              )}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="mt-1 inline-block h-4 w-[3px] rounded-sm bg-sky-400"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pb-24 pt-[5rem] sm:pb-32 sm:pt-28 lg:pb-36">
      {/* Floating screenshots — lg only */}
      <div className="pointer-events-none absolute inset-0 -z-[5] hidden lg:block">
        {floatingScreens.map((s) => (
          <motion.div
            key={s.alt}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: s.d, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`absolute ${s.pos}`}
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
              <Image src={s.src} alt={s.alt} width={400} height={250} className="h-auto w-full object-cover opacity-20" />
            </div>
          </motion.div>
        ))}
      </div>

      <Container>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-sky-400"
          >
            <Code2 size={13} />
            Software Development Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-7 text-balance font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
          >
            We engineer{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">digital products</span>
            <br />
            from code to launch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            Websites, mobile apps, and dashboards — built with modern frameworks,
            clean architecture, and a team that ships production-ready code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-1.5 text-sm text-muted">
                <CheckCircle2 size={14} className="text-sky-400" />
                {h}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-7 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition duration-300 hover:bg-sky-400 hover:shadow-sky-500/35 active:scale-[0.98] sm:w-auto"
            >
              Start Your Project
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] px-7 text-sm font-semibold text-foreground shadow-sm transition duration-300 hover:bg-[var(--card-hover)] active:scale-[0.98] sm:w-auto"
            >
              View Our Services
            </Link>
          </motion.div>
        </motion.div>

        <CodeTerminal />

        {/* Capability cards */}
        <div className="mt-20">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted">What We Build</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.article
                  key={cap.label}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="card group p-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">{cap.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cap.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
