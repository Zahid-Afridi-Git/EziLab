"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  { num: "01", title: "Tell us your idea", desc: "Share what you need — a website, app, dashboard, or store." },
  { num: "02", title: "We design it", desc: "Wireframes and visual designs before any code is written." },
  { num: "03", title: "We build it", desc: "Modern tech — React, Next.js, React Native." },
  { num: "04", title: "You launch", desc: "Production-ready product you can grow with." },
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
    <section className="relative py-14 sm:py-20 lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/[0.03] blur-[150px]" />
      </div>

      <Container>
        <FadeIn>
          <SectionHeading label="How It Works" title="From idea to launch in 4 simple steps." description="No jargon, no confusion. Here's exactly how we take your project from concept to a live product." align="center" className="mx-auto max-w-3xl" />
        </FadeIn>

        {/* Connecting line on desktop */}
        <div className="relative mt-8 sm:mt-14">
          <div className="pointer-events-none absolute left-8 right-8 top-[3rem] hidden h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent lg:block" />

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {steps.map((step, i) => {
              const numColors = ["text-brand-cyan", "text-brand-blue", "text-brand-purple", "text-brand-cyan"];
              const bgColors = ["bg-brand-cyan/10", "bg-brand-blue/10", "bg-brand-purple/10", "bg-brand-cyan/10"];
              return (
                <motion.article key={step.num} initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="card card-glow group flex flex-col items-center p-5 text-center sm:p-6">
                  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${bgColors[i]} font-heading text-xl font-bold sm:h-16 sm:w-16 sm:text-2xl ${numColors[i]}`}>
                    {step.num}
                  </span>
                  <h3 className="mt-4 font-heading text-[14px] font-semibold text-white sm:mt-5 sm:text-base">{step.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted sm:mt-2.5 sm:text-sm">{step.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Scrolling showcase */}
        <FadeIn delay={0.2} className="mt-10 sm:mt-16">
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-muted sm:mb-6 sm:text-xs">Built by EziLab</p>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />
            <motion.div className="flex gap-3 px-3 sm:gap-4 sm:px-4" animate={{ x: [0, -1200] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 28, ease: "linear" } }}>
              {[...showcaseImages, ...showcaseImages].map((img, i) => (
                <div key={`${img.alt}-${i}`} className="relative h-[130px] w-[200px] shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-black/20 sm:h-[170px] sm:w-[280px] sm:rounded-3xl">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 190px, 280px" className="object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </Container>

      <div className="section-divider mt-14 sm:mt-20" />
    </section>
  );
}
