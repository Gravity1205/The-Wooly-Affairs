import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Enquire from "@/components/Enquire";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <WhyChooseUs />
      <Pricing />
      <Enquire />
    </>
  );
}
