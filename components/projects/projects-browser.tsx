"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { projectCategories, projects } from "@/data/projects";

import { ProjectCard } from "@/components/projects/project-card";
import { FadeIn } from "@/components/shared/fade-in";

function normalizeCategory(value: string) {
  return projectCategories.includes(value) ? value : "All";
}

type ProjectsBrowserProps = {
  initialCategory: string;
};

export function ProjectsBrowser({ initialCategory }: ProjectsBrowserProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState(() =>
    normalizeCategory(initialCategory),
  );

  useEffect(() => {
    function onPopState() {
      const params = new URLSearchParams(window.location.search);
      const value = params.get("category") ?? "All";
      setSelectedCategory(normalizeCategory(value));
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory),
    [selectedCategory],
  );

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
    const href =
      category === "All" ? pathname : `${pathname}?category=${encodeURIComponent(category)}`;
    router.replace(href, { scroll: false });
  }

  return (
    <>
      <div className="sticky top-[4.5rem] z-20 mt-8 -mx-4 border-y border-slate-800/70 bg-slate-950/88 px-4 py-3 backdrop-blur-xl sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
        <div className="overflow-x-auto sm:overflow-visible">
          <div className="flex min-w-max snap-x snap-mandatory gap-2 sm:min-w-0 sm:flex-wrap">
            {projectCategories.map((category) => {
              const isActive = category === selectedCategory;

              return (
                <button
                  type="button"
                  key={category}
                  aria-pressed={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={
                    isActive
                      ? "inline-flex h-10 shrink-0 snap-start items-center rounded-full bg-cyan-300/20 px-4 text-sm font-semibold text-cyan-100"
                      : "inline-flex h-10 shrink-0 snap-start items-center rounded-full border border-slate-700 px-4 text-sm font-medium text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-100"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <FadeIn delay={0.1} className="mt-5">
        <p className="text-sm text-slate-400">
          Showing {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"} in{" "}
          {selectedCategory}.
        </p>
      </FadeIn>

      {filteredProjects.length === 0 ? (
        <FadeIn delay={0.12} className="mt-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center">
            <p className="font-heading text-xl font-semibold text-white">
              No projects found in this category
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Try another category to explore available EziLab case studies.
            </p>
          </div>
        </FadeIn>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} className="h-full" />
            </FadeIn>
          ))}
        </div>
      )}
    </>
  );
}
