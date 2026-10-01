"use client";
import { useState } from "react";
import { site } from "../data/site";

const field = "w-full rounded-lg border border-sage bg-white px-4 py-3 font-display text-base outline-none transition focus:border-moss focus:ring-2 focus:ring-blush";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `${d.get("message")}\n\n${d.get("name")}\n${d.get("org") || ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(d.get("subject") || "Hello")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 font-display text-sm font-semibold">Full name<input name="name" required className={field} /></label>
        <label className="grid gap-1 font-display text-sm font-semibold">Organization<input name="org" className={field} /></label>
      </div>
      <label className="grid gap-1 font-display text-sm font-semibold">Subject<input name="subject" required className={field} /></label>
      <label className="grid gap-1 font-display text-sm font-semibold">Message<textarea name="message" rows={6} required className={field} /></label>
      <button className="w-fit rounded-full bg-moss px-8 py-3 font-display font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-deep">Send message</button>
      {sent && <p className="font-display text-sm font-semibold text-moss">Your email app should open with the message ready to send.</p>}
    </form>
  );
}
