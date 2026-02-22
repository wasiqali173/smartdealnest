import products from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Product Reviews 2026 - SmartDealNest",
  description: "Read our expert reviews on the latest smart products.",
};

export default function ReviewsListing() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Latest Reviews</h1>
        <p className="text-center text-gray-600 mb-12">Expert analysis of the products you love.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
              <div className="relative h-48 w-full bg-gray-50">
                <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <Link href={`/reviews/${product.slug}`} className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                  Read Full Review <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}