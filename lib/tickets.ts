/**
 * Tickets page content. Prices are on a sliding scale and subject to change —
 * update `price` on each tier here.
 */
export const tickets = {
  intro:
    "Camp U-Kai is an unregistered not-for-profit organization. All earnings from ticket sales go toward campsites, food, workshops, activities, campers, and entertainment support. We hope you can contribute toward making this collective collaboration possible. Please reach out with any questions, comments, or concerns.",

  priceNote: "Sliding scale — prices subject to update.",

  tiers: [
    {
      name: "Access",
      price: "$65",
      body: "Covers the cost of your campsite and 4 meals (2 basic breakfasts, 1 lunch, 1 dinner).",
    },
    {
      name: "Sustainer",
      price: "$75",
      body: "Covers your campsite and 4 meals, and helps support camp resources.",
    },
    {
      name: "Supporter",
      price: "$85",
      body: "Covers your campsite and 4 meals, helps support camp resources, and helps support entertainment and activities.",
    },
    {
      name: "Volunteers",
      price: "$30",
      body: "The work-trade included option, for assigned volunteers only.",
    },
  ],

  payment: {
    rsvpNumber: "341-202-7996",
    venmo: "@campukai",
    cashapp: "$campukai",
  },

  rsvpSteps: [
    "Text our RSVP number with your chosen ticket tier and we'll confirm availability.",
    "Once confirmed, send your payment via Venmo (@campukai) or CashApp ($campukai).",
    "Text a screenshot of your payment plus your name(s) to our RSVP number.",
    "Once received, your name(s) will be added to our official guest list.",
    "Receipts & confirmations will be sent once processed.",
  ],

  note: "All campers have access to the same offerings regardless of ticket tier purchased. The details of each tier describe what the given amount helps us contribute toward overall.",

  closing: "See you there!",
} as const;
