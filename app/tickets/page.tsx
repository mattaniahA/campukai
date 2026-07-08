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
  const smsHref = `sms:+1${tickets.payment.rsvpNumber.replace(/\D/g, "")}`;

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
                  <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                    {tier.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="label mt-4">{tickets.priceNote}</p>
            <p className="label mt-1 text-ink-faint">{tickets.mealsNote}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 border-l-2 border-slate-deep bg-slate/15 px-5 py-4 text-sm italic leading-relaxed text-ink-soft">
              {tickets.note}
            </p>
          </Reveal>
        </section>


        {/* RSVP & confirm */}
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <Reveal>
            <SectionHead index="03 / RSVP" title="Reserve & confirm" />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 grid gap-px border rule bg-paper-soft sm:grid-cols-3">
              {[
                ["Text to RSVP", tickets.payment.rsvpNumber, smsHref],
                ["Venmo", tickets.payment.venmo, undefined],
                ["CashApp", tickets.payment.cashapp, undefined],
              ].map(([k, v, href]) => (
                <div key={k} className="border-t rule px-5 py-5 first:border-t-0 sm:border-l sm:border-t-0 sm:first:border-l-0">
                  <div className="label mb-2">{k}</div>
                  {href ? (
                    <a href={href} className="display text-lg font-medium text-ink hover:text-petal-deep">
                      {v}
                    </a>
                  ) : (
                    <span className="display text-lg font-medium text-ink">{v}</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ol className="mt-8 divide-y divide-ink/10 border-y rule">
              {tickets.rsvpSteps.map((step, i) => (
                <li key={i} className="flex gap-5 py-4">
                  <span className="label pt-0.5 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-ink sm:text-base">{step}</span>
                </li>
              ))}
            </ol>
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
                href={smsHref}
                className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-paper transition-colors hover:bg-petal-deep"
              >
                Text to RSVP
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
