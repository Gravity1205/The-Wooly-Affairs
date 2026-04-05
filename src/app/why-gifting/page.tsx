import Image from "next/image";
import Link from "next/link";
import { Gift, Sparkles, Building2, Briefcase, Snowflake, HeartHandshake } from "lucide-react";

export default function WhyGiftingPage() {
  return (
    <>
      <section className="bg-cream py-32 px-4 text-center border-b border-champagne/30">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-forest mb-6 max-w-4xl mx-auto leading-tight">
          A Gift Is Not Just a Thing.<br />It's a Feeling.
        </h1>
        <p className="text-xl font-light text-foreground/60 max-w-2xl mx-auto">
          In a world of emails and Slack messages, a physical gift cuts through the noise.
        </p>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
              <Image 
                src="/images/gifting_person.png" 
                alt="The science of gifting delight" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-forest/80 font-medium tracking-widest uppercase text-xs mb-4 block">The Science of Gifting</span>
              <h2 className="text-4xl font-serif text-forest mb-8">Connection Beyond The Screen</h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg font-light">
                <p>
                  A well-timed, beautifully curated gift has the power to transform a standard corporate transaction into a genuine human relationship. It communicates "I see you, and I value your partnership" in a way words rarely can.
                </p>
                <p>
                  Psychologically, receiving a physical item triggers oxytocin—the trust hormone. When employees or clients open a thoughtfully packaged hamper, they associate that warmth and value directly with your brand.
                </p>
                <p>
                  It's not about the monetary value of the objects inside; it's about the feeling of being acknowledged. Intentional gifting accelerates trust, fosters loyalty, and turns employees into ambassadors and clients into lifelong partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-forest text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-champagne leading-tight mb-8">
            "Companies that gift intentionally retain clients 2x longer and see 40% higher employee satisfaction scores."
          </p>
          <p className="text-cream/70 font-light tracking-wide uppercase text-sm">
            — Internal gifting research, 2024
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-forest mb-16">Occasions We Help You Celebrate</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: <Sparkles className="w-8 h-8" />, title: "Diwali & Festive Season" },
              { icon: <Gift className="w-8 h-8" />, title: "Baby Showers & New Arrivals" },
              { icon: <Building2 className="w-8 h-8" />, title: "Work Anniversaries" },
              { icon: <Briefcase className="w-8 h-8" />, title: "Client Onboarding" },
              { icon: <Snowflake className="w-8 h-8" />, title: "Winter Corporate Gifting" },
              { icon: <HeartHandshake className="w-8 h-8" />, title: "Weddings & Celebrations" }
            ].map((occ, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 hover:bg-white rounded-md transition-colors border border-transparent hover:border-champagne/30 shadow-sm hover:shadow-md cursor-default">
                <div className="w-16 h-16 rounded-full bg-forest/5 flex items-center justify-center text-forest mb-4">
                  {occ.icon}
                </div>
                <h3 className="font-serif text-xl text-forest text-center">{occ.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-center px-4 border-t border-cream/10">
        <h2 className="text-4xl font-serif text-cream mb-8">Ready to make someone feel truly seen?</h2>
        <Link href="/collections" className="inline-block bg-champagne text-forest font-semibold px-10 py-4 rounded-sm hover:bg-white transition-all shadow-md text-lg">
          Explore Our Collections
        </Link>
      </section>
    </>
  );
}
