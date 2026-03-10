// import Gallery from './details/gallery';
// import ProductInfo from './details/info';
// import Actions from './details/actions';

// export default function ProductDetailsLayout() {
//   return (
//     <main className="max-w-[1440px] mx-auto px-4 lg:px-10 py-10">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//         {/* Left Side */}
//         <div className="lg:col-span-5">
//           <Gallery images={product.images} />
//         </div>

//         {/* Right Side */}
//         <div className="lg:col-span-7 space-y-10">
//           <ProductInfo product={product} />
//           <Actions price={product.price} originalPrice={product.originalPrice} />
          
//           <div className="prose prose-sm max-w-none text-gray-600 border-t pt-8">
//             <h3 className="text-gray-900 font-black uppercase tracking-widest text-xs mb-4">Product Description</h3>
//             <p className="font-medium leading-relaxed">{product.description}</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }






import Gallery from './details/gallery';
import ProductInfo from './details/info';
import Actions from './details/actions';
import ReviewSection from './reviews/reviewSection';
import ProductCard from '../common/productCard';

const MOCK_RELATED = [
  { id: "pro-102", name: "Premium Earbuds Pro", price: 129, originalPrice: 199, rating: 4.5, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80" },
  { id: "pro-103", name: "Leather Headphone Case", price: 45, originalPrice: 60, rating: 4.2, image: "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80" },
  { id: "pro-104", name: "Desktop Headphone Stand", price: 25, originalPrice: 35, rating: 4.9, image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80" },
];

export default function ProductDetailsLayout({ product: passedProduct }: { product?: any }) {
  // Use passed prop or fallback to your MOCK_PRODUCT
  const product = passedProduct || {
    id: "pro-1001",
    brand: "Premium Audio Tech",
    name: "SoundMaster Pro v2 - Wireless Noise Cancelling Headphones (Midnight Black)",
    rating: 4.8,
    reviews: "3,520",
    price: 249.00,
    originalPrice: 399.00,
    description: `Experience industry-leading noise cancellation...`, // Truncated for brevity
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80",
    ],
    highlights: ["40mm Drivers", "60H Battery", "ANC", "BT 5.3", "Fast Charge", "Voice Assistant"]
  };

  return (
    <main className="max-w-[1440px] mx-auto px-4 lg:px-10 py-10">
      {/* 1. Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-5">
          <Gallery images={product.images} />
        </div>

        <div className="lg:col-span-7 space-y-10">
          <ProductInfo product={product} />
          <Actions price={product.price} originalPrice={product.originalPrice} />
          
          <div className="prose prose-sm max-w-none text-gray-600 border-t pt-8">
            <h3 className="text-gray-900 font-black uppercase tracking-widest text-xs mb-4">
              Product Description
            </h3>
            <p className="font-medium leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>

      {/* 2. Reviews Section */}
      <div className="border-t border-gray-100 mb-20">
        <ReviewSection />
      </div>

      {/* 3. Related Products (The "Amazon" Upsell) */}
      <section className="border-t border-gray-100 pt-16">
        <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tighter">
          People also <span className="text-green-600">Considered</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MOCK_RELATED.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}