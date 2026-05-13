import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";
import { ServicesProcess } from "@/components/services/services-process";
import { ServicesCTA } from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "EziLab services: custom web development, mobile apps, admin dashboards, e-commerce solutions, UI/UX design, and ongoing maintenance. Built with Next.js, React, and TypeScript.",
  alternates: {
    canonical: "https://ezilab.io/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-brand-cyan/[0.03] blur-[150px]" />
        <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-purple/[0.03] blur-[120px]" />
        <div className="absolute left-1/2 bottom-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/[0.03] blur-[100px]" />
      </div>

      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesCTA />
    </main>
  );
}
