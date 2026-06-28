"use client";

import { useState } from "react";
import { FRANCHISE_WHATSAPP_NUMBER } from "@/lib/links";

// Composes a pre-filled WhatsApp message to the franchise contact (no backend).
export function FranchiseForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string)?.trim() || "—";

    const message = [
      "Hi Play Panda! I'd like to enquire about a franchise.",
      "",
      `Name: ${get("name")}`,
      `Phone/WhatsApp: ${get("phone")}`,
      `Email: ${get("email")}`,
      `City/town of interest: ${get("city")}`,
      `Preferred format: ${get("format")}`,
      `Investment capacity: ${get("capacity")}`,
      `Background: ${get("background")}`,
      `Message: ${get("message")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${FRANCHISE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-cream rounded-chunk p-8 border border-ink/5 shadow-chunk text-center">
        <p className="text-4xl">🐼</p>
        <h3 className="mt-3 font-display font-black text-2xl text-ink">
          Thanks for your interest!
        </h3>
        <p className="mt-2 text-ink/70">
          Your enquiry is ready in WhatsApp. Send it across and our team will be in
          touch to explore the fit.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 font-display font-bold text-coral hover:brightness-110"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/30";
  const label = "block font-display font-bold text-ink text-sm";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cream rounded-chunk p-7 sm:p-8 border border-ink/5 shadow-chunk grid sm:grid-cols-2 gap-4"
    >
      <div>
        <label className={label} htmlFor="name">Full name</label>
        <input id="name" name="name" required className={field} autoComplete="name" />
      </div>
      <div>
        <label className={label} htmlFor="phone">Phone (WhatsApp)</label>
        <input id="phone" name="phone" required type="tel" className={field} autoComplete="tel" />
      </div>
      <div>
        <label className={label} htmlFor="email">Email</label>
        <input id="email" name="email" required type="email" className={field} autoComplete="email" />
      </div>
      <div>
        <label className={label} htmlFor="city">City / town of interest</label>
        <input id="city" name="city" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="format">Preferred format</label>
        <select id="format" name="format" className={field} defaultValue="Not sure">
          <option>Express</option>
          <option>Standard</option>
          <option>Flagship</option>
          <option>Not sure</option>
        </select>
      </div>
      <div>
        <label className={label} htmlFor="capacity">Investment capacity</label>
        <select id="capacity" name="capacity" className={field} defaultValue="Prefer to discuss">
          <option>Express-scale</option>
          <option>Standard-scale</option>
          <option>Flagship-scale</option>
          <option>Prefer to discuss</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="background">Your background</label>
        <input id="background" name="background" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={3} className={field} />
      </div>
      <label className="sm:col-span-2 flex items-start gap-2 text-sm text-ink/70">
        <input type="checkbox" required className="mt-1" />
        I consent to be contacted by Play Panda about this enquiry.
      </label>
      <div className="sm:col-span-2 mt-2">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3.5 font-display font-black text-lg bg-green text-cream shadow-[0_6px_0_rgba(0,0,0,0.12)] active:translate-y-[2px] active:shadow-[0_4px_0_rgba(0,0,0,0.12)] transition-all hover:brightness-105"
        >
          Submit enquiry
        </button>
      </div>
    </form>
  );
}
