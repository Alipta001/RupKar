"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';

const BUDGET_ITEMS = [
  { id: 1, name: "Tech Accessories", price: "Under $9", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80" },
  { id: 2, name: "Home Utilities", price: "Under $15", img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80" },
  { id: 3, name: "Fashion Jewelry", price: "Under $5", img: "https://images.unsplash.com/photo-1535633302704-b02f4f134444?auto=format&fit=crop&q=80" },
  { id: 4, name: "Stationery", price: "Under $10", img: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80" },
];

export default function BudgetStore() {
  return (
    <section className="w-full py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-yellow-400 p-2 rounded-lg">
          <Tag className="w-5 h-5 text-gray-900 fill-current" />
        </div>
        <h2 className="text-xl md:text-2xl font-black text-gray-900">THE BUDGET <span className="text-green-600">CORNER</span></h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {BUDGET_ITEMS.map((item) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={item.id} 
            className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white font-black text-lg leading-tight">{item.name}</h3>
              <p className="text-yellow-400 font-bold text-sm">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}