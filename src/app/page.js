"use client";
import { useState } from "react";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SearchFilter from "@/components/SearchFilter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || p.category === category)
  );

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Featured Smart Deals</h1>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}