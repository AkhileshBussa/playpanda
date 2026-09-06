// Single source of truth for Play Panda business facts (spec §2).
// Keep these consistent across every page, consistency is itself an SEO + GEO signal.
// Wired into on-page text AND JSON-LD schema, so set values once here.

export const SITE_URL = "https://theplaypanda.com";

export const BUSINESS = {
  name: "Play Panda",
  what: "Indoor, screen-free children's play zone",
  locality: "Bandlaguda Jagir",
  city: "Hyderabad",
  region: "Telangana",
  country: "IN",

  streetAddress:
    "3rd Floor, NRR Square, Kismatpur Rd, beside Vignan Junior College, Sri Venkateshwara Colony",
  pincode: "500086",
  latitude: "17.3582013",
  longitude: "78.3881378",
  nearbyAreas: "Kismatpur, Manikonda, Narsingi, Gandipet and Tellapur",
  // Human-readable for the page; schema form (schema.org openingHours) below.
  openingHoursDisplay: "Mon–Thu: 11 AM – 9 PM · Fri–Sun: 11 AM – 10 PM",
  openingHours: ["Mo-Th 11:00-21:00", "Fr-Su 11:00-22:00"],

  sqft: "10,000 sq. ft.",
  zoneCount: 9,
} as const;

// Google rating, must stay in sync with the live Google Business Profile,
// or Google may ignore/penalize the aggregateRating schema. Update as it grows.
export const RATING = {
  value: "4.9",
  count: 180,
  displayCount: "180+",
} as const;

export const ZONE_NAMES = [
  "Tiny Trails",
  "The Bubble Pond",
  "Little Engineers",
  "Happy Farm",
  "Mini Garage",
  "Water Zone",
  "Little Explorers",
  "Cute Climbers",
  "DollHouse",
] as const;

export const AMENITIES = [
  "Free parking",
  "Easy, pram-friendly entry",
  "Free Wi-Fi",
  "Coffee",
  "Clear sightlines for parents",
] as const;

// Google Maps embed (no API key needed). Uses the place query so it works
// before exact lat/long are filled in.
export const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=Play+Panda+Bandlaguda+Jagir+Hyderabad&output=embed";
