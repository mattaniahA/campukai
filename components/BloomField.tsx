"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Bloom = { id: number; x: number; y: number; kind: "flower" | "bird"; hue: number };

const petalColors = ["var(--petal)", "var(--petal-deep)", "var(--leaf)"];

function Flower({ hue }: { hue: number }) {
  const color = petalColors[hue % petalColors.length];
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden>
      <g fill={color} opacity="0.9">
        {Array.from({ length: 6 }).map((_, i) => (
          <ellipse
            key={i}
            cx="32"
            cy="17"
            rx="7.5"
            ry="14"
            transform={`rotate(${i * 60} 32 32)`}
          />
        ))}
      </g>
      <circle cx="32" cy="32" r="7" fill="var(--ochre)" />
    </svg>
  );
}

function Bird() {
  return (
    <svg width="40" height="28" viewBox="0 0 40 28" aria-hidden>
      <path
        d="M2 20 C10 6 16 6 20 15 C24 6 30 6 38 20"
        fill="none"
        stroke="var(--haze-deep)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Minimal interaction layer for the landing hero.
 * Tap the wash → a flower blooms (or a bird flutters up) and fades.
 * A few petals drift in the background. Respects reduced motion.
 */
export default function BloomField() {
  const reduce = useReducedMotion();
  const [blooms, setBlooms] = useState<Bloom[]>([]);
  const nextId = useRef(0);

  const spawn = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = nextId.current++;
    const kind: Bloom["kind"] = Math.random() < 0.28 ? "bird" : "flower";
    setBlooms((b) => [
      ...b,
      {
        id,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        kind,
        hue: id,
      },
    ]);
    window.setTimeout(() => {
      setBlooms((b) => b.filter((x) => x.id !== id));
    }, 1900);
  }, []);

  const petals = [
    { left: "12%", top: "18%", d: 15, delay: 0 },
    { left: "78%", top: "12%", d: 18, delay: 1.4 },
    { left: "64%", top: "30%", d: 13, delay: 0.6 },
    { left: "30%", top: "40%", d: 20, delay: 2.1 },
    { left: "88%", top: "46%", d: 16, delay: 1 },
  ];

  return (
    <div className="absolute inset-0 z-0 cursor-pointer" onPointerDown={spawn}>
      {/* ambient drifting petals */}
      {!reduce &&
        petals.map((p, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute"
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

      {/* click blooms */}
      {blooms.map((b) => (
        <motion.div
          key={b.id}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: b.x, top: b.y }}
          initial={{ scale: 0, opacity: 0, rotate: b.kind === "flower" ? -30 : 0 }}
          animate={
            b.kind === "flower"
              ? { scale: [0, 1.05, 1, 1], opacity: [0, 1, 1, 0], rotate: [-30, 0, 0, 6], y: [0, -4, -6, -18] }
              : {
                  scale: [0, 1, 1],
                  opacity: [0, 1, 0],
                  y: [0, -60, -140],
                  x: [0, 24, 60],
                  rotate: [0, -8, -14],
                }
          }
          transition={{
            duration: b.kind === "flower" ? 1.9 : 1.8,
            ease: "easeOut",
            times: b.kind === "flower" ? [0, 0.25, 0.6, 1] : [0, 0.5, 1],
          }}
        >
          {b.kind === "flower" ? <Flower hue={b.hue} /> : <Bird />}
        </motion.div>
      ))}
    </div>
  );
}
