export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          About SmartDealNest
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Welcome to <span className="font-semibold text-blue-600">SmartDealNest</span>! 
            We are dedicated to bringing you the best products across Tech, Home, and Kitchen 
            with honest reviews and the latest deals from Amazon.
          </p>

          <p>
            Our mission is simple: to help you make smarter buying decisions while saving 
            both time and money. Every recommendation we share is based on thorough 
            research and careful evaluation.
          </p>
          
          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 italic">
              Thank you for trusting us to help you find your next great purchase!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}