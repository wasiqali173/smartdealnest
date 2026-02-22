import products from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} - SmartDealNest Review`,
    description: product.description,
  };
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="w-full max-w-md mx-auto mb-6">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
      
      
      <div className="mb-6">
        <p className="text-2xl font-bold text-blue-600">${product.price}</p>
        <p className="text-xs text-gray-500">*Prices and availability are accurate as of the date/time indicated and are subject to change.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-700 mb-2">Pros</h3>
          <ul className="list-disc ml-5 space-y-1">
            {product.pros.map((pro, index) => (
              <li key={index} className="text-gray-700">{pro}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-red-700 mb-2">Cons</h3>
          <ul className="list-disc ml-5 space-y-1">
            {product.cons.map((con, index) => (
              <li key={index} className="text-gray-700">{con}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        {product.description}
      </p>

      <div className="flex flex-col items-center border-t pt-8">
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-4 rounded-full text-xl transition-transform hover:scale-105 shadow-md"
        >
          Check Price on Amazon
        </a>
        <p className="mt-4 text-sm text-gray-500 italic text-center">
          As an Amazon Associate, I earn from qualifying purchases.
        </p>
      </div>
    </div>
  );
}