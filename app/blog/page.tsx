import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Play Panda Blog · Kids Play Zones in Hyderabad",
  description:
    "Guides for Hyderabad parents, choosing a kids play zone, indoor play tips, screen-free play and family days out in Bandlaguda Jagir.",
  alternates: { canonical: "/blog" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default function BlogIndex() {
  return (
    <main>
      <Nav />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-5 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            The Play Panda <span className="text-coral">Blog</span>
          </h1>
          <p className="mt-5 text-lg text-ink/70 max-w-2xl">
            Honest, useful guides for Hyderabad parents, picking a kids play zone,
            indoor play days, screen-free fun, and the most out of a visit to Play
            Panda in Bandlaguda Jagir.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {POSTS.map(({ meta }) => (
              <Link
                key={meta.slug}
                href={`/blog/${meta.slug}`}
                className="group block bg-cream rounded-chunk p-7 border border-ink/5 shadow-chunk hover:shadow-chunkHover transition-shadow"
              >
                <h2 className="font-display font-black text-2xl text-ink leading-tight group-hover:text-coral transition-colors">
                  {meta.title}
                </h2>
                <p className="mt-3 text-ink/70 leading-relaxed">{meta.excerpt}</p>
                <span className="mt-4 inline-block font-display font-bold text-coral">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
