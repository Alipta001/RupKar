"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  { id: 1, name: "Offers", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80", color: "from-orange-400 to-red-500" },
  { id: 2, name: "Mobiles", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80", color: "from-blue-400 to-blue-600" },
  { id: 3, name: "Fashion", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80", color: "from-pink-400 to-rose-500" },
  { id: 4, name: "Electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80", color: "from-purple-400 to-indigo-600" },
  { id: 5, name: "Home", img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80", color: "from-green-400 to-teal-600" },
  { id: 6, name: "Beauty", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80", color: "from-yellow-400 to-orange-500" },
  { id: 7, name: "Grocery", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80", color: "from-green-500 to-emerald-700" },
  { id: 8, name: "Appliances", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80", color: "from-cyan-400 to-blue-500" },
];

export default function CategoryCircles() {
  return (
    <section className="w-full bg-white py-6 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-10">
        {/* Custom scrollbar hidden but scroll functional */}
        <div className="flex items-start gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat, idx) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col items-center gap-2 min-w-[70px] md:min-w-[100px] cursor-pointer group"
            >
              {/* The Circle with Gradient Border (Story Style) */}
              <div className={`relative p-[3px] rounded-full bg-gradient-to-tr ${cat.color} group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-lg`}>
                <div className="bg-white p-1 rounded-full">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-50">
                    <img 
                      src={cat.img} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Sale Badge for the first item */}
                {cat.name === "Offers" && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full animate-bounce">
                    HOT
                  </span>
                )}
              </div>

              {/* Category Name */}
              <span className="text-[10px] md:text-xs font-black text-gray-700 uppercase tracking-tighter group-hover:text-green-600 transition-colors text-center">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}