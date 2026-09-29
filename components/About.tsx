import Image from "next/image";

// About section with philosophy text and a guide photo.
export default function About() {
  return (
    <section id="about" className="bg-purple-light px-6 py-24">
      <div className="max-w-275 mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-end">
        <div>
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-gold border border-gold px-3 py-1 rounded-full mb-4">
            About
          </span>
          <h2 className="font-display text-gold text-[clamp(26px,3.5vw,40px)] font-bold mb-4">
            Our Philosophy
          </h2>
          <div className="max-w-195 flex flex-col gap-4.5">
            <p className="text-[17px] leading-[1.8] text-cream">
              We believe the best way to experience a city is through the eyes of someone who truly loves it.
            </p>
            <p className="text-[17px] leading-[1.8] text-cream">
              Dublin is a city of layers, such as ancient folklore beneath cobbled streets, thriving vintage culture around every corner, festive magic in winter, and ghost stories that have been whispered for centuries. Most tourists only scratch the surface.
            </p>
            <p className="text-[17px] leading-[1.8] text-cream">
              At Retro Routes, we create intimate, handcrafted experiences that go deeper. Whether you&apos;re hunting for rare vintage finds, tracing the origins of Halloween back to its Celtic roots, or wandering through a city sparkling with Christmas lights, every tour is designed to feel like a day spent with a knowledgeable local friend, not a tour guide.
            </p>
            <p className="text-[17px] leading-[1.8] text-cream">
              Small groups. Real stories. Unforgettable days.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/images/guide1.jpg"
            alt="Retro Routes guide with happy tour guests in a Dublin café"
            width={1200}
            height={900}
            className="w-full h-auto rounded-xl border border-gold"
          />
        </div>
      </div>
    </section>
  );
}