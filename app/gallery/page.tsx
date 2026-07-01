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
        <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
          <Reveal>
            <span className="label">Archive / {site.dates}</span>
            <h1 className="display mt-4 text-5xl font-medium tracking-tight text-ink sm:text-7xl">
              Gallery
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              Moments from camp — swimming holes, late sets, and everyone we love
              in one place. Select a plate to view it larger.
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
