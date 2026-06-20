import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "coral" | "green" | "yellow" | "ink" | "white";

const variants: Record<Variant, string> = {
  coral: "bg-coral text-cream hover:brightness-105",
  green: "bg-green text-cream hover:brightness-105",
  yellow: "bg-yellow text-ink hover:brightness-105",
  ink: "bg-ink text-cream hover:brightness-110",
  white: "bg-cream text-ink hover:bg-white",
};

export function Button({
  href,
  children,
  variant = "coral",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 font-display font-black text-base sm:text-lg shadow-[0_6px_0_rgba(0,0,0,0.12)] active:translate-y-[2px] active:shadow-[0_4px_0_rgba(0,0,0,0.12)] transition-all ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
