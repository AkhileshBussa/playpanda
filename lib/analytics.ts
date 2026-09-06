type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export const CONVERSION_EVENTS = {
  whatsapp: "whatsapp_click",
  phone: "phone_click",
  directions: "directions_click",
  instagram: "instagram_click",
  formSubmit: "lead_form_submit",
} as const;

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    page_path: window.location.pathname,
    ...params,
  });
}

function whatsappIntent(href: string): string {
  const text = decodeURIComponent(href.split("text=")[1] ?? "").toLowerCase();
  if (text.includes("franchise")) return "franchise";
  if (text.includes("school")) return "school";
  if (text.includes("birthday")) return "birthday";
  if (text.includes("party hall")) return "party";
  return "general";
}

export function trackCtaClick(href: string | null, label?: string | null) {
  if (!href) return;
  const linkText = (label ?? "").replace(/\s+/g, " ").trim().slice(0, 80);

  if (href.startsWith("https://wa.me/")) {
    trackEvent(CONVERSION_EVENTS.whatsapp, {
      cta_intent: whatsappIntent(href),
      link_text: linkText,
    });
    return;
  }
  if (href.startsWith("tel:")) {
    trackEvent(CONVERSION_EVENTS.phone, { link_text: linkText });
    return;
  }
  if (href.includes("maps.app.goo.gl") || href.includes("google.com/maps")) {
    trackEvent(CONVERSION_EVENTS.directions, { link_text: linkText });
    return;
  }
  if (href.includes("instagram.com")) {
    trackEvent(CONVERSION_EVENTS.instagram, { link_text: linkText });
  }
}
