"use client";

import { useEffect, useState } from "react";

// Modal form for a visitor to leave a review.
export default function ReviewModal({ onClose }: { onClose: () => void }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="fixed inset-0 bg-black/85 z-1000 flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-purple-dark border border-gold rounded-2xl p-10 max-w-140 w-full relative" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label="Close" className="absolute top-5 right-6 text-gold text-[28px] leading-none">×</button>

        {sent ? (
          <p className="text-gold text-center py-8">Thanks, your review has been submitted and is awaiting approval.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="font-display text-gold text-2xl mb-6">Leave a Review</h3>

            {/* Clickable stars */}
            <div className="flex gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHover(n)}
                  onMouseLeave={() => setHover(0)}
                  aria-label={`${n} star${n > 1 ? "s" : ""}`}
                  className={`text-3xl ${n <= (hover || rating) ? "text-gold" : "text-cream/30"}`}
                >
                  ★
                </button>
              ))}
            </div>

            <input type="text" name="name" placeholder="Your name" required className="w-full bg-purple-light text-cream border border-gold rounded px-3 py-2 mb-4" />
            <input type="text" name="title" placeholder="Review title" required className="w-full bg-purple-light text-cream border border-gold rounded px-3 py-2 mb-4" />
            <textarea name="review" rows={4} placeholder="Tell us about your experience" required className="w-full bg-purple-light text-cream border border-gold rounded px-3 py-2 mb-4 resize-y" />

            <button type="submit" disabled={rating === 0} className="w-full bg-gold text-purple-dark font-bold py-3 rounded-md disabled:opacity-60">
              Submit Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
}