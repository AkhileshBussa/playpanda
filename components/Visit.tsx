import Image from "next/image";
import { Button } from "./Button";
import {
  WHATSAPP_LINK,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/links";

export function Visit() {
  return (
    <section id="visit" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <p className="font-display font-bold text-purple uppercase tracking-widest text-sm">
            Come visit
          </p>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Find us. Call us.
            <br />
            <span className="text-green">Or just walk in.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/70 max-w-xl">
            We&apos;d love to show you around. Scan a QR, drop us a WhatsApp, or
            give us a ring.
          </p>
        </header>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <article className="bg-cream rounded-chunk p-7 sm:p-8 shadow-chunk border border-ink/5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display font-black text-2xl text-ink">
                  Find us on the map
                </h3>
                <p className="mt-2 text-ink/70">
                  Scan to open Google Maps, or tap the button below.
                </p>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-pill bg-green text-cream text-xl">📍</span>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="bg-white p-3 rounded-2xl shadow-chunk shrink-0">
                <Image
                  src="/GoogleMapsLocationQR.png"
                  alt="Google Maps location QR"
                  width={180}
                  height={180}
                  className="h-44 w-44 object-contain"
                />
              </div>
              <div className="flex-1 w-full">
                <Button href={MAPS_LINK} variant="green" external className="w-full sm:w-auto">
                  Open in Maps
                </Button>
                <p className="mt-3 text-sm text-ink/60">
                  Free parking · easy entry · pram-friendly
                </p>
              </div>
            </div>
          </article>

          <article className="bg-cream rounded-chunk p-7 sm:p-8 shadow-chunk border border-ink/5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display font-black text-2xl text-ink">
                  Join the community
                </h3>
                <p className="mt-2 text-ink/70">
                  WhatsApp community for events, party slots, and play days.
                </p>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-pill bg-coral text-cream text-xl">💬</span>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="bg-white p-3 rounded-2xl shadow-chunk shrink-0">
                <Image
                  src="/PlayPanda_WhatsAppCommunity_QR.png"
                  alt="WhatsApp community QR"
                  width={180}
                  height={180}
                  className="h-44 w-44 object-contain"
                />
              </div>
              <div className="flex-1 w-full space-y-3">
                <Button href={WHATSAPP_LINK} variant="coral" external className="w-full sm:w-auto">
                  WhatsApp us
                </Button>
                <a
                  href={PHONE_TEL}
                  className="block font-display font-bold text-ink hover:text-coral transition-colors"
                >
                  📞 {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
