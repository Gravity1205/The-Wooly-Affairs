import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: "The Essentials",
      price: "₹999",
      bestFor: "Small teams, budget-conscious gifting",
      features: [
        "1 Curated Product",
        "Standard Packaging",
        "Handwritten Note",
        "Pan-India Delivery"
      ],
      ctaText: "Get Started",
      ctaLink: "/#enquire",
      popular: false
    },
    {
      name: "The Signature",
      price: "₹2,499",
      bestFor: "Client gifting, employee appreciation",
      features: [
        "3–4 Curated Products",
        "Premium Box Packaging",
        "Custom Brand Sleeve",
        "Handwritten Note",
        "Pan-India Delivery",
        "Basic Logo Branding"
      ],
      ctaText: "Enquire Now",
      ctaLink: "/#enquire",
      popular: true
    },
    {
      name: "The Elite",
      price: "₹4,999",
      bestFor: "CXO gifting, luxury events, high-value clients",
      features: [
        "5–7 Premium Products",
        "Rigid Box with Magnetic Closure",
        "Full Custom Branding",
        "Personalized Message Card",
        "Priority Delivery",
        "Dedicated Account Manager"
      ],
      ctaText: "Talk to Us",
      ctaLink: "/#enquire",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-forest/80 font-medium tracking-widest uppercase text-xs mb-4 block">Tailored For You</span>
          <h2 className="text-4xl font-serif text-forest mb-4">Our Gifting Packages</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Explore our fully customizable gifting tiers designed to meet the demands of any corporate occasion.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start lg:items-center">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-md bg-cream/30 border ${pkg.popular ? 'border-champagne bg-cream shadow-xl transform md:-translate-y-4' : 'border-champagne/30 hover:border-champagne/60 transition-colors'}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-forest text-cream text-xs font-semibold tracking-wider uppercase py-1.5 px-4 rounded-full">Most Popular</span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-forest mb-2">{pkg.name}</h3>
                <p className="text-foreground/70 text-sm h-10">{pkg.bestFor}</p>
                <div className="mt-4 flex items-baseline text-4xl font-serif text-forest">
                  Starting {pkg.price}
                  <span className="text-sm font-sans font-medium text-foreground/50 ml-2 tracking-normal">/ person</span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <Check className="w-5 h-5 text-champagne shrink-0 mr-3 mt-0.5" />
                      <span className="text-foreground/80 font-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={pkg.ctaLink}
                className={`w-full text-center py-3.5 rounded-sm font-medium transition-all ${pkg.popular ? 'bg-forest text-cream hover:bg-forest-light' : 'bg-champagne/20 text-forest hover:bg-champagne hover:text-forest border border-champagne'}`}
              >
                {pkg.ctaText}
              </Link>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-foreground/60 mt-12 font-light">
          * All packages available for bulk orders of 10+. Custom packages available on request.
        </p>
      </div>
    </section>
  );
}
