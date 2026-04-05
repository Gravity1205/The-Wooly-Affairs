import { Gift, Truck, Palette } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Palette className="w-8 h-8 md:w-10 md:h-10 text-cream" />,
      title: "Bespoke Branding",
      desc: "Custom sleeves, engraved items, and personalized notes that align perfectly with your corporate identity."
    },
    {
      icon: <Gift className="w-8 h-8 md:w-10 md:h-10 text-cream" />,
      title: "Premium Curation",
      desc: "We source only the finest gourmet treats, artisan goods, and luxury lifestyle products for our hampers."
    },
    {
       icon: <Truck className="w-8 h-8 md:w-10 md:h-10 text-cream" />,
      title: "Pan-India Delivery",
      desc: "Seamless logistics handling. We ensure your gifts reach every client and employee, beautifully intact."
    }
  ];

  return (
    <section className="py-20 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-cream/20">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-8 first:pt-0">
              <div className="mb-6 p-4 rounded-full bg-cream/10 border border-cream/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif mb-4">{item.title}</h3>
              <p className="text-cream/80 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
