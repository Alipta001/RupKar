"use client";
import React from 'react';
import { CheckCircle2, Package } from "lucide-react";

interface Step {
  label: string;
  date: string;
  completed: boolean;
  current?: boolean;
}

export default function OrderStepper({ steps }: { steps: Step[] }) {
  return (
    <div className="relative flex flex-col md:flex-row justify-between gap-10 md:gap-4">
      {/* THE LINE: Mobile Vertical / Desktop Horizontal */}
      <div className="absolute 
        left-[19px] top-0 w-[2px] h-full bg-white/10   /* Mobile */
        md:left-0 md:top-1/2 md:w-full md:h-[2px]       /* Desktop */
        -translate-y-0 md:-translate-y-1/2" 
      />
      
      {steps.map((step, idx) => (
        <div key={idx} className="relative z-10 flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-4 flex-1">
          
          {/* ICON CIRCLE */}
          <div className={`
            shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center border-4 border-gray-900 transition-all duration-700
            ${step.completed ? 'bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.4)]' : 
              step.current ? 'bg-white text-gray-900 scale-125' : 'bg-gray-800 text-gray-500'}
          `}>
            {step.completed ? <CheckCircle2 size={18} /> : <Package size={18} />}
          </div>

          {/* TEXT CONTENT */}
          <div className="text-left md:text-center space-y-1">
            <p className={`text-xs md:text-sm font-black uppercase tracking-tight ${step.current ? 'text-green-400' : 'text-white'}`}>
              {step.label}
            </p>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
              {step.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}