"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/links";
import { trackEvent, CONVERSION_EVENTS } from "@/lib/analytics";

// Composes a pre-filled WhatsApp message to the main number (no backend).
export function SchoolForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string)?.trim() || "—";

    const message = [
      "Hi Play Panda! I'm from a school and would like to explore partnering with you.",
      "",
      `School: ${get("school")}`,
      `Name & role: ${get("name")}`,
      `Phone/WhatsApp: ${get("phone")}`,
      `Area/location: ${get("area")}`,
      `Interested in: ${get("interest")}`,
      `Approx. students: ${get("students")}`,
    ].join("\n");

    trackEvent(CONVERSION_EVENTS.formSubmit, { form_name: "school_enquiry" });
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-cream rounded-chunk p-8 border border-ink/5 shadow-chunk text-center">
        <p className="text-4xl">🏫</p>
        <h3 className="mt-3 font-display font-black text-2xl text-ink">
          Thanks, we&apos;ll be in touch!
        </h3>
        <p className="mt-2 text-ink/70">
          Your message is ready in WhatsApp. Send it across and we&apos;ll arrange your
          private walkthrough.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 font-display font-bold text-coral hover:brightness-110"
        >
          Send another message
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
      <div className="sm:col-span-2">
        <label className={label} htmlFor="school">School name</label>
        <input id="school" name="school" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="name">Your name &amp; role</label>
        <input id="name" name="name" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="phone">Phone / WhatsApp</label>
        <input id="phone" name="phone" required type="tel" className={field} autoComplete="tel" />
      </div>
      <div>
        <label className={label} htmlFor="area">Area / location</label>
        <input id="area" name="area" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="students">Approx. number of students</label>
        <input id="students" name="students" type="number" min="1" inputMode="numeric" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="interest">Interested in</label>
        <select id="interest" name="interest" className={field} defaultValue="Not sure">
          <option>Birthday passes</option>
          <option>Field trips</option>
          <option>Annual day & events</option>
          <option>Not sure</option>
        </select>
      </div>
      <div className="sm:col-span-2 mt-2">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3.5 font-display font-black text-lg bg-green text-cream shadow-[0_6px_0_rgba(0,0,0,0.12)] active:translate-y-[2px] active:shadow-[0_4px_0_rgba(0,0,0,0.12)] transition-all hover:brightness-105"
        >
          Book a private walkthrough
        </button>
        <p className="mt-2 text-center text-sm text-ink/50">
          We&apos;ll be in touch to arrange your visit.
        </p>
      </div>
    </form>
  );
}
