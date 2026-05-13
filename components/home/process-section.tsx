import { processSteps } from "@/data/site";
import { Code2, PencilRuler, Rocket, Search, ShieldCheck } from "lucide-react";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProcessSection() {
  const icons = [Search, PencilRuler, Code2, ShieldCheck, Rocket];
  const stepColors = [
    { icon: "border-brand-cyan/35 bg-brand-cyan/15 text-brand-cyan", glow: "hover:border-brand-cyan/40 hover:shadow-[0_20px_38px_-28px_rgba(34,211,238,0.5)]" },
    { icon: "border-brand-blue/35 bg-brand-blue/15 text-brand-blue", glow: "hover:border-brand-blue/40 hover:shadow-[0_20px_38px_-28px_rgba(59,130,246,0.5)]" },
    { icon: "border-brand-purple/35 bg-brand-purple/15 text-brand-purple", glow: "hover:border-brand-purple/40 hover:shadow-[0_20px_38px_-28px_rgba(139,92,246,0.5)]" },
    { icon: "border-brand-blue/35 bg-brand-blue/15 text-brand-blue", glow: "hover:border-brand-blue/40 hover:shadow-[0_20px_38px_-28px_rgba(59,130,246,0.5)]" },
    { icon: "border-brand-cyan/35 bg-brand-cyan/15 text-brand-cyan", glow: "hover:border-brand-cyan/40 hover:shadow-[0_20px_38px_-28px_rgba(34,211,238,0.5)]" },
  ];

  return (
    <section className="relative py-14 sm:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            label="Process"
            title="How EziLab delivers successful digital products."
            description="A structured workflow keeps every engagement predictable, transparent, and fast to iterate."
            align="center"
            className="mx-auto max-w-3xl"
          />
        </FadeIn>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-12 right-12 top-14 hidden h-px bg-gradient-to-r from-brand-cyan/0 via-brand-blue/40 to-brand-purple/0 lg:block" />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = icons[index] ?? Code2;
              const colors = stepColors[index] ?? stepColors[0];

              return (
                <FadeIn key={step.title} delay={index * 0.05}>
                  <article className={`flex h-full flex-col rounded-3xl border border-white/[0.06] bg-white/[0.03] p-5 sm:p-6 transition duration-200 hover:-translate-y-1 ${colors.glow}`}>
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${colors.icon}`}>
                      <Icon size={18} />
                    </span>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
