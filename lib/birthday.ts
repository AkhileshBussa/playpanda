// Birthday Packages (LP-2) — single source of truth for copy, pricing and terms.
// NOTE: unlike the rest of the site, this page intentionally SHOWS prices
// (spec: "clarity converts"). All prices are + 5% GST.
import type { Faq } from "./schema";

export type Pkg = {
  key: "classic" | "grand" | "fairytale";
  name: string;
  guests: string;
  inclusion: string;
  blurb: string;
  weekday: number;
  weekend: number;
  popular?: boolean;
  tint: string; // card background tint (brand-palette tints)
};

export const PACKAGES: Pkg[] = [
  {
    key: "classic",
    name: "Classic",
    guests: "Up to 20 guests",
    inclusion: "Welcome board",
    blurb:
      "Space, play and a dedicated coordinator for an intimate celebration. Add décor any time.",
    weekday: 9999,
    weekend: 12999,
    tint: "#D3F2F1",
  },
  {
    key: "grand",
    name: "Grand",
    guests: "Up to 40 guests",
    inclusion: "Welcome board + standard décor",
    blurb:
      "A bright, joyful setup, with a coordinator keeping the day running smoothly.",
    weekday: 19999,
    weekend: 25999,
    popular: true,
    tint: "#FFFDEE",
  },
  {
    key: "fairytale",
    name: "Fairytale",
    guests: "Up to 70 guests",
    inclusion: "Welcome board + themed décor + Play Panda surprise gift",
    blurb:
      "Their world brought to life, plus a Play Panda surprise gift for the birthday star.",
    weekday: 34999,
    weekend: 44999,
    tint: "#E7DFF7",
  },
];

// Common to every package (spec §2.2 / §3).
export const PARTY_INCLUDES = [
  { icon: "🎈", label: "Dedicated party coordinator" },
  { icon: "🎪", label: "All 9 play zones" },
  { icon: "💌", label: "Themed e-invite" },
  { icon: "⏰", label: "3-hour celebration slot" },
];

export const COORDINATOR_LINE =
  "Your dedicated coordinator manages vendors, timings and flow, so you can simply relax and enjoy the day.";

// Friendly "why we quote" framing, signals flexible, not hidden.
export const QUOTE_LINE =
  "Every celebration is a little different, so we keep things flexible. Tell us your date and group size and we'll share a quick, tailored quote on WhatsApp, usually within minutes.";

// Fine print displayed near the package cards (no rupee figures, kept on quote).
export const PACKAGE_FINE_PRINT = [
  "Time slots: 11:30 AM – 2:30 PM · 5:30 PM – 8:30 PM",
  "One simple price by total guest count (kids + adults)",
  "Weekday and weekend rates available",
  "Flexible on group size, theme and add-ons, just ask",
  "A part-advance secures your date",
];

export type AddOnGroup = { title: string; items: string[] };

export const ADD_ON_GROUPS: AddOnGroup[] = [
  {
    title: "Experiences",
    items: [
      "Tattoo",
      "Face painting",
      "Nail art",
      "Caricature",
      "Digital caricature",
      "Chocolate fountain",
      "Key chain making",
      "Popcorn",
      "Sugar candy",
      "Magic show",
      "Bracelet making",
      "Balloon twister",
      "Stone painting",
      "Mascot appearance",
    ],
  },
  {
    title: "Photography & Reels",
    items: [
      "Photography (unlimited edited images)",
      "Videography (full video + 3-min teaser)",
      "Reels (2-hr shoot + 1 edited reel)",
      "Bring your own photographer (corkage applies)",
    ],
  },
  {
    title: "Décor upgrades",
    items: [
      "Standard décor",
      "Themed décor",
      "Custom décor, designed to your theme",
      "Bring your own décor (corkage applies)",
    ],
  },
];

export const BOOKING_STEPS = [
  { n: 1, title: "Enquire", text: "WhatsApp or call us with your date." },
  { n: 2, title: "Visit", text: "Come see the space and lock your theme." },
  { n: 3, title: "Reserve", text: "50% advance secures your date." },
  { n: 4, title: "Celebrate", text: "Show up and enjoy; we handle the rest." },
];

