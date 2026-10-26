import React, { useState } from 'react';
import { ArrowRight, Play, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const HeroSection: React.FC = () => {
  const { setSelectedProduct, setIsCartOpen } = useShop();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const handleShopNow = () => {
    const el = document.getElementById('best-sellers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreMore = () => {
    setIsPlayingVideo(true);
  };

  return (
    <section id="hero" className="relative pt-4 pb-12 md:py-16 overflow-hidden">
      {/* Soft atmospheric gradient glow behind hero */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F9E8F0] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#E8D4F2] rounded-full blur-3xl opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            
            {/* Editorial Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[68px] leading-[1.08] text-[#24202A] tracking-tight font-normal mb-5 text-balance">
              Beauty That<br />
              <span className="text-[#A65AC1] font-semibold italic">Defines</span> You
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#77717D] leading-relaxed max-w-md mb-8 font-normal">
              Premium skincare & beauty products for healthy, radiant and glowing skin.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={handleShopNow}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#A65AC1] hover:bg-[#79358F] text-white text-sm font-semibold rounded-full shadow-md shadow-[#A65AC1]/20 hover:shadow-lg hover:shadow-[#A65AC1]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A65AC1] focus:ring-offset-2"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </button>

              <button
                onClick={handleExploreMore}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white/90 hover:bg-white text-[#24202A] hover:text-[#79358F] border border-[#A65AC1]/40 hover:border-[#A65AC1] text-sm font-semibold rounded-full shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A65AC1] focus:ring-offset-2"
              >
                <span>Explore More</span>
                <div className="w-6 h-6 rounded-full bg-[#A65AC1]/10 flex items-center justify-center text-[#A65AC1]">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
              </button>
            </div>

            {/* Social Proof & Rating Strip */}
            <div className="flex items-center gap-3.5 pt-2">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-2.5 overflow-hidden p-0.5">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                  alt="Reviewer Camille"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  onError={(e) => {
                    // Fallback to local crop
                    (e.target as HTMLImageElement).src = '/images/hero_avatars.png';
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Reviewer Elena"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                  alt="Reviewer Sophia"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80"
                  alt="Reviewer Chloe"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                />
              </div>

              {/* Rating Text & Purple Stars */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#24202A] tracking-tight">
                    4.9/5
                  </span>
                  <span className="text-xs text-[#77717D]">
                    (2.5k+ Reviews)
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-[#A65AC1] mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current text-[#A65AC1]" />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column — Visual Composition */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
            
            {/* Main Visual Image matching Reference */}
            <div className="relative w-full max-w-[560px] lg:max-w-none rounded-3xl overflow-hidden shadow-xl shadow-[#A65AC1]/10 bg-linear-to-tr from-[#FAF3FC] via-white to-[#F9E8F0] p-1 sm:p-2 border border-[#EEE6F0]/80 group">
              <img
                src="/images/hero_model_products.png"
                alt="Aurora Skincare campaign featuring natural glowing skin and radiance serums"
                className="w-full h-auto object-contain rounded-2xl transform transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Interactive Quick Hotspots for featured products in hero */}
              <button
                onClick={() => setSelectedProduct(PRODUCTS[0])}
                title="View Radiance Night Serum"
                className="absolute bottom-6 right-24 sm:right-32 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-md text-[11px] font-semibold text-[#79358F] border border-[#EEE6F0] hover:scale-105 transition-all hidden sm:flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-[#A65AC1]" />
                <span>Glow Serum · $28.99</span>
              </button>

              <button
                onClick={() => setSelectedProduct(PRODUCTS[1])}
                title="View Hydra Glow Gel Cream"
                className="absolute bottom-4 right-4 sm:right-6 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-md text-[11px] font-semibold text-[#79358F] border border-[#EEE6F0] hover:scale-105 transition-all hidden sm:flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-[#A65AC1]" />
                <span>Hydra Cream · $24.99</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Video Modal if user clicks Explore More */}
      {isPlayingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-[#EEE6F0]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FAF3FC] flex items-center justify-center text-[#A65AC1]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#24202A]">The Aurora Radiance Ritual</h3>
                  <p className="text-xs text-[#77717D]">Pure botanical extracts meets cellular science</p>
                </div>
              </div>
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-[#FAF3FC] aspect-video flex flex-col items-center justify-center p-6 text-center border border-[#EEE6F0]">
              <img
                src="/images/hero_model_portrait.png"
                alt="Aurora Ritual preview"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#A65AC1] text-white flex items-center justify-center mx-auto mb-3 shadow-lg animate-pulse">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#24202A] mb-1">Morning & Evening Ritual</h4>
                <p className="text-xs text-[#77717D] max-w-xs mx-auto">
                  Watch our clinical esthetician guide you through lymphatic sculpting with the Radiance Night Serum and Hydra Gel Cream.
                </p>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="px-4 py-2 text-xs font-semibold text-[#77717D] hover:text-[#24202A]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsPlayingVideo(false);
                  handleShopNow();
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#A65AC1] hover:bg-[#79358F] rounded-full shadow-xs"
              >
                Shop The Ritual
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
