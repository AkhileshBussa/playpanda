# Play Panda — Blog & Landing Page Build Spec (SEO + GEO)

> **How to use this document:** This is a complete build brief for Claude Code. Build the pages below on **theplaypanda.com** following the shared rules in §3–§6, then the per-page specs in §7. Every page must satisfy the acceptance checklist in §9. The site is a Next.js app; build the blog as new routes, don't break the existing single-page home.

---

## 1. Goal

Win visibility in **two** channels:
- **SEO** — rank in Google for local "play zone near me" type searches.
- **GEO (Generative Engine Optimization)** — get cited by AI answer engines (ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude) when parents ask things like *"best indoor play zone for kids near Bandlaguda Jagir."*

GEO and SEO share a foundation. GEO adds structural moves (answer-first blocks, question headings, extractable tables/FAQs, freshness signals, crawlability for AI bots). Both are built into the rules below.

---

## 2. Business facts — single source of truth

Use these verbatim and consistently across every page (consistency is itself an SEO + GEO ranking signal):

- **Name:** Play Panda
- **What:** Indoor, screen-free children's play zone
- **Location:** Bandlaguda Jagir, Hyderabad *(insert full street address + pincode before launch)*
- **Offer:** 10,000 sq. ft. · 9 themed zones · party hall · kid-friendly food court · parent workstation
- **The 9 zones:** Tiny Trails · The Bubble Pond · Little Engineers · Happy Farm · Mini Garage · Water Zone · Little Explorers · Cute Climbers · DollHouse
- **Amenities:** Free parking · easy/pram-friendly entry · free Wi-Fi · coffee · clear sightlines for parents
- **Contact:** WhatsApp https://wa.me/919063817084 · Phone +91 90638 17084
- **Maps:** https://maps.app.goo.gl/uujpj3phdAMPyr3S7
- **Voice:** Warm, playful, parent-to-parent. Never corporate. (See §6.)
- **Pricing:** Do NOT publish prices anywhere. For cost/booking, route users to WhatsApp.

---

## 3. Technical & crawlability requirements (do these or nothing else works)

