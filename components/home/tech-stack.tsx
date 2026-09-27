"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { RevealHeading } from "@/components/shared/reveal-heading";
import { trackPointer } from "@/lib/pointer";

const stack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "React Native", category: "Mobile" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Firebase", category: "Platform" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Vercel", category: "Hosting" },
];

/* Actual brand SVG icons for each technology */
function TechIcon({ name }: { name: string }) {
  const size = 20;

  switch (name) {
    case "React":
    case "React Native":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
        </svg>
      );
    case "Next.js":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#111827" />
          <path d="M9.5 8v8l6.5-4z" fill="white" />
          <path d="M15 8v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
          <path d="M7 12h5M9.5 12v5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14.5 12.5c0-.8.7-1.2 1.5-1.2s1.5.3 1.5 1c0 1.5-3 1.2-3 3 0 .8.7 1.2 1.5 1.2s1.5-.3 1.5-1" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.35 10.82 14.5 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.65 7.18 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.35 16.82 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.65 13.18 9.5 12 7 12z" fill="#06B6D4" />
        </svg>
      );
    case "Node.js":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5L3 7.5v9l9 5 9-5v-9l-9-5z" fill="#339933" opacity="0.15" stroke="#339933" strokeWidth="1.2" />
          <path d="M12 7v10M8 9l4 2.5L16 9" stroke="#339933" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="8" rx="7" ry="4" fill="#336791" opacity="0.2" stroke="#336791" strokeWidth="1.2" />
          <path d="M5 8v8c0 2.2 3.1 4 7 4s7-1.8 7-4V8" stroke="#336791" strokeWidth="1.2" fill="none" />
          <path d="M5 12c0 2.2 3.1 4 7 4s7-1.8 7-4" stroke="#336791" strokeWidth="1.2" fill="none" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C12 2 8 6 8 12c0 4 2 8 4 10 2-2 4-6 4-10 0-6-4-10-4-10z" fill="#47A248" opacity="0.2" stroke="#47A248" strokeWidth="1.2" />
          <path d="M12 8v10" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "Firebase":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M5 18L7 4l4 7-6 7z" fill="#FFA000" />
          <path d="M11 11l-4 7 12-5-8-2z" fill="#F57C00" />
          <path d="M19 18L11 3v8l8 7z" fill="#FFCA28" />
        </svg>
      );
    case "Framer Motion":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M5 4h14v5.33H12L5 4z" fill="#BB4B96" />
          <path d="M5 9.33h7l7 5.34H5V9.33z" fill="#7B2D8B" />
          <path d="M5 14.67l7 5.33V14.67H5z" fill="#59166B" />
        </svg>
      );
    case "Vercel":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 3L22 20H2L12 3z" fill="currentColor" className="text-heading" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="text-brand-cyan" />
          <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-brand-cyan" />
        </svg>
      );
  }
}

function TechPill({ tech }: { tech: (typeof stack)[number] }) {
  return (
    <div onPointerMove={trackPointer} onPointerDown={trackPointer} className="spotlight-card group relative flex min-w-[190px] items-center gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface-strong)] px-4 py-3 shadow-[var(--card-shadow)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-brand-purple/30 hover:bg-[var(--card-hover)] sm:min-w-[220px] sm:px-5 sm:py-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--surface-soft)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
        <TechIcon name={tech.name} />
      </span>
      <div className="min-w-0">
        <p className="text-heading truncate font-heading text-sm font-semibold transition group-hover:text-brand-cyan">{tech.name}</p>
        <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-muted">{tech.category}</p>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, reduceMotion = false }: { items: typeof stack; reverse?: boolean; reduceMotion?: boolean }) {
  const repeated = reduceMotion ? items : [...items, ...items];

  return (
    <div className="marquee-viewport group relative overflow-hidden py-2">
      <div className={`flex w-max gap-3 sm:gap-4 ${reduceMotion ? "flex-wrap justify-center" : reverse ? "marquee-track marquee-reverse" : "marquee-track"}`}>
        {repeated.map((tech, index) => (
          <div key={`${tech.name}-${index}`} aria-hidden={!reduceMotion && index >= items.length}>
            <TechPill tech={tech} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  const reduceMotion = useReducedMotion();
  const firstRow = stack.slice(0, 6);
  const secondRow = stack.slice(6);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/3 h-[450px] w-[450px] rounded-full bg-brand-purple/[0.065] blur-[135px]" />
        <div className="absolute left-[-12rem] bottom-0 h-[380px] w-[380px] rounded-full bg-brand-cyan/[0.045] blur-[120px]" />
      </div>

      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="gradient-glint text-sm font-semibold uppercase tracking-[0.1em]">Technology</span>
            <RevealHeading
              text="A modern stack with practical roots"
              className="text-heading mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            />
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
              Proven technologies selected for performance, maintainability, and the people who will own your product after launch.
            </p>
          </div>
        </FadeIn>
      </Container>

      <div className="mx-auto mt-12 max-w-[1500px] space-y-3 sm:mt-16 sm:space-y-4">
        {[firstRow, secondRow].map((row, index) => (
          <motion.div
            key={index}
            initial={reduceMotion ? false : { opacity: 0, x: index === 0 ? -90 : 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <MarqueeRow items={row} reverse={index === 1} reduceMotion={Boolean(reduceMotion)} />
          </motion.div>
        ))}
      </div>

    </section>
  );
}
