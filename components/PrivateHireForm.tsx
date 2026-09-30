"use client";

import { useState } from "react";

export default function PrivateHireForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/hire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname: data.get("fname"),
        lname: data.get("lname"),
        email: data.get("email"),
        phone: data.get("phone"),
        requirements: data.get("requirements"),
        botcheck: data.get("botcheck"),
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please email retroroutestours@gmail.com directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-purple-dark border border-gold rounded-xl p-9">
      <h3 className="font-display text-gold text-xl mb-6">Request a private tour</h3>

      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] w-px h-px opacity-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" name="fname" placeholder="First name" required className="w-full bg-purple-light text-cream border border-gold rounded px-3 py-2" />
        <input type="text" name="lname" placeholder="Last name" required className="w-full bg-purple-light text-cream border border-gold rounded px-3 py-2" />
      </div>

      <input type="email" name="email" placeholder="Email" required className="w-full bg-purple-light text-cream border border-gold rounded px-3 py-2 mt-4" />
      <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full bg-purple-light text-cream border border-gold rounded px-3 py-2 mt-4" />
      <textarea name="requirements" rows={4} placeholder="Tell us about your ideal experience" className="w-full bg-purple-light text-cream border border-gold rounded px-3 py-2 mt-4 resize-y" />

      <button type="submit" disabled={submitted} className="w-full mt-6 bg-gold text-purple-dark font-bold py-4 rounded-md disabled:opacity-70">
        {submitted ? "Request sent. We'll be in touch soon." : "Send Request"}
      </button>
    </form>
  );
}