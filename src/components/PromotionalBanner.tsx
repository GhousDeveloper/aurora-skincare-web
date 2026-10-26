import React from 'react';
import { ArrowRight, Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const PromotionalBanner: React.FC = () => {
  const { applyPromoCode, setIsCartOpen } = useShop();

  const handleGrabOffer = () => {
    applyPromoCode('GLOW30');
    setIsCartOpen(true);
  };

  return (
    <section id="promo-banner" className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#8E44AD] via-[#9B59B6] to-[#C39BD3] text-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-[#A65AC1]/15 border border-[#EEE6F0]/20">
          
          {/* Subtle floral/bokeh light effects */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-60 h-60 bg-purple-900/20 rounded-full blur-xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Heading, Discount, CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white tracking-tight">
                    Glow More,<br />
                    Worry Less
                  </h2>
                  <p className="text-white/85 text-xs sm:text-sm mt-3 max-w-sm leading-relaxed">
                    Get up to 30% off on selected premium beauty products.
                  </p>
                </div>

                {/* Circular Badge: UP TO 30% OFF */}
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-md text-[#79358F] border-2 border-white flex flex-col items-center justify-center text-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider leading-none text-[#A65AC1]">
                    UP TO
                  </span>
                  <span className="text-sm sm:text-base font-black leading-tight">
                    30%
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider leading-none text-[#A65AC1]">
                    OFF
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-2">
                <button
                  onClick={handleGrabOffer}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white text-white hover:text-[#79358F] border border-white/40 hover:border-white text-xs sm:text-sm font-semibold rounded-full shadow-md backdrop-blur-sm transition-all duration-200 cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span>Grab The Offer</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </button>
              </div>

            </div>

            {/* Center Column: Skincare products arrangement matching reference */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative group max-w-xs sm:max-w-sm">
                <img
                  src="/images/promo_products.png"
                  alt="Aurora promotional skincare collection"
                  className="w-full h-auto object-contain drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: 3 Service Benefits matching reference */}
            <div className="lg:col-span-3 flex flex-col gap-4 lg:pl-4 lg:border-l lg:border-white/20">
              
              {/* Free Shipping */}
              <div className="flex items-center gap-3 bg-white/10 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-3 lg:p-0 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    Free Shipping
                  </h4>
                  <p className="text-[11px] text-white/80 leading-tight">
                    On Orders Over $50
                  </p>
                </div>
              </div>

              {/* Easy Returns */}
              <div className="flex items-center gap-3 bg-white/10 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-3 lg:p-0 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <RotateCcw className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    Easy Returns
                  </h4>
                  <p className="text-[11px] text-white/80 leading-tight">
                    30-Day Returns
                  </p>
                </div>
              </div>

              {/* Secure Payments */}
              <div className="flex items-center gap-3 bg-white/10 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-3 lg:p-0 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    Secure Payments
                  </h4>
                  <p className="text-[11px] text-white/80 leading-tight">
                    100% Safe Checkout
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
