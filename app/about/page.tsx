import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  Compass,
  Eye,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

import { siteConfig } from "@/data/site";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "EziLab (Elevate Zone of Innovation Lab) is a web and app development platform that builds modern websites, mobile apps, and dashboards for startups and growing businesses worldwide.",
  alternates: {
    canonical: "https://ezilab.io/about",
  },
};

const values: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Build with clarity, not complexity.", icon: Compass },
  { label: "Design for users and business outcomes together.", icon: Lightbulb },
  { label: "Ship fast, then improve with data and feedback.", icon: Rocket },
  { label: "Document decisions so teams can scale without chaos.", icon: ShieldCheck },
];

const industries = [
  "Mobility and logistics",
  "Education and training",
  "Healthcare and services",
  "Commerce and retail",
  "Public and civic platforms",
];

const team = [
  {
    name: "Founder",
    role: "Founder & Product Strategist",
    summary:
      "Leads discovery, product direction, and stakeholder alignment for new digital initiatives.",
  },
  {
    name: "Design Lead",
    role: "Design Lead",
    summary:
      "Owns visual systems, interface architecture, and usability quality across all product surfaces.",
  },
  {
    name: "Engineering Lead",
    role: "Engineering Lead",
    summary:
      "Drives frontend and backend execution with scalable architecture and release discipline.",
  },
];

const milestones = [
  { year: "2025", title: "Organization Direction Defined", text: "EziLab aligned around organization-grade product delivery instead of isolated freelance builds." },
  { year: "2025 Q3", title: "Case-Study First Workflow", text: "Introduced structured challenge-solution-outcome documentation across active projects." },
  { year: "2026 Q1", title: "Multi-Domain Delivery", text: "Expanded delivery across mobility, commerce, education, and healthcare products." },
  { year: "2026", title: "Future Tech Initiatives", text: "Started prototyping AI-enabled workflows and dashboard intelligence modules for clients." },
];

export default function AboutPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            label="About EziLab"
            title="Elevate Zone of Innovation Lab — your platform for building websites and apps."
            description={siteConfig.description}
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <FadeIn>
            <article className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-cyan-200">
                <Building2 size={18} />
              </span>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-white">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Turn ideas into powerful digital products with clean design, strong functionality,
                and scalable architecture.
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-cyan-200">
                <Eye size={18} />
              </span>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-white">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Become a trusted product partner for organizations building the next generation of
                digital experiences across web, mobile, data, and AI-enabled platforms.
              </p>
            </article>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <h3 className="font-heading text-2xl font-semibold text-white">How EziLab works</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              EziLab blends product strategy, UI/UX design, engineering, and delivery management
              into one execution model. We focus on building software that solves specific
              operational and growth problems, not just visuals.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <li
                  key={value.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <value.icon size={15} className="text-cyan-200" />
                    <span>{value.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
              <h3 className="font-heading text-2xl font-semibold text-white">Focus industries</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {industries.map((industry) => (
                  <li key={industry} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="mt-12">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
            <h3 className="flex items-center gap-2 font-heading text-2xl font-semibold text-white">
              <Users size={20} className="text-cyan-200" />
              Team & Leadership
            </h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {team.map((member) => (
                <article key={member.name} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <p className="font-heading text-lg font-semibold text-white">{member.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{member.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.13} className="mt-10">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
            <h3 className="flex items-center gap-2 font-heading text-2xl font-semibold text-white">
              <BriefcaseBusiness size={20} className="text-cyan-200" />
              EziLab Journey
            </h3>
            <div className="relative mt-6 space-y-4 pl-5">
              <div className="pointer-events-none absolute left-1.5 top-2 bottom-2 w-px bg-slate-700" />
              {milestones.map((milestone) => (
                <article key={milestone.title} className="relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <span className="absolute -left-[1.55rem] top-5 h-3 w-3 rounded-full border border-cyan-200 bg-cyan-300/70" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    {milestone.year}
                  </p>
                  <h4 className="mt-1 font-heading text-lg font-semibold text-white">{milestone.title}</h4>
                  <p className="mt-2 text-sm text-slate-300">{milestone.text}</p>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-12">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
            <h3 className="font-heading text-2xl font-semibold text-white">
              Ready to collaborate with EziLab?
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              We collaborate with founders, internal teams, and organizations that need dependable
              product execution.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-[#030712] transition hover:brightness-110"
              >
                Contact EziLab
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center rounded-full border border-white/[0.08] px-5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
