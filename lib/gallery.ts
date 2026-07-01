/**
 * Gallery items.
 *
 * To use real photos: drop files into /public/gallery and set `src` to e.g.
 * "/gallery/swimming-hole.jpg". Items without a `src` render a generated
 * particle-plate placeholder so the page never looks empty while you collect
 * photos.
 */
export type Tone = "olive" | "slate" | "ochre" | "rust" | "ink";

export type GalleryItem = {
  id: string;
  caption: string;
  /** Path under /public, e.g. "/gallery/sauna.jpg". Omit for a placeholder. */
  src?: string;
  ratio: "tall" | "square" | "wide";
  tone: Tone;
  /** Seed for the generated placeholder art. */
  seed: number;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", caption: "Morning by the swimming hole", ratio: "tall", tone: "slate", seed: 12 },
  { id: "g2", caption: "Main stage, golden hour", ratio: "wide", tone: "ochre", seed: 47 },
  { id: "g3", caption: "Sewing station", ratio: "square", tone: "rust", seed: 5 },
  { id: "g4", caption: "The sauna line", ratio: "tall", tone: "olive", seed: 91 },
  { id: "g5", caption: "Wood-fired kitchen", ratio: "square", tone: "ink", seed: 33 },
  { id: "g6", caption: "Trail to camp", ratio: "wide", tone: "olive", seed: 68 },
  { id: "g7", caption: "Stargazing field", ratio: "tall", tone: "slate", seed: 24 },
  { id: "g8", caption: "Open mic night", ratio: "square", tone: "rust", seed: 77 },
  { id: "g9", caption: "Screen-printing tent", ratio: "wide", tone: "ochre", seed: 15 },
  { id: "g10", caption: "Last campfire", ratio: "square", tone: "ink", seed: 52 },
  { id: "g11", caption: "Wildflowers everywhere", ratio: "tall", tone: "olive", seed: 39 },
  { id: "g12", caption: "See you next year", ratio: "wide", tone: "slate", seed: 84 },
];
