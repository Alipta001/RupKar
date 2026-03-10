"use client";

import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  MapPin, 
  ChevronDown, 
  User, 
  Heart,
  Store,
  X,
  Bell
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm font-sans sticky top-0 z-[100]">
      {/* 1. TOP UTILITY BAR (Hidden on Mobile) */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-10 py-1.5 flex justify-between items-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">
          <div className="flex gap-6">
            <span className="hover:text-green-600 cursor-pointer transition-colors">Become a Seller</span>
            <span className="hover:text-green-600 cursor-pointer transition-colors">Affiliate Program</span>
          </div>
          <div className="flex gap-6">
            <span className="hover:text-green-600 cursor-pointer transition-colors">Track Order</span>
            <span className="hover:text-green-600 cursor-pointer transition-colors">Help Center</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (Flexible Grid) */}
      <div className="max-w-[1920px] mx-auto px-4 lg:px-10 py-3 lg:py-5 flex items-center justify-between gap-4">
        
        {/* Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:gap-8 flex-shrink-0">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-1.5 text-gray-800 hover:bg-gray-100 rounded-md"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-100 transform -rotate-3 hover:rotate-0 transition-transform">
              <Store className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-900">
              Rupo<span className="text-green-600">Kar</span>
            </span>
          </div>
        </div>

        {/* SEARCH BAR (Adapts from 100% to fixed max-width) */}
        <div className="hidden sm:flex flex-1 max-w-3xl relative items-center group">
          <div className="absolute left-4 z-10">
            <Search className="w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search millions of products..." 
            className="w-full h-11 md:h-12 pl-12 pr-28 bg-gray-100 border-2 border-transparent rounded-xl focus:bg-white focus:border-green-600 transition-all outline-none text-sm md:text-base font-medium"
          />
          <button className="absolute right-1.5 h-8 md:h-9 px-4 md:px-6 bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm font-bold rounded-lg transition-all shadow-md active:scale-95">
            Search
          </button>
        </div>

        {/* ACTIONS & USER PROFILE */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-7 flex-shrink-0">
          
          {/* User Desktop Info */}
          <div className="hidden lg:flex items-center gap-3 group cursor-pointer px-3 py-1.5 rounded-xl hover:bg-green-50 transition-all">
            <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white overflow-hidden shadow-sm group-hover:border-green-400 transition-all">
              <User className="w-full h-full p-2 text-gray-500" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Welcome</span>
              <span className="text-sm font-bold text-gray-900 flex items-center gap-1">
                Alipta Ghosh <ChevronDown className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Icons (Wishlist/Cart) */}
          <div className="flex items-center gap-1 md:gap-3">
            <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all relative">
              <Heart className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 p-2 bg-green-600 text-white rounded-xl shadow-lg shadow-green-100 hover:bg-green-700 transition-all"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2.5 -right-2 bg-yellow-400 text-gray-900 text-[10px] font-black px-1.5 rounded-full border-2 border-green-600">
                  2
                </span>
              </div>
              <span className="hidden xl:block text-sm font-bold pr-2">Cart</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE SEARCH (Visible only on phone/small tablet) */}
      <div className="sm:hidden px-4 pb-4">
        <div className="relative flex items-center">
          <Search className="absolute left-3 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for items..." 
            className="w-full h-11 pl-10 pr-4 bg-gray-100 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-green-500 transition-all"
          />
        </div>
      </div>

      {/* 4. CATEGORY NAVIGATION (Full width border) */}
      <div className="hidden lg:block border-t border-gray-100">
        <div className="max-w-[1920px] mx-auto px-10 py-3">
          <ul className="flex items-center gap-10 text-sm font-bold text-gray-600">
            {['All Categories', 'Top Deals', 'Best Sellers', 'Electronics', 'Fashion', 'Home Decor', 'New Arrivals'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-1 hover:text-green-600 cursor-pointer transition-colors relative group">
                {item === 'All Categories' && <Menu className="w-4 h-4" />}
                {item}
                <span className="absolute -bottom-[13px] left-0 w-0 h-[3px] bg-green-600 transition-all group-hover:w-full rounded-t-full" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[280px] bg-white z-[201] flex flex-col shadow-2xl"
            >
              <div className="p-6 bg-green-600 text-white">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <span className="font-bold">Sign In</span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)}><X /></button>
                </div>
                <h2 className="text-xl font-black italic">EcoMarket Premium</h2>
              </div>
              
              <nav className="p-4 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Top Categories</h3>
                  <ul className="space-y-4 font-bold text-gray-800">
                    <li className="flex justify-between items-center">Fashion <ChevronDown className="w-4 h-4" /></li>
                    <li className="flex justify-between items-center">Electronics <ChevronDown className="w-4 h-4" /></li>
                  </ul>
                </div>
                <hr />
                <button className="w-full py-3 bg-green-100 text-green-700 font-black rounded-xl border-2 border-green-200">
                  Become a Seller
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
