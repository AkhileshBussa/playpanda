import type { Metadata } from "next";
import "./globals.css";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://theplaypanda.com"),
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mark JS as available before paint so reveal-on-scroll can hide
            content up front without hiding it from no-JS clients / crawlers. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <GoogleTagManager />
        <GoogleTagManagerNoScript />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
