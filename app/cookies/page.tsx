import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | The Retro Routes Experience",
  description: "How The Retro Routes Experience Dublin uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="bg-purple-dark min-h-screen py-16 px-6">
        <div className="max-w-200 mx-auto">
          <Link href="/" className="text-gold text-[14px] hover:underline">← Back to home</Link>

          <h1 className="font-display text-gold text-[clamp(28px,4vw,40px)] mt-6 mb-2">Cookie Policy</h1>
          <p className="text-cream/70 text-[13px] mb-10">Last updated: 17 August 2026</p>

          <div className="text-cream text-[15px] leading-[1.8] space-y-6">
            <section><h2 className="text-gold text-[18px] font-bold mb-2">1. Introduction</h2><p>This Cookie Policy explains how The Retro Routes Experience Dublin ("we", "us" or "our") uses cookies and similar technologies on our website. It should be read together with our Privacy Policy. By using our website, you agree to the use of essential cookies. Non-essential cookies are only used with your consent.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">2. What Are Cookies?</h2><p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to improve the browsing experience, and to provide information to the site owner. Cookies may be "session" cookies, which are deleted when you close your browser, or "persistent" cookies, which remain until they expire or are deleted.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">3. How We Use Cookies</h2><p>We use a small number of cookies to operate the website and, where you consent, to understand how visitors use the site so that we can improve it. We do not use cookies to collect sensitive personal information, and we do not sell information collected through cookies.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">4. Essential Cookies</h2><p>Essential cookies are necessary for the website to function correctly. These may include cookies that remember your language preference and cookies that record your cookie-consent choice so that we do not ask you again on every visit. Essential cookies do not require consent, as the website cannot function properly without them.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">5. Analytics Cookies</h2><p>With your consent, we may use analytics cookies, such as those provided by Google Analytics, to understand how visitors use our website, for example, which pages are viewed and how long visitors stay. This helps us improve the website and the experience we offer. Analytics cookies are only set after you have given consent through our cookie banner. If you do not consent, these cookies will not be used.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">6. Third-Party Cookies</h2><p>Some pages may include content from third parties, such as embedded maps or links to third-party booking platforms and social media. These third parties may set their own cookies, over which we have no control. We recommend reviewing the cookie and privacy policies of any third-party service you interact with.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">7. Managing Your Consent</h2><p>When you first visit our website, you will be asked whether you accept non-essential cookies. You can choose to accept or decline. You can change your choice at any time by adjusting your browser settings to clear or block cookies, or by using any cookie-preference option provided on our website. Please note that disabling certain cookies may affect how the website functions.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">8. Changes to This Cookie Policy</h2><p>We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal or regulatory reasons. The latest version will be published on our website with the date on which it was last updated.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">9. Contact</h2><p>For any questions about our use of cookies, please contact:<br/>The Retro Routes Experience Dublin, Dublin, Ireland<br/>Email: retroroutestours@gmail.com<br/>Telephone: +353 83 063 1121</p></section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}