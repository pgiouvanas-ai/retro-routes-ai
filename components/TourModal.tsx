"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Tour } from "@/components/tours-data";

// Carousel inside the modal.
function ModalCarousel({ images }: { images: Tour["images"] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full h-[280px] rounded-xl overflow-hidden mb-6">
      <div className="flex h-full transition-transform duration-[400ms] ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((img) => (
          <div key={img.src} className="relative min-w-full h-full">
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 90vw, 700px" className="object-cover" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex gap-[6px]">
          {images.map((img, i) => (
            <button
              type="button"
              key={img.src}
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-gold" : "bg-cream"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Tour detail modal with booking form.
export default function TourModal({ tour, onClose }: { tour: Tour; onClose: () => void }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tour: tour.title,
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          date: data.get("date"),
          people: data.get("people"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      });
      if (res.ok) setSent(true);
      else alert("Something went wrong. Please email retroroutestours@gmail.com directly.");
    } catch {
      alert("Something went wrong. Please email retroroutestours@gmail.com directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/85 z-[1000] flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-purple-dark border border-gold rounded-2xl p-12 max-w-[800px] w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label="Close" className="absolute top-5 right-6 text-gold text-[28px] leading-none">×</button>

        <ModalCarousel images={tour.images} />

        <span className="inline-block text-[11px] font-bold tracking-[0.1em] uppercase text-gold mb-4">{tour.tag}</span>
        <h2 className="font-display text-cream text-[clamp(26px,3.5vw,38px)] mb-5">{tour.title}</h2>
        <p className="text-[16px] leading-[1.8] text-cream mb-6">{tour.description}</p>

        <div className="flex gap-5 flex-wrap mb-6">
          <span className="text-cream text-[14px]"><span className="text-gold">✓</span> {tour.duration}</span>
          <span className="text-cream text-[14px]"><span className="text-gold">✓</span> {tour.price}</span>
        </div>

        <h4 className="text-gold text-[13px] font-bold tracking-[0.08em] uppercase mb-3">What&apos;s Included</h4>
        <ul className="mb-6 flex flex-col gap-1">
          {tour.includes.map((item) => (
            <li key={item} className="text-cream text-[14px]"><span className="text-gold">✓</span> {item}</li>
          ))}
        </ul>

        <h4 className="text-gold text-[13px] font-bold tracking-[0.08em] uppercase mb-3">Meeting Point</h4>
        <div className="rounded-xl overflow-hidden border border-gold mb-6 h-[200px]">
          <iframe src={tour.mapUrl} width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <h4 className="text-gold text-[13px] font-bold tracking-[0.08em] uppercase mb-3">What to Bring</h4>
        <ul className="mb-6 flex flex-col gap-1">
          {tour.whatToBring.map((item) => (
            <li key={item} className="text-cream text-[14px]"><span className="text-gold">✓</span> {item}</li>
          ))}
        </ul>

        <p className="text-[14px] text-cream mb-4"><span className="text-gold">✓</span> {tour.freeCancellation}</p>

        {/* Booking form */}
        {sent ? (
          <p className="text-gold mt-8">Thanks, your request is on its way. Ciaran will be in touch shortly.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 bg-purple-light border border-gold rounded-xl p-9">
            <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] w-px h-px opacity-0" />
            <h4 className="text-gold text-[13px] font-bold tracking-[0.08em] uppercase mb-4">Check Availability</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First name" required className="w-full bg-purple-dark text-cream border border-gold rounded px-3 py-2" />
              <input type="text" name="lastName" placeholder="Last name" required className="w-full bg-purple-dark text-cream border border-gold rounded px-3 py-2" />
              <input type="email" name="email" placeholder="Email" required className="w-full bg-purple-dark text-cream border border-gold rounded px-3 py-2" />
              <input type="tel" name="phone" placeholder="Phone" className="w-full bg-purple-dark text-cream border border-gold rounded px-3 py-2" />
              <input type="date" name="date" required className="w-full bg-purple-dark text-cream border border-gold rounded px-3 py-2" />
              <input type="number" name="people" min={1} placeholder="Number of people" required className="w-full bg-purple-dark text-cream border border-gold rounded px-3 py-2" />
            </div>
            <textarea name="message" rows={3} placeholder="Message (optional)" className="w-full bg-purple-dark text-cream border border-gold rounded px-3 py-2 mt-4 resize-y" />
            <button type="submit" disabled={sending} className="mt-4 border-2 border-gold text-gold font-bold px-9 py-3 rounded-md hover:bg-gold hover:text-purple-dark transition-all disabled:opacity-70">
              {sending ? "Sending..." : "Send Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}