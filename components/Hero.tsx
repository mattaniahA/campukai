"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative isolate flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-5 text-center">
      {/* ghost script flowing behind the headline */}
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className="script-ghost pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center text-center leading-[0.75]"
      >
        <span className="text-[32vw] sm:text-[24vw]">Camp</span>
        <span className="text-[32vw] sm:text-[24vw]">U-Kai</span>
      </motion.div>

      {/* poster frame — stamped corner text + stars */}
      <motion.div
        {...rise(0.5)}
        className="label pointer-events-none absolute inset-x-0 top-16 z-10 flex items-center justify-between px-5 text-ink sm:top-[4.5rem] sm:px-8"
      >
        <span>Aug 13–16</span>
        <span aria-hidden>✦</span>
        <span>Ukiah, CA</span>
      </motion.div>
      <motion.div
        {...rise(0.6)}
        className="label pointer-events-none absolute inset-x-0 bottom-5 z-10 flex items-center justify-between px-5 text-ink sm:px-8"
      >
        <span>Lake Mendocino</span>
        <span aria-hidden>✦</span>
        <span>Four days, camping</span>
      </motion.div>

      <div className="pointer-events-none relative z-10 flex flex-col items-center">
        <h1 className="display font-bold lowercase leading-[0.82] tracking-tight text-ink">
          <motion.span {...rise(0.08)} className="block text-7xl sm:text-8xl lg:text-9xl">
            camp
          </motion.span>
          <motion.span {...rise(0.16)} className="block text-7xl sm:text-8xl lg:text-9xl">
            u-kai
          </motion.span>
        </h1>

        
        <motion.p
          {...rise(0.32)}
          className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft"
        >
          A DIY summer camp in the hills of Ukiah.
        </motion.p>

        <motion.div
          {...rise(0.44)}
          className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={site.ticketUrl}
            className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-paper transition-colors hover:bg-moss-deep"
          >
            Get tickets
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          
        </motion.div>
      </div>
    </section>
  );
}
