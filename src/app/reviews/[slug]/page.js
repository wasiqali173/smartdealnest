import products from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} Review 2026 - SmartDealNest`,
    description: product.description,
  };
}

export default async function ReviewPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 py-6 md:py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-5 md:p-10 rounded-2xl shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">{product.title} Review 2026</h1>
          <div className="text-yellow-500 text-lg">⭐ ⭐ ⭐ ⭐ ⭐ <span className="text-gray-500 text-sm">({product.rating})</span></div>
        </div>

        <div className="relative w-full h-[250px] md:h-[400px] mb-8 bg-gray-50 rounded-xl">
          <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-4" priority />
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 mb-8 rounded-r-xl">
          <h3 className="text-lg font-bold text-yellow-800">Quick Verdict:</h3>
          <p className="text-gray-700 italic">The {product.title} is a top choice for {product.category} in 2026.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="border border-green-200 rounded-xl p-5 bg-green-50">
            <h4 className="text-green-700 font-bold mb-3">✓ Pros</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {product.pros.map((pro, i) => <li key={i}>• {pro}</li>)}
            </ul>
          </div>
          <div className="border border-red-200 rounded-xl p-5 bg-red-50">
            <h4 className="text-red-700 font-bold mb-3">✕ Cons</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {product.cons.map((con, i) => <li key={i}>• {con}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gray-900 rounded-2xl text-center text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4">Check Availability</h3>
          <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-full font-bold text-lg inline-block transition-transform hover:scale-105">
            Check Price on Amazon
          </a>
          <p className="mt-6 text-[11px] text-gray-400 italic">
            As an Amazon Associate, I earn from qualifying purchases. This helps support our reviews.
          </p>
        </div>
      </div>
    </main>
  );
}