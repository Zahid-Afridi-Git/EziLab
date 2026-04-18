"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Brush, Globe, Headset, LayoutDashboard, ShoppingBag, Smartphone } from "lucide-react";
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
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            label="What We Do"
            title="Everything you need to go digital."
            description="Whether you need a website, mobile app, online store, or admin dashboard — we handle the full process from design to deployment."
            align="center"
            className="mx-auto max-w-3xl"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.slug] ?? Globe;
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="card group flex h-full flex-col p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-white">{service.title}</h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.deliverables.slice(0, 2).map((d) => (
                    <span key={d} className="inline-flex rounded-full bg-sky-500/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-sky-400/80">
                      {d}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <FadeIn delay={0.1} className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex h-11 items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-6 text-sm font-semibold text-foreground shadow-sm transition duration-300 hover:bg-[var(--card-hover)] active:scale-[0.98]"
          >
            See All Services
            <ArrowUpRight size={14} />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
