import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { featuredProjects } from "@/data/projects";

import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function FeaturedProjects() {
  const [heroProject, ...otherProjects] = featuredProjects.slice(0, 6);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
      <Container>
        <FadeIn>
          <SectionHeading
            label="Featured Projects"
            title="Recent case studies from the last year."
            description="These projects represent the kind of digital products EziLab ships: practical, scalable, and built around real business outcomes."
          />
        </FadeIn>

        {heroProject ? (
          <FadeIn delay={0.04} className="mt-10">
            <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_26px_52px_-30px_rgba(34,211,238,0.55)]">
              <div className="grid gap-0 lg:grid-cols-12">
                <Link href={`/projects/${heroProject.slug}`} className="relative block min-h-[18rem] lg:col-span-6">
                  <Image
                    src={heroProject.image}
                    alt={`${heroProject.title} highlight`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Link>
                <div className="p-6 sm:p-8 lg:col-span-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    Featured Case Study
                  </p>
                  <h3 className="mt-3 font-heading text-3xl font-semibold text-white">
                    {heroProject.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {heroProject.shortDescription}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{heroProject.result}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {heroProject.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${heroProject.slug}`}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                  >
                    View Full Case Study
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          </FadeIn>
        ) : null}

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} className="h-full" />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12} className="mt-8">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center rounded-full border border-slate-700 px-5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
          >
            View All Projects
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
