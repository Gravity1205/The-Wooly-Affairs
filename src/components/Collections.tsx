import Image from "next/image";

const collections = [
  {
    id: 1,
    title: "The Executive Hamper",
    desc: "A luxurious selection of artisan coffee, gourmet chocolates, and elegant stationery. Perfect for client onboarding and VIPs.",
    image: "/images/hamper_premium.png"
  },
  {
    id: 2,
    title: "The Festive Exclusive",
    desc: "Celebrate the season with rich, warm tones, premium treats, and a champagne gold touch that radiates celebration.",
    image: "/images/gift_festive.png"
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-forest/80 font-medium tracking-widest uppercase text-xs mb-4 block">Curated Selections</span>
          <h2 className="text-4xl font-serif text-forest">Featured Collections</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {collections.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative w-full h-[450px] overflow-hidden rounded-sm mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h3 className="text-2xl font-serif text-forest mb-3 group-hover:text-burgundy transition-colors">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">{item.desc}</p>
              <button className="text-sm font-semibold text-forest uppercase tracking-wider border-b border-forest pb-1 hover:text-burgundy hover:border-burgundy transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
