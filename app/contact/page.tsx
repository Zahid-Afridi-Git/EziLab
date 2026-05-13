import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Mail, MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/site";

import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with EziLab for web development, app development, and digital product inquiries. Serving clients worldwide.",
  alternates: {
    canonical: "https://ezilab.io/contact",
  },
};

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    color: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan",
  },
  {
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`,
    icon: MessageCircle,
    color: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
  },
] as Array<{ label: string; value: string; href: string; icon: LucideIcon; color: string }>;

export default function ContactPage() {
  return (
    <main className="relative py-16 sm:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-brand-blue/[0.03] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full bg-brand-purple/[0.03] blur-[100px]" />
      </div>

      <Container>
        <FadeIn>
          <SectionHeading
            label="Contact"
            title="Let&apos;s discuss your next digital product."
            description="Tell us about your idea, product stage, and timeline. We will suggest the best path to execution."
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6">
              <h2 className="font-heading text-2xl font-semibold text-white">Contact Channels</h2>
              <ul className="mt-5 space-y-4">
                {contactLinks.map((item) => (
                  <li key={item.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 transition hover:border-brand-cyan/15">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md ${item.color}`}>
                        <item.icon size={12} />
                      </span>
                      {item.label}
                    </p>
                    {item.href === "#" ? (
                      <p className="mt-2 text-sm text-slate-200">{item.value}</p>
                    ) : (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-2 inline-flex text-sm text-brand-cyan transition hover:text-brand-blue"
                      >
                        {item.value}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-span-7">
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
