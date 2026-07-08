"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sponsor", label: "Sponsor" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-baseline gap-2"
        >
          <span className="display text-lg lowercase tracking-tight text-ink">
            camp u-kai
          </span>
          <span aria-hidden className="hidden text-[0.6rem] text-ink sm:inline">
            ✦
          </span>
          <span className="label hidden sm:inline">Ukiah, CA</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-5 text-xs uppercase tracking-[0.18em] sm:flex">
          <Link href="/#about" className="text-ink-soft transition-colors hover:text-ink">
            About
          </Link>
          <span aria-hidden className="text-ink-faint">✦</span>
          <Link href="/gallery" className="text-ink-soft transition-colors hover:text-ink">
            Gallery
          </Link>
          <span aria-hidden className="text-ink-faint">✦</span>
          <Link href="/sponsor" className="text-ink-soft transition-colors hover:text-ink">
            Sponsor
          </Link>
          <Link
            href={site.ticketUrl}
            className="bg-ink px-4 py-2 text-paper transition-colors hover:bg-petal-deep"
          >
            Tickets
          </Link>
        </div>

        {/* Mobile: ticket CTA + menu toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <Link
            href={site.ticketUrl}
            className="bg-ink px-2.5 py-2 text-[0.65rem] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-petal-deep"
          >
            Tickets
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] border rule bg-bone/70"
          >
            <span
              className={`h-px w-4 bg-ink transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-b rule bg-bone/95 backdrop-blur-sm sm:hidden">
          <div className="flex flex-col px-5 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b rule py-4 text-sm uppercase tracking-[0.18em] text-ink-soft transition-colors last:border-b-0 hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
