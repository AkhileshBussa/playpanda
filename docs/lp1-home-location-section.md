# LP-1 — Home Location Section (ready to drop in)

> Add this as a crawlable section on the home page (e.g. just above or within the "Visit" area). It fixes the core gap: the live site never says "Bandlaguda Jagir" or "Hyderabad" in text. Fill the **[BRACKETED]** placeholders before launch — only you have these.
>
> **Placeholders to fill:** `[STREET ADDRESS]`, `[PINCODE]`, `[NEARBY AREAS]`, `[OPENING HOURS]`, `[LATITUDE]`, `[LONGITUDE]`.

---

## Visible content

### A screen-free indoor play zone for kids in Bandlaguda Jagir, Hyderabad

Play Panda is a 10,000 sq. ft. indoor, screen-free play zone for children in Bandlaguda Jagir, Hyderabad. Kids explore nine themed zones — from a toddler-safe Tiny Trails to a splashy Water Zone and a climb-it-all Cute Climbers — while parents stay close with free Wi-Fi, coffee and clear sightlines. There's a party hall for birthdays and a kid-friendly food court on site.

**Find us**
[STREET ADDRESS], Bandlaguda Jagir, Hyderabad – [PINCODE]
Also easy to reach from [NEARBY AREAS].

**Hours:** [OPENING HOURS]
**Parking & entry:** Free parking · pram-friendly, easy entry
**Contact:** [WhatsApp us](https://wa.me/919063817084) · [+91 90638 17084](tel:+919063817084) · [Open in Google Maps](https://maps.app.goo.gl/uujpj3phdAMPyr3S7)

> Embed a live Google Map here (iframe), not just the QR code — crawlers and AI engines read the address text, and visitors get directions in one tap.

---

### Frequently asked questions

**Where is Play Panda located?**
Play Panda is in Bandlaguda Jagir, Hyderabad, at [STREET ADDRESS] – [PINCODE]. It's an indoor play zone, so it's a good option year-round, including Hyderabad summers and the monsoon.

**What ages is Play Panda for?**
Play Panda's nine zones span toddlers to older children. Tiny Trails and The Bubble Pond suit the smallest ones, while Cute Climbers and Little Explorers give bigger kids room to burn off energy.

**Is there parking?**
Yes. Play Panda has free parking and a pram-friendly entrance.

**Can I host a birthday party at Play Panda?**
Yes. Play Panda has a dedicated party hall plus food and decor handled end to end. Message Play Panda on WhatsApp at +91 90638 17084 to check party slots.

**How do I book or check timings?**
Message Play Panda on WhatsApp at +91 90638 17084, or call the same number, for current timings, slots and party availability.

---

## JSON-LD (place in the home page `<head>`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  "@id": "https://theplaypanda.com/#business",
  "name": "Play Panda",
  "description": "Indoor, screen-free children's play zone in Bandlaguda Jagir, Hyderabad. 10,000 sq. ft. across 9 themed zones, with a party hall, kid-friendly food court and parent workstation.",
  "url": "https://theplaypanda.com/",
  "telephone": "+91-90638-17084",
  "image": "https://theplaypanda.com/LogoWithoutBG.png",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[STREET ADDRESS]",
    "addressLocality": "Bandlaguda Jagir",
    "addressRegion": "Telangana",
    "postalCode": "[PINCODE]",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LATITUDE]",
    "longitude": "[LONGITUDE]"
  },
  "hasMap": "https://maps.app.goo.gl/uujpj3phdAMPyr3S7",
  "openingHours": "[OPENING HOURS e.g. Mo-Su 10:00-21:00]",
  "areaServed": "Hyderabad",
  "sameAs": []
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is Play Panda located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Play Panda is in Bandlaguda Jagir, Hyderabad, at [STREET ADDRESS] – [PINCODE]. It's an indoor play zone, so it's a good option year-round, including Hyderabad summers and the monsoon."
      }
    },
    {
      "@type": "Question",
      "name": "What ages is Play Panda for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Play Panda's nine zones span toddlers to older children. Tiny Trails and The Bubble Pond suit the smallest ones, while Cute Climbers and Little Explorers give bigger kids room to burn off energy."
      }
    },
    {
      "@type": "Question",
      "name": "Is there parking at Play Panda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Play Panda has free parking and a pram-friendly entrance."
      }
    },
    {
      "@type": "Question",
      "name": "Can I host a birthday party at Play Panda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Play Panda has a dedicated party hall plus food and decor handled end to end. Message Play Panda on WhatsApp at +91 90638 17084 to check party slots."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book or check timings at Play Panda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Message Play Panda on WhatsApp at +91 90638 17084, or call the same number, for current timings, slots and party availability."
      }
    }
  ]
}
</script>
```
