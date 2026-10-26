import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { setSelectedCategory, setIsSearchOpen } = useShop();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-white border-t border-[#EEE6F0] pt-12 sm:pt-16 pb-8 text-[#24202A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 pb-12 border-b border-[#FAF3FC]">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="text-[#A65AC1]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
                  <path d="M12 13v9" />
                  <path d="M8 17a4 4 0 0 0 8 0" />
                  <path d="M5 8a7 7 0 0 0 7 7 7 7 0 0 0 7-7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-[0.16em] text-[#24202A] uppercase leading-none">
                  AURORA
                </span>
                <span className="text-[8px] tracking-[0.3em] text-[#77717D] uppercase font-medium mt-0.5">
                  — SKINCARE —
                </span>
              </div>
            </div>

            <p className="text-xs text-[#77717D] leading-relaxed max-w-xs mb-5">
              Empowering your beauty with nature, science & care. Formulated without compromise for lasting radiance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#FAF3FC] hover:bg-[#A65AC1] text-[#79358F] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#FAF3FC] hover:bg-[#A65AC1] text-[#79358F] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full bg-[#FAF3FC] hover:bg-[#A65AC1] text-[#79358F] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                {/* TikTok icon */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.14 1.19 2.06 2.34 2.24 1.06.18 2.21-.19 2.87-.99.53-.61.8-1.42.8-2.23V.02z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#FAF3FC] hover:bg-[#A65AC1] text-[#79358F] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full bg-[#FAF3FC] hover:bg-[#A65AC1] text-[#79358F] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                {/* Pinterest icon */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.18c-.05-.98-.1-2.48.02-3.55.11-.96.72-6.17.72-6.17s-.18-.37-.18-.92c0-.86.5-1.5 1.12-1.5.53 0 .78.4.78.88 0 .53-.34 1.33-.52 2.07-.15.62.31 1.13.92 1.13 1.1 0 1.95-1.16 1.95-2.84 0-1.48-1.07-2.52-2.59-2.52-1.77 0-2.81 1.33-2.81 2.7 0 .54.21 1.11.47 1.42.05.06.06.12.04.18-.04.18-.14.58-.16.66-.03.11-.09.13-.21.08-.8-.37-1.3-1.53-1.3-2.47 0-2 1.46-3.85 4.2-3.85 2.21 0 3.92 1.57 3.92 3.68 0 2.19-1.38 3.96-3.3 3.96-.64 0-1.25-.33-1.46-.73l-.4 1.51c-.14.56-.53 1.25-.79 1.68A12 12 0 1 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-[#24202A] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#77717D]">
              <li>
                <button onClick={() => handleScrollTo('hero')} className="hover:text-[#A65AC1] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('best-sellers')} className="hover:text-[#A65AC1] transition-colors">
                  Shop
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('shop-by-category')} className="hover:text-[#A65AC1] transition-colors">
                  Categories
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('promo-banner')} className="hover:text-[#A65AC1] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('footer')} className="hover:text-[#A65AC1] transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xs font-bold text-[#24202A] uppercase tracking-wider mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs text-[#77717D]">
              <li>
                <a href="#track" onClick={(e) => { e.preventDefault(); alert('Order tracking: Enter your email or order ID in the account modal.'); }} className="hover:text-[#A65AC1] transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#shipping" onClick={(e) => { e.preventDefault(); handleScrollTo('promo-banner'); }} className="hover:text-[#A65AC1] transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#returns" onClick={(e) => { e.preventDefault(); handleScrollTo('promo-banner'); }} className="hover:text-[#A65AC1] transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => { e.preventDefault(); handleScrollTo('trust-bar'); }} className="hover:text-[#A65AC1] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#size" onClick={(e) => { e.preventDefault(); handleScrollTo('best-sellers'); }} className="hover:text-[#A65AC1] transition-colors">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xs font-bold text-[#24202A] uppercase tracking-wider mb-4">
              Information
            </h4>
            <ul className="space-y-2.5 text-xs text-[#77717D]">
              <li>
                <span className="hover:text-[#A65AC1] transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-[#A65AC1] transition-colors cursor-pointer">
                  Terms & Conditions
                </span>
              </li>
              <li>
                <span className="hover:text-[#A65AC1] transition-colors cursor-pointer">
                  Disclaimer
                </span>
              </li>
              <li>
                <button onClick={() => handleScrollTo('aurora-glow')} className="hover:text-[#A65AC1] transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <span className="hover:text-[#A65AC1] transition-colors cursor-pointer">
                  Sitemap
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xs font-bold text-[#24202A] uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-[#77717D]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#A65AC1] shrink-0 mt-0.5" />
                <span>123 Beauty Lane, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#A65AC1] shrink-0" />
                <a href="tel:+12345678900" className="hover:text-[#A65AC1] transition-colors">
                  +1 234 567 8900
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#A65AC1] shrink-0" />
                <a href="mailto:hello@auroraskincare.com" className="hover:text-[#A65AC1] transition-colors">
                  hello@auroraskincare.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#A65AC1] shrink-0" />
                <span>Mon - Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77717D]">
          <p>© 2024 Aurora Skincare. All Rights Reserved.</p>

          {/* Payment Badges matching reference */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-white border border-[#EEE6F0] rounded-md text-[11px] font-bold text-blue-800 shadow-2xs">
              VISA
            </span>
            <div className="px-2.5 py-1 bg-white border border-[#EEE6F0] rounded-md flex items-center gap-0.5 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block -mr-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            </div>
            <span className="px-2.5 py-1 bg-white border border-[#EEE6F0] rounded-md text-[11px] font-bold text-blue-600 italic shadow-2xs">
              PayPal
            </span>
            <span className="px-2.5 py-1 bg-white border border-[#EEE6F0] rounded-md text-[11px] font-semibold text-slate-800 shadow-2xs flex items-center gap-1">
              Pay
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
