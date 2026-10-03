import PrivateHireForm from "@/components/PrivateHireForm";


const offerings = [
  "Exclusive vintage & antique shopping experiences",
  "Corporate group tours & team building",
  "Family-friendly private tours",
  "LGBT+ friendly & welcoming experiences",
  "Fully customisable: bring your theme, we'll create the tour",
];


export default function PrivateHire() {
  return (
    <section id="private-hire" className="bg-purple-light px-6 py-24">
      <div className="max-w-275 mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-gold border border-gold px-3 py-1 rounded-full mb-4">
            Private Hire
          </span>
        <h2 className="font-display text-gold text-3xl mb-4">Your Dublin, your way</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-gold text-xl">Exclusive experiences crafted around you</h3>
            <p className="text-cream">We create exceptional private experiences for our guests in Dublin, from luxury vintage shopping to corporate team-building days, family adventures, or a fully personalised tour built around your own theme.</p>
            <p className="text-cream">Every private tour comes with your own dedicated guide, a bespoke itinerary, and the insider access that turns a visit into a genuine Dublin experience.</p>
            <ul className="flex flex-col gap-2">
              {offerings.map((item) => (
                <li key={item} className="text-cream">✓ {item}</li>
              ))}
            </ul>
          </div>

          <PrivateHireForm />
        </div>
      </div>
    </section>
  );
}