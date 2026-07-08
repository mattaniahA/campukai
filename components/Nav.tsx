import Link from "next/link";
import { site } from "@/lib/site";

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="display text-lg lowercase tracking-tight text-ink">
            camp u-kai
          </span>
          <span aria-hidden className="hidden text-[0.6rem] text-ink sm:inline">
            ✦
          </span>
          <span className="label hidden sm:inline">Ukiah, CA</span>
        </Link>
        <div className="flex items-center gap-5 text-xs uppercase tracking-[0.18em]">
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
      </nav>
    </header>
  );
}
