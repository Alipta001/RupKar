"use client";
import React, { useState } from 'react';
import { ShoppingCart, Zap, Plus, Minus, MapPin } from 'lucide-react';

export default function Actions({ price, originalPrice }: { price: number, originalPrice: number }) {
  const [qty, setQty] = useState(1);
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-3xl">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-black text-gray-900">${price}</span>
          <div className="flex flex-col">
            <span className="text-red-500 font-black text-sm">-{discount}% OFF</span>
            <span className="text-sm text-gray-400 line-through font-bold">${originalPrice}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center bg-gray-100 rounded-2xl p-1">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-white rounded-xl transition-all"><Minus size={16}/></button>
          <span className="px-6 font-black">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-white rounded-xl transition-all"><Plus size={16}/></button>
        </div>
        <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-black transition-all">
          <ShoppingCart size={20} /> ADD TO CART
        </button>
        <button className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-green-700 shadow-lg shadow-green-100 transition-all">
          <Zap size={20} fill="currentColor" /> BUY NOW
        </button>
      </div>
    </div>
  );
}