1. **Server-render all content.** Use SSG/SSR (Next.js static generation or server components) so the full text of every page is in the initial HTML. AI retrieval engines and many crawlers do not execute client-side JS reliably — content hidden behind JS won't get cited or indexed.
2. **robots.txt must ALLOW AI crawlers.** Explicitly do not block: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Bingbot`, `Amazonbot`. (Also confirm no CDN/WAF rule is silently blocking them.)
3. **Generate `sitemap.xml`** including all blog + landing pages; reference it in robots.txt.
4. **Clean semantic HTML:** one `<h1>` per page, logical `<h2>`/`<h3>`, real `<table>`/`<ul>`/`<ol>` elements (AI engines lift these near-verbatim).
5. **Fast + mobile-first.** Keep using Next.js `<Image>` optimization. Lazy-load below-the-fold images only.
6. **No content behind logins, modals, or paywalls.**
7. *(Optional, low-cost):* add an `llms.txt` at root summarizing site structure. Note: Google says it ignores this; some other engines may use it. Skip if it adds maintenance burden.

---

## 4. Site architecture

- Blog index: `/blog` — lists all posts (card grid, newest first), each card: title, 1-line summary, date.
- Posts: `/blog/<slug>` (lowercase, hyphenated, keyword-led slugs as specified).
- Landing pages: `/birthday-party-venue` (LP-2). LP-1 is the existing home, edited in place.
- **Add "Blog" to the main nav** and footer "Explore" list.
- **Breadcrumbs** on every blog/landing page: Home › Blog › Post Title (with `BreadcrumbList` schema).

---

## 5. On-page rules — apply to EVERY page (SEO + GEO combined)

**SEO basics**
- One `<h1>` containing the primary keyword, used naturally.
- `<title>` ≤ 60 chars; meta description ≤ 155 chars (drafts provided per page).
- Primary keyword appears in: H1, first 100 words, ≥1 H2, meta tags, and ≥1 image `alt`.
- Descriptive alt text on every image (e.g. `alt="Toddler in the ball pit at Play Panda, Bandlaguda Jagir, Hyderabad"`).
- 2–4 internal links per page (specified per page) + a CTA block (WhatsApp + Maps).
- No keyword stuffing — AI engines and Google both penalize it.

**GEO layer (the part most sites skip)**
- **Answer-first blocks:** open each major section with a self-contained 40–80 word paragraph that directly answers the section's question. State the fact first, then add detail. Write it so it reads correctly if lifted out of context — **avoid starting with pronouns** ("it", "they"); name the subject ("Play Panda's Water Zone…").
- **Question-style H2s:** phrase headings the way parents type/ask them — e.g. *"What is the best indoor play zone near Bandlaguda Jagir?"* not *"Our Location."*
- **Front-load the important stuff:** put your strongest, most citable claims in the first third of the page.
- **Tables for any comparison** (indoor vs park, zone-by-age) — engines quote tables almost verbatim.
- **Numbered lists for steps/processes, bullets for criteria/checklists.**
- **FAQ block** of 3–6 real Q&A pairs at the bottom of every post (feeds `FAQPage` schema and matches how AI assembles answers).
- **Visible freshness:** show "Published" and "Last updated" dates on-page, and set `dateModified` in schema. Refresh cornerstone posts periodically.
- **Citable specifics & sources:** where a post makes a developmental/health claim (e.g. the screen-free post), cite a reputable source (WHO, AAP, recognized pediatric body) accurately — never invent statistics. Concrete brand specifics ("9 themed zones across 10,000 sq. ft.") are themselves citation bait.
- **Entity clarity:** every post has a **named author** with a short bio (e.g. "The Play Panda Team" or a real staff member) and links to an **About** page. Keep the brand name + location phrased consistently.

---

## 6. Content & voice rules

- Write parent-to-parent: warm, a little playful, honest. Mirror the home page tone ("Screens off. Imagination on.").
- Every post must be **genuinely useful** — a real parent should finish it better informed, not sold to.
- 900–1,500 words per blog unless noted.
- One clear CTA per post → WhatsApp / "Plan a visit."
- Never fabricate prices, stats, reviews, or sources.
- Use the exact 9 zone names and business facts from §2.

---

## 7. Structured data (JSON-LD) — per page type

- **Sitewide / home (LP-1):** `LocalBusiness` (use a fitting subtype, e.g. `AmusementPark` or `EntertainmentBusiness`) — name, full address, geo coords, telephone, openingHours, image, url, priceRange omitted or `"$$"` (no rupee figures), `sameAs` (social/Maps).
- **Every blog post:** `BlogPosting` (headline, datePublished, dateModified, author, image, mainEntityOfPage) **+** `BreadcrumbList`.
- **Any page with a FAQ block:** `FAQPage`.
- **LP-2 party page:** add `Service` (and `Offer` without price) for the party hall.
- Keep all schema values consistent with §2 facts.

---

## 8. Page specs

### LP-1 — Home / location optimization (HIGHEST PRIORITY)
**Problem to fix:** the current home page never mentions "Bandlaguda Jagir" or "Hyderabad" in crawlable text — only as a Maps link. AI engines and Google can't cite a location that isn't written down.
**Do:**
- Add a crawlable **location section** with: full street address + pincode, the line *"Play Panda is an indoor, screen-free kids play zone in Bandlaguda Jagir, Hyderabad,"* nearby areas served, opening hours, and an **embedded Google Map** (not just a QR).
- Add an answer-first intro line under the hero, e.g. an H2: *"A screen-free indoor play zone for kids in Bandlaguda Jagir, Hyderabad"* + 40–80 word answer block.
- Add a short FAQ (location, hours, ages welcome, parking, parties) → `FAQPage` schema.
- Add `LocalBusiness` schema.
- Primary kw: `kids play zone near me`, `play zone near me`, `play panda bandlaguda jagir`.

### LP-2 — `/birthday-party-venue`  (Kids Birthday Parties in Hyderabad)
- Intent: high commercial. You have a dedicated party hall — capture it.
- Cover: the party hall, what's included (decor, food, cake options, 2 hosts), capacity, the 9 zones as the activity, how to book (WhatsApp), photo gallery, FAQ.
- Primary kw: `kids birthday party venue Hyderabad`, `birthday party hall for kids`, `play zone birthday party`.
- Meta title: `Kids Birthday Party Venue in Hyderabad | Play Panda`
- Meta desc: `Throw the party, we'll handle the chaos. A dedicated party hall, decor, food & 9 play zones in Bandlaguda Jagir, Hyderabad.`
- Schema: `LocalBusiness` + `Service` (no prices) + `FAQPage`.
- Internal links: LP-1, B5.

