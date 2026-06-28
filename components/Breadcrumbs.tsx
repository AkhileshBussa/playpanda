import Link from "next/link";

export type Crumb = { name: string; href: string };

// Visible breadcrumb trail. Pair with BreadcrumbList JSON-LD (see lib/schema.ts).
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="font-display font-bold text-ink/80" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-coral transition-colors">
                    {item.name}
                  </Link>
                  <span aria-hidden className="text-ink/30">
                    ›
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
