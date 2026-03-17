import { Braces, Database, ServerCog, Smartphone } from "lucide-react";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const groupedStack = [
  {
    title: "Frontend",
    icon: Braces,
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    tools: ["Node.js", "REST APIs", "Authentication", "Realtime Services"],
  },
  {
    title: "Data Layer",
    icon: Database,
    tools: ["PostgreSQL", "MongoDB", "Firebase", "Analytics Pipelines"],
  },
  {
    title: "Mobile & Delivery",
    icon: Smartphone,
    tools: ["React Native", "CI/CD", "Monitoring", "Performance Audits"],
  },
];

export function TechStackSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/8 via-transparent to-cyan-500/8" />
      <Container>
        <FadeIn>
          <SectionHeading
            label="Tech Stack"
            title="Tools and platforms we use to build production-ready systems."
            description="Our stack is grouped by capability so clients can see exactly how we deliver across frontend, backend, data, and mobile."
            align="center"
            className="mx-auto max-w-3xl"
          />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {groupedStack.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_18px_36px_-26px_rgba(34,211,238,0.55)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-cyan-200">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-white">{group.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {group.tools.map((tool) => (
                      <li key={tool} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/55 p-5 text-sm text-slate-300">
            Architecture decisions at EziLab prioritize long-term maintainability and predictable
            delivery velocity, not short-lived trends.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
