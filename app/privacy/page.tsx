import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | The Retro Routes Experience",
  description: "How The Retro Routes Experience Dublin collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-purple-dark min-h-screen py-16 px-6">
        <div className="max-w-200 mx-auto">
          <Link href="/" className="text-gold text-[14px] hover:underline">← Back to home</Link>

          <h1 className="font-display text-gold text-[clamp(28px,4vw,40px)] mt-6 mb-2">Privacy Policy</h1>
          <p className="text-cream/70 text-[13px] mb-10">Last updated: 17 August 2026</p>

          <div className="text-cream text-[15px] leading-[1.8] space-y-6">
            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">1. Introduction</h2>
              <p>The Retro Routes Experience Dublin ("The Retro Routes Experience", "we", "us" or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store and protect personal information when you visit our website, contact us, request or book a Retro Routes Experience, or interact with us through third-party booking platforms and social media. We process personal data in accordance with applicable Irish and European data protection legislation, including the General Data Protection Regulation (GDPR) and the Data Protection Act 2018.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">2. Who We Are</h2>
              <p>The Retro Routes Experience Dublin, Dublin, Ireland.<br/>
              Email: retroroutestours@gmail.com<br/>
              Telephone: +353 83 063 1121<br/>
              Website: retroroutesdublin.com</p>
              <p>The Retro Routes Experience is responsible for personal information that we collect and process directly in connection with our services.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">3. Information We Collect</h2>
              <p>Depending on how you interact with us, we may collect: your name; email address; telephone or mobile number; booking information; requested tour date and time; number of guests; meeting and tour information; information you provide when contacting us; payment or transaction information where applicable; and information required to manage enquiries, bookings, cancellations or complaints. Where you book through a third-party platform, we may receive information from that platform that is necessary to provide your experience.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">4. How We Use Your Information</h2>
              <p>We may use your personal information to: respond to enquiries; process booking requests; check availability; confirm and manage bookings; communicate important information about your experience; process or facilitate payments and refunds; send booking confirmations and reminders; manage cancellations and changes; provide customer support; maintain business and financial records; comply with legal and regulatory obligations; and protect the security and legitimate interests of our business and customers.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">5. Legal Basis for Processing</h2>
              <p>Depending on the circumstances, we may process your personal information because: it is necessary to take steps at your request before entering into a contract; it is necessary to perform a contract with you; we have a legal obligation to process the information; we have a legitimate interest in operating and protecting our business; or you have provided consent where consent is required. Where we rely on consent, you may withdraw that consent at any time.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">6. Payment Information</h2>
              <p>Where payment is processed through a third-party booking or payment provider, the provider may process your payment information directly. We do not intentionally store complete payment-card details ourselves. Third-party payment providers may have their own privacy policies and terms.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">7. Third-Party Booking Platforms</h2>
              <p>The Retro Routes Experience may be available through third-party platforms including GetYourGuide, Viator/Tripadvisor and other booking or distribution platforms. Where you use a third-party platform, that platform may independently process your personal information in accordance with its own privacy policy. We may receive information from the platform that is necessary to provide your booking and communicate with you about the experience.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">8. Sharing Personal Information</h2>
              <p>We do not sell or rent customer personal information. We may share relevant information with service providers where reasonably necessary to operate the business, including booking system providers, payment providers, online travel and booking platforms, email and communication providers, professional advisers, and government, regulatory or law-enforcement authorities where legally required. Only information reasonably necessary for the relevant purpose will be shared.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">9. Data Retention</h2>
              <p>We retain personal information only for as long as reasonably necessary for the purpose for which it was collected. Certain information may need to be retained for longer where required for tax, accounting, legal, insurance or regulatory purposes. When information is no longer required, we will take reasonable steps to securely delete, anonymise or otherwise dispose of it.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">10. Children&apos;s Privacy</h2>
              <p>We do not knowingly collect personal data from children under 16, and our services are not directed at children. If we become aware that we have collected personal data from a child under 16 without appropriate consent, we will take reasonable steps to delete it.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">11. Your Data Protection Rights</h2>
              <p>Subject to applicable law, you may have the right to: request access to your personal data; request correction of inaccurate or incomplete information; request deletion of personal data in certain circumstances; request restriction of processing in certain circumstances; object to certain processing; withdraw consent where processing is based on consent; and exercise your right to data portability where applicable. To exercise a right, please contact us using the details below.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">12. Complaints</h2>
              <p>If you have concerns about how we process your personal information, please contact us first so that we have an opportunity to address your concern. You also have the right to make a complaint to the Irish Data Protection Commission.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">13. Cookies</h2>
              <p>Our website may use cookies or similar technologies to operate the website, remember preferences, understand website usage, improve website performance, and support analytics or marketing where applicable. Where legally required, consent will be requested before non-essential cookies are used.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">14. Third-Party Websites</h2>
              <p>Our website and social media channels may contain links to third-party websites. We are not responsible for the privacy practices or security of third-party websites. Customers should review the privacy policy of any third-party website they use.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">15. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes to our business, services, technology or legal obligations. The latest version will be published on our website and will show the date on which it was last updated.</p>
            </section>

            <section>
              <h2 className="text-gold text-[18px] font-bold mb-2">16. Contact</h2>
              <p>For privacy-related enquiries, please contact:<br/>
              The Retro Routes Experience Dublin, Dublin, Ireland<br/>
              Email: retroroutestours@gmail.com<br/>
              Telephone: +353 83 063 1121</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}