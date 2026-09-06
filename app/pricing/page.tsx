import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { CtaBlock } from "@/components/CtaBlock";
import { Reveal } from "@/components/Reveal";
import { BUSINESS } from "@/lib/business";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK, WHATSAPP_BIRTHDAY_LINK } from "@/lib/links";
import {
  localBusinessSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Play Panda Prices, Tickets & Entry | Bandlaguda Jagir, Hyderabad",
  description:
    "What a visit to Play Panda costs and covers: one entry for all 9 play zones, adult entry, socks policy, and how birthday party quotes work. Message us on WhatsApp for today's rates.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Play Panda Prices, Tickets & Entry",
    description:
      "One entry covers all 9 zones, no tokens and no per-ride charges. Here's exactly what a visit includes and how party pricing works.",
    images: ["/MascotWithoutBG.png"],
  },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Prices & Tickets", href: "/pricing" },
];

const INCLUDED = [
  "Access to all nine themed play zones on one entry",
  "No tokens, no coins and no per-ride charges once you're in",
  "Staff on the play floor through your session",
  "Parent workstation with free Wi-Fi, coffee and clear sightlines",
  "Free parking and a pram-friendly entrance",
];

const NOT_INCLUDED = [
  "Food and drinks from the food court, ordered as you like",
  "Grip socks, if you haven't brought your own pair",
  "Birthday party packages, which are quoted separately by group size",
];

const pricingFaqs = [
  {
    q: "How much does Play Panda cost?",
    a: "Entry is charged per child for a play session, and covers all nine zones with no tokens or per-ride charges. Rates vary between weekdays and weekends and change with seasonal offers, so Play Panda shares current pricing directly. Message +91 90638 17084 on WhatsApp and you'll usually have an answer within minutes.",
  },
  {
    q: "What does the ticket include?",
    a: "One entry covers all nine themed play zones for the session, staff supervision on the floor, the parent workstation with free Wi-Fi and coffee, and free parking. Food from the food court and grip socks are separate.",
  },
  {
    q: "Do adults have to pay?",
    a: "Play Panda is built so a parent can stay close and comfortable while their child plays, with a dedicated parent workstation. Message +91 90638 17084 on WhatsApp for the current adult entry policy and any accompanying-adult limits.",
  },
  {
    q: "How long can we stay?",
    a: "Message +91 90638 17084 on WhatsApp for the current session length and entry policy on the day you're planning to visit.",
  },
  {
    q: "Do I need to book tickets in advance?",
    a: "No. Walk-ins are welcome for play. Birthday parties and school groups do need a booking, since they use the party hall and a dedicated coordinator.",
  },
  {
    q: "How much is a birthday party at Play Panda?",
    a: "Birthday parties are quoted per celebration rather than sold at a fixed rate, because group size, slot and add-ons all change the number. One simple price covers your total guest count, kids and adults together, for groups up to 70. Share your date and headcount on WhatsApp and you'll get a tailored quote back, usually within minutes.",
  },
  {
    q: "Are socks compulsory?",
    a: "Yes. Play Panda has a socks-on policy for hygiene, for children and for any adult going into the play zones. Bring your own pair or pick some up at the counter.",
  },
];

export default function Pricing() {
  return (
    <main>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema(crumbs),
          faqPageSchema(pricingFaqs),
        ]}
      />
      <Nav />

      <section className="py-14 sm:py-20">
        <Reveal className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <h1
            className="reveal-item mt-5 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            Play Panda <span className="text-coral">prices &amp; tickets</span>
          </h1>

          <p
            className="reveal-item mt-6 text-lg sm:text-xl text-ink/75 leading-relaxed"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Entry to Play Panda is one price per child that covers all{" "}
            {BUSINESS.zoneCount} play zones for the session. No tokens, no coins, no
            per-ride charges. Rates shift between weekdays, weekends and seasonal
            offers, so the quickest way to get today&apos;s number is a WhatsApp
            message, usually answered within minutes.
          </p>

          <div
            className="reveal-item mt-8 flex flex-wrap gap-3"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-green text-cream shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              💬 Get today&apos;s rates
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-cream text-ink border border-ink/10 shadow-chunk active:translate-y-[2px] transition-all hover:brightness-105"
            >
              📞 {PHONE_DISPLAY}
            </a>
          </div>

          <h2 className="mt-14 font-display font-black text-2xl sm:text-3xl text-ink">
            What one entry covers
          </h2>
          <ul className="mt-6 space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 text-ink/80 text-lg leading-relaxed">
                <span className="text-green font-black shrink-0" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display font-black text-2xl sm:text-3xl text-ink">
            Charged separately
          </h2>
          <ul className="mt-6 space-y-3">
            {NOT_INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 text-ink/80 text-lg leading-relaxed">
                <span className="text-coral font-black shrink-0" aria-hidden>
                  +
                </span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-display font-black text-2xl sm:text-3xl text-ink">
            How birthday party pricing works
          </h2>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed">
            Birthday parties aren&apos;t sold off a fixed price list, because the number
            genuinely depends on your group size, your slot and what you add on. What
            stays the same is the shape of it: one simple price for your{" "}
            <strong className="text-ink">total guest count, kids and adults together</strong>
            , a three-hour celebration slot, a dedicated coordinator, all nine play zones
            and a themed e-invite, for groups up to 70.
          </p>
          <p className="mt-5 text-lg text-ink/75 leading-relaxed">
            Send your date and rough headcount and you&apos;ll get a tailored quote back,
            usually within minutes.{" "}
            <Link
              href="/birthday-parties"
              className="text-coral font-bold underline underline-offset-2"
            >
              See everything a birthday at Play Panda includes
            </Link>
            .
          </p>
          <div className="mt-6">
            <a
              href={WHATSAPP_BIRTHDAY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-coral text-cream shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              🎂 Get a party quote
            </a>
          </div>

          <h2 className="mt-14 font-display font-black text-2xl sm:text-3xl text-ink">
            Before you come
          </h2>
          <ul className="mt-6 space-y-3 text-ink/80 text-lg leading-relaxed">
            <li className="flex gap-3">
              <span className="text-teal font-black shrink-0" aria-hidden>
                ●
              </span>
              Socks are compulsory in the play zones, for children and for adults going in
              with them. Bring a pair or pick one up at the counter.
            </li>
            <li className="flex gap-3">
              <span className="text-teal font-black shrink-0" aria-hidden>
                ●
              </span>
              The Water Zone does exactly what it says. Pack a spare set of clothes and
              let them go for it.
            </li>
            <li className="flex gap-3">
              <span className="text-teal font-black shrink-0" aria-hidden>
                ●
              </span>
              Hours are {BUSINESS.openingHoursDisplay}. Free parking on site.
            </li>
          </ul>

          <Faq items={pricingFaqs} heading="Prices & tickets: FAQs" />

          <CtaBlock
            heading="Want today's rates?"
            body="Message us on WhatsApp with the day you're planning and how many kids are coming. We'll send back current entry rates, or a party quote, usually within minutes."
          />
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
