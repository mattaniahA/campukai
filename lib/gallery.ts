/**
 * Gallery items.
 *
 * Real photos live in /public/gallery/photos (web-optimized, long edge 1600px).
 * Items without a `src` render a generated particle-plate placeholder, so you
 * can always append placeholder entries while collecting new photos.
 */
export type Tone = "olive" | "slate" | "ochre" | "rust" | "ink";

export type GalleryItem = {
  id: string;
  caption: string;
  /** Path under /public, e.g. "/gallery/photos/sauna.jpg". Omit for a placeholder. */
  src?: string;
  ratio: "tall" | "square" | "wide";
  tone: Tone;
  /** Seed for the generated placeholder art (unused once `src` is set). */
  seed: number;
};

const tones: Tone[] = ["olive", "slate", "ochre", "rust", "ink"];

type PhotoDef = [file: string, caption: string, ratio: GalleryItem["ratio"]];

const photos: PhotoDef[] = [
  ["IMG_3781", "On the decks", "wide"],
  ["IMG_3783", "Raising the canopy", "tall"],
  ["IMG_3784", "Under the big tree", "wide"],
  ["IMG_3786", "Circle on the grass", "wide"],
  ["IMG_3787", "Blankets by the bank", "tall"],
  ["IMG_3788", "Sun through the trees", "tall"],
  ["IMG_3789", "Resting in the shade", "tall"],
  ["IMG_3790", "Purple mat crew", "tall"],
  ["IMG_3791", "Hangs on the orange blanket", "tall"],
  ["IMG_3793", "Among the marigolds", "tall"],
  ["IMG_3795", "Quick mirror check", "tall"],
  ["IMG_3796", "Camp chair recline", "tall"],
  ["IMG_3797", "Tote in hand", "tall"],
  ["IMG_3798", "Cooling off", "tall"],
  ["IMG_3801", "Peace from the garden", "tall"],
  ["IMG_3802", "Mid-story", "tall"],
  ["IMG_3805", "Scooter air", "tall"],
  ["IMG_3806", "Into the green water", "tall"],
  ["IMG_3807", "Soundcheck", "tall"],
  ["IMG_3808", "Creek soak", "tall"],
  ["IMG_3809", "Dusk session", "tall"],
  ["IMG_3810", "Swimming hole portrait", "tall"],
  ["IMG_3811", "Creekside grin", "tall"],
  ["IMG_3812", "Everyone in the water", "tall"],
  ["IMG_3813", "Patch details", "wide"],
  ["IMG_3815", "Filming from the shade", "tall"],
  ["IMG_3816", "Picnic blanket crew", "wide"],
  ["IMG_3817", "Golden hour at the park", "wide"],
  ["IMG_3818", "The whole crew (plus dog)", "wide"],
  ["IMG_3819", "Pond at dusk", "tall"],
  ["IMG_3822", "Porch hug", "tall"],
  ["IMG_3825", "Stitching in the shade", "tall"],
  ["IMG_3826", "Fresh wheels", "tall"],
  ["IMG_3827", "Night crew", "tall"],
  ["IMG_3829", "New decks", "tall"],
  ["IMG_3831", "Gathered by the pond", "wide"],
  ["IMG_3834", "Dropping in", "wide"],
  ["IMG_3835", "Evening light", "tall"],
  ["IMG_3836", "Makers under the redwoods", "tall"],
  ["IMG_3841", "Path to dinner", "tall"],
  ["IMG_3843", "Floating", "tall"],
  ["IMG_3844", "Craft table", "tall"],
  ["IMG_3845", "Pile-up on the lawn", "wide"],
  ["IMG_3846", "Rock lounging", "tall"],
  ["IMG_3848", "Cowboy hat smile", "tall"],
  ["IMG_3849", "Nap buddy", "tall"],
  ["IMG_3850", "Camp chairs and redwoods", "wide"],
  ["IMG_3851", "Afternoon portrait", "tall"],
  ["IMG_3852", "Showing off the deck", "tall"],
  ["IMG_3853", "Creek hang", "wide"],
  ["IMG_3854", "Dance floor", "wide"],
  ["IMG_3857", "Lawn hangs", "wide"],
  ["IMG_3858", "Bench break", "tall"],
  ["IMG_3861", "Live set under the canopy", "tall"],
  ["IMG_3862", "Sorting the haul", "tall"],
  ["IMG_3863", "Cardboard sea stars", "wide"],
  ["IMG_3864", "Lap dog", "tall"],
  ["IMG_3865", "The river bend", "tall"],
  ["IMG_3866", "Garden group hug", "wide"],
  ["IMG_3871", "Hot off the press", "tall"],
  ["IMG_3875", "Reading on the towels", "tall"],
  ["IMG_3876", "Leaning in", "wide"],
  ["IMG_3877", "Noodle patrol", "wide"],
  ["IMG_3878", "Headphones on", "tall"],
  ["IMG_3881", "Scooter kid", "tall"],
  ["IMG_3884", "Bowl-side chat", "wide"],
  ["IMG_3886", "Rolling through", "tall"],
  ["IMG_3888", "Dog day afternoon", "wide"],
  ["IMG_3889", "Camp merch, peace sign", "tall"],
  ["IMG_3890", "Snack table in the trees", "tall"],
  ["IMG_3891", "Pads on, ready to drop", "tall"],
  ["IMG_3894", "Garden portrait", "tall"],
  ["IMG_3895", "Beading on the blankets", "tall"],
  ["IMG_3896", "Shirt of the day", "tall"],
  ["IMG_3897", "Board over shoulder", "tall"],
  ["IMG_3899", "Riverbank reading", "tall"],
  ["IMG_3900", "Drums in the field", "tall"],
  ["IMG_3901", "Hand-sewn and proud", "tall"],
  ["IMG_3902", "Skatepark stroll", "tall"],
  ["IMG_3903", "Quiet stretch of river", "tall"],
  ["IMG_3904", "Kitchen shift", "wide"],
  ["IMG_3905", "Flag in progress", "tall"],
  ["IMG_3906", "Patio DJ lab", "wide"],
  ["IMG_3907", "Full send", "tall"],
  ["IMG_3916", "Camp sling", "tall"],
  ["IMG_3917", "In the hand-mades", "tall"],
  ["IMG_3923", "Hammock over the creek", "wide"],
  ["IMG_3925", "Table under the flowers", "tall"],
  ["IMG_5521", "Breakfast bowl", "tall"],
  ["IMG_5603", "Today's menu", "wide"],
  ["campyu", "Camp U-Kai, wheels ready", "tall"],
];

export const galleryItems: GalleryItem[] = photos.map(
  ([file, caption, ratio], i) => ({
    id: `g${i + 1}`,
    caption,
    src: `/gallery/photos/${file}.jpg`,
    ratio,
    tone: tones[i % tones.length],
    seed: i * 7 + 3,
  })
);
