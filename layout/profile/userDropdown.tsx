"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Package, 
  Settings, 
  LogOut, 
  Heart, 
  CreditCard,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const MENU_ITEMS = [
  { icon: User, label: "My Profile", sub: "Personal info & security", color: "text-blue-500", url:"/user/profile" },
  { icon: Package, label: "My Orders", sub: "Track & manage shipments", color: "text-orange-500", url:"/user/orders" },
  { icon: Heart, label: "Wishlist", sub: "Saved for later", color: "text-pink-500" },
  { icon: CreditCard, label: "Payments", sub: "Saved cards & wallet", color: "text-green-500" },
];

export default function UserDropdown() {
    const router = useRouter()
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute right-0 mt-3 w-72 bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 overflow-hidden z-[110]"
    >
      {/* 1. Profile Header */}
      <div className="p-5 bg-gray-50/50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-green-100">
              A
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-gray-900 leading-tight">Alipta Ghosh</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Premium Member</span>
          </div>
        </div>
      </div>

      {/* 2. Menu Items */}
      <div className="p-2">
        {MENU_ITEMS.map((item, idx) => (
          <button
            key={idx}
            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all group" onClick={()=> router.push(item.url)}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gray-100 group-hover:bg-white transition-colors ${item.color}`}>
                <item.icon size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-gray-800 leading-none">{item.label}</p>
                <p className="text-[10px] font-medium text-gray-400 mt-1">{item.sub}</p>
              </div>
            </div>
            <ChevronRight size={14} className="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>

      {/* 3. Footer Actions */}
      <div className="p-2 bg-gray-50/50 border-t border-gray-100">
        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:text-red-600 transition-all group">
          <div className="p-2 rounded-lg bg-red-50 text-red-500">
            <LogOut size={18} />
          </div>
          <span className="text-xs font-black">Sign Out</span>
        </button>
      </div>
      
      {/* 4. Security Badge */}
      <div className="px-5 py-3 flex items-center justify-center gap-2 bg-white">
        <ShieldCheck size={12} className="text-green-600" />
        <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Secure Session</span>
      </div>
    </motion.div>
  );
}