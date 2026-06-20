# Play Panda — Project Memory

Persistent context for working on Play Panda. Read this at the start of every session and apply it to all copy, design, and code unless a prompt overrides it.

## What Play Panda is

Play Panda is a screen-free, imagination-first indoor play space for children and families. The experience spans ~10,000 sq. ft. across **9 unique play zones**, plus a party hall, a kid-friendly food court, and a parent workstation area.

Core promise: imagination over screens; a place where kids play freely and parents stay close, comfortable, and connected.

## Brand voice & tone

- **Warm, playful, and reassuring.** Speak to parents like a friend who gets it; speak about kids with delight.
- **Concrete and sensory** — "jump in, splash around," "stacking, building, knocking it all down" — not abstract marketing.
- **Honest and a little cheeky.** Light humor is on-brand ("just pack a spare set of clothes and let them go for it").
- Keep sentences short and active. Avoid corporate filler and hype words.
- Two established copy registers exist: a **descriptive third-person** style for formal materials, and a **first-person playful** style (the mascot's own voice) for fun/social content. Match the register to the channel.

## Brand colors

A playful 8-color palette. Each color also has lighter tints used for backgrounds and accents.

| Color    | Hex       | Use |
|----------|-----------|-----|
| Coral    | `#FF613A` | Primary warm accent |
| Green    | `#009D72` | Primary accent |
| Yellow   | `#FFBB01` | Primary accent / highlights |
| Purple   | `#8061BE` | Accent |
| Teal     | `#01C9C7` | Accent |
| Pink     | `#FF7EBE` | Accent |
| Brown    | `#D06F28` | Accent / earthy contrast |
| Black    | `#000000` | Text, outlines, mono logo |

Note: hex values were sampled from the brand guideline artwork (the guide itself does not print codes). Confirm against the official source before print production.

Rule: **no colors outside this palette.** Use tints for softness rather than introducing new hues.

## Typography

- **Headings:** Hank Rnd Black
- **Body:** Hank Rnd Regular / Light

Hank Rnd is the brand typeface. It's a licensed font (the `.ttf` you'll supply locally) — keep the font file in the project so it can be embedded when generating documents, slides, or images. If Hank Rnd is unavailable in a given context, fall back to a friendly geometric rounded sans (e.g., Quicksand or Nunito) and flag the substitution.

## Logo usage

- The logo has a **Primary** and a **Secondary** version — pick based on background and contrast.
- Maintain strong contrast against the background; the logo must remain legible at small sizes (scalability matters down to ~25%).
- **Don'ts:** don't skew or distort, don't recolor (no colors outside the palette), don't alter the lockup.

## The 9 play zones

Use these exact names. The first eight are confirmed; a ninth zone exists per the facility description — confirm its name before publishing.

1. **Tiny Trails** — a vibrant space for the smallest ones to crawl, toddle, and explore at their own pace.
2. **The Bubble Pond** — a ball pit; jump in, splash around, get lost in colorful balls.
3. **Little Engineers** — stacking, building, knocking it down, starting again. Creative chaos.
4. **Happy Farm** — run the farm, tend crops, sell the harvest at the market stall.
5. **Mini Garage** — tune up, fix up, and race into imaginative play. A pit stop for little mechanics.
6. **Water Zone** — pouring, splashing, making a wonderful mess. (Spare clothes recommended.)
7. **Little Explorers** — dig, discover, and uncover hidden treasures beneath.
8. **Cute Climbers** — climb, scramble, build confidence while burning off energy.
9. _(Ninth zone — name TBD; verify before use.)_

## Facility facts (for copy)

- ~10,000 sq. ft. of screen-free, imagination-first play across 9 zones
- Party Hall — birthdays, milestones, and celebrations handled end-to-end
- Food Court — familiar, kid-friendly food the whole family enjoys
- Parent Workstation — stay close, comfortable, and connected while kids play

## Mascot

Play Panda's mascot is a panda character — the friendly face of the brand and the voice behind first-person copy. A full design sheet exists with the main character, multiple angles, and different outfits. Keep the mascot on-model; reference the design sheet rather than improvising new poses.

## Brand assets in this repo

Keep the original brand files in the project folder so they can be read and embedded on demand:

- `LogoWithoutBG.png`, `LogoWithBG` / `PlayPandaLogoWhiteBG.jpeg` — logo lockups
- `MascotWithoutBG.png`, `Mascot.jpeg` — mascot art
- `WallArt.jpeg` — environmental/wall design reference
- `Play_Panda_Brand_Guidelines` — full brand manual
- `Play_Panda_Zone_Names__Descriptions` — zone copy (both registers)
- `Play_Panda_Mascot_Design` — mascot design sheet
- `PlayPanda_WhatsAppCommunity_QR.png`, `GoogleMapsLocationQR.png` — QR codes for community + location

(These are binaries/exports. Tell Claude to read the specific file when its contents are needed; they can't be `@`-imported as text.)

## How to apply this

- For any **copy**, match the brand voice and the correct register for the channel; use the real zone names and facility facts above.
- For any **design or generated image**, use only the palette and Hank Rnd; keep the logo and mascot on-brand.
- When producing a **document, slide deck, or graphic**, embed Hank Rnd from the local font file.
- If something here is uncertain (the 9th zone name, exact hex codes), surface it rather than guessing.
