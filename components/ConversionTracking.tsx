"use client";

import { useEffect } from "react";
import { trackCtaClick } from "@/lib/analytics";

export function ConversionTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;
      trackCtaClick(anchor.getAttribute("href"), anchor.textContent);
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
