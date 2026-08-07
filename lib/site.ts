/**
 * Edit everything about the event here — the rest of the site reads from this.
 */
export const site = {
  name: "Camp U-Kai",
  // Short standfirst for the hero.
  tagline:
    "A DIY weekend gathering in the mountains of Ukiah, California — founded by QTBIPOC nature lovers, artists, musicians, skaters, and makers.",
  dates: "August 13–16, 2026",
  location: "Kyen Campground, Ukiah, CA",
  format: "Four days, camping",
  // Ticket details live on the /tickets page.
  ticketUrl: "/tickets",
  contact: {
    email: "campukaifriends@gmail.com",
    instagram: "@campukai",
    instagramUrl: "https://instagram.com/campukai",
  },
  // The team's confirmed description, split into lead + body for the About section.
  about: {
    lead: "Camp U-Kai is a DIY weekend gathering in the mountains of Ukiah, California, founded by QTBIPOC nature lovers, artists, musicians, skaters, and makers.",
    body: "We bring people together for four days of live performances, workshops, swimming, field games, shared meals, and late-night dancing beneath the stars — where we celebrate collective joy, childlike wonder, creative exploration, and the simple magic of spending time together outdoors. Whether you're dropping into a skate session, learning a new skill, floating in the river, dancing all night, or making friends around the campfire, Camp U-Kai is an invitation to come and play.",
  },
  // Off-site nights during camp week. Flyers live in /public/flyers.
  nights: [
    {
      id: "band-night",
      title: "Band Night",
      flyer: "/flyers/band-night.jpg",
      day: "Friday, August 14",
      time: "7:30 – 9:30 PM",
      venue: "The Lot on Main",
      address: "200 N Main St, Ukiah, CA",
      price: "$5 suggested donation",
      lineup: ["Spa", "Strawberry Panic", "MOP"],
    },
    {
      id: "rave-night",
      title: "Rave Night",
      flyer: "/flyers/rave-night.jpg",
      day: "Saturday, August 15",
      time: "8:00 PM – 12:00 AM",
      venue: "Frey Winery",
      address: "11700 West Rd, Redwood Valley, CA",
      price: "$10–20 sliding scale donation",
      lineup: [
        "serene irene (b2b) mezaboy",
        "xtcemi (b2b) heavenly arch",
        "obstac",
      ],
    },
  ],
  // Programme ticker.
  activities: [
    "live performances",
    "workshops",
    "swimming",
    "field games",
    "shared meals",
    "late-night dancing",
    "skate sessions",
    "river floats",
    "campfire hangs",
    "stargazing",
  ],
} as const;
