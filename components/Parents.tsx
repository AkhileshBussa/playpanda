export function Parents() {
  return (
    <section id="parents" className="relative">
      <div className="bg-teal text-ink rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="font-display font-bold uppercase tracking-widest text-sm text-ink/70">
                For the grown-ups
              </p>
              <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                Stay close.
                <br />
                Stay comfortable.
              </h2>
              <p className="mt-5 text-lg text-ink/80 max-w-xl leading-relaxed">
                A parent workstation right inside the playzone. Wifi, coffee, and a
                comfy seat with a clear view of the action. Knock out an email or two,
                or just breathe while the kids burn it off.
              </p>

              <ul className="mt-8 grid sm:grid-cols-3 gap-3">
                {[
                  { t: "Wi-Fi", d: "Fast, free, no captive portal." },
                  { t: "Coffee", d: "The good stuff." },
                  { t: "Sightlines", d: "Eyes on the zones." },
                ].map((c) => (
                  <li
                    key={c.t}
                    className="bg-cream rounded-chunk p-5 shadow-chunk"
                  >
                    <h3 className="font-display font-black text-lg text-ink">{c.t}</h3>
                    <p className="mt-1 text-ink/70 text-sm leading-relaxed">{c.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-chunk overflow-hidden shadow-chunk bg-purple aspect-[4/5]">
                <div className="absolute inset-0 grid place-items-center p-8 text-center">
                  <div>
                    <span className="font-display font-black text-7xl sm:text-8xl text-cream block">
                      ☕
                    </span>
                    <p className="mt-4 font-display font-black text-cream text-2xl">
                      A quiet corner,
                      <br />
                      moments away from the play.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
