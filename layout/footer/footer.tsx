// import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 lg:px-10">
//       <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
//         {/* About EcoMarket */}
//         <div className="space-y-6">
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center font-black text-white">E</div>
//             <span className="text-2xl font-black text-white">ECOMARKET</span>
//           </div>
//           <p className="text-sm leading-relaxed text-gray-400">
//             India's fastest growing marketplace. Connecting millions of buyers and sellers with trust, speed, and sustainability.
//           </p>
//           <div className="flex gap-4">
//             {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
//               <a key={i} href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 hover:text-white transition-all">
//                 <Icon size={18} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-white font-bold mb-6">Quick Links</h4>
//           <ul className="space-y-4 text-sm">
//             {['About Us', 'Sell on EcoMarket', 'Affiliate Program', 'Careers', 'Latest News'].map(link => (
//               <li key={link} className="hover:text-green-500 cursor-pointer transition-colors">{link}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Customer Support */}
//         <div>
//           <h4 className="text-white font-bold mb-6">Help & Support</h4>
//           <ul className="space-y-4 text-sm">
//             {['Track Order', 'Returns & Refunds', 'Shipping Info', 'Report an Issue', 'FAQs'].map(link => (
//               <li key={link} className="hover:text-green-500 cursor-pointer transition-colors">{link}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-white font-bold mb-6">Contact Us</h4>
//           <ul className="space-y-4 text-sm">
//             <li className="flex items-center gap-3"><MapPin size={18} className="text-green-500" /> Sector V, Salt Lake, Kolkata</li>
//             <li className="flex items-center gap-3"><Phone size={18} className="text-green-600" /> +91 98765 43210</li>
//             <li className="flex items-center gap-3"><Mail size={18} className="text-green-600" /> support@ecomarket.com</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="max-w-[1920px] mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
//         <p className="text-xs text-gray-500 font-medium">© 2026 EcoMarket Inc. Designed by Alipta Ghosh. All rights reserved.</p>
//         <div className="flex items-center gap-6 grayscale opacity-50">
//            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
//            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
//            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
//         </div>
//       </div>
//     </footer>
//   );
// }






"use client";

import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Store,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      {/* MATCHING NAVBAR MAX-WIDTH: 1920px */}
      <div className="max-w-[1920px] mx-auto px-4 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* BRAND COLUMN - Dark Mode Style */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-900/20 transform -rotate-3">
                <Store className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                Rupo<span className="text-green-500">Kar</span>
              </span>
            </div>
            <p className="text-sm font-medium text-gray-400 leading-relaxed max-w-sm">
              India's premium marketplace for quality products. Connecting millions of buyers and sellers with trust, speed, and sustainability.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 bg-gray-800/50 text-gray-400 rounded-xl hover:bg-green-600 hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              {['About Us', 'Sell on RupoKar', 'Careers', 'Latest News'].map(link => (
                <li key={link} className="hover:text-green-500 cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-[2px] bg-green-600 transition-all group-hover:w-3" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              {['Track Order', 'Returns & Refunds', 'Shipping Info', 'FAQs'].map(link => (
                <li key={link} className="hover:text-green-500 cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-[2px] bg-green-600 transition-all group-hover:w-3" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & NEWSLETTER - Dark Version */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">Stay Connected</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-800 hover:border-green-900/30 transition-all">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center shadow-sm text-green-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Support Line</p>
                  <p className="text-sm font-black text-white">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full h-14 pl-5 pr-14 bg-gray-800/50 border-2 border-gray-700 rounded-2xl focus:bg-gray-800 focus:border-green-600 transition-all outline-none text-sm font-bold text-white placeholder:text-gray-600"
                />
                <button className="absolute right-2 top-2 h-10 w-10 bg-green-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20 hover:bg-green-700 active:scale-95 transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM UTILITY BAR */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
             <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">
               © 2026 RupoKar Inc.
             </p>
             <span className="hidden md:block w-1 h-1 bg-gray-700 rounded-full" />
             <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
               Designed by <span className="text-green-500">Alipta Ghosh</span>
             </p>
          </div>
          
          <div className="flex items-center gap-6 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 invert" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-3" />
          </div>
        </div>
      </div>
    </footer>
  );
}