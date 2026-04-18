"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Clock, Repeat, Target } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const stats = [
  { icon: Target, value: "28+", label: "Projects delivered" },
  { icon: Award, value: "9", label: "Industries served" },
  { icon: Clock, value: "6–10 wks", label: "Avg. delivery" },
  { icon: Repeat, value: "92%", label: "Client retention" },
];

const devices = [
  { src: "/images/projects/tak8/tak8-hero.png", alt: "TAK8 website" },
  { src: "/images/projects/sukoon/sukoon-greeting page.png", alt: "Sukoon app" },
  { src: "/images/projects/eziwalk/eziwalk-hero.png", alt: "EziWalk store" },
];

export function TrustSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <Container>
        <FadeIn>
          <SectionHeading label="Why EziLab" title="Numbers that speak for themselves." description="We let our delivery track record do the talking." align="center" className="mx-auto max-w-2xl" />
        </FadeIn>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.article key={stat.label} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="card group flex flex-col items-center p-4 text-center sm:p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 sm:h-11 sm:w-11">
                  <Icon size={18} />
                </span>
                <p className="mt-2.5 font-heading text-2xl font-semibold tracking-tight text-white sm:mt-3 sm:text-3xl">{stat.value}</p>
                <p className="mt-0.5 text-[12px] text-muted sm:mt-1 sm:text-sm">{stat.label}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Device showcase — mobile shows phone only, desktop shows all 3 */}
        <FadeIn delay={0.15} scale className="mt-10 sm:mt-16">
          <div className="relative mx-auto flex max-w-4xl items-end justify-center gap-3 sm:gap-6">
            {/* Desktop left — hidden on mobile */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="hidden w-[240px] sm:block lg:w-[280px]">
              <div className="card card-lg overflow-hidden !rounded-b-none !shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-[var(--card-border)] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="relative aspect-[16/10]"><Image src={devices[0].src} alt={devices[0].alt} fill sizes="280px" className="object-cover" /></div>
              </div>
            </motion.div>

            {/* Mobile center — always visible */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="relative z-10 w-[130px] sm:w-[160px]">
              <div className="overflow-hidden rounded-[1.5rem] border-[3px] border-[#3a3a3c] bg-black p-1 shadow-2xl shadow-black/40 sm:rounded-[1.75rem]">
                <div className="mx-auto mb-0.5 h-1 w-8 rounded-full bg-[#3a3a3c] sm:mb-1 sm:h-1.5 sm:w-10" />
                <div className="relative aspect-[9/19] overflow-hidden rounded-[1rem] sm:rounded-[1.25rem]">
                  <Image src={devices[1].src} alt={devices[1].alt} fill sizes="160px" className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Desktop right — hidden on mobile */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="hidden w-[240px] sm:block lg:w-[280px]">
              <div className="card card-lg overflow-hidden !rounded-b-none !shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-[var(--card-border)] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="relative aspect-[16/10]"><Image src={devices[2].src} alt={devices[2].alt} fill sizes="280px" className="object-cover" /></div>
              </div>
            </motion.div>
          </div>
          <p className="mt-4 text-center text-[11px] text-muted sm:mt-5 sm:text-xs">Real products — websites, mobile apps, and dashboards</p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-6 text-center sm:mt-8">
          <Link href="/about" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-sky-400 transition hover:text-sky-300 sm:text-sm">
            Learn more about our team <ArrowUpRight size={14} />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
