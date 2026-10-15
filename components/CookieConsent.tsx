"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Cookie consent banner, wired to Google Consent Mode.
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  const updateGoogleConsent = (analyticsGranted: boolean) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  useEffect(() => {
    const choice = localStorage.getItem("cookie-consent");
    if (!choice) {
      setVisible(true);
    } else {
      updateGoogleConsent(choice === "accepted");
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    updateGoogleConsent(true);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    updateGoogleConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] bg-purple-dark border-t border-gold px-6 py-5">
      <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-cream text-[14px] leading-[1.6] flex-1">
          We use essential cookies to run this site and, with your consent, analytics cookies to understand how visitors use it. See our{" "}
          <Link href="/cookies" className="text-gold underline">Cookie Policy</Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={decline} className="text-gold text-[14px] font-bold border border-gold px-5 py-2 rounded-full hover:bg-gold hover:text-purple-dark transition-all duration-200">
            Decline
          </button>
          <button onClick={accept} className="text-purple-dark text-[14px] font-bold bg-gold px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}