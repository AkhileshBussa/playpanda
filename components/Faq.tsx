import type { Faq as FaqItem } from "@/lib/schema";

// Visible FAQ block. Pair with faqPageSchema() for FAQPage JSON-LD.
export function Faq({ items, heading = "Frequently asked questions" }: { items: FaqItem[]; heading?: string }) {
  return (
    <section className="mt-14">
      <h2 className="font-display font-black text-2xl sm:text-3xl text-ink">{heading}</h2>
      <dl className="mt-6 space-y-5">
        {items.map((item) => (
          <div key={item.q} className="bg-cream rounded-chunk p-6 border border-ink/5 shadow-chunk">
            <dt className="font-display font-bold text-lg text-ink">{item.q}</dt>
            <dd className="mt-2 text-ink/70 leading-relaxed">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
