"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Smartphone } from "lucide-react";
import { type CSSProperties } from "react";
import { apps } from "@/data/apps";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Magnetic } from "@/components/shared/magnetic";
import { RevealGroup } from "@/components/shared/reveal-group";
import { RevealHeading } from "@/components/shared/reveal-heading";
import { trackPointer } from "@/lib/pointer";

export function AppShowcase() {
  return (
    <section id="apps" className="section-flow relative isolate scroll-mt-20 overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand-purple/[0.07] blur-[150px]" />

      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="orbit-border sheen relative inline-flex items-center gap-2 rounded-full border border-white/12 bg-[var(--surface-soft)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-cyan backdrop-blur-xl [--orbit-duration:5s]">
              <Smartphone size={13} className="twinkle" />
              Our own apps
            </span>
            <RevealHeading
              text="Apps live on Google Play"
              highlight="live on Google Play"
              className="text-heading mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            />
            <p className="text-body mx-auto mt-4 max-w-2xl text-[15px] leading-7 sm:text-base">
              Products we designed, built and shipped ourselves — the same process we run for client work, with our own
              name on the listing.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {apps.map((app, index) => {
            const flipped = index % 2 === 1;

            return (
              <div
                key={app.name}
                style={{ "--app-accent": app.accent, "--app-glow": app.glow } as CSSProperties}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <FadeIn scale className={flipped ? "lg:order-2" : undefined}>
                  <div
                    onPointerMove={trackPointer}
                    onPointerDown={trackPointer}
                    className="spotlight-card spotlight-lg relative [--ring-inset:0px] [--spot-color:var(--app-glow)]"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[78%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
                      style={{ background: app.glow }}
                    />
                    <Image
                      src={app.showcase}
                      alt={`${app.name} app screens`}
                      width={2400}
                      height={1500}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="float-y h-auto w-full [--float-distance:-10px]"
                      style={{ "--float-delay": `${index * -1.8}s` } as CSSProperties}
                    />
                  </div>
                </FadeIn>

                <div className={flipped ? "lg:order-1" : undefined}>
                  <FadeIn delay={0.06}>
                    <span
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: app.accent }}
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span
                          className="ping-soft absolute inset-0 rounded-full [--ping-scale:2.8]"
                          style={{ background: app.accent }}
                          aria-hidden="true"
                        />
                        <span className="relative h-1.5 w-1.5 rounded-full" style={{ background: app.accent }} />
                      </span>
                      {app.category}
                    </span>

                    <h3 className="text-heading mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                      {app.name}
                    </h3>
                    <p className="text-body mt-3 max-w-lg text-[15px] leading-7 sm:text-base">{app.tagline}</p>
                  </FadeIn>

                  <RevealGroup className="mt-7 space-y-3" amount={0.3}>
                    {app.points.map((point, pointIndex) => (
                      <div
                        key={point}
                        className="reveal-item flex items-start gap-3"
                        style={{ "--delay": `${pointIndex * 0.08}s` } as CSSProperties}
                      >
                        <span
                          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: `${app.accent}22`, color: app.accent }}
                        >
                          <Check size={12} strokeWidth={3} className="draw-check" />
                        </span>
                        <span className="text-body text-sm leading-6">{point}</span>
                      </div>
                    ))}
                  </RevealGroup>

                  <FadeIn delay={0.12}>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Magnetic>
                        <a
                          href={app.storeHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-shine group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60 active:scale-[0.98]"
                        >
                          Get it on Google Play
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      </Magnetic>
                      {app.caseStudyHref ? (
                        <Link
                          href={app.caseStudyHref}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition hover:gap-3 hover:text-brand-purple"
                        >
                          Explore case study <ArrowUpRight size={15} />
                        </Link>
                      ) : null}
                    </div>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
