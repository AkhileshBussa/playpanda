import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { CtaBlock } from "@/components/CtaBlock";
import { Reveal } from "@/components/Reveal";
import { AREAS, getArea } from "@/lib/areas";
import { ZONES } from "@/lib/zones";
import { BUSINESS, MAPS_EMBED_SRC, RATING } from "@/lib/business";
import { MAPS_LINK, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/links";
import {
  localBusinessSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const title = `${area.headline} | Play Panda`;
  const description = `Play Panda is an indoor, screen-free kids play zone near ${area.name}: ${BUSINESS.sqft} across ${BUSINESS.zoneCount} themed play zones in Bandlaguda Jagir, with a party hall, food court and free parking.`;
  return {
    title,
    description,
    alternates: { canonical: `/kids-play-zone/${area.slug}` },
    openGraph: { title, description, images: ["/MascotWithoutBG.png"] },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Kids Play Zone", href: "/kids-play-zone" },
    { name: area.name, href: `/kids-play-zone/${area.slug}` },
  ];

  const others = AREAS.filter((a) => a.slug !== area.slug);

  return (
    <main>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema(crumbs),
          faqPageSchema(area.faqs),
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
            {area.headline}
          </h1>

          <p
            className="reveal-item mt-6 text-lg sm:text-xl text-ink/75 leading-relaxed"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            {area.intro}
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
            Why families from {area.name} come to Play Panda
          </h2>
          <ul className="mt-6 space-y-3">
            {area.reasons.map((r) => (
              <li key={r} className="flex gap-3 text-ink/80 text-lg leading-relaxed">
                <span className="text-coral font-black shrink-0" aria-hidden>
                  ●
                </span>
                {r}
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-display font-black text-2xl sm:text-3xl text-ink">
            Nine play zones under one roof
          </h2>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed">
            One entry covers every zone, so there are no tokens, no per-ride charges and
            nothing to queue for twice. The {BUSINESS.zoneCount} zones are:
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {ZONES.map((z) => (
              <li
                key={z.name}
                className="bg-cream rounded-chunk px-5 py-4 border border-ink/5 shadow-chunk"
              >
                <span className="font-display font-black text-ink">{z.name}</span>
                <span className="block text-ink/65 text-base mt-1">{z.blurb}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg text-ink/75">
            <Link
              href="/#zones"
              className="text-coral font-bold underline underline-offset-2"
            >
              See all nine zones in detail
            </Link>
            .
          </p>

          <h2 className="mt-14 font-display font-black text-2xl sm:text-3xl text-ink">
            Getting here from {area.name}
          </h2>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed">{area.route}</p>
          <address className="mt-5 not-italic text-ink/80 text-lg leading-relaxed">
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
              title={`Play Panda on Google Maps, the closest kids play zone to ${area.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] border-0"
            />
          </div>

          <h2 className="mt-14 font-display font-black text-2xl sm:text-3xl text-ink">
            Birthday parties for {area.name} families
          </h2>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed">
            Play Panda has a dedicated party hall, a coordinator who runs the day, décor
            options and a food court, with one price covering kids and adults together.
            It works for groups up to 70.{" "}
            <Link
              href="/birthday-parties"
              className="text-coral font-bold underline underline-offset-2"
            >
              See what a birthday at Play Panda includes
            </Link>
            .
          </p>

          <Faq
            items={area.faqs}
            heading={`Kids play zone near ${area.name}: common questions`}
          />

          <h2 className="mt-14 font-display font-black text-2xl sm:text-3xl text-ink">
            Also close by
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {others.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/kids-play-zone/${a.slug}`}
                  className="inline-flex rounded-pill bg-cream border border-ink/10 px-4 py-2 font-display font-bold text-ink/80 hover:text-coral shadow-chunk transition-colors"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
          <CtaBlock />
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
