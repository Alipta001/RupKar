import { Star } from 'lucide-react';

interface RatingBarProps {
  star: number;
  percentage: number;
}

export default function RatingBars({ star, percentage }: RatingBarProps) {
  return (
    <div className="group flex items-center gap-4 w-full cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
      <span className="text-sm font-medium text-blue-600 hover:underline min-w-[50px]">
        {star} star
      </span>
      <div className="flex-1 h-5 bg-gray-100 border border-gray-300 rounded-[4px] overflow-hidden shadow-inner">
        <div 
          className="h-full bg-[#ffa41c] border-r border-[#de8906] transition-all duration-500" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-blue-600 hover:underline min-w-[35px] text-right">
        {percentage}%
      </span>
    </div>
  );
}