import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, ShieldCheck, Check, Sparkles, Droplets, Clock } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { REVIEWS } from '../data/products';

export const ProductDetailModal: React.FC = () => {
  const { selectedProduct, setSelectedProduct, addToCart, isInWishlist, toggleWishlist } = useShop();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients' | 'howtouse' | 'reviews'>('details');

  if (!selectedProduct) return null;

  const wishlisted = isInWishlist(selectedProduct.id);

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div
        onClick={() => setSelectedProduct(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-[#EEE6F0] overflow-hidden z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-sm flex items-center justify-center text-[#24202A] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Product Showcase */}
          <div className="md:col-span-5 bg-radial from-[#FAF3FC] to-[#F9E8F0] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#EEE6F0] relative">
            {selectedProduct.badge && (
              <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold rounded-md bg-[#A65AC1] text-white shadow-xs">
                {selectedProduct.badge.text}
              </span>
            )}
            
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-48 sm:w-56 h-auto max-h-72 object-contain drop-shadow-md py-4"
            />

            <div className="flex items-center gap-2 mt-2 px-3 py-1 bg-white/80 backdrop-blur-xs rounded-full border border-[#EEE6F0] text-[11px] font-medium text-[#77717D]">
              <Sparkles className="w-3.5 h-3.5 text-[#A65AC1]" />
              <span>{selectedProduct.volumeOrSize}</span>
            </div>
          </div>

          {/* Right Column: Details & Purchasing */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-[#A65AC1] font-bold">
                  {selectedProduct.categoryLabel}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-[#77717D]">
                  <div className="flex text-[#A65AC1]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(selectedProduct.rating)
                            ? 'fill-current text-[#A65AC1]'
                            : 'text-[#EEE6F0]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-[#24202A]">{selectedProduct.rating}</span>
                  <span>({selectedProduct.reviewsCount})</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#24202A] tracking-tight leading-tight mb-1">
                {selectedProduct.name}
              </h2>
              {selectedProduct.tagline && (
                <p className="text-xs text-[#77717D] italic mb-4">
                  {selectedProduct.tagline}
                </p>
              )}

              {/* Price Row */}
              <div className="flex items-baseline gap-3 pb-4 mb-4 border-b border-[#FAF3FC]">
                <span className="text-2xl font-bold text-[#24202A] tabular-nums">
                  ${selectedProduct.price.toFixed(2)}
                </span>
                {selectedProduct.originalPrice && (
                  <>
                    <span className="text-sm text-[#77717D] line-through tabular-nums">
                      ${selectedProduct.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Save ${(selectedProduct.originalPrice - selectedProduct.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-[#EEE6F0] mb-4 gap-4 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'details' ? 'text-[#A65AC1]' : 'text-[#77717D] hover:text-[#24202A]'
                  }`}
                >
                  Overview
                  {activeTab === 'details' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A65AC1] rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'ingredients' ? 'text-[#A65AC1]' : 'text-[#77717D] hover:text-[#24202A]'
                  }`}
                >
                  Actives & Botanicals
                  {activeTab === 'ingredients' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A65AC1] rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('howtouse')}
                  className={`pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'howtouse' ? 'text-[#A65AC1]' : 'text-[#77717D] hover:text-[#24202A]'
                  }`}
                >
                  How to Use
                  {activeTab === 'howtouse' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A65AC1] rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'reviews' ? 'text-[#A65AC1]' : 'text-[#77717D] hover:text-[#24202A]'
                  }`}
                >
                  Reviews ({selectedProduct.reviewsCount})
                  {activeTab === 'reviews' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A65AC1] rounded-full" />
                  )}
                </button>
              </div>

              {/* Tab Contents */}
              <div className="min-h-[140px] text-xs text-[#24202A] leading-relaxed mb-6">
                {activeTab === 'details' && (
                  <div>
                    <p className="text-[#77717D] mb-3">{selectedProduct.description}</p>
                    <div className="space-y-1.5">
                      {selectedProduct.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <Check className="w-3.5 h-3.5 text-[#A65AC1] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'ingredients' && (
                  <div>
                    <p className="text-[#77717D] mb-3">
                      Clean clinical formulas certified 100% cruelty-free, paraben-free, and phthalate-free.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.keyIngredients.map((ing, i) => (
                        <span key={i} className="px-3 py-1 bg-[#FAF3FC] text-[#79358F] font-semibold rounded-lg border border-[#EEE6F0]">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'howtouse' && (
                  <div className="bg-[#FAF3FC] p-4 rounded-2xl border border-[#EEE6F0]">
                    <div className="flex items-center gap-2 mb-2 font-bold text-[#24202A]">
                      <Clock className="w-4 h-4 text-[#A65AC1]" />
                      <span>Application Ritual</span>
                    </div>
                    <p className="text-[#77717D]">{selectedProduct.howToUse}</p>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-3">
                    {REVIEWS.map((r) => (
                      <div key={r.id} className="p-3 bg-[#FAF3FC]/60 rounded-xl border border-[#EEE6F0]">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#24202A]">{r.author}</span>
                            {r.verified && (
                              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold">
                                Verified
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-[#77717D]">{r.date}</span>
                        </div>
                        <div className="flex text-[#A65AC1] mb-1">
                          {[...Array(r.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <h5 className="font-semibold text-xs text-[#24202A]">{r.title}</h5>
                        <p className="text-[11px] text-[#77717D] mt-0.5">{r.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-4 border-t border-[#EEE6F0] space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#EEE6F0] bg-[#FAF3FC] rounded-full p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#24202A] hover:bg-slate-100 font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-xs tabular-nums text-[#24202A]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#24202A] hover:bg-slate-100 font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 bg-[#A65AC1] hover:bg-[#79358F] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag · ${(selectedProduct.price * quantity).toFixed(2)}</span>
                </button>

                {/* Wishlist toggle */}
                <button
                  onClick={() => toggleWishlist(selectedProduct)}
                  aria-label="Wishlist toggle"
                  className={`w-11 h-11 rounded-full border border-[#EEE6F0] flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                    wishlisted ? 'bg-pink-50 text-[#F06292] border-pink-200' : 'bg-white text-[#77717D] hover:text-[#A65AC1]'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${wishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#77717D]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Dermatologist Approved
                </span>
                <span>·</span>
                <span>Free Shipping over $50</span>
                <span>·</span>
                <span>30-Day Guarantee</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
