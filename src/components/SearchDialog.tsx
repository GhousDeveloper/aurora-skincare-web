import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, CATEGORIES } from '../data/products';

export const SearchDialog: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setSelectedProduct, addToCart } = useShop();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim() === ''
    ? []
    : PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.keyIngredients.some((ing) => ing.toLowerCase().includes(q))
        );
      });

  const popularSearches = ['Radiance Serum', 'Hydra Gel Cream', 'Vitamin C', 'SPF 50', 'Matte Lipstick'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-start justify-center pt-20 animate-in fade-in duration-150">
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#EEE6F0] overflow-hidden z-10">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#EEE6F0] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#A65AC1] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skincare, serums, lipsticks, ingredients..."
            className="flex-1 text-sm sm:text-base text-[#24202A] placeholder-[#77717D] bg-transparent focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#77717D] hover:text-[#24202A] p-1 text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 rounded-full bg-[#FAF3FC] hover:bg-[#EEE6F0] flex items-center justify-center text-[#77717D] hover:text-[#24202A]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div>
              <div className="mb-6">
                <span className="text-[11px] font-bold text-[#77717D] uppercase tracking-wider block mb-2.5">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term, i) => (
                    <button
                      key={i}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 bg-[#FAF3FC] hover:bg-[#EEE6F0] text-[#79358F] text-xs font-semibold rounded-full border border-[#EEE6F0] transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#77717D] uppercase tracking-wider block mb-2.5">
                  Explore by Category
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setQuery(cat.name)}
                      className="p-2.5 rounded-xl border border-[#EEE6F0] hover:border-[#A65AC1] hover:bg-[#FAF3FC] text-left transition-colors flex items-center gap-2.5 group"
                    >
                      <img src={cat.image} alt={cat.name} className="w-7 h-7 rounded-full object-cover" />
                      <span className="text-xs font-semibold text-[#24202A] group-hover:text-[#A65AC1]">
                        {cat.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-xs text-[#77717D]">
                No products found matching "<span className="text-[#24202A] font-semibold">{query}</span>".
              </p>
              <p className="text-[11px] text-[#77717D] mt-1">
                Try searching for "serum", "cream", "lipstick", or "SPF".
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-[#77717D] uppercase tracking-wider block">
                Found {filteredProducts.length} Product{filteredProducts.length > 1 ? 's' : ''}
              </span>
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    setSelectedProduct(p);
                    setIsSearchOpen(false);
                  }}
                  className="flex items-center justify-between p-3 rounded-2xl border border-[#EEE6F0] hover:border-[#A65AC1] hover:bg-[#FAF3FC]/50 cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 rounded-xl object-contain bg-white p-1 border border-[#EEE6F0]"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#24202A] group-hover:text-[#A65AC1] transition-colors">
                        {p.name}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] text-[#77717D]">
                        <span>{p.categoryLabel}</span>
                        <span>·</span>
                        <span>{p.volumeOrSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#24202A] tabular-nums">
                      ${p.price.toFixed(2)}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(p);
                      }}
                      className="w-8 h-8 rounded-full bg-[#A65AC1] hover:bg-[#79358F] text-white flex items-center justify-center shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
