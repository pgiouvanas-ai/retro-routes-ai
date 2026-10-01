"use client";

import { useState } from "react";
import TourCard from "@/components/TourCard";
import TourModal from "@/components/TourModal";
import { tours, type Tour } from "@/components/tours-data";

// Tours section: a grid of tour cards that open a detail modal.
export default function Tours() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  return (
    <section id="tours" className="bg-purple-dark px-6 py-24">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-gold border border-gold px-3 py-1 rounded-full mb-4">
          Tours
        </span>
        <h2 className="font-display text-gold text-[clamp(26px,3.5vw,40px)] font-bold mb-4">Walk the real Dublin</h2>
        <p className="text-cream text-[17px] max-w-[560px] mb-14">
          Every tour is small-group, guide-led, and built around the parts of Dublin that don&apos;t make it onto the tourist maps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {tours.map((tour) => (
            <TourCard key={tour.key} tour={tour} onViewDetails={() => setSelectedTour(tour)} />
          ))}
        </div>
      </div>

      {selectedTour && <TourModal tour={selectedTour} onClose={() => setSelectedTour(null)} />}
    </section>
  );
}