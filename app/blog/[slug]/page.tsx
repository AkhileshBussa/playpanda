import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Prose } from "@/components/Prose";
import { Faq } from "@/components/Faq";
import { CtaBlock } from "@/components/CtaBlock";
import { getPost, allSlugs, formatDate, POSTS } from "@/lib/blog";
import {
  blogPostingSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { meta } = post;
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    alternates: { canonical: `/blog/${meta.slug}` },
    openGraph: {
      type: "article",
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [meta.ogImage],
      publishedTime: meta.datePublished,
      modifiedTime: meta.dateModified,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, faqs, Body, related } = post;

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: meta.title, href: `/blog/${meta.slug}` },
  ];

  const relatedPosts = related
    .map((slug) => POSTS.find((p) => p.meta.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main>
      <Nav />
      <JsonLd
        data={[
          blogPostingSchema({
            headline: meta.title,
            description: meta.metaDescription,
            slug: meta.slug,
            image: meta.ogImage,
            datePublished: meta.datePublished,
            dateModified: meta.dateModified,
          }),
          breadcrumbSchema(crumbs),
          faqPageSchema(faqs),
        ]}
      />

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <h1 className="mt-5 font-display font-black text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.08]">
            {meta.title}
          </h1>

          <p className="mt-4 text-sm text-ink/55 font-display font-bold">
            Published {formatDate(meta.datePublished)} · Last updated{" "}
            {formatDate(meta.dateModified)} · By {meta.author}
          </p>

          <div className="mt-8">
            <Prose>
              <Body />
            </Prose>
          </div>

          <CtaBlock />

          <Faq items={faqs} />

          {relatedPosts.length > 0 && (
            <section className="mt-14">
              <h2 className="font-display font-black text-2xl text-ink">Keep reading</h2>
              <ul className="mt-5 space-y-3">
                {relatedPosts.map((p) => (
                  <li key={p.meta.slug}>
                    <Link
                      href={`/blog/${p.meta.slug}`}
                      className="font-display font-bold text-coral hover:brightness-110"
                    >
                      {p.meta.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-12">
            <Link href="/blog" className="font-display font-bold text-ink/70 hover:text-coral">
              ← All posts
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
