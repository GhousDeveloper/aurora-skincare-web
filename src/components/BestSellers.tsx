import React, { useState } from 'react';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const BestSellers: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useShop();
  const [activeTab, setActiveTab] = useState<'all' | 'bestsellers' | 'new' | 'sale'>('bestsellers');

  // Filter products based on selected tab and selected category
  const filteredProducts = PRODUCTS.filter((product) => {
    // Category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    // Tab filter
    if (activeTab === 'bestsellers') return product.isBestseller || product.badge?.variant === 'bestseller';
    if (activeTab === 'new') return product.badge?.variant === 'new';
    if (activeTab === 'sale') return !!product.originalPrice || product.badge?.variant === 'discount';
    return true;
  });

  // Guarantee showing the 5 reference products when on default tab
  const displayProducts = filteredProducts.length >= 5 ? filteredProducts.slice(0, 5) : PRODUCTS.slice(0, 5);

  return (
    <section id="best-sellers" className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#24202A] tracking-tight">
                Best Sellers
              </h2>
              {selectedCategory !== 'all' && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF3FC] text-[#79358F] border border-[#EEE6F0]">
                  Filtered: {selectedCategory}
                </span>
              )}
            </div>
            <div className="w-10 h-0.5 bg-[#A65AC1] rounded-full mt-1.5" />
          </div>

          {/* Right Link */}
          <div className="flex items-center gap-4">
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-xs text-[#77717D] hover:text-[#A65AC1] underline underline-offset-2"
              >
                Clear filter
              </button>
            )}

            <button
              onClick={() => {
                setActiveTab('all');
                setSelectedCategory('all');
              }}
              className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#A65AC1] hover:text-[#79358F] transition-colors cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 5 Product Cards Grid (Matching reference: 5 in 1 row on desktop, 2-3 on tablet/mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
