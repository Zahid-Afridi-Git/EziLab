"use client";

import { useInView } from "framer-motion";
import { type HTMLAttributes, type RefObject, useRef } from "react";

type RevealGroupProps = HTMLAttributes<HTMLDivElement> & {
  /** Fraction of the group that must be visible before its items animate in. */
  amount?: number;
  /** Supply a ref when the caller also needs the element (e.g. to scroll it). */
  elementRef?: RefObject<HTMLDivElement | null>;
};

/**
 * Marks itself with `data-inview` once scrolled into view, which starts the CSS
 * entrance of every `.reveal-item` inside it (stagger them with `--delay`).
 */
export function RevealGroup({ amount = 0.25, elementRef, children, ...props }: RevealGroupProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = elementRef ?? localRef;
  const inView = useInView(ref, { once: true, amount });

  return (
    <div ref={ref} data-inview={inView ? "" : undefined} {...props}>
      {children}
    </div>
  );
}
