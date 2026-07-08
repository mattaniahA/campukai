/**
 * Tickets page content. Prices are on a sliding scale and subject to change —
 * update `price` on each tier here.
 */
export const tickets = {
  intro: [
    "Camp U-Kai is an unregistered not-for-profit organization.",
    "All earnings from ticket sales go toward campsites, food, workshops, activities, campers, and entertainment support.",
    "We hope you can contribute toward making this collective collaboration possible."
  ],


  tiers: [
    {
      name: "Supporter",
      price: "$160",
      body: "Helps support activities & entertainment.",
      formUrl: "https://forms.gle/7mqcoZ5gszfcPRKy9",
    },
    {
      name: "Sustainer",
      price: "$140",
      body: "Helps support camp resources.",
      formUrl: "https://forms.gle/jTrkgwg9ijEVuq7B8",
    },
    {
      name: "Access",
      price: "$125",
      body: "Low cost ticket, covers basic cost of campsite & shared meals.",
      formUrl: "https://forms.gle/n78k6FebAMUVjeUy9",
    },
    {
      name: "Volunteer",
      price: "$50",
      body: "Work-trade option for assigned volunteers only. Spots are limited and not guaranteed.",
      link: {
        label: "Submit volunteer inquiry",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfjShxkCCIb5RVyaPF2_LKwedD59HMvnrHcAKz00t70vOjTnQ/viewform?usp=sharing&ouid=100976631237999044087",
      },
      caveat: "This form is an inquiry, not a confirmation. Please register for a Supporter/Sustainer/Access ticket as well so your spot is secured! This helps us assign volunteers fairly. If you're selected as a volunteer, you'll be refunded the difference.",
    },
  ],

  mealsNote: "4 shared meals include 1 arrival meal, 2 basic breakfasts, 1 brunch.",


  info: {
    points: [
      "Camp U-Kai is a not-for-profit (non-registered) organization.",
      "All earnings from ticket sales go towards campsites, food, workshops, activities, campers, and entertainment support.",
      "We hope you can contribute towards making this collective collaboration possible.",
      "Please feel free to reach out with any comments, questions, or concerns.",
    ],
    credit: "friends of the valley",
  },

  closing: "See you there!",
} as const;
