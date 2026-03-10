"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer, Zap, ChevronRight, ShoppingCart } from 'lucide-react';

const DEAL_PRODUCTS = [
  {
    id: 101,
    name: "Noise ColorFit Pulse Grand Smartwatch",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80",
    dealPrice: 19.99,
    originalPrice: 49.99,
    stockLeft: 12,
    totalStock: 50,
  },
  {
    id: 102,
    name: "Sony WH-CH520 Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80",
    dealPrice: 59.00,
    originalPrice: 89.00,
    stockLeft: 5,
    totalStock: 30,
  },
  {
    id: 103,
    name: "Logitech MX Master 3S Wireless Mouse",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80",
    dealPrice: 85.00,
    originalPrice: 99.00,
    stockLeft: 22,
    totalStock: 40,
  }
];

export default function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 10 });

  // High-performance timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 lg:px-10 py-6">
      <div className="bg-white border-2 border-green-50 rounded-[2rem] overflow-hidden shadow-xl shadow-green-50/50">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 bg-gradient-to-r from-green-600 to-green-500 text-white gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
              <Zap className="w-6 h-6 fill-yellow-300 text-yellow-300" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black italic tracking-tight leading-none">DEAL OF THE DAY</h2>
              <p className="text-green-100 text-xs font-bold mt-1 uppercase tracking-widest">Ending Soon. Don't Miss Out!</p>
            </div>
          </div>

          {/* TIMER UI */}
          <div className="flex items-center gap-3">
            <Timer className="w-5 h-5 hidden sm:block text-green-100" />
            <div className="flex gap-2">
              {[timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((unit, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-white text-green-700 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl font-black text-lg shadow-inner">
                    {unit.toString().padStart(2, '0')}
                  </div>
                  {i < 2 && <span className="mx-1 font-black text-xl">:</span>}
                </div>
              ))}
            </div>
          </div>

          <button className="bg-white text-green-700 px-6 py-3 rounded-2xl font-black text-sm hover:bg-green-50 transition-all flex items-center gap-2 shadow-lg active:scale-95">
            View All Deals <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* PRODUCTS LIST (Horizontally Scrollable on Mobile) */}
        <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEAL_PRODUCTS.map((product) => (
            <div key={product.id} className="flex gap-4 md:gap-6 group">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 relative border border-gray-100">
                <img src={product.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-1 right-1 bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                  -{Math.round(((product.originalPrice - product.dealPrice)/product.originalPrice)*100)}%
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-sm md:text-base font-bold text-gray-800 line-clamp-1 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-black text-green-600">${product.dealPrice}</span>
                  <span className="text-xs text-gray-400 line-through font-bold">${product.originalPrice}</span>
                </div>

                {/* SCARCITY PROGRESS BAR */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Available: {product.stockLeft} left</span>
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-tighter">Sold: {product.totalStock - product.stockLeft}</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(product.stockLeft / product.totalStock) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-red-500 to-orange-400"
                    />
                  </div>
                </div>

                <button className="mt-4 md:hidden flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-xl text-xs font-bold">
                  <ShoppingCart className="w-3 h-3" /> Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}