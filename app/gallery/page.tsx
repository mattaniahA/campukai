import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Gallery — ${site.name}`,
  description: `Photographs from ${site.name} in ${site.location}.`,
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
          <span
            aria-hidden
            className="script-ghost pointer-events-none absolute right-0 top-0 z-0 whitespace-nowrap text-[6rem] leading-none sm:text-[8rem]"
          >
            From last year
          </span>
          <Reveal>
            <h1 className="display text-6xl lowercase tracking-tight text-ink sm:text-8xl">
              gallery
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              Memories from camp 2025 ❤︎⁠
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 sm:pb-16">
          <div className="border-t rule pt-10">
            <Gallery />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
