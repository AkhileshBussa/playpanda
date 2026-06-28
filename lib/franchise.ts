// Franchise page content (spec: Play Panda Franchise Page Spec).
// NOTE: per instruction, NO financial figures anywhere (no investment, fee,
// royalty %, per-sq-ft). Brand facts (10,000 sq ft, 9 zones) are kept.
import type { Faq } from "./schema";

export const OPPORTUNITY = [
  {
    icon: "👨‍👩‍👧",
    title: "Young urban families",
    text: "Rising nuclear, dual-income households want safe, supervised places for their kids to play.",
  },
  {
    icon: "📵",
    title: "Screen-free demand",
    text: "Parents are actively seeking active, offline alternatives to screen time.",
  },
  {
    icon: "🎉",
    title: "Celebrations move out",
    text: "Birthdays and kids' events are increasingly hosted at dedicated venues, not at home.",
  },
  {
    icon: "🏙️",
    title: "Under-served smaller cities",
    text: "Quality indoor play is concentrated in metros; tier-2 and tier-3 towns have real demand and little supply.",
  },
];

// Brand-fact stat tiles (kept — these are not financial figures).
export const STAT_TILES = [
  { value: "10,000", unit: "sq. ft. flagship floor" },
  { value: "9", unit: "screen-free play zones" },
  { value: "3-in-1", unit: "play · café · parties" },
  { value: "100%", unit: "hosted parties" },
];

export const WHY_FAMILIES = [
  { icon: "📵", title: "Screen-free by design", text: "Active, imaginative play; the offline experience parents are seeking." },
  { icon: "🏠", title: "Everything in one place", text: "Play, café and celebrations together, for longer visits." },
  { icon: "🎈", title: "Hosted, hassle-free parties", text: "A dedicated host runs the whole event so families just enjoy the day." },
  { icon: "👪", title: "Built for the whole family", text: "Parents relax and stay close, not just a kids' drop-off." },
  { icon: "🧼", title: "Safety & hygiene first", text: "Supervised zones, sock-only play and strict cleanliness standards." },
  { icon: "✨", title: "A premium, branded feel", text: "A distinctive identity that stands out in every market it enters." },
];

export const REVENUE_STREAMS = [
  { icon: "🎟️", title: "Play entries", text: "Hourly and day passes for walk-ins and playdates." },
  { icon: "🎂", title: "Birthday packages", text: "Classic, Grand and Fairytale celebration tiers." },
  { icon: "🎊", title: "Private parties", text: "Exclusive buy-out events in high-value slots." },
  { icon: "☕", title: "Café & F&B", text: "Food and beverage sales on every visit." },
  { icon: "🏫", title: "School partnerships", text: "Weekday tie-ups with schools and playgroups." },
  { icon: "🎨", title: "Events & workshops", text: "Parent–child sessions that keep the space lively." },
  { icon: "🎁", title: "Add-ons", text: "Décor, photography, party favours, socks and more." },
  { icon: "💳", title: "Memberships", text: "Repeat-visit passes and loyalty (planned)." },
];

// Formats with brand size facts kept, but investment figures removed.
export const FORMATS = [
  {
    name: "Express",
    bestFor: "Tier-2 & 3 towns",
    size: "2,000 – 3,500 sq. ft.",
    highlights: "Core play + party space; café & family seating",
    tint: "#D6F0E6",
  },
  {
    name: "Standard",
    bestFor: "Growing cities",
    size: "4,000 – 6,000 sq. ft.",
    highlights: "Expanded play; café + dedicated party hall",
    tint: "#FFEFC4",
  },
  {
    name: "Flagship",
    bestFor: "Metros",
    size: "8,000 – 10,000+ sq. ft.",
    highlights: "Largest play mix; café + multiple party halls + lounge",
    tint: "#E7DFF7",
  },
];

export const WHAT_WE_PROVIDE = [
  { icon: "®️", title: "Brand & IP licence", text: "Rights to the Play Panda name, logo and identity system." },
  { icon: "📘", title: "Operations playbook", text: "SOPs for play, café, parties, safety, hygiene and staffing." },
  { icon: "📍", title: "Site selection", text: "Help assessing location, catchment, floor and feasibility." },
  { icon: "📐", title: "Design & fit-out", text: "Layouts, equipment specs and build-out guidance." },
  { icon: "🎓", title: "Training", text: "Hands-on onboarding for you and your team before launch." },
  { icon: "📣", title: "Marketing kit", text: "Launch playbook, creatives and ongoing campaign support." },
];

// Partnership terms — financial specifics deliberately routed to the enquiry.
export const PARTNERSHIP_TERMS = [
  { item: "Model", detail: "FOFO — Franchise Owned & Operated" },
  { item: "Franchise fee", detail: "A one-time fee, shared during your enquiry" },
  { item: "Royalty", detail: "A share of monthly revenue, discussed during enquiry" },
  { item: "Agreement term", detail: "A multi-year term with a renewal option" },
  { item: "Territory", detail: "A protected radius per centre" },
];

export const WHO_WE_WANT = [
  { icon: "❤️", title: "Loves the mission", text: "Cares about children, families and creating joyful experiences." },
  { icon: "💼", title: "Financially ready", text: "Can fund the chosen format and hold working capital for ramp-up." },
  { icon: "🗺️", title: "Knows the local market", text: "A strong feel for their city's families, schools and catchment." },
  { icon: "🙌", title: "Hands-on operator", text: "Willing to be present and run a service business day-to-day." },
];

export const PROCESS = [
  { n: 1, title: "Enquiry", text: "You reach out and share your city and goals." },
  { n: 2, title: "Evaluation", text: "We assess fit, market and format together." },
  { n: 3, title: "Agreement", text: "Terms signed; territory and format confirmed." },
  { n: 4, title: "Site & design", text: "Location locked; layout and fit-out planned." },
  { n: 5, title: "Build & train", text: "Centre built; you and your team trained." },
  { n: 6, title: "Launch", text: "Grand opening with marketing support." },
];

export const FRANCHISE_FAQS: Faq[] = [
  {
    q: "How much do I need to invest?",
    a: "Investment depends on the format you choose and your city. We'll walk you through the specifics, including fit-out and the one-time franchise fee, during the enquiry conversation. Share your city in the form and we'll take it from there.",
  },
  {
    q: "Do I need prior experience running a play centre?",
    a: "No prior play-centre experience is required. We look for hands-on partners who can run a service business and genuinely care about kids and families.",
  },
  {
    q: "How long does it take to open?",
    a: "Typically a few months from signing, covering site finalisation, build-out and team training, before your grand opening.",
  },
  {
    q: "What support will I receive?",
    a: "A brand licence, the full operations playbook, site-selection help, design and fit-out guidance, team training, and launch marketing support.",
  },
  {
    q: "Do I need to set up a kitchen?",
    a: "No. Food and beverage is part of the model and supported by us, so you won't need to run a full commercial kitchen.",
  },
  {
    q: "Which cities are you expanding to?",
    a: "We're open to metros, growing cities and tier-2/3 towns across India. Share your location in the enquiry form and we'll take it from there.",
  },
];
