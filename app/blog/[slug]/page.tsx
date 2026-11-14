import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogPosts = [
  {
    id: 'book-announcement-grandma-you-give-me-courage',
    slug: 'book-announcement-grandma-you-give-me-courage',
    title: 'Book Announcement: Grandma, You Give Me Courage',
    date: 'September 5, 2023',
    image: '/grandma-announcement.png',
    excerpt: 'Elevate Family Bonds with Our New Book',
    content: (
      <>
        <p className="mb-6 text-lg">
          Elevate Family Bonds with Our New Book
        </p>
        <p className="mb-6">
          We are pleased to announce the launch of our 4th book in the Whisper series, &ldquo;Grandma, You Give Me Courage: Another Whisper From Noelle.&rdquo; This new installment aims to enrich your family connections and extend the series&apos; legacy of emotional wisdom.
        </p>

        <h2 className="mt-8 mb-4 font-display text-2xl font-semibold text-ink">
          The Journey So Far
        </h2>
        <p className="mb-6">
          The Whisper series has been a journey of joy and fulfillment, enabling us to explore and celebrate the power of family bonds. The series began with &ldquo;A Whisper From Noelle,&rdquo; focusing on the art of presence and emotional navigation between parents and children. Subsequent books have delved into empathy and active listening.
        </p>

        <h2 className="mt-8 mb-4 font-display text-2xl font-semibold text-ink">
          What&apos;s New?
        </h2>
        <p className="mb-6">
          &ldquo;Grandma, You Give Me Courage&rdquo; takes you on a new journey, exploring the wisdom of stepping out of your comfort zone. This book will guide you and your loved ones in mastering emotional and value-based explorations.
        </p>

        <h2 className="mt-8 mb-4 font-display text-2xl font-semibold text-ink">
          Bonus Material
        </h2>
        <p className="mb-6">
          To enhance your reading experience, each purchase includes a complimentary PDF activity book designed to add creativity and interactive learning.{' '}
          <a
            href="#"
            className="font-semibold text-whisper-blue-deep underline-offset-2 hover:underline"
          >
            Download
          </a>
        </p>

        <h2 className="mt-8 mb-4 font-display text-2xl font-semibold text-ink">
          Support a Cause
        </h2>
        <p className="mb-6">
          In alignment with International Charity Day, all proceeds from our book sales will benefit the College of New Jersey (TCNJ). Your purchase directly supports psychology students and their groundbreaking research.
        </p>

        <h2 className="mt-8 mb-4 font-display text-2xl font-semibold text-ink">
          How to Purchase
        </h2>
        <p className="mb-6">
          To secure your copy and contribute to this meaningful cause,{' '}
          <a
            href="https://amzn.to/3PqVp9V"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-whisper-blue-deep underline-offset-2 hover:underline"
          >
            click here
          </a>
          .
        </p>

        <p className="mb-6">
          Your support is vital in the continued success and evolution of the Whisper series. For more information, visit our website.
        </p>

        <p className="mb-6 text-lg font-semibold text-ink">
          Elevate your family bonds and contribute to a noble cause. Get your copy today.
        </p>
      </>
    ),
  },
  {
    id: 'childrens-picture-book-template',
    slug: 'childrens-picture-book-template',
    title: 'Children\'s Picture book Template',
    date: 'February 25, 2023',
    image: '/template-whisper.png',
    excerpt: 'If you\'ve ever thought about writing a children\'s picture book, you know it\'s more complex than just putting some words and pictures together. Creating a successful children\'s book requires careful planning, attention to...',
    content: (
      <>
        <p className="mb-6">
          If you&apos;ve ever thought about writing a children&apos;s picture book, you know it&apos;s more complex than just putting some words and pictures together. Creating a successful children&apos;s book requires careful planning, attention to detail, and a deep understanding of your young audience.
        </p>
        <p className="mb-6">
          We are excited to share our children&apos;s picture book template with you. We developed the template based on our experience writing and publishing children&apos;s books. We designed it to help you succeed in creating a manuscript to be used by your illustrator and publisher.
        </p>
        <p className="mb-6">
          Remember to take your time and carefully consider each element of your book. With patience, persistence, and creativity, you can create a book that kids will treasure for years.
        </p>
        <div className="mt-8 rounded-2xl border-l-4 border-gold bg-sky/60 p-6">
          <h3 className="mb-2 font-display text-xl font-semibold text-ink">
            Template:{' '}
            <a
              href="https://docs.google.com/document/d/1tG-_VVYRK8dNZZDr8gh5CrqNU2ujyxuOpKwHsmqBsmc/edit?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-whisper-blue-deep underline-offset-2 hover:underline"
            >
              Children&apos;s Picture Book Manuscript Template
            </a>
          </h3>
        </div>
      </>
    ),
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="paper-wash min-h-screen py-16 px-4 md:py-20">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="mb-6 inline-block font-semibold text-whisper-blue-deep underline-offset-2 hover:underline"
        >
          ← Back to Blog
        </Link>

        <article className="overflow-hidden rounded-3xl bg-paper shadow-soft ring-1 ring-whisper-blue/40">
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

          <div className="p-8 md:p-10">
            <time className="text-sm font-semibold uppercase tracking-wider text-whisper-blue-deep">
              {post.date}
            </time>

            <h1 className="mt-3 mb-6 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {post.title}
            </h1>

            <div className="max-w-none text-lg leading-relaxed text-ink-muted">
              {typeof post.content === 'string' ? <p>{post.content}</p> : post.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
