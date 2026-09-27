"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Fragment } from "react";
import { cn } from "@/lib/cn";

type Token = { text: string; glint?: "a" | "b" | "full"; tail?: string };

const glintClass = {
  a: "[--glint-gradient:var(--gradient-brand-a)]",
  b: "[--glint-delay:1.75s] [--glint-gradient:var(--gradient-brand-b)]",
  full: "",
};

const headingVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.06 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.18em", rotateX: -18, filter: "blur(7px)" },
  visible: {
    opacity: 1,
    y: "0em",
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Splits the heading into groups of words. Every word animates on its own, and
 * a multi-word `highlight` forms one group that stays on a single line, sharing
 * the gradient across its words with trailing punctuation glued to the last.
 */
function tokenize(text: string, highlight?: string): Token[][] {
  if (!highlight || !text.includes(highlight)) return text.split(" ").map((word) => [{ text: word }]);

  const [before, after = ""] = text.split(highlight);
  const [tail = "", ...rest] = after.split(" ");
  const highlighted = highlight.split(" ").filter(Boolean);

  return [
    ...before.split(" ").filter(Boolean).map((word) => [{ text: word }]),
    highlighted.map((word, index) => ({
      text: word,
      glint: (highlighted.length === 1 ? "full" : index === 0 ? "a" : index === highlighted.length - 1 ? "b" : "full") as Token["glint"],
      tail: index === highlighted.length - 1 ? tail : undefined,
    })),
    ...rest.filter(Boolean).map((word) => [{ text: word }]),
  ];
}

type RevealHeadingProps = {
  text: string;
  /** Part of `text` rendered in the brand gradient with a sweeping glint. */
  highlight?: string;
  className?: string;
};

/** Section heading whose words rise in one after another when scrolled into view. */
export function RevealHeading({ text, highlight, className }: RevealHeadingProps) {
  const reduceMotion = useReducedMotion();
  const groups = tokenize(text, highlight);

  return (
    <motion.h2
      className={cn("[perspective:900px]", className)}
      variants={headingVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {groups.map((tokens, groupIndex) => (
        <Fragment key={`${tokens[0].text}-${groupIndex}`}>
          {/* Grouped words stay on one line; below 360px they may wrap rather than overflow. */}
          <span className={tokens.length > 1 ? "min-[360px]:whitespace-nowrap" : undefined}>
            {tokens.map((token, index) => (
              <Fragment key={`${token.text}-${index}`}>
                <motion.span variants={wordVariants} className="inline-block origin-bottom">
                  {token.glint ? (
                    <span className={cn("gradient-glint -mr-[0.08em] pr-[0.08em]", glintClass[token.glint])}>{token.text}</span>
                  ) : (
                    token.text
                  )}
                  {token.tail}
                </motion.span>
                {index < tokens.length - 1 && "\u00A0"}
              </Fragment>
            ))}
          </span>
          {groupIndex < groups.length - 1 && " "}
        </Fragment>
      ))}
    </motion.h2>
  );
}
