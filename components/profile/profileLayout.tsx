// "use client";
// import React from 'react';
// import { User, Package, Heart, MapPin, CreditCard, Bell, ShieldCheck, LogOut } from 'lucide-react';

// const SIDEBAR_LINKS = [
//   { icon: User, label: "Personal Info", active: true },
//   { icon: Package, label: "My Orders", active: false },
//   { icon: Heart, label: "My Wishlist", active: false },
//   { icon: MapPin, label: "Addresses", active: false },
//   { icon: CreditCard, label: "Payment Methods", active: false },
//   { icon: Bell, label: "Notifications", active: false },
//   { icon: ShieldCheck, label: "Security", active: false },
// ];

// export default function ProfileLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen bg-gray-50/50 py-12 px-4 lg:px-10">
//       <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[280px_1fr] gap-8">
        
//         {/* SIDEBAR NAVIGATION */}
//         <aside className="space-y-2">
//           <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-6">
//              <div className="flex items-center gap-4">
//                 <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl">
//                   A
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-black text-gray-900 leading-none">Alipta Ghosh</h2>
//                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Silver Member</p>
//                 </div>
//              </div>
//           </div>

//           <nav className="bg-white p-2 rounded-3xl border border-gray-100 shadow-sm">
//             {SIDEBAR_LINKS.map((link, idx) => (
//               <button 
//                 key={idx}
//                 className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group ${link.active ? 'bg-green-600 text-white shadow-lg shadow-green-100' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
//               >
//                 <link.icon size={20} className={link.active ? 'text-white' : 'text-gray-400 group-hover:text-green-600'} />
//                 <span className="text-sm font-bold">{link.label}</span>
//               </button>
//             ))}
//             <hr className="my-2 border-gray-50" />
//             <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition-all">
//               <LogOut size={20} />
//               <span className="text-sm font-bold">Logout</span>
//             </button>
//           </nav>
//         </aside>

//         {/* MAIN CONTENT AREA */}
//         <main className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 lg:p-12">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }



// "use client";
// import React from 'react';
// import { User, Package, Heart, MapPin, CreditCard, Bell, ShieldCheck, LogOut } from 'lucide-react';
// import { useRouter, usePathname } from 'next/navigation';

// const SIDEBAR_LINKS = [
//   { icon: User, label: "Personal Info", url: "/user/profile" },
//   { icon: Package, label: "My Orders", url: "/user/orders" },
//   { icon: Heart, label: "My Wishlist", url: "/user/wishlist" },
//   { icon: MapPin, label: "Addresses", url: "/user/addresses" },
//   { icon: CreditCard, label: "Payment Methods", url: "/user/payments" },
//   { icon: Bell, label: "Notifications", url: "/user/notifications" },
//   { icon: ShieldCheck, label: "Security", url: "/user/security" },
// ];

// export default function ProfileLayout({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const pathname = usePathname(); // Automatically detects current URL

//   return (
//     <div className="min-h-screen bg-gray-50/50 py-6 md:py-12 px-4 lg:px-10">
//       <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[280px_1fr] gap-8">
        
//         {/* 1. DESKTOP SIDEBAR */}
//         <aside className="hidden lg:block space-y-6">
//           <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
//              <div className="flex items-center gap-4">
//                 <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl">A</div>
//                 <div>
//                   <h2 className="text-lg font-black text-gray-900 leading-none">Alipta Ghosh</h2>
//                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Silver Member</p>
//                 </div>
//              </div>
//           </div>

//           <nav className="bg-white p-2 rounded-3xl border border-gray-100 shadow-sm">
//             {SIDEBAR_LINKS.map((link, idx) => {
//               const isActive = pathname === link.url;
//               return (
//                 <button 
//                   key={idx}
//                   onClick={() => router.push(link.url)}
//                   className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group ${
//                     isActive ? 'bg-green-600 text-white shadow-lg shadow-green-100' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
//                   }`}
//                 >
//                   <link.icon size={20} className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-green-600'} />
//                   <span className="text-sm font-bold">{link.label}</span>
//                 </button>
//               );
//             })}
//             <hr className="my-2 border-gray-50" />
//             <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition-all">
//               <LogOut size={20} />
//               <span className="text-sm font-bold">Logout</span>
//             </button>
//           </nav>
//         </aside>

//         {/* 2. MOBILE SCROLL NAV */}
//         <div className="lg:hidden w-full -mx-4 px-4 overflow-x-auto no-scrollbar pb-4">
//           <div className="flex items-center gap-3 w-max">
//             {SIDEBAR_LINKS.map((link, idx) => {
//               const isActive = pathname === link.url;
//               return (
//                 <button 
//                   key={idx}
//                   onClick={() => router.push(link.url)} // ADDED THIS
//                   className={`flex items-center gap-2 px-5 py-3 rounded-2xl whitespace-nowrap transition-all border ${
//                     isActive 
//                       ? 'bg-green-600 text-white border-green-600 shadow-md shadow-green-100' 
//                       : 'bg-white text-gray-500 border-gray-100 shadow-sm'
//                   }`}
//                 >
//                   <link.icon size={18} />
//                   <span className="text-xs font-black uppercase tracking-tight">{link.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         <main className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm p-6 md:p-8 lg:p-12">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }



"use client";
import React from 'react';
import ProfileSidebar from '@/layout/profileSidebar/profileSidebar';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50/50 py-6 md:py-12 px-4 lg:px-10">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[280px_1fr] gap-8">
        
        {/* ATTACHED SIDEBAR COMPONENT */}
        <ProfileSidebar />

        {/* MAIN CONTENT AREA */}
        <main className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm p-6 md:p-8 lg:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}