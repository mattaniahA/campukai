# Photos go here

Drop real camp photos into this folder (e.g. `swimming-hole.jpg`), then edit
`lib/gallery.ts` and set the matching item's `src` to `/gallery/swimming-hole.jpg`.

Any gallery item **without** a `src` shows a generated particle-plate
placeholder, so the page always looks intentional while you're still collecting
photos.

Tips:
- Keep files reasonably sized (long edge ~2000px, < ~500KB) for fast loading.
- `ratio` controls the tile shape in the masonry grid: `tall`, `square`, or `wide`.
- `tone` (`olive`/`slate`/`ochre`/`rust`/`ink`) and `seed` only affect the
  placeholder art; once you set `src`, they're ignored.
