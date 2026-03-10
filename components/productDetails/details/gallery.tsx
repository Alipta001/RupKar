"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="sticky top-28 space-y-6">
      <div className="aspect-square bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
        <AnimatePresence mode="wait">
          <motion.img 
            key={selected}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            src={images[selected]} 
            className="w-full h-full object-contain p-8"
          />
        </AnimatePresence>
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setSelected(idx)}
            className={`w-20 h-20 rounded-xl border-2 transition-all flex-shrink-0 ${selected === idx ? 'border-green-600 scale-105 shadow-md' : 'border-transparent bg-gray-50'}`}
          >
            <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
          </button>
        ))}
      </div>
    </div>
  );
}