"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, PencilRuler, Code2, Rocket } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  { num: "01", icon: MessageSquare, title: "Tell us your idea", desc: "Share what you need — a website, app, dashboard, or store. We'll scope it together." },
  { num: "02", icon: PencilRuler, title: "We design it", desc: "You get wireframes and visual designs to review before any code is written." },
  { num: "03", icon: Code2, title: "We build it", desc: "Our team develops your product with modern tech — React, Next.js, React Native." },
  { num: "04", icon: Rocket, title: "You launch", desc: "We deploy, test, and hand over a production-ready product you can grow with." },
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
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            label="How It Works"
            title="From idea to launch in 4 simple steps."
            description="No jargon, no confusion. Here's exactly how we take your project from concept to a live product."
            align="center"
            className="mx-auto max-w-3xl"
          />
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="card group flex flex-col items-center p-6 text-center"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 font-heading text-xl font-bold text-sky-400">
                  {step.num}
                </span>
                <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.06] text-muted">
                  <Icon size={18} />
                </span>
                <h3 className="mt-3 font-heading text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Scrolling showcase */}
        <FadeIn delay={0.2} className="mt-16">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted">Built by EziLab</p>
          <div className="relative overflow-hidden rounded-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
            <motion.div
              className="flex gap-4 px-4"
              animate={{ x: [0, -1200] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 28, ease: "linear" } }}
            >
              {[...showcaseImages, ...showcaseImages].map((img, i) => (
                <div key={`${img.alt}-${i}`} className="relative h-[150px] w-[240px] shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-black/20 sm:h-[170px] sm:w-[280px]">
                  <Image src={img.src} alt={img.alt} fill sizes="280px" className="object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
