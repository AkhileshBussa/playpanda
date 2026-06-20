import Image from "next/image";
import { Button } from "./Button";
import { WHATSAPP_LINK, MAPS_LINK } from "@/lib/links";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* playful brand blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute top-40 right-0 h-72 w-72 rounded-full bg-teal/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-pill bg-yellow/80 px-4 py-1.5 font-display font-bold text-ink text-sm">
              <span className="h-2 w-2 rounded-full bg-coral" /> A world built for wonder
            </span>

            <h1 className="mt-5 font-display font-black tracking-tight text-ink text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
              Screens off.
              <br />
              <span className="text-coral">Imagination</span> on.
            </h1>

            <p className="mt-6 max-w-xl text-lg sm:text-xl text-ink/75 leading-relaxed">
              10,000 sq. ft. of imagination-first indoor play. Nine themed zones, a
              party hall, a kid-friendly food court, and a comfy corner where parents
              can stay close while the little ones go big.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Button href={WHATSAPP_LINK} variant="coral" external>
                Plan a visit
              </Button>
              <Button href={MAPS_LINK} variant="ink" external>
                Get directions
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-teal/40" aria-hidden />
              <div className="absolute inset-6 rounded-[55%_45%_60%_40%/45%_55%_45%_55%] bg-coral/30" aria-hidden />
              <Image
                src="/MascotWithoutBG.png"
                alt="Play Panda mascot"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-contain animate-bob drop-shadow-xl"
              />
              <span className="absolute -top-2 right-4 rotate-6 rounded-pill bg-yellow px-4 py-1.5 font-display font-black text-ink shadow-chunk animate-wobble">
                Come play!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* color marquee strip */}
      <div className="bg-ink py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-10 font-display font-black text-cream uppercase tracking-wide text-lg">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10 px-5">
              <Dot color="bg-coral" /> Imagine
              <Dot color="bg-yellow" /> Build
              <Dot color="bg-green" /> Splash
              <Dot color="bg-pink" /> Climb
              <Dot color="bg-teal" /> Pretend
              <Dot color="bg-purple" /> Dig
              <Dot color="bg-brown" /> Race
              <Dot color="bg-coral" /> Repeat
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot({ color }: { color: string }) {
  return <span className={`my-auto h-3 w-3 rounded-full ${color}`} aria-hidden />;
}
