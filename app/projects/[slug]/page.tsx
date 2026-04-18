import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, Download, ExternalLink, Github, Lightbulb, TrendingUp } from "lucide-react";

import type { ProjectAction } from "@/data/projects";
import { getAdjacentProjects, getProjectBySlug, projects } from "@/data/projects";

import { Badge } from "@/components/shared/badge";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function ActionIcon({ kind }: { kind?: ProjectAction["kind"] }) {
  if (kind === "download") {
    return <Download size={14} />;
  }

  if (kind === "github") {
    return <Github size={14} />;
  }

  return <ExternalLink size={14} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <main className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link href="/projects" className="transition hover:text-cyan-200">
              Projects
            </Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>
          <h1 className="mt-4 max-w-4xl text-balance font-heading text-4xl font-semibold text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {project.fullDescription}
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-background">
            <Image
              src={project.image}
              alt={`${project.title} hero`}
              fill
              sizes="100vw"
              className="object-contain p-2"
              priority
            />
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <FadeIn className="lg:col-span-8">
            <div className="space-y-4">
              <section className="rounded-2xl border border-rose-400/25 bg-rose-500/5 p-5 sm:p-6">
                <h2 className="flex items-center gap-2 font-heading text-xl font-semibold text-white sm:text-2xl">
                  <AlertTriangle size={20} className="text-rose-200" />
                  Problem
                </h2>
                <p className="mt-3 border-l-2 border-rose-300/45 pl-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {project.challenge}
                </p>
              </section>

              <section className="rounded-2xl border border-cyan-300/30 bg-cyan-400/5 p-5 sm:p-6">
                <h2 className="flex items-center gap-2 font-heading text-xl font-semibold text-white sm:text-2xl">
                  <Lightbulb size={20} className="text-cyan-200" />
                  Solution
                </h2>
                <p className="mt-3 border-l-2 border-cyan-300/45 pl-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {project.solution}
                </p>
              </section>

              <section className="rounded-2xl border border-emerald-300/30 bg-emerald-500/5 p-5 sm:p-6">
                <h2 className="flex items-center gap-2 font-heading text-xl font-semibold text-white sm:text-2xl">
                  <TrendingUp size={20} className="text-emerald-200" />
                  Outcome
                </h2>
                <p className="mt-3 border-l-2 border-emerald-300/45 pl-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {project.result}
                </p>
              </section>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-span-4">
            <aside className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Category
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{project.category}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Year
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Status
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{project.status}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Client Type
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{project.clientType}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Project Type
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{project.projectType}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Role of EziLab
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-200">{project.role}</p>
                </div>
              </div>
              <div className="border-t border-slate-800 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} label={tech} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                {project.primaryAction ? (
                  <a
                    href={project.primaryAction.href}
                    target={project.primaryAction.kind === "download" ? undefined : "_blank"}
                    rel={project.primaryAction.kind === "download" ? undefined : "noreferrer"}
                    download={project.primaryAction.kind === "download" ? true : undefined}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 text-xs font-semibold text-slate-950 transition hover:brightness-110 sm:w-auto"
                  >
                    <ActionIcon kind={project.primaryAction.kind} />
                    {project.primaryAction.label}
                  </a>
                ) : null}
                {project.secondaryAction ? (
                  <a
                    href={project.secondaryAction.href}
                    target={project.secondaryAction.kind === "download" ? undefined : "_blank"}
                    rel={project.secondaryAction.kind === "download" ? undefined : "noreferrer"}
                    download={project.secondaryAction.kind === "download" ? true : undefined}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/[0.08] px-4 text-xs font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200 sm:w-auto"
                  >
                    <ActionIcon kind={project.secondaryAction.kind} />
                    {project.secondaryAction.label}
                  </a>
                ) : null}
              </div>
              {project.availabilityNote ? (
                <p className="text-xs leading-relaxed text-slate-400">{project.availabilityNote}</p>
              ) : null}
            </aside>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
          <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">Key Features</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span className="text-sm text-slate-200">{feature}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-8">
          <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">Screenshots</h2>
          <div className="-mx-4 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 sm:hidden">
            {project.screenshots.map((shot) => (
              <figure
                key={shot.alt}
                className="w-[82vw] shrink-0 snap-center overflow-hidden rounded-xl border border-slate-800 bg-background"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={shot.src} alt={shot.alt} fill sizes="82vw" className="object-contain p-1" />
                </div>
                <figcaption className="p-3 text-xs text-slate-300">{shot.alt}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-4 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {project.screenshots.map((shot) => (
              <figure
                key={shot.alt}
                className="overflow-hidden rounded-xl border border-slate-800 bg-background"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-contain p-1" />
                </div>
                <figcaption className="p-3 text-xs text-slate-300">{shot.alt}</figcaption>
              </figure>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-10 grid gap-4 sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-300/50"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Previous project</p>
              <p className="mt-2 font-heading text-lg font-semibold text-white">{previous.title}</p>
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-left transition hover:border-cyan-300/50 sm:text-right"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Next project</p>
              <p className="mt-2 font-heading text-lg font-semibold text-white">{next.title}</p>
            </Link>
          ) : null}
        </FadeIn>
      </Container>
    </main>
  );
}
