import type { Faq } from "./schema";

export type Area = {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  route: string;
  reasons: string[];
  faqs: Faq[];
};

export const AREAS: Area[] = [
  {
    slug: "attapur",
    name: "Attapur",
    headline: "Kids Play Zone Near Attapur, Hyderabad",
    intro:
      "Play Panda is a short drive from Attapur, just down Kismatpur Road in Bandlaguda Jagir. It's a 10,000 sq. ft. screen-free play area with nine themed zones, a party hall and a food court, so an Attapur family can turn up after school or on a weekend without crossing the city.",
    route:
      "From Attapur, head down Kismatpur Road past Rajendranagar. Play Panda is on the 3rd floor of NRR Square, beside Vignan Junior College. Parking is free.",
    reasons: [
      "No drive into the city centre just to find a proper play area",
      "Indoors and air-conditioned, so summer afternoons and monsoon evenings still work",
      "Nine zones instead of one structure, so a 2-year-old and a 7-year-old both stay busy",
      "A party hall on the same floor for birthdays, with parking for the whole guest list",
    ],
    faqs: [
      {
        q: "Is there a good kids play zone near Attapur?",
        a: "Yes. Play Panda in Bandlaguda Jagir is a short drive from Attapur along Kismatpur Road. It's an indoor, screen-free play zone with 10,000 sq. ft. of play across nine themed zones, free parking and a party hall for birthdays.",
      },
      {
        q: "How far is Play Panda from Attapur?",
        a: "Play Panda is on Kismatpur Road in Bandlaguda Jagir, the next stretch along from Attapur via Rajendranagar. Open Google Maps for live directions and current traffic from where you are.",
      },
      {
        q: "Can I host my child's birthday party near Attapur?",
        a: "Yes. Play Panda has a dedicated party hall with a coordinator, décor options and access to all nine play zones, and it's an easy drive from Attapur. Message Play Panda on WhatsApp at +91 90638 17084 to check slots.",
      },
    ],
  },
  {
    slug: "kismatpur",
    name: "Kismatpur",
    headline: "Indoor Play Area for Kids in Kismatpur, Hyderabad",
    intro:
      "Play Panda is on Kismatpur Road itself, which makes it the local indoor play area for Kismatpur families. Nine themed play zones across 10,000 sq. ft., all screen-free, with a kid-friendly food court and a parent workstation so grown-ups can settle in while the kids run.",
    route:
      "Play Panda is on the 3rd floor of NRR Square on Kismatpur Road, beside Vignan Junior College, with free parking and a pram-friendly entrance.",
    reasons: [
      "Genuinely local, no highway, no city traffic, no planning a whole day around it",
      "Works as a regular after-school stop rather than a once-a-month outing",
      "Free Wi-Fi, coffee and clear sightlines, so a parent can answer email while play happens",
      "Indoor and air-conditioned, which matters from March right through the monsoon",
    ],
    faqs: [
      {
        q: "Is there a play zone in Kismatpur?",
        a: "Play Panda is on Kismatpur Road in Bandlaguda Jagir, on the 3rd floor of NRR Square beside Vignan Junior College. It's an indoor, screen-free kids play zone with nine themed zones and free parking.",
      },
      {
        q: "Is Play Panda suitable for toddlers from Kismatpur?",
        a: "Yes. Tiny Trails is built for the smallest children to crawl and toddle safely, and The Bubble Pond ball pit suits little ones too. Older kids have Cute Climbers and Little Explorers in the same 10,000 sq. ft. space.",
      },
    ],
  },
  {
    slug: "manikonda",
    name: "Manikonda",
    headline: "Kids Play Zone Near Manikonda, Hyderabad",
    intro:
      "Manikonda families looking for an indoor play zone have Play Panda a short drive south in Bandlaguda Jagir. It's a screen-free play area across 10,000 sq. ft. and nine themed zones, with a party hall for birthdays and a food court for when everyone is suddenly starving.",
    route:
      "From Manikonda, come via Puppalguda and Narsingi, or drop down to Kismatpur Road. Play Panda is on the 3rd floor of NRR Square, beside Vignan Junior College. Parking is free.",
    reasons: [
      "Closer than the mall play areas in Gachibowli, and far more space per child",
      "Screen-free by design, so there are no arcade machines quietly eating your change",
      "Zones for different ages in one ticket, which helps when siblings are years apart",
      "Free parking on site instead of a mall basement queue on a Sunday evening",
    ],
    faqs: [
      {
        q: "Is there a kids play zone near Manikonda?",
        a: "Play Panda in Bandlaguda Jagir is a short drive from Manikonda via Puppalguda and Narsingi, or via Kismatpur Road. It's an indoor, screen-free play zone with nine themed zones across 10,000 sq. ft.",
      },
      {
        q: "How is Play Panda different from a mall play area?",
        a: "Mall play areas are usually a single soft-play structure or an arcade. Play Panda is a 10,000 sq. ft. venue with nine separate themed zones, including water play, a farm, a garage and a ball pit, with no screens anywhere and free parking of its own.",
      },
    ],
  },
  {
    slug: "narsingi",
    name: "Narsingi",
    headline: "Indoor Play Zone Near Narsingi, Hyderabad",
    intro:
      "Play Panda is an easy run from Narsingi along Kismatpur Road, in Bandlaguda Jagir. Nine themed play zones, 10,000 sq. ft., all screen-free, plus a party hall and a food court, built so children can play hard while parents stay comfortable and close.",
    route:
      "From Narsingi, take the Kismatpur Road stretch towards Bandlaguda Jagir. Play Panda is on the 3rd floor of NRR Square, beside Vignan Junior College, with free parking.",
    reasons: [
      "A straight run down one road, no Outer Ring Road detour needed",
      "Weather-proof play for Hyderabad summers and the monsoon",
      "Nine different kinds of play, from sensory and pretend to climbing and water",
      "Birthday parties handled end to end, with parking for guests",
    ],
    faqs: [
      {
        q: "Where can kids play indoors near Narsingi?",
        a: "Play Panda in Bandlaguda Jagir is a short drive from Narsingi via Kismatpur Road. It's an indoor, screen-free kids play zone with nine themed zones, a party hall and a kid-friendly food court.",
      },
      {
        q: "Do I need to book ahead?",
        a: "Walk-ins are welcome for play. Birthday parties and school groups need a booking. Message Play Panda on WhatsApp at +91 90638 17084 for current timings and party slots.",
      },
    ],
  },
  {
    slug: "gandipet",
    name: "Gandipet",
    headline: "Kids Play Area Near Gandipet, Hyderabad",
    intro:
      "For families around Gandipet and Himayat Sagar, Play Panda is an easy run over to Bandlaguda Jagir. 10,000 sq. ft., nine themed zones, no screens, and a party hall for birthdays, with free parking on site.",
    route:
      "From Gandipet, come in via Himayat Sagar Road and Narsingi towards Kismatpur Road. Play Panda is on the 3rd floor of NRR Square, beside Vignan Junior College.",
    reasons: [
      "An indoor option for the days when the lake road picnic plan is rained off",
      "Space to actually run, rather than a corner play zone inside a restaurant",
      "Nine zones in one visit, so an afternoon doesn't run out after twenty minutes",
      "Free parking, which is not a given at weekend spots around Gandipet",
    ],
    faqs: [
      {
        q: "Is there an indoor play area near Gandipet?",
        a: "Play Panda in Bandlaguda Jagir is reachable from Gandipet via Himayat Sagar Road and Narsingi. It has nine themed play zones across 10,000 sq. ft., all screen-free.",
      },
      {
        q: "What ages is it for?",
        a: "The nine zones span toddlers to older children. Tiny Trails and The Bubble Pond suit the youngest, while Cute Climbers and Little Explorers give bigger kids room to burn off energy.",
      },
    ],
  },
  {
    slug: "tolichowki",
    name: "Tolichowki",
    headline: "Kids Play Zone Near Tolichowki, Hyderabad",
    intro:
      "Tolichowki parents hunting for a proper play zone have Play Panda a drive south in Bandlaguda Jagir, off Kismatpur Road. It's a screen-free indoor play area with nine themed zones across 10,000 sq. ft., a party hall and a food court the whole family can eat from.",
    route:
      "From Tolichowki, head towards Mehdipatnam and Rajendranagar, then on to Kismatpur Road. Play Panda is on the 3rd floor of NRR Square, beside Vignan Junior College, with free parking.",
    reasons: [
      "A real destination play zone rather than the small soft-play corners closer in",
      "Air-conditioned throughout, so afternoons work even in peak summer",
      "One entry covers all nine zones, with no per-ride tokens",
      "Party hall and food court on the same floor for birthdays",
    ],
    faqs: [
      {
        q: "Is there a play zone near Tolichowki for kids?",
        a: "Play Panda in Bandlaguda Jagir is a drive south from Tolichowki via Mehdipatnam and Rajendranagar. It's a 10,000 sq. ft. indoor, screen-free kids play zone with nine themed zones and free parking.",
      },
      {
        q: "Is Play Panda a soft play area or an arcade?",
        a: "Neither, exactly. It's a screen-free indoor play zone: nine themed zones covering sensory, pretend, building, climbing and water play. There are no arcade machines and no screens anywhere in the venue.",
      },
    ],
  },
  {
    slug: "mehdipatnam",
    name: "Mehdipatnam",
    headline: "Indoor Kids Play Zone Near Mehdipatnam, Hyderabad",
    intro:
      "Play Panda sits south of Mehdipatnam in Bandlaguda Jagir, on Kismatpur Road. It's an indoor, screen-free play zone: 10,000 sq. ft., nine themed zones, a party hall for birthdays, a kid-friendly food court and a parent workstation with free Wi-Fi and coffee.",
    route:
      "From Mehdipatnam, take the Aramghar or Rajendranagar route onto Kismatpur Road. Play Panda is on the 3rd floor of NRR Square, beside Vignan Junior College, with free parking.",
    reasons: [
      "Far more room than the play corners inside Mehdipatnam's malls and restaurants",
      "Indoors and weather-proof year round",
      "Zones that suit toddlers and school-age kids in the same visit",
      "Free parking, so a birthday guest list isn't a parking problem",
    ],
    faqs: [
      {
        q: "Is there a kids play zone near Mehdipatnam?",
        a: "Play Panda in Bandlaguda Jagir is a short drive south of Mehdipatnam via Rajendranagar or Aramghar onto Kismatpur Road. It's an indoor, screen-free play zone with nine themed zones across 10,000 sq. ft.",
      },
      {
        q: "Is there food on site?",
        a: "Yes. Play Panda has a kid-friendly food court on site, so you don't have to leave and come back when everyone gets hungry.",
      },
    ],
  },
  {
    slug: "rajendranagar",
    name: "Rajendranagar",
    headline: "Kids Play Zone in Rajendranagar, Hyderabad",
    intro:
      "Play Panda is right on the Rajendranagar doorstep, on Kismatpur Road in Bandlaguda Jagir. Nine themed play zones across 10,000 sq. ft. of screen-free indoor play, with a party hall, a food court and free parking.",
    route:
      "From Rajendranagar, continue along Kismatpur Road. Play Panda is on the 3rd floor of NRR Square, beside Vignan Junior College.",
    reasons: [
      "Close enough to be a weekday habit, not just a weekend outing",
      "Nine zones rather than a single structure, so kids don't get bored in an hour",
      "Screen-free, which is the whole point for a lot of parents nearby",
      "Free parking and a pram-friendly entrance",
    ],
    faqs: [
      {
        q: "Is there a kids play area in Rajendranagar?",
        a: "Play Panda is on Kismatpur Road in Bandlaguda Jagir, next door to Rajendranagar. It's an indoor, screen-free kids play zone with nine themed zones, a party hall and free parking.",
      },
      {
        q: "What are the timings?",
        a: "Play Panda is open Monday to Thursday from 11 AM to 9 PM, and Friday to Sunday from 11 AM to 10 PM. Message +91 90638 17084 on WhatsApp to confirm before a special trip.",
      },
    ],
  },
  {
    slug: "shamshabad",
    name: "Shamshabad",
    headline: "Kids Play Zone Near Shamshabad, Hyderabad",
    intro:
      "For families near Shamshabad and the airport side of the city, Play Panda in Bandlaguda Jagir is a straightforward run up Kismatpur Road. 10,000 sq. ft., nine themed zones, screen-free throughout, with a party hall and a food court on site.",
    route:
      "From Shamshabad, head towards Rajendranagar and onto Kismatpur Road. Play Panda is on the 3rd floor of NRR Square, beside Vignan Junior College, with free parking.",
    reasons: [
      "A genuine destination for a weekend run into the city, without going all the way in",
      "Indoors and air-conditioned, no matter the season",
      "One entry covers all nine zones for the whole visit",
      "Party hall with a coordinator, useful if relatives are flying in",
    ],
    faqs: [
      {
        q: "Is there a children's play zone near Shamshabad?",
        a: "Play Panda in Bandlaguda Jagir is reached from Shamshabad via Rajendranagar and Kismatpur Road. It has nine themed zones across 10,000 sq. ft., all screen-free.",
      },
      {
        q: "Is it worth the drive?",
        a: "Play Panda is a full afternoon rather than a twenty-minute stop: nine separate zones covering sensory, pretend, building, climbing and water play, plus a food court and a parent workstation with free Wi-Fi and coffee.",
      },
    ],
  },
];

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}

export const AREA_NAMES = AREAS.map((a) => a.name);
