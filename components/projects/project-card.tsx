import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, ExternalLink, Github } from "lucide-react";

import type { Project, ProjectAction } from "@/data/projects";

import { Badge } from "@/components/shared/badge";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  className?: string;
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

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-[0_10px_30px_-20px_rgba(34,211,238,0.2)] transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.45)]",
        className,
      )}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-800 bg-slate-950">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className="object-contain p-2 transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <Badge label={project.category} className="border-slate-700 bg-slate-900 text-slate-300" />
          <span className="inline-flex rounded-full border border-slate-800 bg-slate-950/80 px-2.5 py-1">
            {project.year}
          </span>
          <span className="inline-flex rounded-full border border-slate-800 bg-slate-950/80 px-2.5 py-1">
            {project.status}
          </span>
        </div>

        <div>
          <Link href={`/projects/${project.slug}`}>
            <h3 className="font-heading text-xl font-semibold text-white transition group-hover:text-cyan-200">
              {project.title}
            </h3>
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.shortDescription}</p>
        </div>

        <ul className="space-y-1 text-sm text-slate-300">
          {project.features.slice(0, 2).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} label={tech} className="text-[11px]" />
          ))}
        </div>

        <div className="flex flex-col gap-2.5 pt-2 text-sm font-medium sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex h-10 w-full items-center justify-center gap-1 rounded-full bg-cyan-300/15 px-4 text-cyan-100 transition hover:bg-cyan-300/20 hover:text-cyan-50 sm:w-auto"
          >
            View Case Study
            <ArrowUpRight size={14} />
          </Link>
          {project.primaryAction ? (
            <a
              href={project.primaryAction.href}
              target={project.primaryAction.kind === "download" ? undefined : "_blank"}
              rel={project.primaryAction.kind === "download" ? undefined : "noreferrer"}
              download={project.primaryAction.kind === "download" ? true : undefined}
              className="inline-flex h-10 items-center justify-center gap-1 rounded-full border border-slate-700 px-4 text-slate-300 transition hover:border-cyan-300/60 hover:text-white"
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
              className="inline-flex h-10 items-center justify-center gap-1 rounded-full border border-slate-700 px-4 text-slate-300 transition hover:border-cyan-300/60 hover:text-white"
            >
              <ActionIcon kind={project.secondaryAction.kind} />
              {project.secondaryAction.label}
            </a>
          ) : null}
        </div>
        {project.availabilityNote ? (
          <p className="text-xs leading-relaxed text-slate-400">{project.availabilityNote}</p>
        ) : null}
      </div>
    </article>
  );
}
