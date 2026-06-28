import type { ReactNode } from "react";

// On-brand article typography without the Tailwind typography plugin.
// Styles descendants of the rendered post body.
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className={[
        "max-w-none text-ink/80 text-lg leading-relaxed",
        "[&_p]:mt-5",
        "[&_h2]:font-display [&_h2]:font-black [&_h2]:text-ink [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:mt-12 [&_h2]:leading-tight",
        "[&_h3]:font-display [&_h3]:font-bold [&_h3]:text-ink [&_h3]:text-xl [&_h3]:mt-8",
        "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul>li]:mt-2",
        "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol>li]:mt-2",
        "[&_a]:text-coral [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:brightness-110",
        "[&_strong]:text-ink [&_strong]:font-bold",
        "[&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-base",
        "[&_th]:bg-cream [&_th]:text-ink [&_th]:font-display [&_th]:font-bold [&_th]:text-left [&_th]:p-3 [&_th]:border [&_th]:border-ink/10",
        "[&_td]:p-3 [&_td]:border [&_td]:border-ink/10 [&_td]:align-top",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
