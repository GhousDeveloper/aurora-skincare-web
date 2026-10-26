import React, { useState } from 'react';
import { Instagram, Heart, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SocialGallery: React.FC = () => {
  const { setSelectedProduct } = useShop();
  const [activePost, setActivePost] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      image: '/images/insta_1.png',
      handle: '@claire.glowing',
      likes: '1.4k',
      caption: 'The only morning serum that keeps my skin hydrated under London weather ✨ #AuroraGlow',
      taggedProduct: PRODUCTS[0]
    },
    {
      id: 2,
      image: '/images/insta_2.png',
      handle: '@vanity_rituals',
      likes: '982',
      caption: 'Sundays are for botanical pampering and fresh lavender blossoms 🌸',
      taggedProduct: PRODUCTS[1]
    },
    {
      id: 3,
      image: '/images/insta_3.png',
      handle: '@aurora.skin',
      likes: '2.1k',
      caption: 'Dewy glass skin in 3 simple steps: Cleanse, Tone, Glow Gel Cream 💜',
      taggedProduct: PRODUCTS[1]
    },
    {
      id: 4,
      image: '/images/insta_4.png',
      handle: '@cleanbeauty_journal',
      likes: '840',
      caption: 'Paraben-free and vegan certified formulas we can truly trust daily 🌿',
      taggedProduct: PRODUCTS[2]
    },
    {
      id: 5,
      image: '/images/insta_5.png',
      handle: '@sarah_wellness',
      likes: '1.8k',
      caption: 'Post-shower spa session with the Hydra facial ritual. That natural sheen is real!',
      taggedProduct: PRODUCTS[0]
    },
    {
      id: 6,
      image: '/images/insta_6.png',
      handle: '@aesthetic.skincare',
      likes: '1.2k',
      caption: 'Golden hour reflections with the pure peptide dropper 💧✨',
      taggedProduct: PRODUCTS[2]
    }
  ];

  return (
    <section id="aurora-glow" className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#24202A] tracking-tight">
              #AuroraGlow
            </h2>
            <div className="w-10 h-0.5 bg-[#A65AC1] rounded-full mt-1.5" />
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#A65AC1] hover:text-[#79358F] transition-colors"
          >
            <span>Follow Us @auroraskincare</span>
            <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
          </a>
        </div>

        {/* 6 Grid items in 1 row on desktop, 3 columns on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              onClick={() => setActivePost(idx)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#FAF3FC] border border-[#EEE6F0] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay with Instagram icon and Handle */}
              <div className="absolute inset-0 bg-[#24202A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white backdrop-blur-[2px]">
                <div className="flex items-center justify-between">
                  <Instagram className="w-4 h-4 text-white" />
                  <div className="flex items-center gap-1 text-[11px] font-medium">
                    <Heart className="w-3 h-3 fill-current text-[#F06292]" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-white/90 font-medium line-clamp-2 leading-tight">
                    {post.handle}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[9px] text-white/75 mt-1 underline">
                    Shop Look <ShoppingBag className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Post Modal */}
      {activePost !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col sm:flex-row border border-[#EEE6F0]">
            <div className="sm:w-1/2 bg-[#FAF3FC] aspect-square flex items-center justify-center">
              <img
                src={posts[activePost].image}
                alt="Post preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#EEE6F0]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-linear-to-tr from-amber-400 via-rose-500 to-purple-600 p-[2px]">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <Instagram className="w-3.5 h-3.5 text-[#A65AC1]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#24202A]">{posts[activePost].handle}</h4>
                      <span className="text-[10px] text-[#77717D]">Verified Customer</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActivePost(null)}
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-xs font-bold"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-xs text-[#24202A] mt-4 leading-relaxed">
                  {posts[activePost].caption}
                </p>

                {posts[activePost].taggedProduct && (
                  <div className="mt-6 p-3 bg-[#FAF3FC] rounded-2xl border border-[#EEE6F0]">
                    <span className="text-[10px] uppercase font-bold text-[#77717D] tracking-wider block mb-1.5">
                      Featured in this look
                    </span>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={posts[activePost].taggedProduct.image}
                          alt={posts[activePost].taggedProduct.name}
                          className="w-10 h-10 rounded-lg object-contain bg-white p-1 border border-[#EEE6F0]"
                        />
                        <div>
                          <h5 className="text-xs font-semibold text-[#24202A]">
                            {posts[activePost].taggedProduct.name}
                          </h5>
                          <span className="text-xs font-bold text-[#79358F]">
                            ${posts[activePost].taggedProduct.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedProduct(posts[activePost].taggedProduct);
                          setActivePost(null);
                        }}
                        className="px-3 py-1.5 bg-[#A65AC1] hover:bg-[#79358F] text-white text-[11px] font-semibold rounded-full shadow-xs"
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-[#EEE6F0] flex items-center justify-between text-xs text-[#77717D]">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 fill-current text-[#F06292]" />
                  <span>{posts[activePost].likes} likes</span>
                </div>
                <button
                  onClick={() => setActivePost(null)}
                  className="text-xs font-medium text-[#A65AC1] hover:underline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
