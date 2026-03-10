"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Camera, Loader2 } from 'lucide-react';

export default function SubmitReviewModal({ isOpen, onClose, productId }: any) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State designed for Supabase integration later
  const [formData, setFormData] = useState({
    title: '',
    comment: '',
    is_verified: true, // You can toggle this based on user purchase history
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API Call to Supabase
    setTimeout(() => {
      console.log("Saving to Supabase:", { ...formData, rating, productId });
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-black text-gray-900">Write a Review</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Share your experience</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Star Selection */}
              <div className="text-center space-y-3">
                <p className="text-sm font-black text-gray-700">How would you rate it?</p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      className="transition-transform active:scale-90"
                    >
                      <Star 
                        size={32} 
                        fill={(hover || rating) >= star ? "#ffa41c" : "none"} 
                        className={(hover || rating) >= star ? "text-[#ffa41c]" : "text-gray-300"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Comment */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-black text-gray-400 uppercase ml-1">Review Title</label>
                  <input 
                    required
                    placeholder="Example: Incredible Sound Quality!"
                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-green-600 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-gray-400 uppercase ml-1">Your Feedback</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="What did you like or dislike?"
                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-green-600 outline-none transition-all resize-none"
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  />
                </div>
              </div>

              {/* Photo Upload Placeholder */}
              <button type="button" className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-green-600 group transition-all">
                <Camera className="text-gray-300 group-hover:text-green-600 transition-colors" />
                <span className="text-xs font-black text-gray-400 group-hover:text-green-600">Add Photos</span>
              </button>

              {/* Submit Button */}
              <button 
                disabled={isSubmitting || rating === 0}
                type="submit"
                className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-sm shadow-xl shadow-gray-200 hover:bg-black transition-all disabled:bg-gray-200 disabled:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin" size={18} /> SUBMITTING...</>
                ) : (
                  "SUBMIT REVIEW"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}