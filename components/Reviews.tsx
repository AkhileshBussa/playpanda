import { Button } from "./Button";
import { MAPS_LINK } from "@/lib/links";
import { RATING } from "@/lib/business";
import { REVIEWS } from "@/lib/reviews";

// Renders nothing until real reviews are added to lib/reviews.ts.
export function Reviews() {
  if (REVIEWS.length === 0) return null;

  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <p className="font-display font-bold text-purple uppercase tracking-widest text-sm">
            Loved by parents
          </p>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Rated <span className="text-coral">{RATING.value}★</span> on Google
          </h2>
          <p className="mt-5 text-lg text-ink/70">
            {RATING.displayCount} families have rated their day at Play Panda. Here&apos;s
            what some of them said.
          </p>
        </header>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <a
              key={`${r.author}-${r.text.slice(0, 16)}`}
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${r.author}'s review on Google`}
              className="group bg-cream rounded-chunk p-7 border border-ink/5 shadow-chunk flex flex-col hover:shadow-chunkHover hover:-translate-y-0.5 transition-all"
            >
              <figure className="flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <div
                    className="text-yellow text-lg"
                    aria-label={`${r.rating} out of 5 stars`}
                  >
                    {"★".repeat(r.rating)}
                    <span className="text-ink/15">{"★".repeat(5 - r.rating)}</span>
                  </div>
                  <GoogleG />
                </div>
                <blockquote className="mt-4 text-ink/80 leading-relaxed flex-1">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Avatar name={r.author} />
                  <span className="min-w-0">
                    <span className="block font-display font-bold text-ink truncate">
                      {titleCase(r.author)}
                    </span>
                    <span className="block text-sm text-ink/45 group-hover:text-coral transition-colors">
                      Posted on Google
                    </span>
                  </span>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <Button href={MAPS_LINK} variant="green" external>
            Read all reviews on Google
          </Button>
        </div>
      </div>
    </section>
  );
}

// Normalize mixed-case Google names for display (e.g. "AJEET MOHAN Bhatt" →
// "Ajeet Mohan Bhatt"). Schema still uses the verbatim name from lib/reviews.ts.
function titleCase(name: string): string {
  return name
    .toLowerCase()
    .split(/\s+/)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(" ");
}

// Initial-letter avatar, colored deterministically from the brand palette so the
// same reviewer always gets the same color. No external images / scraping.
const AVATAR_STYLES = [
  "bg-coral text-cream",
  "bg-green text-cream",
  "bg-purple text-cream",
  "bg-teal text-ink",
  "bg-pink text-ink",
  "bg-brown text-cream",
  "bg-yellow text-ink",
];

function Avatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  const style = AVATAR_STYLES[sum % AVATAR_STYLES.length];
  return (
    <span
      aria-hidden
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-pill font-display font-black text-lg ${style}`}
    >
      {initial}
    </span>
  );
}

// Official multi-color Google "G". Intentionally off-palette: it's a third-party
// brand mark, shown to signal these are genuine Google reviews.
function GoogleG() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden className="shrink-0">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}
