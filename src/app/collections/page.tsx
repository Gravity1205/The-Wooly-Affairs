import Image from "next/image";
import Link from "next/link";

const catalog = [
  {
    id: 1,
    title: "Handcrafted Coasters (Set of 4)",
    desc: "Hand-painted coasters, perfect for client desks and gifting sets",
    price: "₹599 per set",
    image: "/images/coasters.png"
  },
  {
    id: 2,
    title: "Knitted Baby Cardigan",
    desc: "Delicate hand-knitted cardigans for newborn gifting and baby showers",
    price: "₹1,199 onwards",
    image: "/images/cardigan.png"
  },
  {
    id: 3,
    title: "Embroidered Cushion Cover",
    desc: "Bespoke embroidered cushion covers, customizable with logos or monograms",
    price: "₹799 per piece",
    image: "/images/cushion.png"
  },
  {
    id: 4,
    title: "Luxury Muffler / Scarf",
    desc: "Premium wool mufflers — a warm, thoughtful winter corporate gift",
    price: "₹1,499 onwards",
    image: "/images/scarf.png"
  },
  {
    id: 5,
    title: "The Executive Hamper",
    desc: "A luxurious selection of artisan coffee, gourmet chocolates, and elegant stationery.",
    price: "₹3,499 onwards",
    image: "/images/hamper_premium.png"
  },
  {
    id: 6,
    title: "The Festive Exclusive",
    desc: "Celebrate the season with rich, warm tones, premium treats, and a champagne gold touch.",
    price: "₹2,999 onwards",
    image: "/images/gift_festive.png"
  }
];

export default function CollectionsPage() {
  return (
    <>
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h1 className="text-5xl font-serif text-forest mb-4">Artisan Gifting Essentials</h1>
             <p className="text-foreground/70 text-lg max-w-2xl mx-auto">Explore our full catalog of premium standalone items and curated hampers. Every element is designed to elevate your brand's physical touchpoints.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {catalog.map((item) => (
              <div key={item.id} className="group flex flex-col bg-white rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full h-[300px] overflow-hidden bg-cream/50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif text-forest mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm mb-6 flex-1">{item.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-semibold text-[#B8860B]">{item.price}</span>
                    <Link href="/#enquire" className="text-xs font-semibold uppercase tracking-wider bg-forest/5 hover:bg-forest/10 text-forest px-4 py-2 rounded transition-colors">
                      Add to Enquiry
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own Hamper Guide */}
      <section className="py-24 bg-white border-t border-champagne/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-forest mb-12">Build Your Own Hamper</h2>
          <div className="grid md:grid-cols-3 gap-8 relative items-start">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-champagne/50"></div>
            
            <div className="flex flex-col items-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-cream border-2 border-champagne flex items-center justify-center text-3xl font-serif text-forest mb-6 shadow-sm">1</div>
              <h3 className="text-xl font-medium mb-3">Pick your products</h3>
              <p className="text-foreground/70 text-sm">Select from our catalog of artisan essentials to build the perfect gift basis.</p>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-cream border-2 border-champagne flex items-center justify-center text-3xl font-serif text-forest mb-6 shadow-sm">2</div>
              <h3 className="text-xl font-medium mb-3">Choose packaging & branding</h3>
              <p className="text-foreground/70 text-sm">Add custom sleeves, logo engravings, and personalized ribbons.</p>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-cream border-2 border-champagne flex items-center justify-center text-3xl font-serif text-forest mb-6 shadow-sm">3</div>
              <h3 className="text-xl font-medium mb-3">We deliver — beautifully</h3>
              <p className="text-foreground/70 text-sm">Reliable pan-India delivery ensuring the hamper arrives perfectly.</p>
            </div>
          </div>
          <div className="mt-16">
             <Link href="https://wa.me/919876543210" target="_blank" className="inline-block bg-forest text-cream font-medium px-8 py-4 rounded-sm hover:bg-forest-light transition-all shadow-md">
               Start Curating → Chat on WhatsApp
             </Link>
          </div>
        </div>
      </section>

      {/* Bulk Order Banner */}
      <section className="bg-forest py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6">Ordering for 50+ people? Get exclusive bulk pricing.</h2>
        <Link href="/#enquire" className="inline-block bg-champagne text-forest font-semibold px-8 py-4 rounded-sm hover:bg-white transition-all shadow-md">
          Request Bulk Quote
        </Link>
      </section>
    </>
  );
}
