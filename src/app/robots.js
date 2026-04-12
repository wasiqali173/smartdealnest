export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://smartdealnest.vercel.app/sitemap.xml",
  };
}