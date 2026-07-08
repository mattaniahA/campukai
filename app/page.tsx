import Link from "next/link";
import { site } from "@/lib/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { galleryItems } from "@/lib/gallery";
import PlaceholderTile from "@/components/PlaceholderTile";
import SectionHead from "@/components/SectionHead";

export default function Home() {
  const teaserFiles = ["IMG_3843", "IMG_3866", "IMG_3826"];
  const teaser = teaserFiles.flatMap((file) => {
    const item = galleryItems.find((i) => i.src?.includes(file));
    return item ? [item] : [];
  });

  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHead index="01 / About" title="who we are" />
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <p className="text-sm uppercase leading-relaxed tracking-[0.08em] text-ink sm:text-base">
                {site.about.lead}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                {site.about.body}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-2 gap-px border-t rule sm:grid-cols-3">
              {[
                ["Dates", site.dates],
                ["Where", site.location],
                ["Format", site.format],
              ].map(([k, v]) => (
                <div key={k} className="border-l rule py-5 pl-5 first:border-l-0 first:pl-0">
                  <div className="label mb-2">{k}</div>
                  <div className="text-sm text-ink">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Gallery teaser */}
        <section className="panel border-y rule py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b rule pb-4">
                <div className="flex items-baseline gap-4">
                  <span className="label pt-1">
                    <span aria-hidden className="mr-2 text-ink">✦</span>
                    02 / Archive
                  </span>
                  <h2 className="display text-3xl lowercase tracking-tight text-ink sm:text-5xl">
                    From last year
                  </h2>
                </div>
                <Link
                  href="/gallery"
                  className="border-b border-ink/40 pb-0.5 text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:border-ink"
                >
                  View gallery →
                </Link>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {teaser.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.08}>
                  <Link
                    href="/gallery"
                    className="group block border rule bg-bone/60 transition-colors hover:border-ink"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      {item.src ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.src}
                          alt={item.caption}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      ) : (
                        <PlaceholderTile item={item} index={i} />
                      )}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <span className="label">
              <span aria-hidden className="mr-2 text-ink">✦</span>
              03 / Tickets
            </span>
            <h2 className="display mt-4 max-w-3xl text-4xl lowercase leading-[0.95] tracking-tight text-ink sm:text-6xl">
              Come to camp. Bring a tent, a friend, and something to share.
            </h2>
            <p className="mt-6 max-w-md text-sm text-ink-soft sm:text-base">
              {site.dates} · {site.location}. Tickets are limited and tend to go
              fast — grab yours and we&apos;ll send the details.
            </p>
            <a
              href={site.ticketUrl}
              className="group mt-9 inline-flex items-center gap-2 bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-paper transition-colors hover:bg-olive-deep"
            >
              Get tickets
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
