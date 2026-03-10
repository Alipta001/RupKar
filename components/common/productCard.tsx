"use client";

import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCard({ product }: { product: any }) {
  // Logic to calculate discount percentage
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[2rem] border border-gray-100 p-3 relative transition-all hover:shadow-2xl hover:shadow-green-100/50"
    >
      {/* 1. IMAGE CONTAINER */}
      <div className="aspect-square w-full bg-gray-50 rounded-[1.5rem] overflow-hidden relative border border-gray-50">
        <img 
          src={product.image || product.images?.[0]} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg">
            -{discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-xl text-gray-400 hover:text-red-500 transition-colors shadow-sm">
          <Heart size={16} />
        </button>

        {/* Quick Add Button (Desktop Only) */}
        <button className="absolute bottom-3 right-3 p-3 bg-gray-900 text-white rounded-xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl active:scale-95">
          <ShoppingCart size={18} />
        </button>
      </div>

      {/* 2. PRODUCT INFO */}
      <div className="mt-4 px-2 pb-2">
        <div className="flex items-center gap-1 mb-1">
          <div className="flex text-yellow-400">
            <Star size={12} fill="currentColor" />
          </div>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">
            {product.rating} ({product.reviews || '120+'})
          </span>
        </div>

        <h3 className="text-sm font-bold text-gray-800 line-clamp-1 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-black text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-[10px] text-gray-400 line-through font-bold">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <button className="md:hidden bg-green-600 text-white p-2 rounded-lg">
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}