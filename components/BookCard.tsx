'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Book } from '@/types/book';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-paper shadow-soft ring-1 ring-whisper-blue/40 transition hover:ring-whisper-blue-deep/30">
      {book.image && (
        <div className="relative aspect-[4/3] w-full bg-sky/40">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-contain p-6 transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        {book.isNew && (
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
            New
          </span>
        )}
        <h3 className="font-display text-2xl font-semibold text-ink">{book.title}</h3>
        {book.subtitle && (
          <p className="mt-1 text-base font-medium text-whisper-blue-deep">{book.subtitle}</p>
        )}
        <p className="mt-4 flex-1 leading-relaxed text-ink-muted">{book.description}</p>
        {book.extendedDescription && (
          <>
            {expanded && (
              <p className="mt-3 leading-relaxed text-ink-muted">{book.extendedDescription}</p>
            )}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-2 self-start text-sm font-semibold text-whisper-blue-deep underline-offset-2 hover:underline"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          </>
        )}
        {book.hasActivityPDF && (
          <a
            href="https://awhisperfromnoelle.com/downloads#250525ae-72b8-40dc-b984-79c31fb44bab"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm font-semibold text-whisper-blue-deep underline-offset-2 hover:underline"
          >
            Download Activity PDF
          </a>
        )}
        <div className="mt-6">
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            Buy Now
          </a>
        </div>
      </div>
    </article>
  );
}
