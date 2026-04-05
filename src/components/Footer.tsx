import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-6 text-champagne">The Woolly Affairs</h3>
            <p className="text-cream/80 max-w-sm mb-6 leading-relaxed font-light">
              Elevating corporate relationships through curated, memorable gifting experiences that speak volumes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-champagne hover:text-forest transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-champagne hover:text-forest transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-champagne">Quick Links</h4>
            <ul className="space-y-4 font-light text-cream/80">
              <li><Link href="#about" className="hover:text-champagne transition-colors">About Us</Link></li>
              <li><Link href="#collections" className="hover:text-champagne transition-colors">Collections</Link></li>
              <li><Link href="#testimonials" className="hover:text-champagne transition-colors">Testimonials</Link></li>
              <li><Link href="#enquire" className="hover:text-champagne transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-champagne">Get in Touch</h4>
            <ul className="space-y-4 font-light text-cream/80">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-champagne shrink-0" />
                <span>hello@thewoollyaffairs.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-champagne shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-champagne shrink-0" />
                <span>123 Gifting Boulevard,<br />Mumbai, MH 400001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-light text-cream/60">
          <p>&copy; {new Date().getFullYear()} The Woolly Affairs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-champagne transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-champagne transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
