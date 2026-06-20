import { Button } from "./Button";
import { WHATSAPP_PARTY_LINK } from "@/lib/links";

export function Birthdays() {
  return (
    <section id="birthdays" className="relative">
      <div className="bg-coral text-cream rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="font-display font-black uppercase tracking-widest text-sm text-yellow">
                Birthdays + Celebrations
              </p>
              <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-cream">
                Throw the party.
                <br />
                We&apos;ll handle the chaos.
              </h2>
              <p className="mt-5 text-lg sm:text-xl text-cream max-w-xl leading-relaxed">
                Birthdays, milestones, and any reason to gather, all sorted end to end.
                A dedicated party hall, decor that pops, food the kids will actually
                eat, and nine zones of play to keep the energy high.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Button href={WHATSAPP_PARTY_LINK} variant="yellow" external>
                  Book the party hall
                </Button>
                <Button href="#visit" variant="white">
                  Come see it
                </Button>
              </div>
            </div>

            <ul className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { t: "Decor", d: "On-theme, on point.", icon: "🎈" },
                { t: "Food", d: "Familiar favorites.", icon: "🍕" },
                { t: "Cake", d: "Bring your own or order through us.", icon: "🎂" },
                { t: "Hosts", d: "Two warm humans, on the clock.", icon: "🙌" },
              ].map((c) => (
                <li
                  key={c.t}
                  className="bg-cream rounded-chunk p-5 shadow-chunk"
                >
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-pill bg-coral/15 text-2xl">
                    {c.icon}
                  </span>
                  <h3 className="mt-3 font-display font-black text-xl text-ink">{c.t}</h3>
                  <p className="mt-1 text-ink/70 text-sm leading-relaxed">{c.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
