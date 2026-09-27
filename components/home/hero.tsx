"use client";

import Link from "next/link";
import { motion, type MotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { type CSSProperties, Fragment, type PointerEvent, useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Play, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { CountUp } from "@/components/shared/count-up";
import { Magnetic } from "@/components/shared/magnetic";

const heroVideoSrc = "/videos/ezilab-hero-background.mp4?v=3";

// Each word animates on its own, so each is its own box. Words that belong
// together sit in one group, which is kept on a single line; the highlighted
// pair carries half of the brand gradient each so it still reads as one sweep.
const headlineGroups: Array<Array<{ text: string; glint?: "a" | "b" }>> = [
  [{ text: "We" }],
  [{ text: "turn" }],
  [{ text: "ideas" }],
  [{ text: "into" }],
  [
    { text: "digital", glint: "a" },
    { text: "products", glint: "b" },
  ],
  [{ text: "people" }],
  [{ text: "love" }],
];

/** Running word number per group, so the entrance stagger stays in reading order. */
const headline = headlineGroups.map((words, index) => ({
  words,
  startIndex: headlineGroups.slice(0, index).reduce((count, group) => count + group.length, 0),
}));

const glintClass = {
  a: "gradient-glint [--glint-gradient:var(--gradient-brand-a)]",
  b: "gradient-glint [--glint-delay:1.75s] [--glint-gradient:var(--gradient-brand-b)]",
};

const heroStats = [
  { value: "28+", label: "Projects delivered" },
  { value: "92%", label: "Client retention" },
  { value: "6–10", label: "Weeks average" },
];

function SeamlessHeroVideo({ disabled, scrollY }: { disabled: boolean; scrollY: MotionValue<number> }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // The first frame may already be decoded before hydration attaches onLoadedData.
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 2) video.dataset.ready = "true";
  }, [disabled]);

  if (disabled) return null;

  return (
    <div className="absolute inset-0 -z-30 overflow-hidden" aria-hidden="true">
      {/* Drifts with the page as you scroll, which is the depth cue on touch devices. */}
      <motion.div className="absolute inset-0" style={{ y: scrollY }}>
        <div className="hero-video-layer absolute inset-0">
          <video
            ref={videoRef}
            className="hero-video absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            tabIndex={-1}
            onLoadedData={(event) => {
              event.currentTarget.dataset.ready = "true";
            }}
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const pointerFrame = useRef(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 70]);
  const contentScale = useTransform(scrollYProgress, [0, 0.8], [1, reduceMotion ? 1 : 0.96]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.18]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 34]);

  useEffect(() => {
    const frame = pointerFrame;
    return () => cancelAnimationFrame(frame.current);
  }, []);

  // Pointer position is written straight to CSS variables so the spotlight and
  // video parallax track the cursor without re-rendering React.
  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const section = event.currentTarget;
    const { clientX, clientY } = event;
    cancelAnimationFrame(pointerFrame.current);
    pointerFrame.current = requestAnimationFrame(() => {
      const rect = section.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      section.style.setProperty("--mx", `${x}px`);
      section.style.setProperty("--my", `${y}px`);
      section.style.setProperty("--px", ((x / rect.width) * 2 - 1).toFixed(3));
      section.style.setProperty("--py", ((y / rect.height) * 2 - 1).toFixed(3));
      section.style.setProperty("--spot", "1");
    });
  }

  function handlePointerLeave(event: PointerEvent<HTMLElement>) {
    cancelAnimationFrame(pointerFrame.current);
    const section = event.currentTarget;
    section.style.setProperty("--spot", "0");
    section.style.setProperty("--px", "0");
    section.style.setProperty("--py", "0");
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate flex min-h-[calc(100svh-3.5rem-4.5rem)] items-center overflow-hidden py-10 sm:min-h-[calc(100svh-4.75rem)] sm:py-24"
    >
      <SeamlessHeroVideo disabled={Boolean(reduceMotion)} scrollY={videoY} />

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
      <div className="cursor-grid hero-grid-spotlight absolute inset-0 -z-10" aria-hidden="true" />
      <div className="cursor-glow hero-spotlight absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-aura pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full" aria-hidden="true" />

      <Container className="relative z-10 w-full lg:-top-5">
        <motion.div
          style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <div className="rise-in">
            <span className="orbit-border sheen relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0b0718]/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-cyan shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl sm:text-xs">
              <Sparkles size={13} className="twinkle" />
              Web &amp; App Development Studio
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-balance font-heading text-[2.65rem] font-bold leading-[0.98] tracking-[-0.055em] text-white [perspective:900px] sm:text-6xl lg:text-[clamp(3.9rem,5.5vw,5.9rem)]">
            {headline.map(({ words, startIndex }, groupIndex) => (
              <Fragment key={words[0].text}>
                {/* Grouped words stay on one line; below 360px they may wrap rather than overflow. */}
                <span className={words.length > 1 ? "min-[360px]:whitespace-nowrap" : undefined}>
                  {words.map((word, index) => (
                    <Fragment key={word.text}>
                      <span className="hero-word" style={{ "--i": startIndex + index } as CSSProperties}>
                        {word.glint ? (
                          <span className={`${glintClass[word.glint]} -mr-[0.08em] pr-[0.08em]`}>{word.text}</span>
                        ) : (
                          word.text
                        )}
                      </span>
                      {index < words.length - 1 && "\u00A0"}
                    </Fragment>
                  ))}
                </span>
                {groupIndex < headline.length - 1 && " "}
              </Fragment>
            ))}
          </h1>

          <p
            className="rise-in mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-white/70 sm:text-lg"
            style={{ "--delay": "0.55s" } as CSSProperties}
          >
            Websites, mobile apps, dashboards, and e-commerce—designed for conversion, built with modern technology, and shipped fast.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className="rise-in relative min-w-24 px-2"
                style={{ "--delay": `${0.68 + index * 0.08}s` } as CSSProperties}
              >
                <p className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  <CountUp value={stat.value} delay={0.8 + index * 0.12} immediate />
                </p>
                <p className="mt-1 text-[11px] text-white/55 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <div className="rise-in" style={{ "--delay": "0.85s" } as CSSProperties}>
              <Magnetic>
                <Link
                  href="/contact"
                  className="btn-glow btn-shine group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[0.98]"
                >
                  Start Your Project{" "}
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
            </div>
            <div className="rise-in" style={{ "--delay": "0.93s" } as CSSProperties}>
              <Magnetic>
                <Link
                  href="#featured-projects"
                  className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-[#0b0718]/48 px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:bg-[#0b0718]/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60 active:scale-[0.98]"
                >
                  <Play size={14} className="text-brand-cyan transition-transform duration-300 group-hover:scale-125" /> See Our Work
                </Link>
              </Magnetic>
            </div>
          </div>
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
