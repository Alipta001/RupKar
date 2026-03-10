import { Star } from 'lucide-react';

export default function RatingSummary({ stats }: { stats: any }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-8 rounded-3xl">
      <div className="text-center md:border-r md:pr-10 border-gray-200">
        <h2 className="text-6xl font-black text-gray-900">{stats.average}</h2>
        <div className="flex items-center justify-center gap-1 my-2 text-green-600">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill={i < Math.floor(stats.average) ? "currentColor" : "none"} />
          ))}
        </div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stats.total} Verified Ratings</p>
      </div>

      <div className="flex-1 w-full space-y-3">
        {stats.distribution.map((item: any, idx: number) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="text-xs font-black text-gray-600 w-4">{5 - idx}</span>
            <Star size={12} className="text-gray-400 fill-current" />
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full" 
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <span className="text-xs font-bold text-gray-400 w-8">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}