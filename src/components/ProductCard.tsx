import React from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, isInWishlist, toggleWishlist, setSelectedProduct } = useShop();
  const wishlisted = isInWishlist(product.id);

  const getBadgeStyle = (variant?: string) => {
    switch (variant) {
      case 'bestseller':
        return 'bg-[#F06292] text-white';
      case 'new':
        return 'bg-[#4CAF50] text-white';
      case 'discount':
        return 'bg-[#FF9800] text-white';
      case 'popular':
        return 'bg-[#A65AC1] text-white';
      default:
        return 'bg-[#A65AC1] text-white';
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-[#EEE6F0] p-3 sm:p-3.5 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      
      {/* Top action row: Badge & Wishlist button */}
      <div className="flex items-center justify-between w-full h-6 mb-1 z-10">
        {product.badge ? (
          <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md tracking-wide shadow-xs ${getBadgeStyle(product.badge.variant)}`}>
            {product.badge.text}
          </span>
        ) : (
          <span />
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
            wishlisted 
              ? 'text-[#F06292] bg-[#FDF2F8]' 
              : 'text-[#77717D] hover:text-[#A65AC1] hover:bg-[#FAF3FC]'
          }`}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Product Image Area */}
      <div 
        onClick={() => setSelectedProduct(product)}
        className="relative w-full aspect-square rounded-xl overflow-hidden bg-radial from-[#FAF3FC] to-white flex items-center justify-center cursor-pointer mb-3"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-1 transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick View Overlay on hover */}
        <div className="absolute inset-0 bg-[#24202A]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(product);
            }}
            className="px-3 py-1 bg-white/95 text-[#24202A] text-[11px] font-semibold rounded-full shadow-md hover:bg-white flex items-center gap-1.5 transition-transform"
          >
            <Eye className="w-3.5 h-3.5 text-[#A65AC1]" />
            Quick View
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 justify-between">
        <div 
          onClick={() => setSelectedProduct(product)}
          className="cursor-pointer"
        >
          {/* Title */}
          <h3 className="text-xs sm:text-[13px] font-semibold text-[#24202A] group-hover:text-[#A65AC1] transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>

          {/* Rating Stars & Count */}
          <div className="flex items-center gap-1 text-[11px] text-[#77717D] mb-3">
            <div className="flex items-center text-[#A65AC1]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-current text-[#A65AC1]'
                      : 'text-[#EEE6F0]'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] text-[#77717D]">
              ({product.reviewsCount > 999 ? `${(product.reviewsCount / 1000).toFixed(1)}k` : product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Price & Add to Cart Bottom Bar */}
        <div className="flex items-center justify-between pt-1 border-t border-[#FAF3FC]">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-bold text-[#24202A] tabular-nums">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-[#77717D] line-through tabular-nums">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="w-8 h-8 rounded-full bg-[#A65AC1] hover:bg-[#79358F] text-white flex items-center justify-center shadow-xs hover:shadow-md hover:scale-105 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A65AC1] focus:ring-offset-1"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
