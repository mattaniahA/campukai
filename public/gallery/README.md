# Photos go here

Web-optimized photos (long edge ~1600px, < ~500KB) live in `photos/`. To add
more, drop a file in there and append an entry to the `photos` list in
`lib/gallery.ts` with the filename, a caption, and a `ratio` (`tall`, `square`,
or `wide`) matching the image's orientation.

Any gallery item **without** a `src` shows a generated particle-plate
placeholder, so the page always looks intentional while you're still collecting
photos.

Tips:
- Keep files reasonably sized (long edge ~1600px, < ~500KB) for fast loading.
- `ratio` controls the tile shape in the masonry grid: `tall`, `square`, or `wide`.
- `tone` (`olive`/`slate`/`ochre`/`rust`/`ink`) and `seed` only affect the
  placeholder art; once `src` is set, they're ignored.
