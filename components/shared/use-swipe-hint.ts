"use client";

import { useInView } from "framer-motion";
import { type RefObject, useEffect } from "react";

/**
 * Nudges a horizontally scrollable row once when it first appears, so touch
 * users can see there is more to swipe. Ignored on pointer devices.
 */
export function useSwipeHint(ref: RefObject<HTMLElement | null>, enabled = true) {
  const inView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    const row = ref.current;
    if (!row || !inView || !enabled) return;
    if (!window.matchMedia("(hover: none)").matches) return;
    if (row.scrollWidth <= row.clientWidth + 8 || row.scrollLeft > 4) return;

    // Mandatory scroll snapping would yank the nudge straight back, so pause it.
    const snapType = row.style.scrollSnapType;
    row.style.scrollSnapType = "none";

    let frame = 0;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / 1500);
      row.scrollLeft = 46 * Math.sin(progress * Math.PI);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
        return;
      }
      row.style.scrollSnapType = snapType;
    };
    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      row.style.scrollSnapType = snapType;
    };
  }, [enabled, inView, ref]);
}
