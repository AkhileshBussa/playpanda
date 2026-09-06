import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { EnquiryForm } from "@/components/EnquiryForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Bunting, ScallopBottom } from "@/components/PartyDecor";
import { Reveal } from "@/components/Reveal";
import {
  WHATSAPP_BIRTHDAY_LINK,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/links";
import { BUSINESS, MAPS_EMBED_SRC, RATING } from "@/lib/business";
import { REVIEWS } from "@/lib/reviews";
import {
  PACKAGES,
  PARTY_INCLUDES,
  COORDINATOR_LINE,
  PACKAGE_FINE_PRINT,
  ADD_ON_GROUPS,
  BOOKING_STEPS,
  BIRTHDAY_FAQS,
  TERMS,
  QUOTE_LINE,
} from "@/lib/birthday";
import {
  localBusinessSchema,
  birthdayServiceSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kids Birthday Party Places & Venues in Hyderabad | Play Panda",
  description:
    "Looking for kids birthday party places near you in Hyderabad? Play Panda in Bandlaguda Jagir has a party hall, a dedicated coordinator, décor packages and 9 play zones for groups up to 70. One price for kids & adults.",
  alternates: { canonical: "/birthday-parties" },
  openGraph: {
    title: "Kids' Birthday Party Packages in Hyderabad | Play Panda",
    description:
      "One price for your whole group, a dedicated coordinator, all 9 play zones and décor packages for up to 70 guests in Bandlaguda Jagir, Hyderabad.",
    images: ["/MascotWithoutBG.png"],
  },
};

// Server-rendered on request. Avoids a Next 15.5 RSC prerender-manifest bug with
// the client EnquiryForm; full HTML is still in the response for crawlers.
export const dynamic = "force-dynamic";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Birthday Parties", href: "/birthday-parties" },
];

