import { Button } from "./Button";
import { Faq } from "./Faq";
import { WHATSAPP_LINK, MAPS_LINK, PHONE_DISPLAY, PHONE_TEL } from "@/lib/links";
import { BUSINESS, MAPS_EMBED_SRC, RATING } from "@/lib/business";

// LP-1: crawlable location section. Fixes the gap where the live site never
// said "Bandlaguda Jagir" / "Hyderabad" in indexable text (spec §8 LP-1).
const locationFaqs = [
  {
    q: "Where is Play Panda located?",
    a: `Play Panda is in Bandlaguda Jagir, Hyderabad, at ${BUSINESS.streetAddress} – ${BUSINESS.pincode}. It's an indoor play zone, so it's a good option year-round, including Hyderabad summers and the monsoon.`,
  },
  {
    q: "What ages is Play Panda for?",
    a: "Play Panda's nine zones span toddlers to older children. Tiny Trails and The Bubble Pond suit the smallest ones, while Cute Climbers and Little Explorers give bigger kids room to burn off energy.",
  },
  {
    q: "Is Play Panda an indoor playground, a soft play area or a game zone?",
    a: "Play Panda is an indoor play zone rather than an arcade or a game zone. Across 10,000 sq. ft. there are nine themed zones covering soft play, sensory play, pretend play, building, climbing and water play. There are no screens and no arcade machines anywhere in the venue.",
  },
  {
    q: "Is there a kids play zone near me in south-west Hyderabad?",
    a: `Play Panda is on Kismatpur Road in Bandlaguda Jagir, which puts it within an easy drive of ${BUSINESS.nearbyAreas}. It's the nearest large indoor play area for most families on that side of the city, and parking is free.`,
  },
  {
    q: "Is Play Panda suitable for toddlers and 1-year-olds?",
    a: "Yes. Tiny Trails is built for the smallest children to crawl, toddle and explore at their own pace, and The Bubble Pond ball pit suits little ones too. Older children have Cute Climbers, Little Explorers and the Water Zone in the same space.",
  },
  {
    q: "How much does it cost to visit Play Panda?",
    a: "One entry covers all nine play zones for the session. Rates vary between weekdays, weekends and seasonal offers, so Play Panda shares current pricing directly, message +91 90638 17084 on WhatsApp for today's rates and party quotes.",
  },
  {
    q: "Is there parking?",
    a: "Yes. Play Panda has free parking and a pram-friendly entrance.",
  },
  {
    q: "Can I host a birthday party at Play Panda?",
    a: "Yes. Play Panda has a dedicated party hall plus food and decor handled end to end. Message Play Panda on WhatsApp at +91 90638 17084 to check party slots.",
  },
  {
    q: "How do I book or check timings?",
    a: "Message Play Panda on WhatsApp at +91 90638 17084, or call the same number, for current timings, slots and party availability.",
  },
];

export { locationFaqs };

export function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-cream/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="font-display font-bold text-teal uppercase tracking-widest text-sm">
            Find us
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-pill bg-yellow/20 px-4 py-1.5 font-display font-bold text-ink">
            <span className="text-yellow" aria-hidden>
              ★★★★★
            </span>
            Rated {RATING.value} on Google · {RATING.displayCount} reviews
          </p>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.08]">
            A screen-free indoor play zone for kids in Bandlaguda Jagir, Hyderabad
          </h2>
          <p className="mt-5 text-lg text-ink/75">
            Play Panda is a {BUSINESS.sqft} indoor, screen-free play zone for
            children in Bandlaguda Jagir, Hyderabad. Kids explore nine themed zones,
            from a toddler-safe Tiny Trails to a splashy Water Zone and a climb-it-all
            Cute Climbers, while parents stay close with free Wi-Fi, coffee and clear
            sightlines. There&apos;s a party hall for birthdays and a kid-friendly
            food court on site.
          </p>
        </header>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-start">
          <div className="bg-cream rounded-chunk p-7 sm:p-8 shadow-chunk border border-ink/5">
            <h3 className="font-display font-black text-2xl text-ink">Find us</h3>
            <address className="mt-3 not-italic text-ink/80 text-lg leading-relaxed">
              {BUSINESS.streetAddress}, Bandlaguda Jagir, Hyderabad – {BUSINESS.pincode}
              <br />
              <span className="text-ink/60 text-base">
                Also easy to reach from {BUSINESS.nearbyAreas}.
              </span>
            </address>

            <dl className="mt-6 space-y-2 text-ink/80">
              <div className="flex gap-2">
                <dt className="font-display font-bold">Hours:</dt>
                <dd>{BUSINESS.openingHoursDisplay}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-display font-bold">Parking &amp; entry:</dt>
                <dd>Free parking · pram-friendly, easy entry</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={WHATSAPP_LINK} variant="green" external>
                💬 WhatsApp us
              </Button>
              <Button href={MAPS_LINK} variant="yellow" external>
                📍 Open in Maps
              </Button>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center font-display font-bold text-ink hover:text-coral transition-colors"
              >
                📞 {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="rounded-chunk overflow-hidden shadow-chunk border border-ink/5 bg-white">
            <iframe
              title="Play Panda location in Bandlaguda Jagir, Hyderabad on Google Maps"
              src={MAPS_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] sm:h-[400px] border-0"
            />
          </div>
        </div>

        <Faq items={locationFaqs} />
      </div>
    </section>
  );
}
