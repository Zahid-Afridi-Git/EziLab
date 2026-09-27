"use client";

import { useInView } from "framer-motion";
import { type CSSProperties, useRef } from "react";

type CountUpProps = {
  value: string;
  delay?: number;
  /** Start on first paint instead of waiting to scroll into view. */
  immediate?: boolean;
};

/**
 * Counts every number inside `value` up from zero (e.g. "6–10" → both parts),
 * keeping any other characters as-is. Screen readers get the final value.
 */
export function CountUp({ value, delay = 0, immediate = false }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const parts = value.split(/(\d+)/).filter(Boolean);
  const firstNumber = parts.findIndex((part) => /^\d+$/.test(part));

  return (
    <>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden="true" data-run={immediate || inView ? "" : undefined}>
        {parts.map((part, index) =>
          /^\d+$/.test(part) ? (
            <span
              key={index}
              className="count-up"
              style={
                {
                  "--to": Number(part),
                  "--digits": part.length,
                  "--delay": `${delay}s`,
                  textAlign: index === firstNumber ? "right" : "left",
                } as CSSProperties
              }
            />
          ) : (
            <span key={index}>{part}</span>
          ),
        )}
      </span>
    </>
  );
}
