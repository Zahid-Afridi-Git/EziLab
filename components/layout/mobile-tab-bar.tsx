"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Users, Mail, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const tabs = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Start", href: "/contact", icon: Plus, cta: true },
  { label: "About", href: "/about", icon: Users },
  { label: "Contact", href: "/contact", icon: Mail },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-50 px-2 pb-[max(0.4rem,env(safe-area-inset-bottom))] md:hidden">
      <div
        className="surface-glass mx-auto flex max-w-md items-end justify-around rounded-[1.35rem] px-1"
        style={{
          background: "color-mix(in srgb, var(--card) 88%, transparent)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
        }}
      >
        {tabs.map((tab) => {
          const active = isActive(pathname, tab.href);
          const Icon = tab.icon;

          if (tab.cta) {
            return (
              <Link
                key="cta"
                href={tab.href}
                aria-label="Start a project"
                className="relative -mt-3 flex flex-col items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
              >
                <motion.span
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-[0_14px_30px_-10px_rgba(99,102,241,.8)]"
                >
                  <Plus size={22} strokeWidth={2.5} />
                </motion.span>
                <span className="mt-0.5 text-[10px] font-medium text-brand-cyan">Start</span>
              </Link>
            );
          }

          return (
            <Link
              key={tab.href + tab.label}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative my-1 flex min-w-[56px] flex-col items-center gap-0.5 rounded-xl py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/45",
                active ? "text-brand-cyan" : "text-muted",
              )}
            >
              {active && (
                <motion.span
                  layoutId="mobile-active-tab"
                  className="absolute inset-x-1 inset-y-0 rounded-xl border border-[var(--card-border)] bg-[var(--surface-soft)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
              </span>
              <span className={cn("relative z-10 text-[10px] font-medium", active && "text-brand-cyan")}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
