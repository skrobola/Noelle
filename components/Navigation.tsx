'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
              <Image
                src="/logo.png"
                alt="A Whisper From Noelle"
                width={120}
                height={50}
                className="h-10 w-auto"
                priority
              />
              <span className="text-xl font-bold text-gray-800 hidden sm:inline">
                A Whisper From Noelle
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition font-medium">
              Home
            </Link>
            <Link href="/giving" className="text-gray-700 hover:text-gray-900 transition font-medium">
              Giving
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition font-medium">
              Blog
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition font-medium py-2">
                Home
              </Link>
              <Link href="/giving" className="text-gray-700 hover:text-gray-900 transition font-medium py-2">
                Giving
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition font-medium py-2">
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
