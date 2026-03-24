import Link from "next/link";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const differentiators = [
  "Cross-functional team with product, design, and engineering capability.",
  "Architecture decisions focused on speed today and scale tomorrow.",
  "Clear communication, documented delivery, and accountable execution.",
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-slate-900/70 via-slate-900/20 to-slate-900/70" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <FadeIn className="lg:col-span-6">
            <SectionHeading
              label="About EziLab"
              title="Elevate Zone of Innovation Laboratory — built to ship real products."
              description="EziLab is a space where ideas are elevated and turned into innovation. We deliver reliable digital products with strong design, scalable architecture, and measurable outcomes."
            />
            <Link
              href="/about"
              className="mt-6 inline-flex h-11 items-center rounded-full border border-slate-700 px-5 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-200"
            >
              Learn more about EziLab
            </Link>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-[0_24px_50px_-32px_rgba(34,211,238,0.5)]">
              <h3 className="font-heading text-xl font-semibold text-white">Why teams choose EziLab</h3>
              <ul className="mt-5 space-y-4">
                {differentiators.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-4 text-sm text-cyan-100">
                Trusted by founders and operational teams who need speed with structure.
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
