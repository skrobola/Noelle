import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[min(92vh,860px)] overflow-hidden sky-gradient">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-[min(92vh,860px)] max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:gap-4 md:px-8 md:py-20">
        <div className="animate-fade-up z-10 order-2 text-center md:order-1 md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-whisper-blue-deep">
            Children&apos;s books for the heart
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-ink text-balance md:text-6xl lg:text-7xl">
            A Whisper From Noelle
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted md:text-xl mx-auto md:mx-0">
            Gentle stories that help families explore feelings, listening, and love—together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link href="#books" className="btn-primary">
              Explore the books
            </Link>
            <a
              href="https://amzn.to/44DyEUO"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Buy latest
            </a>
          </div>
        </div>

        <div className="relative order-1 flex items-center justify-center md:order-2 md:justify-end">
          <div
            className="absolute h-64 w-64 rounded-full bg-gold-soft/50 blur-3xl md:h-80 md:w-80"
            aria-hidden
          />
          <div className="animate-float-slow relative w-full max-w-lg md:max-w-xl">
            <Image
              src="/NoelleWhisper2.png"
              alt="Noelle, a gentle angel whispering hope"
              width={600}
              height={381}
              priority
              className="img-knockout h-auto w-full drop-shadow-sm"
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
