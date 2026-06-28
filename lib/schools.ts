// School Partnerships page content (spec: Play Panda School Partnerships Page Spec).
// ⚠️ NO PRICING ANYWHERE. School terms are tailored per school, deliberately.
import type { Faq } from "./schema";

export const AT_A_GLANCE = [
  "10,000 sq ft",
  "9 screen-free play zones",
  "Dedicated party hall",
  "Parent lounge",
  "In-house café",
  "Fully supervised & safe",
];

export const PARTNER_WAYS = [
  {
    title: "Birthday Celebration Passes",
    text: "A special birthday gift for every child in your school, co-branded with your school's name.",
    icon: "🎂",
    tint: "#FFE3F0",
  },
  {
    title: "Class Field Trips",
    text: "A screen-free day of play and discovery across all nine of our zones, built for little explorers.",
    icon: "🚌",
    tint: "#D6F0E6",
  },
  {
    title: "Annual Day & Celebrations",
    text: "Host your school's biggest moments in our dedicated party hall, we manage it end to end.",
    icon: "🎉",
    tint: "#FFEFC4",
  },
  {
    title: "Teacher & Family Perks",
    text: "Warm little extras for the staff and parents who make your school special, all year round.",
    icon: "💛",
    tint: "#E7DFF7",
  },
];

export const DEVELOPMENTAL = [
  { icon: "🤸", label: "Gross & fine motor skills" },
  { icon: "🎨", label: "Sensory & imaginative play" },
  { icon: "🤝", label: "Social skills, sharing, turn-taking, teamwork" },
  { icon: "🌟", label: "Confidence & independent exploration" },
];

export const SAFETY = [
  "Trained, supervising staff throughout",
  "Healthy staff-to-child ratios",
  "First-aid on site",
  "Enclosed, secure space with controlled entry & exit",
  "Sanitised, regularly cleaned equipment",
  "Wristbands / ID for every child on group visits",
  "Allergy & dietary care",
  "Adult/teacher lounge so staff can relax while children play",
];

export const SCHOOL_STEPS = [
  { n: 1, title: "Visit", text: "Book a no-obligation private walkthrough of the space." },
  { n: 2, title: "Choose", text: "Pick how you'd like to partner, passes, field trips, events." },
  { n: 3, title: "Partner", text: "We tailor the terms and handle the rest." },
];

export const SCHOOL_FAQS: Faq[] = [
  {
    q: "Do you host school field trips and excursions?",
    a: "Yes. Play Panda hosts screen-free field trips for preschools and primary schools across all nine play zones in Bandlaguda Jagir, Hyderabad, with a facilitated activity so it reads as a learning experience, not just an outing.",
  },
  {
    q: "Is the space safe and supervised for school groups?",
    a: "Yes. We have trained supervising staff throughout, healthy staff-to-child ratios, first-aid on site, an enclosed secure space with controlled entry and exit, sanitised equipment, and wristbands or ID for every child on group visits.",
  },
  {
    q: "Can you host our school's annual day?",
    a: "Yes. We host annual days and school celebrations in our dedicated party hall and manage the event end to end, so your team can simply enjoy the day.",
  },
  {
    q: "How do school partnerships work and what do they cost?",
    a: "Partnership terms are tailored to your school, depending on what you'd like to do, field trips, birthday passes, annual day or teacher and family perks. The best next step is a private walkthrough; message us and we'll arrange a visit.",
  },
];
