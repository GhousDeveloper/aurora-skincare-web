import React, { useState } from 'react';
import { Mail, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Newsletter: React.FC = () => {
  const { applyPromoCode, showToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubscribed(true);
    applyPromoCode('AURORA10');
    showToast('Subscribed Successfully!', 'Welcome to Aurora Skincare. 10% off coupon code AURORA10 applied.');
  };

  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Lavender-Pink Newsletter Panel matching Reference */}
        <div className="bg-[#FAF3FC] border border-[#EEE6F0] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-10 w-48 h-48 bg-[#F9E8F0] rounded-full blur-2xl opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-[#E8D4F2] rounded-full blur-2xl opacity-50 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left part: Envelope Icon + Headings */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              
              {/* Envelope Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-[#EEE6F0] shadow-sm flex items-center justify-center shrink-0 text-[#A65AC1]">
                <Mail className="w-7 h-7 stroke-[1.75]" />
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold text-[#24202A] tracking-tight">
                  Stay Beautiful, Stay Updated
                </h3>
                <p className="text-xs sm:text-sm text-[#77717D] mt-1 leading-relaxed max-w-lg">
                  Subscribe to get 10% off your first order and exclusive offers straight to your inbox.
                </p>
              </div>

            </div>

            {/* Right part: Form Input + Button */}
            <div className="lg:col-span-5">
              {!subscribed ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your email address"
                      aria-label="Email address for newsletter"
                      className="w-full px-4 py-3 sm:py-3.5 bg-white text-[#24202A] placeholder-[#77717D] text-xs sm:text-sm rounded-xl sm:rounded-2xl border border-[#EEE6F0] shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#A65AC1] focus:border-transparent transition-all"
                    />
                    {error && (
                      <span className="absolute -bottom-5 left-1 text-[11px] text-rose-500 font-medium">
                        {error}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 sm:py-3.5 bg-[#8E44AD] hover:bg-[#79358F] text-white text-xs sm:text-sm font-semibold rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#A65AC1]"
                  >
                    <span>Subscribe Now</span>
                  </button>
                </form>
              ) : (
                <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-emerald-200 shadow-xs flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#24202A]">Welcome to the Aurora Family!</h4>
                    <p className="text-[11px] text-[#77717D]">
                      Your 10% discount code <span className="font-mono font-bold text-[#79358F]">AURORA10</span> has been automatically activated for your checkout.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
