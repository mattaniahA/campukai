"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sponsor", label: "Sponsor" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="display whitespace-nowrap text-lg lowercase tracking-tight text-ink">
            camp u-kai
          </span>
          <span aria-hidden className="hidden text-[0.6rem] text-ink sm:inline">
            ✦
          </span>
          <span className="label hidden sm:inline">Ukiah, CA</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-5 text-xs uppercase tracking-[0.18em] sm:flex">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center gap-5">
              {i > 0 && (
                <span aria-hidden className="text-ink-faint">
                  ✦
                </span>
              )}
              <Link
                href={link.href}
                className="text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </span>
          ))}
          <Link
            href={site.ticketUrl}
            className="bg-ink px-4 py-2 text-paper transition-colors hover:bg-petal-deep"
          >
            Tickets
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="-mr-2 flex h-10 w-10 flex-col items-center justify-center gap-[5px] sm:hidden"
        >
          <span className="h-[2px] w-6 bg-ink" />
          <span className="h-[2px] w-6 bg-ink" />
          <span className="h-[2px] w-6 bg-ink" />
        </button>
      </nav>

      {/* Mobile slide-out menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-bone sm:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="display text-lg lowercase tracking-tight text-ink"
              >
                camp u-kai
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="-mr-2 flex h-10 w-10 items-center justify-center text-2xl text-ink"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display border-b rule py-4 text-4xl lowercase tracking-tight text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={site.ticketUrl}
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-ink px-6 py-4 text-sm uppercase tracking-[0.18em] text-paper"
              >
                Get tickets →
              </Link>
            </nav>

            <div className="label flex items-center justify-between px-5 py-5 text-ink">
              <span>Aug 13–16</span>
              <span aria-hidden>✦</span>
              <span>Ukiah, CA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
