"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";

const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");
const phoneNumber = siteConfig.phone.replace(/[^\d+]/g, "");

const actions = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${whatsappNumber}`,
    icon: MessageCircle,
    color: "bg-[#25D366] text-white shadow-[0_12px_32px_-12px_rgba(37,211,102,.75)]",
    external: true,
  },
  {
    label: "Call us",
    href: `tel:${phoneNumber}`,
    icon: Phone,
    color: "bg-gradient-brand text-white shadow-[0_12px_32px_-12px_rgba(99,102,241,.75)]",
    external: false,
  },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const dragBounds = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibility = () => {
      const secondSection = document.getElementById("services-preview");
      const threshold = secondSection
        ? secondSection.offsetTop - window.innerHeight * 0.72
        : window.innerHeight * 0.65;
      const shouldShow = window.scrollY >= threshold;
      setVisible(shouldShow);
      if (!shouldShow) setOpen(false);
    };

    const frame = window.requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
    <motion.div
      ref={dragBounds}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pointer-events-none fixed inset-y-20 left-3 right-0 z-40 flex items-center justify-end sm:bottom-6 sm:left-6"
    >
    <motion.aside
      aria-label="Quick contact"
      initial={{ opacity: 0, x: 18, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 18, y: 12, scale: 0.9 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      drag
      dragConstraints={dragBounds}
      dragElastic={0.06}
      dragMomentum={false}
      whileDrag={{ scale: 1.04, cursor: "grabbing" }}
      className="pointer-events-auto relative flex touch-none cursor-grab items-center"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { transition: { staggerChildren: 0.07, delayChildren: 0.03 } },
              closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
            }}
            className="absolute right-[calc(100%+0.5rem)] top-1/2 flex -translate-y-1/2 flex-col items-end gap-2"
          >
            {actions.map((action) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  aria-label={`${action.label}: ${siteConfig.phone}`}
                  variants={{
                    open: { opacity: 1, x: 0, y: 0, scale: 1 },
                    closed: { opacity: 0, x: -12, y: 8, scale: 0.9 },
                  }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 3, scale: 1.02 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setOpen(false)}
                  className={`flex h-11 items-center rounded-full pr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${action.color}`}
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center">
                    <Icon size={18} strokeWidth={2.3} />
                  </span>
                  <span className="text-xs font-semibold">{action.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        whileHover={{ y: -2, scale: 1.04 }}
        whileTap={{ scale: 0.92 }}
        className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-[0_14px_34px_-12px_rgba(99,102,241,.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "contact"}
            initial={{ opacity: 0, rotate: -45, scale: 0.65 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.65 }}
            transition={{ duration: 0.18 }}
          >
            {open ? <X size={20} /> : <MessageCircle size={21} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </motion.aside>
    </motion.div>
      )}
    </AnimatePresence>
  );
}
