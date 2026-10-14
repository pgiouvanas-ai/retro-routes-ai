"use client";

import { useState } from "react";
import ReviewModal from "@/components/ReviewModal";

const reviews = [
  {
    title: "Loved the Experience and Connections!",
    quote: "Sure we can go it alone in our adventures to find the best vintage shops, but when we do it with others the connections we make with new people are more precious than the little treasures that we put in our closet.",
    reviewer: "Sallie_F",
    date: "July 2026",
    stars: 5,
  },
  {
    title: "Made me love Dublin",
    quote: "This is the BEST tour in Dublin if you love food, conversation, Irish Coffee, local artists and btw, Vintage shopping. We walked, we talked, we laughed and drank. Frankly one of the most compassionate and comfortable tours I've ever been on anywhere at any time. I'd do it again in a hot New York minute.",
    reviewer: "Susan_T",
    date: "July 2026",
    stars: 5,
  },
  {
    title: "Dublin's BEST guide",
    quote: "The Vintage Shopping tour was one of the highlights of my time in Dublin. Ciaran was a very enthusiastic guide. He knows all of the shop owners first hand & I was surprised that each offered a 10%-15% discount. If shopping isn't your thing, then the stops for Irish coffee & a sweet, a savory sausage/croissant or wine & cheese sampler will not disappoint. Do not even think twice about booking this tour. Ciaran will keep you smiling, laughing & learning while you shop!",
    reviewer: "Kari_S",
    date: "October 2025",
    stars: 5,
  },
];

const platforms = [
  { label: "5.0 ⭐ on Viator", href: "https://www.viator.com/en-IE/tours/Dublin/The-Retro-Routes-Experience-Dublins-Vintage-Shopping-Tour/d503-5567364P1" },
  { label: "5.0 ⭐ on TripAdvisor", href: "https://www.tripadvisor.ie/Attraction_Review-g186605-d33000820-Reviews-The_Retro_Routes_Experience_Dublin-Dublin_County_Dublin.html" },
  { label: "5.0 ⭐ on GetYourGuide", href: "https://www.getyourguide.com/dublin-l31/the-retro-routes-experience-dublin-s-vintage-shopping-tour-t894795/" },
];

// Reviews section: guest reviews, platform links, and a form to leave a review.
export default function Reviews() {
  const [open, setOpen] = useState(false);

  return (
    <section id="reviews" className="bg-purple-dark px-6 py-24">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-gold border border-gold px-3 py-1 rounded-full mb-4">
          Reviews
        </span>
        <h2 className="font-display text-gold text-[clamp(26px,3.5vw,40px)] font-bold mb-4">What our guests say</h2>
        <p className="text-cream text-[17px] max-w-[560px] mb-12">Rated 5.0 by every guest who has walked with us.</p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {reviews.map((review) => (
            <div key={review.reviewer} className="bg-purple-light border border-gold rounded-xl p-7">
              <div className="text-gold text-[16px] tracking-[2px] mb-4">{"★".repeat(review.stars)}</div>
              <h3 className="text-cream font-bold text-[18px] mb-3">{review.title}</h3>
              <p className="italic text-cream text-[15px] mb-5">{review.quote}</p>
              <div>
                <span className="text-gold font-bold">{review.reviewer}</span>
                <span className="text-cream text-[13px] ml-3">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Platform links */}
        <div className="mt-10 flex items-center gap-4 flex-wrap">
          <span className="text-[13px] font-semibold text-cream tracking-[0.08em] uppercase">Read more reviews on</span>
          {platforms.map((p) => (
            <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
              className="text-[14px] font-bold text-gold border border-gold px-5 py-2 rounded-full hover:bg-gold hover:text-purple-dark transition-all duration-200">
              {p.label}
            </a>
          ))}
        </div>

        {/* Leave a review */}
        <button type="button" onClick={() => setOpen(true)}
          className="mt-10 border-2 border-gold text-gold font-bold px-9 py-3 rounded-md hover:bg-gold hover:text-purple-dark transition-all">
          Leave a Review
        </button>
      </div>

      {open && <ReviewModal onClose={() => setOpen(false)} />}
    </section>
  );
}