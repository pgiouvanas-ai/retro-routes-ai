import Image from "next/image";

// Site header with logo and name.
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-purple-dark border-b border-gold">
      <nav className="w-[92%] max-w-285 mx-auto flex items-center justify-between gap-5 py-2 min-h-[120px]">
        <div className="flex items-center gap-3">
          <Image
            src="/images/retro_logo_new.png"
            alt="Retro Routes Logo"
            width={160}
            height={160}
            className="object-contain"
            priority
          />
          <span className="font-display italic font-bold text-cream text-[clamp(16px,2vw,22px)] tracking-wide">
            The Retro Routes Experience
          </span>
        </div>
      </nav>
    </header>
  );
}