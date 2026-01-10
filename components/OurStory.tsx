import Image from 'next/image';

export default function OurStory() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Story
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              After experiencing a family tragedy, Mark and Deirdre set out on a journey to share a global message of hope and heartfelt purpose. They wanted parents and children to discover the true meaning of the word &ldquo;feel&rdquo; and to embrace all of the feelings that bind families and loved ones together.
            </p>
            <p className="mb-6">
              With this story inspired by Mark&apos;s daughter and Deirdre&apos;s stepdaughter, Noelle, they share why &ldquo;feel&rdquo; is one of the most important words to explore. Families can witness the beauty that comes from the kindness, truth, and love of a child.
            </p>
            <p className="mb-6">
              A Whisper from Noelle is a reminder of what is most precious in life . . . children and how they feel.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/authors.jpg"
              alt="Mark and Deirdre, Authors"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            About the Illustrator
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-48 h-48 flex-shrink-0">
              <Image
                src="/daniel-illustrator.jpg"
                alt="Daniel Klein, Illustrator"
                fill
                className="object-cover rounded-lg"
                sizes="192px"
              />
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4">
                Daniel Klein is a passionate Brazilian illustrator. Born in Curitiba, Brazil, he worked for advertising companies, publishers, newspapers, and magazines in Brazil, England, the USA, and Portugal. Daniel loves soccer, cycling, and illustrating children&apos;s books and portraits.
              </p>
              <a
                href="https://www.behance.net/danielklein"
                target="_blank"
                rel="noopener noreferrer"
                className="text-whisper-blue hover:text-whisper-blue-darker font-semibold underline"
              >
                Learn More: behance.net/danielklein
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
