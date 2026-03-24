import Link from "next/link";

import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

export function ContactCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500/20 via-blue-500/18 to-indigo-500/14 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-balance font-heading text-3xl font-semibold text-white sm:text-4xl">
              Have a project in mind? Let&apos;s build it together.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Share your goals and scope. EziLab will help you shape the roadmap and deliver a
              strong digital product from concept to launch.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 text-sm font-semibold text-slate-950 transition hover:brightness-110 sm:w-auto"
              >
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-cyan-300/40 px-6 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100 sm:w-auto"
              >
                Our Services
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
