import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 'book-announcement-grandma-you-give-me-courage',
    slug: 'book-announcement-grandma-you-give-me-courage',
    title: 'Book Announcement: Grandma, You Give Me Courage',
    date: 'September 5, 2023',
    image: '/grandma-announcement.png',
    excerpt: 'Elevate Family Bonds with Our New Book',
    content: 'Elevate Family Bonds with Our New Book',
  },
  {
    id: 'childrens-picture-book-template',
    slug: 'childrens-picture-book-template',
    title: 'Children\'s Picture book Template',
    date: 'February 25, 2023',
    image: '/template-whisper.png',
    excerpt: 'If you\'ve ever thought about writing a children\'s picture book, you know it\'s more complex than just putting some words and pictures together. Creating a successful children\'s book requires careful planning, attention to...',
    content: 'If you\'ve ever thought about writing a children\'s picture book, you know it\'s more complex than just putting some words and pictures together. Creating a successful children\'s book requires careful planning, attention to detail, and a deep understanding of your young audience. We are excited to share our children\'s picture book template with you. We developed the template based on our experience writing and publishing children\'s books. We designed it to help you succeed in creating a manuscript to be used by your illustrator and publisher. Remember to take your time and carefully consider each element of your book. With patience, persistence, and creativity, you can create a book that kids will treasure for years.',
  },
];

export default function BlogPage() {
  return (
    <div className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Whisper Blog
        </h1>
        <div className="w-24 h-1 bg-whisper-blue mx-auto mb-12"></div>
        
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <Link href={`/blog/${post.slug}`}>
                {post.image && (
                  <div className="relative w-full h-64 md:h-80 bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                )}
                
                <div className="p-8">
                  <div className="mb-4">
                    <time className="text-gray-500 text-sm">
                      {post.date}
                    </time>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-whisper-blue transition">
                    {post.title}
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="text-lg mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <span className="text-whisper-blue hover:text-whisper-blue-darker font-semibold">
                    Read more →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
