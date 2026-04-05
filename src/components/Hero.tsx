import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0 bg-forest">
        <Image
          src="/images/hero_banner.png"
          alt="Premium Corporate Gifting hampers"
          fill
          className="object-cover object-center brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 to-transparent mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <span className="text-champagne font-medium tracking-[0.2em] uppercase text-sm mb-6 block drop-shadow-md">
          Corporate & Event Gifting
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-cream mb-6 leading-tight drop-shadow-lg">
          Curated Warmth, <br /> Delivered with Elegance.
        </h1>
        <p className="text-cream/95 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Elevate your corporate relationships with luxurious, bespoke gift hampers that leave a lasting impression of warmth and sophistication.
        </p>
        <Link 
          href="#collections"
          className="inline-block bg-champagne text-forest font-semibold px-8 py-4 rounded-sm hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
        >
          Explore Collections
        </Link>
      </div>
    </section>
  );
}
