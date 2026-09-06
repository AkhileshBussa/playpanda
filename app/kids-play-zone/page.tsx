import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { CtaBlock } from "@/components/CtaBlock";
import { Reveal } from "@/components/Reveal";
import { AREAS } from "@/lib/areas";
import { ZONES } from "@/lib/zones";
import { BUSINESS, MAPS_EMBED_SRC, RATING } from "@/lib/business";
import { MAPS_LINK, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/links";
import {
  localBusinessSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kids Play Zone Near Me in Hyderabad | Play Panda, Bandlaguda Jagir",
  description:
    "Looking for a kids play zone near you in Hyderabad? Play Panda is a 10,000 sq. ft. indoor, screen-free play area in Bandlaguda Jagir with 9 themed zones, a party hall, food court and free parking.",
  alternates: { canonical: "/kids-play-zone" },
  openGraph: {
    title: "Kids Play Zone Near Me in Hyderabad | Play Panda",
    description:
      "An indoor, screen-free kids play area in Bandlaguda Jagir, Hyderabad. 9 themed play zones, a party hall and free parking.",
    images: ["/MascotWithoutBG.png"],
  },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Kids Play Zone", href: "/kids-play-zone" },
];

const hubFaqs = [
  {
    q: "Where is the nearest kids play zone in Hyderabad?",
    a: `Play Panda is an indoor, screen-free kids play zone at ${BUSINESS.streetAddress}, ${BUSINESS.locality}, Hyderabad – ${BUSINESS.pincode}. It's an easy drive for families in Kismatpur, Rajendranagar, Attapur, Manikonda, Narsingi, Gandipet, Tolichowki, Mehdipatnam and Shamshabad, with free parking on site.`,
  },
  {
    q: "Is Play Panda an indoor playground, a soft play area or a game zone?",
    a: "It's an indoor play zone rather than an arcade. Across 10,000 sq. ft. there are nine themed zones covering soft play, sensory play, pretend play, building, climbing and water play. There are no screens and no arcade machines anywhere in the venue.",
  },
  {
    q: "What are the timings?",
    a: `Play Panda is open ${BUSINESS.openingHoursDisplay.replace("·", "and")}. Message +91 90638 17084 on WhatsApp to confirm before a special trip.`,
  },
  {
    q: "Is it suitable for toddlers and babies?",
    a: "Yes. Tiny Trails is built for the smallest children to crawl and toddle at their own pace, and The Bubble Pond ball pit works well for little ones. Older children have Cute Climbers, Little Explorers and the Water Zone in the same space.",
  },
  {
    q: "Do you need to book, or can you walk in?",
    a: "Walk-ins are welcome for play. Birthday parties and school groups need a booking. Message Play Panda on WhatsApp at +91 90638 17084 for party slots.",
  },
  {
    q: "Is there parking?",
    a: "Yes, free parking, plus a pram-friendly entrance and a parent workstation with free Wi-Fi and coffee.",
  },
];

export default function KidsPlayZoneHub() {
  return (
    <main>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema(crumbs),
          faqPageSchema(hubFaqs),
        ]}
      />
      <Nav />

      <section className="py-14 sm:py-20">
        <Reveal className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <p
            className="reveal-item mt-5 inline-flex items-center gap-2 rounded-pill bg-yellow/20 px-4 py-1.5 font-display font-bold text-ink"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <span className="text-yellow" aria-hidden>
              ★★★★★
            </span>
            Rated {RATING.value} on Google · {RATING.displayCount} reviews
          </p>

          <h1
            className="reveal-item mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Kids Play Zone Near You in <span className="text-coral">Hyderabad</span>
          </h1>

          <p
            className="reveal-item mt-6 text-lg sm:text-xl text-ink/75 leading-relaxed"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Play Panda is an indoor, screen-free kids play zone in Bandlaguda Jagir,
            Hyderabad. {BUSINESS.sqft} of play across {BUSINESS.zoneCount} themed zones,
            a party hall for birthdays, a kid-friendly food court and a parent
            workstation, with free parking and a pram-friendly entrance. One entry
            covers every zone, so there are no tokens and no per-ride charges.
          </p>

          <div
            className="reveal-item mt-8 flex flex-wrap gap-3"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-green text-cream shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              💬 Plan a visit
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-cream text-ink border border-ink/10 shadow-chunk active:translate-y-[2px] transition-all hover:brightness-105"
            >
              📍 Get directions
            </a>
          </div>

          <h2 className="mt-14 font-display font-black text-2xl sm:text-3xl text-ink">
            Coming from your area
          </h2>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed">
            Play Panda serves the south-west stretch of Hyderabad from Kismatpur Road.
            Pick the area you&apos;re coming from for directions and what to expect:
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/kids-play-zone/${a.slug}`}
                  className="group block bg-cream rounded-chunk p-6 border border-ink/5 shadow-chunk hover:shadow-chunkHover transition-shadow"
                >
                  <span className="font-display font-black text-xl text-ink group-hover:text-coral transition-colors">
                    Play zone near {a.name}
                  </span>
                  <span className="block mt-2 text-ink/65 text-base leading-relaxed">
                    {a.route}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-display font-black text-2xl sm:text-3xl text-ink">
            What&apos;s inside: {BUSINESS.zoneCount} themed play zones
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {ZONES.map((z) => (
              <li
                key={z.name}
                className="bg-cream rounded-chunk px-5 py-4 border border-ink/5 shadow-chunk"
              >
                <span className="font-display font-black text-ink">
                  {z.emoji} {z.name}
                </span>
                <span className="block text-ink/65 text-base mt-1">{z.blurb}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-display font-black text-2xl sm:text-3xl text-ink">
            Where to find us
          </h2>
          <address className="mt-4 not-italic text-ink/80 text-lg leading-relaxed">
            {BUSINESS.streetAddress}, {BUSINESS.locality}, {BUSINESS.city} –{" "}
            {BUSINESS.pincode}
          </address>
          <dl className="mt-5 space-y-2 text-ink/80 text-lg">
            <div className="flex flex-wrap gap-2">
              <dt className="font-display font-bold">Hours:</dt>
              <dd>{BUSINESS.openingHoursDisplay}</dd>
            </div>
            <div className="flex flex-wrap gap-2">
              <dt className="font-display font-bold">Phone:</dt>
              <dd>
                <a href={PHONE_TEL} className="text-coral font-bold">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-8 rounded-chunk overflow-hidden border border-ink/10 shadow-chunk">
            <iframe
              src={MAPS_EMBED_SRC}
              title="Play Panda kids play zone on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] border-0"
            />
          </div>

          <Faq items={hubFaqs} heading="Kids play zones in Hyderabad: FAQs" />

          <CtaBlock />
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
