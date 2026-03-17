import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Brush,
  Headset,
  LayoutDashboard,
  ShoppingBag,
  Smartphone,
  Globe,
} from "lucide-react";

import { services } from "@/data/services";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const serviceIcons: Record<string, LucideIcon> = {
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "dashboard-admin-panels": LayoutDashboard,
  "ecommerce-solutions": ShoppingBag,
  "branding-ui-design": Brush,
  "maintenance-support": Headset,
};

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            label="Services"
            title="End-to-end digital services for product teams and businesses."
            description="From first concept to production release, EziLab handles strategy, design, development, and long-term support."
            align="center"
            className="mx-auto max-w-3xl"
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug] ?? Globe;

            return (
              <FadeIn key={service.slug} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_18px_38px_-26px_rgba(34,211,238,0.55)]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-cyan-200">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{service.summary}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-400">Value</p>
                  <p className="mt-2 text-sm text-slate-300">{service.value}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.1} className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex h-11 items-center rounded-full border border-slate-700 px-5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
          >
            Explore All Services
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
