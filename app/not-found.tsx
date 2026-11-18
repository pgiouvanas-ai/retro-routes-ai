import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-purple-dark flex items-start text-center pt-20 px-6 overflow-hidden">
      <img
        src="/images/Retro_Routes_Duck.gif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        <h1 className="font-display text-gold text-5xl mb-4">404</h1>
        <h2 className="font-display text-cream text-xl mb-2">Page not found</h2>
        <p className="text-cream text-XL mb-8">LOST IN DUBLIN</p>
        <Link
          href="/"
          className="mt-6 inline-block border-2 border-gold text-gold font-bold px-8 py-3 rounded-md hover:bg-gold hover:text-purple-dark transition-all"
        >
          Back to Retro Routes Dublin
        </Link>
        </div>
    </main>
  );
}