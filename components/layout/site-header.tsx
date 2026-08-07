"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { mainNav, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 h-14 sm:h-[4.75rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/80 to-transparent opacity-0 transition-opacity duration-300 sm:block" style={{ opacity: isScrolled ? 1 : 0 }} />

      <motion.div
        initial={false}
        animate={{ y: isScrolled ? 8 : 0, scale: isScrolled ? 0.985 : 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-6xl px-3 sm:px-6 lg:px-8"
      >
        <div
          className={cn(
            "flex h-14 items-center justify-between px-1 transition-all duration-300 sm:h-[4.5rem] sm:px-3",
            isScrolled && "surface-glass rounded-2xl px-3 shadow-[0_18px_55px_-28px_rgba(79,70,229,.55)] sm:h-[3.75rem] sm:rounded-full sm:px-3",
          )}
        >
          <Link href="/" aria-label="EziLab home" className="group absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 md:static md:translate-x-0">
            <Image
              src="/Logo/Ezilab Complete logo icon.png"
              alt=""
              width={48}
              height={48}
              priority
              className={cn("h-10 w-10 transition-transform duration-300 group-hover:rotate-[-5deg] md:h-11 md:w-11", isScrolled && "md:h-9 md:w-9")}
            />
            <span className="text-heading font-heading text-base font-semibold tracking-tight md:text-lg">{siteConfig.shortName}</span>
          </Link>

          <nav aria-label="Primary navigation" className="relative hidden items-center rounded-full border border-[var(--card-border)] bg-[var(--surface-soft)] p-1 md:flex">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/45 lg:px-4",
                    active ? "text-foreground" : "text-muted hover:text-foreground",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="desktop-active-nav"
                      className="absolute inset-0 rounded-full border border-[var(--card-border)] bg-[var(--surface-strong)] shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/contact"
              className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-gradient-brand px-5 text-[13px] font-semibold text-white shadow-[0_12px_30px_-14px_rgba(99,102,241,.8)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
            >
              Start a project
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="h-10 w-10 md:hidden" aria-hidden="true" />
        </div>
      </motion.div>
    </header>
  );
}
