"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

export function FeaturedProjects() {
  const displayProjects = featuredProjects.slice(0, 4);
  const [heroProject, ...otherProjects] = displayProjects;

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-cyan/[0.03] blur-[120px]" />
        <div className="absolute left-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-brand-purple/[0.03] blur-[100px]" />
      </div>

      <Container>
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.08em] text-gradient-brand">
                Our Work
              </span>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Recent projects
              </h2>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
                Real products shipped for real businesses.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-5 text-sm font-semibold text-foreground transition hover:border-brand-cyan/30 hover:bg-[var(--card-hover)]"
            >
              View All <ArrowUpRight size={14} />
            </Link>
          </div>
        </FadeIn>

        {/* Hero project — full width */}
        {heroProject && (
          <FadeIn delay={0.05} scale className="mt-10 sm:mt-14">
            <Link href={`/projects/${heroProject.slug}`} className="group block">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-[2rem] border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image side */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900/50 lg:aspect-auto lg:min-h-[340px]">
                    <Image
                      src={heroProject.image}
                      alt={heroProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-4"
                      priority
                    />
                  </div>

                  {/* Content side */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex rounded-full bg-brand-cyan/[0.1] px-3 py-1 text-[11px] font-semibold text-brand-cyan">
                        {heroProject.category}
                      </span>
                      <span className="text-xs text-muted">{heroProject.year}</span>
                      <span className={`inline-flex items-center gap-1 text-[11px] font-medium ${
                        heroProject.status === "Completed" ? "text-emerald-400" : "text-amber-400"
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          heroProject.status === "Completed" ? "bg-emerald-400" : "bg-amber-400"
                        }`} />
                        {heroProject.status}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
                      {heroProject.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
                      {heroProject.shortDescription}
                    </p>

                    {/* Tech stack */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {heroProject.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan transition group-hover:gap-2.5">
                        View Case Study <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          </FadeIn>
        )}

        {/* Other projects — 3 column grid */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={0.08 + index * 0.06} scale>
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-3"
                    />
                    {/* Category + status overlay */}
                    <div className="absolute left-3 top-3 flex items-center gap-2">
                      <span className="inline-flex rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs text-muted">{project.year}</span>
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                      {project.shortDescription}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex rounded-md border border-white/[0.05] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-slate-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand-cyan transition group-hover:gap-2">
                        View Project <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>

      <div className="section-divider mt-16 sm:mt-24" />
    </section>
  );
}
