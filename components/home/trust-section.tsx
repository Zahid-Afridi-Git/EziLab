import { coreStats } from "@/data/site";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function TrustSection() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-slate-900/70 via-transparent to-slate-900/70" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <FadeIn className="lg:col-span-5">
            <SectionHeading
              label="Why Trust EziLab"
              title="Reliable execution with business-focused outcomes."
              description="When formal testimonials are limited, trust is built through clear delivery records, technical depth, and measurable impact."
            />
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {coreStats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.06}>
                <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/35">
                  <p className="font-heading text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                </article>
              </FadeIn>
            ))}
            <FadeIn delay={0.16} className="sm:col-span-2">
              <article className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-5">
                <p className="text-sm italic text-cyan-100">
                  &quot;Projects completed, technologies used, and measurable business outcomes are
                  how EziLab earns trust before a long testimonial list.&quot;
                </p>
              </article>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
