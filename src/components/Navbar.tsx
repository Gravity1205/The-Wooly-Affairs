import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-champagne/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="font-serif text-2xl font-bold text-forest">
              The Woolly Affairs
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-wider font-medium">About</Link>
            <Link href="#collections" className="text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-wider font-medium">Collections</Link>
            <Link href="#testimonials" className="text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-wider font-medium">Testimonials</Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="#enquire" className="bg-forest text-cream px-6 py-2.5 rounded-sm hover:bg-forest-light transition-colors font-medium text-sm tracking-wide">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
