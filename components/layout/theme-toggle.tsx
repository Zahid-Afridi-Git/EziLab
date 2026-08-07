"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const storageKey = "ezilab-theme";
const themeEvent = "ezilab-theme-change";

function getThemeSnapshot(): Theme {
  const current = document.documentElement.dataset.theme;
  return current === "light" ? "light" : "dark";
}

function subscribe(callback: () => void) {
  window.addEventListener(themeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(themeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => "dark" as Theme);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
    window.dispatchEvent(new Event(themeEvent));
  }

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <motion.button
      type="button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9, rotate: -8 }}
      className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--card-border)] bg-[var(--surface-soft)] text-muted shadow-sm transition hover:border-brand-purple/35 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
    >
      <span className="absolute inset-0 bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-[0.08]" />
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative"
      >
        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </motion.button>
  );
}
