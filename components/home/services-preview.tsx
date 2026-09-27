"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Brush,
  Check,
  Code2,
  Globe,
  Headset,
  LayoutDashboard,
  Layers3,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { type CSSProperties, type PointerEvent, useRef, useState } from "react";
import { services } from "@/data/services";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Magnetic } from "@/components/shared/magnetic";
import { RevealGroup } from "@/components/shared/reveal-group";
import { RevealHeading } from "@/components/shared/reveal-heading";
import { useSwipeHint } from "@/components/shared/use-swipe-hint";
import { trackPointer } from "@/lib/pointer";

const serviceIcons: Record<string, LucideIcon> = {
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "dashboard-admin-panels": LayoutDashboard,
  "ecommerce-solutions": ShoppingBag,
  "branding-ui-design": Brush,
  "maintenance-support": Headset,
};

const serviceThemes = [
  { accent: "#22D3EE", second: "#4F7CFF", glow: "rgba(34,211,238,.2)", wash: "rgba(34,211,238,.075)" },
  { accent: "#4F7CFF", second: "#A855F7", glow: "rgba(79,124,255,.22)", wash: "rgba(79,124,255,.075)" },
  { accent: "#A855F7", second: "#6366F1", glow: "rgba(168,85,247,.22)", wash: "rgba(168,85,247,.08)" },
  { accent: "#22D3EE", second: "#A855F7", glow: "rgba(34,211,238,.2)", wash: "rgba(168,85,247,.07)" },
  { accent: "#A855F7", second: "#22D3EE", glow: "rgba(168,85,247,.22)", wash: "rgba(168,85,247,.08)" },
  { accent: "#6366F1", second: "#22D3EE", glow: "rgba(99,102,241,.22)", wash: "rgba(99,102,241,.075)" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const tabsRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 100, damping: 22 });
  const rotateX = useSpring(pointerY, { stiffness: 100, damping: 22 });
  const activeService = services[activeIndex];
  const theme = serviceThemes[activeIndex % serviceThemes.length];
  const ActiveIcon = serviceIcons[activeService.slug] ?? Globe;

  useSwipeHint(tabsRef, !reduceMotion);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    trackPointer(event);
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 6);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * -5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section id="services-preview" className="section-flow relative isolate scroll-mt-20 overflow-hidden py-20 sm:py-28 lg:py-32">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        animate={{ background: `radial-gradient(circle at 72% 46%, ${theme.wash}, transparent 31%)` }}
        transition={{ duration: 0.7 }}
      />
      <div className="pointer-events-none absolute left-[-12rem] top-[28%] -z-20 h-[30rem] w-[30rem] rounded-full bg-brand-cyan/[0.055] blur-[130px]" />

      <Container>
        <FadeIn>
          <div className="grid items-end gap-5 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="gradient-glint text-sm font-semibold uppercase tracking-[0.1em]">What we do</span>
              <RevealHeading
                text="One studio, every layer of your product"
                className="text-heading mt-3 max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
              />
            </div>
            <p className="max-w-md text-sm leading-6 text-muted sm:text-base lg:text-right">
              Strategy, design, engineering, and long-term support—connected in one focused delivery process.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 sm:mt-14">
          <RevealGroup elementRef={tabsRef} className="scrollbar-hide flex snap-x snap-mandatory gap-2 overflow-x-auto pb-3 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0" role="tablist" aria-label="Services">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.slug] ?? Globe;
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="active-service-panel"
                  onClick={() => setActiveIndex(index)}
                  onPointerMove={trackPointer}
                  onPointerDown={trackPointer}
                  style={{ "--delay": `${index * 0.07}s` } as CSSProperties}
                  className={`reveal-item spotlight-card group relative min-w-[155px] snap-start overflow-hidden rounded-2xl border px-3 py-4 text-left transition duration-300 [--ring-inset:0px] lg:min-w-0 ${
                    isActive
                      ? "border-[var(--card-border)] bg-[var(--surface-strong)] shadow-[var(--card-shadow)]"
                      : "border-transparent bg-[var(--surface-soft)] hover:border-[var(--card-border)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="service-tab-glow"
                      className="absolute inset-x-3 top-0 h-px"
                      style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)` }}
                    />
                  )}
                  <span className="flex items-center justify-between">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--surface-soft)] transition group-hover:-translate-y-0.5"
                      style={isActive ? { color: theme.accent, boxShadow: `0 12px 30px -14px ${theme.glow}` } : undefined}
                    >
                      <Icon size={17} />
                    </span>
                    <span className="text-[10px] font-bold tabular-nums text-muted">0{index + 1}</span>
                  </span>
                  <span className="text-heading mt-4 block min-h-10 text-xs font-semibold leading-5 sm:text-[13px]">{service.title}</span>
                </button>
              );
            })}
          </RevealGroup>
        </div>

        <div className="perspective-scene mt-5" onPointerMove={handlePointerMove} onPointerDown={handlePointerMove} onPointerLeave={resetPointer}>
          <AnimatePresence mode="wait">
            <motion.div
              id="active-service-panel"
              role="tabpanel"
              key={activeService.slug}
              initial={{ opacity: 0, y: 24, scale: 0.975 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.985 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.48, ease }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="surface-glass relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at 80% 20%, ${theme.wash}, transparent 38%)` }} />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent 8%, ${theme.accent}, ${theme.second}, transparent 92%)` }} />
              <div className="cursor-glow absolute inset-0" aria-hidden="true" />

              <div className="relative grid gap-10 p-6 sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-12">
                <div>
                  <div className="flex items-center gap-4">
                    <motion.span
                      initial={{ rotate: -8, scale: 0.8 }}
                      animate={{ rotate: 0, scale: 1 }}
                      className="orbit-border relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--card-border)] bg-[var(--surface-soft)]"
                      style={{ color: theme.accent, boxShadow: `0 20px 45px -20px ${theme.glow}` }}
                    >
                      <ActiveIcon size={25} />
                    </motion.span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Service 0{activeIndex + 1}</p>
                      <h3 className="text-heading mt-1 font-heading text-2xl font-bold sm:text-3xl">{activeService.title}</h3>
                    </div>
                  </div>

                  <p className="text-body mt-6 max-w-xl text-[15px] leading-7 sm:text-base">{activeService.summary}</p>
                  <div className="mt-5 border-l-2 pl-4" style={{ borderColor: theme.accent }}>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Business impact</p>
                    <p className="text-body mt-2 text-sm leading-6">{activeService.value}</p>
                  </div>
                  <p className="mt-5 text-xs text-muted">Best for: <span className="text-body font-medium">{activeService.forWho}</span></p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Magnetic>
                      <Link href="/contact" className="btn-shine group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110">
                        Start a project <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Magnetic>
                    <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan transition hover:gap-2.5 hover:text-brand-purple">
                      All services <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[300px] sm:min-h-[350px]" style={{ transform: "translateZ(35px)" }}>
                  <div className="absolute inset-[8%] rounded-[2rem] blur-[45px]" style={{ background: theme.glow }} />
                  <motion.div
                    initial={{ opacity: 0, x: 30, rotateY: -8 }}
                    animate={{ opacity: 1, x: 0, rotateY: -3 }}
                    transition={{ duration: 0.55, delay: 0.08, ease }}
                    className="surface-glass sheen absolute inset-x-0 top-4 rounded-[1.6rem] p-5 [--sheen-delay:0.45s] [--sheen-duration:2.4s] [--sheen-repeat:1] sm:inset-x-5 sm:p-6"
                    style={{ transform: "translateZ(35px)" }}
                  >
                    <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-4">
                      <div className="flex items-center gap-2">
                        <Code2 size={15} style={{ color: theme.accent }} />
                        <span className="text-heading text-xs font-semibold">Delivery blueprint</span>
                      </div>
                      <Layers3 size={15} className="text-muted" />
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {activeService.deliverables.map((deliverable, index) => (
                        <motion.div
                          key={deliverable}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.12 + index * 0.06 }}
                          className="flex min-h-20 items-start gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface-soft)] p-4"
                        >
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: `${theme.accent}20`, color: theme.accent }}>
                            <Check size={12} strokeWidth={3} className="draw-check" style={{ "--delay": `${0.3 + index * 0.08}s` } as CSSProperties} />
                          </span>
                          <span className="text-body text-xs font-medium leading-5">{deliverable}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <div className="surface-glass orbit-border float-y absolute bottom-0 right-0 rounded-xl px-3 py-2 [--float-distance:-6px] [--orbit-duration:5.5s] text-[9px] font-bold uppercase tracking-[0.15em] text-muted sm:right-1" style={{ transform: "translateZ(70px) rotate(2deg)" }}>
                    Strategy → Design → Build
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

    </section>
  );
}
