"use client";

import Image from "next/image";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight, ExternalLink, HeartHandshake, Palette, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { type CSSProperties, type PointerEvent } from "react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Magnetic } from "@/components/shared/magnetic";
import { RevealGroup } from "@/components/shared/reveal-group";
import { RevealHeading } from "@/components/shared/reveal-heading";
import { trackPointer } from "@/lib/pointer";

const blinkoasmUrl = "https://blinkoasm.org";
const donateUrl = "https://blinkoasm.org/get-involved#donate";

const donated = ["Website design", "Development", "Admin dashboard", "Free of charge"];

const pillars: Array<{ title: string; desc: string; icon: LucideIcon }> = [
  {
    title: "Community-led non-profit",
    desc: "Artists, collectors, and volunteers fund education together.",
    icon: HeartHandshake,
  },
  {
    title: "Art becomes scholarships",
    desc: "Creative work is collected, and the proceeds go to school fees.",
    icon: Palette,
  },
  {
    title: "Publicly accountable",
    desc: "Campaign records and scholarship receipts are published openly.",
    icon: ShieldCheck,
  },
];

export function Philanthropy() {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 20 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    trackPointer(event);
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 9);
    rotateX.set(((event.clientY - rect.top) / rect.height - 0.5) * -7);
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section id="philanthropy" className="section-flow relative isolate scroll-mt-20 overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -right-52 top-1/4 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-purple/[0.07] blur-[140px]" />
      <div className="drift pointer-events-none absolute -left-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#EC4899]/[0.06] blur-[130px] [--drift-duration:18s] [--drift-x:50px] [--drift-y:-40px]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_1.28fr] lg:gap-16">
          <div>
            <FadeIn>
              <span className="orbit-border sheen relative inline-flex items-center gap-2 rounded-full border border-white/12 bg-[var(--surface-soft)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-cyan backdrop-blur-xl [--orbit-duration:5s]">
                <HeartHandshake size={13} className="twinkle" />
                Philanthropy
              </span>
            </FadeIn>

            <RevealHeading
              text="Turning our skills into opportunity"
              highlight="opportunity"
              className="text-heading mt-5 max-w-xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            />

            <FadeIn delay={0.08}>
              <p className="text-body mt-5 max-w-xl text-[15px] leading-7 sm:text-base">
                BlinkOASM is a community-led non-profit that turns art into scholarships for girls in Pakistan. We
                designed and built its website and admin dashboard free of charge, so more of what the community
                raises stays with the students.
              </p>
            </FadeIn>

            <RevealGroup className="mt-8 flex flex-wrap gap-2" amount={0.4}>
              {donated.map((item, index) => (
                <span
                  key={item}
                  className="reveal-item rounded-lg border border-[var(--card-border)] bg-[var(--surface-soft)] px-3 py-1.5 text-[11px] font-medium text-muted"
                  style={{ "--delay": `${index * 0.07}s` } as CSSProperties}
                >
                  {item}
                </span>
              ))}
            </RevealGroup>

            <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-3 lg:gap-5" amount={0.3}>
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  onPointerMove={trackPointer}
                  onPointerDown={trackPointer}
                  className="reveal-item spotlight-card relative rounded-2xl border border-[var(--card-border)] bg-[var(--surface-soft)] p-4 [--ring-inset:0px] [--spot-color:rgba(236,72,153,0.18)]"
                  style={{ "--delay": `${0.1 + index * 0.09}s` } as CSSProperties}
                >
                  <pillar.icon size={18} className="text-brand-cyan" />
                  <p className="text-heading mt-3 text-[13px] font-semibold leading-5">{pillar.title}</p>
                  <p className="mt-1.5 text-xs leading-5 text-muted">{pillar.desc}</p>
                </div>
              ))}
            </RevealGroup>

            <FadeIn delay={0.12}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <a
                    href={blinkoasmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60 active:scale-[0.98]"
                  >
                    Visit BlinkOASM
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href={donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface-soft)] px-6 text-sm font-semibold text-foreground backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60 active:scale-[0.98]"
                  >
                    Support a student <ExternalLink size={14} />
                  </a>
                </Magnetic>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} scale>
            <div className="perspective-scene relative" onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
              <div className="pointer-events-none absolute inset-x-[10%] bottom-[6%] h-[26%] rounded-[50%] bg-[#EC4899]/25 blur-[55px]" />

              <motion.div
                className="surface-glass float-y relative overflow-hidden rounded-[1.6rem] shadow-[0_45px_100px_-40px_rgba(0,0,0,.9)] [--float-distance:-9px]"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              >
                <div className="flex h-10 items-center gap-1.5 border-b border-[var(--card-border)] px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <div className="mx-auto flex h-5 items-center rounded-full bg-foreground/[0.05] px-3 text-[9px] font-medium tracking-wide text-muted">
                    blinkoasm.org
                  </div>
                </div>
                <div className="sheen relative [--sheen-delay:0.6s] [--sheen-duration:2.8s] [--sheen-strength:0.2]">
                  <Image
                    src="/images/blinkoasm/blinkoasm-home.png"
                    alt="The BlinkOASM website homepage, designed and built by EziLab"
                    width={1280}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="h-auto w-full"
                  />
                </div>
              </motion.div>

              <div className="surface-glass orbit-border float-y absolute -bottom-4 left-3 rounded-2xl px-4 py-3 [--float-delay:-2.5s] [--float-distance:-6px] [--orbit-duration:6s] sm:left-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted">Pro bono partner</p>
                <p className="text-heading mt-1 text-xs font-semibold">Website &amp; admin dashboard, donated</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
