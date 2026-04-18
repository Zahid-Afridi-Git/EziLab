"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

const bgScreenshots = [
  "/images/projects/tak8/tak8-hero.png", "/images/projects/sukoon/hero-sectin.png",
  "/images/projects/eziwalk/eziwalk-hero.png", "/images/projects/tak8/tak8-booking.png",
];

export function ContactCta() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <Container>
        <FadeIn scale>
          <div className="card card-lg relative overflow-hidden p-6 text-center sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-2 gap-2 p-4 opacity-[0.03] sm:grid-cols-4">
              {bgScreenshots.map((src) => (
                <div key={src} className="relative overflow-hidden rounded-lg">
                  <Image src={src} alt="" fill sizes="25vw" className="object-cover" aria-hidden="true" />
                </div>
              ))}
            </div>

            <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} className="relative mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 sm:mb-6 sm:h-14 sm:w-14">
              <Zap size={22} className="text-sky-400" />
            </motion.div>

            <h2 className="relative mx-auto max-w-2xl text-balance font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Ready to build your next <span className="text-sky-400">digital product</span>?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-muted sm:mt-4 sm:text-base">
              Tell us what you need and we&apos;ll get back to you within 24 hours with a plan and timeline.
            </p>
            <div className="relative mt-6 flex flex-col gap-3 px-2 sm:mt-9 sm:flex-row sm:justify-center sm:px-0">
              <Link href="/contact" className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-7 text-[15px] font-semibold text-white shadow-lg shadow-sky-500/25 transition duration-300 hover:bg-sky-400 hover:shadow-sky-500/35 active:scale-[0.97] sm:h-12 sm:w-auto sm:text-sm">
                Get a Free Quote <ArrowUpRight size={16} />
              </Link>
              <Link href="/services" className="inline-flex h-[50px] w-full items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] px-7 text-[15px] font-semibold text-foreground shadow-sm transition duration-300 hover:bg-[var(--card-hover)] active:scale-[0.97] sm:h-12 sm:w-auto sm:text-sm">
                Explore Services
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
