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
    <nav className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      {/* Blur backdrop */}
      <div
        className="flex items-end justify-around px-1 pb-[env(safe-area-inset-bottom)] pt-0"
        style={{
          background: "color-mix(in srgb, var(--card) 85%, transparent)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderTop: "1px solid var(--card-border)",
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
                className="relative -mt-4 flex flex-col items-center"
              >
                <motion.span
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                >
                  <Plus size={22} strokeWidth={2.5} />
                </motion.span>
                <span className="mt-0.5 text-[10px] font-medium text-sky-400">Start</span>
              </Link>
            );
          }

          return (
            <Link
              key={tab.href + tab.label}
              href={tab.href}
              className={cn(
                "relative flex min-w-[56px] flex-col items-center gap-0.5 py-2 transition-colors",
                active ? "text-sky-400" : "text-muted",
              )}
            >
              <span className="relative">
                <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
                {active && (
                  <motion.span
                    layoutId="tab-dot"
                    className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-sky-400"
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                )}
              </span>
              <span className={cn("text-[10px] font-medium", active && "text-sky-400")}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
