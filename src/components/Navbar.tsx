"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-champagne/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="font-serif text-2xl font-bold text-forest" onClick={closeMenu}>
              The Woolly Affairs
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-wider font-medium">About</Link>
            <Link href="/collections" className="text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-wider font-medium">Collections</Link>
            <Link href="/why-gifting" className="text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-wider font-medium">Why Gifting</Link>
            <Link href="/#pricing" className="text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-wider font-medium">Pricing</Link>
            <Link href="/#testimonials" className="text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-wider font-medium">Testimonials</Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/#enquire" className="bg-forest text-cream px-6 py-2.5 rounded-sm hover:bg-forest-light transition-colors font-medium text-sm tracking-wide">
              Enquire Now
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-forest hover:text-burgundy focus:outline-none p-2 mt-1">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-cream border-b border-champagne/30 shadow-2xl">
          <div className="px-4 pt-4 pb-8 space-y-3 flex flex-col">
            <Link href="/#about" onClick={closeMenu} className="block py-2 text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-widest font-medium border-b border-champagne/10">About</Link>
            <Link href="/collections" onClick={closeMenu} className="block py-2 text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-widest font-medium border-b border-champagne/10">Collections</Link>
            <Link href="/why-gifting" onClick={closeMenu} className="block py-2 text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-widest font-medium border-b border-champagne/10">Why Gifting</Link>
            <Link href="/#pricing" onClick={closeMenu} className="block py-2 text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-widest font-medium border-b border-champagne/10">Pricing</Link>
            <Link href="/#testimonials" onClick={closeMenu} className="block py-2 text-foreground/80 hover:text-burgundy transition-colors text-sm uppercase tracking-widest font-medium border-b border-champagne/10">Testimonials</Link>
            <div className="pt-4">
              <Link href="/#enquire" onClick={closeMenu} className="block w-full text-center bg-forest text-cream px-6 py-3.5 rounded-sm hover:bg-forest-light transition-colors font-semibold text-sm tracking-widest uppercase shadow-md">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
