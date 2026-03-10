"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Product {
  id: number | string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  seller: string;
  badge?: string;
  image: string;
  isFSA?: boolean;
}

export default function DashboardProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter()
  
  // Calculate discount percentage
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-square overflow-hidden bg-gray-50" onClick={()=> router.push("/user/productDetails/214124123458865")}>
        {product.badge && (
          <div className="absolute top-2 left-2 z-10 bg-green-600 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">
            {product.badge}
          </div>
        )}
        
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
        />

        {/* Desktop Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform hidden md:block">
          <button className="w-full bg-white/95 backdrop-blur text-gray-900 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-green-600 hover:text-white transition-all active:scale-95">
            Quick Add
          </button>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-3 md:p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
            {product.seller}
          </span>
        </div>

        <h3 className="text-xs md:text-sm font-bold text-gray-800 line-clamp-2 h-9 mb-3 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating Section */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex bg-green-600 px-1.5 py-0.5 rounded-md items-center shadow-sm shadow-green-100">
            <span className="text-[10px] font-black text-white">{product.rating}</span>
            <Star className="w-2.5 h-2.5 text-white fill-current ml-0.5" />
          </div>
          <span className="text-[10px] font-bold text-gray-400">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price Section */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-lg md:text-2xl font-black text-gray-900 leading-none">
              ${product.price}
            </span>
            <span className="text-[10px] md:text-xs text-gray-400 line-through font-bold">
              ${product.originalPrice}
            </span>
          </div>
          <p className="text-[10px] md:text-xs font-black text-green-600 mt-1 uppercase">
            Save {discount}% now
          </p>
        </div>

        {/* Mobile-only Button */}
        <button className="md:hidden mt-4 w-full bg-gray-900 text-white py-3 rounded-xl text-[10px] font-black flex items-center justify-center gap-2 active:scale-95 transition-transform">
          <ShoppingCart size={14} /> ADD TO CART
        </button>
      </div>
    </motion.div>
  );
}