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
    title: "Children's Picture book Template",
    date: 'February 25, 2023',
    image: '/template-whisper.png',
    excerpt:
      "If you've ever thought about writing a children's picture book, you know it's more complex than just putting some words and pictures together. Creating a successful children's book requires careful planning, attention to...",
    content:
      "If you've ever thought about writing a children's picture book, you know it's more complex than just putting some words and pictures together. Creating a successful children's book requires careful planning, attention to detail, and a deep understanding of your young audience. We are excited to share our children's picture book template with you. We developed the template based on our experience writing and publishing children's books. We designed it to help you succeed in creating a manuscript to be used by your illustrator and publisher. Remember to take your time and carefully consider each element of your book. With patience, persistence, and creativity, you can create a book that kids will treasure for years.",
  },
];

export default function BlogPage() {
  return (
    <div className="paper-wash min-h-screen py-16 px-4 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <h1 className="section-heading">Whisper Blog</h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold" />
        </div>

        <div className="space-y-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-3xl bg-paper shadow-soft ring-1 ring-whisper-blue/40 transition hover:ring-whisper-blue-deep/30"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {post.image && (
                  <div className="relative aspect-[16/9] w-full bg-sky/40">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                )}

                <div className="p-8">
                  <time className="text-sm font-semibold uppercase tracking-wider text-whisper-blue-deep">
                    {post.date}
                  </time>

                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink transition hover:text-whisper-blue-deep md:text-3xl">
                    {post.title}
                  </h2>

                  <p className="mt-4 text-lg leading-relaxed text-ink-muted">{post.excerpt}</p>

                  <span className="mt-6 inline-block font-semibold text-whisper-blue-deep">
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
