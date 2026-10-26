import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'skincare',
    name: 'Skin Care',
    image: '/images/cat_skincare.png',
    itemCount: 24,
    description: 'Clean botanicals and clinical actives for healthy radiance'
  },
  {
    id: 'makeup',
    name: 'Makeup',
    image: '/images/cat_makeup.png',
    itemCount: 18,
    description: 'Effortless complexion enhancers and velvety lip pigments'
  },
  {
    id: 'haircare',
    name: 'Hair Care',
    image: '/images/cat_haircare.png',
    itemCount: 14,
    description: 'Nourishing scalp serums and restorative plant elixirs'
  },
  {
    id: 'bathbody',
    name: 'Bath & Body',
    image: '/images/cat_bathbody.png',
    itemCount: 16,
    description: 'Sensory bath oils, hydrating milk washes, and whipped butters'
  },
  {
    id: 'fragrances',
    name: 'Fragrances',
    image: '/images/cat_fragrances.png',
    itemCount: 9,
    description: 'Artisanal floral notes, crystalline amber, and soft musk'
  },
  {
    id: 'tools',
    name: 'Tools & Accessories',
    image: '/images/cat_tools.png',
    itemCount: 12,
    description: 'Rose quartz sculptors, vegan brushes, and facial rollers'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Radiance Night Serum',
    tagline: 'Deep Cellular Renewal Overnight',
    category: 'skincare',
    categoryLabel: 'Skin Care',
    price: 28.99,
    rating: 4.9,
    reviewsCount: 1200,
    image: '/images/prod_radiance_night_serum.png',
    badge: {
      text: 'Bestseller',
      variant: 'bestseller'
    },
    description: 'A luxurious nocturnal elixir formulated with triple-weight hyaluronic acid, lavender botanicals, and bakuchiol. Transforms tired, dull skin overnight into plump, velvety radiance with zero irritation.',
    benefits: [
      'Stimulates overnight skin regeneration and cellular repair',
      'Smoothes fine dehydration lines and balances moisture barrier',
      'Infused with calming French lavender extract for restful ritual',
      'Non-comedogenic, fast-absorbing botanical oil-serum hybrid'
    ],
    keyIngredients: ['Bakuchiol 1%', 'Triple Hyaluronic Acid', 'Lavender Flower Oil', 'Squalane'],
    howToUse: 'Warm 3–4 drops between palms at night. Gently press onto cleansed face, neck, and décolletage in upward sweeping motions before your night moisturizer.',
    volumeOrSize: '30ml / 1.0 fl. oz.',
    inStock: true,
    isBestseller: true
  },
  {
    id: 'prod-2',
    name: 'Hydra Glow Gel Cream',
    tagline: 'Ultra-Lightweight 72h Moisture Quench',
    category: 'skincare',
    categoryLabel: 'Skin Care',
    price: 24.99,
    rating: 4.8,
    reviewsCount: 956,
    image: '/images/prod_hydra_glow_cream.png',
    badge: {
      text: 'New',
      variant: 'new'
    },
    description: 'A cooling, featherlight water-burst gel cream packed with snow mushroom polysaccharides and niacinamide. Melts on contact to deliver a dewy, non-greasy glow that lasts all day.',
    benefits: [
      'Provides instantaneous 72-hour deep reservoir hydration',
      'Pore-refining finish with soothing marshmallow root',
      'Leaves a natural glass-skin sheen beneath makeup',
      'Hypoallergenic and dermatologist tested for sensitive skin'
    ],
    keyIngredients: ['Snow Mushroom Extract', 'Niacinamide 3%', 'Centella Asiatica', 'Glycerin'],
    howToUse: 'Smooth a dime-sized amount over face and neck morning and evening after serum. Pat lightly with fingertips until completely absorbed.',
    volumeOrSize: '50ml / 1.7 oz.',
    inStock: true,
    isBestseller: true
  },
  {
    id: 'prod-3',
    name: 'Vitamin C Brightening Face Serum',
    tagline: 'High-Potency Dark Spot & Glow Booster',
    category: 'skincare',
    categoryLabel: 'Skin Care',
    price: 23.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviewsCount: 1100,
    image: '/images/prod_vitaminc_serum.png',
    badge: {
      text: '-20%',
      variant: 'discount'
    },
    description: 'Potent 15% stabilized Vitamin C complex enriched with Ferulic acid and Kakadu plum. Targets sun spots, hyperpigmentation, and environmental oxidative stress for visibly luminous skin.',
    benefits: [
      'Fades post-blemish discoloration and sun marks within 14 days',
      'Shields against free radicals and urban environmental pollution',
      'Promotes collagen synthesis for supple skin elasticity',
      'Stable photoprotective amber glass dropper packaging'
    ],
    keyIngredients: ['Stabilized Vitamin C 15%', 'Ferulic Acid 0.5%', 'Kakadu Plum', 'Vitamin E'],
    howToUse: 'Apply 4–5 drops every morning to clean, dry skin. Follow with moisturizer and always apply SPF 50 during daytime.',
    volumeOrSize: '30ml / 1.0 fl. oz.',
    inStock: true,
    isBestseller: true
  },
  {
    id: 'prod-4',
    name: 'Velvet Matte Lipstick',
    tagline: 'Weightless Satin Color & Botanical Oils',
    category: 'makeup',
    categoryLabel: 'Makeup',
    price: 16.99,
    rating: 4.7,
    reviewsCount: 859,
    image: '/images/prod_velvet_lipstick.png',
    description: 'A modern velvet-matte lipstick that glides like silk and nourishes with camellia seed oil and wild rose butter. Delivers intensely rich, non-drying couture pigments with 10-hour comfortable wear.',
    benefits: [
      'Featherweight cushion matte finish that never flakes or cracks',
      'Enriched with vitamin E and jojoba to keep lips kissably soft',
      'Cruelty-free, paraben-free, and clean formula',
      'Signature magnetic rose gold fluted case'
    ],
    keyIngredients: ['Camellia Seed Oil', 'Wild Rose Seed Butter', 'Vitamin E', 'Micro-Pigments'],
    howToUse: 'Glide directly across lips starting from the cupid’s bow outwards. Blot lightly with tissue for a diffused French-girl tint or layer for opaque drama.',
    volumeOrSize: '3.8g / 0.13 oz.',
    inStock: true,
    isBestseller: true
  },
  {
    id: 'prod-5',
    name: 'Sun Shield SPF 50 PA++++',
    tagline: 'Invisible Broad Spectrum Daily Shield',
    category: 'skincare',
    categoryLabel: 'Skin Care',
    price: 19.99,
    rating: 4.9,
    reviewsCount: 745,
    image: '/images/prod_sun_shield.png',
    badge: {
      text: 'Popular',
      variant: 'popular'
    },
    description: 'An ethereal daily fluid sunscreen with zero white cast, zero stickiness, and zero shine. Shields against UVA/UVB rays and blue light while pampering skin with soothing aloe water and green tea polyphenols.',
    benefits: [
      'Maximum PA++++ broad spectrum UVA/UVB defense',
      'No white cast, works beautifully across all complexions',
      'Reef-safe formula without oxybenzone or octinoxate',
      'Primes skin like a pore-blurring makeup prep'
    ],
    keyIngredients: ['Green Tea Extract', 'Aloe Barbadensis Leaf', 'Hyaluronic Acid', 'Zinc Mineral Complex'],
    howToUse: 'Dispense two finger lengths onto face and neck as the final step in your morning routine. Reapply every 2 hours if exposed to direct sun.',
    volumeOrSize: '60ml / 2.0 fl. oz.',
    inStock: true,
    isBestseller: true
  },
  // Additional products across categories for full shopping experience:
  {
    id: 'prod-6',
    name: 'Rose Botanical Facial Mist',
    tagline: 'Hydrating Damask Rose & Peptide Toner',
    category: 'skincare',
    categoryLabel: 'Skin Care',
    price: 21.50,
    rating: 4.8,
    reviewsCount: 420,
    image: '/images/promo_products.png',
    badge: {
      text: 'Bestseller',
      variant: 'bestseller'
    },
    description: 'A rejuvenating fine mist made of 100% steam-distilled Bulgarian organic Damask roses and soothing cucumber distillate. Instantly rebalances skin pH and hydrates thirsty skin throughout the day.',
    benefits: [
      'Immediate dewy burst of hydration anytime, anywhere',
      'Soothes redness and post-sun skin stress',
      'Sets makeup with an all-day luminous halo'
    ],
    keyIngredients: ['Organic Rose Hydrosol', 'Cucumber Extract', 'Pro-Vitamin B5'],
    howToUse: 'Close eyes and mist generously over face whenever skin feels dry or fatigued.',
    volumeOrSize: '100ml / 3.4 fl. oz.',
    inStock: true
  },
  {
    id: 'prod-7',
    name: 'Luminous Glow Body Oil',
    tagline: 'Subtle Shimmer & Sweet Almond Nourishment',
    category: 'bathbody',
    categoryLabel: 'Bath & Body',
    price: 32.00,
    originalPrice: 38.00,
    rating: 4.9,
    reviewsCount: 512,
    image: '/images/cat_bathbody.png',
    badge: {
      text: '-15%',
      variant: 'discount'
    },
    description: 'A dry body oil that bathes limbs in a warm, gilded glow with notes of vanilla orchid and soft amber. Absorbs instantly with no greasy residue on clothing.',
    benefits: [
      'Silky dry-touch finish with micro-fine golden pearl reflects',
      'Deeply conditions parched elbows, knees, and collarbones',
      'Subtle long-lasting signature sensual botanical aroma'
    ],
    keyIngredients: ['Sweet Almond Oil', 'Golden Jojoba', 'Vanilla Orchid', 'Vitamin E'],
    howToUse: 'Massage onto damp skin right out of the shower, or brush onto collarbones and legs for special occasions.',
    volumeOrSize: '120ml / 4.0 fl. oz.',
    inStock: true
  },
  {
    id: 'prod-8',
    name: 'Petale Poudree Eau de Parfum',
    tagline: 'Magnolia Blossoms, Violet Leaves & Warm Cedar',
    category: 'fragrances',
    categoryLabel: 'Fragrances',
    price: 68.00,
    rating: 5.0,
    reviewsCount: 388,
    image: '/images/cat_fragrances.png',
    badge: {
      text: 'Popular',
      variant: 'popular'
    },
    description: 'An intimate, intoxicating artisanal fragrance. Opens with crisp Italian bergamot and pink pepper, blooming into romantic purple magnolia and settling into powdery French iris and creamy cedarwood.',
    benefits: [
      'Artisanal batch blending in Grasse, France',
      'Over 14% pure perfume oil concentration for 8+ hour sillage',
      'Cruelty-free, vegan, phthalate-free alcohol base'
    ],
    keyIngredients: ['Bergamot', 'Magnolia Grandiflora', 'Orris Root', 'Atlas Cedar'],
    howToUse: 'Spritz onto pulse points: wrists, inner elbows, and base of the neck. Do not rub wrists together.',
    volumeOrSize: '50ml / 1.7 fl. oz.',
    inStock: true
  },
  {
    id: 'prod-9',
    name: 'Rose Quartz Gua Sha & Facial Roller Duo',
    tagline: 'Certified Brazilian Quartz Sculpting Set',
    category: 'tools',
    categoryLabel: 'Tools & Accessories',
    price: 26.00,
    rating: 4.8,
    reviewsCount: 630,
    image: '/images/cat_tools.png',
    description: 'Hand-carved from Grade-A Brazilian rose quartz. Designed to relieve facial tension, stimulate lymphatic drainage, define cheekbones, and enhance serum absorption.',
    benefits: [
      'Instantly de-puffs under-eyes and defines jawline',
      'Naturally cool stone calms inflammation and tightness',
      'Comes in a velvet keepsake travel pouch with ritual guide'
    ],
    keyIngredients: ['100% Genuine Rose Quartz', 'Reinforced Zinc Hardware'],
    howToUse: 'Apply 3 drops of Radiance Night Serum, then gently glide the roller and gua sha stone outward and upward along jawline and cheeks.',
    volumeOrSize: '2-piece set in custom box',
    inStock: true
  },
  {
    id: 'prod-10',
    name: 'Silk Peptide Scalp & Hair Elixir',
    tagline: 'Follicle Density & Radiant Glass Shine',
    category: 'haircare',
    categoryLabel: 'Hair Care',
    price: 29.50,
    rating: 4.8,
    reviewsCount: 472,
    image: '/images/cat_haircare.png',
    badge: {
      text: 'New',
      variant: 'new'
    },
    description: 'A weightless bi-phase serum packed with fermented rice water, rosemary extract, and pea peptides. Strengthens roots, calms dry scalp, and smooths split ends.',
    benefits: [
      'Visible reduction in hair fall and shedding in 4 weeks',
      'Leaves strands luminous and silky without weigh-down',
      'Pleasant herbal scent with sweet lavender undertones'
    ],
    keyIngredients: ['Rosemary Leaf Extract', 'Fermented Rice Water', 'Pea Sprout Peptides', 'Argan Oil'],
    howToUse: 'Fill dropper and distribute evenly along parted scalp. Massage for 2 minutes with fingertips. Can be used on damp or dry hair.',
    volumeOrSize: '60ml / 2.0 fl. oz.',
    inStock: true
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Camille R.',
    rating: 5,
    date: '2 days ago',
    title: 'The glow is undeniable!',
    comment: 'The Radiance Night Serum changed my skin texture completely. I wake up looking well-rested even when I slept 5 hours. My dry patches are gone.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Elena S.',
    rating: 5,
    date: '1 week ago',
    title: 'Hydra Glow Gel Cream is a holy grail',
    comment: 'Finally a moisturizer that does not pill under makeup or feel heavy in the summer heat. The lavender aesthetics are just gorgeous on my vanity too.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Sophia M.',
    rating: 5,
    date: '2 weeks ago',
    title: 'Truly gentle, high quality ingredients',
    comment: 'I have sensitive rosacea-prone skin and usually react to scented products. Aurora has caused zero flare-ups, just soothing softness. Will reorder!',
    verified: true
  }
];
