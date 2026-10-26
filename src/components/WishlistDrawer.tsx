import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    showToast
  } = useShop();

  if (!isWishlistOpen) return null;

  const handleMoveAllToCart = () => {
    wishlist.forEach((item) => {
      addToCart(item.product);
    });
    showToast('Moved All to Bag', `${wishlist.length} saved products added to your bag.`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#EEE6F0]">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#EEE6F0] flex items-center justify-between bg-[#FAF3FC]/50">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#F06292] fill-current" />
              <h3 className="font-serif text-lg font-bold text-[#24202A]">My Wishlist</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAF3FC] text-[#79358F] font-bold border border-[#EEE6F0]">
                {wishlist.length}
              </span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center text-[#77717D] hover:text-[#24202A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {wishlist.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#FAF3FC] flex items-center justify-center text-[#F06292] mb-3">
                  <Heart className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#24202A] mb-1">Your wishlist is empty</h4>
                <p className="text-xs text-[#77717D] max-w-xs mb-6">
                  Save your favorite botanical beauty products by tapping the heart icon on any product.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2.5 bg-[#A65AC1] hover:bg-[#79358F] text-white text-xs font-semibold rounded-full shadow-xs"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3.5 p-3 rounded-2xl border border-[#EEE6F0] bg-[#FAF3FC]/30 hover:bg-[#FAF3FC]/60 transition-colors"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-contain bg-white p-1 border border-[#EEE6F0]"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-xs font-bold text-[#24202A] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] text-[#77717D]">
                            {item.product.categoryLabel}
                          </span>
                        </div>
                        <button
                          onClick={() => toggleWishlist(item.product)}
                          aria-label="Remove from wishlist"
                          className="text-[#77717D] hover:text-rose-500 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs font-bold text-[#24202A] tabular-nums">
                          ${item.product.price.toFixed(2)}
                        </span>

                        <button
                          onClick={() => {
                            addToCart(item.product);
                            toggleWishlist(item.product);
                          }}
                          className="px-3 py-1 bg-[#A65AC1] hover:bg-[#79358F] text-white text-[11px] font-semibold rounded-full flex items-center gap-1 shadow-2xs hover:scale-105 transition-all"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Move to Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {wishlist.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#EEE6F0] bg-white">
              <button
                onClick={handleMoveAllToCart}
                className="w-full py-3 bg-[#24202A] hover:bg-[#79358F] text-white text-xs font-semibold rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Move All to Shopping Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
