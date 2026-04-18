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
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            label="Our Work"
            title="Real products we've built for real businesses."
            description="Take a look at some of the websites, apps, and platforms we've recently shipped."
          />
        </FadeIn>

        {heroProject ? (
          <FadeIn delay={0.04} scale className="mt-12">
            <article className="card card-lg overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-12">
                <Link href={`/projects/${heroProject.slug}`} className="relative block min-h-[18rem] bg-black/40 lg:col-span-6">
                  <Image src={heroProject.image} alt={`${heroProject.title} highlight`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-3" />
                </Link>
                <div className="p-6 sm:p-8 lg:col-span-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-sky-400">Featured Case Study</p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">{heroProject.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{heroProject.shortDescription}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{heroProject.result}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {heroProject.techStack.slice(0, 5).map((tech) => (
                      <span key={tech} className="inline-flex rounded-full bg-foreground/[0.06] px-3 py-1 text-xs font-medium text-muted">{tech}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${heroProject.slug}`} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sky-400 transition hover:text-sky-300">
                    View Full Case Study <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          </FadeIn>
        ) : null}

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.06} scale>
              <ProjectCard project={project} className="h-full" />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
