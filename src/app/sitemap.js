import products from "@/data/products";

export default function sitemap() {
  const baseUrl = "https://smartdealnest.vercel.app";

  // Static pages
  const staticPages = [
    { url: baseUrl, priority: 1, changeFrequency: "daily" },
    { url: `${baseUrl}/reviews`, priority: 0.9, changeFrequency: "daily" },
    { url: `${baseUrl}/about`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact`, priority: 0.5, changeFrequency: "monthly" },
  ].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Dynamic — automatically products.js se aayega ✅
  const reviewPages = products.map((product) => ({
    url: `${baseUrl}/reviews/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...reviewPages];
}