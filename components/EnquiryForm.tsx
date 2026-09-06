"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/links";
import { trackEvent, CONVERSION_EVENTS } from "@/lib/analytics";

// No backend: composes a pre-filled WhatsApp message from the fields and opens
// the chat. This matches where enquiries already come from (spec §6).
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string)?.trim() || "—";

    const message = [
      "Hi Play Panda! I'd like to enquire about a birthday party.",
      "",
      `Parent: ${get("parent")}`,
      `Phone/WhatsApp: ${get("phone")}`,
      `Child's name: ${get("child")}`,
      `Party date: ${get("date")}`,
      `Preferred package: ${get("package")}`,
      `Approx. guests: ${get("guests")}`,
      `Day: ${get("day")}`,
    ].join("\n");

    trackEvent(CONVERSION_EVENTS.formSubmit, { form_name: "birthday_enquiry" });
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-cream rounded-chunk p-8 border border-ink/5 shadow-chunk text-center">
        <p className="text-4xl">🎉</p>
        <h3 className="mt-3 font-display font-black text-2xl text-ink">
          Thanks, we&apos;re on it!
        </h3>
        <p className="mt-2 text-ink/70">
          Your enquiry is ready in WhatsApp. Send it across and we&apos;ll reply
          shortly to help plan the big day.
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
      <div className="sm:col-span-2">
        <label className={label} htmlFor="parent">Parent name</label>
        <input id="parent" name="parent" required className={field} autoComplete="name" />
      </div>
      <div>
        <label className={label} htmlFor="phone">Phone / WhatsApp</label>
        <input id="phone" name="phone" required type="tel" className={field} autoComplete="tel" />
      </div>
      <div>
        <label className={label} htmlFor="child">Child&apos;s name</label>
        <input id="child" name="child" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="date">Party date</label>
        <input id="date" name="date" type="date" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="guests">Approx. total guests</label>
        <input id="guests" name="guests" type="number" min="1" inputMode="numeric" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="package">Preferred package</label>
        <select id="package" name="package" className={field} defaultValue="Not sure">
          <option>Classic</option>
          <option>Grand</option>
          <option>Fairytale</option>
          <option>Not sure</option>
        </select>
      </div>
      <div>
        <label className={label} htmlFor="day">Weekday or weekend</label>
        <select id="day" name="day" className={field} defaultValue="Not sure">
          <option>Weekday</option>
          <option>Weekend</option>
          <option>Not sure</option>
        </select>
      </div>
      <div className="sm:col-span-2 mt-2">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3.5 font-display font-black text-lg bg-green text-cream shadow-[0_6px_0_rgba(0,0,0,0.12)] active:translate-y-[2px] active:shadow-[0_4px_0_rgba(0,0,0,0.12)] transition-all hover:brightness-105"
        >
          Send enquiry on WhatsApp
        </button>
        <p className="mt-2 text-center text-sm text-ink/50">
          We&apos;ll reply shortly to help plan the day.
        </p>
      </div>
    </form>
  );
}
