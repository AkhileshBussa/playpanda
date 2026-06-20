import Image from "next/image";
import { Button } from "./Button";
import { WHATSAPP_LINK } from "@/lib/links";

const links = [
  { href: "#zones", label: "Play" },
  { href: "#birthdays", label: "Birthdays" },
  { href: "#food", label: "Food" },
  { href: "#parents", label: "For Parents" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-cream/80 bg-cream/95 border-b border-ink/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-28 sm:h-32 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Image
            src="/LogoWithoutBG.png"
            alt="Play Panda"
            width={160}
            height={160}
            priority
            className="h-24 w-auto sm:h-28"
          />
          <span className="sr-only">Play Panda</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display font-bold text-ink/80 hover:text-coral transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button href={WHATSAPP_LINK} variant="green" external className="!py-2.5 !px-5 text-sm sm:text-base">
          <WhatsAppIcon /> Chat with us
        </Button>
      </div>
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A10 10 0 0 0 2.4 17.1L1 23l6.06-1.59A10 10 0 1 0 19.05 4.91Zm-7.06 15.27a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-3.6.94.96-3.51-.2-.32a8.29 8.29 0 1 1 7.36 4.23Zm4.55-6.2c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8.98-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.4-.42-.56-.43h-.48a.93.93 0 0 0-.67.31c-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.13.17 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}
