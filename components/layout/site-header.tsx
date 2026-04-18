"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/layout/theme-toggle";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 shadow-sm backdrop-blur-xl" : "bg-transparent",
    )}>
      <div className="mx-auto flex h-12 w-full max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500 text-[10px] font-bold text-white sm:h-9 sm:w-9 sm:text-sm">EZ</span>
          <span className="font-heading text-[15px] font-semibold tracking-tight text-white sm:text-lg">{siteConfig.shortName}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition duration-200",
              isActivePath(pathname, item.href) ? "bg-sky-500/10 text-sky-400" : "text-muted hover:text-foreground",
            )}>{item.label}</Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link href="/contact" className="inline-flex h-10 items-center rounded-full bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-400 active:scale-[0.98]">
            Start Your Project
          </Link>
        </div>

        {/* Mobile right — just theme toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
