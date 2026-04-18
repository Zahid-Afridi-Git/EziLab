import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { mainNav, siteConfig } from "@/data/site";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies", href: "/cookies" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--card)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Top section */}
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500 text-sm font-bold text-white">EZ</span>
              <p className="font-heading text-xl font-semibold text-white sm:text-2xl">{siteConfig.name}</p>
            </div>
            <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-muted sm:mt-4 sm:text-sm">{siteConfig.description}</p>
            <div className="mt-4 flex items-center gap-2 sm:mt-5">
              {[
                { href: siteConfig.social.github, label: "GitHub", Icon: Github },
                { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: siteConfig.social.x, label: "X", Icon: Twitter },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground/[0.06] text-muted transition hover:text-sky-400 active:scale-95">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links — 2-col on mobile, 3 separate on desktop */}
          <div className="col-span-1 grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-3 lg:grid-cols-3">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted sm:text-xs">Quick Links</h3>
              <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[13px] text-foreground/70 transition hover:text-sky-400 sm:text-sm">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted sm:text-xs">Policies</h3>
              <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[13px] text-foreground/70 transition hover:text-sky-400 sm:text-sm">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted sm:text-xs">Contact</h3>
              <ul className="mt-3 space-y-2.5 text-[13px] text-foreground/70 sm:mt-4 sm:space-y-3 sm:text-sm">
                <li><a href={`mailto:${siteConfig.email}`} className="transition hover:text-sky-400">{siteConfig.email}</a></li>
                <li><a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} className="transition hover:text-sky-400">WhatsApp: {siteConfig.whatsapp}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center gap-2 border-t border-[var(--card-border)] pt-6 text-[11px] text-muted sm:mt-10 sm:flex-row sm:justify-between sm:pt-8 sm:text-xs">
          <p>&copy; {new Date().getFullYear()} EziLab. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
