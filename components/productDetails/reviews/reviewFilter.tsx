"use client";

import React, { useState } from 'react';
import { Image as ImageIcon, CheckCircle2, Star, SlidersHorizontal } from 'lucide-react';

const FILTER_CHIPS = [
  { id: 'all', label: 'All Reviews' },
  { id: 'verified', label: 'Verified Only', icon: CheckCircle2 },
  { id: 'images', label: 'With Images', icon: ImageIcon },
  { id: 'positive', label: 'Positive (4-5★)' },
  { id: 'critical', label: 'Critical (1-2★)' },
];

export default function ReviewFilter() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="py-6 border-b border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal size={16} className="text-gray-400" />
        <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Filter Reviews</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {FILTER_CHIPS.map((chip) => {
          const Icon = chip.icon;
          const isActive = activeFilter === chip.id;

          return (
            <button
              key={chip.id}
              onClick={() => setActiveFilter(chip.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all border-2 
                ${isActive 
                  ? 'bg-green-600 border-green-600 text-white shadow-lg shadow-green-100' 
                  : 'bg-white border-gray-100 text-gray-600 hover:border-green-200 hover:bg-green-50'
                }`}
            >
              {Icon && <Icon size={14} className={isActive ? 'text-white' : 'text-green-600'} />}
              {chip.label}
            </button>
          );
        })}

        {/* Custom Rating Dropdown for specific stars */}
        <select className="bg-gray-50 border-2 border-gray-100 rounded-full px-5 py-2.5 text-xs font-bold text-gray-600 outline-none hover:border-green-200 transition-all cursor-pointer">
          <option>Sort by: Most Recent</option>
          <option>Sort by: Highest Rating</option>
          <option>Sort by: Lowest Rating</option>
        </select>
      </div>
    </div>
  );
}