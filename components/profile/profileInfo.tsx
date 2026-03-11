"use client";
import React from 'react';
import { Camera, Mail, Phone, Calendar, Shield, User } from 'lucide-react';

export default function ProfileInfo() {
  return (
    <div className="space-y-10">
      {/* 1. Header Section */}
      <div className="flex justify-between items-end border-b border-gray-100 pb-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter">Account Settings</h1>
          <p className="text-sm font-medium text-gray-400 mt-1">Manage your public profile and private information.</p>
        </div>
        <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-black text-xs hover:bg-green-600 transition-all active:scale-95">
          SAVE CHANGES
        </button>
      </div>

      {/* 2. Profile Photo Section */}
      <div className="flex items-center gap-8">
        <div className="relative group">
          <div className="w-32 h-32 rounded-[2rem] bg-gray-100 border-4 border-white shadow-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-4xl font-black text-gray-300">AG</div>
          </div>
          <button className="absolute -bottom-2 -right-2 p-3 bg-green-600 text-white rounded-2xl shadow-lg border-4 border-white hover:scale-110 transition-transform">
            <Camera size={18} />
          </button>
        </div>
        <div>
          <h3 className="text-sm font-black text-gray-900">Profile Picture</h3>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tight mt-1">JPG, GIF or PNG. Max size of 2MB</p>
        </div>
      </div>

      {/* 3. Information Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { label: "Full Name", value: "Alipta Ghosh", icon: User },
          { label: "Email Address", value: "alipta@example.com", icon: Mail },
          { label: "Phone Number", value: "+91 98765 43210", icon: Phone },
          { label: "Date of Birth", value: "Not Set", icon: Calendar },
        ].map((item, idx) => (
          <div key={idx} className="space-y-2 group">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <item.icon size={12} className="text-green-600" />
              {item.label}
            </label>
            <input 
              type="text" 
              defaultValue={item.value}
              className="w-full h-14 px-6 bg-gray-50 border-2 border-transparent rounded-2xl text-sm font-bold text-gray-900 outline-none focus:bg-white focus:border-green-600 transition-all"
            />
          </div>
        ))}
      </div>

      {/* 4. Verified Badge / Industry Signal */}
      <div className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
             <Shield size={24} />
           </div>
           <div>
             <h4 className="text-sm font-black text-blue-900">Two-Factor Authentication</h4>
             <p className="text-xs font-bold text-blue-400">Keep your account extra secure with 2FA.</p>
           </div>
        </div>
        <button className="text-xs font-black text-blue-600 hover:underline tracking-widest uppercase">Enable Now</button>
      </div>
    </div>
  );
}