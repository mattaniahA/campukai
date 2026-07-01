/**
 * Deterministic generators for the archival backdrop art:
 * stippled organic "growth" clusters and scientific-plate scatter fields.
 * Seeded so server + client render identically (no hydration drift).
 */

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Dot = { x: number; y: number; r: number };

/** Round to 2dp so SSR (Node) and client (browser) serialize identically. */
const q = (n: number) => Math.round(n * 100) / 100;

/** Gaussian-ish sample via central limit (sum of uniforms). */
function gauss(rng: () => number) {
  return (rng() + rng() + rng() + rng() - 2) / 2; // ~[-1,1], bell-shaped
}

/**
 * A soft radial cluster of dots — density falls off from the center, so it
 * reads as organic lichen/coral growth rather than a plain circle.
 */
export function growthCluster(
  seed: number,
  count: number,
  cx: number,
  cy: number,
  spread: number
): Dot[] {
  const rng = mulberry32(seed);
  const dots: Dot[] = [];
  for (let i = 0; i < count; i++) {
    const ang = rng() * Math.PI * 2;
    const rad = Math.abs(gauss(rng)) * spread;
    dots.push({
      x: q(cx + Math.cos(ang) * rad),
      y: q(cy + Math.sin(ang) * rad * 0.82),
      r: q(0.6 + rng() * (rad > spread * 0.55 ? 2.2 : 1.1)),
    });
  }
  return dots;
}

/**
 * A denser, rounder point cloud framed in a box — echoes the particle-plot
 * plates. Optional streaks give the "measurement" feel.
 */
export function scatterPlot(
  seed: number,
  count: number,
  w: number,
  h: number
): Dot[] {
  const rng = mulberry32(seed);
  const cx = w / 2;
  const cy = h / 2;
  const dots: Dot[] = [];
  for (let i = 0; i < count; i++) {
    const ang = rng() * Math.PI * 2;
    const rad = Math.abs(gauss(rng)) * Math.min(w, h) * 0.42;
    dots.push({
      x: q(cx + Math.cos(ang) * rad),
      y: q(cy + Math.sin(ang) * rad),
      r: q(0.5 + rng() * 1.4),
    });
  }
  return dots;
}
