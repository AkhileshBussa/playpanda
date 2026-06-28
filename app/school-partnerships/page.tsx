import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SchoolForm } from "@/components/SchoolForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Bunting, ScallopBottom } from "@/components/PartyDecor";
import {
  WHATSAPP_SCHOOL_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/links";
import { BUSINESS, MAPS_EMBED_SRC } from "@/lib/business";
import {
  AT_A_GLANCE,
  PARTNER_WAYS,
  DEVELOPMENTAL,
  SAFETY,
  SCHOOL_STEPS,
  SCHOOL_FAQS,
} from "@/lib/schools";
import {
  localBusinessSchema,
  schoolServiceSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "School Partnerships, Field Trips & Excursions in Hyderabad | Play Panda",
  description:
    "Partner with Play Panda — field trips, birthday passes, and annual-day celebrations for preschools & primary schools in Bandlaguda Jagir, Hyderabad. 10,000 sq ft of safe, supervised, screen-free play. Book a private walkthrough.",
  alternates: { canonical: "/school-partnerships" },
  openGraph: {
    title: "School Partnerships & Field Trips in Hyderabad | Play Panda",
    description:
      "Field trips, birthday passes and annual-day celebrations for preschools and primary schools in Bandlaguda Jagir, Hyderabad. Book a private walkthrough.",
    images: ["/MascotWithoutBG.png"],
  },
};

// Server-rendered on request (client form + Next 15.5 prerender-manifest bug).
export const dynamic = "force-dynamic";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "School Partnerships", href: "/school-partnerships" },
];

export default function SchoolPartnerships() {
  return (
    <main className="pb-16 lg:pb-0">
      <JsonLd
        data={[
          localBusinessSchema(),
          schoolServiceSchema(),
          breadcrumbSchema(crumbs),
          faqPageSchema(SCHOOL_FAQS),
        ]}
      />
      <Nav />

      {/* Hero */}
      <section className="relative bg-coral text-cream overflow-hidden">
        <Bunting />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-14 pb-24 text-center">
          <p className="font-display font-bold uppercase tracking-widest text-cream/80 text-sm">
            For preschools &amp; schools nearby
          </p>
          <h1 className="mt-3 font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.03]">
            A play world your students will love
          </h1>
          <p className="mt-5 text-xl text-cream/95 max-w-2xl mx-auto">
            An indoor play &amp; party space built entirely for kids, and a warm new
            partner for your school.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-cream text-coral shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              Book a Private Walkthrough
            </a>
            <a
              href={WHATSAPP_SCHOOL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-yellow text-ink shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              💬 WhatsApp us
            </a>
          </div>
        </div>
        <ScallopBottom className="text-cream" />
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* At a glance */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          {AT_A_GLANCE.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 rounded-pill bg-cream border border-ink/5 shadow-chunk px-5 py-2.5 font-display font-bold text-ink"
            >
              ✓ {pill}
            </span>
          ))}
        </div>
      </section>

      {/* Ways we'd love to partner */}
      <section className="py-14 sm:py-20 bg-cream/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center">
            Ways we&apos;d love to partner
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-center text-ink/70">
            A year-round relationship, not a one-off. Pick what fits your school; we
            handle the rest.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {PARTNER_WAYS.map((w) => (
              <article
                key={w.title}
                style={{ backgroundColor: w.tint }}
                className="rounded-chunk p-7 border border-ink/5 shadow-chunk"
              >
                <div className="text-4xl">{w.icon}</div>
                <h3 className="mt-3 font-display font-black text-xl text-ink">{w.title}</h3>
                <p className="mt-2 text-ink/75">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Developmental framing */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink">
            Built for little minds, not just little legs
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-ink/70">
            Our nine zones turn a day out into a genuine learning experience, with a
            facilitated activity (storytime, craft or role-play) so it reads as
            curriculum, not just an outing.
          </p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {DEVELOPMENTAL.map((d) => (
              <div key={d.label} className="bg-cream rounded-chunk p-6 border border-ink/5 shadow-chunk">
                <div className="text-4xl">{d.icon}</div>
                <p className="mt-3 font-display font-bold text-ink text-sm">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-14 sm:py-20 bg-green text-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-center">
            Safety you can sign off on
          </h2>
          <p className="mt-3 text-center text-cream/85">
            The yes/no factor for any school, handled and specific.
          </p>
          <ul className="mt-8 sm:columns-2 sm:gap-x-8">
            {SAFETY.map((item) => (
              <li key={item} className="mb-3 flex items-start gap-2.5 break-inside-avoid">
                <span aria-hidden className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-pill bg-cream/20 text-cream text-xs font-black">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founding partner */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center bg-purple/10 rounded-chunk p-8 sm:p-10 border border-ink/5">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-ink">
            Become a Founding School Partner
          </h2>
          <p className="mt-4 text-ink/75 text-lg">
            We&apos;re partnering with a select few schools nearby as Founding Partners,
            with priority slots and special partnership terms. We&apos;d love to show you
            around.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 sm:py-20 bg-cream/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center">
            How it works
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {SCHOOL_STEPS.map((s) => (
              <div key={s.n} className="bg-white rounded-chunk p-6 border border-ink/5 shadow-chunk text-center">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-pill bg-coral text-cream font-display font-black text-lg">
                  {s.n}
                </span>
                <h3 className="mt-3 font-display font-black text-lg text-ink">{s.title}</h3>
                <p className="mt-1 text-ink/70 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-ink/60">
            Partnership terms are tailored to your school. The best next step is to come
            and feel the space for yourself.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink">
            School partnership FAQs
          </h2>
          <div className="mt-8 space-y-3">
            {SCHOOL_FAQS.map((item) => (
              <details key={item.q} className="bg-cream rounded-chunk border border-ink/5 shadow-chunk overflow-hidden group">
                <summary className="cursor-pointer list-none px-6 py-4 font-display font-bold text-ink flex justify-between items-center">
                  {item.q}
                  <span className="text-coral group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="px-6 pb-5 text-ink/70 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="py-14 sm:py-20 bg-cream/60 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display font-black text-3xl sm:text-4xl text-ink">
            Book a private walkthrough
          </h2>
          <p className="mt-3 text-center text-ink/70">
            Tell us about your school and we&apos;ll arrange a no-obligation visit, the
            best way to see if we&apos;re a fit.
          </p>
          <div className="mt-10">
            <SchoolForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-coral text-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl">Come see the space.</h2>
          <p className="mt-4 text-lg text-cream/90">
            We&apos;d love to host you for a private walkthrough, no obligation, just come
            and feel it for yourself.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_SCHOOL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-cream text-coral shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              💬 WhatsApp us
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
      <StickyContactBar
        whatsappHref={WHATSAPP_SCHOOL_LINK}
        whatsappLabel="WhatsApp us"
        phoneHref={PHONE_TEL}
      />
    </main>
  );
}
