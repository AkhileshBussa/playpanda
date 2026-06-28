# Play Panda — "School Partnerships" Website Page Spec

**Purpose:** Build a B2B partnership page for theplaypanda.com aimed at preschool & primary school decision-makers (owners, principals, centre heads).
**Primary goal:** Get a school to **book a private walkthrough** of the venue (visiting is what closes school partnerships) and submit a partnership enquiry.
**Audience:** School owners / principals / management — *not* parents.

> ⚠️ **CRITICAL — NO PRICING ON THIS PAGE.** Unlike the Birthday page (B2C, prices shown), school deals are negotiated per school and kept off all materials. Replace any price with *"partnership terms tailored to your school."* This is deliberate strategy, not an oversight.

> The matching designed one-pager (JPG/PDF) is the visual reference. This doc is the source of truth for copy, structure, and behaviour.

---

## 1. Page meta (SEO)

- **URL slug:** `/schools` (or `/school-partnerships`)
- **Page title (H1):** A play world your students will love
- **Title tag:** School Partnerships, Field Trips & Excursions in Hyderabad | Play Panda
- **Meta description:** Partner with Play Panda — field trips, birthday passes, and annual-day celebrations for preschools & primary schools in Bandlaguda Jagir, Hyderabad. 10,000 sq ft of safe, supervised, screen-free play. Book a private walkthrough.
- **Primary keywords:** school field trip Hyderabad, preschool excursion venue, indoor play area for schools, annual day venue Hyderabad, kids field trip Bandlaguda Jagir.

---

## 2. Section-by-section content & layout

Sections in order, top to bottom. Every CTA leads to a private walkthrough booking or WhatsApp.

### 2.1 Hero (coral background, festive)
- **Eyebrow:** For preschools & schools nearby
- **H1:** A play world your students will love
- **Sub-line:** An indoor play & party space built entirely for kids — and a warm new partner for your school.
- **Visuals:** white Play Panda logo, mascot (cap + sunglasses), scalloped bottom edge.
- **Primary CTA button:** `Book a Private Walkthrough` → form / WhatsApp.
- **Secondary CTA:** `WhatsApp us` → opens chat (see §6).

### 2.2 At a glance (trust/facts strip, light background)
Row of pills/chips:
- 10,000 sq ft
- 9 screen-free play zones
- Dedicated party hall
- Parent lounge
- In-house café
- Fully supervised & safe

### 2.3 Ways we'd love to partner (4 cards)
Heading: **Ways we'd love to partner**
Intro: *A year-round relationship — not a one-off. Pick what fits your school; we handle the rest.*
**No prices** — each card describes the value only.

- **Birthday Celebration Passes** — A special birthday gift for every child in your school, co-branded with your school's name.
- **Class Field Trips** — A screen-free day of play and discovery across all nine of our zones, built for little explorers. *(developmental framing — see §2.4)*
- **Annual Day & Celebrations** — Host your school's biggest moments in our dedicated party hall — we manage it end to end.
- **Teacher & Family Perks** — Warm little extras for the staff and parents who make your school special, all year round.

### 2.4 More than play — what children gain  *(developmental framing for field trips)*
Heading: **Built for little minds, not just little legs**
Short copy + icon list showing the developmental value of the 9 zones, so schools can justify a visit as a *learning experience* to parents:
- Gross & fine motor skills
- Sensory & imaginative play
- Social skills — sharing, turn-taking, teamwork
- Confidence & independent exploration
Optional line: facilitated, themed activity included (storytime / craft / role-play) so it reads as curriculum, not just an outing.

### 2.5 Safe, supervised, sorted  *(IMPORTANT — schools' #1 silent objection)*
Heading: **Safety you can sign off on**
This is the yes/no factor for any school. Make it prominent and specific:
- Trained, supervising staff throughout
- Healthy staff-to-child ratios
- First-aid on site
- Enclosed, secure space with controlled entry & exit
- Sanitised, regularly cleaned equipment
- Wristbands / ID for every child on group visits
- Allergy & dietary care
- Adult/teacher lounge so staff can relax while children play

### 2.6 Trusted by schools  *(RECOMMENDED — add once live)*
Partner school logos + a short testimonial or two + photos of a real school visit / annual day at the venue.
> Proof is the strongest credibility lever. Add the FirstCry Intellitots (Attapur) partnership here **once it's live and the logo is approved.** Until then, leave this section out rather than show it empty.

