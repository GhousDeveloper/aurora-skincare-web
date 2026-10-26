import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useShop } from '../context/ShopContext';

export const CategorySection: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useShop();

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(selectedCategory === catId ? 'all' : catId);
    const el = document.getElementById('best-sellers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewAll = () => {
    setSelectedCategory('all');
    const el = document.getElementById('best-sellers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="shop-by-category" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row: title and view all link */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#24202A] tracking-tight">
              Shop by Category
            </h2>
            <div className="w-10 h-0.5 bg-[#A65AC1] rounded-full mt-1.5" />
          </div>

          <button
            onClick={handleViewAll}
            className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#A65AC1] hover:text-[#79358F] transition-colors cursor-pointer"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Circular Categories in 1 row on desktop, 3 columns on tablet, 2-3 on mobile */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
              >
                {/* Circular image frame with pastel background */}
                <div className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1.5 sm:p-2 transition-all duration-300 ${
                  isSelected 
                    ? 'ring-3 ring-[#A65AC1] shadow-lg shadow-[#A65AC1]/20 scale-105' 
                    : 'hover:ring-2 hover:ring-[#A65AC1]/50 hover:shadow-md'
                }`}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-radial from-[#FAF3FC] to-[#F9E8F0] border border-[#EEE6F0] flex items-center justify-center">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Category label */}
                <span className={`mt-3 text-xs sm:text-sm font-semibold transition-colors ${
                  isSelected ? 'text-[#79358F]' : 'text-[#24202A] group-hover:text-[#A65AC1]'
                }`}>
                  {category.name}
                </span>
                <span className="text-[10px] text-[#77717D] mt-0.5 hidden sm:block">
                  {category.itemCount} items
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
