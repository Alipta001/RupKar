"use client";

import React, { useState } from 'react';
import { Star, Camera, ChevronRight } from 'lucide-react';
import RatingBars from './ratingBars'; 
import ReviewFilter from './reviewFilter';
import ReviewCard from './reviewCard';
import SubmitReviewModal from './submitReviewModal';// Make sure to create this file!

// 1. DATA (Kept intact for the UI)
const MOCK_STATS = {
  average: 4.8,
  total: "3,520",
  distribution: [
    { star: 5, percentage: 80 },
    { star: 4, percentage: 12 },
    { star: 3, percentage: 5 },
    { star: 2, percentage: 2 },
    { star: 1, percentage: 1 },
  ]
};

const MOCK_REVIEWS = [
  {
    id: 1,
    user: "Chhotu Ghosh",
    rating: 5,
    title: "Best in Class ANC!",
    comment: "I've used many premium headphones, but the noise cancellation on these is next level. Perfectly filters out the traffic noise in Barrackpore. Highly recommended!",
    date: "March 2026",
    isVerified: true,
    helpful: 42
  },
  {
    id: 2,
    user: "Sagnik Dutta",
    rating: 4,
    title: "Great sound, slightly heavy",
    comment: "The audio quality is crisp and the bass is punchy. However, after wearing them for 4+ hours of coding, they feel a bit heavy on the ears.",
    date: "February 2026",
    isVerified: true,
    helpful: 12
  },
  {
    id: 3,
    user: "Ananya R.",
    rating: 5,
    title: "Premium packaging and feel",
    comment: "From the moment you open the box, you know you've bought something high-end. The titanium finish is gorgeous.",
    date: "January 2026",
    isVerified: false,
    helpful: 5
  }
];

const USER_PHOTOS = [
  "https://images.unsplash.com/photo-1546435770-a3e426da4717?auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=60",
];

export default function ReviewSection() {
  const [reviews] = useState(MOCK_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="mt-20 border-t border-gray-100 pt-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT SIDE: THE SNAPSHOT --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Customer Reviews</h2>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex text-[#ffa41c]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={22} fill={i < 5 ? "currentColor" : "none"} strokeWidth={1} />
                    ))}
                  </div>
                  <span className="text-xl font-black text-gray-900">{MOCK_STATS.average} out of 5</span>
                </div>
                <p className="text-sm font-bold text-gray-400">{MOCK_STATS.total} global ratings</p>
              </div>

              {/* Star bars */}
              <div className="space-y-3">
                {MOCK_STATS.distribution.map((item) => (
                  <RatingBars key={item.star} star={item.star} percentage={item.percentage} />
                ))}
              </div>

              <div className="pt-8 border-t border-gray-100">
                <button 
                  onClick={handleOpenModal}
                  className="w-full py-3.5 border-2 border-gray-900 rounded-xl font-black text-xs hover:bg-black hover:text-white transition-all active:scale-95"
                >
                  WRITE A CUSTOMER REVIEW
                </button>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: PHOTO GALLERY & MAPPED REVIEWS --- */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* User Images */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Reviews with images</h3>
                <button className="text-xs font-black text-blue-600 hover:underline flex items-center">
                  See all images <ChevronRight size={14} />
                </button>
              </div>
              <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
                {USER_PHOTOS.map((img, i) => (
                  <div key={i} className="min-w-[140px] h-[140px] rounded-2xl overflow-hidden border-4 border-white shadow-sm hover:scale-105 transition-transform flex-shrink-0">
                    <img src={img} className="w-full h-full object-cover" alt="User review" />
                  </div>
                ))}
              </div>
            </div>

            {/* The Actual Reviews List */}
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-6 md:p-10 shadow-sm">
              <div className="mb-8">
                <ReviewFilter onFilterChange={(f) => console.log("Filter changed to:", f)} />
              </div>

              <div className="space-y-2 divide-y divide-gray-50">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              <button className="w-full mt-10 py-5 border-2 border-dashed border-gray-200 rounded-2xl font-black text-sm text-gray-400 hover:border-green-600 hover:text-green-600 transition-all">
                READ ALL VERIFIED REVIEWS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUBMIT REVIEW MODAL */}
      <SubmitReviewModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        productId="pro-1001" // Later this will be dynamic from your route
      />
    </section>
  );
}