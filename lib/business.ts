// Single source of truth for Play Panda business facts (spec §2).
// Keep these consistent across every page, consistency is itself an SEO + GEO signal.
//
// ⚠️ PLACEHOLDERS: fill the values marked TODO before launch. Only the owner has them.
// They are wired into on-page text AND JSON-LD schema, so set them once here.

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
  // TODO(owner): fill before launch.
  pincode: "500086",
  nearbyAreas: "[NEARBY AREAS]",
  openingHours: "[OPENING HOURS e.g. Mo-Su 10:00-21:00]",
  latitude: "[LATITUDE]",
  longitude: "[LONGITUDE]",

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
