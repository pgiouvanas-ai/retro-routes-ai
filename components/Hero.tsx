"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/Hero1.jpg", alt: "Retro Routes tour group in Dublin" },
  { src: "/images/private1.jpg", alt: "Private tour group enjoying Dublin" },
  { src: "/images/about2.jpg", alt: "Vintage treasures in a Dublin shop" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-40 text-center">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/90" />
        </div>
      ))}

      {/* Slider dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((slide, i) => (
          <button
            type="button"
            key={slide.src}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-gold" : "bg-cream"}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[860px]">
        <h1 className="font-display text-cream text-[clamp(36px,5vw,64px)] font-extrabold leading-tight mb-7">
          Dublin through
          <br />
          <em className="italic text-gold">different eyes</em>
        </h1>
        <p className="text-cream text-xl leading-relaxed max-w-[600px] mx-auto mb-13">
          Dublin isn&apos;t just the big sights. It&apos;s the vintage shops, Irish independent businesses, hidden corners and unexpected stories that make the city what it is. Shop local. Drink local. Experience Dublin like a local. Welcome to Retro Routes.
        </p>
        <div className="flex gap-5 justify-center flex-wrap">
          <a href="#tours" className="bg-gold text-purple-dark font-bold px-9 py-4 rounded-md transition-transform hover:-translate-y-0.5">
            Explore Our Tours
          </a>
          <a href="#private-hire" className="border-2 border-gold text-gold font-bold px-9 py-4 rounded-md transition-all hover:bg-gold hover:text-purple-dark hover:-translate-y-0.5">
            Private Hire
          </a>
        </div>
      </div>
    </section>
  );
}