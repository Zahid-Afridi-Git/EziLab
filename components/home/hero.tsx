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

const highlights = ["28+ projects delivered", "6–10 week avg delivery", "92% client retention"];

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
      className="relative mx-auto mt-10 max-w-2xl sm:mt-14"
    >
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-sky-500/[0.05] blur-3xl" />
      <div className="card card-lg overflow-hidden">
        <div className="flex items-center gap-1.5 border-b border-[var(--card-border)] px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3" />
          <span className="ml-2 flex items-center gap-1.5 text-[10px] text-muted sm:ml-3 sm:text-[11px]">
            <Terminal size={10} />
            project.config.ts
          </span>
        </div>
        <div className="overflow-x-auto p-4 font-mono text-[11px] leading-6 sm:p-5 sm:text-[13px] sm:leading-7">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.1, ease: "easeOut" }}
              className="whitespace-nowrap"
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
            className="mt-1 inline-block h-3.5 w-[3px] rounded-sm bg-sky-400 sm:h-4"
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
    <section ref={sectionRef} className="relative overflow-hidden pb-16 pt-[4.5rem] sm:pb-28 sm:pt-28 lg:pb-36">
      {/* Floating screenshots — lg only */}
      <div className="pointer-events-none absolute inset-0 -z-[5] hidden lg:block">
        {floatingScreens.map((s) => (
          <motion.div key={s.alt} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: s.d, ease: [0.25, 0.46, 0.45, 0.94] }} className={`absolute ${s.pos}`}>
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
            className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-sky-400 sm:px-4 sm:text-xs"
          >
            <Code2 size={12} />
            Software Development Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-5 text-balance font-heading text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:mt-7 sm:text-5xl lg:text-[3.5rem]"
          >
            We engineer{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">digital products</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>from code to launch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted sm:mt-6 sm:max-w-2xl sm:text-lg"
          >
            Websites, mobile apps, and dashboards — built with modern frameworks,
            clean architecture, and a team that ships production-ready code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:mt-6 sm:gap-x-6 sm:gap-y-2"
          >
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-1.5 text-[13px] text-muted sm:text-sm">
                <CheckCircle2 size={13} className="text-sky-400" />
                {h}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-7 flex flex-col gap-3 px-2 sm:mt-9 sm:flex-row sm:justify-center sm:px-0"
          >
            <Link
              href="/contact"
              className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-7 text-[15px] font-semibold text-white shadow-lg shadow-sky-500/25 transition duration-300 hover:bg-sky-400 hover:shadow-sky-500/35 active:scale-[0.97] sm:h-12 sm:w-auto sm:text-sm"
            >
              Start Your Project
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-[50px] w-full items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] px-7 text-[15px] font-semibold text-foreground shadow-sm transition duration-300 hover:bg-[var(--card-hover)] active:scale-[0.97] sm:h-12 sm:w-auto sm:text-sm"
            >
              View Our Services
            </Link>
          </motion.div>
        </motion.div>

        <CodeTerminal />

        {/* Capability cards */}
        <div className="mt-14 sm:mt-20">
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-muted sm:mb-8 sm:text-xs">What We Build</p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.article
                  key={cap.label}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="card group p-4 sm:p-6"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 sm:h-11 sm:w-11">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-3 font-heading text-[14px] font-semibold text-white sm:mt-4 sm:text-base">{cap.label}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted sm:mt-2 sm:text-sm">{cap.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
