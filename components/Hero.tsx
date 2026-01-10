import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 px-4" style={{ background: 'linear-gradient(to bottom, rgba(183, 229, 250, 0.25) 0%, rgba(183, 229, 250, 0.25) 100%)' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          New Children&apos;s Book!
        </h1>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Grandma, You Give Me Courage:
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Another Whisper From Noelle
          </p>
        </div>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          A new book for parents, grandparents, and children
        </p>
        <Link
          href="https://amzn.to/44DyEUO" target="_blank" 
          className="inline-block bg-whisper-blue hover:bg-whisper-blue-dark text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl"
        >
          Buy Now
        </Link>
      </div>
    </section>
  );
}
