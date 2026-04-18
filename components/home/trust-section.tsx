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
  { icon: Clock, value: "6–10 wks", label: "Avg. delivery time" },
  { icon: Repeat, value: "92%", label: "Client retention" },
];

const devices = [
  { src: "/images/projects/tak8/tak8-hero.png", alt: "TAK8 website" },
  { src: "/images/projects/sukoon/sukoon-greeting page.png", alt: "Sukoon app" },
  { src: "/images/projects/eziwalk/eziwalk-hero.png", alt: "EziWalk store" },
];

export function TrustSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading label="Why EziLab" title="Numbers that speak for themselves." description="We let our delivery track record do the talking." align="center" className="mx-auto max-w-2xl" />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="card group flex flex-col items-center p-6 text-center"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                  <Icon size={20} />
                </span>
                <p className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Device showcase */}
        <FadeIn delay={0.15} scale className="mt-16">
          <div className="relative mx-auto flex max-w-4xl items-end justify-center gap-4 sm:gap-6">
            {/* Desktop left */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="hidden w-[280px] sm:block">
              <div className="card card-lg overflow-hidden !rounded-b-none !shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-[var(--card-border)] px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="relative aspect-[16/10]">
                  <Image src={devices[0].src} alt={devices[0].alt} fill sizes="280px" className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Mobile center */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="relative z-10 w-[140px] sm:w-[160px]">
              <div className="overflow-hidden rounded-[1.75rem] border-[3px] border-[#3a3a3c] bg-black p-1 shadow-2xl shadow-black/40">
                <div className="mx-auto mb-1 h-1.5 w-10 rounded-full bg-[#3a3a3c]" />
                <div className="relative aspect-[9/19] overflow-hidden rounded-[1.25rem]">
                  <Image src={devices[1].src} alt={devices[1].alt} fill sizes="160px" className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Desktop right */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="hidden w-[280px] sm:block">
              <div className="card card-lg overflow-hidden !rounded-b-none !shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-[var(--card-border)] px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="relative aspect-[16/10]">
                  <Image src={devices[2].src} alt={devices[2].alt} fill sizes="280px" className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
          <p className="mt-5 text-center text-xs text-muted">Real products — websites, mobile apps, and dashboards</p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8 text-center">
          <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 transition hover:text-sky-300">
            Learn more about our team <ArrowUpRight size={14} />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
