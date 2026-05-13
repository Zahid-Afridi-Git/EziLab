"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

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
          <circle cx="12" cy="12" r="11" fill="currentColor" className="text-white" />
          <path d="M9.5 8v8l6.5-4z" fill="black" />
          <path d="M15 8v8" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
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
          <path d="M12 3L22 20H2L12 3z" fill="currentColor" className="text-white" />
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

export function TechStackSection() {
  return (
    <section className="relative py-16 sm:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-brand-purple/[0.04] blur-[120px]" />
      </div>

      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-gradient-brand">
              Tech Stack
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Modern tools, production-ready code
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
              We use industry-leading frameworks and tools so your product is fast, secure, and easy to maintain.
            </p>
          </div>
        </FadeIn>

        {/* Tech grid with real icons */}
        <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {stack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.04, y: -5 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] sm:p-5"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                  <TechIcon name={tech.name} />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-heading text-sm font-semibold text-white transition group-hover:text-brand-cyan">
                    {tech.name}
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
                    {tech.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      <div className="section-divider mt-14 sm:mt-20" />
    </section>
  );
}