export default function BirthdayParties() {
  return (
    <main className="pb-16 lg:pb-0">
      <JsonLd
        data={[
          localBusinessSchema(),
          birthdayServiceSchema(PACKAGES),
          breadcrumbSchema(crumbs),
          faqPageSchema(BIRTHDAY_FAQS),
        ]}
      />
      <Nav />

      {/* Hero */}
      <section className="relative bg-coral text-cream overflow-hidden">
        <Bunting />
        <Reveal className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-14 pb-24 text-center">
          <p className="reveal-item font-display font-bold uppercase tracking-widest text-cream/80 text-sm" style={{ "--i": 0 } as React.CSSProperties}>
            Play Panda Parties
          </p>
          <h1 className="reveal-item mt-3 font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.02]" style={{ "--i": 1 } as React.CSSProperties}>
            Birthday Packages
          </h1>
          <p className="reveal-item mt-4 font-display font-bold text-xl sm:text-2xl text-cream/95" style={{ "--i": 2 } as React.CSSProperties}>
            A big celebration inside a little one&apos;s world.
          </p>
          <p className="reveal-item mt-5 inline-flex items-center gap-2 rounded-pill bg-cream/15 px-5 py-2 font-display font-bold" style={{ "--i": 3 } as React.CSSProperties}>
            🎂 One price for your whole group, kids &amp; adults included
          </p>
          <div className="reveal-item mt-8 flex flex-wrap justify-center gap-3" style={{ "--i": 4 } as React.CSSProperties}>
            <a
              href={WHATSAPP_BIRTHDAY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-cream text-coral shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              💬 Enquire on WhatsApp
            </a>
            <a
              href="#enquire"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-yellow text-ink shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              Book a Visit
            </a>
          </div>
        </Reveal>
        <ScallopBottom className="text-cream" />
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* Every party includes */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink">
            Every Play Panda party includes
          </h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PARTY_INCLUDES.map((item) => (
              <div
                key={item.label}
                className="bg-cream rounded-chunk p-6 border border-ink/5 shadow-chunk"
              >
                <div className="text-4xl">{item.icon}</div>
                <p className="mt-3 font-display font-bold text-ink">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 mx-auto max-w-2xl bg-purple/10 text-ink rounded-chunk px-6 py-5 font-display font-bold text-lg">
            ✨ {COORDINATOR_LINE}
          </p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-14 sm:py-20 bg-cream/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display font-black text-3xl sm:text-4xl text-ink">
            Choose your celebration
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-center text-ink/70">
            {QUOTE_LINE}
          </p>

          <div className="mt-12 grid lg:grid-cols-3 gap-6 items-start">
            {PACKAGES.map((p) => (
              <article
                key={p.key}
                style={{ backgroundColor: p.tint }}
                className={`relative rounded-chunk p-7 border shadow-chunk flex flex-col ${
                  p.popular
                    ? "border-coral border-2 lg:-translate-y-3"
                    : "border-ink/5"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-coral text-cream px-4 py-1 font-display font-black text-sm shadow">
                    ⭐ Most Popular
                  </span>
                )}
                <h3 className="font-display font-black text-2xl uppercase tracking-wide text-ink">
                  {p.name}
                </h3>
                <p className="mt-1 inline-flex items-center gap-1.5 rounded-pill bg-white/70 px-3 py-1 font-display font-bold text-ink">
                  👥 {p.guests}
                </p>

                <p className="mt-5 font-display font-bold text-ink">{p.inclusion}</p>
                <p className="mt-2 text-ink/70 flex-1">{p.blurb}</p>

                <a
                  href={WHATSAPP_BIRTHDAY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 font-display font-black shadow-[0_6px_0_rgba(0,0,0,0.12)] active:translate-y-[2px] transition-all hover:brightness-105 ${
                    p.popular ? "bg-coral text-cream" : "bg-ink text-cream"
                  }`}
                >
                  Get a quick quote
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 mx-auto max-w-3xl bg-cream rounded-chunk border border-ink/5 shadow-chunk p-7 sm:p-8">
            <h3 className="font-display font-black text-lg text-ink text-center">
              Good to know
            </h3>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-ink/75">
              {PACKAGE_FINE_PRINT.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-pill bg-green/15 text-green text-xs font-black"
                  >
                    ✓
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery & proof */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display font-black text-3xl sm:text-4xl text-ink">
            Parties parents rave about
          </h2>
          <p className="mt-3 text-center text-ink/70">
            Rated {RATING.value}★ on Google by {RATING.displayCount} families.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((r) => (
              <figure
                key={r.author}
                className="bg-cream rounded-chunk p-7 border border-ink/5 shadow-chunk flex flex-col"
              >
                <div className="text-yellow text-lg" aria-label={`${r.rating} out of 5 stars`}>
                  {"★".repeat(r.rating)}
                </div>
                <blockquote className="mt-3 text-ink/80 leading-relaxed flex-1">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-display font-bold text-ink">
                  — {titleCase(r.author)}, on Google
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Food your way */}
      <section className="py-14 sm:py-20 bg-green text-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl">
            Your food, your way
          </h2>
          <p className="mt-4 text-lg text-cream/90">
            Bring your own caterer &amp; cake, or choose from our trusted partner
            caterers. Café snacks &amp; beverages are available on the day.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display font-black text-3xl sm:text-4xl text-ink">
            Make it extra
          </h2>
          <p className="mt-3 text-center text-ink/70">
            Add a little extra magic, choose any of these for your celebration.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {ADD_ON_GROUPS.map((group) => (
              <div
                key={group.title}
                className="bg-cream rounded-chunk p-6 border border-ink/5 shadow-chunk"
              >
                <h3 className="font-display font-black text-xl text-coral">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-ink/80 border-b border-ink/5 pb-2 last:border-0"
                    >
                      <span aria-hidden className="text-coral">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-ink/60">
            Tell us what you have in mind and we&apos;ll include add-ons in your quote.
          </p>
        </div>
      </section>

      {/* How booking works */}
      <section className="py-14 sm:py-20 bg-cream/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display font-black text-3xl sm:text-4xl text-ink">
            How booking works
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BOOKING_STEPS.map((step) => (
              <div
                key={step.n}
                className="bg-white rounded-chunk p-6 border border-ink/5 shadow-chunk"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-coral text-cream font-display font-black">
                  {step.n}
                </span>
                <h3 className="mt-3 font-display font-black text-lg text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 text-ink/70 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="py-14 sm:py-20 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display font-black text-3xl sm:text-4xl text-ink">
            Book a visit
          </h2>
          <p className="mt-3 text-center text-ink/70">
            Tell us a little about the party and we&apos;ll take it from there. A
            quick visit is the best way to lock your date and theme.
          </p>
          <div className="mt-10">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-cream/60">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink">
            Birthday party FAQs
          </h2>
          <dl className="mt-8 space-y-4">
            {BIRTHDAY_FAQS.map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-chunk p-6 border border-ink/5 shadow-chunk"
              >
                <dt className="font-display font-bold text-lg text-ink">{item.q}</dt>
                <dd className="mt-2 text-ink/70 leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Terms */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-ink">
            Good to know: terms &amp; fine print
          </h2>
          <p className="mt-2 text-ink/60">
            Everything handled, here&apos;s the detail for total peace of mind.
          </p>
          <div className="mt-6 space-y-3">
            {TERMS.map((group) => (
              <details
                key={group.title}
                className="bg-cream rounded-chunk border border-ink/5 shadow-chunk overflow-hidden group"
              >
                <summary className="cursor-pointer list-none px-6 py-4 font-display font-bold text-ink flex justify-between items-center">
                  {group.title}
                  <span className="text-coral group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <ul className="px-6 pb-5 space-y-2 text-ink/70 text-sm">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="text-coral">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-coral text-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl">
            Let&apos;s plan their big day.
          </h2>
          <p className="mt-4 text-lg text-cream/90">
            Book a visit or reserve your date, we&apos;ll handle the rest.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_BIRTHDAY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-cream text-coral shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              💬 WhatsApp +91 90638 17084
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-yellow text-ink shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              📞 {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-6 text-cream/85">
            {BUSINESS.streetAddress}, Bandlaguda Jagir, Hyderabad – {BUSINESS.pincode}
          </p>

          <div className="mt-8 rounded-chunk overflow-hidden border-4 border-cream/20">
            <iframe
              title="Play Panda location in Bandlaguda Jagir, Hyderabad on Google Maps"
              src={MAPS_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] border-0"
            />
          </div>
          <p className="mt-6">
            <Link href="/" className="underline font-display font-bold">
              ← Back to Play Panda home
            </Link>
          </p>
        </div>
      </section>

      <Footer />
      <StickyContactBar />
    </main>
  );
}

// Normalize mixed-case Google names (matches the home Reviews section).
function titleCase(name: string): string {
  return name
    .toLowerCase()
    .split(/\s+/)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(" ");
}

