import type { PointerEvent } from "react";

/**
 * Writes the pointer position (relative to the element) to --mx / --my for CSS
 * cursor effects. Touch counts too, so a tap lights up the spot it landed on.
 */
export function trackPointer(event: PointerEvent<HTMLElement>) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  element.style.setProperty("--my", `${event.clientY - rect.top}px`);
}
