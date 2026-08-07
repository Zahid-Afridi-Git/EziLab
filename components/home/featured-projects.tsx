"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";
import { featuredProjects, type Project } from "@/data/projects";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

const projectThemes = [
  { accent: "#22D3EE", glow: "rgba(34,211,238,.22)", wash: "rgba(34,211,238,.08)" },
  { accent: "#4F7CFF", glow: "rgba(79,124,255,.24)", wash: "rgba(79,124,255,.08)" },
  { accent: "#A855F7", glow: "rgba(168,85,247,.25)", wash: "rgba(168,85,247,.09)" },
  { accent: "#7C5CFC", glow: "rgba(124,92,252,.24)", wash: "rgba(124,92,252,.08)" },
];

function ProjectMeta({ project, index }: { project: Project; index: number }) {
  return (
    <div className="flex h-full flex-col justify-center py-2">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-[var(--card-border)] bg-[var(--surface-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-cyan">
          {project.category}
        </span>
        <span className="text-xs text-muted">{project.year}</span>
        <span className={project.status === "Completed" ? "text-xs text-emerald-400" : "text-xs text-amber-400"}>
          ● {project.status}
        </span>
      </div>
      <p className="mt-5 font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
        Selected project {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="text-heading mt-2 font-heading text-4xl font-bold tracking-tight xl:text-[3.25rem]">{project.title}</h3>
      <p className="text-body mt-3 max-w-md text-sm leading-6 xl:text-[15px] xl:leading-7">{project.shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-lg border border-[var(--card-border)] bg-[var(--surface-soft)] px-3 py-1.5 text-[11px] font-medium text-muted">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition hover:gap-3 hover:text-brand-purple">
          Explore case study <ArrowUpRight size={15} />
        </Link>
        {project.primaryAction?.kind === "external" && (
          <a
            href={project.primaryAction.href}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-glass inline-flex h-9 items-center gap-2 rounded-full px-4 text-xs font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-brand-purple/35 hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
          >
            Visit live website <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  const theme = projectThemes[index % projectThemes.length];
  const isMobile = project.projectType.toLowerCase().includes("mobile");

  return (
    <div className="perspective-scene relative flex h-full min-h-0 items-center justify-center overflow-visible px-6 py-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.86, rotateY: 10, y: 45 }}
        animate={{ opacity: 1, scale: 1, rotateY: -3, y: 0 }}
        exit={{ opacity: 0, scale: 1.08, rotateY: -10, y: -30 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-full w-full items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-x-[8%] bottom-[2%] h-[28%] rounded-[50%] blur-[55px]" style={{ background: theme.glow }} />
        <div className="absolute inset-0 rounded-[3rem] opacity-80 blur-3xl" style={{ background: `radial-gradient(circle, ${theme.wash}, transparent 68%)` }} />

        {isMobile ? (
          <div className="relative aspect-[9/18.5] h-[86%] max-h-[430px] min-h-0 w-auto rounded-[2.1rem] border border-[var(--card-border)] bg-[var(--surface-strong)] p-2 shadow-[0_40px_90px_-35px_rgba(0,0,0,.75)] xl:max-h-[470px]">
            <div className="mx-auto mb-1.5 h-1.5 w-14 rounded-full bg-foreground/15" />
            <div className="relative h-[calc(100%_-_0.625rem)] overflow-hidden rounded-[1.6rem] bg-[var(--surface-image)]">
              <Image src={project.image} alt={`${project.title} mobile interface`} fill sizes="260px" className="object-cover object-top" />
            </div>
          </div>
        ) : (
          <div className="surface-glass relative w-full max-w-[760px] overflow-hidden rounded-[1.6rem] shadow-[0_45px_100px_-40px_rgba(0,0,0,.9)]">
            <div className="flex h-10 items-center gap-1.5 border-b border-[var(--card-border)] px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="mx-auto h-5 w-[42%] rounded-full bg-foreground/[0.05]" />
            </div>
            <div className="relative aspect-[16/9] bg-[var(--surface-image)]">
              <Image src={project.image} alt={`${project.title} website interface`} fill sizes="55vw" className="object-contain p-3" />
            </div>
          </div>
        )}

        <div className="surface-glass absolute bottom-3 left-1 rounded-2xl px-4 py-3" style={{ transform: "translateZ(60px)" }}>
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted">Build type</p>
          <p className="text-heading mt-1 max-w-[160px] text-xs font-semibold">{project.projectType}</p>
        </div>
        <div className="absolute right-1 top-1/2 h-16 w-1 -translate-y-1/2 rounded-full" style={{ background: theme.accent, boxShadow: `0 0 28px ${theme.glow}` }} />
      </motion.div>
    </div>
  );
}

function MobileProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn scale>
      <article className="surface-glass group overflow-hidden rounded-[1.6rem]">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-[16/10] bg-[var(--surface-image)]">
            <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-4" />
            <span className="absolute left-4 top-4 rounded-full bg-background/75 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-cyan backdrop-blur-lg">
              {String(index + 1).padStart(2, "0")} · {project.category}
            </span>
          </div>
        </Link>
        <div className="p-5 sm:p-6">
          <Link href={`/projects/${project.slug}`} className="block">
            <h3 className="text-heading font-heading text-xl font-bold">{project.title}</h3>
            <p className="text-body mt-2 text-sm leading-6">{project.shortDescription}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan transition group-hover:gap-2.5">
              View project <ArrowUpRight size={13} />
            </span>
          </Link>
          {project.primaryAction?.kind === "external" && (
            <a
              href={project.primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-9 items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface-soft)] px-4 text-xs font-semibold text-foreground transition hover:border-brand-purple/35 hover:text-brand-purple"
            >
              Visit live website <ExternalLink size={13} />
            </a>
          )}
        </div>
      </article>
    </FadeIn>
  );
}

export function FeaturedProjects() {
  const visibleProjectSlugs = ["tak8-car-rental", "starrental", "sukoon"];
  const projects = visibleProjectSlugs
    .map((slug) => featuredProjects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progressScale = useTransform(scrollYProgress, [0.08, 0.92], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(projects.length - 1, Math.max(0, Math.floor(latest * projects.length)));
    setActiveIndex((current) => (current === next ? current : next));
  });

  function goToProject(index: number) {
    setActiveIndex(index);
    if (!sectionRef.current || projects.length < 2) return;
    const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
    const scrollDistance = sectionRef.current.offsetHeight - window.innerHeight;
    const targetProgress = Math.min(0.98, (index + 0.08) / projects.length);
    window.scrollTo({ top: sectionTop + scrollDistance * targetProgress, behavior: "smooth" });
  }

  const activeProject = projects[activeIndex];
  const activeTheme = projectThemes[activeIndex % projectThemes.length];

  return (
    <section id="featured-projects" ref={sectionRef} className={reduceMotion ? "relative scroll-mt-20" : "relative scroll-mt-20 lg:min-h-[370svh]"}>
      <div className="pointer-events-none absolute inset-0 -z-10 transition-colors duration-700" style={{ background: `radial-gradient(circle at 75% 38%, ${activeTheme.wash}, transparent 28%)` }} />

      <div className={reduceMotion ? "py-16 sm:py-24" : "py-16 sm:py-24 lg:sticky lg:top-0 lg:flex lg:h-svh lg:items-center lg:overflow-hidden lg:pb-7 lg:pt-24"}>
        <Container className="flex w-full flex-col lg:h-full">
          <FadeIn>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.1em] text-gradient-brand">Selected work</span>
              <h2 className="text-heading mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.65rem]">Products built to perform</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted xl:text-base">Each product gets its own stage. Scroll slowly to explore the work, technology, and outcome.</p>
            </div>
          </FadeIn>

          <div className={reduceMotion ? "hidden" : "mt-7 hidden min-h-0 flex-1 items-stretch gap-10 lg:grid lg:grid-cols-[0.72fr_1.28fr] xl:gap-16"}>
            <div className="relative flex min-h-0 flex-col">
              <AnimatePresence mode="wait">
                <motion.div className="min-h-0 flex-1" key={activeProject.slug} initial={{ opacity: 0, y: 20, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -14, filter: "blur(5px)" }} transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}>
                  <ProjectMeta project={activeProject} index={activeIndex} />
                </motion.div>
              </AnimatePresence>

              <div className="shrink-0 pb-1 pt-4">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  <span>Scroll to explore</span>
                  <span>{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                </div>
                <div className="mt-3 h-px overflow-hidden bg-foreground/10">
                  <motion.div className="h-full origin-left bg-gradient-brand" style={{ scaleX: progressScale }} />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {projects.map((project, index) => (
                    <button key={project.slug} type="button" aria-label={`Show ${project.title}`} aria-pressed={index === activeIndex} onClick={() => goToProject(index)} className={`h-1 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60 ${index === activeIndex ? "bg-brand-purple" : "bg-foreground/10 hover:bg-foreground/20"}`} />
                  ))}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <ProjectVisual key={activeProject.slug} project={activeProject} index={activeIndex} />
            </AnimatePresence>
          </div>

          <div className={reduceMotion ? "mt-10 grid gap-5 sm:grid-cols-2" : "mt-10 grid gap-5 sm:grid-cols-2 lg:hidden"}>
            {projects.map((project, index) => <MobileProjectCard key={project.slug} project={project} index={index} />)}
          </div>
        </Container>
      </div>

    </section>
  );
}
