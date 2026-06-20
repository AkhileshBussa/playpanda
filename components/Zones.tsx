import { ZONES } from "@/lib/zones";

export function Zones() {
  return (
    <section id="zones" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <p className="font-display font-bold text-coral uppercase tracking-widest text-sm">
            The play zones
          </p>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Nine little worlds.
            <br />
            One big afternoon.
          </h2>
          <p className="mt-5 text-lg text-ink/70 max-w-xl">
            Each zone is built around a different way to play. From quiet, sensory
            corners to splashy, climby, run-around adventures.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ZONES.map((z, i) => (
            <li
              key={z.name}
              className={`group relative ${z.bg} ${z.ink} rounded-chunk p-7 sm:p-8 shadow-chunk hover:shadow-chunkHover hover:-translate-y-1 transition-all duration-300`}
              style={{ transform: `rotate(${(i % 3) - 1 === 0 ? 0 : (i % 3) - 1 > 0 ? 0.4 : -0.4}deg)` }}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-pill bg-ink/15 text-2xl">
                  {z.emoji}
                </span>
                <span className="font-display font-black text-xs uppercase tracking-widest opacity-70">
                  Zone {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display font-black text-2xl sm:text-3xl">
                {z.name}
              </h3>
              <p className="mt-3 leading-relaxed opacity-90">{z.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
