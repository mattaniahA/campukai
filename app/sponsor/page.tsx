import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { site } from "@/lib/site";
import { sponsor } from "@/lib/sponsor";

export const metadata: Metadata = {
  title: `Sponsor — ${site.name}`,
  description: sponsor.intro,
};

function OrderedList({ items, start = 1 }: { items: readonly string[]; start?: number }) {
  return (
    <ol className="mt-8 divide-y divide-ink/10 border-y rule">
      {items.map((item, i) => (
        <li key={i} className="flex gap-5 py-4">
          <span className="label pt-0.5 tabular-nums">
            {String(start + i).padStart(2, "0")}
          </span>
          <span className="text-sm leading-relaxed text-ink sm:text-base">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function SponsorPage() {
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
              {sponsor.title}
            </h1>
            <p className="script mt-6 text-3xl text-ink sm:text-4xl">
              {sponsor.lede}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
              {sponsor.intro}
            </p>
          </Reveal>
        </section>

        {/* Programming highlights */}
        <section className="mx-auto max-w-4xl px-5 pb-12 sm:px-8">
          <Reveal>
            <div className="label border-b rule pb-3">Programming highlights</div>
            <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {sponsor.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-deep" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Invite callout */}
        <section className="mx-auto max-w-4xl px-5 pb-16 sm:px-8">
          <Reveal>
            <div className="border-l-2 border-slate-deep bg-slate/20 px-6 py-6 sm:px-8">
              <p className="text-sm italic leading-relaxed text-ink sm:text-base">
                {sponsor.invite}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Why sponsor */}
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <Reveal>
            <SectionHead index="01 / Why" title="Why sponsor?" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-ink-soft sm:text-base">{sponsor.why.lead}</p>
            <ul className="mt-4 space-y-3">
              {sponsor.why.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ochre-deep" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* What we're looking for */}
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <Reveal>
            <SectionHead index="02 / Asks" title="What we're looking for" />
          </Reveal>
          <Reveal delay={0.1}>
            <OrderedList items={sponsor.lookingFor} />
          </Reveal>
        </section>

        {/* What you'll get */}
        <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
          <Reveal>
            <SectionHead index="03 / Offer" title="What you'll get" />
          </Reveal>
          <Reveal delay={0.1}>
            <OrderedList items={sponsor.youGet} />
          </Reveal>
        </section>

        {/* Let's work together */}
        <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="border rule bg-olive/15 px-6 py-10 sm:px-10 sm:py-12">
              <span className="label text-olive-deep">Let&apos;s work together</span>
              <h2 className="display mt-3 text-3xl lowercase tracking-tight text-ink sm:text-4xl">
                Want to sponsor or collaborate?
              </h2>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-paper transition-colors hover:bg-olive-deep"
                >
                  {site.contact.email}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href={site.contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-ink/40 pb-0.5 text-sm uppercase tracking-[0.18em] text-ink transition-colors hover:border-ink"
                >
                  Instagram {site.contact.instagram}
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
