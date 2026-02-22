import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          
          
          <h2 className="text-2xl font-bold text-yellow-500 tracking-tight text-center">SmartDealNest</h2>

          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-400">
            <Link href="/" className="hover:text-yellow-500 transition">Home</Link>
            <Link href="/reviews" className="hover:text-yellow-500 transition">Reviews</Link>
            <Link href="/about" className="hover:text-yellow-500 transition">About Us</Link>
            <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-yellow-500 transition">Privacy Policy</Link>
            <Link href="/affiliate-disclosure" className="hover:text-yellow-500 transition">Affiliate Disclosure</Link>
          </div>

         
          <div className="border-t border-gray-800 pt-8 w-full">
            <p className="text-[12px] md:text-[13px] text-gray-500 max-w-3xl mx-auto leading-relaxed italic">
              SmartDealNest is a participant in the Amazon Services LLC Associates Program, 
              an affiliate advertising program designed to provide a means for sites to 
              earn advertising fees by advertising and linking to Amazon.com. 
              <span className="block mt-2 text-[11px] not-italic opacity-60">
                *Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
              </span>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-[11px] text-gray-600 pt-2 uppercase tracking-widest">
            © {new Date().getFullYear()} SmartDealNest. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}