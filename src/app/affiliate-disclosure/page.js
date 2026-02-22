export default function AffiliateDisclosure() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Affiliate Disclosure</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            As an Amazon Associate, <span className="font-semibold text-blue-600">SmartDealNest</span> earns from qualifying purchases. 
          </p>

          <p>
            This means if you click a link and buy a product, we may earn a small 
            commission at **no extra cost to you**. This helps us keep the site running 
            and providing high-quality reviews.
          </p>

          <p className="pt-6 border-t border-gray-100 italic text-gray-500">
            All reviews and recommendations are honest and based on our independent research.
          </p>
        </div>
      </div>
    </main>
  );
}