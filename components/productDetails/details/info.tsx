import { Star, CheckCircle2 } from 'lucide-react';

export default function ProductInfo({ product }: { product: any }) {
  return (
    <div className="space-y-4">
      <p className="text-green-600 font-black text-sm uppercase tracking-widest">{product.brand}</p>
      {/* H1 is critical for SEO */}
      <h1 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
        {product.name}
      </h1>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-green-100 px-2 py-1 rounded-lg">
          <span className="text-green-700 font-black text-sm">{product.rating}</span>
          <Star className="w-3.5 h-3.5 text-green-700 fill-current ml-1" />
        </div>
        <span className="text-sm font-bold text-gray-500 underline">{product.reviews} Ratings</span>
        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4" /> EcoMarket Assured
        </span>
      </div>
    </div>
  );
}