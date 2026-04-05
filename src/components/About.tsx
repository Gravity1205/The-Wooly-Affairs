export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-forest/80 font-medium tracking-widest uppercase text-xs mb-4 block">Our Story</span>
            <h2 className="text-4xl font-serif text-forest mb-6">Elevating the Art of Gifting</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              At The Woolly Affairs, we believe that a gift is more than just an item—it is a statement of appreciation, a builder of relationships, and a reflection of your brand's unique identity.
            </p>
            <p className="text-foreground/80 leading-relaxed flex flex-col gap-4">
              <span>We specialize in curating bespoke, premium gift hampers tailored for corporate events, client appreciation, and festive celebrations. Each box is meticulously assembled to evoke warmth, luxury, and thoughtfulness.</span>
              <span>Our mission is to help you leave a lasting impression, one unforgettable gift at a time.</span>
            </p>
          </div>
          <div className="relative h-[400px] bg-champagne rounded-sm overflow-hidden flex items-center justify-center p-8">
            <div className="border border-forest/20 w-full h-full p-6 flex flex-col items-center justify-center text-center">
              <h3 className="font-serif text-3xl text-forest mb-4">Crafting Memories</h3>
              <p className="text-forest/70 max-w-sm">Every ribbon tied and every curated item selected is designed to tell your brand's story with elegance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
