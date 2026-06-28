import { WHATSAPP_BIRTHDAY_LINK, PHONE_TEL } from "@/lib/links";

// Persistent mobile-only contact bar (spec §6). Hidden on lg+.
// Defaults to the birthday CTAs; pass props to reuse on other pages.
export function StickyContactBar({
  whatsappHref = WHATSAPP_BIRTHDAY_LINK,
  whatsappLabel = "Enquire on WhatsApp",
  phoneHref = PHONE_TEL,
}: {
  whatsappHref?: string;
  whatsappLabel?: string;
  phoneHref?: string;
}) {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-cream/95 backdrop-blur border-t border-ink/10 px-3 py-2.5 flex gap-2">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-pill px-4 py-3 font-display font-black bg-green text-cream"
      >
        💬 {whatsappLabel}
      </a>
      <a
        href={phoneHref}
        className="inline-flex items-center justify-center gap-2 rounded-pill px-5 py-3 font-display font-black bg-coral text-cream"
        aria-label="Call Play Panda"
      >
        📞 Call
      </a>
    </div>
  );
}
