import { Button } from "./Button";
import { WHATSAPP_LINK, MAPS_LINK } from "@/lib/links";

// Reusable end-of-post CTA (spec §5: WhatsApp + Maps).
export function CtaBlock({
  heading = "Planning a visit?",
  body = "Message us on WhatsApp, we'll help you pick a good time and the right zones for your child's age.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <aside className="mt-14 bg-green text-cream rounded-chunk p-7 sm:p-9 shadow-chunk">
      <h2 className="font-display font-black text-2xl sm:text-3xl">{heading}</h2>
      <p className="mt-3 text-cream/90 max-w-xl text-lg">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={WHATSAPP_LINK} variant="coral" external>
          💬 WhatsApp us
        </Button>
        <Button href={MAPS_LINK} variant="yellow" external>
          📍 Open in Maps
        </Button>
      </div>
    </aside>
  );
}
