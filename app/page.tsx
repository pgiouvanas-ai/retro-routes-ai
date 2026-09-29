import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
  <Header />
    <main>
      <Hero />
      <About />
    </main>
    <Footer />
    </>
  );
}
