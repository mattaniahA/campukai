"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";
import BloomField from "./BloomField";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative isolate flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-5 text-center">
      {/* interactive wash — tap to bloom */}
      <BloomField />

      {/* content sits above; empty space falls through to the bloom layer */}
      <div className="pointer-events-none relative z-10 flex flex-col items-center">
        <motion.p {...rise(0)} className="label text-haze-deep">
          {site.dates}
        </motion.p>

        <h1 className="display mt-4 font-bold uppercase leading-[0.84] tracking-tight text-ink">
          <motion.span {...rise(0.08)} className="block text-6xl sm:text-8xl lg:text-9xl">
            Camp
          </motion.span>
          <motion.span
            {...rise(0.16)}
            className="block text-6xl text-moss-deep sm:text-8xl lg:text-9xl"
          >
            U-Kai
          </motion.span>
        </h1>

        <motion.p
          {...rise(0.28)}
          className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft"
        >
          A DIY summer camp in the hills of Ukiah. Come and play.
        </motion.p>

        <motion.p {...rise(0.36)} className="label mt-2 text-haze-deep/80">
          {site.location}
        </motion.p>

        <motion.div
          {...rise(0.46)}
          className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={site.ticketUrl}
            className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-paper transition-colors hover:bg-haze-deep"
          >
            Get tickets
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#about"
            className="border-b border-ink/40 pb-0.5 text-sm uppercase tracking-[0.18em] text-ink transition-colors hover:border-ink"
          >
            What it is
          </a>
        </motion.div>
      </div>

      {/* quiet invitation */}
      <motion.p
        {...rise(0.7)}
        className="pointer-events-none absolute bottom-6 z-10 text-[0.62rem] uppercase tracking-[0.2em] text-haze-deep/60"
      >
        tap anywhere ✿
      </motion.p>
    </section>
  );
}
