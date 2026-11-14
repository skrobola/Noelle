'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass =
    'font-semibold text-ink-muted transition hover:text-whisper-blue-deep';

  return (
    <nav className="sticky top-0 z-50 border-b border-whisper-blue/40 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-[4.25rem]">
          <Link href="/" className="flex items-center gap-3 transition hover:opacity-90">
            <Image
              src="/logo.png"
              alt="A Whisper From Noelle"
              width={120}
              height={50}
              className="h-10 w-auto"
              priority
            />
            <span className="hidden font-display text-lg font-semibold text-ink sm:inline">
              A Whisper From Noelle
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className={linkClass}>
              Home
            </Link>
            <Link href="/giving" className={linkClass}>
              Giving
            </Link>
            <Link href="/blog" className={linkClass}>
              Blog
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-ink hover:bg-sky/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-whisper-blue-deep"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
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

        {isMenuOpen && (
          <div className="border-t border-whisper-blue/30 pb-4 pt-2 md:hidden">
            <div className="flex flex-col gap-1">
              <Link href="/" className={`${linkClass} py-2`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/giving"
                className={`${linkClass} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Giving
              </Link>
              <Link href="/blog" className={`${linkClass} py-2`} onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
