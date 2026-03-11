"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface OrderProps {
  id: string;
  date: string;
  status: string;
  total: number;
  image: string;
  color: string;
  bg: string;
}

export default function OrderHistoryCard({ order }: { order: OrderProps }) {
  return (
    <motion.div 
      whileHover={{ y: -4, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
      className="group flex flex-col md:flex-row items-center gap-6 p-5 bg-white border border-gray-100 rounded-3xl transition-all"
    >
      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
        <img src={order.image} alt={order.id} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>

      <div className="flex-1 space-y-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
          <span className="text-sm font-black text-gray-900">{order.id}</span>
          <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${order.bg} ${order.color}`}>
            {order.status}
          </span>
        </div>
        <p className="text-xs font-bold text-gray-400">Placed on {order.date}</p>
      </div>

      <div className="text-center md:text-right">
        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Total Amount</p>
        <p className="text-lg font-black text-gray-900">${order.total.toFixed(2)}</p>
      </div>

      <button className="w-full md:w-auto px-8 py-3 bg-gray-50 text-gray-900 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all border border-gray-100">
        View Invoice
      </button>
    </motion.div>
  );
}