import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import PrivateHire from "@/components/PrivateHire";
import Tours from "@/components/Tours";
import BookingBar from "@/components/BookingBar";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
  <Header />
    <main>
      <Hero />
      <BookingBar />
      <About />
      <Tours />
      <PrivateHire />
      <Reviews />
    </main>
    <Footer />
    </>
  );
}
