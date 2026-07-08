"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { galleryItems, type GalleryItem } from "@/lib/gallery";
import PlaceholderTile from "./PlaceholderTile";

const ratioClass: Record<GalleryItem["ratio"], string> = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
};

function Media({ item, index }: { item: GalleryItem; index: number }) {
  return (
    <div className={`relative w-full overflow-hidden bg-moss-deep ${ratioClass[item.ratio]}`}>
      {item.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.caption}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <PlaceholderTile item={item} index={index} />
      )}
    </div>
  );
}

function shuffle<T>(input: readonly T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Gallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  // Start with the canonical order so server and client markup match, then
  // reshuffle after mount so each visit lands on a fresh sequence.
  const [items, setItems] = useState<GalleryItem[]>(galleryItems);

  useEffect(() => {
    setItems(shuffle(galleryItems));
  }, []);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current = active === null ? null : items[active];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setActive(i)}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: "easeOut" }}
            className="group mb-4 block w-full break-inside-avoid border rule bg-bone/55 text-left transition-colors hover:border-ink"
          >
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                <Media item={item} index={i} />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {current && active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="label absolute right-4 top-4 !text-[0.65rem] text-paper hover:text-ochre"
            >
              Close ✕
            </button>

            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 px-3 py-2 text-2xl text-paper/70 hover:text-paper sm:left-8"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-2 text-2xl text-paper/70 hover:text-paper sm:right-8"
            >
              ›
            </button>

            <motion.figure
              key={current.id}
              initial={reduce ? false : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl border rule bg-bone"
            >
              <Media item={current} index={active} />
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
