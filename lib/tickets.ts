/**
 * Tickets page content. Prices are on a sliding scale and subject to change —
 * update `price` on each tier here.
 */
export const tickets = {
  intro: [
    "Camp U-Kai is an unregistered not-for-profit organization.",
    "All earnings from ticket sales go toward campsites, food, workshops, activities, campers, and entertainment support.",
    "We hope you can contribute toward making this collective collaboration possible. Please reach out with any questions, comments, or concerns."
  ],

  priceNote: "Sliding scale — prices subject to update.",

  tiers: [
    {
      name: "Supporter",
      price: "$160",
      body: "Helps support activities & entertainment.",
    },
    {
      name: "Sustainer",
      price: "$140",
      body: "Helps support camp resources.",
    },
    {
      name: "Access",
      price: "$125",
      body: "Low cost ticket, covers basic cost of campsite & shared meals.",
    },
    {
      name: "Volunteer",
      price: "$50",
      body: "Work-trade option for assigned volunteers only.",
    },
  ],

  mealsNote: "4 shared meals include 1 arrival meal, 2 basic breakfasts, 1 brunch.",

  payment: {
    venmo: "@campukai",
    cashapp: "$campukai",
  },

  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScuO-AoKS331Y3cwTzMwJbPbQrT1g9nzioxukqACAGVBZQZkQ/viewform",

  rsvpSteps: [
    "Choose your ticket tier and send payment via Venmo (@campukai) or CashApp ($campukai).",
    "Fill out our RSVP form with your info, dietary needs, and emergency contact.",
    "Confirm on the form that payment has been sent and sign the liability waiver.",
    "Once received, your name(s) will be added to our official guest list.",
    "Receipts & confirmations will be sent once processed.",
  ],

  note: "All campers have access to the same offerings regardless of ticket tier purchased. The details of each tier describe what the given amount helps us contribute toward overall.",

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
