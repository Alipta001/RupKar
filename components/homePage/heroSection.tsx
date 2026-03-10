
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Zap, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

const BANNERS = [
  {
    id: 1,
    title: "Premium Tech Sale",
    subtitle: "UP TO 40% OFF",
    description: "Upgrade your lifestyle with the latest gadgets and electronics.",
    bg: "bg-[#e8f5e9]", // Very light green
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    btnColor: "bg-green-600"
  },
  {
    id: 2,
    title: "Organic Living",
    subtitle: "FRESH ARRIVALS",
    description: "Discover verified sellers for all your home and garden needs.",
    bg: "bg-[#f5f5f5]", // Light gray
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
    btnColor: "bg-brown-600"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === BANNERS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white pb-10">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-6 h-full lg:h-[500px]">
          
          {/* 1. SIDE NAVIGATION (Desktop Only - Amazon Style) */}
          <div className="hidden lg:block w-72 bg-white border border-gray-100 rounded-2xl shadow-sm p-4 overflow-y-auto">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 px-2">Top Departments</h3>
            <ul className="space-y-1">
              {['Electronics', 'Men\'s Fashion', 'Women\'s Fashion', 'Home Decor', 'Beauty & Health', 'Sports & Fitness', 'Books', 'Groceries'].map((item) => (
                <li key={item} className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-green-50 hover:text-green-700 transition-all cursor-pointer text-sm font-bold text-gray-600 group">
                  {item} <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-green-500" />
                </li>
              ))}
            </ul>
          </div>

          {/* 2. MAIN CAROUSEL */}
          <div className="flex-1 relative rounded-3xl overflow-hidden group shadow-xl">
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className={`w-full h-full flex items-center ${BANNERS[current].bg}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
                  <div className="p-8 md:p-16 flex flex-col justify-center order-2 md:order-1">
                    <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-green-600 font-black tracking-[0.3em] text-xs mb-4">
                      {BANNERS[current].subtitle}
                    </motion.span>
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-gray-900 leading-none mb-6">
                      {BANNERS[current].title}
                    </motion.h1>
                    <p className="text-gray-500 font-medium mb-8 max-w-sm">
                      {BANNERS[current].description}
                    </p>
                    <div className="flex gap-4">
                      <button className={`${BANNERS[current].btnColor} text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-green-100 hover:scale-105 transition-all active:scale-95`}>
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-full order-1 md:order-2 overflow-hidden">
                    <img src={BANNERS[current].image} alt="Banner" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button onClick={() => setCurrent(current === 0 ? BANNERS.length - 1 : current - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-white">
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button onClick={() => setCurrent(current === BANNERS.length - 1 ? 0 : current + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-white">
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>

        {/* 3. FLOATING FEATURE BAR (The Flipkart Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {[
            { icon: Truck, title: "Free Shipping", desc: "On orders over $150", color: "text-blue-500" },
            { icon: ShieldCheck, title: "Secure Payment", desc: "100% protected payments", color: "text-green-500" },
            { icon: RotateCcw, title: "Easy Returns", desc: "30-day money back", color: "text-orange-500" },
            { icon: Zap, title: "Instant Access", desc: "Connect with sellers direct", color: "text-yellow-500" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-gray-50 p-6 rounded-3xl border border-transparent hover:border-green-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className={`p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-sm md:text-base">{item.title}</h4>
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}