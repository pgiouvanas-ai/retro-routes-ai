import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | The Retro Routes Experience",
  description: "Cancellation and refund terms for The Retro Routes Experience Dublin.",
};

// Cancellation and refund policy page.
export default function CancellationPage() {
  return (
    <>
      <Header />
      <main className="bg-purple-dark min-h-screen py-16 px-6">
        <div className="max-w-200 mx-auto">
          <Link href="/" className="text-gold text-[14px] hover:underline">← Back to home</Link>

          <h1 className="font-display text-gold text-[clamp(28px,4vw,40px)] mt-6 mb-2">Cancellation &amp; Refund Policy</h1>
          <p className="text-cream/70 text-[13px] mb-10">Last updated: 17 August 2026</p>

          <div className="text-cream text-[15px] leading-[1.8] space-y-6">
            <section><h2 className="text-gold text-[18px] font-bold mb-2">1. Introduction</h2><p>This Cancellation &amp; Refund Policy explains how cancellations, amendments and refunds are handled for The Retro Routes Experience Dublin ("The Retro Routes Experience", "we", "us" or "our"). The applicable cancellation terms depend on whether the customer books directly with us or through a third-party booking platform. Nothing in this policy is intended to remove or restrict any statutory consumer rights.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">2. Direct Booking Requests</h2><p>For direct bookings, customers may initially select a preferred date and submit a booking request. A booking request is not a confirmed booking. No payment is required from the customer at the request stage unless expressly stated otherwise. We will check availability and contact the customer to confirm whether the requested experience can be provided.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">3. Confirmation of a Direct Booking</h2><p>Once availability has been confirmed, the customer will be provided with the applicable payment information. A direct booking is confirmed once the tour has been confirmed and the required payment has been successfully received.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">4. Cancelling an Unconfirmed Request</h2><p>A customer may withdraw an unconfirmed booking request at any time before the booking has been confirmed and payment has been made. No cancellation fee will apply to an unconfirmed request.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">5. Cancellation of a Confirmed Direct Booking</h2><p>For direct bookings, our standard cancellation policy is as follows. More than 24 hours before the scheduled start time: the customer may cancel and receive a full refund. Less than 24 hours before the scheduled start time: the booking may be non-refundable. However, we may consider requests to reschedule where circumstances reasonably allow.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">6. Exceptional Circumstances</h2><p>We understand that unexpected circumstances can occur. Customers experiencing serious illness, significant travel disruption or another genuine unforeseen circumstance should contact us as soon as possible. We may, at our discretion, offer a rescheduled date or partial/full refund depending on the circumstances. Any statutory rights remain unaffected.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">7. No-Shows</h2><p>If a customer does not attend the experience and has not contacted us beforehand, the booking may be treated as a no-show. A no-show will normally be non-refundable for direct bookings, subject to applicable law.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">8. Cancellation by The Retro Routes Experience</h2><p>If we cancel a confirmed direct booking and cannot provide a suitable alternative, the customer will be offered a refund of the amount paid for the cancelled experience. For bookings made through third-party platforms, the applicable platform&apos;s cancellation and refund procedures will apply.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">9. Third-Party Platform Bookings</h2><p>Customers may book The Retro Routes Experience through third-party platforms including GetYourGuide and Viator/Tripadvisor. For these bookings, the cancellation policy displayed on the relevant platform at the time of booking applies. This is important because different platforms may operate different cancellation policies. For example, Viator&apos;s current standard policy generally provides a full refund where a customer cancels at least 24 hours before the scheduled start time. Customers booking through a third-party platform should use that platform&apos;s cancellation procedure.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">10. Platform Policies Take Precedence for Platform Bookings</h2><p>Where a customer books through a third-party platform, the platform&apos;s applicable booking, cancellation and refund terms will govern that booking to the extent applicable. The Retro Routes Experience will comply with applicable platform requirements.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">11. Refunds</h2><p>For direct bookings, approved refunds will normally be returned using the original payment method. The time required for a refund to appear in a customer&apos;s account may depend on the relevant payment provider or financial institution. Where payment was processed by a third-party platform, the refund may need to be processed by that platform.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">12. Changes to a Booking</h2><p>Customers wishing to change the date of a direct booking should contact us as soon as possible. Requests to change a booking are subject to availability. For third-party bookings, customers should use the amendment process provided by the relevant platform.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">13. Changes to the Itinerary</h2><p>The Retro Routes Experience may need to make reasonable changes to the itinerary because of shop closures, opening hours, weather, safety issues, public events or other circumstances outside our reasonable control. Where reasonably possible, an alternative experience of a similar nature will be provided.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">14. Statutory Consumer Rights</h2><p>Irish consumer law provides protections for consumers who purchase services. For online purchases, the normal 14-day cooling-off right does not apply to certain categories, including leisure activities booked for a specific date or period. Customers should therefore refer to the cancellation terms applicable to their particular booking. Nothing in this policy limits a customer&apos;s statutory rights where a service is not provided as agreed or where another legal remedy applies.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">15. Contacting Us</h2><p>For cancellations or amendments to direct bookings, please contact: The Retro Routes Experience Dublin<br/>Email: retroroutestours@gmail.com<br/>Telephone: +353 83 063 1121<br/>Please provide your name, booking date and booking reference where available.</p></section>

            <section><h2 className="text-gold text-[18px] font-bold mb-2">16. Policy Changes</h2><p>We may update this Cancellation &amp; Refund Policy from time to time. The version applicable to a booking will be determined by the terms presented to the customer at the time of booking, subject to applicable law and any relevant third-party platform terms.</p></section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}