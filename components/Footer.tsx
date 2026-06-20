import Image from "next/image";
import {
  WHATSAPP_LINK,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/LogoWithoutBG.png"
              alt="Play Panda"
              width={160}
              height={160}
              className="h-20 w-auto bg-cream rounded-2xl p-2"
            />
            <p className="mt-5 font-display font-black text-2xl text-yellow leading-tight">
              A world built for wonder.
            </p>
            <p className="mt-3 text-cream/70 max-w-xs leading-relaxed">
              Screen-free, imagination-first indoor play for kids and the grown-ups
              who love them.
            </p>
          </div>

          <div>
            <h4 className="font-display font-black uppercase tracking-widest text-sm text-yellow">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-cream/80">
              <li><a href="#zones" className="hover:text-coral">The 9 zones</a></li>
              <li><a href="#birthdays" className="hover:text-coral">Birthdays</a></li>
              <li><a href="#food" className="hover:text-coral">Food court</a></li>
              <li><a href="#parents" className="hover:text-coral">For parents</a></li>
              <li><a href="#visit" className="hover:text-coral">Visit us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black uppercase tracking-widest text-sm text-yellow">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2 text-cream/80">
              <li>
                <a href={PHONE_TEL} className="hover:text-coral">📞 {PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-coral">
                  💬 WhatsApp us
                </a>
              </li>
              <li>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-coral">
                  📍 Find us on Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-wrap items-center justify-between gap-3 text-sm text-cream/60">
          <p>© {new Date().getFullYear()} Play Panda. Made with mess and a lot of love.</p>
          <p className="flex gap-2 items-center">
            <span className="h-2 w-2 rounded-full bg-coral" />
            <span className="h-2 w-2 rounded-full bg-yellow" />
            <span className="h-2 w-2 rounded-full bg-green" />
            <span className="h-2 w-2 rounded-full bg-teal" />
            <span className="h-2 w-2 rounded-full bg-pink" />
            <span className="h-2 w-2 rounded-full bg-purple" />
            <span className="h-2 w-2 rounded-full bg-brown" />
          </p>
        </div>
      </div>
    </footer>
  );
}
