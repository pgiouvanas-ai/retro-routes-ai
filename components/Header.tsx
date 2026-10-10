"use client";

import { useState } from "react";


import Image from "next/image";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#tours", label: "Tours" },
  { href: "/#private-hire", label: "Private Hire" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#find-us", label: "Contact" },
];


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-purple-dark border-b border-gold">
      <nav className="w-[92%] max-w-285 mx-auto flex items-center justify-between gap-5 py-2 min-h-30">
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


        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-cream text-sm font-semibold hover:text-gold transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-1.25 w-10 h-10 justify-center items-center"
        >
          <span className="block w-6 h-0.5 bg-gold" />
          <span className="block w-6 h-0.5 bg-gold" />
          <span className="block w-6 h-0.5 bg-gold" />
        </button>
      </nav>
      <ul className="md:hidden flex flex-col gap-1 px-6 pb-5 bg-purple-dark border-t border-gold">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-cream font-semibold hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
    </header>
  );
}