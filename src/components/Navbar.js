"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    // bg-white ko forced rakha hai taake dark mode mein background black na ho
    <nav className="bg-white shadow-sm sticky top-0 z-50 py-4 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo: text-gray-900 forced black rakhega */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
          Smart<span className="text-yellow-500">DealNest</span>
        </Link>

        {/* Desktop Links: text-gray-700 se text-gray-900 kiya hai */}
        <div className="space-x-8 hidden md:flex items-center">
          <Link href="/" className="font-medium text-gray-900 hover:text-yellow-500 transition">Home</Link>
          <Link href="/reviews" className="font-medium text-gray-900 hover:text-yellow-500 transition">Reviews</Link>
          <Link href="/about" className="font-medium text-gray-900 hover:text-yellow-500 transition">About</Link>
          <Link href="/contact" className="font-medium text-gray-900 hover:text-yellow-500 transition">Contact</Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)} 
            className="p-2 text-gray-900 focus:outline-none" // text-gray-900 for icon visibility
            aria-label="Toggle Menu"
          >
            {open ? (
              <span className="text-2xl font-bold text-gray-900">✕</span> 
            ) : (
              <div className="space-y-1.5">
                {/* Lines ka color bg-gray-900 forced kiya hai */}
                <span className="block w-6 h-0.5 bg-gray-900"></span>
                <span className="block w-6 h-0.5 bg-gray-900"></span>
                <span className="block w-6 h-0.5 bg-gray-900"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        // bg-white forced black text ke sath
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl py-6 flex flex-col items-center space-y-4 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={closeMenu} className="text-lg font-semibold w-full text-center py-2 text-gray-900 hover:bg-gray-50">Home</Link>
          <Link href="/reviews" onClick={closeMenu} className="text-lg font-semibold w-full text-center py-2 text-gray-900 hover:bg-gray-50">Reviews</Link>
          <Link href="/about" onClick={closeMenu} className="text-lg font-semibold w-full text-center py-2 text-gray-900 hover:bg-gray-50">About Us</Link>
          <Link href="/contact" onClick={closeMenu} className="text-lg font-semibold w-full text-center py-2 text-gray-900 hover:bg-gray-50">Contact</Link>
          
          <hr className="w-1/2 border-gray-200" />
          
          {/* Chote links ko bhi forced gray-700/900 kiya hai */}
          <Link href="/privacy-policy" onClick={closeMenu} className="text-sm text-gray-700 font-medium">Privacy Policy</Link>
          <Link href="/affiliate-disclosure" onClick={closeMenu} className="text-sm text-gray-700 font-medium">Affiliate Disclosure</Link>
        </div>
      )}
    </nav>
  );
}