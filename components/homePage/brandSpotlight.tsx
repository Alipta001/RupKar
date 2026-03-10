"use client";

import React from 'react';

const BRANDS = [
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", deal: "Min. 20% Off" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", deal: "Trade-in Deals" },
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", deal: "Up to 40% Off" },
  { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg", deal: "Grab Coupons" },
];

export default function BrandSpotlight() {
  return (
    <section className="py-10 bg-gray-50 rounded-[3rem] px-8 my-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl font-black text-gray-900">OFFICIAL <span className="text-blue-600">BRAND STORES</span></h2>
        <div className="flex gap-2">
          <span className="bg-white px-4 py-2 rounded-full text-xs font-bold shadow-sm border border-gray-100">100% Authentic</span>
          <span className="bg-white px-4 py-2 rounded-full text-xs font-bold shadow-sm border border-gray-100">Easy Warranty</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {BRANDS.map((brand) => (
          <div key={brand.name} className="bg-white p-6 rounded-3xl flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all border border-transparent hover:border-blue-100 group">
            <div className="h-12 w-24 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
              <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-blue-600 font-black text-sm tracking-tighter">{brand.deal}</p>
          </div>
        ))}
      </div>
    </section>
  );
}