---

### Blogs — Tier 1 (build first)

**B1 — `/blog/best-kids-play-zone-hyderabad`**
- Title: *Best Kids Play Zone Near Me in Hyderabad (2026 Guide)*
- Primary kw: `best play zone near me`, `kids play zone near me` · Secondary: `play zone for kids near me`, `playzone near me`
- Meta title: `Best Kids Play Zone Near Me in Hyderabad (2026 Guide)`
- Meta desc: `Looking for the best indoor play zone near you in Hyderabad? How to choose — safety, zones, age-fit and more.`
- Question H2s: What makes a play zone the best? · Indoor or outdoor in Hyderabad's heat? · What safety & hygiene should I check? · Which is best for toddlers vs big kids? · Why does screen-free matter? · Where can I find one near Bandlaguda Jagir?
- Include a comparison **table** (criteria × what good looks like). FAQ at end.
- Internal links: LP-1, B2, B4.

**B2 — `/blog/kids-play-zone-checklist`**
- Title: *What to Look for in a Kids Play Zone: A Parent's Checklist*
- Primary kw: `kids play zone` · Secondary: `kids play area`, `play zone for kids`
- Meta title: `Kids Play Zone Checklist: What Parents Should Look For`
- Meta desc: `Safety, cleanliness, age-appropriate zones, supervision, parent comfort — a practical checklist before you pick a play zone.`
- Format as a **numbered checklist** (GEO-friendly). Question H2s per item. FAQ at end.
- Internal links: B1, LP-1.

**B3 — `/blog/indoor-play-area-vs-childrens-park`**
- Title: *Indoor Play Area vs Children's Park: Which Is Better in Hyderabad?*
- Primary kw: `children park near me`, `kids park near me` · Secondary: `play area for kids`, `play area near me`
- Meta title: `Indoor Play Area vs Park for Kids in Hyderabad`
- Meta desc: `Park or indoor play zone? Weather, safety, hygiene and play variety compared, so you can pick the right outing in Hyderabad.`
- Lead with a **comparison table** (Park vs Indoor across weather, safety, hygiene, variety, cost-to-parent-time). Question H2s. FAQ.
- Internal links: B1, B7.

**B4 — `/blog/screen-free-play-benefits`**
- Title: *Why Screen-Free Play Matters for Your Child's Development*
- Primary kw: `screen-free play for kids` · Secondary: `benefits of play for child development`
- Meta title: `Why Screen-Free Play Matters for Kids' Development`
- Meta desc: `Hands-on, imaginative play builds motor skills, creativity and confidence. Why a screen-free play zone is worth it.`
- Question H2s: What is screen-free play? · How does it help development? · How much unstructured play do kids need? · Where can kids play screen-free in Hyderabad?
- **Cite reputable sources accurately** (WHO/AAP screen-time guidance) — this is the citation-bait post. FAQ.
- Internal links: B5, LP-1.

**B5 — `/blog/9-play-zones-guide`**
- Title: *A Tour of Play Panda's 9 Play Zones (and the Best One for Your Kid's Age)*
- Primary kw: `kids play zone`, `playzone` · Secondary: branded discovery
- Meta title: `Inside Play Panda: A Guide to Our 9 Play Zones`
- Meta desc: `Tiny Trails to DollHouse — a tour of all 9 themed zones at Play Panda and which suits toddlers, preschoolers and big kids.`
- One short H3 per zone (use exact names + descriptions) + a **"best zones by age" table**. FAQ.
- Internal links: LP-1, B6.

### Blogs — Tier 2

