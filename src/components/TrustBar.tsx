import React from 'react';
import { Leaf, FlaskConical, Droplets, HeartHandshake, ShieldCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const benefits = [
    {
      title: 'Natural Ingredients',
      subtitle: 'Safe & Organic',
      icon: (
        <svg className="w-5 h-5 text-[#A65AC1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      )
    },
    {
      title: 'Clinically Tested',
      subtitle: 'Dermatologist Approved',
      icon: (
        <svg className="w-5 h-5 text-[#A65AC1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31L4.15 20.31a1.5 1.5 0 0 0 1.25 2.19h13.2a1.5 1.5 0 0 0 1.25-2.19L14 9.31V2" />
          <path d="M8.5 2h7" />
          <path d="M7 16h10" />
        </svg>
      )
    },
    {
      title: 'Paraben Free',
      subtitle: 'No Harmful Chemicals',
      icon: (
        <svg className="w-5 h-5 text-[#A65AC1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
          <path d="M12 17v-4" />
        </svg>
      )
    },
    {
      title: 'Cruelty Free',
      subtitle: 'Not Tested on Animals',
      icon: (
        <svg className="w-5 h-5 text-[#A65AC1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4 4 4 0 0 1 4-4h.5A5.5 5.5 0 0 1 14 8.5V7a2 2 0 1 1 4 0v1.5a5.5 5.5 0 0 1 .5 9.5z" />
          <path d="M15 13v.01" />
          <path d="M11 13v.01" />
        </svg>
      )
    },
    {
      title: 'Trusted Quality',
      subtitle: 'Premium Quality Products',
      icon: (
        <svg className="w-5 h-5 text-[#A65AC1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="trust-bar" className="relative -mt-4 mb-14 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm shadow-[#A65AC1]/5 border border-[#EEE6F0] p-4 sm:p-6 transition-all hover:shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y md:divide-y-0 lg:divide-x divide-[#FAF3FC]">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-3.5 ${
                  index !== 0 ? 'lg:pl-6' : ''
                } ${index > 1 ? 'pt-4 md:pt-0' : ''}`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF3FC] flex items-center justify-center shrink-0 border border-[#EEE6F0]/60">
                  {benefit.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#24202A] leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-[11px] text-[#77717D] leading-tight mt-0.5">
                    {benefit.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
