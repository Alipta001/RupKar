import { CheckCircle2, ThumbsUp, ThumbsDown, Star } from 'lucide-react';

export default function ReviewCard({ review }: { review: any }) {
  return (
    <div className="py-8 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-black text-sm">
          {review.user.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-black text-gray-900">{review.user}</h4>
          <div className="flex items-center gap-2">
             <div className="flex text-green-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} />
                ))}
             </div>
             {review.isVerified && (
               <span className="text-[10px] font-black text-blue-600 flex items-center gap-0.5 bg-blue-50 px-1.5 py-0.5 rounded">
                 <CheckCircle2 size={10} /> VERIFIED PURCHASE
               </span>
             )}
          </div>
        </div>
        <span className="ml-auto text-[10px] font-bold text-gray-400 uppercase">{review.date}</span>
      </div>

      <h5 className="font-bold text-gray-900 mb-2">{review.title}</h5>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{review.comment}</p>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-green-600 transition-colors">
          <ThumbsUp size={14} /> Helpful ({review.helpful})
        </button>
        <button className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors">
          Report
        </button>
      </div>
    </div>
  );
}