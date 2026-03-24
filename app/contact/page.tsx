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
  },
  {
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`,
    icon: MessageCircle,
  },
] as Array<{ label: string; value: string; href: string; icon: LucideIcon }>;

export default function ContactPage() {
  return (
    <main className="py-16 sm:py-20">
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
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="font-heading text-2xl font-semibold text-white">Contact Channels</h2>
              <ul className="mt-5 space-y-4">
                {contactLinks.map((item) => (
                  <li key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      <item.icon size={14} />
                      {item.label}
                    </p>
                    {item.href === "#" ? (
                      <p className="mt-2 text-sm text-slate-200">{item.value}</p>
                    ) : (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-2 inline-flex text-sm text-cyan-200 transition hover:text-cyan-100"
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
