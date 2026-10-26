import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    appliedDiscount,
    applyPromoCode,
    removePromoCode,
    clearCart,
    showToast
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 50.0;
  const rawTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const progressToFreeShipping = Math.min(100, (rawTotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - rawTotal);
  const shippingFee = rawTotal >= freeShippingThreshold || rawTotal === 0 ? 0 : 4.99;
  const finalTotal = cartSubtotal + shippingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyPromoCode(promoInput);
    if (res.success) {
      setPromoInput('');
    } else {
      showToast('Invalid Coupon', res.message, 'error');
    }
  };

  const handleCompleteOrder = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderConfirmed(true);
      clearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#EEE6F0]">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#EEE6F0] flex items-center justify-between bg-[#FAF3FC]/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#A65AC1]" />
              <h3 className="font-serif text-lg font-bold text-[#24202A]">Shopping Bag</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAF3FC] text-[#79358F] font-bold border border-[#EEE6F0]">
                {cart.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setOrderConfirmed(false);
              }}
              className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center text-[#77717D] hover:text-[#24202A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          {cart.length > 0 && !orderConfirmed && (
            <div className="bg-[#FAF3FC] px-5 py-3 border-b border-[#EEE6F0]">
              <div className="flex items-center justify-between text-xs mb-1.5">
                {amountToFreeShipping > 0 ? (
                  <span className="text-[#24202A]">
                    Add <strong className="text-[#79358F]">${amountToFreeShipping.toFixed(2)}</strong> more for <strong>FREE Shipping</strong>
                  </span>
                ) : (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> You qualified for FREE Shipping!
                  </span>
                )}
                <span className="text-[10px] text-[#77717D] font-medium">{Math.round(progressToFreeShipping)}%</span>
              </div>
              <div className="w-full bg-[#EEE6F0] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#A65AC1] h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressToFreeShipping}%` }}
                />
              </div>
            </div>
          )}

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {orderConfirmed ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#24202A] mb-2">Thank You For Your Order!</h4>
                <p className="text-xs text-[#77717D] max-w-xs mb-6">
                  Order <strong>#AUR-{Math.floor(100000 + Math.random() * 900000)}</strong> has been placed. We have sent a confirmation email with tracking details.
                </p>
                <div className="bg-[#FAF3FC] p-4 rounded-2xl w-full text-left text-xs mb-6 border border-[#EEE6F0]">
                  <div className="flex justify-between py-1 border-b border-[#EEE6F0]">
                    <span className="text-[#77717D]">Status</span>
                    <span className="font-semibold text-emerald-600">Processing</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#EEE6F0]">
                    <span className="text-[#77717D]">Estimated Delivery</span>
                    <span className="font-semibold text-[#24202A]">2-4 Business Days</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#77717D]">Shipping to</span>
                    <span className="font-semibold text-[#24202A]">123 Beauty Lane, Los Angeles</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setOrderConfirmed(false);
                    setIsCartOpen(false);
                  }}
                  className="px-6 py-2.5 bg-[#A65AC1] hover:bg-[#79358F] text-white text-xs font-semibold rounded-full shadow-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#FAF3FC] flex items-center justify-center text-[#A65AC1] mb-3">
                  <ShoppingBag className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#24202A] mb-1">Your bag is empty</h4>
                <p className="text-xs text-[#77717D] max-w-xs mb-6">
                  Discover our best-selling botanical serums, glow creams, and SPF shields.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#A65AC1] hover:bg-[#79358F] text-white text-xs font-semibold rounded-full shadow-xs"
                >
                  Explore Best Sellers
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
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
                            {item.product.volumeOrSize}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label="Remove item"
                          className="text-[#77717D] hover:text-rose-500 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-[#EEE6F0] bg-white rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#77717D] hover:text-[#24202A]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-semibold tabular-nums text-[#24202A]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#77717D] hover:text-[#24202A]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-xs font-bold text-[#24202A] tabular-nums">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-[#77717D] absolute left-3 top-3" />
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        placeholder="Promo code (e.g. GLOW30, AURORA10)"
                        className="w-full pl-8 pr-3 py-2 bg-[#FAF3FC] border border-[#EEE6F0] text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-[#A65AC1]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-[#24202A] hover:bg-[#79358F] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </form>

                {appliedDiscount && (
                  <div className="flex items-center justify-between px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800">
                    <span className="font-semibold">Code {appliedDiscount.code} ({appliedDiscount.percent}% off)</span>
                    <button
                      onClick={removePromoCode}
                      className="text-[11px] underline text-emerald-700 hover:text-emerald-900"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cart.length > 0 && !orderConfirmed && (
            <div className="p-4 sm:p-5 border-t border-[#EEE6F0] bg-white space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#77717D]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#24202A] tabular-nums">${rawTotal.toFixed(2)}</span>
                </div>

                {appliedDiscount && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Promo Discount ({appliedDiscount.percent}%)</span>
                    <span className="font-medium tabular-nums">-${(rawTotal - cartSubtotal).toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#77717D]">
                  <span>Estimated Shipping</span>
                  <span className="font-medium text-[#24202A]">
                    {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-bold text-[#24202A] pt-2 border-t border-[#EEE6F0]">
                  <span>Estimated Total</span>
                  <span className="tabular-nums text-base text-[#79358F]">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCompleteOrder}
                disabled={isCheckingOut}
                className="w-full py-3.5 bg-[#A65AC1] hover:bg-[#79358F] text-white text-xs sm:text-sm font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isCheckingOut ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#77717D] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit SSL Encrypted Checkout · 30-Day Guarantee</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
