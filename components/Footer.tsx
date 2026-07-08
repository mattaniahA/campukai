import Link from "next/link";
import { site } from "@/lib/site";
import ScatterPlate from "./backdrop/ScatterPlate";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t rule">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="display text-2xl lowercase tracking-tight text-ink">
              camp u-kai
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              {site.dates} · {site.location}. A camp and festival in the hills of
              Mendocino County.
            </p>
            <ScatterPlate
              seed={88}
              tone="olive"
              count={200}
              label="U-KAI / fig.00"
              className="mt-6 h-20 w-28"
            />
          </div>

          <div>
            <div className="label mb-4">Site</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-ink-soft hover:text-ink">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-ink-soft hover:text-ink">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="text-ink-soft hover:text-ink">
                  Sponsor
                </Link>
              </li>
              <li>
                <a href={site.ticketUrl} className="text-ink-soft hover:text-ink">
                  Tickets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="label mb-4">Details</div>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>{site.dates}</li>
              <li>{site.location}</li>
              <li>{site.format}</li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-ink">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  {site.contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-2 border-t rule pt-6 text-xs text-ink-faint sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span className="label">
            <span aria-hidden className="mr-2 text-ink">✦</span>
            Made in Ukiah, California
          </span>
        </div>
      </div>
    </footer>
  );
}
