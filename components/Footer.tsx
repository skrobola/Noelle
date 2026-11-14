import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-0 bg-whisper-blue-deeper text-sky">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              A Whisper From Noelle
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sky/90">
              Sharing stories that help children and families explore emotions and values together.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-soft">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/giving" className="text-sky transition hover:text-white">
                  Giving
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sky transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#books" className="text-sky transition hover:text-white">
                  Books
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-soft">
              Connect With Us
            </h4>
            <p className="text-sm leading-relaxed text-sky/90">
              Stay updated with our latest books and activities from the homepage signup.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-8 text-center text-sm text-sky/70">
          <p>
            Copyright © {new Date().getFullYear()} A Whisper From Noelle — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
