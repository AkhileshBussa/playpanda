"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

// The panda's wardrobe. Each look recolors the stage ring + backdrop blobs
// (brand palette only) and carries its own caption.
type Look = {
  src: string;
  label: string;
  emoji: string;
  color: string; // brand hex — ring + accents
};

const LOOKS: Look[] = [
  { src: "/mascot/hi.png", label: "Say hi!", emoji: "👋", color: "#FFBB01" },
  { src: "/mascot/mechanic.png", label: "Mechanic mode", emoji: "🔧", color: "#01C9C7" },
  { src: "/mascot/engineer.png", label: "Little engineer", emoji: "🧱", color: "#FF613A" },
  { src: "/mascot/dhoti.png", label: "Festive-ready", emoji: "🪔", color: "#8061BE" },
  { src: "/mascot/shhh.png", label: "Shhh… secret play", emoji: "🤫", color: "#FF7EBE" },
  { src: "/mascot/sitting.png", label: "Chill mode", emoji: "😎", color: "#009D72" },
];

const AUTOPLAY_MS = 2000;

export function HeroPandaStage() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLButtonElement>(null);

  const look = LOOKS[index];
  const go = useCallback((n: number) => setIndex((i) => (n + LOOKS.length) % LOOKS.length), []);

  // Motion preference.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Auto-advance the wardrobe (pauses on interaction / reduced motion).
  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [index, reduced, paused, go]);

  // Tilt the stage toward the pointer / touch for a light 3D parallax.
  const onMove = (clientX: number, clientY: number) => {
    if (reduced) return;
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (clientX - r.left) / r.width - 0.5; // -0.5..0.5
    const py = (clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -16, y: px * 16 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="relative mx-auto w-full max-w-sm select-none"
      onMouseMove={(e) => onMove(e.clientX, e.clientY)}
      onMouseLeave={resetTilt}
      onTouchMove={(e) => {
        setPaused(true);
        const t = e.touches[0];
        if (t) onMove(t.clientX, t.clientY);
      }}
      onTouchEnd={resetTilt}
    >
      {/* soft color glow behind the stage, recolors per look */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl transition-colors duration-700"
        style={{ background: `radial-gradient(60% 60% at 50% 45%, ${look.color}66, transparent 70%)` }}
        aria-hidden
      />

      {/* orbiting brand dots */}
      {!reduced && (
        <>
          <span className="absolute left-2 top-6 h-4 w-4 rounded-full bg-coral animate-bob" style={{ animationDelay: "0.2s" }} aria-hidden />
          <span className="absolute right-3 top-16 h-3 w-3 rounded-full bg-teal animate-bob" style={{ animationDelay: "0.8s" }} aria-hidden />
          <span className="absolute right-8 bottom-14 h-5 w-5 rounded-full bg-yellow animate-bob" style={{ animationDelay: "1.1s" }} aria-hidden />
          <span className="absolute left-6 bottom-10 h-3 w-3 rounded-full bg-purple animate-bob" style={{ animationDelay: "1.6s" }} aria-hidden />
        </>
      )}

      {/* The stage — tap to change look */}
      <button
        ref={stageRef}
        type="button"
        onClick={() => {
          setPaused(true);
          go(index + 1);
        }}
        aria-label={`Panda look: ${look.label}. Tap for the next outfit.`}
        className="group relative block aspect-square w-full rounded-full p-[3%] shadow-chunk transition-colors duration-700"
        style={{
          background: `conic-gradient(from 140deg, ${look.color}, ${look.color}99, ${look.color})`,
          transform: reduced ? undefined : `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 200ms ease-out, background 700ms ease",
        }}
      >
        {/* inner light disc — white image backgrounds blend into this */}
        <span className="absolute inset-[3%] overflow-hidden rounded-full" style={{ background: "radial-gradient(70% 70% at 50% 35%, #FFFFFF, #FFF8EC)" }}>
          {/* the panda — keyed so each swap replays the pop-in */}
          <span key={index} className={reduced ? "relative block h-full w-full" : "relative block h-full w-full animate-pop-in"}>
            <Image
              src={look.src}
              alt={`Play Panda mascot — ${look.label}`}
              fill
              priority={index === 0}
              sizes="(max-width: 640px) 90vw, 420px"
              className={`object-contain object-bottom ${reduced ? "" : "animate-bob"}`}
            />
          </span>
        </span>

        {/* caption chip */}
        <span
          className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-pill px-4 py-2 font-display font-black text-sm text-white shadow-chunk transition-colors duration-700 whitespace-nowrap"
          style={{ backgroundColor: look.color }}
        >
          <span className="text-base leading-none">{look.emoji}</span>
          {look.label}
        </span>
      </button>

      {/* progress dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {LOOKS.map((l, i) => (
          <button
            key={l.src}
            type="button"
            aria-label={`Show ${l.label}`}
            onClick={() => {
              setPaused(true);
              setIndex(i);
            }}
            className="h-2.5 rounded-pill transition-all duration-300"
            style={{
              width: i === index ? 26 : 10,
              backgroundColor: i === index ? look.color : "#00000022",
            }}
          />
        ))}
      </div>
    </div>
  );
}
