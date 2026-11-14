import Image from 'next/image';

export default function GivingPage() {
  return (
    <div className="paper-wash min-h-screen py-16 px-4 md:py-20">
      <div className="mx-auto max-w-6xl">
        <section className="sky-gradient mb-16 rounded-3xl px-6 py-14 text-center shadow-soft md:px-12">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
            All proceeds from our books go to a TCNJ Award
          </h1>
        </section>

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          <div className="text-lg leading-relaxed text-ink-muted">
            <p className="mb-6">
              In 2015, the TCNJ Psychology Department created the Outstanding Research Scholar Award,
              later named the Noelle Skrobola Outstanding Research Scholar Award. Noelle was the
              first recipient of this award for her work with Dr. Jessica Barnack-Tavlaris. She was
              involved in research every semester starting her freshman year, co-authored multiple
              conference presentations, and received a research grant from Psi Chi for her Senior
              Honors Thesis.
            </p>
            <p>
              Today, the{' '}
              <em className="font-semibold text-ink">
                Noelle Skrobola &apos;16 Research Scholar Award
              </em>{' '}
              recognizes recipients with a monetary award every year for their research achievements
              in the TCNJ Psychology Department.
            </p>
          </div>

          <div className="rounded-3xl bg-paper p-8 shadow-soft ring-1 ring-whisper-blue/40">
            <p className="text-lg leading-relaxed text-ink-muted">
              All proceeds from the{' '}
              <em className="font-medium text-ink">Whisper From Noelle</em> Series go to the
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-whisper-blue-deep md:text-3xl">
              Noelle Skrobola &apos;16 Research Scholar Award
            </h2>
          </div>
        </div>

        <section className="mt-8">
          <div className="mb-12 text-center">
            <h2 className="section-heading">How To Donate</h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold" />
          </div>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="text-lg leading-relaxed text-ink-muted">
              <p>
                You can go to the{' '}
                <a
                  href="https://give.tcnj.edu/give-now/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-whisper-blue-deep underline-offset-2 hover:underline"
                >
                  TCNJ Give Now page
                </a>{' '}
                and using the drop-down select <strong className="text-ink">OTHER</strong> and enter
                &ldquo;
                <em className="font-semibold text-ink">
                  Noelle Skrobola &apos;16 Research Scholar Award
                </em>
                &rdquo;
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-sky/40 shadow-soft ring-1 ring-whisper-blue/30">
              <Image
                src="/tcnj-award.jpg"
                alt="TCNJ, Noelle Skrobola Outstanding Research Scholar Award"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