**B6 — `/blog/toddler-play-area-near-me`** — *Toddler-Friendly Play Areas Near Me: A Guide for Under-5s*
- Primary kw: `play area for kids near me`, `children play area near me`. Focus zones: Tiny Trails, The Bubble Pond, Water Zone. Meta title: `Toddler-Friendly Play Areas Near You (Under-5 Guide)`. Internal links: B5, B2.

**B7 — `/blog/indoor-activities-for-kids-hyderabad`** — *Indoor Activities for Kids in Hyderabad: Summer & Monsoon Edition*
- Primary kw: `kids game zone near me`, `indoor activities for kids`. Seasonal/refreshable. Meta title: `Indoor Activities for Kids in Hyderabad (Beat the Heat)`. Internal links: B3, LP-1.

**B8 — `/blog/play-area-vs-play-zone-vs-game-zone`** — *Play Area vs Play Zone vs Game Zone: What's the Difference?*
- Captures the `playzone` / `play area` / `kids game zone` term spread. Lead with a definitions **table**. Meta title: `Play Area vs Play Zone vs Game Zone: A Simple Guide`. Internal links: B1, B5.

**B9 — `/blog/first-visit-guide`** — *What to Expect on Your First Visit to Play Panda (A Parent's Guide)*  *(reframed — no pricing)*
- Primary kw: `kids play zone` + planning intent (`what to expect`, `play zone for kids near me`).
- Cover: how to plan a visit, what to bring (spare clothes for the Water Zone!), ages welcome, parking/entry, parent workstation, how to book a slot or party via WhatsApp. **No prices** — "message us on WhatsApp for current timings and slots."
- Meta title: `Your First Visit to Play Panda: A Parent's Guide`
- Meta desc: `Planning your first visit to Play Panda in Bandlaguda Jagir? What to bring, ages welcome, parking and how to book.`
- Heavy FAQ block (ideal for this topic). Internal links: LP-1, B5.

**B10 — `/blog/things-to-do-with-kids-bandlaguda-jagir`** — *Things to Do With Kids Near Bandlaguda Jagir*
- Hyperlocal — strongest local relevance signal; reinforces the branded "play panda bandlaguda jagir" term. Primary kw: local `things to do with kids` + `play area near me`. Meta title: `Things to Do With Kids Near Bandlaguda Jagir, Hyderabad`. Internal links: LP-1, B7.

---

## 8b. Build order
1. LP-1 home location fix → 2. LP-2 party page → 3. B1–B5 → 4. B10 → B6 → B7 → B3 → B9 → B2 → B8 → B4.

---

## 9. Acceptance checklist (every page must pass)
- [ ] Full content present in server-rendered HTML (view-source shows the text).
- [ ] One H1 with primary keyword; question-style H2s; clean heading order.
- [ ] First section is an answer-first 40–80 word block, no leading pronoun.
- [ ] `<title>` ≤ 60 chars, meta description ≤ 155 chars, both unique.
- [ ] Primary keyword in H1, first 100 words, an H2, meta, an image alt.
- [ ] Comparison content uses a real `<table>`; processes use `<ol>`; criteria use `<ul>`.
- [ ] FAQ block (3–6 Q&As) present where specified.
- [ ] Named author + bio; visible Published + Last updated dates.
- [ ] Correct JSON-LD (`BlogPosting`/`LocalBusiness`/`FAQPage`/`BreadcrumbList`) validates.
- [ ] Breadcrumbs render; 2–4 internal links + WhatsApp/Maps CTA present.
- [ ] All images have descriptive alt text; page is mobile-fast.
- [ ] No prices anywhere; cost questions route to WhatsApp.
- [ ] Page added to nav/footer (if landing) and to `sitemap.xml`.

---

## 10. Owner action items (outside the codebase — not Claude Code's job, but required for results)
1. Add full street address + pincode (needed for LP-1 and all schema).
2. Claim & complete the **Google Business Profile**; keep Name/Address/Phone identical to §2.
3. Verify the site in **Google Search Console**; submit `sitemap.xml`.
4. Actively gather **Google reviews** — "best play zone near me" rewards review volume, and AI engines favor earned/third-party signals.
5. List on local directories (Justdial, etc.) with consistent NAP.
6. Confirm robots.txt / CDN are not blocking AI crawlers (§3.2).
