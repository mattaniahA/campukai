import type { GalleryItem } from "@/lib/gallery";
import { mulberry32 } from "@/lib/generative";

/* Per-tone green gradients — blurry, wild-green, with lime/sky variation. */
const gradients: Record<GalleryItem["tone"], string> = {
  olive:
    "radial-gradient(70% 60% at 75% 20%, var(--moss-deep), transparent 70%), linear-gradient(150deg, var(--fern), var(--moss))",
  slate:
    "radial-gradient(65% 55% at 25% 25%, var(--sky), transparent 70%), linear-gradient(150deg, var(--fern), var(--sky-deep))",
  ochre:
    "radial-gradient(70% 60% at 70% 30%, var(--lime), transparent 70%), linear-gradient(150deg, var(--moss), var(--lime-deep))",
  rust:
    "radial-gradient(70% 60% at 30% 70%, var(--moss), transparent 70%), linear-gradient(150deg, var(--moss-deep), var(--fern))",
  ink:
    "radial-gradient(75% 65% at 60% 40%, var(--moss), transparent 70%), linear-gradient(150deg, var(--moss-deep), var(--ink))",
};

/* A dithered pixel block — density falls off diagonally, like the poster motif. */
function PixelBlock({ seed }: { seed: number }) {
  const rng = mulberry32(seed);
  const cols = 14;
  const rows = 9;
  const cell = 8;
  const squares: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // probability increases toward the top-right corner
      const p = (c / cols) * 0.6 + ((rows - r) / rows) * 0.5;
      if (rng() < p * 0.85) squares.push({ x: c * cell, y: r * cell });
    }
  }
  return (
    <svg
      viewBox={`0 0 ${cols * cell} ${rows * cell}`}
      className="h-full w-full"
      aria-hidden
    >
      {squares.map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width={cell - 1} height={cell - 1} fill="var(--bone)" />
      ))}
    </svg>
  );
}

/* Generated stand-in tile used until real photos are added. */
export default function PlaceholderTile({
  item,
  index,
}: {
  item: GalleryItem;
  index: number;
}) {
  const fig = String(index + 1).padStart(2, "0");
  return (
    <div className="absolute inset-0" style={{ background: gradients[item.tone] }}>
      <div className="absolute right-3 top-3 w-[38%] opacity-80 mix-blend-screen">
        <PixelBlock seed={item.seed} />
      </div>
      <span className="label absolute bottom-3 left-3 !text-[0.6rem] text-ink/70">
        fig. {fig}
      </span>
    </div>
  );
}
