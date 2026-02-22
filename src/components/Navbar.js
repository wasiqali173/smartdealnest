"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 py-4 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
          Smart<span className="text-yellow-500">DealNest</span>
        </Link>

       
        <div className="space-x-8 hidden md:flex items-center">
          <Link href="/" className="font-medium hover:text-yellow-500 transition">Home</Link>
          <Link href="/reviews" className="font-medium hover:text-yellow-500 transition">Reviews</Link>
          <Link href="/about" className="font-medium hover:text-yellow-500 transition">About</Link>
          <Link href="/contact" className="font-medium hover:text-yellow-500 transition">Contact</Link>
          
        </div>

        
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)} 
            className="p-2 text-gray-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {open ? (
              <span className="text-2xl font-bold">✕</span> 
            ) : (
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl py-6 flex flex-col items-center space-y-4 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={closeMenu} className="text-lg font-semibold w-full text-center py-2 hover:bg-gray-50">Home</Link>
          <Link href="/reviews" onClick={closeMenu} className="text-lg font-semibold w-full text-center py-2 hover:bg-gray-50">Reviews</Link>
          <Link href="/about" onClick={closeMenu} className="text-lg font-semibold w-full text-center py-2 hover:bg-gray-50">About Us</Link>
          <Link href="/contact" onClick={closeMenu} className="text-lg font-semibold w-full text-center py-2 hover:bg-gray-50">Contact</Link>
          <hr className="w-1/2 border-gray-100" />
          <Link href="/privacy-policy" onClick={closeMenu} className="text-sm text-gray-500">Privacy Policy</Link>
          <Link href="/affiliate-disclosure" onClick={closeMenu} className="text-sm text-gray-500">Affiliate Disclosure</Link>
        </div>
      )}
    </nav>
  );
}