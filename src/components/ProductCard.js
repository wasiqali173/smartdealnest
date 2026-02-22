"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      
      
      <a 
        href={product.affiliateLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative w-full aspect-square mb-4 rounded-lg bg-[#f9f9f9] overflow-hidden block"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-6 transition-transform duration-500 ease-in-out group-hover:scale-110" 
          sizes="(max-width: 768px) 100vw, 33vw"
        />
       
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>

      <div className="flex flex-col flex-grow">
        
        <Link href={`/reviews/${product.slug}`}>
          <h2 className="text-base font-bold text-gray-800 mb-1 line-clamp-2 min-h-[3rem] hover:text-blue-600 transition">
            {product.title}
          </h2>
        </Link>
        
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto pt-2">
           <div className="mb-4">
             <p className="text-xl font-black text-blue-600">${product.price}</p>
             <p className="text-[10px] text-gray-400 italic">
               *Price at time of publishing.
             </p>
           </div>

           <div className="flex gap-2">
            <Link
              href={`/reviews/${product.slug}`}
              className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm text-center flex-1 hover:bg-gray-50 transition font-medium"
            >
              Review
            </Link>

           
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-2 py-2 rounded-lg text-[13px] text-center flex-1 hover:bg-yellow-500 transition font-bold shadow-sm"
            >
              View on Amazon
            </a>
          </div>
        </div>
      </div>

      
      <p className="text-[9px] text-gray-400 mt-4 text-center leading-tight">
        As an Amazon Associate I earn from qualifying purchases.
      </p>
    </div>
  );
}