import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FranchiseForm } from "@/components/FranchiseForm";
import { StickyContactBar } from "@/components/StickyContactBar";
import { Bunting, ScallopBottom } from "@/components/PartyDecor";
import {
  WHATSAPP_FRANCHISE_LINK,
  FRANCHISE_PHONE_DISPLAY,
  FRANCHISE_PHONE_TEL,
} from "@/lib/links";
import {
  OPPORTUNITY,
  STAT_TILES,
  WHY_FAMILIES,
  REVENUE_STREAMS,
  FORMATS,
  WHAT_WE_PROVIDE,
  PARTNERSHIP_TERMS,
  WHO_WE_WANT,
  PROCESS,
  FRANCHISE_FAQS,
} from "@/lib/franchise";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Play Panda Franchise Opportunity — Open an Indoor Kids' Play & Party Centre",
  description:
    "Bring Play Panda to your city. Partner with India's screen-free indoor play, café and celebration brand. Flexible formats from compact to flagship. Enquire today.",
  alternates: { canonical: "/franchise" },
  openGraph: {
    title: "Play Panda Franchise Opportunity",
    description:
      "Partner with India's screen-free indoor play, café and celebration brand. Flexible formats for metros, growing cities and tier-2 towns.",
    images: ["/MascotWithoutBG.png"],
  },
};

// Server-rendered on request (client form + Next 15.5 prerender-manifest bug).
export const dynamic = "force-dynamic";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Franchise", href: "/franchise" },
];

