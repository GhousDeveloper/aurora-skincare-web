import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { CategorySection } from './components/CategorySection';
import { BestSellers } from './components/BestSellers';
import { PromotionalBanner } from './components/PromotionalBanner';
import { SocialGallery } from './components/SocialGallery';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchDialog } from './components/SearchDialog';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';

export default function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-[#FAF3FC] text-[#24202A] flex flex-col selection:bg-[#A65AC1]/20 selection:text-[#79358F]">
        
        {/* Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1">
          <HeroSection />
          <TrustBar />
          <CategorySection />
          <BestSellers />
          <PromotionalBanner />
          <SocialGallery />
          <Newsletter />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Drawers & Modals */}
        <CartDrawer />
        <WishlistDrawer />
        <ProductDetailModal />
        <SearchDialog />
        <AuthModal />
        <Toast />

      </div>
    </ShopProvider>
  );
}
