"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section" | "ul";
  style?: CSSProperties;
  "aria-label"?: string;
};

/**
 * Wraps a section/hero and staggers its `.reveal-item` children into view when
 * the group enters the viewport (e.g. on scroll or when a nav link jumps to it).
 * Re-enters replay the animation. Reduced-motion + no-JS both show content plainly.
 */
export function Reveal({ children, className = "", id, as = "div", style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setInView(true);
      return;
    }
    let observed = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        observed = true;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.01, rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    const fallback = window.setTimeout(() => {
      if (!observed) setInView(true);
    }, 1200);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  const Comp = as as "div";
  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      id={id}
      style={style}
      className={`reveal ${inView ? "in" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Comp>
  );
}
