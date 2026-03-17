import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

import { mainNav, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-slate-950">
              EZ
            </span>
            <p className="font-heading text-2xl font-semibold text-white">{siteConfig.name}</p>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex items-center gap-2">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-200"
            >
              <Github size={16} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-200"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-200"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-cyan-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>{siteConfig.location}</li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-cyan-200">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                className="transition hover:text-cyan-200"
              >
                WhatsApp: {siteConfig.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} EziLab. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
