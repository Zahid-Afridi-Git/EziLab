"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { mainNav, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/layout/theme-toggle";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 18);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
        isScrolled && "border-slate-800/80 bg-slate-950/80 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-slate-950">
            EZ
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-white">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {mainNav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition duration-200",
                  active
                    ? "bg-cyan-300/15 text-cyan-200"
                    : "text-slate-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            Start Your Project
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 text-slate-200 md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-0 top-[4.5rem] z-40 bg-slate-950/72 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 border-t border-slate-800 bg-slate-950/96 md:hidden"
            >
              <div className="flex h-full flex-col overflow-y-auto px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4">
                <nav className="flex flex-col gap-2">
                  {mainNav.map((item) => {
                    const active = isActivePath(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "rounded-2xl border px-4 py-4 text-base font-medium transition",
                          active
                            ? "border-cyan-300/30 bg-cyan-300/12 text-cyan-100"
                            : "border-slate-800 bg-slate-900/70 text-slate-200 hover:border-cyan-300/30 hover:text-white",
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Theme
                      </p>
                      <p className="mt-1 text-sm text-slate-200">Switch between dark and light modes.</p>
                    </div>
                    <ThemeToggle />
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-sm font-semibold text-slate-950 shadow-[0_20px_44px_-28px_rgba(34,211,238,0.8)]"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
