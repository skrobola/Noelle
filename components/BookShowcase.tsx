import BookCard from './BookCard';

const books = [
  {
    id: 'grandma-courage',
    title: 'Grandma, You Give Me Courage',
    subtitle: 'Another Whisper From Noelle',
    description: 'Discover the extraordinary journey of emotional growth and courage in this heartwarming tale. Follow Ashley-Ann as she unlocks a world of endless possibilities with the gentle guidance of her angelic friend, Noelle. Through transformative whispers, Noelle empowers Ashley-Ann to step boldly outside her comfort zone, embracing thrilling adventures that mirror the indomitable spirit of her cherished Grandma.',
    extendedDescription: 'This beautiful story celebrates the profound achievement of understanding emotions—teaching children that courage isn&apos;t the absence of fear, but the wisdom to feel deeply and act bravely anyway. Parents and children will discover together the unbreakable bonds that unite families when we truly embrace our emotions. &ldquo;Grandma You Give Me Courage&rdquo; is a testament to the remarkable beauty that unfolds when children learn to recognize, honor, and express their feelings, creating lasting connections that truly matter.',
    isNew: true,
    hasActivityPDF: true,
    image: '/grandma-book.png',
    link: 'https://amzn.to/45QaB6B'
  },
  {
    id: 'daddy-listening',
    title: 'Daddy Are You Listening',
    description: 'Experience the powerful moment when a child learns to bridge the emotional gap between generations. While walking in the park, Ashley-Ann feels unheard as she shares her week&apos;s exciting events, noticing her daddy&apos;s mind is elsewhere. But when her angel friend Noelle whispers a profound truth—that her daddy is trying to listen and needs her help—everything changes.',
    extendedDescription: 'This touching story illuminates one of life\'s greatest emotional achievements: the ability to truly listen and be heard. Through Noelle\'s gentle guidance, Ashley-Ann learns that listening is the foundation of caring, kindness, and understanding. Families will discover together how recognizing and responding to each other\'s emotional needs creates deeper connections. This book helps children achieve emotional intelligence by teaching them that understanding others begins with understanding ourselves.',
    image: '/daddy-book.png',
    link: 'https://amzn.to/3XGn9IG'
  },
  {
    id: 'grandpa-worry',
    title: 'Grandpa Don\'t Worry',
    description: 'Witness a beautiful breakthrough in emotional understanding as Ashley-Ann receives a special visit from her angel friend Noelle. Through loving whispers, Ashley-Ann learns a profound lesson: Grandpa has feelings too. He worries, he cares, and he wants to share the importance of family values—love, strength, caring, and kindness.',
    extendedDescription: 'This tender story celebrates the emotional achievement of recognizing that adults have feelings too, and that understanding each other\'s emotions creates stronger family bonds. As Ashley-Ann learns these "Loving Lessons" from Noelle, families everywhere will discover the joy that comes from emotional awareness and mutual understanding. This book helps children achieve emotional maturity by teaching them to see beyond themselves and recognize the emotional world of those they love.',
    image: '/grandpa-book.png',
    link: 'https://amzn.to/3ZsHbVZ'
  },
  {
    id: 'whisper-noelle',
    title: 'A Whisper from Noelle',
    description: 'Begin the journey of emotional discovery with the book that started it all. One magical night, Ashley-Ann receives a visit from an angel named Noelle, who brings a series of loving whispers—each one a precious gift of emotional wisdom. As Ashley-Ann shares these whispers with her mommy, readers discover the transformative power of understanding feelings.',
    extendedDescription: 'This foundational story introduces children to the profound achievement of emotional awareness. Through Noelle\'s gentle guidance, children learn that knowing how to feel—truly understanding and expressing emotions—brings kindness, compassion, courage, and the beautiful ability to be authentically themselves. This nurturing story helps children achieve emotional literacy, the first step toward a lifetime of healthy relationships and emotional well-being.',
    image: '/whisper-book.png',
    link: 'https://amzn.to/3XGn9IG'
  },
];

export default function BookShowcase() {
  return (
    <section id="books" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          The Whisper From Noelle Series
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Buy Our Books</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {books.map((book) => (
              <a
                key={book.id}
                href={book.link} target="_blank" 
                className="bg-whisper-blue hover:bg-whisper-blue-dark text-white font-semibold px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg"
              >
                {book.title} - Buy Now
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
