import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';

interface HeaderProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateSection }) => {
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen, setIsAuthOpen, setSelectedCategory } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setIsCategoryMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setIsCategoryMenuOpen(false);
    setIsMobileMenuOpen(false);
    const el = document.getElementById('best-sellers') || document.getElementById('shop-by-category');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xs py-3' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Lockup */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A65AC1] rounded-lg p-1"
          >
            {/* Botanical Floral Icon */}
            <div className="text-[#A65AC1] transition-transform group-hover:scale-105">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
                <path d="M12 13v9" />
                <path d="M8 17a4 4 0 0 0 8 0" />
                <path d="M5 8a7 7 0 0 0 7 7 7 7 0 0 0 7-7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#24202A] uppercase leading-none">
                AURORA
              </span>
              <span className="text-[9px] tracking-[0.32em] text-[#77717D] uppercase font-medium mt-1">
                — SKINCARE —
              </span>
            </div>
          </button>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleNavClick('hero')}
              className="relative text-sm font-semibold text-[#A65AC1] hover:text-[#79358F] transition-colors py-1 focus:outline-none"
            >
              Home
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A65AC1] rounded-full" />
            </button>

            <button
              onClick={() => handleNavClick('best-sellers')}
              className="text-sm font-medium text-[#24202A] hover:text-[#A65AC1] transition-colors py-1 focus:outline-none"
            >
              Shop
            </button>

            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCategoryMenuOpen(true)}
              onMouseLeave={() => setIsCategoryMenuOpen(false)}
            >
              <button
                onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                className="flex items-center gap-1 text-sm font-medium text-[#24202A] hover:text-[#A65AC1] transition-colors py-1 focus:outline-none"
              >
                Categories
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCategoryMenuOpen ? 'rotate-180 text-[#A65AC1]' : ''}`} />
              </button>

              {isCategoryMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-[#EEE6F0] p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 pb-2 mb-1 border-b border-[#FAF3FC] flex items-center justify-between text-xs text-[#77717D]">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">Shop by Department</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#A65AC1]" />
                  </div>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className="w-full flex items-center gap-3 px-3 py-2 text-left rounded-xl hover:bg-[#FAF3FC] transition-colors group"
                    >
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="w-8 h-8 rounded-full object-cover border border-[#EEE6F0] group-hover:scale-105 transition-transform" 
                      />
                      <div>
                        <div className="text-xs font-semibold text-[#24202A] group-hover:text-[#A65AC1]">{cat.name}</div>
                        <div className="text-[10px] text-[#77717D]">{cat.itemCount} items</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('trust-bar')}
              className="text-sm font-medium text-[#24202A] hover:text-[#A65AC1] transition-colors py-1 focus:outline-none"
            >
              Brands
            </button>

            <button
              onClick={() => handleNavClick('promo-banner')}
              className="text-sm font-medium text-[#24202A] hover:text-[#A65AC1] transition-colors py-1 focus:outline-none"
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('aurora-glow')}
              className="text-sm font-medium text-[#24202A] hover:text-[#A65AC1] transition-colors py-1 focus:outline-none"
            >
              Blog
            </button>

            <button
              onClick={() => handleNavClick('footer')}
              className="text-sm font-medium text-[#24202A] hover:text-[#A65AC1] transition-colors py-1 focus:outline-none"
            >
              Contact
            </button>
          </nav>

          {/* Action Icons Right */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search products"
              className="p-2 text-[#24202A] hover:text-[#A65AC1] transition-colors rounded-full hover:bg-white/80 focus:outline-none"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Account */}
            <button
              onClick={() => setIsAuthOpen(true)}
              aria-label="User account"
              className="p-2 text-[#24202A] hover:text-[#A65AC1] transition-colors rounded-full hover:bg-white/80 focus:outline-none"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`Wishlist (${wishlistCount} items)`}
              className="relative p-2 text-[#24202A] hover:text-[#A65AC1] transition-colors rounded-full hover:bg-white/80 focus:outline-none"
            >
              <Heart className="w-5 h-5 stroke-[1.8]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-0.5 w-4 h-4 bg-[#F06292] text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#FAF3FC]">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag / Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping bag (${cartCount} items)`}
              className="relative p-2 text-[#24202A] hover:text-[#A65AC1] transition-colors rounded-full hover:bg-white/80 focus:outline-none"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0.5 w-4 h-4 bg-[#E91E63] text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#FAF3FC]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-[#24202A] hover:text-[#A65AC1] transition-colors rounded-lg focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#EEE6F0] bg-white rounded-2xl p-4 shadow-xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-left py-2 px-3 rounded-lg font-semibold text-[#A65AC1] bg-[#FAF3FC]"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('best-sellers')}
                className="text-left py-2 px-3 rounded-lg font-medium text-[#24202A] hover:bg-[#FAF3FC]"
              >
                Shop All Products
              </button>
              
              <div className="py-2 px-3">
                <span className="text-xs uppercase tracking-wider text-[#77717D] font-semibold block mb-2">Categories</span>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleSelectCategory(c.id)}
                      className="text-left text-xs text-[#24202A] py-1.5 px-2 rounded-md hover:bg-[#FAF3FC] flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#A65AC1]" />
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNavClick('trust-bar')}
                className="text-left py-2 px-3 rounded-lg font-medium text-[#24202A] hover:bg-[#FAF3FC]"
              >
                Brands & Certifications
              </button>
              <button
                onClick={() => handleNavClick('promo-banner')}
                className="text-left py-2 px-3 rounded-lg font-medium text-[#24202A] hover:bg-[#FAF3FC]"
              >
                Special Offers & About Us
              </button>
              <button
                onClick={() => handleNavClick('aurora-glow')}
                className="text-left py-2 px-3 rounded-lg font-medium text-[#24202A] hover:bg-[#FAF3FC]"
              >
                #AuroraGlow Gallery & Blog
              </button>
              <button
                onClick={() => handleNavClick('footer')}
                className="text-left py-2 px-3 rounded-lg font-medium text-[#24202A] hover:bg-[#FAF3FC]"
              >
                Contact & Support
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
