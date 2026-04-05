import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import WhyChooseUs from "@/components/WhyChooseUs";
import Enquire from "@/components/Enquire";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <WhyChooseUs />
      <Enquire />
      <Footer />
    </main>
  );
}
