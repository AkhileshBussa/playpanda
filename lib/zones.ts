export type Zone = {
  name: string;
  blurb: string;
  bg: string;   // tailwind bg-* token (brand palette only)
  ink: string;  // tailwind text-* token for the title
  emoji: string;
};

// Zone copy is in Play Panda's sensory, action-led voice.
// All colors come from the 8-color brand palette.
export const ZONES: Zone[] = [
  {
    name: "Tiny Trails",
    blurb:
      "A vibrant space for the smallest ones to crawl, toddle, and explore at their own pace.",
    bg: "bg-pink",
    ink: "text-ink",
    emoji: "🐾",
  },
  {
    name: "The Bubble Pond",
    blurb: "Jump in, splash around, get lost in colorful balls.",
    bg: "bg-teal",
    ink: "text-ink",
    emoji: "🫧",
  },
  {
    name: "Little Engineers",
    blurb: "Stacking, building, knocking it down, starting again. Creative chaos.",
    bg: "bg-yellow",
    ink: "text-ink",
    emoji: "🧱",
  },
  {
    name: "Happy Farm",
    blurb: "Run the farm, tend the crops, sell the harvest at the market stall.",
    bg: "bg-green",
    ink: "text-cream",
    emoji: "🌾",
  },
  {
    name: "Mini Garage",
    blurb: "Tune up, fix up, and race into imaginative play. A pit stop for little mechanics.",
    bg: "bg-coral",
    ink: "text-cream",
    emoji: "🔧",
  },
  {
    name: "Water Zone",
    blurb:
      "Pouring, splashing, making a wonderful mess. (Pack a spare set of clothes and let them go for it.)",
    bg: "bg-purple",
    ink: "text-cream",
    emoji: "🌊",
  },
  {
    name: "Little Explorers",
    blurb: "Dig, discover, and uncover hidden treasures beneath.",
    bg: "bg-brown",
    ink: "text-cream",
    emoji: "🔎",
  },
  {
    name: "Cute Climbers",
    blurb: "Climb, scramble, build confidence while burning off energy.",
    bg: "bg-yellow",
    ink: "text-ink",
    emoji: "🧗",
  },
  {
    name: "DollHouse",
    blurb:
      "Pour the tea, tuck in the dolls, run a whole little world. Tiny rooms, big stories.",
    bg: "bg-pink",
    ink: "text-ink",
    emoji: "🏠",
  },
];
