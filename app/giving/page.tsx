import Image from 'next/image';

export default function GivingPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Banner */}
        <section className="py-16 mb-16 rounded-lg" style={{ background: 'linear-gradient(to bottom, rgba(183, 229, 250, 0.25) 0%, rgba(183, 229, 250, 0.25) 100%)' }}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All proceeds from our books go to a TCNJ Award
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              In 2015, the TCNJ Psychology Department created the Outstanding Research Scholar Award, later named the Noelle Skrobola Outstanding Research Scholar Award. Noelle was the first recipient of this award for her work with Dr. Jessica Barnack-Tavlaris. She was involved in research every semester starting her freshman year, co-authored multiple conference presentations, and received a research grant from Psi Chi for her Senior Honors Thesis.
            </p>
            <p className="mb-6">
              Today, the <em className="font-semibold">Noelle Skrobola &apos;16 Research Scholar Award</em> recognizes recipients with a monetary award every year for their research achievements in the TCNJ Psychology Department.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              All proceeds from the <em className="font-normal">Whisper From Noelle</em> <strong>Series</strong> go to the
            </h2>
            <h3 className="text-2xl font-bold text-gray-900">
              <em className="font-normal">Noelle Skrobola 16&apos; Research Scholar Award</em>
            </h3>
          </div>
        </div>

        {/* How To Donate Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            How To Donate
          </h2>
          <div className="w-24 h-1 bg-whisper-blue mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                You can go to the{' '}
                <a
                  href="https://give.tcnj.edu/give-now/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whisper-blue hover:text-whisper-blue-darker font-semibold underline"
                >
                  TCNJ Give Now page
                </a>
                {' '}and using the drop-down select <strong>OTHER</strong> and enter &ldquo;<em className="font-semibold">Noelle Skrobola &apos;16 Research Scholar Award</em>&rdquo;
              </p>
            </div>
            
            <div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/tcnj-award.jpg"
                alt="TCNJ, Noelle Skrobola Outstanding Research Scholar Award"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
