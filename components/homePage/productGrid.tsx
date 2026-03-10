// "use client";

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Star, ShoppingCart, ShieldCheck, Zap, Info } from 'lucide-react';

// const PRODUCTS = [
//   {
//     id: 1,
//     name: "Eco-Friendly Bamboo Desktop Organizer",
//     price: 45.00,
//     originalPrice: 60.00,
//     rating: 4.8,
//     reviews: 1240,
//     seller: "GreenHome Solutions",
//     badge: "Bestseller",
//     image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80",
//     isFSA: true,
//   },
//   {
//     id: 2,
//     name: "Mechanical Wireless Keyboard - Forest Edition",
//     price: 129.99,
//     originalPrice: 150.00,
//     rating: 4.9,
//     reviews: 850,
//     seller: "TechVibe",
//     badge: "Trending",
//     image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80",
//     isFSA: true,
//   },
//   // Add more items to see the grid in action
// ];

// export default function ProductGrid() {
//   return (
//     <section className="py-8 md:py-12">
//       <div className="flex items-center justify-between mb-6 md:mb-8">
//         <div>
//           <h2 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight">
//             Today's <span className="text-green-600">Featured Deals</span>
//           </h2>
//           <p className="text-gray-500 text-xs md:text-sm font-medium">Verified quality from top-rated sellers</p>
//         </div>
//         <button className="text-green-700 font-bold text-xs md:text-sm hover:underline flex items-center gap-1">
//           See All <Zap className="w-4 h-4 fill-current" />
//         </button>
//       </div>

//       {/* THE RESPONSIVE GRID 
//          grid-cols-2: Mobile (2 items per row like Meesho/Flipkart)
//          md:grid-cols-3: Tablets
//          lg:grid-cols-4: Laptops
//          xl:grid-cols-5: Desktop
//       */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
//         {PRODUCTS.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function ProductCard({ product }: { product: any }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

//   return (
//     <motion.div 
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="group bg-white border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
//     >
//       <div className="relative aspect-square overflow-hidden bg-gray-50">
//         {product.badge && (
//           <div className="absolute top-2 left-2 z-10 bg-green-600 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase">
//             {product.badge}
//           </div>
//         )}
//         <img 
//           src={product.image} 
//           alt={product.name}
//           className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
//         />
//         {/* Quick Add for Desktop */}
//         <div className="absolute inset-x-0 bottom-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform hidden md:block">
//           <button className="w-full bg-white/90 backdrop-blur text-gray-900 py-2 rounded-lg font-bold text-xs shadow-lg hover:bg-green-600 hover:text-white transition-all">
//             Quick Add
//           </button>
//         </div>
//       </div>

//       <div className="p-3 md:p-4 flex flex-col flex-1">
//         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">{product.seller}</span>
//         <h3 className="text-xs md:text-sm font-bold text-gray-800 line-clamp-2 h-9 mb-2">
//           {product.name}
//         </h3>
        
//         <div className="flex items-center gap-1.5 mb-3">
//           <div className="flex bg-green-600 px-1.5 py-0.5 rounded items-center">
//             <span className="text-[10px] font-black text-white">{product.rating}</span>
//             <Star className="w-2.5 h-2.5 text-white fill-current ml-0.5" />
//           </div>
//           <span className="text-[10px] font-bold text-gray-400">({product.reviews})</span>
//         </div>

//         <div className="mt-auto">
//           <div className="flex items-baseline gap-1.5">
//             <span className="text-base md:text-xl font-black text-gray-900">${product.price}</span>
//             <span className="text-[10px] md:text-xs text-gray-400 line-through">${product.originalPrice}</span>
//           </div>
//           <span className="text-[10px] md:text-xs font-bold text-green-600">{discount}% OFF</span>
//         </div>

//         {/* Mobile Button */}
//         <button className="md:hidden mt-3 w-full bg-green-50 text-green-700 py-2 rounded-lg text-[10px] font-black border border-green-100">
//           ADD TO CART
//         </button>
//       </div>
//     </motion.div>
//   );
// }






"use client";

import React from 'react';
import { Zap } from 'lucide-react';
import DashboardProductCard from './dashboardProductCard'; // Import the new component

const PRODUCTS = [
  {
    id: 1,
    name: "Eco-Friendly Bamboo Desktop Organizer",
    price: 45.00,
    originalPrice: 60.00,
    rating: 4.8,
    reviews: 1240,
    seller: "GreenHome Solutions",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Mechanical Wireless Keyboard - Forest Edition",
    price: 129.99,
    originalPrice: 150.00,
    rating: 4.9,
    reviews: 850,
    seller: "TechVibe",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80",
  },
  // Add more items here...
];

export default function ProductGrid() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <span className="text-green-600 font-black text-xs uppercase tracking-[0.2em]">Curated Picks</span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight mt-2">
              Today's <span className="text-green-600">Featured Deals</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-gray-50 hover:bg-green-50 text-gray-900 hover:text-green-700 px-6 py-3 rounded-2xl font-black text-sm transition-all border border-gray-100">
            View Gallery <Zap size={16} className="fill-current" />
          </button>
        </div>

        {/* Responsiveness breakdown:
          - Mobile (grid-cols-2): Essential for that "Amazon/Flipkart" shopping feel.
          - Tablet (md:grid-cols-3)
          - Laptop (lg:grid-cols-4)
          - Desktop (xl:grid-cols-5)
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
          {PRODUCTS.map((product) => (
            <DashboardProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}