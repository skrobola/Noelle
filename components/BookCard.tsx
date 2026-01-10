import Image from 'next/image';
import { Book } from '@/types/book';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {book.image && (
        <div className="relative w-full h-64 md:h-80 bg-gray-100">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-8">
        {book.isNew && (
          <span className="inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
            NEW
          </span>
        )}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{book.title}</h3>
        {book.subtitle && (
          <p className="text-lg text-gray-700 mb-4">{book.subtitle}</p>
        )}
        <p className="text-gray-600 leading-relaxed mb-4">{book.description}</p>
        {book.extendedDescription && (
          <p className="text-gray-600 leading-relaxed mb-4">{book.extendedDescription}</p>
        )}
        {book.hasActivityPDF && (
          <div className="mt-4">
            <a
          href="https://awhisperfromnoelle.com/downloads#250525ae-72b8-40dc-b984-79c31fb44bab" target="_blank" 

              className="text-whisper-blue hover:text-whisper-blue-darker font-semibold underline"
            >
              Download Activity PDF
            </a>
          </div>
        )}
        <div className="mt-6">
          <a
            href={book.link} target="_blank" 
            className="inline-block bg-whisper-blue hover:bg-whisper-blue-dark text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
