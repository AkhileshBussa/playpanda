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
