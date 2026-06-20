import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Zones } from "@/components/Zones";
import { Birthdays } from "@/components/Birthdays";
import { Food } from "@/components/Food";
import { Parents } from "@/components/Parents";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Zones />
      <Birthdays />
      <Food />
      <Parents />
      <Visit />
      <Footer />
    </main>
  );
}
