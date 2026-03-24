import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Brush,
  Globe,
  Headset,
  LayoutDashboard,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

import { services } from "@/data/services";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "EziLab services: custom web development, mobile apps, admin dashboards, e-commerce solutions, UI/UX design, and ongoing maintenance. Built with Next.js, React, and TypeScript.",
  alternates: {
    canonical: "https://ezilab.io/services",
  },
};

const serviceIcons: Record<string, LucideIcon> = {
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "dashboard-admin-panels": LayoutDashboard,
  "ecommerce-solutions": ShoppingBag,
  "branding-ui-design": Brush,
  "maintenance-support": Headset,
};

export default function ServicesPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            label="Services"
            title="What EziLab builds for organizations and product teams."
            description="Every service is scoped around business goals, user needs, and maintainable engineering."
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_18px_40px_-28px_rgba(34,211,238,0.65)]">
                {(() => {
                  const Icon = serviceIcons[service.slug] ?? Globe;
                  return (
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-cyan-200">
                      <Icon size={18} />
                    </span>
                  );
                })()}
                <h2 className="mt-4 font-heading text-2xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {service.summary}
                </p>

                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Who this is for
                    </dt>
                    <dd className="mt-1 text-slate-200">{service.forWho}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Value
                    </dt>
                    <dd className="mt-1 text-slate-200">{service.value}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      What we deliver
                    </dt>
                    <dd className="mt-2">
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex gap-2 text-slate-200">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-12">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <h3 className="font-heading text-2xl font-semibold text-white">
              Need a custom scope instead of a fixed package?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Share your product goals and EziLab will prepare a tailored delivery roadmap.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-11 items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              Talk to EziLab
            </Link>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
