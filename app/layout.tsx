import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://playpanda.example"),
  title: "Play Panda · A world built for wonder",
  description:
    "A screen-free, imagination-first indoor playzone. 10,000 sq. ft. of play across 9 themed zones, a party hall, food court, and parent workstation.",
  icons: {
    icon: "/LogoWithoutBG.png",
  },
  openGraph: {
    title: "Play Panda · A world built for wonder",
    description:
      "Screens off. Imagination on. 9 themed play zones for kids, plus a party hall, food court, and a comfy parent corner.",
    images: ["/MascotWithoutBG.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