### 2.7 Founding School Partner  *(optional — exclusivity framing)*
Heading: **Become a Founding School Partner**
Copy: We're partnering with a select few schools nearby as Founding Partners — with priority slots and special partnership terms. We'd love to show you around.
> Framing it as selective/by-invitation flips the power dynamic — schools qualify to partner, rather than us chasing. Keeps positioning premium.

### 2.8 How it works (3-step strip)
1. **Visit** — book a no-obligation private walkthrough of the space.
2. **Choose** — pick how you'd like to partner (passes, field trips, events).
3. **Partner** — we tailor the terms and handle the rest.
> Push the visit. Experiencing the venue is what closes schools — the same lever that won our first two relationships.

### 2.9 Final CTA / contact footer (coral)
- **Heading:** Come see the space.
- **Sub:** We'd love to host you for a private walkthrough — no obligation, just come and feel it for yourself.
- **Contact:** Call / WhatsApp +91 90638 17084 · theplaypanda.com · 3rd Floor, Bandlaguda Jagir
- Embed a Google Map; sticky "WhatsApp us" button on mobile.

---

## 3. Components & interactions (for the build)

**Primary CTA — Book a Private Walkthrough.** Opens the enquiry form (or WhatsApp on mobile).

**WhatsApp click-to-chat** (school-specific prefilled message):
`https://wa.me/919063817084?text=Hi%20Play%20Panda!%20I'm%20from%20a%20school%20and%20would%20like%20to%20explore%20partnering%20with%20you.`

**Enquiry form fields:** School name · Your name & role · Phone / WhatsApp · Area / location · Interested in (Birthday passes / Field trips / Annual day & events / Not sure) · Approx. number of students.
- On submit: route to WhatsApp/email + thank-you message ("we'll be in touch to arrange your visit").

**Behaviour notes:**
- "Book a Private Walkthrough" is the dominant action on the whole page.
- **Do not** add any pricing, "from ₹X", or checkout. Use "partnership terms tailored to your school."
- Sticky mobile bar: "WhatsApp us" + "Call".

---

## 4. Brand & design tokens

*(Same brand system as the Birthday page — keep both pages visually consistent.)*

**Colours (hex):**
- Primary Coral `#FF613A`
- Green `#009D72` · Yellow `#FFBB01` · Purple `#8061BE` · Teal `#01C9C7` · Pink `#FF7EBE` · Terracotta `#D06F28`
- Ink/Text `#241C16` · Background cream `#FFF7F0` · White `#FFFFFF`
- Partnership card tints: Pink `#FFE3F0` · Green `#D6F0E6` · Yellow `#FFEFC4` · Purple `#E7DFF7`

**Typography:**
- Brand font: **Hank Rnd** — Black/Bold for headings, Regular/Light for body.
- Web fallback if Hank Rnd isn't licensed: **Fredoka**, **Baloo 2**, or **Quicksand** (Google Fonts).

**Brand devices:** scalloped / cloud edges between sections · confetti dots, sparkles, rounded squiggles · rounded pill tags/buttons · pastel tint cards · mascot (cap + sunglasses panda).

**Tone of voice:** warm, professional, reassuring, partnership-minded. Speak to a school owner, not a parent. Lead with what the *school and its families* gain.

---

## 5. Assets needed (request from founder / brand folder)
- Logo: primary (orange) + white version, vector/PNG
- Mascot renders (3D) + flat illustrations
- Photos of a real school visit / field trip / annual day at the venue (for §2.6 — top priority once available)
- Partner school logos + testimonials (once approved)
- Photos of the 9 play zones (for the developmental section)
- Scallop / sparkle graphic elements (or recreate in CSS/SVG)
- Brand fonts (Hank Rnd) if available

---

## 6. Conversion checklist (why this page is built this way)
- [ ] **No pricing anywhere** — terms tailored per school (B2B strategy)
- [ ] "Book a Private Walkthrough" is the primary CTA everywhere (visiting closes schools)
- [ ] Safety/credibility section prominent (school's #1 silent objection)
- [ ] Developmental/learning framing for field trips (lets schools justify it to parents)
- [ ] Partnership shown as a year-round relationship, not a one-off sale
- [ ] Proof / partner logos added once live (FirstCry Intellitots Attapur)
- [ ] Founding Partner framing keeps positioning selective & premium
- [ ] WhatsApp + simple school enquiry form; sticky contact on mobile
- [ ] Tone speaks to owners/principals, not parents
