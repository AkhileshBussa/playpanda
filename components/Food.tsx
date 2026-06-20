export function Food() {
  return (
    <section id="food" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <p className="font-display font-bold text-green uppercase tracking-widest text-sm">
              The food court
            </p>
            <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Hungry kids,
              <br />
              <span className="text-coral">happy plates.</span>
            </h2>
            <p className="mt-5 text-lg text-ink/75 max-w-xl leading-relaxed">
              A kid-friendly food court tucked right into the playzone. Familiar
              favorites for picky eaters, real meals for parents, and snacks for the
              in-between moments (because there are always in-between moments).
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { e: "🍕", c: "bg-yellow" },
                { e: "🥪", c: "bg-pink" },
                { e: "🍟", c: "bg-teal" },
                { e: "🥤", c: "bg-coral" },
                { e: "🧁", c: "bg-purple" },
                { e: "🍦", c: "bg-green" },
              ].map((it, i) => (
                <div
                  key={i}
                  className={`${it.c} aspect-square rounded-chunk shadow-chunk flex items-center justify-center text-5xl sm:text-6xl`}
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg)` }}
                >
                  <span>{it.e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
