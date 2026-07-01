# Camp U-Kai

A custom site for the Camp U-Kai camp/festival at Lake Mendocino (Ukiah, CA) —
replacing the old Notion page. Built with Next.js (App Router), Tailwind CSS v4,
and Motion.

Design direction is **editorial / archival**: a muted earthen palette (bone
paper, olive, dusty slate, ochre, oxblood, charcoal ink) on a grain texture,
an editorial serif (Fraunces) paired with mono labels (Space Mono), numbered
sections with hairline rules, and a generative backdrop of stippled organic
"growth" spreading over a fine lattice plus scientific-plate particle scatters.
Elevated but gritty — for an adult, artist/skater crowd.

## Run it

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

- `/` — landing page: animated hero with drifting shapes, an activity ticker,
  an about section, a gallery teaser, and a tickets CTA.
- `/gallery` — masonry image gallery with a click-to-open lightbox
  (arrow keys / Esc to navigate).

## Editing content

Almost everything lives in two files:

- **`lib/site.ts`** — event name, dates, location, format, tagline, ticket URL,
  the activity ticker, and the About copy (`about.lead` / `about.body`).
- **`lib/gallery.ts`** — the gallery items. Drop photos into `public/gallery/`
  and point each item's `src` at them; items without a `src` render a generated
  particle-plate placeholder so the page is never empty. See
  `public/gallery/README.md`.

> Heads up: `ticketUrl` is still `"#"` — set it in `lib/site.ts` when the
> ticket link is live.

## Design system

- Color tokens + grain texture + editorial helpers: `app/globals.css`
- Generative art (seeded, deterministic): `lib/generative.ts`
- Backdrop lattice / growth / scatter: `components/backdrop/` + `components/Backdrop.tsx`

All animations respect `prefers-reduced-motion`.