export const BIRTHDAY_FAQS: Faq[] = [
  {
    q: "How much does a birthday party cost?",
    a: "Every party is tailored to your group size, theme and any add-ons, so instead of a rigid price list we share a quick custom quote. Message us your date and approximate number of guests and we'll send pricing on WhatsApp, usually within minutes. There are three packages (Classic, Grand and Fairytale) to suit different group sizes, with flexible weekday and weekend rates.",
  },
  {
    q: "What's included?",
    a: "Every package includes a dedicated party coordinator, access to all 9 play zones, a themed e-invite, and a 3-hour celebration slot. Grand and Fairytale also include décor; Classic includes a welcome board with décor available as an add-on.",
  },
  {
    q: "Is food included?",
    a: "Food is not included in the package price. You can bring your own caterer and cake, or choose from our trusted partner caterers. Café snacks and beverages are available on the day.",
  },
  {
    q: "How many guests can attend?",
    a: "Classic is for up to 20 guests, Grand for up to 40, and Fairytale for up to 70. Guest count is the total of kids and adults combined, and additional guests beyond your package can easily be added, just let us know.",
  },
  {
    q: "Can adults come too?",
    a: "Yes. Your price covers the whole group, kids and adults included, so there's no separate charge for parents and family.",
  },
  {
    q: "Do you provide décor and themes?",
    a: "Yes. Grand includes standard décor and Fairytale includes themed décor. For Classic, décor can be added as an upgrade. Custom décor is available as per actuals.",
  },
  {
    q: "Can I bring my own caterer or cake?",
    a: "Yes, you're welcome to bring your own caterer and cake. Outside food and beverages are otherwise not permitted, except birthday cake and cupcakes. External vendor corkage may apply.",
  },
  {
    q: "How do I hold a date?",
    a: "A 50% advance secures your date; slots can't be held without it. Message Play Panda on WhatsApp at +91 90638 17084 to check availability and reserve.",
  },
  {
    q: "What are the time slots?",
    a: "Parties run in two 3-hour slots: 11:30 AM to 2:30 PM, and 5:30 PM to 8:30 PM. Extra time may be available for a small fee, subject to availability.",
  },
  {
    q: "Is the play area safe and supervised?",
    a: "Yes. Our team supervises and supports throughout, with adult supervision recommended for under-5s. Socks are mandatory in the play areas (available at reception).",
  },
];

export type TermsGroup = { title: string; items: string[] };

export const TERMS: TermsGroup[] = [
  {
    title: "Reservations",
    items: [
      "Dates are confirmed once a part-advance is paid; slots can't be held without it.",
      "Finalise guest count, menu and add-ons at least 3 days before the party.",
      "Guest count includes adults and children. Babies under 1 are not counted.",
      "If the group grows on the day, additional guests are simply added to your final bill.",
      "Parties begin at the booked time; extra time may be available for a small fee, subject to availability.",
      "Minimum billing applies for private/exclusive parties, just ask us for details.",
    ],
  },
  {
    title: "Food, décor & activities",
    items: [
      "Outside food and beverages are not permitted, except birthday cake and cupcakes.",
      "In-house themed décor, return favours, photography and activities are available.",
      "Bringing your own décor, photographer or activity vendor is fine; standard corkage applies.",
      "No alcohol anywhere on the premises.",
      "Play Panda may use party photos/videos for marketing unless told otherwise in writing.",
    ],
  },
  {
    title: "Payment & cancellation",
    items: [
      "Full balance is settled before the event; add-ons and socks are billed the same day after.",
      "Applicable taxes are added as per government norms. The advance is non-refundable.",
      "Cancellation 7+ days before: 50% charged. Within 7 days: 100% charged.",
      "Rescheduling is allowed up to 7 days before (a rescheduling fee applies, subject to availability).",
      "For larger groups, valet parking is recommended (chargeable).",
    ],
  },
  {
    title: "Safety",
    items: [
      "Our team supervises and supports; adult supervision is recommended for under-5s.",
      "Socks are mandatory in play areas (available at reception). Footwear and bags are kept outside.",
      "The main guest is responsible for any damage during the event.",
    ],
  },
];

export function formatINR(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}
