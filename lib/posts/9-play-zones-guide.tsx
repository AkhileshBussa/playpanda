import Link from "next/link";
import type { PostModule } from "@/lib/blog";
import { ZONES } from "@/lib/zones";

export const meta = {
  slug: "9-play-zones-guide",
  title: "A Tour of Play Panda's 9 Play Zones (and the Best One for Your Kid's Age)",
  metaTitle: "Inside Play Panda: A Guide to Our 9 Play Zones",
  metaDescription:
    "Tiny Trails to DollHouse, a tour of all 9 themed zones at Play Panda and which suits toddlers, preschoolers and big kids.",
  excerpt:
    "A zone-by-zone tour of all nine themed play zones at Play Panda, and a quick table of which suits which age.",
  author: "The Play Panda Team",
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  ogImage: "/MascotWithoutBG.png",
};

export const faqs = [
  {
    q: "How many play zones does Play Panda have?",
    a: "Play Panda has nine themed play zones across 10,000 sq. ft.: Tiny Trails, The Bubble Pond, Little Engineers, Happy Farm, Mini Garage, Water Zone, Little Explorers, Cute Climbers and the DollHouse.",
  },
  {
    q: "Which Play Panda zones are best for toddlers?",
    a: "Tiny Trails, The Bubble Pond and the Water Zone are the gentlest, most sensory zones, making them ideal for toddlers and under-5s.",
  },
  {
    q: "Which zones are best for older kids?",
    a: "Cute Climbers, Little Explorers, Little Engineers, Mini Garage, Happy Farm and the DollHouse give older children room to climb, build, dig and run imaginative play.",
  },
  {
    q: "Should I bring spare clothes?",
    a: "Yes, pack a spare set of clothes for the Water Zone. Pouring and splashing is half the fun, so kids tend to get happily wet.",
  },
  {
    q: "How do I plan a visit to Play Panda?",
    a: "Message Play Panda on WhatsApp at +91 90638 17084 for current timings and slots. Play Panda is in Bandlaguda Jagir, Hyderabad, with free parking and a pram-friendly entrance.",
  },
];

export function Body() {
  return (
    <>
      <p>
        Play Panda has nine themed play zones spread across 10,000 sq. ft. in
        Bandlaguda Jagir, Hyderabad, each built for a different kind of play, from
        gentle sensory exploration for toddlers to climbing and pretend play for
        bigger kids. This is a quick tour of all nine zones and which ones suit which
        age, so you can plan a visit that keeps every child in your group happy.
      </p>

      <h2>The nine zones at a glance</h2>
      <p>
        Each zone has its own theme and style of play. Here&apos;s the full lineup,
        in the order kids usually discover them:
      </p>

      {ZONES.map((zone) => (
        <div key={zone.name}>
          <h3>
            {zone.emoji} {zone.name}
          </h3>
          <p>{zone.blurb}</p>
        </div>
      ))}

      <h2>Which Play Panda zone is best for my child&apos;s age?</h2>
      <p>
        The best zones depend on your child&apos;s age and energy. Toddlers thrive in
        the soft, sensory zones; preschoolers love pretend play; and older kids want
        to climb, dig and build. Use this table as a quick guide, though most kids
        happily roam across several zones in a single visit.
      </p>

      <table>
        <thead>
          <tr>
            <th>Age group</th>
            <th>Best zones</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Toddlers (under 3)</strong></td>
            <td>Tiny Trails, The Bubble Pond</td>
            <td>Gentle, soft, sensory play at their own pace</td>
          </tr>
          <tr>
            <td><strong>Preschoolers (3–5)</strong></td>
            <td>Water Zone, Happy Farm, DollHouse, Mini Garage</td>
            <td>Pretend play, role play and splashy sensory fun</td>
          </tr>
          <tr>
            <td><strong>Big kids (5+)</strong></td>
            <td>Cute Climbers, Little Explorers, Little Engineers</td>
            <td>Climbing, digging and building to burn off energy</td>
          </tr>
        </tbody>
      </table>

      <h2>How to make the most of your visit</h2>
      <p>
        A little planning goes a long way. Pack a spare set of clothes for the Water
        Zone, let toddlers warm up in Tiny Trails before the busier zones, and give
        older kids a run at Cute Climbers to burn off energy early. Parents can settle
        into the workstation area with Wi-Fi and coffee, with clear sightlines across
        the floor. If you&apos;re still deciding where to take the kids, our guide to
        the{" "}
        <Link href="/blog/best-kids-play-zone-hyderabad">
          best kids play zone near you in Hyderabad
        </Link>{" "}
        and our{" "}
        <Link href="/blog/kids-play-zone-checklist">parent&apos;s checklist</Link> are
        worth a read.
      </p>
      <p>
        Play Panda is in Bandlaguda Jagir, Hyderabad, with free parking and a
        pram-friendly entrance. To check current timings or party slots,{" "}
        <a href="https://wa.me/919063817084" target="_blank" rel="noopener noreferrer">
          message us on WhatsApp
        </a>{" "}
        at +91 90638 17084, or{" "}
        <Link href="/">see more about visiting Play Panda</Link>.
      </p>
    </>
  );
}

const post: PostModule = {
  meta,
  faqs,
  Body,
  related: ["best-kids-play-zone-hyderabad", "kids-play-zone-checklist"],
};

export default post;
