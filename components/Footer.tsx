import Image from "next/image";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

// Footer
export default function Footer() {
  return (
    <footer className="bg-black pt-10 pb-6">
      <div className="w-[92%] max-w-285 mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] gap-10 items-start">

        {/* Logo + title */}
        <div className="flex flex-row items-center gap-4">
          <Image
            src="/images/retro-logo2.png"
            alt="Retro Routes Footer Logo"
            width={160}
            height={160}
            className="object-contain"
          />
          <div>
            <h3 className="font-display italic text-[22px] text-cream mb-2">The Retro Routes Experience</h3>
            <p className="text-[13px] text-gold tracking-widest uppercase">Ireland · Est. 2025</p>
          </div>
        </div>

        {/* Find us */}
        <div className="flex flex-col gap-4">
          <h4 id="find-us" className="text-[13px] font-bold text-gold tracking-widest uppercase">Find Us</h4>
          <a href="mailto:retroroutestours@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[14px] text-cream flex items-center gap-2">
            <FaEnvelope className="text-gold text-[16px]" /> retroroutestours@gmail.com
          </a>
          <a href="tel:+353830631121" className="text-[14px] text-cream flex items-center gap-2">
            <FaPhone className="text-gold text-[16px]" /> +353 83 063 1121
          </a>
          <div className="flex gap-3 mt-2">
            <a href="https://www.facebook.com/share/1cctxiQ7rb/" target="_blank" rel="noopener noreferrer"
              className="text-[24px] text-gold w-10 h-10 border border-gold rounded-full flex items-center justify-center hover:bg-gold transition-all duration-200 group">
              <FaFacebookF className="group-hover:text-black" />
            </a>
            <a href="https://www.instagram.com/retro_routes_tours?igsh=MWZ4Y2M2a3BmbDBxeg==" target="_blank" rel="noopener noreferrer"
              className="text-[24px] text-gold w-10 h-10 border border-gold rounded-full flex items-center justify-center hover:bg-gold transition-all duration-200 group">
              <FaInstagram className="group-hover:text-black" />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[13px] font-bold text-gold tracking-widest uppercase">Legal</h4>
          <a href="/privacy" className="text-[14px] text-cream hover:text-gold transition-colors duration-200">Privacy Policy</a>
          <a href="/terms" className="text-[14px] text-cream hover:text-gold transition-colors duration-200">Terms &amp; Conditions</a>
          <a href="/cancellation" className="text-[14px] text-cream hover:text-gold transition-colors duration-200">Cancellation Policy</a>
          <a href="/cookies" className="text-[14px] text-cream hover:text-gold transition-colors duration-200">Cookie Policy</a>
        </div>

      </div>

      <hr className="border-t border-gold w-4/5 mx-auto my-8" />
      <p className="text-[13px] text-cream text-center">© 2026 The Retro Routes Experience. All rights reserved.</p>
    </footer>
  );
}