import BookCard from './BookCard';

const books = [
  {
    id: 'grandma-courage',
    title: 'Grandma, You Give Me Courage',
    subtitle: 'Another Whisper From Noelle',
    description:
      'Follow Ashley-Ann as Noelle helps her step boldly outside her comfort zone—embracing adventures that mirror the spirit of her cherished Grandma.',
    extendedDescription:
      "This story celebrates understanding emotions—teaching children that courage isn't the absence of fear, but the wisdom to feel deeply and act bravely. Families discover the bonds that grow when we honor our feelings.",
    isNew: true,
    hasActivityPDF: true,
    image: '/grandma-book.png',
    link: 'https://amzn.to/45QaB6B',
  },
  {
    id: 'daddy-listening',
    title: 'Daddy Are You Listening',
    description:
      'Ashley-Ann feels unheard until Noelle whispers a gentle truth: Daddy is trying to listen—and she can help bridge the gap with love.',
    extendedDescription:
      'A touching story about the gift of truly listening and being heard. Families learn that understanding each other’s needs creates deeper connections.',
    image: '/daddy-book.png',
    link: 'https://amzn.to/3XGn9IG',
  },
  {
    id: 'grandpa-worry',
    title: "Grandpa Don't Worry",
    description:
      'Noelle helps Ashley-Ann see that Grandpa has feelings too—he worries, he cares, and he wants to share love, strength, and kindness.',
    extendedDescription:
      'A tender reminder that adults have feelings too, and that mutual understanding strengthens family bonds through “Loving Lessons.”',
    image: '/grandpa-book.png',
    link: 'https://amzn.to/3ZsHbVZ',
  },
  {
    id: 'whisper-noelle',
    title: 'A Whisper from Noelle',
    description:
      'The book that started it all: one magical night, Noelle brings Ashley-Ann loving whispers—precious gifts of emotional wisdom to share with Mommy.',
    extendedDescription:
      'An introduction to emotional awareness: knowing how to feel brings kindness, compassion, courage, and the freedom to be authentically yourself.',
    image: '/whisper-book.png',
    link: 'https://amzn.to/3XGn9IG',
  },
];

export default function BookShowcase() {
  return (
    <section id="books" className="scroll-mt-20 bg-paper py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="section-heading">The Whisper From Noelle Series</h2>
          <p className="section-lead">
            Four picture books that invite children and grown-ups to feel, listen, and love more deeply.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
