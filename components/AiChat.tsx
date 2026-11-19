"use client";

import { useState } from "react";

// Floating AI assistant button and chat panel.
export default function AiChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-300 w-[90%] max-w-95 h-125 bg-purple-dark border border-gold rounded-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gold">
            <span className="font-display text-gold text-lg">Ask Albot</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="text-gold text-2xl leading-none">×</button>
          </div>
          <div className="flex-1 p-5 text-cream text-sm overflow-y-auto">
            Hi, I&apos;m Albot. Ask me anything about our tours, meeting points, or Dublin.
          </div>
          <div className="p-4 border-t border-gold">
            <input
              type="text"
              placeholder="Type your question..."
              className="w-full bg-purple-light text-cream border border-gold rounded px-3 py-2"
            />
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Open Albot assistant"
        className="fixed bottom-6 right-6 z-300 bg-gold text-purple-dark w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7.03 3 3 6.58 3 11c0 2.1.92 4 2.43 5.42L4 21l4.1-1.35A10.3 10.3 0 0 0 12 20c4.97 0 9-3.58 9-8s-4.03-9-9-9z" />
        </svg>
      </button>
    </>
  );
}