import Image from 'next/image';

export default function OurStory() {
  return (
    <section className="relative overflow-hidden paper-wash py-20 px-4">
      <div className="pointer-events-none absolute right-4 top-8 opacity-70 md:right-16 md:top-12">
        <Image
          src="/website_share.png"
          alt=""
          width={120}
          height={80}
          className="img-knockout animate-float-drift h-auto w-20 md:w-28"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="section-heading">Our Story</h2>
          <p className="section-lead">
            A message of hope, inspired by a child named Noelle.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-soft ring-1 ring-whisper-blue/30">
            <Image
              src="/authors.jpg"
              alt="Mark and Deirdre, Authors"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="text-lg leading-relaxed text-ink-muted">
            <p className="mb-5">
              After experiencing a family tragedy, Mark and Deirdre set out on a journey to share a
              global message of hope and heartfelt purpose. They wanted parents and children to
              discover the true meaning of the word &ldquo;feel&rdquo; and to embrace all of the
              feelings that bind families and loved ones together.
            </p>
            <p className="mb-5">
              With this story inspired by Mark&apos;s daughter and Deirdre&apos;s stepdaughter,
              Noelle, they share why &ldquo;feel&rdquo; is one of the most important words to
              explore. Families can witness the beauty that comes from the kindness, truth, and love
              of a child.
            </p>
            <p className="font-display text-xl font-medium text-ink">
              A Whisper from Noelle is a reminder of what is most precious in life . . . children
              and how they feel.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border-t border-whisper-blue/40 pt-12 md:flex-row md:items-center md:gap-10">
          <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden rounded-full ring-4 ring-sky">
            <Image
              src="/daniel-illustrator.jpg"
              alt="Daniel Klein, Illustrator"
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">About the Illustrator</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
              Daniel Klein is a passionate Brazilian illustrator. Born in Curitiba, Brazil, he has
              worked for advertising companies, publishers, newspapers, and magazines in Brazil,
              England, the USA, and Portugal. Daniel loves soccer, cycling, and illustrating
              children&apos;s books and portraits.
            </p>
            <a
              href="https://www.behance.net/danielklein"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-semibold text-whisper-blue-deep underline-offset-2 hover:underline"
            >
              View Daniel&apos;s work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