export default function Franchise() {
  return (
    <main className="pb-16 lg:pb-0">
      <JsonLd data={[breadcrumbSchema(crumbs), faqPageSchema(FRANCHISE_FAQS)]} />
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden text-ink" style={{ backgroundColor: "#FFEFC0" }}>
        <Bunting />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-14 pb-24 text-center">
          <p className="font-display font-bold uppercase tracking-widest text-ink/60 text-sm">
            Partner with us
          </p>
          <h1 className="mt-3 font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
            Bring Play Panda to your city
          </h1>
          <p className="mt-5 text-xl text-ink/80 max-w-2xl mx-auto">
            Partner with India&apos;s screen-free indoor play, café and celebration
            brand, and build a business families love.
          </p>
          <p className="mt-3 font-display font-bold text-ink/70">
            Flexible formats for metros, growing cities and tier-2 towns.
          </p>
          <div className="mt-8">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display font-black text-lg bg-coral text-cream shadow-[0_6px_0_rgba(0,0,0,0.18)] active:translate-y-[2px] transition-all hover:brightness-105"
            >
              Enquire about a franchise
            </a>
          </div>
        </div>
        <ScallopBottom className="text-cream" />
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* Opportunity */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center">
            A growing need for places to play
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-center text-ink/70">
            Indian families are looking for safe, screen-free, joyful spaces for their
            children, and there still aren&apos;t enough of them.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OPPORTUNITY.map((c) => (
              <div key={c.title} className="bg-cream rounded-chunk p-6 border border-ink/5 shadow-chunk">
                <div className="text-4xl">{c.icon}</div>
                <h3 className="mt-3 font-display font-black text-lg text-ink">{c.title}</h3>
                <p className="mt-1 text-ink/70 text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + stat tiles */}
      <section className="py-14 sm:py-20 bg-cream/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-ink">
              A space designed for play, safe for kids
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Play Panda brings play, café and celebrations together under one roof, a
              destination where kids play freely, parents relax nearby, and birthdays
              come to life.
            </p>
            <p className="mt-4 bg-purple/10 rounded-chunk px-5 py-4 font-display font-bold text-ink">
              ✨ Premium, thoughtful design: bright, child-safe colours and quality
              materials throughout, so the space feels special and safe the moment you
              walk in.
            </p>
            <p className="mt-4 text-ink/70">
              Parents stay close while kids play, a space designed for the whole family.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STAT_TILES.map((t) => (
              <div key={t.unit} className="bg-white rounded-chunk p-6 border border-ink/5 shadow-chunk text-center">
                <p className="font-display font-black text-3xl text-coral">{t.value}</p>
                <p className="mt-1 text-ink/70 text-sm">{t.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why families choose */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center">
            Why families choose Play Panda
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_FAMILIES.map((c) => (
              <div key={c.title} className="bg-cream rounded-chunk p-6 border border-ink/5 shadow-chunk">
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-3 font-display font-black text-lg text-ink">{c.title}</h3>
                <p className="mt-1 text-ink/70 text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue streams */}
      <section className="py-14 sm:py-20 bg-cream/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center">
            Multiple ways every centre earns
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-center text-ink/70">
            Diversified revenue means a Play Panda isn&apos;t dependent on any single
            line, weekday play, weekend parties and the daily café all contribute.
          </p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {REVENUE_STREAMS.map((c) => (
              <div key={c.title} className="bg-white rounded-chunk p-5 border border-ink/5 shadow-chunk">
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-2 font-display font-black text-ink">{c.title}</h3>
                <p className="mt-1 text-ink/70 text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center">
            One brand, sized for every market
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-center text-ink/70">
            Space and investment scale to the location. Safety standards and brand
            identity stay constant across every format.
          </p>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {FORMATS.map((f) => (
              <article
                key={f.name}
                style={{ backgroundColor: f.tint }}
                className="rounded-chunk p-7 border border-ink/5 shadow-chunk"
              >
                <h3 className="font-display font-black text-2xl text-ink">{f.name}</h3>
                <p className="mt-1 font-display font-bold text-ink/70">{f.bestFor}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-pill bg-white/70 px-3 py-1 font-display font-bold text-ink text-sm">
                  📐 {f.size}
                </p>
                <p className="mt-4 text-ink/75">{f.highlights}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 mx-auto max-w-2xl text-center text-ink/60 text-sm">
            Non-negotiable in every format: child-safety standards, hygiene protocols
            and the Play Panda brand identity. Investment scales with format, we&apos;ll
            share the specifics during your enquiry.
          </p>
        </div>
      </section>

      {/* What we provide */}
      <section className="py-14 sm:py-20 bg-cream/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center">
            What you get as a partner
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHAT_WE_PROVIDE.map((c) => (
              <div key={c.title} className="bg-white rounded-chunk p-6 border border-ink/5 shadow-chunk">
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-3 font-display font-black text-lg text-ink">{c.title}</h3>
                <p className="mt-1 text-ink/70 text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership at a glance */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center">
            The partnership at a glance
          </h2>
          <dl className="mt-8 divide-y divide-ink/10 bg-cream rounded-chunk border border-ink/5 shadow-chunk overflow-hidden">
            {PARTNERSHIP_TERMS.map((t) => (
              <div key={t.item} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-6 py-4">
                <dt className="font-display font-black text-ink sm:w-44 shrink-0">{t.item}</dt>
                <dd className="text-ink/75">{t.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="py-14 sm:py-20 bg-cream/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center">
            Who we&apos;re looking for
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-center text-ink/70">
            Play Panda works best with partners who care about kids and run a tight
            operation.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {WHO_WE_WANT.map((c) => (
              <div key={c.title} className="bg-white rounded-chunk p-6 border border-ink/5 shadow-chunk">
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-3 font-display font-black text-lg text-ink">{c.title}</h3>
                <p className="mt-1 text-ink/70 text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center">
            From enquiry to opening day
          </h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-6 gap-4">
            {PROCESS.map((s) => (
              <div key={s.n} className="bg-cream rounded-chunk p-5 border border-ink/5 shadow-chunk text-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-coral text-cream font-display font-black">
                  {s.n}
                </span>
                <h3 className="mt-3 font-display font-black text-ink">{s.title}</h3>
                <p className="mt-1 text-ink/70 text-xs">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-cream/60">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink">
            Franchise FAQs
          </h2>
          <div className="mt-8 space-y-3">
            {FRANCHISE_FAQS.map((item) => (
              <details key={item.q} className="bg-white rounded-chunk border border-ink/5 shadow-chunk overflow-hidden group">
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
      <section id="enquire" className="py-14 sm:py-20 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display font-black text-3xl sm:text-4xl text-ink">
            Let&apos;s grow Play Panda together
          </h2>
          <p className="mt-3 text-center text-ink/70">
            Tell us a little about yourself and your city, we&apos;ll be in touch to
            explore the fit.
          </p>
          <div className="mt-10">
            <FranchiseForm />
          </div>
          <p className="mt-6 text-center text-ink/70">
            Prefer to talk?{" "}
            <a href={WHATSAPP_FRANCHISE_LINK} target="_blank" rel="noopener noreferrer" className="font-display font-bold text-coral hover:brightness-110">
              WhatsApp
            </a>{" "}
            or call{" "}
            <a href={FRANCHISE_PHONE_TEL} className="font-display font-bold text-coral hover:brightness-110">
              {FRANCHISE_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>

      <Footer />
      <StickyContactBar
        whatsappHref={WHATSAPP_FRANCHISE_LINK}
        whatsappLabel="Enquire about a franchise"
        phoneHref={FRANCHISE_PHONE_TEL}
      />
    </main>
  );
}
