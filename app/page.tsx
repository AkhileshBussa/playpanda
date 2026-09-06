import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Zones } from "@/components/Zones";
import { Birthdays } from "@/components/Birthdays";
import { Food } from "@/components/Food";
import { Parents } from "@/components/Parents";
import { Location, locationFaqs } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Play Panda · Indoor Kids Play Zone & Play Area in Hyderabad",
  description:
    "Play Panda is a 10,000 sq. ft. indoor, screen-free kids play zone in Bandlaguda Jagir, Hyderabad. 9 themed play areas, a birthday party hall, food court, parent workstation and free parking.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Play Panda · Indoor Kids Play Zone in Hyderabad",
    description:
      "Screens off. Imagination on. A 10,000 sq. ft. indoor play area for kids in Bandlaguda Jagir, Hyderabad, with 9 themed zones, a party hall and a food court.",
    images: ["/MascotWithoutBG.png"],
  },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={[localBusinessSchema(), faqPageSchema(locationFaqs)]} />
      <Nav />
      <Hero />
      <Zones />
      <Birthdays />
      <Food />
      <Parents />
      <Reviews />
      <Location />
      <Visit />
      <Footer />
    </main>
  );
}
