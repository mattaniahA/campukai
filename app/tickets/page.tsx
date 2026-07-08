import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { site } from "@/lib/site";
import { tickets } from "@/lib/tickets";

export const metadata: Metadata = {
  title: `Tickets — ${site.name}`,
  description: tickets.intro.join(" "),
};

export default function TicketsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Masthead */}
        <section className="relative mx-auto max-w-4xl overflow-hidden px-5 pb-10 pt-24 sm:px-8 sm:pt-28">
          <span
            aria-hidden
            className="script-ghost pointer-events-none absolute right-0 -top-2 z-0 whitespace-nowrap text-[6rem] leading-none sm:text-[8rem]"
          >
            Camp U-Kai
          </span>
          <Reveal>
            <h1 className="display text-6xl lowercase leading-[0.9] tracking-tight text-ink sm:text-8xl">
              tickets
            </h1>
            <div className="mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-ink-soft sm:text-base">
              {tickets.intro.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Sliding scale tiers */}
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <Reveal>
            <SectionHead index="01 / Tiers" title="Sliding scale" />
          </Reveal>
          <div className="mt-8 rule">
            {tickets.tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.06}>
                <div className="flex flex-col gap-2 border-b rule py-6 sm:flex-row sm:items-baseline sm:gap-8">
                  <div className="flex w-full items-baseline gap-3 sm:w-64 sm:shrink-0">
                    <span className="display text-3xl tracking-tight text-ink tabular-nums">
                      {tier.price}
                    </span>
                    <span aria-hidden className="text-sm text-ink">✦</span>
                    <h3 className="display text-3xl lowercase tracking-tight text-ink">
                      {tier.name}
                    </h3>
                  </div>
                  <div className="text-sm leading-relaxed text-ink-soft sm:text-base">
                    <p>{tier.body}</p>
                    {"link" in tier && (
                      <p className="mt-2">
                        <a
                          href={tier.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-b border-ink/40 pb-0.5 text-ink transition-colors hover:border-petal-deep hover:text-petal-deep"
                        >
                          {tier.link.label} 
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="label mt-4 text-ink-faint">{tickets.mealsNote}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 border-l-2 border-slate-deep bg-slate/15 px-5 py-4 text-sm italic leading-relaxed text-ink-soft">
              {tickets.note}
            </p>
          </Reveal>
        </section>


        {/* Register */}
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <Reveal>
            <a
              href={tickets.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 border-y rule py-10 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="display text-4xl lowercase leading-[0.95] tracking-tight text-ink transition-colors group-hover:text-petal-deep sm:text-6xl">
                register for camp here
              </span>
              <span
                aria-hidden
                className="display text-4xl text-ink transition-all group-hover:translate-x-2 group-hover:text-petal-deep sm:text-6xl"
              >
                →
              </span>
            </a>
            <p className="label mt-4">
              Payment details, the liability waiver, and everything else you need are in the form.
            </p>
          </Reveal>
        </section>

        {/* Closing */}
        <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="script text-5xl tracking-tight text-ink sm:text-7xl">
              {tickets.closing}
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={tickets.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-paper transition-colors hover:bg-petal-deep"
              >
                Fill out RSVP form
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              
              <a
                href={`mailto:${site.contact.email}`}
                className="border-b border-ink/40 pb-0.5 text-sm uppercase tracking-[0.18em] text-ink transition-colors hover:border-ink"
              >
                Questions? Email us
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
