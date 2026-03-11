"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Mock data for UI development
  const cartItems = [
    { id: 1, name: "Eco-Friendly Bamboo Organizer", price: 45, qty: 1, img: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80" },
    { id: 2, name: "Mechanical Wireless Keyboard", price: 129, qty: 1, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80" }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <>
      {/* 1. DARK OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
      />

      {/* 2. SLIDING DRAWER */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-[201] shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h2 className="text-lg font-black text-gray-900 leading-none">Your Cart</h2>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{cartItems.length} Items Selected</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Scrollable Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div>
                  <h3 className="text-xs font-bold text-gray-800 line-clamp-1">{item.name}</h3>
                  <p className="text-sm font-black text-green-600 mt-1">${item.price}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  {/* Qty Controls */}
                  <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100">
                    <button className="p-1 hover:text-green-600 transition-colors"><Minus size={12} /></button>
                    <span className="px-3 text-xs font-black text-gray-800">{item.qty}</span>
                    <button className="p-1 hover:text-green-600 transition-colors"><Plus size={12} /></button>
                  </div>
                  <button className="text-gray-300 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Checkout Section */}
        <div className="p-6 bg-gray-50/50 border-t border-gray-100 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium text-gray-500">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500">
              <span>Shipping</span>
              <span className="text-green-600 font-bold uppercase text-[10px] bg-green-50 px-2 py-1 rounded">Calculated at checkout</span>
            </div>
            <div className="pt-2 border-t border-gray-100 flex justify-between items-end">
              <span className="text-sm font-bold text-gray-900">Total Amount</span>
              <span className="text-2xl font-black text-gray-900">${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-xl shadow-green-100 transition-all active:scale-[0.98] group">
            PROCEED TO CHECKOUT
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-tighter">
            Tax included • 100% Secure Checkout
          </p>
        </div>
      </motion.div>
    </>
  );
}