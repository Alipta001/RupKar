// "use client";
// import React from 'react';
// import { Truck, ExternalLink, RefreshCcw } from 'lucide-react';
// import OrderStepper from './orderStepper';
// import OrderHistoryCard from './orderHistoryCard';

// const MOCK_ORDERS = [
//   { id: "RK-9821-X4", date: "March 10, 2026", status: "In Transit", total: 345.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80", color: "text-blue-600", bg: "bg-blue-50" },
//   { id: "RK-7712-B2", date: "Feb 28, 2026", status: "Delivered", total: 120.50, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80", color: "text-green-600", bg: "bg-green-50" }
// ];

// const TRACKING_STEPS = [
//   { label: "Order Placed", date: "Mar 10, 10:30 AM", completed: true },
//   { label: "Processing", date: "Mar 10, 02:15 PM", completed: true },
//   { label: "On the Way", date: "Expected Mar 12", completed: false, current: true },
//   { label: "Delivered", date: "Pending", completed: false },
// ];

// export default function OrderLayout() {
//   return (
//     // CHANGED: px-4 ensures it never touches the screen edges on mobile
//     <div className="w-full max-w-7xl mx-auto space-y-6 md:space-y-10 px-4 md:px-6 lg:px-8 py-4">
      
//       {/* HEADER */}
//       <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6 md:pb-8">
//         <div>
//           <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter italic">MY ORDERS</h1>
//           <p className="text-xs md:text-sm font-medium text-gray-400 mt-1 uppercase tracking-tight">Manage and track your recent purchases</p>
//         </div>
//         <button className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-2xl hover:bg-green-600 transition-all font-black text-[10px] uppercase tracking-widest self-start sm:self-center shadow-lg shadow-gray-200">
//           <RefreshCcw size={14} />
//           <span>Refresh Tracking</span>
//         </button>
//       </header>

//       {/* ACTIVE TRACKING HERO */}
//       <section className="bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-white relative overflow-hidden shadow-2xl">
//         <div className="relative z-10 space-y-10 md:space-y-16">
//           <div className="flex flex-wrap items-start justify-between gap-4">
//             <div className="space-y-3">
//               <span className="inline-block text-[9px] font-black uppercase tracking-[0.2em] text-green-400 px-3 py-1 bg-white/5 rounded-full border border-white/10">
//                 Live Tracking
//               </span>
//               <h2 className="text-2xl md:text-4xl font-black tracking-tighter">Order #RK-9821-X4</h2>
//             </div>
//             <button className="flex items-center gap-2 text-[10px] font-black bg-white/10 hover:bg-white hover:text-gray-900 px-5 py-2.5 rounded-xl transition-all uppercase tracking-widest border border-white/10">
//               Details <ExternalLink size={14} />
//             </button>
//           </div>

//           <OrderStepper steps={TRACKING_STEPS} />
//         </div>
//         {/* Decorative Truck Icon */}
//         <Truck size={280} className="hidden lg:block absolute -bottom-20 -right-20 text-white/[0.03] rotate-12 pointer-events-none" />
//       </section>

//       {/* HISTORY LIST */}
//       <section className="space-y-6">
//         <div className="flex justify-between items-center px-2">
//           <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Order History</h3>
//           <span className="text-[10px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">2 Orders Found</span>
//         </div>
//         <div className="grid grid-cols-1 gap-4">
//           {MOCK_ORDERS.map((order) => (
//             <OrderHistoryCard key={order.id} order={order} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }




"use client";
import React from 'react';
import { Truck, ExternalLink, RefreshCcw } from 'lucide-react';
import OrderStepper from './orderStepper';
import OrderHistoryCard from './orderHistoryCard';
// Import the Layout that contains your Sidebar
import ProfileLayout from '../profile/profileLayout'; 

const MOCK_ORDERS = [
  { id: "RK-9821-X4", date: "March 10, 2026", status: "In Transit", total: 345.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80", color: "text-blue-600", bg: "bg-blue-50" },
  { id: "RK-7712-B2", date: "Feb 28, 2026", status: "Delivered", total: 120.50, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80", color: "text-green-600", bg: "bg-green-50" }
];

const TRACKING_STEPS = [
  { label: "Order Placed", date: "Mar 10, 10:30 AM", completed: true },
  { label: "Processing", date: "Mar 10, 02:15 PM", completed: true },
  { label: "On the Way", date: "Expected Mar 12", completed: false, current: true },
  { label: "Delivered", date: "Pending", completed: false },
];

export default function OrderLayout() {
  return (
    <ProfileLayout>
      {/* The ProfileLayout already handles the max-width and grid. 
         We just provide the interior content here.
      */}
      <div className="space-y-6 md:space-y-10">
        
        {/* HEADER */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6 md:pb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter italic">MY ORDERS</h1>
            <p className="text-xs md:text-sm font-medium text-gray-400 mt-1 uppercase tracking-tight">Manage and track your recent purchases</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-2xl hover:bg-green-600 transition-all font-black text-[10px] uppercase tracking-widest self-start sm:self-center shadow-lg shadow-gray-200">
            <RefreshCcw size={14} />
            <span>Refresh Tracking</span>
          </button>
        </header>

        {/* ACTIVE TRACKING HERO */}
        <section className="bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-10 md:space-y-16">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-3">
                <span className="inline-block text-[9px] font-black uppercase tracking-[0.2em] text-green-400 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                  Live Tracking
                </span>
                <h2 className="text-2xl md:text-4xl font-black tracking-tighter">Order #RK-9821-X4</h2>
              </div>
              <button className="flex items-center gap-2 text-[10px] font-black bg-white/10 hover:bg-white hover:text-gray-900 px-5 py-2.5 rounded-xl transition-all uppercase tracking-widest border border-white/10">
                Details <ExternalLink size={14} />
              </button>
            </div>

            <OrderStepper steps={TRACKING_STEPS} />
          </div>
          {/* Decorative Truck Icon */}
          <Truck size={280} className="hidden lg:block absolute -bottom-20 -right-20 text-white/[0.03] rotate-12 pointer-events-none" />
        </section>

        {/* HISTORY LIST */}
        <section className="space-y-6">
          <div className="flex justify-between items-center px-2">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Order History</h3>
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">2 Orders Found</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {MOCK_ORDERS.map((order) => (
              <OrderHistoryCard key={order.id} order={order} />
            ))}
          </div>
        </section>
      </div>
    </ProfileLayout>
  );
}