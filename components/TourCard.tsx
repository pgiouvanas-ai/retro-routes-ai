"use client";

import { useState } from "react";
import Image from "next/image";
import type { Tour } from "@/components/tours-data";

// A single tour card with an image slider and a button to open details.
export default function TourCard({ tour, onViewDetails }: { tour: Tour; onViewDetails: () => void }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col bg-purple-light border border-gold rounded-xl overflow-hidden">
      {/* Image slider */}
      <div className="relative h-[200px] overflow-hidden">
        <div className="flex h-full transition-transform duration-[400ms] ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {tour.images.map((img) => (
            <div key={img.src} className="relative min-w-full h-full">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 90vw, 400px" className="object-cover" />
            </div>
          ))}
        </div>
        {tour.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-[6px]">
            {tour.images.map((img, i) => (
              <button
                type="button"
                key={img.src}
                onClick={() => setIndex(i)}
                aria-label={`View image ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`w-[7px] h-[7px] rounded-full ${i === index ? "bg-gold" : "bg-cream"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">
        <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold mb-3">{tour.tag}</span>
        <h3 className="font-display text-cream text-[22px] mb-3">{tour.title}</h3>
        <p className="text-cream text-[15px] mb-5">{tour.shortDescription}</p>
        <div className="flex gap-5 flex-wrap mb-6">
          <span className="text-cream text-[14px]"><span className="text-gold">✓</span> {tour.duration}</span>
          <span className="text-cream text-[14px]"><span className="text-gold">✓</span> {tour.price}</span>
        </div>
        <button type="button" onClick={onViewDetails} className="mt-auto border-2 border-gold text-gold font-bold px-9 py-3 rounded-md hover:bg-gold hover:text-purple-dark transition-all">
          Discover More
        </button>
      </div>
    </div>
  );
}