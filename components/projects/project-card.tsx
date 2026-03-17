import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

import type { Project } from "@/data/projects";

import { Badge } from "@/components/shared/badge";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-[0_10px_30px_-20px_rgba(34,211,238,0.2)] transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.45)]",
        className,
      )}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-800 bg-slate-900">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Badge label={project.category} className="border-slate-700 bg-slate-900 text-slate-300" />
          <span>{project.year}</span>
          <span>{project.status}</span>
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

        <div className="flex items-center gap-4 pt-2 text-sm font-medium">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-cyan-200 transition hover:text-cyan-100"
          >
            View Case Study
            <ArrowUpRight size={14} />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 transition hover:text-white"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 transition hover:text-white"
            >
              <Github size={14} />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
