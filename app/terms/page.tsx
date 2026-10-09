import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Retro Routes Experience",
  description: "Terms and conditions for booking and participating in The Retro Routes Experience Dublin.",
};


export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-purple-dark min-h-screen py-16 px-6">
        <div className="max-w-200 mx-auto">
          <Link href="/" className="text-gold text-[14px] hover:underline">← Back to home</Link>

          <h1 className="font-display text-gold text-[clamp(28px,4vw,40px)] mt-6 mb-2">Terms &amp; Conditions</h1>
          <p className="text-cream/70 text-[13px] mb-10">Last updated: 17 August 2026</p>

          <div className="text-cream text-[15px] leading-[1.8] space-y-6">
            <section><h2 className="text-gold text-[18px] font-bold mb-2">1. Introduction</h2><p>These Terms and Conditions govern bookings and participation in experiences provided by The Retro Routes Experience Dublin ("The Retro Routes Experience", "we", "us" or "our"). By making a direct booking with us, you agree to these Terms and Conditions. Where a booking is made through a third-party platform, the terms and conditions of that platform may also apply. Nothing in these Terms and Conditions is intended to exclude or restrict any statutory consumer rights that cannot legally be excluded.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">2. The Retro Routes Experience</h2><p>The Retro Routes Experience is a guided vintage shopping walking tour in Dublin, designed around Dublin&apos;s vintage, retro and second-hand shopping culture. It may include visits to carefully selected vintage clothing shops, second-hand stores, retro boutiques, record shops, antique and curiosity shops, independent retailers, and other locations relevant to Dublin&apos;s vintage and cultural heritage. The experience combines shopping, discovery, local knowledge, history and storytelling.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">3. Itinerary</h2><p>The itinerary may vary from time to time. Individual shops and locations may be unavailable because of opening hours, stock, holidays, special events, temporary closure or circumstances outside our control. Where reasonably possible, an alternative stop of a similar nature will be provided.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">4. Booking Requests for Direct Bookings</h2><p>Direct bookings through The Retro Routes Experience website or booking system may operate on a booking-request basis. Customers may select a preferred date and time and submit a request. Submitting a booking request does not guarantee that the experience is available. We will review the requested date and confirm availability before payment is requested.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">5. Confirmation and Payment</h2><p>For direct bookings, a booking becomes confirmed when the requested date and time have been confirmed by The Retro Routes Experience, and the required payment has been successfully received. The applicable price and payment arrangements will be communicated to the customer before payment is required. Bookings made through third-party platforms may follow that platform&apos;s own confirmation and payment process.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">6. Prices</h2><p>The applicable price will be displayed or communicated before the customer is required to pay. Prices may differ between direct bookings and third-party platforms because of commissions, platform fees, promotions or other commercial arrangements.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">7. Duration</h2><p>The Retro Routes Experience normally lasts approximately 3 to 4 hours. The actual duration may reasonably vary depending on the group, walking pace, shop visits, circumstances on the day and other operational considerations.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">8. Language</h2><p>The standard language of the experience is English unless another language is expressly stated on the relevant booking platform or agreed with the customer in advance.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">9. Meeting Point</h2><p>The customer will receive the applicable meeting-point information as part of their booking confirmation. Customers are responsible for arriving at the correct meeting point at the stated time.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">10. Late Arrival</h2><p>Customers should arrive at least 10 minutes before the scheduled start time. Late arrival may result in the customer missing part of the experience. Where a customer arrives after the tour has departed, we cannot guarantee that the customer will be able to join the group.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">11. No-Shows</h2><p>A customer who fails to attend without prior notice may be treated as a no-show. No-shows may not qualify for a refund, subject to the cancellation terms applicable to the booking and any statutory consumer rights.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">12. Customer Conduct</h2><p>Customers must behave respectfully towards the guide, other guests, shop staff and members of the public. We may end a customer&apos;s participation where their behaviour is seriously disruptive, threatening, abusive, discriminatory or creates a genuine safety concern. Where participation is ended for these reasons, the customer&apos;s statutory rights remain unaffected.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">13. Walking and Accessibility</h2><p>The Retro Routes Experience is a walking tour through Dublin City Centre. The route may involve pavements, uneven surfaces, steps or stairs, road crossings, crowded areas, periods of standing, and variable weather conditions. Customers should wear appropriate footwear and clothing. Customers are encouraged to contact us before booking if they have accessibility or mobility requirements so that we can discuss whether reasonable arrangements can be made.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">14. Insurance</h2><p>The experience price does not include personal travel insurance. We recommend that customers ensure they have appropriate personal insurance cover where relevant.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">15. Third-Party Retailers</h2><p>The experience includes visits to independently operated businesses. The Retro Routes Experience does not control the stock, prices, opening hours, product quality, returns policies or individual trading practices of those businesses. Any purchase made from a retailer is a separate transaction between the customer and that retailer.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">16. Personal Belongings</h2><p>Customers are responsible for their personal belongings during the experience. Nothing in these Terms excludes liability that cannot legally be excluded.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">17. Photography</h2><p>Photography or video may occasionally take place during the experience. Where identifiable customer photographs or video are intended to be used for promotional purposes, appropriate permission will be obtained where required.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">18. Safety</h2><p>Customers must follow reasonable instructions given by the guide where necessary for the safety of the group. Customers should inform the guide of any relevant practical or accessibility requirements before the experience.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">19. Changes to the Experience</h2><p>We reserve the right to make reasonable changes to the itinerary where necessary because of shop closures, changes to opening hours, public events, weather, safety concerns, transport or access issues, government restrictions, or other circumstances outside our reasonable control. Where reasonably possible, an alternative arrangement will be provided.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">20. Cancellation by The Retro Routes Experience</h2><p>If we need to cancel a confirmed direct booking, we will contact the customer as soon as reasonably possible. Where the experience cannot be provided, we will offer an appropriate alternative date or refund in accordance with the applicable booking arrangements. For third-party bookings, the platform&apos;s cancellation and refund procedures may apply.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">21. Third-Party Booking Platforms</h2><p>The Retro Routes Experience may be advertised and sold through third-party platforms, including GetYourGuide and Viator/Tripadvisor. A booking made through a third-party platform may be subject to the platform&apos;s terms and conditions, cancellation policy, payment procedures, refund procedures, and any mandatory requirements applicable to that platform. The cancellation policy displayed to the customer on the platform at the time of booking will apply to that third-party booking, subject to applicable law. Customers who book through a third-party platform should normally use that platform for cancellations, amendments and refund requests.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">22. Liability</h2><p>Nothing in these Terms and Conditions excludes or limits liability where doing so would be unlawful. In particular, nothing in these Terms excludes statutory consumer rights or liability for death or personal injury caused by negligence where such liability cannot legally be excluded.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">23. Circumstances Beyond Our Reasonable Control</h2><p>We will not be responsible for circumstances genuinely outside our reasonable control that prevent or materially affect the experience. Where such circumstances occur, we will communicate with affected customers and take reasonable steps to offer an appropriate alternative or refund where applicable.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">24. Complaints</h2><p>Customers are encouraged to contact us as soon as possible if they experience a problem. Complaints should be sent to retroroutestours@gmail.com. We will make reasonable efforts to investigate and resolve complaints fairly.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">25. Consumer Rights</h2><p>These Terms and Conditions do not affect any statutory consumer rights available under Irish or applicable EU law.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">26. Governing Law</h2><p>These Terms and Conditions are governed by the laws of Ireland, subject to any mandatory consumer protection rights that apply.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">27. Contact</h2><p>The Retro Routes Experience Dublin, Dublin, Ireland<br/>Email: retroroutestours@gmail.com<br/>Telephone: +353 83 063 1121</p></section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}