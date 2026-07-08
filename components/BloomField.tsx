"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Ambient background layer for the landing hero.
 * A few petals drift slowly in the background. Respects reduced motion.
 */
export default function BloomField() {
  const reduce = useReducedMotion();

  const petals = [
    { left: "12%", top: "18%", d: 15, delay: 0 },
    { left: "78%", top: "12%", d: 18, delay: 1.4 },
    { left: "64%", top: "30%", d: 13, delay: 0.6 },
    { left: "30%", top: "40%", d: 20, delay: 2.1 },
    { left: "88%", top: "46%", d: 16, delay: 1 },
  ];

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: p.left, top: p.top }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.5, 0], y: [0, -p.d, -p.d * 1.6], rotate: [0, 25, -10] }}
          transition={{
            duration: 9 + i,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            <ellipse cx="9" cy="9" rx="4" ry="8" fill="var(--paper-soft)" opacity="0.85" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
