// JSON-LD builders. All values stay consistent with lib/business.ts (spec §2, §7).
import { SITE_URL, BUSINESS, RATING, AMENITIES } from "./business";
import { AREAS } from "./areas";
import { REVIEWS } from "./reviews";
import { INSTAGRAM_LINK } from "./links";
import type { Crumb } from "@/components/Breadcrumbs";

export type Faq = { q: string; a: string };

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href === "/" ? "/" : item.href}`,
    })),
  };
}

export function blogPostingSchema(opts: {
  headline: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    image: `${SITE_URL}${opts.image}`,
    author: { "@type": "Organization", name: "Play Panda", url: `${SITE_URL}/` },
    publisher: {
      "@type": "Organization",
      name: "Play Panda",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/LogoWithoutBG.png` },
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${opts.slug}`,
    },
  };
}

// Service + Offer catalog for the birthday page (spec §7, LP-2).
// Pricing is shared as a custom quote, so offers carry no published price.
export function birthdayServiceSchema(
  packages: { name: string; guests: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Kids birthday party packages",
    name: "Kids Birthday Party Packages at Play Panda",
    description:
      "Birthday party packages at Play Panda, an indoor screen-free kids play zone in Bandlaguda Jagir, Hyderabad. One price covers kids and adults, with a dedicated coordinator, all 9 play zones and décor options for groups up to 70.",
    provider: { "@type": "EntertainmentBusiness", "@id": `${SITE_URL}/#business` },
    areaServed: "Hyderabad",
    url: `${SITE_URL}/birthday-parties`,
    offers: packages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: `${p.name} package, ${p.guests.toLowerCase()}`,
      availability: "https://schema.org/InStock",
    })),
  };
}

// Service schema for the school partnerships page (no prices).
export function schoolServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "School field trips, excursions and partnerships",
    name: "School Partnerships at Play Panda",
    description:
      "Field trips, birthday celebration passes, annual-day events and teacher perks for preschools and primary schools at Play Panda, an indoor screen-free kids play zone in Bandlaguda Jagir, Hyderabad. Partnership terms are tailored to each school.",
    provider: { "@type": "EntertainmentBusiness", "@id": `${SITE_URL}/#business` },
    areaServed: "Hyderabad",
    audience: { "@type": "EducationalAudience", educationalRole: "school" },
    url: `${SITE_URL}/school-partnerships`,
  };
}

// LocalBusiness (EntertainmentBusiness subtype) for the home page (spec §7, LP-1).
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.legalListingName,
    additionalType: [
      "https://en.wikipedia.org/wiki/Indoor_playground",
      "https://en.wikipedia.org/wiki/Playground",
    ],
    description:
      "Indoor, screen-free children's play zone in Bandlaguda Jagir, Hyderabad. 10,000 sq. ft. across 9 themed zones, with a party hall, kid-friendly food court and parent workstation.",
    url: `${SITE_URL}/`,
    telephone: "+91-90638-17084",
    image: `${SITE_URL}/LogoWithoutBG.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.pincode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING.value,
      reviewCount: RATING.count,
      bestRating: "5",
    },
    // Individual reviews only included once real ones are added to lib/reviews.ts.
    ...(REVIEWS.length > 0 && {
      review: REVIEWS.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating: "5",
        },
        reviewBody: r.text,
        ...(r.date && { datePublished: r.date }),
      })),
    }),
    hasMap: "https://maps.app.goo.gl/uujpj3phdAMPyr3S7",
    openingHours: BUSINESS.openingHours,
    isAccessibleForFree: false,
    publicAccess: true,
    amenityFeature: AMENITIES.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      ...AREAS.map((a) => ({
        "@type": "Place",
        name: `${a.name}, Hyderabad`,
      })),
    ],
    sameAs: [INSTAGRAM_LINK],
  };
}
