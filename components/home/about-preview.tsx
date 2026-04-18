"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, PencilRuler, Code2, Rocket } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  { num: "01", icon: MessageSquare, title: "Tell us your idea", desc: "Share what you need — a website, app, dashboard, or store." },
  { num: "02", icon: PencilRuler, title: "We design it", desc: "Wireframes and visual designs before any code is written." },
  { num: "03", icon: Code2, title: "We build it", desc: "Modern tech — React, Next.js, React Native." },
  { num: "04", icon: Rocket, title: "You launch", desc: "Production-ready product you can grow with." },
];

const showcaseImages = [
  { src: "/images/projects/tak8/tak8-hero.png", alt: "TAK8 car rental" },
  { src: "/images/projects/sukoon/dua-library.png", alt: "Sukoon dua library" },
  { src: "/images/projects/eziwalk/eziwalk-hero.png", alt: "EziWalk e-commerce" },
  { src: "/images/projects/sukoon/habits-section.png", alt: "Sukoon habits" },
  { src: "/images/projects/tak8/tak8-booking.png", alt: "TAK8 booking" },
  { src: "/images/projects/eziwalk/News-area.png", alt: "EziWalk news" },
];

export function AboutPreview() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <Container>
        <FadeIn>
          <SectionHeading label="How It Works" title="From idea to launch in 4 simple steps." description="No jargon, no confusion. Here's exactly how we take your project from concept to a live product." align="center" className="mx-auto max-w-3xl" />
        </FadeIn>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.article key={step.num} initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="card group flex flex-col items-center p-4 text-center sm:p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 font-heading text-base font-bold text-sky-400 sm:h-14 sm:w-14 sm:text-xl">{step.num}</span>
                <span className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06] text-muted sm:mt-4 sm:h-10 sm:w-10">
                  <Icon size={16} />
                </span>
                <h3 className="mt-2.5 font-heading text-[13px] font-semibold text-white sm:mt-3 sm:text-base">{step.title}</h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted sm:mt-2 sm:text-sm">{step.desc}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Scrolling showcase */}
        <FadeIn delay={0.2} className="mt-10 sm:mt-16">
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-muted sm:mb-6 sm:text-xs">Built by EziLab</p>
          <div className="relative overflow-hidden rounded-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />
            <motion.div className="flex gap-3 px-3 sm:gap-4 sm:px-4" animate={{ x: [0, -1200] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 28, ease: "linear" } }}>
              {[...showcaseImages, ...showcaseImages].map((img, i) => (
                <div key={`${img.alt}-${i}`} className="relative h-[120px] w-[190px] shrink-0 overflow-hidden rounded-xl shadow-lg shadow-black/20 sm:h-[170px] sm:w-[280px] sm:rounded-2xl">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 190px, 280px" className="object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
