import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, ExternalLink, Github } from "lucide-react";
import type { Project, ProjectAction } from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectCardProps = { project: Project; className?: string };

function ActionIcon({ kind }: { kind?: ProjectAction["kind"] }) {
  if (kind === "download") return <Download size={14} />;
  if (kind === "github") return <Github size={14} />;
  return <ExternalLink size={14} />;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article className={cn("card group overflow-hidden", className)}>
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--card-border)] bg-black/30">
          <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw" className="object-contain p-2 transition duration-500 group-hover:scale-105" />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="inline-flex rounded-full bg-sky-500/10 px-2.5 py-1 font-medium text-sky-400">{project.category}</span>
          <span className="inline-flex rounded-full bg-foreground/[0.06] px-2.5 py-1">{project.year}</span>
          <span className="inline-flex rounded-full bg-foreground/[0.06] px-2.5 py-1">{project.status}</span>
        </div>

        <div>
          <Link href={`/projects/${project.slug}`}>
            <h3 className="font-heading text-lg font-semibold text-white transition group-hover:text-sky-400">{project.title}</h3>
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.shortDescription}</p>
        </div>

        <ul className="space-y-1 text-sm text-muted">
          {project.features.slice(0, 2).map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="inline-flex rounded-full bg-foreground/[0.06] px-3 py-1 text-[11px] font-medium text-muted">{tech}</span>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 pt-2 text-sm font-medium sm:flex-row sm:flex-wrap sm:items-center">
          <Link href={`/projects/${project.slug}`} className="inline-flex h-10 w-full items-center justify-center gap-1 rounded-full bg-sky-500 px-4 text-white transition hover:bg-sky-400 active:scale-[0.98] sm:w-auto">
            View Case Study <ArrowUpRight size={14} />
          </Link>
          {project.primaryAction ? (
            <a href={project.primaryAction.href} target={project.primaryAction.kind === "download" ? undefined : "_blank"} rel={project.primaryAction.kind === "download" ? undefined : "noreferrer"} download={project.primaryAction.kind === "download" ? true : undefined} className="inline-flex h-10 items-center justify-center gap-1 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 text-foreground transition hover:bg-[var(--card-hover)]">
              <ActionIcon kind={project.primaryAction.kind} /> {project.primaryAction.label}
            </a>
          ) : null}
          {project.secondaryAction ? (
            <a href={project.secondaryAction.href} target={project.secondaryAction.kind === "download" ? undefined : "_blank"} rel={project.secondaryAction.kind === "download" ? undefined : "noreferrer"} download={project.secondaryAction.kind === "download" ? true : undefined} className="inline-flex h-10 items-center justify-center gap-1 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 text-foreground transition hover:bg-[var(--card-hover)]">
              <ActionIcon kind={project.secondaryAction.kind} /> {project.secondaryAction.label}
            </a>
          ) : null}
        </div>
        {project.availabilityNote ? <p className="text-xs leading-relaxed text-muted">{project.availabilityNote}</p> : null}
      </div>
    </article>
  );
}
